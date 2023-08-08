import type { FC, ReactNode } from 'react'
import { Suspense, memo } from 'react'
import { Outlet } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { changeName } from '@/store/modules/discover'
import { useAppSelecter } from '@/store'

interface IProps {
  children?: ReactNode
}

const Discover: FC<IProps> = () => {
  const { name } = useAppSelecter((state) => {
    return {
      name: state.discover.name
    }
  })
  const dispatch = useDispatch()
  return (
    <div>
      <Suspense fallback="loading...">
        当前姓名: {name}
        <button onClick={() => dispatch(changeName('哈哈哈'))}>改名字</button>
        <Outlet />
      </Suspense>
    </div>
  )
}

export default memo(Discover)
