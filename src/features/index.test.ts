import FeatureFlip from '..';

const featureOne = {
  id: '1',
  slug: 'feature-flip-1',
  name: 'feature-flip',
  description: 'This is my test feature',
  enabled: true,
};

const localFeatureList = [featureOne];

describe('Features', () => {
  const FeatureFlipClient = new FeatureFlip({ features: localFeatureList });

  describe('getFeaturesMap', () => {
    it('should return a map of the features', () => {
      expect(FeatureFlipClient.getFeaturesMap()).toEqual({
        'feature-flip': featureOne,
      });
    });
  });

  describe('featureByName', () => {
    it('should return the feature for a given name', () => {
      expect(FeatureFlipClient.getFeatureByName('feature-flip')).toEqual(
        featureOne
      );
    });
    it('should return the null feature when not found', () => {
      const { name, enabled } = FeatureFlipClient.getFeatureByName('invalid');
      expect(name).toEqual('invalid');
      expect(enabled).toBeFalsy();
    });
  });

  describe('featureBySlug', () => {
    it('should return the feature for a given slug', () => {
      expect(FeatureFlipClient.getFeatureBySlug('feature-flip-1')).toEqual(
        featureOne
      );
    });
    it('should return the null feature when not found', () => {
      const { name, enabled } = FeatureFlipClient.getFeatureBySlug('invalid');
      expect(name).toEqual('invalid');
      expect(enabled).toBeFalsy();
    });
  });

  describe('featureById', () => {
    it('should return the feature for a given id', () => {
      expect(FeatureFlipClient.getFeatureById('1')).toEqual(featureOne);
    });

    it('should return the null feature when not found', () => {
      const { name, enabled } = FeatureFlipClient.getFeatureById('invalid');
      expect(name).toEqual('invalid');
      expect(enabled).toBeFalsy();
    });
  });
});
