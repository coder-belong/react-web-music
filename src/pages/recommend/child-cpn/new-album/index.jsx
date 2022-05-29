import React, {memo, useEffect, useRef} from "react";
import {shallowEqual, useDispatch, useSelector} from "react-redux";

import {getNewAlbumsAction} from "../../../../store/recommend/actionCreators";

import {Carousel} from "antd";
import {NewAlbumWrapper} from "./style";
import RecThemeHeader from "../../../../components/rcm-theme-header";
import AlbumCard from "../../../../components/album-card";

const NewAlbum = memo((props) => {
  // state and props

  // redux hook
  const {newAlbums} = useSelector(state => ({
    newAlbums: state.getIn(["recommend", "newAlbums"])
  }), shallowEqual)

  const dispatch = useDispatch()

  // other hook
  useEffect(() => {
    dispatch(getNewAlbumsAction(10))
  }, [dispatch])

  const swiperRef = useRef()

  // 其他业务逻辑
  // 重新处理数据结构
  const newAlbumsData = [[], []]
  newAlbums.forEach((item, index) => {
    index < 5 ? newAlbumsData[0].push(item) : newAlbumsData[1].push(item)
  })

  // 渲染轮播图内容的逻辑
  function renderSwiperContent() {
    const swiperContentEle = [0, 1].map(item1 => {
      return (
        <div key={item1} className={'page'}>
          {
            newAlbumsData[0][0] && newAlbumsData[item1].map(item2 => {
              return (
                <AlbumCard
                  key={item2.id}
                  info={item2}
                  size={100}
                  width={118}
                  bgp="-570px">
                </AlbumCard>
              )
            })
          }
        </div>
      )
    })
    return swiperContentEle
  }

  return (
    <NewAlbumWrapper>
      <RecThemeHeader title={"新碟上架"}/>
      <div className="content">
        <button
          className="arrow arrow-left sprite_02"
          onClick={event => swiperRef.current.prve()}
        />
        {/*轮播图渲染的内容区域*/}
        <div className="album">
          <Carousel
            ref={swiperRef}
            dots={false}
            autoplay>
            {renderSwiperContent()}
          </Carousel>
        </div>
        <button
          className="arrow arrow-right sprite_02"
          onClick={event => swiperRef.current.next()}
        />
      </div>
    </NewAlbumWrapper>
  )
})

export default NewAlbum
