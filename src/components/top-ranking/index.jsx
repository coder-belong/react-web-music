import React, {memo} from "react";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";

import {getCurrentSongAction} from "../../store/player/actionCreators";

import {getSizeImageUrl} from "../../utils/format-data";

import {TopRankingWrapper} from "./style";

const TopRanking = memo((props) => {
  // state and props
  const {pictureUrl, title, songs = []} = props;

  // redux hooks
  const dispatch = useDispatch()

  // others handle
  const playMusicClick = (item) => {
    dispatch(getCurrentSongAction(item.id))
  }

  return (
    <TopRankingWrapper>
      <div className="header">
        <div className="image">
          <img src={getSizeImageUrl(pictureUrl)} alt=""/>
          <NavLink to="/todo" className="image_cover">
          </NavLink>
        </div>

        <div className="info">
          <a href="#/todo">{title}</a>
          <div>
            <button className="btn play sprite_02"/>
            <button className="btn favor sprite_02"/>
          </div>
        </div>
      </div>

      <div className="list">
        {
          songs.slice(0, 10).map((item, index) => {
            return (
              <div key={item.id} className="list-item">
                <div className="rank">{index + 1}</div>
                <div className="info">
                  <div className="name text-nowrap">{item.name}</div>
                  <div className="operate">
                    <button className="btn sprite_02 play" onClick={event => playMusicClick(item)}/>
                    <button className="btn sprite_icon2 addto"/>
                    <button className="btn sprite_02 favor"/>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>

      <div className="footer">
        <NavLink to="/todo">查看全部 &gt;</NavLink>
      </div>
    </TopRankingWrapper>
  )
})

export default TopRanking
