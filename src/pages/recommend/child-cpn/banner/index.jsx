import React, {memo, useCallback, useEffect, useRef, useState} from "react";
import {shallowEqual, useDispatch, useSelector} from "react-redux";

import {getTopBannerAction} from "../../../../store/recommend/actionCreators";

import {Carousel} from 'antd';
import {BannerWrapper} from "./style";

const Banner = memo((props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const swiperRef = useRef()

  const {banners} = useSelector(state => ({
    // 获取redux数据要使用state.get("xxx")获取噢
    banners: state.getIn(["recommend", "topBanners"])
  }), shallowEqual)

  const dispatch = useDispatch()

  useEffect(() => {
    // 发送网络请求，将轮播图数据保存到redux中
    dispatch(getTopBannerAction())
  }, [dispatch])

  // 轮播图切换前的回调
  const beforeChange = useCallback((from, to) => {
    setCurrentIndex(to)
  }, [])

  // 轮播图左右箭头的点击
  const arrowClick = (type) => {
    if (type === "pre") {
      swiperRef.current.prev()
    } else {
      swiperRef.current.next()
    }
  }

  return (
    <BannerWrapper>
      {/*背景图片区域*/}
      <img src={banners[currentIndex] && banners[currentIndex].imageUrl} className="img-cover" alt=""/>
      {/*中间轮播图区域*/}
      <div className="center">
        <div className="left">
          <Carousel
            effect="fade"
            autoplay
            beforeChange={beforeChange}
            ref={swiperRef}>
            {
              banners.map(item => {
                return (
                  <a href={item.imageUrl} key={item.imageUrl}>
                    <img className="image" src={item.imageUrl} alt="banner"/>
                  </a>
                )
              })
            }
          </Carousel>
        </div>
        <div className="right">
          <a href="https://music.163.com/#/download" target="_blank" rel="noreferrer">
          </a>
        </div>
      </div>
      {/*箭头区域*/}
      <div className="arrow">
        <div className="left btn" onClick={event => arrowClick("pre")}/>
        <div className="right btn" onClick={event => arrowClick("next")}/>
      </div>
    </BannerWrapper>
  )
})

export default Banner
