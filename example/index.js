import FeatureFlip from 'feature-flip-js';

const localFeatureList = [
  {
    id: '1',
    slug: 'feature-flip-1',
    token: 'feature_flip_1',
    description: 'This is my test feature',
    enabled: true,
  },
];

const FeatureFlipClient = new FeatureFlip({ features: localFeatureList });

const allFeatures = FeatureFlipClient.getFeaturesMap();
console.log('allFeatures', allFeatures);

const featureBySlug = FeatureFlipClient.getFeatureBySlug('feature-flip-1');
console.log('featureBySlug', featureBySlug);

const featureByInvalidSlug = FeatureFlipClient.getFeatureBySlug('invalid-slug');
console.log('featureByInvalidSlug', featureByInvalidSlug);

const featureById = FeatureFlipClient.getFeatureById('1');
console.log('featureById', featureById);

const featureByInvalidId = FeatureFlipClient.getFeatureById('invalid-id');
console.log('featureByInvalidId', featureByInvalidId);
