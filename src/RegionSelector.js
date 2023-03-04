import React, { useEffect, useState } from 'react'
import { SelectBoxWrapper, SelectBox, Option, Label } from './SelectBox'
import { allCountries } from 'country-region-data'

const RegionSelector = ({
  country,
  label,
  value,
  onChange,
  labelProps,
  inputProps,
  disabled,
  showLabel,
  shortCode
}) => {
  const index = allCountries.findIndex(
    (c, i) =>
      c[1].toLowerCase() === country.toLowerCase() ||
      c[0].toLowerCase() === country.toLowerCase()
  )

  const [showRegionInput, setShowRegionInput] = useState(false)
  const [countryRegions, setCountryRegions] = useState([])
  useEffect(() => {
    if (index === -1) {
      setShowRegionInput(false)
    } else {
      setCountryRegions(
        allCountries[index][2].length > 0 ? allCountries[index][2] : []
      )
      setShowRegionInput(true)
    }
  }, [index])

  return (
    <React.Fragment>
      {showRegionInput && (
        <SelectBoxWrapper>
          {showLabel && label && label !== '' ? (
            <Label htmlFor='state_drop' {...labelProps}>
              {label}
            </Label>
          ) : (
            <React.Fragment>
              {showLabel && (
                <Label htmlFor='state_drop' {...labelProps}>
                  Select Region/State
                </Label>
              )}
            </React.Fragment>
          )}
          <SelectBox
            disabled={disabled}
            value={value}
            name='state_drop'
            id='state_drop'
            onChange={(e) => onChange(e.target.value, e)}
            {...inputProps}
          >
            {countryRegions.map((option, index) => (
              <Option key={index} value={shortCode ? option[1] : option[0]}>
                {option[0]}
              </Option>
            ))}
          </SelectBox>
        </SelectBoxWrapper>
      )}
    </React.Fragment>
  )
}

export default RegionSelector
