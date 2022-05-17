import { List, Paper } from "@mui/material";
import React, { DragEvent, FC, useContext, useMemo } from "react";
import { EntriesContext } from "../../context/entries";
import { EntryStatus } from "../../interfaces";
import { EntryCard } from "./EntryCard";
import { UIContext } from "../../context/ui/UIContext";
import styles from "./EntryList.module.css";

interface Props {
    status: EntryStatus;
}
export const EntryList: FC<Props> = ({ status }) => {
    const { entries, updateEntry } = useContext(EntriesContext);
    const { isDragging, endDragging } = useContext(UIContext);
    const entriesByStatus = useMemo(
        () => entries.filter((entry) => entry.status === status),
        [entries]
    );
    const allowDrop = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    const onDrop = (event: DragEvent<HTMLDivElement>) => {
        const id = event.dataTransfer.getData("text/plain");
        console.log(id)
        const entry = entries.find((e) => e._id === id)!;
        entry.status = status;
        updateEntry(entry);
        endDragging();
    };
    return (
        <div
            onDrop={onDrop}
            onDragOver={allowDrop}
            className={isDragging ? styles.dragging : ""}
        >
            <Paper
                sx={{
                    height: "calc(100vh - 200px)",
                    overflow: "scroll",
                    backgroundColor: "transparent",
                    "&::-webkit-scrollbar": { display: "none" },
                    padding: 1,
                }}
            >
                <List
                    sx={{
                        opacity: isDragging ? 0.4 : 1,
                        transition: "all .3s",
                    }}
                >
                    {entriesByStatus.map((entry) => (
                        <EntryCard key={entry._id} entry={entry} />
                    ))}
                </List>
            </Paper>
        </div>
    );
};
