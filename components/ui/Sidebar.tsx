import {
    Box,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    Typography,
} from "@mui/material";
import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
const menuItems: string[] = ["Home", "Inbox", "Starred"];

export const Sidebar = () => {
    return (
        <Drawer
            anchor="left"
            open={true}
            onClose={() => console.log("closing")}
        >
            <Box sx={{ width: 250 }}>
                <Box sx={{ padding: "5px 10px" }}>
                    <Typography variant="h4">Menu</Typography>
                </Box>
                <Divider/>
                <List>
                    {menuItems.map((item, index) => (
                        <ListItem button key={index}>
                            {" "}
                            <ListItemIcon>
                                {index % 2 ? (
                                    <InboxOutlinedIcon />
                                ) : (
                                    <MailOutlineOutlinedIcon />
                                )}
                            </ListItemIcon>
                            {item}{" "}
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    );
};
