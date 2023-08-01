import type { RouteObject } from 'react-router-dom'
import { lazy } from 'react'

const Discover = lazy(() => import('@/views/discover'))
const My = lazy(() => import('@/views/my'))
const Friend = lazy(() => import('@/views/friend'))
const Recommend = lazy(() => import('@/views/discover/c-views/recommend'))
const Toplist = lazy(() => import('@/views/discover/c-views/toplist'))
const Playlist = lazy(() => import('@/views/discover/c-views/playlist'))
const Djradio = lazy(() => import('@/views/discover/c-views/djradio'))
const Artist = lazy(() => import('@/views/discover/c-views/artist'))
const Album = lazy(() => import('@/views/discover/c-views/album'))

const routes: RouteObject[] = [
  { path: '/', element: <Discover /> },
  {
    path: '/discover',
    element: <Discover />,
    children: [
      { path: '/discover', element: <Recommend /> },
      { path: '/discover/Toplist', element: <Toplist /> },
      { path: '/discover/playlist', element: <Playlist /> },
      { path: '/discover/djradio', element: <Djradio /> },
      { path: '/discover/artist', element: <Artist /> },
      { path: '/discover/album', element: <Album /> }
    ]
  },
  {
    path: '/my',
    element: <My />
  },
  {
    path: '/friend',
    element: <Friend />
  }
]

export default routes
