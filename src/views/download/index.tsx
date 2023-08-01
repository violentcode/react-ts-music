import type { FC, ReactNode } from 'react'
import { memo } from 'react'

interface IProps {
  children?: ReactNode
}
const DownLoad: FC<IProps> = () => {
  return <div>DownLoad</div>
}

export default memo(DownLoad)
