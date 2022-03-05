import styled from "styled-components";
import { School, Edit } from "@styled-icons/material";

export const IslandContainer = styled.div`
  width: 400px;
  background-color: #6e41e2;
  border-radius: 8px;
  padding: 20px 20px 20px 20px;
  /* padding: 36px 20px 20px 20px; */
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
`;

export const Head = styled.h1`
  color: white;
  padding: 0;
  margin: 0;
  font-size: 20px;
  line-height: 28px;
  word-wrap: break-word;
  inline-size: 300px;
`;

export const Description = styled.p`
  color: white;
  font-size: 16px;
  line-height: 24px;
  word-wrap: break-word;
  inline-size: 300px;
`;

export const MathSymbol = styled.div`
  font-size: 30px;
  color: #6e41e2;
  padding-bottom: 5px;
  cursor: default;
  user-select: none;
`;

export const SymbolBackground = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  border-radius: 6px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CornerCircle = styled.div`
  display: block;
  position: absolute;
  top: -120px;
  left: 290px;
  height: 220px;
  width: 220px;
  overflow: hidden;
  background-color: white;
  opacity: 0.24;
  border-radius: 50%;
`;

export const Link = styled.a`
  color: white;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const CapIcon = styled(School)`
  width: 20px;
  margin-right: 5px;
`;

export const PenIcon = styled(Edit)`
  width: 20px;
  margin-right: 5px;
`;

export const TextWrapper = styled.div`
  padding-top: ${(props) => (props.progressBar ? "16px" : "0")};
  /* padding-top: 16px; */
  padding-bottom: 32px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
`;

export const SymbolWrapper = styled.div`
  padding-top: ${(props) => (props.progressBar ? "11px" : "0")};
`;

export const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProgressBar = styled.progress`
  position: absolute;
  top: 0;
  left: 0;
  background: #ffffff00;
  /* opacity: 0; */
  border: none;
  height: 24px;
  width: 100%;

  &::-moz-progress-bar {
    background: #27ae60;
  }
  &::-webkit-progress-bar {
    background: #ffffff00;
  }
  &::-webkit-progress-value {
    background: #27ae60;
  }
`;

export const ProgressBarLabel = styled.label`
  position: absolute;
  top: 2px;
  left: 20px;
  color: white;
`;
