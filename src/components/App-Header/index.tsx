import type { FC, ReactNode } from 'react'
import { memo, useState } from 'react'
import { Link } from 'react-router-dom'
import { HeaderWrapper, LeftHeader, RightHeader } from './style'
import header_title from '@/assects/data/header_title'
import classNames from 'classnames'
import { Input, Button } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

interface IProps {
  children?: ReactNode
}
const AppHeader: FC<IProps> = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  function createTab(item: any) {
    console.log(activeIndex)
    let el: ReactNode
    switch (item.type) {
      case 'path':
        el = <Link to={item.path}>{item.title}</Link>
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
            {header_title.map((item, index) => {
              return (
                <div
                  key={item.title}
                  className={classNames({
                    item: true,
                    active: index === activeIndex
                  })}
                  onClick={() => setActiveIndex(index)}
                >
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
          <Button>创作者中心</Button>
          <div className="login">登陆</div>
        </RightHeader>
      </div>
    </HeaderWrapper>
  )
}

export default memo(AppHeader)
