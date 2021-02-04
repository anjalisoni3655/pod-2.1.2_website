import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, Button, IconButton, Hidden, List, ListItem, ListItemText, SwipeableDrawer} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(1),
    },
    title: {
        fontSize: 22,
        [theme.breakpoints.down('xs')]: {
			fontSize: 15
		},
    },
    appBar: {
        background: '#000'
    },
    drawerPaper: {
        color: theme.palette.common.white,
        backgroundColor: '#000',
    },
    toolbar: {
        paddingRight: '2px',
    },
    menu: {
        flexGrow: 1,
        display: "flex",
        justifyContent: "flex-end",
    }
}));

function AppHeader(props) {
    const classes = useStyles();
    let [open, setOpen] = useState(false);

    function toggleDrawer () {
        setOpen(!open);
    }

    const menuItemList=[['About Us', '/about'], ['Our Team', '/team'], ['Projects', '/projects'], ['Contact Us', '/contact-us']];

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Button color="primary" href="/" className={classes.title}>
                        {props.appBarTitle}
                    </Button>
                    <div className={classes.menu}>
                        <Hidden smDown>
                            <Button color="primary" href="/about">Meet the team</Button>
                            <Button color="primary" href="/blog">Our Projects</Button>
                            <Button color="primary" href="/whatWeDo">About Us</Button>
                            <Button color="primary" href="/contact-us">Contact Us</Button>
                        </Hidden>
                        
                        <Hidden mdUp>
                            <IconButton 
                                edge="end" 
                                className={classes.menuButton} 
                                color="primary" 
                                aria-label="menu" 
                                onClick={toggleDrawer}
                            >
                                <MenuIcon />
                            </IconButton>
                            <SwipeableDrawer
                                anchor='right'
                                open={open}
                                onClose={toggleDrawer}
                                onOpen={toggleDrawer}
                                className={classes.drawer}
                                classes = {{
                                    paper: classes.drawerPaper,
                                }}
                            >
                                <List>
                                    {menuItemList.map((item) => (
                                    <ListItem button key={item[0]} href={item[1]}>
                                        <ListItemText primary={item[0]} />
                                    </ListItem>
                                    ))}
                                </List>
                            </SwipeableDrawer>
                        </Hidden>
                    </div>                   
                </Toolbar>              
            </AppBar>
        </div>
    );
}

export default AppHeader;