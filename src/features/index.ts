import { Base } from '../base';
import { Feature, FeatureMap } from './types';

export class Features extends Base {
  getFeaturesMap(): FeatureMap {
    return this.getBaseFeaturesByNameMap();
  }

  getFeatureByName(value: string, enabled = false): Feature {
    return this.getBaseFeatureByProp('name', value, enabled);
  }

  getFeatureBySlug(value: string, enabled = false): Feature {
    return this.getBaseFeatureByProp('slug', value, enabled);
  }

  getFeatureById(value: string, enabled = false): Feature {
    return this.getBaseFeatureByProp('id', value, enabled);
  }
}
