import styled from 'styled-components'

const HeaderWrapper = styled.div`
  color: #fff;
  background: #242424;

  // 主题内容区域
  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
    // 左侧区域
    .left {
      display: flex;

      .logo {
        width: 176px;
        height: 70px;
        background-position: 0 0;
        text-indent: -9999px;
      }

      .menu-list {
        display: flex;
        align-items: center;

        .menu-item {
          display: block;
          position: relative;
          height: 70px;
          line-height: 70px;
          font-size: 14px;
          padding: 0 19px;
          color: #ccc;

          &.active, &:hover {
            background-color: #000000;
            color: white;
            text-decoration: none;
          }

          &.active .subscript-icon {
            position: absolute;
            display: inline-block;
            width: 12px;
            height: 7px;
            bottom: -1px;
            left: 50%;
            transform: translateX(-50%);
            background-position: -226px 0;
          }
          
          &:last-child::after{
            position: absolute;
            content: "";
            width: 28px;
            height: 19px;
            background-image: url(${require("@/assets/img/sprite_01.png")});
            background-position: -190px 0;
            top: 20px;
            right: -15px;
          }
        }
      }
    }

    .right {
      display: flex;
      align-items: center;
      .search {
        width: 158px;
        height: 32px;
        border-radius: 16px;
        
        input {
          &::placeholder {
            font-size: 12px;
          }
        }
      }
      .author-center {
        width: 90px;
        height: 32px;
        line-height: 32px;
        text-align: center;
        border-radius: 16px;
        border: 1px solid #666;
        color: #ccc;
        font-size: 12px;
        margin: 0 16px;
      }
    }
  }


  .divider {
    height: 5px;
    background-color: #c40400;
  }
`

export {
  HeaderWrapper
}
