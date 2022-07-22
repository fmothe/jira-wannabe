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


const validStatus: EntryStatus[] = ["pending", "in-progress", "finished"];

const EntryPage = () => {
    return (
        <Layout title="Entry modification">
            <Grid container justifyContent="center" sx={{ marginTop: 2 }}>
                <Grid item xs={12} sm={8} md={6}>
                    <Card sx={{ marginBotom: 2 }}>
                        <CardHeader title="Entry: " />

                        <CardContent>
                            <TextField
                                sx={{ marginTop: 2, marginBotom: 2 }}
                                fullWidth
                                placeholder="New Entry"
                                autoFocus
                                multiline
                                label="New Entry"
                            />
                            <FormControl sx={{ margin: 2 }}>
                                <FormLabel>Estado: </FormLabel>
                                <RadioGroup row>
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
                            >
                                Update
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
            <IconButton sx={{ position:'fixed', bottom:30, right: 30, backgroundColor:'error.dark'}}>
                <DeleteOutlineOutlined/>
            </IconButton>
        </Layout>
    );
};

export default EntryPage;
