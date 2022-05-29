import React, {memo} from "react";

import {headerMenuLinks} from "../../common/local-data";

import {NavLink} from "react-router-dom";

import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import {HeaderWrapper} from "./style";

const AppHeader = memo((props) => {
  // 渲染左侧菜单列表的逻辑判断
  const renderMenu = (item, index) => {
    return (
      index < 3 ? (
        <NavLink className='menu-item' key={item.key} to={item.link}>
          {item.title}
          <i className='subscript-icon sprite_01'/>
        </NavLink>
      ) : (
        <a className='menu-item' key={item.key} href={item.link}>
          {item.title}
          <i className='subscript-icon sprite_01'/>
        </a>
      )
    )
  }

  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        {/*左侧菜单列表区域*/}
        <div className="left">
          <a href="#" className='logo sprite_01'>网易云音乐</a>
          <div className="menu-list">
            {headerMenuLinks.map(renderMenu)}
          </div>
        </div>

        {/*右侧搜索框登录区域*/}
        <div className="right">
          <Input
            className="search"
            placeholder="音乐/视频/电台/用户"
            prefix={<SearchOutlined />}
          />
          <a className="author-center" href="https://music.163.com/login?targetUrl=%2Fcreatorcenter" target="_blank" rel="noopener noreferrer">创作者中心</a>
          <a href="https://music.163.com/login?targetUrl=%2Fcreatorcenter">登录</a>
        </div>
      </div>
      <div className="divider"/>
    </HeaderWrapper>
  )
})

export default AppHeader
