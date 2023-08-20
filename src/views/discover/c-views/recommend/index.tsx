import type { FC, ReactNode } from 'react'
import { memo, useEffect } from 'react'
import { getBannerListAction } from './store'
import Slider from './c-cpns/slider'
import { useAppDispatch } from '@/store'

interface IProps {
  children?: ReactNode
}
const Recommend: FC<IProps> = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getBannerListAction())
  }, [])
  return (
    <div>
      <Slider></Slider>
    </div>
  )
}

export default memo(Recommend)
