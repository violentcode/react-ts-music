import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  background-color: #242424;
  .app-header {
    display: flex;
    height: 70px;
  }
  .line {
    height: 5px;
    background-color: ${(props) => props.theme.color.primary};
  }
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
    position: relative;
    background-color: #000;
    a {
      color: #fff;
    }
    &::after {
      content: '';
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 0;
      border-color: ${(props) => props.theme.color.primary};
      border-width: 0 6px 6px;
      border-style: solid;
      border-left-color: transparent;
      border-right-color: transparent;
    }
  }
`
export const RightHeader = styled.div`
  display: flex;
  align-items: center;
  .ant-input-affix-wrapper {
    margin-left: 6px;
    width: 158px;
    height: 32px;
    border-radius: 32px;
    font-size: 12px;
    overflow: hidden;
    color: #9b9b9b;
    .ant-input-prefix {
      font-size: 16px;
    }
    .ant-input::placeholder {
      color: #9b9b9b;
    }
  }
  .creator {
    box-sizing: border-box;
    margin-left: 12px;
    width: 90px;
    height: 32px;
    color: #ccc;
    border-radius: 20px;
    border: 1px solid #4f4f4f;
    text-align: center;
    line-height: 32px;
    &:hover {
      cursor: pointer;
      color: #fff;
      border: 1px solid #ccc;
    }
  }

  .login {
    margin-left: 20px;
    color: #787878;
    &:hover {
      cursor: pointer;
      color: #999;
      text-decoration: underline;
    }
  }
`
