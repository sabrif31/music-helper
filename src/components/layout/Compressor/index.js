import React, {createRef, useEffect, useRef, useState} from 'react';
// import { gsap } from "gsap";
// import { Draggable } from "gsap/Draggable";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

// gsap.registerPlugin(Draggable);

import ButtonKnob from "./ButtonKnob";
import './style.scss';

const Compressor = () => {
    const [pickDark, setPickDark] = useState(0);
    const [dbMaster, setDbMaster] = useState(6);
    const [ratio, setRatio] = useState(4);
    const [finalDbCompensation, setFinalDbCompensation] = useState(null);
    // const dragInstance = useRef(null);
    // const dragTarget = useRef(null);

    // useEffect(() => {
    //     dragInstance.current = Draggable.create(dragTarget.current, {
    //         type: "rotation",
    //         onDragEnd() {
    //             console.log(this);
    //         },
    //         onDrag: function() {
    //             console.log(this)
    //         }
    //     });
    // }, []);

    const calcul = () => {
        const first = pickDark - dbMaster;
        const second = first / ratio;
        const third = first - second;
        setFinalDbCompensation(third);
    }
    // const draggable = Draggable.create("#knob", {
    //     type: "rotation",
    //     inertia: true,
    //     onDrag: function() {
    //         console.log(this.rotation)
    //     }
    // });

    return (
        <div className={'compressor'}>
            {/*<ButtonKnob />*/}
            {/*<div className="draggable" ref={dragTarget}>*/}
            {/*    Drag & Rotate*/}
            {/*</div>*/}
            {/*<img alt="knob" className={'knob'} src="https://greensock.com/wp-content/uploads/custom/draggable/img/knob.png" width="410" height="410" />*/}
            <TextField id="pickDark" label="Pick Dark" onChange={e => setPickDark(e.currentTarget.value)} value={pickDark} />
            <TextField id="dbMaster" label="DB master" onChange={e => setDbMaster(e.currentTarget.value)} value={dbMaster} />
            <TextField id="ratio" label="Ratio" onChange={e => setRatio(e.currentTarget.value)} value={ratio} />
            <Button onClick={() => calcul()}>Calculer db compensation</Button>
            <Typography variant={'h2'}>{finalDbCompensation}</Typography>
        </div>
    )
}

export default Compressor;
