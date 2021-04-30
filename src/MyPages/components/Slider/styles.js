import styled, { css } from 'styled-components';

export const SliderContainer = styled.div`
  position: relative;
  background: #fafafa;
  overflow: hidden;
  width: 100%;
  height: ${(props) => props.height || '500px'};
`;

export const SliderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border: 1px solid;
  display: flex;
  flex-wrap: wrap;
`;

export const SliderItem = styled.div`
  position: relative;
  height: 500px;
  width: ${(props) => props.width + 'px' || '100%'};
  border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  border-radius: 100%;
`;

export const Navigation = styled.ul`
  position: absolute;
  bottom: 20px;
  margin: 0;
  padding: 0;
  left: 0;
  display: flex;
`;

export const NavigationItem = styled.li`
  list-style: none;
  width: 15px;
  height: 15px;
  margin: 0 3px;
  background: #f00;
  border-radius: 100%;
  cursor: pointer;
  align-items: center;
  justify-self: center;

  ${(props) =>
    props.active &&
    css`
      background: #000;
    `};
`;

export const Control = styled.div`
  position: absolute;
  top: 0;
  width: 40px;
  height: 40px;
  margin: 10px;
  cursor: pointer;
`;

export const ControlLeft = styled(Control)`
  left: 0;
`;
export const ControlRight = styled(Control)`
  right: 0;
`;

export const BigElement = styled.div`
  min-height: 1000px;
  background: #61dafb;
  width: 30px;
`;
