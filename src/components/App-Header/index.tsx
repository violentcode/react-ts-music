import type { FC, ReactNode } from 'react'
import { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { HeaderWrapper, LeftHeader, RightHeader } from './style'
import header_title from '@/assects/data/header_title'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

interface IProps {
  children?: ReactNode
}
const AppHeader: FC<IProps> = () => {
  function createTab(item: any) {
    let el: ReactNode
    switch (item.type) {
      case 'path':
        el = <NavLink to={item.path}>{item.title}</NavLink>
        break
      case 'link':
        el = (
          <a href={item.link} target="_blank">
            {item.title}
          </a>
        )
        break
    }
    return el
  }
  return (
    <HeaderWrapper>
      <div className="app-header wrap-v1">
        <LeftHeader>
          <a className="logo sprite_01">网易云音乐</a>
          <div className="list">
            {header_title.map((item) => {
              return (
                <div key={item.title} className="item">
                  {createTab(item)}
                </div>
              )
            })}
          </div>
        </LeftHeader>
        <RightHeader>
          <Input
            size="small"
            placeholder="音乐/视频/电台/用户"
            prefix={<SearchOutlined />}
          />
          <div className="creator">创作者中心</div>
          <div className="login">登录</div>
        </RightHeader>
      </div>
      <div className="line"></div>
    </HeaderWrapper>
  )
}

export default memo(AppHeader)
