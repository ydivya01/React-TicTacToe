
import './App.css';
import { Container, Row, Col, Button } from "reactstrap";
import Icon from "./Icon";
import { useEffect, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

let array = Array(9).fill("empty");

function App() {
  const [isCross, setIsCross] = useState(false);
  const [winnerMessage, setWinnerMessage] = useState("");

  useEffect(() => {
    if (winnerMessage) {
      toast(winnerMessage);
    }
  }, [winnerMessage]);

  const checkWinner = () => {
    if (
      array[0] === array[1] &&
      array[0] === array[2] &&
      array[0] !== "empty"
    ) {
      setWinnerMessage(`${array[0]} is winner`);
    } else if (
      array[3] === array[4] &&
      array[3] === array[5] &&
      array[3] !== "empty"
    ) {
      setWinnerMessage(`${array[3]} is winner`);
    } else if (
      array[6] === array[7] &&
      array[6] === array[8] &&
      array[6] !== "empty"
    ) {
      setWinnerMessage(`${array[6]} is winner`);
    } else if (
      array[0] === array[3] &&
      array[0] === array[6] &&
      array[0] !== "empty"
    ) {
      setWinnerMessage(`${array[0]} is winner`);
    } else if (
      array[1] === array[4] &&
      array[1] === array[7] &&
      array[1] !== "empty"
    ) {
      setWinnerMessage(`${array[1]} is winner`);
    } else if (
      array[2] === array[5] &&
      array[2] === array[8] &&
      array[2] !== "empty"
    ) {
      setWinnerMessage(`${array[2]} is winner`);
    } else if (
      array[0] === array[4] &&
      array[0] === array[8] &&
      array[0] !== "empty"
    ) {
      setWinnerMessage(`${array[0]} is winner`);
    } else if (
      array[2] === array[4] &&
      array[2] === array[6] &&
      array[2] !== "empty"
    ) {
      setWinnerMessage(`${array[2]} is winner`);
    } else if (
      array[0] !== "empty" &&
      array[1] !== "empty" &&
      array[2] !== "empty" &&
      array[3] !== "empty" &&
      array[4] !== "empty" &&
      array[5] !== "empty" &&
      array[6] !== "empty" &&
      array[7] !== "empty" &&
      array[8] !== "empty"
    ) {
      setWinnerMessage("Draw Match");
    }
  };

  const onBoxClick = (index) => {
    if (winnerMessage) {
      return toast.info(winnerMessage);
    }
    if (array[index] === "empty") {
      array[index] = isCross ? "cross" : "circle";
      setIsCross(!isCross);
      checkWinner();
    } else {
      toast.error("Box is already selected");
    }
  };

  const reloadGame = () => {
    setWinnerMessage("");
    array.fill("empty", 0, 9);
    setIsCross(false);
  };
  return (
    <div className="App">
      <ToastContainer />
      <Container>
        <h1 className="text-center">TIC TAC TOE GAME</h1>
        {winnerMessage ? (
          <div>
            {" "}
            <h3 className="text-uppercase text-center">{winnerMessage} </h3>
            <Button color="warning" onClick={reloadGame}>
              Relaod Game
            </Button>
          </div>
        ) : (
          <h1 className="text-center">
            {isCross ? "Cross Turn" : "Circle Turn"}
          </h1>
        )}
        <Row>
          <Col xs={{ offset: 3, size: 6 }}>
            <div className="grid">
              {array.map((value, index) => {
                return (
                  <div
                    className="box"
                    onClick={() => onBoxClick(index)}
                    key={index}
                  >
                    <Icon iconName={value} />
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
