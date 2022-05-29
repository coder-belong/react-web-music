import styled from "styled-components";

const DiscoverWrapper = styled.div`
  .discover-menu {
    width: 100%;
    overflow: hidden;
    background-color: #c40400;
    height: 30px;
    line-height: 25px;
    display: flex;
    padding-left: 180px;
    a {
      border-radius: 20px;
      padding: 0px 13px;
      color: white;
      margin: 0 17px;
      
      &:hover, &.active {
        text-decoration: none;
        background-color: #9d0500;
      }
    }
  }
`

export  {
  DiscoverWrapper
}
