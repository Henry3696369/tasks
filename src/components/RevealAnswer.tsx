import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [show, setShow] = useState<boolean>(false);
    const changeshow = () => {
        setShow(!show);
    };
    return (
        <div>
            <Button onClick={changeshow}>Reveal Answer</Button>
            {show ?
                <div>Answer: 42</div>
            :   null}
        </div>
    );
}
