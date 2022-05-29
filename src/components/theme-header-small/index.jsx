import React, {memo} from 'react';
import PropTypes from 'prop-types';

import {HeaderWrapper} from "./style";
import {NavLink} from "react-router-dom";

const ThemeHeaderSmall = memo(function (props) {
  const {title, more} = props;

  return (
    <HeaderWrapper>
      <h3>{title}</h3>
      <NavLink to="/todo">{more}</NavLink>
    </HeaderWrapper>
  )
})

ThemeHeaderSmall.defaultProps = {}

ThemeHeaderSmall.propTypes = {
  title: PropTypes.string.isRequired,
  more: PropTypes.string
}

export default ThemeHeaderSmall;
