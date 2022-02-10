import styled from "styled-components";

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: rgba(196, 196, 196, 0.5);
  height: 100%;
`;
export const ModalContainer = styled.div`
  width: 340px;
  min-height: 194px;
  background-color: white;
  opacity: 1;
  display: flex;
  flex-direction: column;
  position: absolute;
  justify-content: center;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 50%;
  border-radius: 10px;
  z-index: 101;
`;

export const Title = styled.h1`
  font-size: 18px;
  font-weight: 600;
  color: ${(props) => props.theme.darkGray};
  margin: 25px 0px 0px 25px;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const BtnWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
  justify-content: center;
  & > :nth-child(2) {
    margin-left: 20px;
  }
`;
