import React from "react";
import styled from "styled-components";
import documents from "./services/documents";
import { useState } from "react";
import Document from "./components/Document";
import Introduction from "./components/Introduction";
import mainBackground from "./assets/images/mainBackground.jpg";
import GlobalStyle from "./styles/global";
import produce from "immer";
function App() {
  const [documentsState, setDocumentsState] = useState(() =>
    documents.map((item, index) => ({
      ...item,
      isVisible: true,
      // isVisible: index === 0 ? true : false,
      isLastDocument: index === documents.length - 1,
    }))
  );

  const unlockNextDocument = (index) => {
    if (index >= documentsState.length - 1) {
      return;
    }
    const newDocuments = produce(documentsState, (draft) => {
      draft[index + 1].isVisible = true;
    });
    setDocumentsState(newDocuments);
  };

  return (
    <>
      <Root>
        <Wrapper>
          <Title>Wygrać z czasem</Title>
          <Introduction />
          <Documents>
            {documentsState.map(
              (item, index) =>
                item.isVisible && (
                  <DocumentWrapper key={index}>
                    <Document
                      link={item.link}
                      index={index}
                      title={item.title}
                      date={item.date}
                      description={item.description}
                      mystery={item.mystery}
                      answer={item.answer}
                      isLastDocument={item.isLastDocument}
                      unlockNextDocument={unlockNextDocument}
                      label={item.label}
                    />
                  </DocumentWrapper>
                )
            )}
          </Documents>
        </Wrapper>
      </Root>
      <GlobalStyle />
    </>
  );
}

const Root = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding-bottom: 150px;

  background: url(${mainBackground});
  background-size: contain;
  background-repeat: repeat;
`;

const Wrapper = styled.div`
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
`;

const DocumentWrapper = styled.div`
  width: 450px;
`;
const Title = styled.h1`
  margin: 0;
  padding: 50px 0;
`;
const Documents = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export default App;
