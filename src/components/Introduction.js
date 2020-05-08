import React from "react";
import styled from "styled-components";
import background from "../assets/images/documentBackground.jpg";
import {
  introductionDate,
  introductionTitle,
  introductionDescription,
} from "../services/introduction";
function Introduction() {
  return (
    <Root>
      <Content>
        <TopSide>
          <Title>{introductionTitle}</Title>
          <Date>{introductionDate}</Date>
        </TopSide>
        <MiddleSide>
          <Description>{introductionDescription}</Description>
        </MiddleSide>
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

const Title = styled.h2`
  margin: 0;
`;
const Date = styled.div``;
const Description = styled.p``;

export default Introduction;
