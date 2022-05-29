import styled from 'styled-components'

const MusicPlayBarWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 52px;
  background-color: rgb(46, 46, 46);

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;

    .control {
      display: flex;
      align-items: center;

      .sprite_player:hover {
        cursor: pointer;
      }

      .prev, .next {
        width: 28px;
        height: 28px;
      }

      .prev {
        background-position: 0 -130px;
      }

      .play {
        width: 36px;
        height: 36px;
        margin: 0 8px;
        background-position: 0 ${props => props.isPlaying ? "-165px" : "-204px"};
      }

      .next {
        background-position: -80px -130px;
      }
    }

    .music-info {
      display: flex;
      width: 642px;
      height: 100%;
      align-items: center;

      .image {
        width: 34px;
        height: 34px;
        border-radius: 5px;
      }

      .song {
        flex: 1;
        color: #a1a1a1;
        margin-left: 10px;

        .top-info {
          color: #e1e1e1;
          position: relative;
          top: 8px;
          left: 8px;

          .singer-name {
            color: #a1a1a1;
            margin-left: 10px;
          }
        }

        .bottom-progress {
          display: flex;
          align-items: center;

          .ant-slider {
            width: 493px;
            margin-right: 10px;

            .ant-slider-rail {
              height: 9px;
              background: url(${require("@/assets/img/progress_bar.png")}) right 0;
            }

            .ant-slider-track {
              height: 9px;
              background: url(${require("@/assets/img/progress_bar.png")}) left -66px;
            }

            .ant-slider-handle {
              width: 22px;
              height: 24px;
              border: none;
              margin-top: -7px;
              background: url(${require("@/assets/img/sprite_icon.png")}) 0 -250px;
            }
          }

          .time {
            .now-time {
              color: #e1e1e1;
            }

            .divider {
              margin: 0 3px;
            }
          }

        }
      }
    }

    .operator {
      display: flex;
      position: relative;
      top: 5px;

      .btn {
        width: 25px;
        height: 25px;

        &:hover {
          color: white;
          cursor: pointer;
        }
      }

      .left {
        .favor {
          background-position: -88px -163px;
        }

        .share {
          background-position: -114px -163px;
        }
      }

      .right {
        position: relative;
        display: flex;
        align-items: center;
        width: 126px;
        padding-left: 13px;
        background-position: -147px -248px;

        .volume {
          background-position: -2px -248px;
        }

        .loop {
          position: relative;
          background-position: ${props => {
            switch (props.sequenceType) {
              case 1:
                return "-66px -248px";
              case 2:
                return "-66px -344px";
              default:
                return "-3px -344px";
            }
          }};
        }

        .playlist {
          padding-left: 18px;
          text-align: center;
          color: #ccc;
          width: 59px;
          background-position: -42px -68px;
        }

        .sequence-info {
          position: absolute;
          top: -60px;
          left: -40px;
          width: 100px;
          text-align: center;
          background: rgb(25, 25, 25);
          padding: 10px;
          color: white;
          border-radius: 10px;
        }
      }
    }
  }
`

export {
  MusicPlayBarWrapper
}
