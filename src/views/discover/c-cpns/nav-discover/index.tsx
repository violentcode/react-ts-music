import type { FC, ReactNode } from 'react'
import { memo } from 'react'
import discover_title from '@/assects/data/discover_title'
import { NavDiscoverWrapper } from './style'
import { NavLink } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}
const NavDiscover: FC<IProps> = () => {
  interface IItem {
    title: string
    path: string
  }

  function createTab(item: IItem) {
    return (
      <div className="tab" key={item.path}>
        <NavLink
          to={item.path}
          style={({ isActive }) => {
            return { backgroundColor: isActive ? '#9b0909' : '' }
          }}
        >
          {item.title}
        </NavLink>
      </div>
    )
  }
  return (
    <NavDiscoverWrapper>
      <div className="tabs  wrap-v1">
        {discover_title.map((item) => createTab(item))}
      </div>
    </NavDiscoverWrapper>
  )
}

export default memo(NavDiscover)
