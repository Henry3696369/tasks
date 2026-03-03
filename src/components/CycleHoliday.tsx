import React, { useState } from "react";
import { Button } from "react-bootstrap";
export type Holiday = "🏮" | "🎏" | "🎃" | "🎄" | "💝";
const alphabet: Record<Holiday, Holiday> = {
    "🎄": "🎏",
    "🎏": "🎃",
    "🎃": "🏮",
    "🏮": "💝",
    "💝": "🎄",
};
const year: Record<Holiday, Holiday> = {
    "🏮": "💝",
    "💝": "🎏",
    "🎏": "🎃",
    "🎃": "🎄",
    "🎄": "🏮",
};

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setholiday] = useState<Holiday>("🎃");
    const nextalphabet = () => {
        setholiday(alphabet[holiday]);
    };
    const nextyear = () => {
        setholiday(year[holiday]);
    };

    return (
        <div>
            Cycle Holiday
            <br />
            <Button onClick={nextalphabet}>Advance by Alphabet</Button>
            <br />
            <Button onClick={nextyear}>Advance by Year</Button>
            <br />
            Holiday: {holiday}
        </div>
    );
}
