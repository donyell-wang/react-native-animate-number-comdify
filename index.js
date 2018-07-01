/**
 * @Filename: index.js animate number with comdify effect
 * @Author: Daniel Wang
 * @Email:  punkipod@hotmail.com
 */

import React from 'react';
import PropTypes from 'prop-types';
import AnimateNumber from 'react-native-animate-number';
import {
  Text
} from 'react-native';

function comdify (n) {
  // if (String(n).length < 6) return n + '';
  var re = /\d{1,3}(?=(\d{3})+$)/g;
  var n1 = n.replace(/^(\d+)((\.\d+)?)$/, function (s, s1, s2) { return s1.replace(re, '$&,') + s2; });
  return n1;
}

const ComdifyNumber = ({ value, animated, comdified, decimalDigits, ...restConfig }) => {
  return animated
    ? <AnimateNumber
      value={value}
      {...restConfig}
      formatter={(value) => comdify(value.toFixed(decimalDigits) + '')}
    />
    : <Text style={restConfig.style}>{comdified ? comdify(value + '') : value}</Text>;
};

ComdifyNumber.propTypes = {
  value: PropTypes.number,
  animated: PropTypes.bool,
  comdified: PropTypes.bool,
  decimalDigits: PropTypes.number
};

ComdifyNumber.defaultProps = {
  value: 0,
  animated: true,
  comdified: true,
  decimalDigits: 0
};

export default ComdifyNumber;
