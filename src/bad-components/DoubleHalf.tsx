import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface DoubleHalfProps {
    onAction: () => void;
}

function Doubler({ onAction }: DoubleHalfProps): React.JSX.Element {
    return <Button onClick={onAction}>Double</Button>;
}

function Halver({ onAction }: DoubleHalfProps): React.JSX.Element {
    return <Button onClick={onAction}>Halve</Button>;
}

export function DoubleHalf(): React.JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    const double = () => {
        setDhValue(2 * dhValue);
    };
    const half = () => {
        setDhValue(0.5 * dhValue);
    };
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler onAction={double}></Doubler>
            <Halver onAction={half}></Halver>
        </div>
    );
}
