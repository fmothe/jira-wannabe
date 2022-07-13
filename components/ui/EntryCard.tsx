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
import { Button } from "@mui/material";

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
                <CardContent>
                    <Typography sx={{ whiteSpace: "pre-line" }}>
                        {entry.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};
