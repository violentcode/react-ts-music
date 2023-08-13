import type { FC, ReactNode } from 'react'
import { memo } from 'react'
import { Link } from 'react-router-dom'
import { HeaderWrapper } from './style'

interface IProps {
  children?: ReactNode
}
const AppHeader: FC<IProps> = () => {
  return (
    <HeaderWrapper>
      <Link to="/discover">发现音乐</Link>
      <Link to="/my">我的音乐</Link>
      <Link to="/friend">关注</Link>
    </HeaderWrapper>
  )
}

export default memo(AppHeader)
