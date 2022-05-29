import styled from "styled-components";

const SongSheetCardWrapper = styled.div`
  width: 140px;
  margin: 20px 0;

  .cover {
    position: relative;

    & > img {
      width: 140px;
      height: 140px;
    }

    .bottom-info {
      position: absolute;
      bottom: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 10px;
      background-position: 0 -537px;
      background-color: rgba(0, 0, 0, .5);
      color: #ccc;
      width: 100%;

      .erji {
        margin-right: 10px;
        display: inline-block;
        width: 14px;
        height: 11px;
        background-position: 0 -24px;
      }

      .play {
        display: inline-block;
        width: 16px;
        height: 17px;
        background-position: 0 0;
      }
    }
  }
  .desc {
    font-size: 14px;
    color: #000;
    margin-top: 5px;
  }

`
export default SongSheetCardWrapper;
