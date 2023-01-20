import React from 'react';
import {orderBy} from "lodash";
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';

const Accordion = withStyles({
    root: {
        border: '1px solid rgba(0, 0, 0, .125)',
        boxShadow: 'none',
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: 'auto',
        },
    },
    expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
    root: {
        backgroundColor: 'rgba(0, 0, 0, .03)',
        borderBottom: '1px solid rgba(0, 0, 0, .125)',
        marginBottom: -1,
        minHeight: 56,
        '&$expanded': {
            minHeight: 56,
        },
    },
    content: {
        '&$expanded': {
            margin: '12px 0',
        },
    },
    expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiAccordionDetails);

const CustomizedAccordions = props => {
    const [expanded, setExpanded] = React.useState(props.slug);
    const handleChange = panel => (event, newExpanded) => setExpanded(newExpanded ? panel : false);
    return orderBy(props.list, ['index'], ['asc']).map(block => (
        <Accordion key={block.slug} square expanded={expanded === block.slug} onChange={handleChange(block.slug)}>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                <Typography>{block.title}</Typography>
            </AccordionSummary>
            <AccordionDetails style={{ minHeight: '250px', height: '100%' }}>
                {block.component}
            </AccordionDetails>
        </Accordion>
    ));
}

export default CustomizedAccordions;
