# React_网易云项目实战



## 一、项目介绍 & 运行



### 1.1 项目简介

**目地址: [Github](https://github.com/coder-belong/react-web-music)**

目前已部署到云服务器，可供预览：http://www.belong.run:8005

**基于 `React` 开发的 `web-music`**

个人独立开发, 目的在于了解和熟悉前端项目开发流程.

技术栈: react, styled-components, redux, redux-thunk 等.

项目难点:

- 路由 v5 与 v6 版本嵌套路由
- 网络请求数据实体化 对网络请求到的数据进行处理, 筛选可用数据
- 数据处理 处理歌词, 时间等数据
- 组件开发 设计并开发一系列组件
- 网络请求相关的逻辑处理统一放到redux中进行管理，目的是为了熟练使用redux！

本项目重在初步了解前端开发流程. 支持前端路由, 但由于开发组件工作量较大, 仅编写完成部分页面,

推荐页面：

- 轮播图
- 热门推荐
- 新碟上架
- 榜单
- 等等

![Image](https://belong-1304212339.cos.ap-nanjing.myqcloud.com/img/2022-05-29-100701.jpg)

![Image](https://belong-1304212339.cos.ap-nanjing.myqcloud.com/img/2022-05-29-100707.jpg)

歌曲播放：

- 目前做了榜单中歌曲的点击播放；
- 事实上其他页面只要将歌曲的id传入到redux中就可以，整个逻辑已经打通；
- 做了歌曲的各种控制（暂停、播放、上一首、下一首、进度改变）；
- 做了播放循序切换：顺序播放、随机播放、单曲循环；
- 做了歌词的解析、展示、滚动；

![Image](https://belong-1304212339.cos.ap-nanjing.myqcloud.com/img/2022-05-29-100661.jpg)

排行榜页面：

- 各种榜单的切换；

![Image](https://belong-1304212339.cos.ap-nanjing.myqcloud.com/img/2022-05-29-100704.jpg)

歌单页面：

- 选择分类、选择分类后根据分类切换歌单；
- 根据分类，歌单列表的展示；
- 分页功能；

![Image](https://belong-1304212339.cos.ap-nanjing.myqcloud.com/img/2022-05-29-100648.jpg)

主播电台：

- 电台分类的展示、滚动；
- 不同分类展示不同的数据；
- 电台排行榜展示、分页；

![Image](https://belong-1304212339.cos.ap-nanjing.myqcloud.com/img/2022-05-29-100660.jpg)

歌手页面：

- 各种歌手分类（没找到接口，还自定义了一些数据）
- 歌手字母分类、对应歌手展示；

![Image](https://belong-1304212339.cos.ap-nanjing.myqcloud.com/img/2022-05-29-100641.jpg)

新碟上架页面：

- 热门新碟；
- 全部新碟、分页展示；

![Image](https://belong-1304212339.cos.ap-nanjing.myqcloud.com/img/2022-05-29-100706.jpg)





### 1.2 项目目录结构

- public 构建时, 直接将该文件夹中的资源复制到构建后的文件夹中

- src 项目主要资源文件夹

  - assets 存放静态资源, 如 css, font, img等
  - common 存放公共数据, 如常量, 本地存储等
  - components 存放可复用的组件/布局组件
  - entity 网络请求解析实体
  - pages 存放各页面的资源，一般是存放和routes映射的页面
  - router 存放路由配置
  - service 存放网络请求相关的配置
  - store 存放redux状态相关资源
  - utils 存放工具类资源

  

### 1.3 项目规范

- 文件夹、文件名称统一小写、多个单词以连接符（-）连接。react组件统一使用`jsx`进行结尾

- JavaScript变量名称采用小驼峰标识，常量全部使用大写字母，组件采用大驼峰；

- CSS采用普通CSS和styled-component结合来编写（全局采用普通CSS、局部采用styled-component）;

- 整个项目不再使用class组件，统一使用函数式组件，并且全面使用Hooks；

- 所有的函数式组件，为了避免不必要的渲染，全部使用memo进行包裹；

- 组件内部的状态，使用useState、useReducer；业务数据全部放在redux中管理；

- 函数组件内部基本按照如下顺序编写代码：

  - 组件内部state管理；
  - redux的hooks代码；
  - 其他组件hooks代码；
  - 其他逻辑代码；
  - 返回JSX代码；

- redux代码规范如下：

  - edux结合ImmutableJS
  - 每个模块有自己独立的reducer，通过combineReducer进行合并；
  - 异步请求代码使用redux-thunk，并且写在actionCreators中；
  - redux直接采用redux hooks方式编写，不再使用connect；

- 网络请求采用axios

  - 对axios进行二次封装；
  - 所有的模块请求会放到一个请求文件中单独管理；

- 项目使用AntDesign

  - 项目中某些AntDesign中的组件会被拿过来使用；

  - 但是多部分组件还是自己进行编写；

    




### 1.4 使用的库

- `antd` React 组件库
- `@ant-design/icons` antd 图标库
- `@craco/craco` create-react-app configuration override
- `normalize.css` 重置 css, 使各浏览器行为一致
- `react-router-dom` React 路由
- `axios` 基于 Promise 的 网络请求库
- `styled-components` css in js, 样式组件库
- `redux` 状态管理库
- `react-redux` React 状态管理库
- `redux-thunk` redux 中间件
- `immutable` 不变数据流
- `redux-immutable` redux 中的 immutable
- 其他库自行搜索



### 1.5 项目运行

- `yarn install` 安装依赖
- `yarn start` 启动服务
- 打开浏览器输入对应服务地址



### 1.6 感谢

- [网易云 API](https://link.juejin.cn/?target=http%3A%2F%2F123.207.32.32%3A9001%2F)
- [网易云 API 文档](https://link.juejin.cn/?target=https%3A%2F%2Fbinaryify.github.io%2FNeteaseCloudMusicApi%2F%23%2F)



## 二、项目开发 —— 基本结构搭建

### 2.1 react路由的配置和页面划分

可将页面划分成三大部分：头部导航区域、中间主体内容区域、底部脚注区域

- 只有中间的主体区域是路由所映射的内容，头部和底部都是静态页面

App.jsx

```jsx
import React, {memo} from "react";
import {renderRoutes} from "react-router-config";
import {HashRouter} from "react-router-dom";

import routes from "./router";

import AppFooter from "./components/app-footer";
import AppHeader from "./components/app-header";

const App = memo((props) => {
  return (
    // 需用一个 <Router> 包裹, 提供一个 history context
    <HashRouter>
      {/*顶部函数区域*/}
      <AppHeader/>

      {/*主体内容区域（主路由视图区域）*/}
      {renderRoutes(routes)}

      {/*底部脚注区域*/}
      <AppFooter/>

      <div style={{marginTop:'1000px'}}>123123</div>
    </HashRouter>
  )
})

export default App
```

router -> index.js

```js
import Discover from "../pages/discover";
import Mine from "../pages/mine";
import Friend from "../pages/friend";
import {Redirect} from "react-router-dom";

const routes = [
  {
    path: '/',
    exact: true,
    // 重定向路由
    render: () => <Redirect to='/discover' />
  },
  {
    path: '/discover',
    component: Discover
  },
  {
    path: '/my',
    component: Mine
  },
  {
    path: '/friend',
    component: Friend
  },
]

export default routes
```



### 2.2 头部菜单导航栏的实现

实现效果

![image-20220524104459277](https://belong-1304212339.cos.ap-nanjing.myqcloud.com/img/2022-05-29-100647.jpg)

将头部导航的菜单和所要跳转的路径，封装到 common -> local-data.js中，做一个配置文件

```js
export const headerMenuLinks = [
  {
    title: "发现音乐",
    link: "/discover",
    key: "discover",
  },
  {
    title: "我的音乐",
    link: "/my",
    key: "mine",
  },
  {
    title: "关注",
    link: "/friend",
    key: "friend",
  },
  {
    title: "商城",
    link: "https://music.163.com/store/product",
    key: "product",
  },
  {
    title: "音乐人",
    link: "https://music.163.com/nmusician/web/index#/",
    key: "music-people",
  },
  {
    title: "下载客户端",
    link: "https://music.163.com/#/download",
    key: "download",
  },
];
```

app-header  -> index.js

```jsx
import React, {memo} from "react";

import {headerMenuLinks} from "../../common/local-data";

import {NavLink} from "react-router-dom";

import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import {HeaderWrapper} from "./style";

const AppHeader = memo((props) => {
  // 渲染左侧菜单列表的逻辑判断
  const renderMenu = (item, index) => {
    return (
      index < 3 ? (
        <NavLink className='menu-item' key={item.key} to={item.link}>
          {item.title}
          <i className='subscript-icon sprite_01'/>
        </NavLink>
      ) : (
        <a className='menu-item' key={item.key} href={item.link}>
          {item.title}
          <i className='subscript-icon sprite_01'/>
        </a>
      )
    )
  }

  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        {/*左侧菜单列表区域*/}
        <div className="left">
          <a href="#" className='logo sprite_01'>网易云音乐</a>
          <div className="menu-list">
            {headerMenuLinks.map(renderMenu)}
          </div>
        </div>

        {/*右侧搜索框登录区域*/}
        <div className="right">
          <Input
            className="search"
            placeholder="音乐/视频/电台/用户"
            prefix={<SearchOutlined />}
          />
          <a className="author-center" href="https://music.163.com/login?targetUrl=%2Fcreatorcenter" target="_blank" rel="noopener noreferrer">创作者中心</a>
          <a href="https://music.163.com/login?targetUrl=%2Fcreatorcenter">登录</a>
        </div>
      </div>
      <div className="divider"/>
    </HeaderWrapper>
  )
})

export default AppHeader
```

app-header ->  style.js

```less
div{
  color: #fff;
  background: #242424;

  // 主题内容区域
  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
    // 左侧区域
    .left {
      display: flex;

      .logo {
        width: 176px;
        height: 70px;
        background-position: 0 0;
        text-indent: -9999px;
      }

      .menu-list {
        display: flex;
        align-items: center;

        .menu-item {
          display: block;
          position: relative;
          height: 70px;
          line-height: 70px;
          font-size: 14px;
          padding: 0 19px;
          color: #ccc;

          &.active, &:hover {
            background-color: #000000;
            color: white;
            text-decoration: none;
          }

          &.active .subscript-icon {
            position: absolute;
            display: inline-block;
            width: 12px;
            height: 7px;
            bottom: -1px;
            left: 50%;
            transform: translateX(-50%);
            background-position: -226px 0;
          }
          
          &:last-child::after{
            position: absolute;
            content: "";
            width: 28px;
            height: 19px;
            background-image: url(${require("@/assets/img/sprite_01.png")});
            background-position: -190px 0;
            top: 20px;
            right: -15px;
          }

        }
      }
    }

    .right {
      display: flex;
      align-items: center;
      .search {
        width: 158px;
        height: 32px;
        border-radius: 16px;
        
        input {
          &::placeholder {
            font-size: 12px;
          }
        }
      }
      .author-center {
        width: 90px;
        height: 32px;
        line-height: 32px;
        text-align: center;
        border-radius: 16px;
        border: 1px solid #666;
        color: #ccc;
        font-size: 12px;
        margin: 0 16px;
      }
    }
  }

  .divider {
    height: 5px;
    background-color: red;
  }
}
```





### 2.3 底部脚注的实现

实现效果

![image-20220524104517097](https://belong-1304212339.cos.ap-nanjing.myqcloud.com/img/2022-05-29-100700.jpg)

这个没什么好说的，就是静态页面而已

common -> local-data.js

```js
export const footerLinks = [
  {
    title: "服务条款",
    link: "https://st.music.163.com/official-terms/service"
  },
  {
    title: "隐私政策",
    link: "https://st.music.163.com/official-terms/privacy"
  },
  {
    title: "儿童隐私政策",
    link: "https://st.music.163.com/official-terms/children"
  },
  {
    title: "版权投诉指引",
    link: "https://music.163.com/st/staticdeal/complaints.html"
  },
  {
    title: "意见反馈",
    link: "#"
  }
]

export const footerImages = [
  {
    link: "https://music.163.com/st/userbasic#/auth"
  },
  {
    link: "https://music.163.com/recruit"
  },
  {
    link: "https://music.163.com/web/reward"
  },
  {
    link: "https://music.163.com/uservideo#/plan"
  }
]
```

App-footer -> index.js

```jsx
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
```



### 2.4 发现音乐 - 子路由的搭建和配置

实现效果

![image-20220524104657625](https://belong-1304212339.cos.ap-nanjing.myqcloud.com/img/2022-05-29-100653.jpg)



在page -> discover 中新建child-page文件夹，用于存储发现音乐下子路由的相关视图逻辑

<img src="https://belong-1304212339.cos.ap-nanjing.myqcloud.com/img/2022-05-29-100703.jpg" alt="image-20220524104822150" style="zoom:50%;" />



在local-data.js中编写子路由的映射关系

```js
// discover中的数据
export const discoverMenu = [
  {
    title: "推荐",
    link: "/discover/recommend"
  },
  {
    title: "排行榜",
    link: "/discover/ranking"
  },
  {
    title: "歌单",
    link: "/discover/songs"
  },
  {
    title: "主播电台",
    link: "/discover/anchor"
  },
  {
    title: "歌手",
    link: "/discover/singer"
  },
  {
    title: "新碟上架",
    link: "/discover/album"
  },
]
```

配置子路由：router -> index.js

```js
{
  path: '/discover',
  component: Discover,
  // 配置子路由
  routes: [
    {
      path: '/discover',
      exact: true,
      // 子路由重定向
      render: () => <Redirect to='/discover/recommend' />
    },
    {
      path: '/discover/recommend',
      component: Recommend
    },
    {
      path: '/discover/ranking',
      component: Ranking
    },
    {
      path: '/discover/songs',
      component: SongSheet
    },
    {
      path: '/discover/anchor',
      component: Anchor
    },
    {
      path: '/discover/singer',
      component: Singer
    },
    {
      path: '/discover/album',
      component: Album
    },
  ]
},
```

discover -> index.jsx

```jsx
import React, {memo} from "react";

import {discoverMenu} from "../../common/local-data";

import {NavLink} from "react-router-dom";
import {renderRoutes} from "react-router-config";
import {DiscoverWrapper} from "./style";

const Discover = memo((props) => {
  return (
    <DiscoverWrapper>
      <div className="discover-menu wrap-v1">
        {
          discoverMenu.map((item, index) => {
            return (
              <NavLink className='item' to={item.link} key={item.title}>
                {item.title}
              </NavLink>
            )
          })
        }
      </div>

      {/* 发现音乐的子路由视图区域 */}
      {renderRoutes(props.route.routes)}

    </DiscoverWrapper>
  )
})

export default Discover
```



### 2.5 引入axios以及二次封装

services -> config.js

```js
const devBaseURL = "http://www.belong.run:8886";
const proBaseURL = "http://www.belong.run:8886";

export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL: proBaseURL;
export const TIMEOUT = 50000;
```

services -> request.js

```js
import axios from 'axios';

import {TIMEOUT, BASE_URL} from "./config";

const instance = axios.create({
  timeout: TIMEOUT,
  baseURL: BASE_URL
})

// 请求拦截器
instance.interceptors.request.use(config => {
  return config;
}, err => {
  return err;
})

// 响应拦截器
instance.interceptors.response.use(response => {
  return response.data;
}, err => {
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        err.message = "请求错误";
        break;
      case 401:
        err.message = "未授权访问";
        break;
      default:
        console.log("其他错误信息");
    }
  }
  return err;
})

export default instance;
```

services -> recommend

```js
import request from "./request";

// 获取轮播图数据
export function getTopBanners() {
  return request({
    url: '/banner'
  })
}
```



### 2.6 项目中引入redux管理请求数据

#### 2.6.1 store根目录

store目录管理如下

<img src="https://belong-1304212339.cos.ap-nanjing.myqcloud.com/img/2022-05-29-100659.jpg" alt="image-20220524110053975" style="zoom:50%;" />

store -> index.js

```js
import {applyMiddleware, compose, createStore} from "redux";
import thunkMiddleware from 'redux-thunk'

import {reducer} from "./reducer";

// 开启redux-tool调试工具
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunkMiddleware)))

export  {
  store
}
```

store -> reducer.js

```js
import {combineReducers} from "redux";

import {reducer as recommendReducer} from "./recommend";

const reducer = combineReducers({
  recommend: recommendReducer
})

export {
  reducer
}
```

App.jsx

```jsx
import React, {memo} from "react";

import {store} from './store'

const App = memo((props) => {
  return (
    <Provider store={store}>
      ...
    </Provider>
  )
})

export default App
```



#### 2.6.2 recommend管理

store -> recommend -> constants.js

```js
export const CHANGE_TOP_BANNERS = 'CHANGE_TOP_BANNERS';
```

store -> recommend -> reducer.js

```js
import * as actionTypes from './constants'

const initState = {
  topBanners: []  // 头部轮播图数据
}

function reducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      return {...state, topBanners: action.topBanners};
    default:
      return {...state}
  }
}

export  {
  reducer
}
```

store -> recommend -> actionCreators.js

```js
import * as actionTypes from './constants'
import {getTopBanners} from "../../services/recommend";

// 定义普通的action (action定义成函数，并返回对象)
export const changeTopBannersAction = (banners) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: banners
})

// 定义redux-thunk的action，用于处理网络请求
export const getTopBannerAction = () => {
  return async dispatch => {
    let res = await getTopBanners()
    // 派发action，保存网络请求数据到redux中
    dispatch(changeTopBannersAction(res.banners))
  }
}
```

store -> recommend -> index.js

```js
import {reducer} from "./reducer";

export  {
  reducer
}
```

child-page -> recommend -> index.js组件中，使用redux相关的hook来处理网络请求数据，**全面放弃connect！**

```jsx
import React, {memo, useEffect} from "react";
import {shallowEqual, useDispatch, useSelector, useStore} from "react-redux";
import {getTopBannerAction} from "../../../../store/recommend/actionCreators";

const Recommend = memo((props) => {
  const {banners} = useSelector(state => ({
    // 这里获取数据要使用state.recommend.xxx获取噢
    banners: state.recommend.topBanners
  }), shallowEqual)

  const dispatch = useDispatch()

  useEffect(() => {
    // 发送网络请求，将轮播图数据保存到redux中
    dispatch(getTopBannerAction())
  }, [])

  return (
    <div>
      <div>推荐页面</div>
      <h2>轮播图数据长度：{banners.length}</h2>
    </div>
  )
})

export default Recommend
```



### 2.7 项目中集成Immutable JS

安装相关依赖包：`yarn add immutable redux-immutable`

修改store/reducer.js

```js
import {combineReducers} from "redux-immutable";

import {reducer as recommendReducer} from "./recommend";

const reducer = combineReducers({
  recommend: recommendReducer
})

export {
  reducer
}
```

修改store/recommend/reducer.js

```js
import * as actionTypes from './constants'
import {Map} from "immutable";

const initState = Map({
  topBanners: [],
})

function reducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      return state.set("topBanners", action.topBanners);
    default:
      return state
  }
}

export  {
  reducer
}
```

修改child-page/recommend/index.js中获取redux数据的方式

```jsx
import React, {memo, useEffect} from "react";
import {shallowEqual, useDispatch, useSelector, useStore} from "react-redux";
import {getTopBannerAction} from "../../../../store/recommend/actionCreators";

const Recommend = memo((props) => {
  const {banners} = useSelector(state => ({
    // 获取redux数据要使用state.get("xxx")获取噢
    banners: state.getIn(["recommend", "topBanners"])
  }), shallowEqual)

  const dispatch = useDispatch()

  useEffect(() => {
    // 发送网络请求，将轮播图数据保存到redux中
    dispatch(getTopBannerAction())
  }, [])

  return (
    <div>
      <div>推荐页面</div>
      <h2>轮播图数据长度：{banners.length}</h2>
    </div>
  )
})


export default Recommend
```





## 三、项目开发 —— 推荐模块

### 3.1 轮播图实现

效果图如下

![image-20220524173410745](https://belong-1304212339.cos.ap-nanjing.myqcloud.com/img/2022-05-29-100646.jpg)

banner/index.jsx

```jsx
import React, {memo, useCallback, useEffect, useRef, useState} from "react";
import {shallowEqual, useDispatch, useSelector} from "react-redux";

import {getTopBannerAction} from "../../../../../store/recommend/actionCreators";

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
```

banner/style.js

```less
import styled from "styled-components";

const BannerWrapper = styled.div`
  position: relative;
  height: 270px;
  overflow: hidden;

  .img-cover {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    height: 100%;
    width: 100vw;
    filter: blur(100px);
  }

  .center {
    display: flex;
    justify-content: center;

    .left {
      width: 730px;

      img {
        width: 100%;
        height: 270px;
      }
    }

    .right {
      a {
        display: inline-block;
        width: 250px;
        height: 270px;
        background: url(${require("../../../../../assets/img/download.png")});
      }
    }
  }

  .arrow {
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    z-index: 2;
    width: 100vw;
    height: 270px;
  

    .btn {
      position: absolute;
      width: 37px;
      height: 63px;
      background-image: url(${require("../../../../../assets/img/banner_sprite.png")});
      background-color: transparent;
      cursor: pointer;

      &:hover {
        background-color: rgba(0, 0, 0, 0.1);
      }
    }

    .left {
      left: 158px;
      background-position: 0 -360px;
    }

    .right {
      right: 168px;
      background-position: 0 -508px;
    }
  }
```



### 3.2 划分推荐模块的主体区域

推荐模块的主体区域可以划分为两个区域：主要内容区域和右侧登录信息相关区域

![image-20220524202334907](https://belong-1304212339.cos.ap-nanjing.myqcloud.com/img/2022-05-29-100649.jpg)

recommend/index.jsx的结构

```jsx
import React, {memo} from "react";
import Banner from "./banner";
import {RecommendWrapper} from "./style";

import HotRecommend from "./hot-recommend";

const Recommend = memo((props) => {
  return (
    <RecommendWrapper>
      {/*轮播图区域*/}
      <Banner/>
      {/*主体内容区域*/}
      <div className="content wrap-v2">
        <div className="left">
          {/*热门推荐*/}
          <HotRecommend/>
        </div>
        {/*右侧区域*/}
        <div className="right">
          2
        </div>
      </div>
    </RecommendWrapper>
  )
})

export default Recommend
```

recommend/style.js

```less
import styled from "styled-components";

const RecommendWrapper = styled.div`
  margin-top: 5px;

  .content {
    display: flex;

    & > .left {
      padding: 20px;
      width: 729px;
    }

    & > .right {
      width: 250px;
      border: 1px solid #d3d3d3;
    }
  }
`

export {
  RecommendWrapper,
}
```



### 3.3 rcm-theme-header的封装

效果图

![image-20220524201653616](https://belong-1304212339.cos.ap-nanjing.myqcloud.com/img/2022-05-29-100650.jpg)



component/rcm-theme-header/index.jsx

```jsx
import React, {memo} from "react";
import PropTypes from "prop-types";

import RecThemeHeaderWrapper from "./style";

const RecThemeHeader = memo((props) => {
  const { title, items } = props;

  return (
    <RecThemeHeaderWrapper className="sprite_02">
      <div className="left">
        <div className="title">{title}</div>

        <div className="list">
          {
            items.map(item => {
              return (
                <div className="menu-item" key={item}>
                  <a href="/todo">{item}</a>
                  <span className="divider">|</span>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="right">
        <a href="/todo">更多</a>
        <i className="icon sprite_02" />
      </div>
    </RecThemeHeaderWrapper>
  )
})

// 校验父传子的数据格式
RecThemeHeader.prototype = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string),
}

RecThemeHeader.defaultProps = {
  items:[]
}

export default RecThemeHeader
```

component/rcm-theme-header/style.js

```less
import styled from "styled-components";

const RecThemeHeaderWrapper = styled.div`
  height: 33px;
  border-bottom: 2px solid #c10d0c;
  padding: 0 10px 4px 34px;
  background-position: -225px -156px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .left {
    display: flex;
    align-items: center;

    .title {
      font-size: 20px;
      font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
      margin-right: 20px;
    }

    .list {
      display: flex;

      .menu-item {
        .divider {
          margin: 0 15px;
          color: #ccc;
        }
      }
    }
  }

  .right {
    display: flex;
    align-items: center;
    .icon {
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-left: 4px;
      background-position: 0 -240px;
    }
  }
`;

export default RecThemeHeaderWrapper;
```

在hot-recommend/index.jsx中使用封装好的头部组件

```jsx
import React, {memo, useEffect} from "react";
import {HotRecommendWrapper} from "./style";

import RecThemeHeader from "../../../../../components/rcm-theme-header";

const HotRecommend = memo((props) => {
  return (
    <HotRecommendWrapper>
      {/*头部*/}
      <RecThemeHeader title={"热门推荐"} items={['华语', '流行', '民谣', '摇滚', '电子']}/>
    </HotRecommendWrapper>
  )
})

export default HotRecommend
```



### 3.4 热门推荐模块

#### 3.4.1 热门推荐数据的请求

service/recommends.js

```js
export function getHotRecommend(limit) {
  return request({
    url: '/personalized',
    params: {
      limit,
    },
  })
}
```

store/recommend/reducer.js

```js
import * as actionTypes from './constants'
import {Map} from "immutable";

const initState = Map({
  topBanners: [],
  hotRecommends: [],
})

function reducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      return state.set("topBanners", action.topBanners);
    case actionTypes.CHANGE_HOT_RECOMMENDS:
      return state.set("hotRecommends", action.hotRecommends);
    default:
      return state
  }
}

export  {
  reducer
}
```

store/recommend/actionCreators.js

```js
import * as actionTypes from './constants'
import {
  getTopBanners,
  getHotRecommend
} from "../../services/recommend";

export const changeHotRecommendAction = (hotRecommends) => ({
  type: actionTypes.CHANGE_HOT_RECOMMENDS,
  hotRecommends,
})

export const getHotRecommendAction = (limit) => {
  return async dispatch => {
    let res = await getHotRecommend(limit)
    // 派发action，保存网络请求数据到redux中
    dispatch(changeHotRecommendAction(res.result))
  }
}
```

#### 3.4.2 热门推荐的组件展示

展示效果

<img src="https://belong-1304212339.cos.ap-nanjing.myqcloud.com/img/2022-05-29-100657.jpg" alt="image-20220524203158939" style="zoom:50%;" />

Utils/format-data.js

```js
function getFormattedCount(count) {
  if (count < 0) return;
  if (count < 10000) {
    return count;
  } else if (Math.floor(count / 10000) < 10000) {
    return Math.floor(count / 1000) / 10 + "万";
  } else {
    return Math.floor(count / 10000000) / 10 + "亿";
  }
}

export {
  getFormattedCount,
};
```

component/song-sheet-card/index.jsx：封装单独的歌单组件

```jsx
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
```

hot-recommend/index.jsx

```jsx
import React, {memo, useEffect} from "react";
import {HotRecommendWrapper} from "./style";
import {shallowEqual, useDispatch, useSelector} from "react-redux";

import RecThemeHeader from "../../../../../components/rcm-theme-header";
import SongSheetCard from "../../../../../components/song-sheet-card";
import {getHotRecommendAction} from "../../../../../store/recommend/actionCreators";

const HotRecommend = memo((props) => {
  // state

  // redux hook
  const {hotRecommends} = useSelector(state => ({
    hotRecommends: state.getIn(["recommend", "hotRecommends"])
  }), shallowEqual)

  const dispatch = useDispatch()

  // other  hook
  useEffect(() => {
    dispatch(getHotRecommendAction(8))
  }, [dispatch])

  return (
    <HotRecommendWrapper>
      {/*头部*/}
      <RecThemeHeader title={"热门推荐"} items={['华语', '流行', '民谣', '摇滚', '电子']}/>
      {/*  歌单列表*/}
      <div className="song-list">
        {
          hotRecommends.map(item => {
            return (
              <SongSheetCard songInfo={item} key={item.id}/>
            )
          })
        }
      </div>
    </HotRecommendWrapper>
  )
})

export default HotRecommend
```



### 3.5 新碟上架模块

#### 3.5.1 新碟上架数据的请求

service/recommends.js

```js
export function getNewAlbum(limit) {
  return request({
    url: "/top/album",
    params: {
      limit,
    },
  })
}
```

store/recommend/reducer.js

```js
import * as actionTypes from './constants'
import {Map} from "immutable";

const initState = Map({
  topBanners: [],  // 轮播图数据
  hotRecommends: [],  // 热门推荐的歌单数据
  newAlbums: [],  // 新碟上架的数据
})

function reducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      return state.set("topBanners", action.topBanners);
    case actionTypes.CHANGE_HOT_RECOMMENDS:
      return state.set("hotRecommends", action.hotRecommends);
    case actionTypes.CHANGE_NEW_ALBUM:
      return state.set("newAlbums", action.newAlbums);
      return state
  }
}

export  {
  reducer
}

```

store/recommend/actionCreators.js

```js
export const changeNewAlbumsAction = res => ({
  type: actionTypes.CHANGE_NEW_ALBUM,
  newAlbums: res.albums
})

export const getNewAlbumsAction = (limit) => {
  return async dispatch => {
    let res = await getNewAlbum(limit)
    dispatch(changeNewAlbumsAction(res))
  }
}
```

#### 3.5.2 新碟上架的组件展示

展示效果如下

<img src="https://belong-1304212339.cos.ap-nanjing.myqcloud.com/img/2022-05-29-100651.jpg" alt="image-20220526145642359" style="zoom:50%;" />



components/album-card/index.jsx：新碟上架的卡片封装组件

```jsx
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
```

components/album-card/style.js

```less
import styled from 'styled-components';

export const AlbumCardWrapper = styled.div`
  width: ${props => props.width + "px"};

  .album-image {
    position: relative;
    width: ${props => props.width + "px"};
    height: ${props => props.size + "px"};
    overflow: hidden;
    margin-top: 15px;

    img {
      width: ${props => props.size + "px"};
      height: ${props => props.size + "px"};
    }

    .cover {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-position: 0 ${props => props.bgp};
      text-indent: -9999px;
    }
  }

  .album-info {
    font-size: 12px;
    width: ${props => props.size};
    .name {
      color: #000;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    .artist {
      color: #666;
    }
  }
`
```

recommend/child-cpn/new-album/index.jsx

```jsx
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
```

recommend/child-cpn/new-album/style,js

```less
import styled from 'styled-components'

const NewAlbumWrapper = styled.div`
  margin-top: 50px;

  .content {
    height: 186px;
    background-color: #f5f5f5;
    border: 1px solid #d3d3d3;
    margin: 20px 0 37px;
    display: flex;
    align-items: center;

    .arrow {
      width: 25px;
      height: 25px;
      cursor: pointer;
    }

    .arrow-left {
      background-position: -260px -75px;
    }

    .arrow-right {
      background-position: -300px -75px;
    }

    .album {
      width: 640px;
      height: 150px;

      .ant-carousel .slick-slide {
        height: 150px;
        overflow: hidden;
      }

      .page {
        display: flex !important;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
`

export  {
  NewAlbumWrapper
}
```



### 3.6 榜单模块

#### 3.6.1 榜单数据的请求

service/recommends.js

```js
// 获取榜单信息（5.26起接口更新）
export function getRanking(id) {
  return request({
    url: "/playlist/detail",
    params: {
      id
    },
  })
}
```

store/recommend/reducer.js

```js
import * as actionTypes from './constants'
import {Map} from "immutable";

const initState = Map({
  topBanners: [],  // 轮播图数据
  hotRecommends: [],  // 热门推荐的歌单数据
  newAlbums: [],  // 新碟上架的数据

  upRanking: {},  // 飙升榜数据
  newRanking: {},  // 新歌榜数据
  originRanking: {},  // 原创榜数据
})

function reducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      return state.set("topBanners", action.topBanners);
    case actionTypes.CHANGE_HOT_RECOMMENDS:
      return state.set("hotRecommends", action.hotRecommends);
    case actionTypes.CHANGE_NEW_ALBUM:
      return state.set("newAlbums", action.newAlbums);

    case actionTypes.CHANGE_UP_RANKING:
      return state.set("upRanking", action.upRanking);
    case actionTypes.CHANGE_NEW_RANKING:
      return state.set("newRanking", action.newRanking);
    case actionTypes.CHANGE_ORIGIN_RANKING:
      return state.set("originRanking", action.originRanking);
    default:
      return state
  }
}

export  {
  reducer
}
```

store/recommend/actionCreators.js

```js
import * as actionTypes from './constants'
import {newRanking, originRanking, upRanking} from "../../mock/data";

export const changeNewAlbumsAction = res => ({
  type: actionTypes.CHANGE_NEW_ALBUM,
  newAlbums: res.albums
})

const changeUpRankingAction = res => ({
  type: actionTypes.CHANGE_UP_RANKING,
  upRanking: res.playlist
})

const changeNewRankingAction = res => ({
  type: actionTypes.CHANGE_NEW_RANKING,
  newRanking: res.playlist
})

export const getRankingAction = (id) => {
  return async dispatch => {
    // 这里接口有问题，我们使用本地数据
    // let res = await getRanking(id)
    switch (id) {
      case 19723756:
        dispatch(changeUpRankingAction({playlist: upRanking}))
        break;
      case 3779629:
        dispatch(changeNewRankingAction({playlist: newRanking}))
        break;
      case 2884035:
        dispatch(changeOriginRankingAction({playlist: originRanking}))
        break;
      default:
    }
  }
}
```

#### 3.6.2 榜单的组件展示

效果如下

<img src="https://belong-1304212339.cos.ap-nanjing.myqcloud.com/img/2022-05-29-100652.jpg" alt="image-20220526150129753" style="zoom:50%;" />

components/top-ranking/index.jsx：每个榜单的组件模块区域

```jsx
import React, {memo} from "react";
import {TopRankingWrapper} from "./style";
import {getSizeImageUrl} from "../../utils/format-data";
import {NavLink} from "react-router-dom";

const TopRanking = memo((props) => {
  // state and props
  const {pictureUrl, title, songs = []} = props;

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
                    <button className="btn sprite_02 play"/>
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
```

recommend/child-cpn/rec-ranking/index.jsx

```jsx
import React, {memo, useEffect} from "react";
import {RecRankingWrapper} from "./style";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {getRankingAction} from "../../../../store/recommend/actionCreators";
import RecThemeHeader from "../../../../components/rcm-theme-header";
import TopRanking from "../../../../components/top-ranking";
import {login} from "../../../../services/login";
import {getRanking} from "../../../../services/recommend";

const RecRanking = memo((props) => {
  // state and props

  // redux hook
  const {upRanking, newRanking, originRanking} = useSelector(state => ({
    upRanking: state.getIn(["recommend", "upRanking"]),
    newRanking: state.getIn(["recommend", "newRanking"]),
    originRanking: state.getIn(["recommend", "originRanking"]),
  }), shallowEqual)

  const dispatch = useDispatch()

  // others hook
  useEffect(() => {
    dispatch(getRankingAction(19723756))
    dispatch(getRankingAction(3779629))
    dispatch(getRankingAction(2884035))
  }, [dispatch])

  // 其他业务逻辑

  // 返回的jsx视图
  return (
    <RecRankingWrapper>
      {/*标题*/}
      <RecThemeHeader title={"榜单"}/>

      {/*3个榜单区域*/}
      <div className="tops">
        <TopRanking
          title={"飙升榜"}
          pictureUrl={upRanking.coverImgUrl}
          songs={upRanking.tracks}/>

        <TopRanking
          title={"新歌榜"}
          pictureUrl={newRanking.coverImgUrl}
          songs={newRanking.tracks}/>

        <TopRanking
          title={"原创榜"}
          pictureUrl={originRanking.coverImgUrl}
          songs={originRanking.tracks}/>
      </div>
    </RecRankingWrapper>
  )
})

export default RecRanking
```

recommend/child-cpn/rec-ranking/style,js

```less
import styled from 'styled-components'

const RecRankingWrapper = styled.div`
  margin-top: 50px;
  .tops {
    margin: 30px 0;
    display: flex;
    background-image: url(${require("@/assets/img/recommend-top-bg.png")});
    height: 472px;
  }
`
export {
  RecRankingWrapper
}
```





## 四、项目开发 —— 音乐播放工具栏

### 4.1 播放工具栏的布局展示

展示效果如下

![image-20220526190016049](https://belong-1304212339.cos.ap-nanjing.myqcloud.com/img/2022-05-29-100658.jpg)

components/music-play-bar/index.jsx

```jsx
import React, {memo} from "react";

import {Slider} from 'antd';
import {MusicPlayBarWrapper} from "./style";

const MusicPlayBar = memo((props) => {
  return (
    <MusicPlayBarWrapper>
      <div className="content wrap-v2">
        {/*左侧音乐控制按钮*/}
        <div className="control">
          <button className="sprite_player prev"/>
          <button className="sprite_player play"/>
          <button className="sprite_player next"/>
        </div>

        {/*中间音乐信息区域*/}
        <div className="music-info">
          {/*左侧图片区域*/}
          <img className="image"
               src="https://p2.music.126.net/OVkXDNmbk2uj6wE1KTZIwQ==/109951165203334337.jpg?param=34y34"/>
          {/*右侧歌曲信息区域*/}
          <div className="song">
            <div className="top-info">
              <span>有何不可</span>
              <span className="singer-name">许嵩</span>
            </div>
            {/*底部进度条和时间区域*/}
            <div className="bottom-process">
              <Slider defaultValue={30} className="progress"/>
              <div className="time">
                <span className="now-time">0:00</span>
                <span className="divider">/</span>
                <span className="all-time">4:01</span>
              </div>
            </div>
          </div>
        </div>

        {/*右侧操作区域*/}
        <div className="operator">
          <div className="left">
            <button className="sprite_player btn favor" />
            <button className="sprite_player btn share" />
          </div>
          <div className="right sprite_player">
            <button className="sprite_player btn volume" />
            <button className="sprite_player btn loop"/>
            <button className="sprite_player btn playlist" />
          </div>
        </div>
      </div>
    </MusicPlayBarWrapper>
  )
})

export default MusicPlayBar
```

components/music-play-bar/style.js

```less
import styled from 'styled-components'

const MusicPlayBarWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 52px;
  background-color: rgb(46, 46, 46);
  
  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    
    .control {
      display: flex;
      align-items: center;
      
      .sprite_player:hover {
        cursor: pointer;
      }
      
      .prev, .next {
        width: 28px;
        height: 28px;
      }
      .prev {
        background-position: 0 -130px;
      }

      .play {
        width: 36px;
        height: 36px;
        margin: 0 8px;
        background-position: 0 ${props => props.isPlaying ? "-165px": "-204px"};
      }

      .next {
        background-position: -80px -130px;
      }
    }
    
    .music-info {
      display: flex;
      width: 642px;
      height: 100%;
      align-items: center;

      .image {
        width: 34px;
        height: 34px;
        border-radius: 5px;
      }
      
      .song {
        flex: 1;
        color: #a1a1a1;
        margin-left: 10px;
        
        .top-info {
          color: #e1e1e1;
          position: relative;
          top: 8px;
          left: 8px;
          
          .singer-name {
            color: #a1a1a1;
            margin-left: 10px;
          }
        }
        
        .bottom-process {
          display: flex;
          align-items: center;

          .ant-slider {
            width: 493px;
            margin-right: 10px;

            .ant-slider-rail {
              height: 9px;
              background: url(${require("@/assets/img/progress_bar.png")}) right 0;
            }

            .ant-slider-track {
              height: 9px;
              background: url(${require("@/assets/img/progress_bar.png")}) left -66px;
            }

            .ant-slider-handle {
              width: 22px;
              height: 24px;
              border: none;
              margin-top: -7px;
              background: url(${require("@/assets/img/sprite_icon.png")}) 0 -250px;
            }
          }

          .time {
            .now-time {
              color: #e1e1e1;
            }
            .divider {
              margin: 0 3px;
            }
          }
          
        }
      }
    }
    
    .operator {
      display: flex;
      position: relative;
      top: 5px;
      
      .btn {
        width: 25px;
        height: 25px;
        
        &:hover {
          color: white;
          
        }
      }

      .left {
        .favor {
          background-position: -88px -163px;
        }

        .share {
          background-position: -114px -163px;
        }
      }
      
      .right {
        display: flex;
        align-items: center;
        width: 126px;
        padding-left: 13px;
        background-position: -147px -248px;

        .volume {
          background-position: -2px -248px;
        }

        .loop {
          background-position: ${props => {
            switch(props.sequence) {
              case 1:
                return "-66px -248px";
              case 2:
                return "-66px -344px";
              default:
                return "-3px -344px";
            }
          }};
        }

        .playlist {
          padding-left: 18px;
          text-align: center;
          color: #ccc;
          width: 59px;
          background-position: -42px -68px;
        }
      }
    }
  }
`

export {
  MusicPlayBarWrapper
}
```



### 4.2 当前播放歌曲数据的获取

service/player.js

```js
import request from "./request";

export function getCurrentSongDetail(ids) {
  return request({
    url: "/song/detail",
    params: {
      ids
    }
  })
}
```

store/player/constants.js

```js
export const CHANGE_CURRENT_SONG = "player/CHANGE_CURRENT_SONG";
```

store/player/recuder.js

```js
import {Map} from 'immutable'

import * as actionTypes from './constants'

const initState = Map({
  currentSong: {}  // 当前播放的音乐
})

function reducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_SONG:
      return state.set("currentSong", action.currentSong)
    default:
      return state
  }
}

export {
  reducer
}
```

store/player/actionCreators.js

```js
import * as actionTypes from './constants'
import {getCurrentSongDetail} from "../../services/player";

const changeCurrentSongAction = (res) => ({
  type: actionTypes.CHANGE_CURRENT_SONG,
  currentSong: res.songs[0]
})

export const getCurrentSongAction  = (ids) => {
  return async dispatch => {
    let res = await getCurrentSongDetail(ids)
    dispatch(changeCurrentSongAction(res))
  }
}
```

store/player/index.js

```js
import {reducer} from "./reducer";

export {
  reducer
}
```

store/reducer.js

```js
import {combineReducers} from "redux-immutable";

import {reducer as recommendReducer} from "./recommend";
import {reducer as playerReducer} from "./player";

const reducer = combineReducers({
  recommend: recommendReducer,
  player: playerReducer,
})

export {
  reducer
}
```



### 4.3 歌曲信息的展示

components/music-play-bar/index.js

```jsx
import React, {memo, useEffect} from "react";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import moment from "moment";

import {getSizeImageUrl} from "../../utils/format-data";

import {Slider} from 'antd';
import {MusicPlayBarWrapper} from "./style";
import {getCurrentSongDetail} from "../../services/player";
import {getCurrentSongAction} from "../../store/player/actionCreators";

const MusicPlayBar = memo((props) => {
  // state and props

  // redux hook
  const {currentSong} = useSelector(state => ({
    currentSong: state.getIn(["player", "currentSong"])
  }), shallowEqual)

  const dispatch = useDispatch()

  // others hook
  useEffect(() => {
    dispatch(getCurrentSongAction(167876))
  }, [dispatch])

  // other handle

  // other function

  return (
    <MusicPlayBarWrapper>
      <div className="content wrap-v2">
        {/*左侧音乐控制按钮*/}
        <div className="control">
          <button className="sprite_player prev"/>
          <button className="sprite_player play"/>
          <button className="sprite_player next"/>
        </div>

        {/*中间音乐信息区域*/}
        <div className="music-info">
          {/*左侧图片区域*/}
          <img className="image"
               src={getSizeImageUrl(currentSong.al && currentSong.al.picUrl, 34)}/>
          {/*右侧歌曲信息区域*/}
          <div className="song">
            <div className="top-info">
              <span>{currentSong.name}</span>
              <span className="singer-name">{currentSong.ar && currentSong.ar[0].name}</span>
            </div>
            {/*底部进度条和时间区域*/}
            <div className="bottom-process">
              <Slider defaultValue={30} className="progress"/>
              <div className="time">
                <span className="now-time">0:00</span>
                <span className="divider">/</span>
                <span className="all-time">{moment(currentSong.dt).format("mm:ss")}</span>
              </div>
            </div>
          </div>
        </div>

        {/*右侧操作区域*/}
        <div className="operator">
          <div className="left">
            <button className="sprite_player btn favor"/>
            <button className="sprite_player btn share"/>
          </div>
          <div className="right sprite_player">
            <button className="sprite_player btn volume"/>
            <button className="sprite_player btn loop"/>
            <button className="sprite_player btn playlist"/>
          </div>
        </div>
      </div>
    </MusicPlayBarWrapper>
  )
})

export default MusicPlayBar
```



### 4.4 歌曲播放进度的控制

>PS：其实在真实业务开发中，很少会处理声音媒体，不过我们既然再做项目那么最好锻炼下思维啦

这里逻辑判断可能会有点复杂，其实主要核心就以下几点

- 监听音乐的播放，更新进度条和右侧播放时间
- 监听进度条的拖拽ing，更新进度条的进度和右侧播放时间
- 监听进度条的拖拽完成ed，更新音乐的播放进度，播放歌曲
- 音乐播放进度的公式计算...

需要解决的bug：

- 监听音乐的播放和监听进度条的拖拽ing，会同时更新进度条和右侧播放时间导致冲突，解决方案：节流阀控制

components/music-play-bar/index.js

```jsx
import React, {memo, useCallback, useEffect, useRef, useState} from "react";
import {shallowEqual, useDispatch, useSelector} from "react-redux";

import {getPlaySongUrl, getSizeImageUrl} from "../../utils/format-data";

import {Slider} from 'antd';
import {MusicPlayBarWrapper} from "./style";
import {getCurrentSongDetail} from "../../services/player";
import {getCurrentSongAction} from "../../store/player/actionCreators";
import moment from "moment";

const MusicPlayBar = memo((props) => {
  // state and props
  const [currentTime, setCurrentTime] = useState(0)
  const [progress, setProgress] = useState(0)
  const [sliderIsChanging, setSliderIsChanging] = useState(false)  // 控制拖拽进度条和进度条自增的冲突
  const [isPlaying, setIsPlaying] = useState(false)  // 记录音乐播放的状态

  // redux hook
  const {currentSong} = useSelector(state => ({
    currentSong: state.getIn(["player", "currentSong"])
  }), shallowEqual)

  const dispatch = useDispatch()

  // others hook
  const audioRef = useRef()

  // 调用dispatch 发送网络请求保存数据到redux中
  useEffect(() => {
    dispatch(getCurrentSongAction(167876))
  }, [dispatch])

  // 页面渲染完成后处理的一些事...
  useEffect(() => {
    audioRef.current.src = getPlaySongUrl(currentSong.id)
  }, [currentSong])

  // other handle
  const showDuration = moment(currentSong.dt).format("mm:ss")  // 音乐总时长
  const showCurrentTime = moment(currentTime).format("mm:ss")  // 当前音乐播放时长

  // other function
  // 监听播放按钮的点击
  const playMusicClick = () => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying)
  }

  // 监听音乐的播放
  const timeUpdate = (event) => {
    if (!sliderIsChanging) {
      // 更新当前音乐播放的时间(需要转换成毫秒单位噢)
      setCurrentTime(event.target.currentTime * 1000)
      // 更新进度条
      setProgress((currentTime / currentSong.dt) * 100)
    }
  }

  // 监听进度条的拖拽（更新进度条和时间）
  const slideChange = useCallback(value => {
    setSliderIsChanging(true)  // 更新滑动状态
    setCurrentTime(value / 100 * currentSong.dt)  // 更新播放时间
    setProgress(value)  // 更新进度条进度
  }, [currentSong])

  // 监听进度条的拖拽完成（更新音乐播放时间）
  const slideAfterChange = useCallback(value => {
    const time = value / 100.0 * currentSong.dt / 1000;
    audioRef.current.currentTime = time  // 根据拖拽的长度设置音乐播放的进度
    setSliderIsChanging(false)

    // 当滑动结束后，需要让歌曲播放起来噢
    if (!isPlaying) {
      setIsPlaying(true)
      audioRef.current.play()
    }
  }, [currentSong, isPlaying])

  return (
    <MusicPlayBarWrapper isPlaying={isPlaying}>
      <div className="content wrap-v2">
        {/*左侧音乐控制按钮*/}
        <div className="control">
          <button className="sprite_player prev"/>
          <button className="sprite_player play" onClick={event => playMusicClick()}/>
          <button className="sprite_player next"/>
        </div>

        {/*中间音乐信息区域*/}
        <div className="music-info">
          {/*左侧图片区域*/}
          <img className="image"
               src={getSizeImageUrl(currentSong.al && currentSong.al.picUrl, 34)}/>
          {/*右侧歌曲信息区域*/}
          <div className="song">
            <div className="top-info">
              <span>{currentSong.name}</span>
              <span className="singer-name">{currentSong.ar && currentSong.ar[0].name}</span>
            </div>
            {/*底部进度条和时间区域*/}
            <div className="bottom-progress">
              <Slider defaultValue={10}
                      className="progress"
                      value={progress}
                      onAfterChange={slideAfterChange}
                      onChange={slideChange}
              />
              <div className="time">
                <span className="now-time">{showCurrentTime}</span>
                <span className="divider">/</span>
                <span className="all-time">{showDuration}</span>
              </div>
            </div>
          </div>
        </div>

        {/*右侧操作区域*/}
        <div className="operator">
          <div className="left">
            <button className="sprite_player btn favor"/>
            <button className="sprite_player btn share"/>
          </div>
          <div className="right sprite_player">
            <button className="sprite_player btn volume"/>
            <button className="sprite_player btn loop"/>
            <button className="sprite_player btn playlist"/>
          </div>
        </div>
      </div>

      {/*音乐播放元素*/}
      <audio
        ref={audioRef}
        onTimeUpdate={event => timeUpdate(event)}
      />
    </MusicPlayBarWrapper>
  )
})

export default MusicPlayBar
```



### 4.5 添加歌曲到播放列表

>虽然这一章逻辑会比较难，但是还是希望童鞋们能够理解下来，这对我们开发复杂的业务逻辑非常有帮助！

先来熟悉播放歌曲流程捏

![image-20220527141031197](https://belong-1304212339.cos.ap-nanjing.myqcloud.com/img/2022-05-29-100705.jpg)

store/player/reducer.js

```js
import {Map} from 'immutable'
import {playList as mockPlayList} from "../../mock/data";
import * as actionTypes from './constants'

const initState = Map({
  currentSong: {},  // 当前播放的音乐
  playList: mockPlayList,   // 播放列表
  currentSongIndex: 0,  // 当前播放的音乐的索引
})

function reducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_SONG:
      return state.set("currentSong", action.currentSong)
    case actionTypes.CHANGE_PLAY_LIST:
      return state.set("playList", action.playList)
    case actionTypes.CHANGE_CURRENT_SONG_INDEX:
      return state.set("currentSongIndex", action.currentSongIndex)
    default:
      return state
  }
}

export {
  reducer
}
```

store/player/actionCreators.js

```js
const changeCurrentSongAction = (currentSong) => ({
  type: actionTypes.CHANGE_CURRENT_SONG,
  currentSong,
})

const changePlayListAction = (playList) => ({
  type: actionTypes.CHANGE_PLAY_LIST,
  playList
})

const changeCurrentSongIndexAction = (currentSongIndex) => ({
  type: actionTypes.CHANGE_CURRENT_SONG_INDEX,
  currentSongIndex
})

// 添加歌曲到播放列表的逻辑
export const getCurrentSongAction = (id) => {
  return async (dispatch, getState) => {
    // 1. 根据id查找playList中是否有了该歌曲(需要返回索引)
    const playList = getState().getIn(["player", "playList"])
    const songIndex = playList.findIndex(item => item.id === id);

    if (songIndex !== -1) {  // 歌曲在playList数组中
      // 1.1 修改currentSongIndex
      dispatch(changeCurrentSongIndexAction(songIndex))
      // 1.2 修改currentSong
      dispatch(changeCurrentSongAction(playList[songIndex]))

    } else {  // 歌曲不在playList数组中
      // 1.3 根据id请求该歌曲的数据
      let res = await getCurrentSongDetail(id)
      let currentSong = res.songs[0]
      // 1.4 修改currentSong
      dispatch(changeCurrentSongAction(currentSong))
      // 1.5 将歌曲添加到playList中
      const newPlayList = [...playList, currentSong]
      dispatch(changePlayListAction(newPlayList))
      // 1.6 修改修改currentSongIndex
      dispatch(changeCurrentSongIndexAction(newPlayList.length - 1))
    }
  }
}
```

为榜单组件设置点击事件,添加歌曲到redux中

```jsx
....
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
			....
      <button className="btn sprite_02 play" onClick={event => playMusicClick(item)}/>
			....
    </TopRankingWrapper>
  )
})

export default TopRanking
```



### 4.6 记录当前的播放顺序

实现效果

![image-20220527204404445](https://belong-1304212339.cos.ap-nanjing.myqcloud.com/img/2022-05-29-100654.jpg)

store/player/reducer.js

```js
import {Map} from 'immutable'
import {playList as mockPlayList} from "../../mock/data";
import * as actionTypes from './constants'

const initState = Map({
  currentSong: {},  // 当前播放的音乐
  playList: mockPlayList,   // 播放列表
  currentSongIndex: 0,  // 当前播放的音乐的索引
  sequenceType: 0,  // 0 顺序播放 1 随机播放 2 单曲循环
})

function reducer(state = initState, action) {
  switch (action.type) {
		...
    case actionTypes.CHANGE_SEQUENCE_TYPE:
      return state.set("sequenceType", action.sequenceType)
    ...
    default:
      return state
  }
}

export {
  reducer
}
```

store/player/actionCreators.js

```js
// 向外暴露的普通action
export const changeSequenceTypeAction = (sequenceType) => ({
  type: actionTypes.CHANGE_SEQUENCE_TYPE,
  sequenceType
})
```

components/music-play-bar/index.jsx

```jsx
const MusicPlayBar = memo((props) => {
  // state and props
	...
  // redux hook
  const {currentSong, sequenceType} = useSelector(state => ({
    currentSong: state.getIn(["player", "currentSong"]),
    sequenceType: state.getIn(["player", "sequenceType"])
  }), shallowEqual)

  const dispatch = useDispatch()

  // 监听播放顺序按钮的点击
  const playSequenceClick = () => {
    if (sequenceType >= 2) {
      return dispatch(changeSequenceTypeAction(0))
    }
    dispatch(changeSequenceTypeAction(sequenceType + 1))
  } 
})

export default MusicPlayBar
```



### 4.7 歌曲播放的切换逻辑和播放结束处理

实现效果

![image-20220527204429096](https://belong-1304212339.cos.ap-nanjing.myqcloud.com/img/2022-05-29-100656.jpg)

歌曲上一首/下一首的切换逻辑，将切换逻辑放在actionCreatos中进行处理，组件中只负责dispatch即可

utils/math-utils.js

```js
// 返回一个0 ~ num之间的整数（不包括num）
export function getRandomNumber(num = 100) {
  return Math.floor(Math.random() * num)
}
```

store/player/actionCreators.js

```js
// 上一首/下一首的切换逻辑
export const changePlaySongAction = (tag) => {
  return (dispatch, getState) => {
    // 1. 获取当前播放歌曲的index
    let currentSongIndex = getState().getIn(["player", "currentSongIndex"])
    let playList = getState().getIn(["player", "playList"])
    let sequenceType = getState().getIn(["player", "sequenceType"])

    let nextSong = null // 存储即将要播放的歌曲信息

    // 2. 判断当前的播放顺序类型，生成新的currentIndex
    switch (sequenceType) {
      case 1:  // 随机播放
        // 获取playList数组长度的随机索引，注意不能和原来的currentSongIndex一致（确保下一首播放的歌曲不是上一首）
        let randomIndex = getRandomNumber(playList.length)
        while (randomIndex === currentSongIndex) {
          randomIndex = getRandomNumber(playList.length)
        }
        // 更新currentIndex和currentSong
        nextSong = playList[randomIndex]
        dispatch(changeCurrentSongIndexAction(randomIndex))
        dispatch(changeCurrentSongAction(nextSong))
        break;

      default:  // 顺序播放和单曲循环（+1 / -1即可 注意越界问题）
        currentSongIndex += tag
        if (currentSongIndex < 0) {
          currentSongIndex = playList.length - 1
        } else if (currentSongIndex >= playList.length) {
          currentSongIndex = 0
        }
        nextSong = playList[currentSongIndex]
        dispatch(changeCurrentSongIndexAction(currentSongIndex))
        dispatch(changeCurrentSongAction(nextSong))
    }
  }
}
```

components/music-play-bar.index,jsx

```jsx
const MusicPlayBar = memo((props) => {
  ...
  // 页面渲染完成后处理的一些事...
  useEffect(() => {
    audioRef.current.src = getPlaySongUrl(currentSong.id)
    audioRef.current.play().then(res => {
      setIsPlaying(true)
    }).catch(err => {
      setIsPlaying(false)
    })
  }, [currentSong])

  // 监听上一首/下一首按钮的点击
  const  changeMusicClick = (tag) => {
    // 进度条清空
    setCurrentTime(0)
    setProgress(0)
    // 派遣dispatch 更新currentSongIndex和currentSong
    dispatch(changePlaySongAction(tag))
    // 播放音乐...
  }

  // 监听音乐播放的结束
  const handleMusicEnded = () => {
    // 进度条清空
    setCurrentTime(0)
    setProgress(0)
    
    switch (sequenceType) {
      case 2:  // 单曲循环处理
        audioRef.current.currentTime = 0;
        audioRef.current.play()
        break
      default:  // 随机播放和顺序播放处理 
        dispatch(changePlaySongAction(1))
    }
  }

  return (
    <MusicPlayBarWrapper isPlaying={isPlaying} sequenceType={sequenceType}>
      <div className="content wrap-v2">
        {/*左侧音乐控制按钮*/}
        <div className="control">
          <button className="sprite_player prev" onClick={event => changeMusicClick(-1)}/>
          <button className="sprite_player play" onClick={event => playMusicClick()}/>
          <button className="sprite_player next" onClick={event => changeMusicClick(+1)}/>
        </div>
      </div>
      ...
      {/*音乐播放元素*/}
      <audio
        ref={audioRef}
        onTimeUpdate={event => timeUpdate(event)}
        onEnded={event => handleMusicEnded()}
        />
    </MusicPlayBarWrapper>
  )
})

export default MusicPlayBar
```



### 4.8 歌词的请求和解析

需求：将歌词数据解析成我们想要的数据格式

![image-20220527205539752](https://belong-1304212339.cos.ap-nanjing.myqcloud.com/img/2022-05-29-100702.jpg)

utils/parse-lyrics.js：解析歌词的工具函数

```js
/*
  [00:00.000] 作词 : 羽生まゐご
  [00:01.000] 作曲 : 羽生まゐご/羽生まゐご
  [00:10.666]夜の街迷いし穢れの乱歩
  [00:13.421]何処から来たのよ見窄らしいね
  [00:16.164]ねぇうちにおいで温めてあげるよ
 */

export function parseLyrics(lyricsString) {
  let lineStr = lyricsString.split('\n')
  let lyricsList = []

  for (let item of lineStr) {
    let time = item.split(']')[0].split('[')[1]
    if (time === undefined) continue
    let content = item.split(']')[1].trim()

    // 将分:秒格式转换为毫秒形式
    let time1 = time.split(":")[0] * 60 * 1000
    let time2 = time.split(':')[1].split('.')[0] * 1000
    let time3 = time.split('.')[1].length === 3 ? time.split('.')[1] * 1 : time.split('.')[1] * 10
    let resultTime = time1 + time2 + time3  // 最终的时间格式：34665
    lyricsList.push({time:resultTime, content})
  }
  return lyricsList
}
```

store/player/reducer,js：新增当前播放歌曲的歌词数据

```js
import {Map} from 'immutable'
import {playList as mockPlayList} from "../../mock/data";
import * as actionTypes from './constants'

const initState = Map({
	...
  LyricsList:[],   // 当前播放的歌曲歌词，数据结构：[{time: 'xxx', content: 'xxx'}]
})

function reducer(state = initState, action) {
  switch (action.type) {
    ....
    case actionTypes.CHANGE_LYRICS_LIST:
      return state.set("LyricsList", action.LyricsList)
    default:
      return state
  }
}

export {
  reducer
}
```

store./player/actionCreators.js

```js
const changeLyricsListAction = (LyricsList) => ({
  type: actionTypes.CHANGE_LYRICS_LIST,
  LyricsList
})

// 添加歌曲到播放列表的逻辑
export const getCurrentSongAction = (id) => {
  return async (dispatch, getState) => {
    // 1. 根据id查找playList中是否有了该歌曲(需要返回索引)
    ...
    // 2. 解析即将播放的歌曲的歌词
    dispatch(getLyricsListAction(id))
  }
}

// 上一首/下一首的切换逻辑
export const changePlaySongAction = (tag) => {
  return (dispatch, getState) => {
    // 1. 获取当前播放歌曲的index
    ...
    // 2. 判断当前的播放顺序类型，生成新的currentIndex
    ...
    // 3. 解析即将播放的歌曲的歌词
    dispatch(getLyricsListAction(nextSong.id))
  }
}

// 获取/解析歌词的逻辑处理
export const getLyricsListAction = (id) => {
  return async dispatch => {
    let res = await getLyricList(id)
    let lyricData = res.lrc.lyric
    let lyricsList = parseLyrics(lyricData)
    dispatch(changeLyricsListAction(lyricsList))
  }
}
```

components/music-play-bar/index.js

```jsx
// 调用dispatch 发送网络请求保存数据到redux中
useEffect(() => {
  // dispatch(getCurrentSongAction(167876))
  dispatch(getCurrentSongAction(1377748914))  // 获取歌曲详情数据其中包括请求歌词
}, [dispatch])
```



### 4.9 根据当前时间找到对应歌词并展示

>核心：监听歌曲的播放，判断歌曲的播放时间和歌词时间是否对应的上，除此之外还要注意性能优化，类似于防抖节流函数

歌词展示效果

![image-20220528165318222](https://belong-1304212339.cos.ap-nanjing.myqcloud.com/img/2022-05-29-100655.jpg)

store/player/reducer.js

```js
const initState = Map({
	...
  LyricsList:[],   // 当前播放的歌曲歌词，数据结构：[{time: 'xxx', content: 'xxx'}]
  currentLyricIndex: -1,  // 记录当前播放歌曲的歌词索引
})

function reducer(state = initState, action) {
  switch (action.type) {
		.....
    case actionTypes.CHANGE_LYRICS_LIST:
      return state.set("LyricsList", action.LyricsList)
    case actionTypes.CHANGE_CURRENT_LYRICS_INDEX:
      return state.set("currentLyricIndex", action.currentLyricIndex)
    default:
      return state
  }
}
```

store/player/actionCreators.js

```js
export const changeCurrentLyricsIndexAction = (currentLyricIndex) => ({
  type: actionTypes.CHANGE_CURRENT_LYRICS_INDEX,
  currentLyricIndex
})
```

components/music-play-bar/index.jsx

```jsx
const MusicPlayBar = memo((props) => {
  ...
  // redux hook
  const {currentSong, sequenceType, LyricsList, currentLyricIndex} = useSelector(state => ({
    currentSong: state.getIn(["player", "currentSong"]),
    sequenceType: state.getIn(["player", "sequenceType"]),
    LyricsList: state.getIn(["player", "LyricsList"]),
    currentLyricIndex: state.getIn(["player", "currentLyricIndex"]),
  }), shallowEqual)

  // 监听音乐的播放
  const timeUpdate = (event) => {
    console.log('music-start....')
    if (!sliderIsChanging) {
      // 更新当前音乐播放的时间(需要转换成毫秒单位噢)
      setCurrentTime(event.target.currentTime * 1000)
      // 更新进度条
      setProgress((currentTime / currentSong.dt) * 100)
    }

    // 实时更新歌词
    let myCurrentTime = event.target.currentTime * 1000

    // 这里只能用原生的for循环遍历！不信的自己细品！
    let i = 0
    for (let item of LyricsList) {
      if (myCurrentTime < item.time) {
        break  // 一旦发现符合条件的歌词就立马终止循环！
      }
      i++  // 每次循环都需要i++操作
    }

    // 这里的判断是为了性能优化，只有跟上次的歌词索引不一样时才会重新获取新的歌词，而不是每次都重新获取新歌词
    if (currentLyricIndex !== i - 1) {
      let showLyrics = LyricsList[i - 1] // 获取要展示的歌词，是上一个
      dispatch(changeCurrentLyricsIndexAction(i - 1))

      // 使用toast展示歌词！
      message.open({
        key: 'lyrics',
        content: showLyrics && showLyrics.content,
        duration: 0,
        className: "lyrics-message"
      })
    }
  } 
 ....
})
```



### 小结

>后面的页面渲染无非就是`发送网络请求 => 请求数据保存到redux => 组件渲染数据`这套逻辑，笔者这里不就再记录笔记了
>
>相信童鞋们学到这里已经对react有了深刻的认知，其实react更考验开发者原生js的功底，这是毋庸置疑的！上手了react后再去学习vue3一些新特性，我相信会非常容易上手！🥳
