import React, { FC, useState } from "react";
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

interface Props {
    entry: Entry;
}

export const EntryCard: FC<Props> = ({ entry }) => {
    const [expand, setexpand] = useState(false);

    return (
        <Card sx={{ marginBottom: 1 }}>
            <CardActionArea>
                <Box display="flex" justifyContent="flex-end">
                  <Typography variant='body2'>{entry.createdAt}</Typography>
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
