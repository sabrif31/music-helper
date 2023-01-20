import React, {useMemo} from 'react';
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
// Style
import './style.scss';

const InnerBlock = ({ component, title, dragHandleProps }) => {
    const Component = () => component;
    return useMemo(()=> (
        <Paper elevation={3} className="courses-container">
            <Paper elevation={0} className="course">
                <Paper elevation={0} className="course-preview" {...dragHandleProps}>
                    <Typography variant="h6" gutterBottom color={'secondary'}>
                        {title}
                    </Typography>
                </Paper>
                <Paper elevation={0} className="course-info">
                    <Component />
                </Paper>
            </Paper>
        </Paper>
    ), [dragHandleProps, title]);
}

export default InnerBlock;
