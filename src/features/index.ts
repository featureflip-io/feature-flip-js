import { Base } from '../base';
import { FeatureFlag, FeatureMap } from './types';

export class Features extends Base {
  getFeaturesMap(): FeatureMap {
    return this.getBaseFeaturesByTokenMap();
  }

  getFeatureByToken(value: string, enabled = false): FeatureFlag {
    return this.getBaseFeatureByProp('token', value, enabled);
  }

  getFeatureBySlug(value: string, enabled = false): FeatureFlag {
    return this.getBaseFeatureByProp('slug', value, enabled);
  }

  getFeatureById(value: string, enabled = false): FeatureFlag {
    return this.getBaseFeatureByProp('id', value, enabled);
  }
}
