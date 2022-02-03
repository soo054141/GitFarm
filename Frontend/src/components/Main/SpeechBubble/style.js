import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 135px;
  background: #fff;
  padding: 5px;
  margin: 37px auto;
  position: relative;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  &::before {
    content: "";
    display: block;
    width: 0;
    border-width: 15px 15px 0px 15px;
    border-color: #fff transparent;
    border-style: solid;
    position: absolute;
    bottom: -15px;
    right: 50%;
    transform: translateX(50%);
  }
`;

export const SpeechBubbleWrapper = styled.div``;

export const SpeechBubbleTitle = styled.h3`
  margin-bottom: 13px;
  font-size: 20px;
  font-weight: 600;
  line-height: 23px;
  color: ${(props) => props.theme.darkGray};
`;

export const SpeechBubbleText = styled.p`
  font-size: 12px;
  line-height: 14px;
  color: ${(props) => props.theme.lightGray};
  color: #939292;
`;
