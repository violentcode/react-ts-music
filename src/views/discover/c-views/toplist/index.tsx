import type { FC, ReactNode } from 'react'
import { memo } from 'react'

interface IProps {
  children?: ReactNode
}
const Toplist: FC<IProps> = () => {
  return <div>Toplist</div>
}

export default memo(Toplist)
