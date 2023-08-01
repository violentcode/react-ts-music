import type { FC, ReactNode } from 'react'
import { memo } from 'react'

interface IProps {
  children?: ReactNode
}
const Artist: FC<IProps> = () => {
  return <div>Artist</div>
}

export default memo(Artist)
