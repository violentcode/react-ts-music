import type { FC, ReactNode } from 'react'
import { memo } from 'react'
import { SliderWrapper } from './style'
import { useAppSelecter } from '@/store'
import { shallowEqual } from 'react-redux'

interface IProps {
  children?: ReactNode
}
const Slider: FC<IProps> = () => {
  const { bannerList } = useAppSelecter(
    (state) => ({
      bannerList: state.recommend.bannerList
    }),
    shallowEqual
  )
  return (
    <SliderWrapper>{bannerList.map((item) => item.imageUrl)}</SliderWrapper>
  )
}

export default memo(Slider)
