export interface Feature {
  id: string;
  slug: string;
  name: string;
  description: string;
  enabled: boolean;
}

export type Features = Feature[];

export type FeatureMap = Record<string, Feature>;

export type FeatureIndex = Record<string, string>;
