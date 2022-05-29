import React, {memo, useEffect} from "react";
import {SetterSingerWrapper} from "./style";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {getSettleSingersAction} from "../../../../store/recommend/actionCreators";
import {getSizeImageUrl} from "../../../../utils/format-data";
import {NavLink} from "react-router-dom";
import ThemeHeaderSmall from "../../../../components/theme-header-small";

const SettleSinger = memo((props) => {
  // redux
  const dispatch = useDispatch();
  const state = useSelector((state) => ({
    settleSings: state.getIn(["recommend", "settleSinger"])
  }), shallowEqual);

  // hooks
  useEffect(() => {
    dispatch(getSettleSingersAction());
  }, [dispatch])

  return (
    <SetterSingerWrapper>
      <ThemeHeaderSmall title="入驻歌手" more="查看全部>" />
      <div className="singer-list">
        {
          state.settleSings.map((item, index) => {
            return (
              <NavLink to="/todo" key={item.id} className="item">
                <img src={getSizeImageUrl(item.img1v1Url, 62)} alt="" />
                <div className="info">
                  <div className="title">{item.alias.join("") || item.name}</div>
                  <div className="name">{item.name}</div>
                </div>
              </NavLink>
            )
          })
        }
      </div>
      <div className="apply-for">
        <NavLink to="/todo">申请成为网易音乐人</NavLink>
      </div>
    </SetterSingerWrapper>
  )
})

export default SettleSinger
