import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";
/*You will need a single state to handle whether the type is multiple_choice_question or short_answer_question.
The type of the state should be QuestionType, not string.
There should be a button labelled Change Type that changes the state from one type to the other.
When the type is multiple_choice_question, the text Multiple Choice should be visible.
When the type is short_answer_question, the text Short Answer should be visible.
The initial type must be short_answer_question.\*/
export function ChangeType(): React.JSX.Element {
    const [type, settype] = useState<QuestionType>("short_answer_question");
    const changetype = () => {
        if (type === "short_answer_question") {
            settype("multiple_choice_question");
        } else {
            settype("short_answer_question");
        }
    };
    return (
        <div>
            <Button onClick={changetype}>Change Type</Button>
            {type === "short_answer_question" ?
                "Short Answer"
            :   "Multiple Choice"}
        </div>
    );
}
