import React, {memo} from "react";
import PropTypes from "prop-types";

import RecThemeHeaderWrapper from "./style";

const RecThemeHeader = memo((props) => {
  const { title, items } = props;

  return (
    <RecThemeHeaderWrapper className="sprite_02">
      <div className="left">
        <div className="title">{title}</div>

        <div className="list">
          {
            items.map(item => {
              return (
                <div className="menu-item" key={item}>
                  <a href="/todo">{item}</a>
                  <span className="divider">|</span>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="right">
        <a href="/todo">更多</a>
        <i className="icon sprite_02" />
      </div>
    </RecThemeHeaderWrapper>
  )
})


// 校验父传子的数据格式
RecThemeHeader.prototype = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string),
}

RecThemeHeader.defaultProps = {
  items:[]
}

export default RecThemeHeader
