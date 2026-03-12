import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [leftAttempts, setLeft] = useState<number>(3);
    const [reqAttempts, setReq] = useState<string>("");
    const req = parseInt(reqAttempts) || 0;

    return (
        <div>
            <h3>Give Attempts</h3>
            Attempts left {leftAttempts}
            <Form.Group controlId="requisteAttempts">
                <Form.Label> Enter the number you to add!</Form.Label>
                <Form.Control
                    type="number"
                    value={reqAttempts}
                    onChange={(e) => {
                        setReq(e.target.value);
                    }}
                ></Form.Control>
            </Form.Group>
            <Button
                onClick={() => {
                    setLeft(leftAttempts - 1);
                }}
                disabled={leftAttempts === 0}
            >
                use
            </Button>
            <Button
                onClick={() => {
                    setLeft(leftAttempts + req);
                    setReq("0");
                }}
            >
                gain
            </Button>
        </div>
    );
}
