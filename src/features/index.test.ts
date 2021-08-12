import FeatureFlip from '..';

const featureOne = {
  id: '1',
  slug: 'feature-flip-1',
  token: 'feature_flip_1',
  description: 'This is my test feature',
  enabled: true,
};

const localFeatureList = [featureOne];

describe('Features', () => {
  const FeatureFlipClient = new FeatureFlip({ features: localFeatureList });

  describe('getFeaturesMap', () => {
    it('should return a map of the features', () => {
      expect(FeatureFlipClient.getFeaturesMap()).toEqual({
        feature_flip_1: featureOne,
      });
    });
  });

  describe('featureByToken', () => {
    it('should return the feature for a given token', () => {
      expect(FeatureFlipClient.getFeatureByToken('feature_flip_1')).toEqual(
        featureOne
      );
    });
    it('should return the null feature when not found', () => {
      const { token, enabled } = FeatureFlipClient.getFeatureByToken('invalid');
      expect(token).toEqual('invalid');
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
      const { token, enabled } = FeatureFlipClient.getFeatureBySlug('invalid');
      expect(token).toEqual('invalid');
      expect(enabled).toBeFalsy();
    });
  });

  describe('featureById', () => {
    it('should return the feature for a given id', () => {
      expect(FeatureFlipClient.getFeatureById('1')).toEqual(featureOne);
    });

    it('should return the null feature when not found', () => {
      const { token, enabled } = FeatureFlipClient.getFeatureById('invalid');
      expect(token).toEqual('invalid');
      expect(enabled).toBeFalsy();
    });
  });
});
