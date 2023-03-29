/* eslint-disable radix */
import { useEffect, useState } from "react";

import { Container, Row, Col, Button } from "react-bootstrap";
// eslint-disable-next-line
import "./Home.css";

export default function Home() {
  const [goldFishCounter, setGoldFishCounter] = useState(
    localStorage.getItem("goldFishCounter")
      ? parseInt(localStorage.getItem("goldFishCounter") as string)
      : 0
  );
  const [calories, setCalories] = useState(
    localStorage.getItem("calories")
      ? parseInt(localStorage.getItem("calories") as string)
      : 0
  );
  const [customCount, setCustomCount] = useState(
    localStorage.getItem("customCount")
      ? parseInt(localStorage.getItem("customCount") as string)
      : 0
  );

  useEffect(() => {
    setCalories(Math.floor(goldFishCounter * 2.54));
  }, [goldFishCounter]);

  // save the goldfish counter and calorie to local storage
  useEffect(() => {
    localStorage.setItem("goldFishCounter", JSON.stringify(goldFishCounter));
    localStorage.setItem("calories", JSON.stringify(calories));
    localStorage.setItem("customCount", JSON.stringify(customCount));
  }, [goldFishCounter, calories, customCount]);

  return (
    <div>
      <Container fluid className="mx-auto mt-5 text-center">
        <Row>
          <Col className="col-12">
            <h1 className="text-center startTitle">Goldfish counter</h1>
            <p className="info mt-5">Goldfish Count: {goldFishCounter}</p>
            <p className="info">Calories: {calories}</p>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col className="col-md-3 col-12 mt-md-5 mt-0">
            <Button
              className="clickBtn"
              onClick={() => {
                setGoldFishCounter(goldFishCounter + 1);
              }}
            >
              x1
            </Button>
          </Col>
          <Col className="col-md-3 col-12 mt-md-5 mt-3">
            <Button
              className="clickBtn"
              onClick={() => {
                setGoldFishCounter(goldFishCounter + 2);
              }}
            >
              x2
            </Button>
          </Col>
          <Col className="col-md-3 col-12 mt-md-5 mt-3">
            <Button
              className="clickBtn"
              onClick={() => {
                setGoldFishCounter(goldFishCounter + 3);
              }}
            >
              x3
            </Button>
          </Col>
          <Col className="col-md-3 col-12 mt-md-5 mt-3">
            <Button
              className="clickBtn"
              onClick={() => {
                setGoldFishCounter(goldFishCounter + customCount);
              }}
            >
              x{customCount}
            </Button>
          </Col>
          {/* <Col className="col-md-1 col-12" /> */}
        </Row>
        <Row>
          <Col className="col-12 mt-5" />
          {/* Textfield which sets customCount using button */}
          <Col className="col-12 mt-3">
            <h2>Custom Count</h2>
            <input
              type="number"
              className="customCountSelector"
              value={customCount}
              onChange={(e) => {
                if (!Number.isNaN(parseInt(e.target.value))) {
                  setCustomCount(parseInt(e.target.value));
                } else {
                  setCustomCount(0);
                }
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col className="col-12 mt-5 mb-5">
            <Button
              className="startBtn"
              onClick={() => {
                setGoldFishCounter(0);
              }}
            >
              Reset
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
