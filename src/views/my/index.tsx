import type { FC, ReactNode } from 'react'
import { memo, useState } from 'react'

interface IProps {
  children?: ReactNode
}
const My: FC<IProps> = () => {
  const [isItem, setIsItem] = useState(true)

  return (
    <div className={isItem ? 'title item' : 'title'}>
      my <button onClick={() => setIsItem(!isItem)}>切换</button>
    </div>
  )
}

export default memo(My)
