import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './style.scss';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

const ContainedButtons = props => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Button variant="contained" color="primary" {...props}>
                {props.label}
            </Button>
        </div>
    );
}

export default ContainedButtons;
