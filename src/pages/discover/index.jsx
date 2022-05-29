import React, {memo} from "react";

import {discoverMenu} from "../../common/local-data";

import {NavLink} from "react-router-dom";
import {renderRoutes} from "react-router-config";
import {DiscoverWrapper} from "./style";

const Discover = memo((props) => {
  return (
    <DiscoverWrapper>
      <div className="discover-menu wrap-v1">
        {
          discoverMenu.map((item, index) => {
            return (
              <NavLink className='item' to={item.link} key={item.title}>
                {item.title}
              </NavLink>
            )
          })
        }
      </div>

      {/* 发现音乐的子路由视图区域 */}
      {renderRoutes(props.route.routes)}

    </DiscoverWrapper>
  )
})

export default Discover
