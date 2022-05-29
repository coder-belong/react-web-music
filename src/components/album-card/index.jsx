import React, {memo} from "react";
import {AlbumCardWrapper} from './style'
import {getSizeImageUrl} from "../../utils/format-data";
import {NavLink} from "react-router-dom";

const AlbumCard = memo((props) => {
  // state and prop
  const {info, size = 130, width = 153, bgp = '-845px'} = props

  // redux hook

  // others hook

  // 其他业务逻辑

  return (
    <AlbumCardWrapper size={size} width={width} bgp={bgp} >
      <div className="album-image">
        <img src={getSizeImageUrl(info.picUrl, size)} alt=""/>
        <NavLink to="/todo" className="cover image_cover">
          {info.name}
        </NavLink>
      </div>
      <div className="album-info">
        <div className="name text-nowrap">{info.name}</div>
        <div className="artist text-nowrap">{info.artist.name}</div>
      </div>
    </AlbumCardWrapper>
  )
})

export default AlbumCard
