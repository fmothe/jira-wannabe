import {
    capitalize,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid,
    Radio,
    RadioGroup,
    TextField,
    IconButton,
} from "@mui/material";
import { Layout } from "../../components/layouts/Layout";
import AutoFixNormalOutlinedIcon from "@mui/icons-material/AutoFixNormalOutlined";
import { EntryStatus } from "../../interfaces";
import { DeleteOutlineOutlined } from "@mui/icons-material";
import { GetServerSideProps } from "next";
import { ChangeEvent, FC, useContext, useMemo, useState } from "react";
import mongoose, { isValidObjectId } from "mongoose";
import { dbEntries } from "../../database";
import { Entry } from "../../interfaces/entry";
import { EntriesContext } from '../../context/entries/EntriesContext';

const validStatus: EntryStatus[] = ["pending", "in-progress", "finished"];

interface Props {
    entry: Entry;
}

const EntryPage: FC<Props> = ({ entry }) => {
    const {updateEntry} = useContext(EntriesContext)
    const [inputValue, setInputValue] = useState(entry.description);
    const [status, setStatus] = useState<EntryStatus>(entry.status);
    const [touched, setTouched] = useState(false);

    const isNotValid = useMemo(()=> inputValue.length <= 0 && touched, [inputValue, touched])

    const onInputValueChanged = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }

    const onStatusChanged = (event: ChangeEvent<HTMLInputElement>) => {
        setStatus(event.target.value as EntryStatus);
    }

    const onSave = () => {
        if(inputValue.trim().length === 0) return;
        const updatedEntry: Entry = {
            ...entry,
            description: inputValue,
            status,

        }
        updateEntry(updatedEntry, true)
    }

    return (
        <Layout title="Entry modification">
            <Grid container justifyContent="center" sx={{ marginTop: 2 }}>
                <Grid item xs={12} sm={8} md={6}>
                    <Card sx={{ marginBotom: 2 }}>
                        <CardHeader title={`Entry: `} 
                        subheader={`Created ${entry.createdAt} minutes ago`}/>

                        <CardContent>
                            <TextField
                                sx={{ marginTop: 2, marginBotom: 2 }}
                                fullWidth
                                placeholder="New Entry"
                                autoFocus
                                multiline
                                label="Modify entry"
                                value={inputValue}
                                onBlur={( ) => setTouched(true)}
                                helperText={isNotValid && 'Entry cannot be empty'}
                                onChange={onInputValueChanged}
                                error={isNotValid}
                            />
                            <FormControl sx={{ margin: 2 }}>
                                <FormLabel>Estado: </FormLabel>
                                <RadioGroup row value={status} onChange={onStatusChanged}>
                                    {validStatus.map((status) => (
                                        <FormControlLabel
                                            key={status}
                                            value={status}
                                            control={<Radio />}
                                            label={capitalize(status)}
                                        />
                                    ))}
                                </RadioGroup>
                            </FormControl>
                        </CardContent>

                        <CardActions>
                            <Button
                                startIcon={<AutoFixNormalOutlinedIcon />}
                                variant="contained"
                                color="secondary"
                                fullWidth
                                onClick={onSave}
                            >
                                Update
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
            <IconButton
                sx={{
                    position: "fixed",
                    bottom: 30,
                    right: 30,
                    backgroundColor: "error.dark",
                }}
            >
                <DeleteOutlineOutlined />
            </IconButton>
        </Layout>
    );
};

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const { id } = params as { id: string };
    const entry = await dbEntries.getEntryById(id);
    if (!entry) {
        return {
            redirect: {
                destination: "/",
                permanent: false,
            },
        };
    }

    return {
        props: {
            entry,
        },
    };
};

export default EntryPage;
