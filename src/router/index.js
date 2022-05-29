import {lazy} from "react";
import {Redirect} from "react-router-dom";

// import Discover from "../pages/discover";
// import Mine from "../pages/mine";
// import Friend from "../pages/friend";
// import Recommend from "../pages/recommend";
// import Ranking from "../pages/ranking";
// import SongSheet from "../pages/song-sheet";
// import Anchor from "../pages/anchor";
// import Singer from "../pages/singer";
// import Album from "../pages/album";
// import SongDetail from "../pages/song-detail";

// 路由懒加载方式
const Discover = lazy(() => import("../pages/discover"))
const Mine = lazy(() => import("../pages/mine"))
const Friend = lazy(() => import("../pages/friend"))
const Recommend = lazy(() => import("../pages/recommend"))
const Ranking = lazy(() => import("../pages/ranking"))
const SongSheet = lazy(() => import("../pages/song-sheet"))
const Anchor = lazy(() => import("../pages/anchor"))
const Singer = lazy(() => import("../pages/singer"))
const Album = lazy(() => import("../pages/album"))
const SongDetail = lazy(() => import("../pages/song-detail"))

const routes = [
  {
    path: '/',
    exact: true,
    // 重定向路由
    render: () => <Redirect to='/discover'/>
  },
  {
    path: '/todo',
    exact: true,
    // 重定向路由
    render: () => <Redirect to='/discover'/>
  },
  {
    path: '/discover',
    component: Discover,
    // 配置子路由
    routes: [
      {
        path: '/discover',
        exact: true,
        render: () => <Redirect to='/discover/recommend'/>
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
  {
    path: '/my',
    component: Mine
  },
  {
    path: '/friend',
    component: Friend
  },
  {
    path: '/song',
    component: SongDetail
  },
]

export default routes
