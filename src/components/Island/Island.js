import {
  IslandContainer,
  Head,
  Description,
  MathSymbol,
  SymbolBackground,
  CornerCircle,
  Link,
  CapIcon,
  PenIcon,
  TextWrapper,
  ButtonWrapper,
  SymbolWrapper,
  TopWrapper,
  ProgressBar,
  ProgressBarLabel,
} from "./Island.styled";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import Badge from "../Badge/Badge";

const Island = ({ head, description, progressBar, progressBarValue }) => {
  return (
    <IslandContainer>
      <CornerCircle />
      {progressBar && (
        <>
          <ProgressBar value={progressBarValue} max="100" id="progress-bar">
            {progressBarValue}
          </ProgressBar>
          <ProgressBarLabel for="progress-bar">
            Progress {progressBarValue}%
          </ProgressBarLabel>
        </>
      )}
      <TopWrapper>
        <TextWrapper progressBar={progressBar}>
          <Badge label="Your Text"></Badge>
          <Head>{head}</Head>
          <Description>{description}</Description>
        </TextWrapper>
        <SymbolWrapper progressBar={progressBar}>
          <SymbolBackground>
            <MathSymbol>÷</MathSymbol>
          </SymbolBackground>
        </SymbolWrapper>
      </TopWrapper>
      <ButtonWrapper>
        <Button buttonType="label" label="Button"></Button>
        <Link>
          <CapIcon /> Params
        </Link>
        <Link>
          <PenIcon />
          Params
        </Link>
      </ButtonWrapper>
    </IslandContainer>
  );
};

Island.propTypes = {
  head: PropTypes.string,
  description: PropTypes.string,
  progressBar: PropTypes.bool,
  progressBarValue: PropTypes.number,
};

export default Island;
