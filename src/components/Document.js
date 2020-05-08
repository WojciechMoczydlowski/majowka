import React, { useState } from "react";
import styled from "styled-components";
import background from "../assets/images/documentBackground.jpg";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
function Document({
  index,
  title,
  date,
  description,
  mystery,
  answer,
  unlockNextDocument,
  isLastDocument,
  label,
  link,
}) {
  const [inputValue, setInputValue] = useState("");
  const [isError, setIsError] = useState(false);
  const onToggleInput = () => {
    if (!answer || inputValue.toLowerCase() === answer) {
      setIsError(false);
      unlockNextDocument(index);
    } else {
      setIsError(true);
    }
  };

  return (
    <Root isDown={index % 2 === 1}>
      <Content>
        <TopSide>
          <Title>{title}</Title>
          <Date>{date}</Date>
        </TopSide>
        <MiddleSide>
          <Description>{description}</Description>
          <Mystery>{mystery}</Mystery>
          {link && (
            <A href={link.href} target="_blank">
              {link.label}
            </A>
          )}
        </MiddleSide>
        <BottomSide>
          {answer && (
            <Answer
              placeholder="Podaj odpowiedź"
              label={label}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              error={isError}
              helperText={isError ? "Podaj poprawną odpowiedź" : undefined}
            />
          )}
          {!isLastDocument && (
            <NextButton variant="outlined" onClick={onToggleInput}>
              Dalej
            </NextButton>
          )}
        </BottomSide>
      </Content>
    </Root>
  );
}

const Root = styled.div`
  margin-bottom: 50px;

  background-image: url(${background});
  background-size: cover;
  background-repeat: repeat-y;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 100%;
  padding: 20px;

  white-space: pre-wrap;
`;

const TopSide = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
`;
const MiddleSide = styled.div``;
const BottomSide = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
`;

const Title = styled.h2`
  margin: 0;
`;
const Date = styled.div``;
const Description = styled.p``;
const Mystery = styled.p``;
const Answer = styled(TextField)`
  margin-right: 16px;
`;

const NextButton = styled(Button)`
  font-family: "Caveat" !important;
`;

const A = styled.a`
  display: block;
  margin-bottom: 24px;
`;
export default Document;
