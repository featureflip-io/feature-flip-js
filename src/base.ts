import { Feature, FeatureIndex, FeatureMap, Features } from './features/types';

type Config = {
  features: Features;
};

// a disabled Feature with the name supplied
const nullFeature = (name: string, enabled = false): Feature => ({
  id: name,
  slug: name,
  name,
  enabled,
  description: 'This feature is not defined.',
});

// reduce the Features Array by a given keyProp and optional valueProp (index record).
const reduceFeaturesByProp = <T>(
  features: Features,
  keyProp: string,
  valueProp?: string
): T =>
  features.reduce((acc: T, current: Feature) => {
    acc[current[keyProp]] = valueProp ? current[valueProp] : current;
    return acc;
  }, {} as T);

export abstract class Base {
  private featuresByName: FeatureMap;
  private featuresBySlug: FeatureIndex;
  private featuresById: FeatureIndex;

  constructor(config: Config) {
    this.featuresByName = config.features
      ? reduceFeaturesByProp(config.features, 'name')
      : {};

    this.featuresBySlug = config.features
      ? reduceFeaturesByProp(config.features, 'slug', 'name')
      : {};

    this.featuresById = config.features
      ? reduceFeaturesByProp(config.features, 'id', 'name')
      : {};
  }

  protected getBaseFeaturesByNameMap(): FeatureMap {
    return this.featuresByName;
  }

  protected getBaseFeatureByProp(
    propName: string,
    value: string,
    enabled = false
  ): Feature {
    const featureNameOrNullFeature = (name: string) =>
      name ? this.featuresByName[name] : nullFeature(value, enabled);

    const featureOrNullFeature = (feature: Feature) =>
      feature ? feature : nullFeature(value, enabled);

    switch (propName) {
      case 'name':
        return featureOrNullFeature(this.featuresByName[value]);
      case 'slug':
        return featureNameOrNullFeature(this.featuresBySlug[value]);
      case 'id':
        return featureNameOrNullFeature(this.featuresById[value]);
      default:
        return nullFeature(value, enabled);
    }
  }
}
