import React, {useState} from 'react';
import './style.scss';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

const Reverb = () => {
    const [bpm, setBpm] = useState();
    const [milliseconde, setMilliseconde] = useState();

    const calculMillisecondes = () => {
        setMilliseconde(60000 / bpm);
    }

    const reductionMillisecondes = () => {
        setMilliseconde(milliseconde / 2);
    }

    return (
        <div>
            <TextField id="pickDark" label="BPM" onChange={e => setBpm(e.currentTarget.value)} value={bpm} />
            <Button onClick={calculMillisecondes}>Calculer millisecondes</Button>
            {milliseconde && (
                <>
                    <Typography variant={'h2'}>{milliseconde}</Typography>
                    <Button onClick={reductionMillisecondes}>Reduction millisecondes</Button>
                </>
            )}
            <Typography variant={'h5'}>Pre-delay infèrieur à 100ms</Typography>
        </div>
    );
}

export default Reverb;
