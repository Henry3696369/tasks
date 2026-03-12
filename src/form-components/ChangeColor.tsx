import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const Colors = [
        "red",
        "blue",
        "green",
        "orange",
        "purple",
        "cyan",
        "magenta",
        "white",
        "black",
    ];
    const [curcolor, setColor] = useState<string>(Colors[0]);

    return (
        <div>
            <h3>Change Color</h3>
            {Colors.map((color) => {
                return (
                    <Form.Check
                        key={color}
                        inline
                        type="radio"
                        name="color"
                        label={
                            <span style={{ background: color }}>{color}</span>
                        }
                        value={color}
                        checked={color === curcolor}
                        onChange={() => {
                            setColor(color);
                        }}
                    />
                );
            })}
            <div data-testid="colored-box" style={{ background: curcolor }}>
                {curcolor}
            </div>
        </div>
    );
}
