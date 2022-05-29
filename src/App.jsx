import React, {memo, Suspense} from "react";
import {renderRoutes} from "react-router-config";
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";

import routes from "./router";
import {store} from './store'

import AppFooter from "./components/app-footer";
import AppHeader from "./components/app-header";
import MusicPlayBar from "./components/music-play-bar";

const App = memo((props) => {
  return (
    <Provider store={store}>
      {/*需用一个 <Router> 包裹, 提供一个 history context*/}
      <HashRouter>
        {/*顶部函数区域*/}
        <AppHeader/>

        {/*当路由懒加载时需要套上Suspense组件*/}
        <Suspense fallback={<div>loading</div>}>
          {/*主体内容区域（主路由视图区域）*/}
          {renderRoutes(routes)}
        </Suspense>

        {/*底部音乐播放控制区域*/}
        <MusicPlayBar/>

        {/*底部脚注区域*/}
        <AppFooter/>
      </HashRouter>
    </Provider>
  )
})

export default App
