import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="enteranswer">
                <Form.Label>Enter your answer!</Form.Label>
                <Form.Control
                    type="text"
                    value={answer}
                    onChange={(e) => {
                        setAnswer(e.target.value);
                    }}
                ></Form.Control>
            </Form.Group>
            {answer === expectedAnswer ? "✔️" : "❌"}
        </div>
    );
}
