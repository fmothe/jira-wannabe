import { Box, Button, TextField } from "@mui/material";
import React, { ChangeEvent, useState, useContext } from "react";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { EntriesContext } from "../../context/entries";
import { UIContext } from "../../context/ui/UIContext";
export const NewEntry = () => {
    const { addNewEntry } = useContext(EntriesContext);
    const { setIsAddingEntry, isAddingEntry } = useContext(UIContext);
    const [inputValue, setInputValue] = useState("");
    const [titleValue, setTitleValue] = useState("");
    const [touched, setTouched] = useState(false);

    const onTextChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };
    const onTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTitleValue(event.target.value);
    };

    const onSave = () => {
        if (titleValue.length === 0) return;

        addNewEntry(inputValue, titleValue);
        setIsAddingEntry(false);
        setTouched(false);
        setInputValue("");
    };

    return (
        <Box sx={{ marginBottom: 2, paddingX: 2 }}>
            {isAddingEntry ? (
                <>
                    <TextField
                        fullWidth
                        sx={{ marginTop: 2, marginBottom: 1 }}
                        placeholder="Title"
                        autoFocus
                        multiline
                        label="New Entry"
                        helperText={
                            titleValue.length <= 0 &&
                            touched &&
                            "Please enter a task"
                        }
                        error={titleValue.length <= 0 && touched}
                        value={titleValue}
                        onChange={onTitleChange}
                        onBlur={() => setTouched(true)}
                    />
                    <TextField
                        fullWidth
                        sx={{ marginTop: 2, marginBottom: 1 }}
                        placeholder="New Entry"
                        autoFocus
                        multiline
                        label="Body"
                        helperText={
                            inputValue.length <= 0 &&
                            touched &&
                            "Please enter a body"
                        }
                        error={inputValue.length <= 0 && touched}
                        value={inputValue}
                        onChange={onTextChange}
                        onBlur={() => setTouched(true)}
                    />
                    <Box display="flex" justifyContent="space-between">
                        <Button
                            variant="text"
                            onClick={() => setIsAddingEntry(false)}
                        >
                            Cancelar
                        </Button>
                        <Button
                            variant="outlined"
                            color="secondary"
                            endIcon={<SaveOutlinedIcon />}
                            onClick={onSave}
                        >
                            Save
                        </Button>
                    </Box>
                </>
            ) : (
                <Button
                    startIcon={<AddOutlinedIcon />}
                    fullWidth
                    variant="outlined"
                    onClick={() => setIsAddingEntry(true)}
                >
                    New Task
                </Button>
            )}
        </Box>
    );
};
