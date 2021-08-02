import FeatureFlip from 'feature-flip-js';

const localFeatureList = [
  {
    id: '1',
    slug: 'feature-flip-1',
    name: 'feature-flip-1',
    description: 'This is my test feature',
    enabled: true,
  },
];

const FeatureFlipClient = new FeatureFlip({ features: localFeatureList });

const allFeatures = FeatureFlipClient.getFeaturesMap();

const featureBySlug = FeatureFlipClient.getFeatureBySlug('feature-flip-1');

const featureByInvalidSlug = FeatureFlipClient.getFeatureBySlug('invalid-slug');

const featureById = FeatureFlipClient.getFeatureById('1');

const featureByInvalidId = FeatureFlipClient.getFeatureById('invalid-id');

console.log('allFeatures', allFeatures);
console.log('featureBySlug', featureBySlug);
console.log('featureByInvalidSlug', featureByInvalidSlug);
console.log('featureById', featureById);
console.log('featureByInvalidId', featureByInvalidId);
