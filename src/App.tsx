import React from "react";
import "./App.css";
import tanjiro from "./assets/tanjiro.jpg";
import { Button, Container, Row, Col } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <h1>Edited at 2026/02/10</h1>
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript <br /> Heng Luo
                <br /> Hello World
            </header>
            <img
                src={tanjiro}
                alt="A picture of tanjiro with fire"
                className="my-img"
            />
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <div style={{ textAlign: "left" }}>
                test list:
                <ul>
                    <li>first</li>
                    <li>second</li>
                    <li>third</li>
                </ul>
            </div>
            <>
                <Button
                    onClick={() => {
                        console.log("Hello World!");
                    }}
                >
                    Log Hello World
                </Button>
            </>
            <div>
                <Container>
                    <Row>
                        <Col>
                            <div
                                className="red-rect"
                                style={{ backgroundColor: "red" }}
                            ></div>
                        </Col>
                        <Col>
                            <div className="red-rect"></div>
                        </Col>
                        <Col>
                            <div className="red-rect"></div>
                        </Col>
                        <Col>
                            <div className="red-rect"></div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default App;
