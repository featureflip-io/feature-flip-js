<h1 align="center">
@featureflip-io/feature-flip-js
</h1>

## ✨ Features:

- Local feature flag management
- Undefined feature failover

## 🔧 Installation

```bash
npm i @featureflip-io/feature-flip-js
```

## </> FeatureFlag

```js
{
  id: string; // 123
  name: string; // my-feature
  slug: string; // my-feature-123
  description: string; // My new feature
  enabled: boolean; // on/off switch
}
```

## 🌐 Basic usage

```js
import FeatureFlipJS, { FeatureFlag } from '@featureflip-io/feature-flip-js';

const features: FeatureFlag[] = [
  {
    id: '1234',
    name: 'my-feature',
    slug: 'my-feature-1234',
    enabled: !isProduction,
    description: 'My feature',
  },
]

const featureFlags = new FeatureFlipJS({ features });

const { enabled: myFeatureEnabled } = featureFlags.getFeatureByName('my-feature');

if (myFeatureEnabled) {
  ...
}

```

## ❗Failover

Accessing a feature that is not defined will return a null FeatureFlag with `enabled: false`

```js
const { enabled: failFeatureEnabled } = featureFlags.getFeatureByName('fail');
// enabled will be false
```

## 💂‍♂️ Accessors

```js
// Returns the feature flags as an object
// where the feature flag name is the object key
featureFlags.getFeaturesMap();

// Access by the id property
featureFlags.getFeatureById('1234');

// Access by the slug property
featureFlags.getFeatureBySlug('my-feature-1234');

// Access by the name property
featureFlags.getFeatureByName('my-feature');
```
