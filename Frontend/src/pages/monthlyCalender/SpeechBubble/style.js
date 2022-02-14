import styled from "styled-components";

export const Container = styled.div`
  width: 350px;
  height: 90px;
  background: #fff;
  padding: 5px;
  margin: 37px auto;
  position: relative;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
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

export const Wrapper = styled.div``;

export const Title = styled.h3`
  font-size: 20px;
  font-weight: 600;
  line-height: 23px;
  color: ${(props) => props.theme.mainColor};
  font-weight: bold;
`;

export const Text = styled.p`
  font-size: 12px;
  line-height: 14px;
  color: ${(props) => props.theme.lightGray};
  margin-bottom: 10px;
`;
