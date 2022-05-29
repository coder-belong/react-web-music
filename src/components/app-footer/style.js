import styled from "styled-components";

const FooterWrapper = styled.div`
  padding: 20px 0 72px 0;
  color: #666;
  border-top: 1px solid #d3d3d3;

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left {
      .p1 {
        color: #999;

        span {
          margin: 0 10px;
        }
      }

      .p2 {
        margin-top: 8px;

        span:first-child {
          margin-right: 16px;
        }
      }

      .p3 {
        margin-top: 8px;
      }
    }

    .right {
      display: flex;
      justify-content: space-between;

      .item {
        margin-right: 36px;

        a {
          display: block;
          width: 50px;
          height: 45px;
          background-image: url(${require('@/assets/img/sprite_footer_02.png')});
          background-size: 110px 450px;
        }

        :nth-child(1) a {
          background-position: -60px -101px;
        }

        :nth-child(2) a {
          background-position: 0 0;
        }

        :nth-child(3) a {
          background-position: -60px -50px;
        }

        :nth-child(4) a {
          background-position: 0 -101px;
        }

        span {
          margin-top: 5px;
          display: block;
          width: 52px;
          height: 10px;
          background-image: url(${require("@/assets/img/sprite_footer_01.png")});
          background-size: 180px 100px;
        }
      }
    }
  }
`

export {
  FooterWrapper
}
