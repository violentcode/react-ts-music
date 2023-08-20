import type { FC, ReactNode } from 'react'
import { Suspense, memo } from 'react'
import { Outlet } from 'react-router-dom'
import NavDiscover from './c-cpns/nav-discover'

interface IProps {
  children?: ReactNode
}

const Discover: FC<IProps> = () => {
  return (
    <div>
      <NavDiscover />
      <Suspense fallback="loading...">
        <Outlet />
      </Suspense>
    </div>
  )
}

export default memo(Discover)
