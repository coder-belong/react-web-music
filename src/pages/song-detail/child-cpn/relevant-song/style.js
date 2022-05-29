import styled from 'styled-components';

export const SongDetailWrapper = styled.div`
  .content {
    display: flex;
    background: url(${require("@/assets/img/wrap-bg.png")}) repeat-y #ffffff;
    
    
    & >.left {
      width: 710px;
    }
    
    & > .right {
      width: 270px;
      padding: 20px 40px 40px 30px;
    }
  }
`
