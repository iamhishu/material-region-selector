import React, { useState } from 'react'
import { RegionSelector, CountrySelector } from 'material-region-selector'
import 'material-region-selector/dist/index.css'

const App = () => {
  const [value, setValue] = useState('');
  const [state, setState] = useState('');

  const onChange = (country, e) => setValue(country)
  const onStateChange = (state, e) => setState(state)


  console.log(value, state)

  return <div style={{ width: '300px' }}>
    <CountrySelector
      disabled
      showCountryFlag
      shortCode

      // label="dhsaiasiufhsiu"
      //  labelProps={{ className: 'testClassname', style: { textTransform: 'uppercase' } }}
      //inputProps={{ className: 'selectorInput', style: { borderColor: 'red' } }}
      value={value}
      onChange={onChange}
      disabledCountrySelect={'india'}
      leadingCountries={["in"]}
      allowcountry={["us", "af", "germany", "in", "cn"]}

    />


    <RegionSelector
      country={value}
      // shortCode
      showLabel
      label=""
      value={state}
      onChange={onStateChange}
      labelProps={{ className: 'testClassname', style: { textTransform: 'uppercase' } }}
      inputProps={{ className: 'selectorInput', style: { borderColor: 'red' } }}
      // customOptions={[{
      //   name: '--Thaliwal', shortIdentifier: '--TW',
      // },
      // {
      //   name: '--nangal Khurd', shortIdentifier: '--NH',
      // }
      // ]}
      whitelist={{
        CA: ["BC", "AB", "MB"],
        US: ["washington", "Oregon", "Illinois"],
        in: ['hp', "punjab"],
      }}

    />
  </div>
}

export default App
