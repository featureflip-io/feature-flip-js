/* eslint-disable @typescript-eslint/no-empty-interface */
import { Base } from './base';
import { FeatureFlag } from './features/types';
import { Features } from './features';
import { applyMixins } from './utils';

class FeatureFlip extends Base {}
interface FeatureFlip extends Features {}

applyMixins(FeatureFlip, [Features]);

export { FeatureFlag };

export default FeatureFlip;
