import React, { useEffect, useState } from 'react'
import { SelectBoxWrapper, SelectBox, Option, Label } from './SelectBox'
import { allCountries } from 'country-region-data'
import { capitalize } from './common'
import PropTypes from 'prop-types'

const RegionSelector = ({
  country,
  label,
  value,
  onChange,
  labelProps,
  inputProps,
  disabled,
  showLabel,
  shortCode,
  customOptions,
  whitelist,
  showDefaultOptionText,
}) => {
  const index = allCountries.findIndex(
    (c, i) =>
      c[1].toLowerCase() === country.toLowerCase() ||
      c[0].toLowerCase() === country.toLowerCase()
  )

  const [showRegionInput, setShowRegionInput] = useState(false)
  const [countryRegions, setCountryRegions] = useState([])

  const [countries, setCountries] = useState(allCountries)

  useEffect(() => {
    if (index === -1) {
      setShowRegionInput(true)
    } else {
      if (typeof customOptions === 'object' && customOptions !== null) {
        const newRegions = []
        customOptions.map((item, index) => {
          const nwR = [item.name, item.shortIdentifier]
          newRegions.push(nwR)
        })
        setCountryRegions(
          countries[index][2].length > 0
            ? countries[index][2].concat(newRegions)
            : []
        )
        setShowRegionInput(true)
      } else {
        if (typeof whitelist === 'object' && whitelist !== null) {
          regionBot()
        }
        setCountryRegions(
          countries[index][2].length > 0 ? countries[index][2] : []
        )
        setShowRegionInput(true)
      }
    }
  }, [index])

  const regionBot = (bot) => {
    const con = [...allCountries]
    const rg = []
    Object.keys(whitelist).map((region) => {
      const i = con.findIndex(
        (obj) =>
          obj[0].toLowerCase() === region.toLowerCase() ||
          obj[1].toLowerCase() === region.toLowerCase()
      )
      if (i !== -1) {
        ;[...con[i][2]].map((item) => {
          rg.push([item[0].toLowerCase(), item[1].toLowerCase()])
        })
      }
      const wlR = whitelist[region].map((item) => item.toLowerCase())
      const fL = rg
        .filter(
          (region) =>
            wlR.includes(region[0].toLowerCase()) ||
            wlR.includes(region[1].toLowerCase())
        )
        .map((item) => capitalize(item[0]) || capitalize(item[1]))

      if (fL.length > 0) {
        const result = con[i][2].filter(
          (region) => fL.includes(region[0]) || fL.includes(region[1])
        )

        con[i][2] = result
      }
    })

    setCountries(con)
  }

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
            <option value=''>{showDefaultOptionText || 'Select Region'}</option>
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
RegionSelector.propTypes = {
  label: PropTypes.string,
  // showLabel: PropTypes.bool,
  labelProps: PropTypes.object,
  inputProps: PropTypes.object,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool
  // shortCode: PropTypes.bool,
}

export default RegionSelector
