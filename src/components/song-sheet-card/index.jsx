import React, {memo} from "react";
import SongSheetCardWrapper from "./style";
import {getFormattedCount} from "../../utils/format-data";

const SongSheetCard = memo((props) => {
  const {songInfo} = props

  return (
    <SongSheetCardWrapper>
      <div className="cover">
        <img src={songInfo.picUrl} alt=""/>
        <div className="bottom-info sprite_cover">
          <span>
            <i className="sprite_icon erji"/>
            {getFormattedCount(songInfo.playCount)}
          </span>
          <i className="sprite_icon play"/>
        </div>
      </div>
      <div className="desc">{songInfo.name}</div>
    </SongSheetCardWrapper>
  )
})

export default SongSheetCard
