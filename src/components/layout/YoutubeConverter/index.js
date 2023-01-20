import React, {useCallback, useMemo, useState, useEffect} from 'react';
import Form from "../form";
import LinearProgress from "@material-ui/core/LinearProgress";
import socketIOClient from "socket.io-client";
import makeStyles from "@material-ui/core/styles/makeStyles";
import green from "@material-ui/core/colors/green";
const API_URL = 'http://localhost:3001';
const socket = socketIOClient(API_URL);

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
    },
    buttonProgress: {
        color: green[500],
        width: '100%',
    },
}));

const YoutubeConverter = () => {
    const classes = useStyles();
    const [youtubeId, setYoutubeId] = useState('');
    // const [socket] = useState(socketIOClient(API_URL));
    const [response, setResponse] = useState(null);
    const [progress, setProgress] = useState(null);

    useEffect(() => {
        socket.on("youtube-start", percentage => {
            console.log('START');
            setProgress(percentage);
        });
        socket.on("youtube-progress", percentage => {
            console.log('PROGRESS');
            setProgress(percentage);
        });
        socket.on("youtube-finished", data => {
            console.log('END');
            setResponse(JSON.parse(data));
        });
    }, []);

    const onSubmit = useCallback(async () => {
        return await fetch('http://localhost:3001/api/youtube-converter/'+youtubeId, { method: 'get' })
            .then(async (response) => await response.json());
    }, [youtubeId]);

    const inputs = useMemo(() => [
        {
            component: 'input',
            name: 'path-folder-id',
            type: 'text',
            autoFocus: false,
            required: true,
            hasValidityIcons: false,
            value: localStorage.getItem('pathYoutubeDownload') || '',
            rules: [],
            label: 'Path folder',
            placeholder: 'exemple: D:\\ableton\\mp3',
            onChangeState: value => localStorage.setItem('pathYoutubeDownload', value),
        },
        {
            component: 'input',
            name: 'youtube-converter-id',
            type: 'text',
            autoFocus: false,
            required: true,
            hasValidityIcons: false,
            rules: [],
            label: 'Youtube ID',
            onChangeState: value => setYoutubeId(value),
        },
    ], []);

    const buttons = useMemo(() => [
        {
            component: 'button',
            type: 'submit',
            color: 'primary',
            variant: 'contained',
            label: 'Convertir',
            onClick: () => onSubmit(),
            disabled: true,
            loading: true,
        },
    ], [onSubmit]);

    return (
        <div className={classes.root}>
            <Form inputs={inputs} buttons={buttons} className={'flex-column'} />
            {progress !== null && <LinearProgress className={classes.buttonProgress} style={{ width: '100%' }} variant="determinate" value={progress} />}
            {response !== null ? (
                <>
                    <img src={response.thumbnail} alt={response.thumbnail} />
                    <div>Link: {response.file}</div>
                    <div><a href={response.file}>Listen</a></div>
                </>
            ) : '' }
        </div>
    );
}

export default YoutubeConverter;
