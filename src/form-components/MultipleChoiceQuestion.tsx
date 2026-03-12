import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>(options[0]);
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="userEmotions">
                <Form.Label>Choose!</Form.Label>
                <Form.Select
                    value={answer}
                    onChange={(e) => {
                        setAnswer(e.target.value);
                    }}
                >
                    {options.map((option) => {
                        return (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        );
                    })}
                </Form.Select>
            </Form.Group>
            {expectedAnswer === answer ? "✔️" : "❌"}
        </div>
    );
}
