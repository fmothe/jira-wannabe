import React, { DragEvent, FC, useContext, useState } from "react";
import {
    Card,
    CardActionArea,
    CardContent,
    Typography,
    CardActions,
    CardHeader,
    Collapse,
} from "@mui/material";
import { Entry } from "../../interfaces";

import ExpandMore from "@mui/icons-material/ExpandMoreOutlined";
import ExpandLess from "@mui/icons-material/ExpandLessOutlined";
import { Box } from "@mui/system";
import { UIContext } from "../../context/ui/UIContext";

interface Props {
    entry: Entry;
}

export const EntryCard: FC<Props> = ({ entry }) => {
    const [expand, setexpand] = useState(false);
    const { startDragging, endDragging } = useContext(UIContext);

    const onDragStart = (event: DragEvent) => {
        event.dataTransfer.setData("text", entry._id);
        startDragging();
    };

    const onDragEnd = () => {
        endDragging();
    };
    return (
        <Card
            sx={{ marginBottom: 1 }}
            draggable
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
        >
            <CardActionArea>
                <Box display="flex" justifyContent="flex-end">
                    {/* <Typography variant="body2">{entry.createdAt}</Typography> */}
                    {/* <CardHeader subheader={entry.createdAt} /> */}
                </Box>
                <CardContent>
                    <Typography sx={{ whiteSpace: "pre-line" }} variant="h5">
                        {entry.title}
                    </Typography>
                </CardContent>
                <CardActions
                    sx={{
                        display: "flex",
                        justifyContent: "end",
                        paddingRight: 2,
                    }}
                    disableSpacing
                >
                    {expand ? (
                        <>
                            <ExpandLess onClick={() => setexpand(false)} />
                        </>
                    ) : (
                        <>
                            <ExpandMore onClick={() => setexpand(true)} />
                        </>
                    )}
                </CardActions>
                <Collapse in={expand} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography sx={{ whiteSpace: "pre-line" }} paragraph>
                            {entry.description}
                        </Typography>
                    </CardContent>
                </Collapse>
            </CardActionArea>
        </Card>
    );
};
