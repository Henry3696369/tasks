import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [num, setnum] = useState<number>(4);
    const [check, setcheck] = useState<boolean>(false);
    const startquiz = () => {
        if (num <= 0) {
            setcheck(true);
        } else {
            setnum(num - 1);
            setcheck(true);
        }
    };
    const stopquiz = () => {
        setcheck(false);
    };
    const mulligan = () => {
        setnum(num + 1);
    };
    return (
        <div>
            <Button onClick={startquiz} disabled={check || num === 0}>
                Start Quiz
            </Button>
            <Button onClick={stopquiz} disabled={!check}>
                Stop Quiz
            </Button>
            <Button onClick={mulligan} disabled={check}>
                Mulligan
            </Button>
            <div>Attempts: {num}</div>
        </div>
    );
}
