import { Box, Button } from "@mui/material";
import React from "react";
import  SavedOutlinedIcon  from "@mui/icons-material";

export const NewEntry = () => {
    return (
        <>
            <Box>
                <Button
                    variant="outlined"
                    color="secondary"
                    endIcon={<SavedOutlinedIcon />}
                >
                    New
                </Button>
            </Box>
        </>
    );
};
