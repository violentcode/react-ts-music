import type { FC, ReactNode } from 'react'
import { memo } from 'react'

interface IProps {
  children?: ReactNode
}
const Album: FC<IProps> = () => {
  return <div>Album</div>
}

export default memo(Album)
