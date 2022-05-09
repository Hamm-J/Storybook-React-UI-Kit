import styled from "styled-components";
import { School, Edit } from "@styled-icons/material";

export const IslandContainer = styled.div`
  width: 400px;
  background-color: ${(props) => props.theme.colorPrimary};
  border-radius: 8px;
  padding: 20px 20px 20px 20px;
  position: relative;

  box-sizing: border-box;
  overflow-clip-margin: -2px;
  overflow: hidden;
`;

export const Head = styled.h1`
  color: ${(props) => props.theme.colorWhite};
  font: ${(props) => props.theme.fontHeading6};
  padding: 0;
  margin: 0;
  word-wrap: break-word;
  inline-size: 300px;
  margin-top: 6px;
`;

export const Description = styled.p`
  color: ${(props) => props.theme.colorWhite};
  font: ${(props) => props.theme.fontParagraph2};
  word-wrap: break-word;
  inline-size: 300px;
  margin: 0;
  padding: 0;
`;

export const MathSymbol = styled.div`
  font-size: 30px;
  color: ${(props) => props.theme.colorPrimary};
  padding-bottom: 5px;
  cursor: default;
  user-select: none;
`;

export const SymbolBackground = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  border-radius: 6px;
  background-color: ${(props) => props.theme.colorWhite};
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
  background-color: ${(props) => props.theme.colorWhite};
  opacity: 0.24;
  border-radius: 50%;
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.colorPrimary};
  outline: none;
  border: 2px solid ${(props) => props.theme.colorWhite};
  color: ${(props) => props.theme.colorWhite};
  padding: 10px;
  border-radius: 4px;
  font: ${(props) => props.theme.fontParagraph2};
  cursor: pointer;
  word-wrap: break-word;
  inline-size: 100px;

  &:hover {
    background-color: ${(props) => props.theme.colorHover};
  }
  &:active {
    background-color: ${(props) => props.theme.colorActive};
  }
`;

export const Badge = styled.div`
  background-color: ${(props) => props.theme.colorWhite};
  color: ${(props) => props.theme.colorPrimary};
  font: ${(props) => props.theme.fontParagraph3Bold};
  border-radius: 100px;
  min-height: 24px;
  max-width: fit-content;
  padding: 1px 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  max-width: 69px;
`;

export const Link = styled.a`
  color: ${(props) => props.theme.colorWhite};
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
  border: none;
  height: 24px;
  width: 100%;

  &::-moz-progress-bar {
    background: ${(props) => props.theme.colorGreen};
  }
  &::-webkit-progress-bar {
    background: #ffffff00;
  }
  &::-webkit-progress-value {
    background: ${(props) => props.theme.colorGreen};
  }
`;

export const ProgressBarLabel = styled.label`
  position: absolute;
  top: 2px;
  left: 20px;
  color: ${(props) => props.theme.colorWhite};
  font: ${(props) => props.theme.fontParagraph3};
`;
