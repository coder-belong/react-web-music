import React, {Fragment, memo} from "react";

import {footerImages, footerLinks} from "../../common/local-data";

import {FooterWrapper} from "./style";

const AppFooter = memo((props) => {
  return (
    <FooterWrapper>
      <div className="content wrap-v2">
        <div className="left">
          <div className="p1">
            {
              footerLinks.map((item, index) => {
                return (
                  <Fragment key={item.title}>
                    <a href={item.link}>{item.title}</a>
                    <span>|</span>
                  </Fragment>
                )
              })
            }
          </div>
          <div className="p2">
            <span>网易公司版权所有©1997-2022</span>
            <span>杭州乐读科技有限公司运营：浙网文[2021] 1186-054号</span>
          </div>
          <div className="p3">
            粤B2-20090191-18工业和信息化部备案管理系统网站
          </div>
        </div>
        <div className="right">
          {
            footerImages.map((item, index) => {
              return (
                <div className="item" key={item.link}>
                  <a href={item.link} />
                  <span />
                </div>
              )
            })
          }
        </div>
      </div>
    </FooterWrapper>
  )
})

export default AppFooter
