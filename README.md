# react-country-region-flag-selector

This library offers a set of React elements that allow for displaying interlinked dropdown menus for countries(with flag/without flag) and regions (select a country, and it displays the corresponding regions)

## Installation

```ruby
npm i react-country-region-flag-selector
yarn add react-country-region-flag-selector
```

## Basic Usage

It is highly user-friendly, however, do keep in mind that you will be required to keep track of the country and region values. This can be done either by storing them in your component's state or in a separate store. Below is a basic example that utilizes component state:

```bash
import React, { Component } from 'react';
import { RegionSelector, CountrySelector } from 'react-country-region-flag-selector';

const App = () => {
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');


  return (
  <CountrySelector
    showCountryFlag
          label="Select Country"
      value={country}
      onChange={setCountry}
    />
   <RegionSelector
      label="Select Region"
      country={country}
      value={region}
      onChange={setRegion}
    />
    )
}

export default App
```
