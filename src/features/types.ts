export interface FeatureFlag {
  id: string;
  slug: string;
  name: string;
  description: string;
  enabled: boolean;
}

export type Features = FeatureFlag[];

export type FeatureMap = Record<string, FeatureFlag>;

export type FeatureIndex = Record<string, string>;
