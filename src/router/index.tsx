import type { RouteObject } from 'react-router-dom'
import { lazy } from 'react'

const Discover = lazy(() => import('@/views/discover'))
const My = lazy(() => import('@/views/my'))

const routes: RouteObject[] = [
  { path: '/', element: <Discover /> },
  {
    path: '/my',
    element: <My />
  }
]

export default routes
