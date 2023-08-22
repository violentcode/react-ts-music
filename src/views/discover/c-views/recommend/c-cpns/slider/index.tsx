import type { FC, ReactNode, ComponentRef } from 'react'
import { memo, useRef, useState } from 'react'
import {
  ControlWrapper,
  LeftWrapper,
  RightWrapper,
  SliderWrapper
} from './style'
import { useAppSelecter } from '@/store'
import { shallowEqual } from 'react-redux'

import { Carousel } from 'antd'

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

  const [currentSlide, setCurrentSlide] = useState(0)
  function changeSlider(currentSlide: number) {
    setCurrentSlide(currentSlide)
  }

  const carouselRef = useRef<ComponentRef<typeof Carousel>>(null)
  const handleClickPrev = () => {
    carouselRef.current?.prev()
  }
  const handleClickNext = () => {
    carouselRef.current?.next()
  }
  const bgcImgUrl = bannerList[currentSlide]
    ? bannerList[currentSlide].imageUrl + '?imageView&blur=40x20'
    : ''
  return (
    <SliderWrapper bgimgurl={bgcImgUrl}>
      <div className="inner wrap-v2">
        <LeftWrapper>
          <Carousel afterChange={changeSlider} ref={carouselRef} effect="fade">
            {bannerList.map((item) => {
              return (
                <div key={item.targetId} className="item">
                  <img src={item.imageUrl} />
                </div>
              )
            })}
          </Carousel>
        </LeftWrapper>
        <RightWrapper></RightWrapper>
        <ControlWrapper>
          <button className="left" onClick={handleClickPrev}></button>
          <button className="right" onClick={handleClickNext}></button>
        </ControlWrapper>
      </div>
    </SliderWrapper>
  )
}

export default memo(Slider)
