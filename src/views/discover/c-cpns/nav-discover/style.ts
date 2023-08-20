import { styled } from 'styled-components'

export const NavDiscoverWrapper = styled.div`
  height: 30px;
  background-color: ${(props) => props.theme.color.primary};
  .tabs {
    display: flex;
    align-items: center;
    line-height: 25px;
    a {
      margin: 0 17px;
      padding: 3px 13px;
      color: #fff;
      border-radius: 20px;
      &:hover {
        background-color: #9b0909;
      }
    }
    .tab:first-child {
      margin-left: 180px;
    }
  }
`
