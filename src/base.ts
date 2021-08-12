import {
  FeatureFlag,
  FeatureIndex,
  FeatureMap,
  Features,
} from './features/types';

type Config = {
  features: Features;
};

// a disabled Feature with the token supplied
const nullFeature = (token: string, enabled = false): FeatureFlag => ({
  id: token,
  slug: token,
  token,
  enabled,
  description: 'This feature is not defined.',
});

// reduce the Features Array by a given keyProp and optional valueProp (index record).
const reduceFeaturesByProp = <T>(
  features: Features,
  keyProp: string,
  valueProp?: string
): T =>
  features.reduce((acc: T, current: FeatureFlag) => {
    acc[current[keyProp]] = valueProp ? current[valueProp] : current;
    return acc;
  }, {} as T);

export abstract class Base {
  private featuresByToken: FeatureMap;
  private featuresBySlug: FeatureIndex;
  private featuresById: FeatureIndex;

  constructor(config: Config) {
    this.featuresByToken = config.features
      ? reduceFeaturesByProp(config.features, 'token')
      : {};

    this.featuresBySlug = config.features
      ? reduceFeaturesByProp(config.features, 'slug', 'token')
      : {};

    this.featuresById = config.features
      ? reduceFeaturesByProp(config.features, 'id', 'token')
      : {};
  }

  protected getBaseFeaturesByTokenMap(): FeatureMap {
    return this.featuresByToken;
  }

  protected getBaseFeatureByProp(
    propName: string,
    value: string,
    enabled = false
  ): FeatureFlag {
    const featureTokenOrNullFeature = (token: string) =>
      token ? this.featuresByToken[token] : nullFeature(value, enabled);

    const featureOrNullFeature = (feature: FeatureFlag) =>
      feature ? feature : nullFeature(value, enabled);

    switch (propName) {
      case 'token':
        return featureOrNullFeature(this.featuresByToken[value]);
      case 'slug':
        return featureTokenOrNullFeature(this.featuresBySlug[value]);
      case 'id':
        return featureTokenOrNullFeature(this.featuresById[value]);
      default:
        return nullFeature(value, enabled);
    }
  }
}
