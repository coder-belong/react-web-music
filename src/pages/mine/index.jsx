import React, {memo} from "react";
import {MineWrapper} from "./style";

const Mine = memo((props) => {
  return (
    <MineWrapper>
      <div className="content wrap-v2">
        <div className="pic">
          <a className="login" href="/#">立即登录</a>
        </div>
      </div>
    </MineWrapper>
  )
})

export default Mine
