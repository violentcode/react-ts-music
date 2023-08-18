import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  height: 70px;
  background-color: #242424;
`
export const LeftHeader = styled.div`
  display: flex;
  align-items: center;
  color: #fff;

  .logo {
    display: block;
    background-position: 0 0;
    width: 176px;
    height: 70px;
    text-indent: -9999px;
  }
  .list {
    display: flex;
    height: 70px;
    line-height: 70px;
  }

  .item {
    font-size: 14px;
    :hover {
      color: #fff;
      background-color: #000;
    }
    a {
      display: block;
      padding: 0 19px;
      height: 100%;
      color: #ccc;
    }
  }
  .active {
    background-color: #000;
    a {
      color: #fff;
    }
  }
`
export const RightHeader = styled.div``
