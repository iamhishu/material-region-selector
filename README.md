# material-region-selector

> material-ui region-selector

[![NPM](https://img.shields.io/npm/v/material-region-selector.svg)](https://www.npmjs.com/package/material-region-selector) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## About
This library offers a set of React elements that allow for displaying interlinked dropdown menus for countries and regions (select a country, and it displays the corresponding regions)
## Installation
```ruby
npm i material-region-selector
yarn add material-region-selector
```

## Usage

It is highly user-friendly, however, do keep in mind that you will be required to keep track of the country and region values. This can be done either by storing them in your component's state or in a separate store. Below is a basic example that utilizes component state:


```bash
import React, { Component } from 'react';
import { RegionSelector, CountrySelector } from 'material-region-selector';

const App = () => {
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');

  const onChange = (country, e) => setCountry(country)
  const onStateChange = (region, e) => setRegion(region)

  return <div style={{ width: '300px' }}>
    <CountrySelector
      value={country}
      onChange={onChange}
    />
    <RegionSelector
      country={country}
      value={region}
      onChange={onStateChange}
    />
  </div>
}

export default App
```

## License

MIT © [iamhishu](https://github.com/iamhishu)
