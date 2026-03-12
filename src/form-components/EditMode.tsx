import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [edit, setEdit] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isstudent, setIss] = useState<boolean>(true);

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="is-edit-check"
                label="Edit?"
                checked={edit}
                onChange={(e) => {
                    setEdit(e.target.checked);
                }}
            />
            {edit ?
                <div>
                    <Form.Group controlId="editname">
                        <Form.Label>Edit Name</Form.Label>
                        <Form.Control
                            type="text"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                        />
                    </Form.Group>
                    <Form.Check
                        type="switch"
                        id="is-student-check"
                        label="Student?"
                        checked={isstudent}
                        onChange={(e) => {
                            setIss(e.target.checked);
                        }}
                    ></Form.Check>
                </div>
            :   <div>
                    {name}
                    {isstudent ? " is a student" : " is not a student"}
                </div>
            }
        </div>
    );
}
