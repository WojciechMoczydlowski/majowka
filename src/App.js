import React from "react";
import styled from "styled-components";
import documents from "./services/documents";
import { useState } from "react";
import Document from "./components/Document";
import Introduction from "./components/Introduction";
import mainBackground from "./assets/images/mainBackground.jpg";
import GlobalStyle from "./styles/global";
import produce from "immer";
import Button from "@material-ui/core/Button";
function App() {
  const [documentsState, setDocumentsState] = useState(() => {
    const currentDocument = localStorage.getItem("state")
      ? +localStorage.getItem("state")
      : 0;
    return documents.map((item, index) => ({
      ...item,
      // isVisible: true,
      isVisible: index <= currentDocument ? true : false,
      isLastDocument: index === documents.length - 1,
    }));
  });

  const unlockNextDocument = (index) => {
    if (index >= documentsState.length - 1) {
      return;
    }
    localStorage.setItem("state", String(index + 1));
    const newDocuments = produce(documentsState, (draft) => {
      draft[index + 1].isVisible = true;
    });
    setDocumentsState(newDocuments);
  };

  const resetGame = () => {
    localStorage.removeItem("state");
    const clearDocuments = documentsState.map((item, index) => ({
      ...item,
      isVisible: index === 0 ? true : false,
    }));

    setDocumentsState(clearDocuments);
  };

  return (
    <>
      <Root>
        <Wrapper>
          <PlayAgain onClick={() => resetGame()}>Zagraj ponownie</PlayAgain>
          <Introduction />
          <Documents>
            {documentsState.map(
              (item, index) =>
                item.isVisible && (
                  <Document
                    key={index}
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
  padding: 50px 0;

  background: url(${mainBackground});
  background-size: auto;
  background-repeat: repeat-y;
`;

const Wrapper = styled.div`
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
`;
const Documents = styled.div`
  display: flex;
  flex-direction: column;
`;

const PlayAgain = styled(Button)`
  margin-bottom: 50px;
`;

export default App;
