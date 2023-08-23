import { styled } from 'styled-components'

interface IProps {
  bgimgurl: string
}
export const SliderWrapper = styled.div<IProps>`
  background: url(${(props) => props.bgimgurl}) center center / 6000px;
  height: 285px;
  position: relative;
  .inner {
    display: flex;
  }
`

export const LeftWrapper = styled.div`
  width: 730px;
  .item img {
    height: 285px;
  }
  .slick-dots {
    bottom: 16px;
    li {
      width: 14px;
    }
    .slick-active {
      width: 14px !important;
      button {
        background-color: #c20c0c !important;
      }
    }
    button {
      width: 7px !important;
      height: 7px !important;
      border-radius: 50% !important;
      &:hover {
        background-color: #c20c0c !important;
      }
    }
  }
`

export const RightWrapper = styled.div`
  width: 250px;
  height: 285px;
  background: url(${require('@/assects/img/download.png')});
`

export const ControlWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  > button {
    position: absolute;
    width: 37px;
    height: 63px;
    transform: translateY(-50%);
    background-color: transparent;
    cursor: pointer;
    &:hover {
      background-color: #999;
    }
  }
  .left {
    left: -558px;
    background-image: url(${require('@/assects/img/banner-control-left.png')});
  }

  .right {
    right: -558px;
    background-image: url(${require('@/assects/img/banner-control-right.png')});
  }
`
