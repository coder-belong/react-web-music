import React, {memo} from "react";

import SongInfo from "./child-cpn/song-info";
import SongComment from "./child-cpn/song-comment";
import IncludeSong from "./child-cpn/include-song";
import RelevantSong from "./child-cpn/relevant-song";
import {SongDetailWrapper} from "./child-cpn/relevant-song/style";

const SongDetail = memo((props) => {
  return (
    <SongDetailWrapper>
      <div className="content wrap-v2">
        <div className="left">
          <SongInfo/>
          <SongComment/>
        </div>

        <div className="right">
          <IncludeSong/>
          <RelevantSong/>
        </div>
      </div>
    </SongDetailWrapper>
  )
})

export default SongDetail
