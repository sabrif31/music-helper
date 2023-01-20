import React, { useState } from 'react';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Switch from "@material-ui/core/Switch";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import {
    grey
} from "@material-ui/core/colors";
import CustomContainer from "./components/layout/Container";
import './reset.scss';
import './App.css';

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
    root: {
        display: "flex"
    },
    toolbar: {
        paddingRight: 24 
    },
    toolbarIcon: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: "0 8px",
        ...theme.mixins.toolbar
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        })
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    menuButton: {
        marginRight: 36
    },
    menuButtonHidden: {
        display: "none"
    },
    title: {
        flexGrow: 1
    },
    drawerPaper: {
        position: "relative",
        whiteSpace: "nowrap",
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    drawerPaperClose: {
        overflowX: "hidden",
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up("sm")]: {
            width: theme.spacing(9)
        }
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: "100vh",
        overflow: "auto"
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4)
    },
    paper: {
        padding: theme.spacing(2),
        display: "flex",
        overflow: "auto",
        flexDirection: "column"
    },
    fixedHeight: {
        height: 240
    }
}));

function App() {
    const [darkState, setDarkState] = useState(JSON.parse(localStorage.getItem('darkMode')) || false);
    const darkTheme = createMuiTheme({
        palette: {
            type: "dark",
            primary: {
                main: grey[500],
            },
            secondary: {
                main: grey[500],
            },
        },
    });
    const lightTheme = createMuiTheme({
        palette: {
            type: "light",
            primary: {
                main: grey[900]
            },
            secondary: {
                main: grey[50]
            },
        },
    });
    const classes = useStyles();

    return (
        <ThemeProvider theme={darkState ? darkTheme : lightTheme}>
            <CssBaseline />
            <Container maxWidth="xl">
                <AppBar
                    position="absolute"
                    className={classes.appBar}
                >
                    <Switch
                        checked={darkState}
                        color="default"
                        inputProps={{ 'aria-label': 'checkbox with default color' }}
                        onChange={() => {
                            localStorage.setItem('darkMode', JSON.stringify(!darkState))
                            setDarkState(!darkState);
                        }}
                    />
                </AppBar>
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="flex-start"
                    style={{ marginTop: '40px' }}
                >
                    <Grid item xs={12}>
                        <CustomContainer />
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    );
}

export default App;
