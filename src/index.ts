import { Base } from './base';
import { Features } from './features';
import { applyMixins } from './utils';

class FeatureFlip extends Base {}
interface FeatureFlip extends Features {}
applyMixins(FeatureFlip, [Features]);

export default FeatureFlip;
