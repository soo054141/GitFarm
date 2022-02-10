import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 25px;
  backdrop-filter: blur(50px);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 90;
  overflow: hidden;
  svg {
    width: 32px;
    height: 100%;
    cursor: pointer;
  }
`;

export const HeaderBackground = styled.div`
  width: 150%;
  height: 150%;
  position: absolute;
  left: -25%;
  top: -25%;
  backdrop-filter: blur(50px);
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  z-index: -1;
`;
