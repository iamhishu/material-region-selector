import React, { useState } from 'react'
import { RegionSelector, TestComponent } from 'material-region-selector'
import 'material-region-selector/dist/index.css'

const App = () => {
  const [value, setValue] = useState('');
  const [state, setState] = useState('');

  const onChange = (country, e) => setValue(country)
  const onStateChange = (state, e) => setState(state)

  return <div style={{ width: '300px' }}>
    <TestComponent
      showCountryFlag
      shortCode

      // label="dhsaiasiufhsiu"
      //  labelProps={{ className: 'testClassname', style: { textTransform: 'uppercase' } }}
      //inputProps={{ className: 'selectorInput', style: { borderColor: 'red' } }}
      value={value}
      onChange={onChange}
      disabledCountrySelect={'india'}
    />


    <RegionSelector
      country={value}
      shortCode
      showLabel
      label=""
      value={state}
      onChange={onStateChange}
      labelProps={{ className: 'testClassname', style: { textTransform: 'uppercase' } }}
      inputProps={{ className: 'selectorInput', style: { borderColor: 'red' } }}
    />
  </div>
}

export default App
