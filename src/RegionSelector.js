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
  shortCode,
  customOptions,
  whitelist
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
      setShowRegionInput(false)
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
        const allRegions = [...allCountries]

        console.log(allRegions, 'allRegions')
        const whiteRegions = Object.keys(whitelist).map((region) =>
          region.toLowerCase()
        )

        whiteRegions.map((region, index) => regionBot(region))

        // const wr = []
        //   .concat(...Object.values(whitelist))
        //   .map((region) => region.toLowerCase())

        // const fi = allCountries[index][2].filter(
        //   (item) =>
        //     wr.includes(item[1].toLowerCase()) ||
        //     wr.includes(item[0].toLowerCase())
        // )
        setCountryRegions(
          countries[index][2].length > 0 ? countries[index][2] : []
        )
        setShowRegionInput(true)
      }
    }
  }, [index])

  const regionBot = (bot) => {
    const allRegions = [...allCountries]
    const r = []
    Object.keys(whitelist).map((region) => {
      const existRegionPosition = allRegions.findIndex(
        (obj) =>
          obj[0].toLowerCase() === region.toLowerCase() ||
          obj[1].toLowerCase() === region.toLowerCase()
      )

      if (existRegionPosition !== -1) {
        ;[...allRegions[existRegionPosition][2]].map((item) => {
          r.push([item[0].toLowerCase(), item[1].toLowerCase()])
        })
      }

      const whiteListR = whitelist[region].map((item) => item.toLowerCase())

      const filteredFruits = r
        .filter(
          (region) =>
            whiteListR.includes(region[0].toLowerCase()) ||
            whiteListR.includes(region[1].toLowerCase())
        )
        .map(
          (item) =>
            item[0].charAt(0).toUpperCase() + item[0].slice(1) ||
            item[1].charAt(0).toUpperCase() + item[1].slice(1)
        )

      console.log(
        allRegions[existRegionPosition][2],
        'allRegions[existRegionPosition][2] '
      )
      // allRegions[existRegionPosition][2] = filteredFruits
    })
    console.log(allRegions, 'allRegions')
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
