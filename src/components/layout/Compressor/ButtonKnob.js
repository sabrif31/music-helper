import React, {Component, createRef, useEffect, useRef, useState} from "react";
import { render } from "react-dom";

// const box = createRef();
// https://stackoverflow.com/questions/45193647/reactjs-rotate-functionality-not-working
const ButtonKnob = () => {
    let box = useRef();
    const [state, setState] = useState({
        isActive: false,
        angle: 0,
        startAngle: 0,
        currentAngle: 0,
        boxCenterPoint: {}
    });
    // let getPositionFromCenter = this.getPositionFromCenter.bind(this);
    // let mouseDownHandler = this.mouseDownHandler.bind(this);
    // let mouseUpHandler = this.mouseUpHandler.bind(this);
    // let mouseMoveHandler = this.mouseMoveHandler.bind(this);
    // let deslectAll = this.deslectAll.bind(this);

    // to avoid unwanted behaviour, deselect all text
    const deslectAll = () => {
        if (document.selection) {
            document.selection.empty();
        } else if (window.getSelection) {
            window.getSelection().removeAllRanges();
        }
    }

    // method to get the positionof the pointer event relative to the center of the box
    const getPositionFromCenter = (e) => {
        const { boxCenterPoint } = state;
        const fromBoxCenter = {
            x: e.clientX - boxCenterPoint.x,
            y: -(e.clientY - boxCenterPoint.y)
        };
        return fromBoxCenter;
    }

    const mouseDownHandler = (e) => {
        e.stopPropagation();
        const fromBoxCenter = getPositionFromCenter(e);
        const newStartAngle =
            90 - Math.atan2(fromBoxCenter.y, fromBoxCenter.x) * (180 / Math.PI);
        setState(prevState => ({
            ...prevState,
            startAngle: newStartAngle,
            isActive: true
        }));
    }
    // console.log('state', state);

    const mouseUpHandler = (e) => {
        deslectAll();
        e.stopPropagation();
        const { isActive, angle, startAngle, currentAngle } = state;
        if (isActive) {
            const newCurrentAngle = currentAngle + (angle - startAngle);
            setState(prevState => ({
                ...prevState,
                isActive: false,
                currentAngle: newCurrentAngle
            }));
        }
    }

    const mouseMoveHandler = (e) => {
        const { isActive, currentAngle, startAngle } = state;
        if (isActive) {
            const fromBoxCenter = getPositionFromCenter(e);
            const newAngle =
                90 - Math.atan2(fromBoxCenter.y, fromBoxCenter.x) * (180 / Math.PI);

            box.current.style.transform =
                "rotate(" +
                (currentAngle + (newAngle - (startAngle ? startAngle : 0))) +
                "deg)";
            setState(prevState => ({ ...prevState, angle: newAngle }));
        } // active conditional
    }

    useEffect(() => {
        // console.clear();
        const boxPosition = box.current.getBoundingClientRect();
        // get the current center point
        const boxCenterX = boxPosition.left + boxPosition.width / 2;
        const boxCenterY = boxPosition.top + boxPosition.height / 2;

        // update the state
        setState(prevState => ({
            ...prevState,
            boxCenterPoint: { x: boxCenterX, y: boxCenterY }
        }));
        // in case the event ends outside the box
        // document.onmouseup = mouseUpHandler;
        // document.addEventListener('onmouseup', (e) => mouseUpHandler(e));
        // document.addEventListener('mousemove', (e) => mouseMoveHandler(e));
        // document.onmousemove = mouseMoveHandler;
    }, []);

        return (
            <div
                className="box"
                onMouseDown={mouseDownHandler}
                onMouseUp={mouseUpHandler}
                onMouseMove={mouseMoveHandler}
                ref={box}
            >
                <img
                    alt="knob"
                    className={'knob'}
                    src="https://greensock.com/wp-content/uploads/custom/draggable/img/knob.png"
                    width="410"
                    height="410"
                />
            </div>
        );
}

export default ButtonKnob;
