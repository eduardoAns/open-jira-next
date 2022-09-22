import { useContext } from 'react';
import { Box, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';


import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';

import { UIContext } from '../../context/ui';
import router from 'next/router';

interface NavProps {
    name: string;
    icon: JSX.Element;
    link: string;
}


const menuItems: NavProps[] = [

    {
        name: 'Inbox',
        icon: <InboxOutlinedIcon />,
        link: '/'
    },{
        name: 'Sent',
        icon: <MailOutlineOutlinedIcon />,
        link: '/'
    },{
        name: 'Drafts',
        icon: <MailOutlineOutlinedIcon />,
        link: '/'
    },{
        name: 'about',
        icon: <InboxOutlinedIcon />,
        link: '/about'
    }]


export const Sidebar = () => {

    const { sidemenuOpen, closeSideMenu  } = useContext( UIContext );
    const navigateTo = ( url: string ) => {
        closeSideMenu()
        router.push(url);
    }

    return (
        <Drawer
            anchor="left"
            open={ sidemenuOpen }
            onClose={ closeSideMenu }
        >
            <Box sx={{ width: 250 }}>

                <Box sx={{ padding:'5px 10px' }}>
                    <Typography variant="h4">Menú</Typography>
                </Box>

                <List>
                    {
                        menuItems.map( ({name, icon, link}) => (
                            <ListItem 
                                button 
                                key={ name }
                                onClick={() => navigateTo(link)}
                            >
                                <ListItemIcon>
                                    { icon }                                
                                </ListItemIcon>
                                <ListItemText primary={ name } />
                            </ListItem>
                        ))
                    }
                </List>

                <Divider />

                <List>
                    {
                        menuItems.map( ({name, icon, link}) => (
                            <ListItem 
                                button 
                                key={ name }
                                onClick={() => navigateTo(link)}
                            >
                                <ListItemIcon>
                                    { icon }                                
                                </ListItemIcon>
                                <ListItemText primary={ name } />
                            </ListItem>
                        ))
                    }
                </List>

            </Box>
            
        </Drawer>
    )
};
