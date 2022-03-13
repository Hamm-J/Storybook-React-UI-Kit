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
  Button,
  Badge,
} from "./Island.styled";
import PropTypes from "prop-types";

const Island = ({
  head,
  description,
  progressBar,
  progressBarValue,
  badgeLabel,
  buttonLabel,
  handleButton,
  handleParams1,
  handleParams2,
}) => {
  return (
    <IslandContainer>
      <CornerCircle />
      {progressBar && (
        <>
          <ProgressBar value={progressBarValue} max="100" id="progress-bar">
            {progressBarValue}
          </ProgressBar>
          <ProgressBarLabel htmlFor="progress-bar">
            Progress {progressBarValue}%
          </ProgressBarLabel>
        </>
      )}
      <TopWrapper>
        <TextWrapper progressBar={progressBar}>
          <Badge>{badgeLabel}</Badge>
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
        <Button onClick={(e) => handleButton(e)}>{buttonLabel}</Button>
        <Link onClick={(e) => handleParams1(e)}>
          <CapIcon /> Params
        </Link>
        <Link onClick={(e) => handleParams2(e)}>
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
  badgeLabel: PropTypes.string,
  buttonLabel: PropTypes.string,
};

export default Island;
