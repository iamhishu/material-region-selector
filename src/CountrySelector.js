import React from 'react'
import PropTypes from 'prop-types';
import { SelectBoxWrapper, SelectBox, Option, Label } from './SelectBox'
import { allCountries } from 'country-region-data'

function countryToFlag(isoCode) {
  return typeof String.fromCodePoint !== 'undefined'
    ? isoCode
      .toUpperCase()
      .replace(/./g, (char) =>
        String.fromCodePoint(char.charCodeAt(0) + 127397)
      )
    : isoCode
}
const CountrySelector = ({
  label,
  showCountryFlag,
  showLabel,
  labelProps,
  inputProps,
  value,
  onChange,
  disabled,
  shortCode
}) => (
  <SelectBoxWrapper>
    {showLabel && label && label !== '' ? (
      <Label htmlFor='country_drop' {...labelProps}>
        {label}
      </Label>
    ) : (
      <React.Fragment>
        {showLabel && (
          <Label htmlFor='country_drop' {...labelProps}>
            Select Country
          </Label>
        )}
      </React.Fragment>
    )}
    <SelectBox
      disabled={disabled}
      value={value}
      name='country_drop'
      id='country_drop'
      onChange={(e) => onChange(e.target.value, e)}
      {...inputProps}
    >
      {allCountries.map((option, index) => (
        <React.Fragment key={index}>
          {showCountryFlag ? (
            <React.Fragment>
              <Option key={index} value={shortCode ? option[1] : option[0]}>
                {countryToFlag(option[1]) + ' ' + option[0]}
              </Option>
            </React.Fragment>
          ) : (
            <Option key={index} value={shortCode ? option[1] : option[0]}>
              {option[0]}
            </Option>
          )}
        </React.Fragment>
      ))}
    </SelectBox>
  </SelectBoxWrapper>
)

CountrySelector.propTypes = {
  label: PropTypes.string,
  showCountryFlag: PropTypes.bool.isRequired,
  //showLabel: PropTypes.bool,
  labelProps: PropTypes.object,
  inputProps: PropTypes.object,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  //shortCode: PropTypes.bool,

};


export default CountrySelector
