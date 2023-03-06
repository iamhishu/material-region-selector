import React from 'react'
import C from './CountrySelector'
import R from './RegionSelector'
import styles from './styles.module.css'

export const CountrySelector = ({
  label,
  showCountryFlag,
  showLabel,
  labelProps,
  inputProps,
  value,
  onChange,
  disabled,
  shortCode,
  leadingCountries,
  allowcountry
}) => {
  return (
    <div className={styles.test} style={{ padding: '10px' }}>
      <C
        showCountryFlag={showCountryFlag}
        showLabel={showLabel}
        label={label}
        labelProps={labelProps}
        inputProps={inputProps}
        value={value}
        onChange={onChange}
        disabled={disabled}
        shortCode={shortCode}
        leadingCountries={leadingCountries}
        allowcountry={allowcountry}
      />
    </div>
  )
}

export const RegionSelector = ({
  country,
  label,
  value,
  onChange,
  showLabel,
  labelProps,
  inputProps,
  shortCode,
  customOptions,
  whitelist,
}) => {
  return (
    <div className={styles.test} style={{ padding: '10px' }}>
      <R
        showLabel={showLabel}
        country={country}
        label={label}
        value={value}
        onChange={onChange}
        labelProps={labelProps}
        inputProps={inputProps}
        shortCode={shortCode}
        customOptions={customOptions}
        whitelist={whitelist}
      />
    </div>
  )
}
