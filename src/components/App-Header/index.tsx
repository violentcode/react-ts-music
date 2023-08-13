import type { FC, ReactNode } from 'react'
import { memo } from 'react'
import { Link } from 'react-router-dom'
import { HeaderWrapper, LeftHeader, RightHeader } from './style'
import header_title from '@/assects/data/header_title'

interface IProps {
  children?: ReactNode
}
const AppHeader: FC<IProps> = () => {
  function createTab(item: any) {
    let el: ReactNode
    switch (item.type) {
      case 'path':
        break
      case 'link':
        break
    }
  }
  return (
    <HeaderWrapper>
      <div className="app-header wrap-v1">
        <LeftHeader>
          <a className="logo sprite_01">网易云音乐</a>
          <div className="list">
            {header_title.map((item) => createTab(item))}
          </div>
        </LeftHeader>
        <RightHeader>右侧搜索</RightHeader>
      </div>
    </HeaderWrapper>
  )
}

export default memo(AppHeader)
