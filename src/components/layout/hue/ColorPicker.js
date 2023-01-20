import React, {useCallback, useEffect, useState} from 'react'
import { HuePicker } from 'react-color';

/*eslint react/prop-types:0*/
const HueExample = ({ onChange, onRotate, startRotate, index, id, delay }) => {
    const [color, setColor] = useState({
        r: 255,
        g: 0,
        b: 0,
        a: 1,
    });

    const rotate = useCallback((id, index, delay) => {
        let newColor = { r: 255, g: 0, b: 0 };
        setInterval(() => {
            if (newColor.r === 255 && newColor.g >= 0 && newColor.g !== 255 && newColor.b === 0) {
                newColor = {
                    ...newColor,
                    g: newColor.g + 51
                }
                // console.log('FIRST STEP', newColor);
            } else if (newColor.r <= 255 && newColor.r !== 0 && newColor.g === 255 && newColor.b === 0) {
                newColor = {
                    ...newColor,
                    r: newColor.r - 51
                }
                // console.log('SECOND STEP', newColor);
            } else if (newColor.r === 0 && newColor.g === 255 && newColor.b < 255) {
                newColor = {
                    ...newColor,
                    b: newColor.b + 51
                }
                // console.log('3 STEP', newColor);
            } else if (newColor.r === 0 && newColor.g !== 0 && newColor.b === 255) {
                newColor = {
                    ...newColor,
                    g: newColor.g - 51
                }
                // console.log('4 STEP', newColor);
            } else if (newColor.r < 255 && newColor.g === 0 && newColor.b === 255) {
                newColor = {
                    ...newColor,
                    r: newColor.r + 51
                }
                // console.log('5 STEP', newColor);
            } else {
                // console.log('INIT');
                newColor = { r: 255, g: 0, b: 0 };
            }
            setColor(prevState => ({ ...prevState, newColor }));
            onRotate(id, index, { rgb: newColor });
        }, 10000 + delay);
    }, [onRotate]);

    useEffect(() => {
        if (!startRotate) return;
        console.log('Rotate started');
        rotate(id, index, delay);
    }, [delay, id, index, rotate, startRotate])

    return (
        <div>
            <button onClick={rotate}>Rotate</button>
            <HuePicker color={ color } onChange={ color => setColor(color.rgb) } onChangeComplete={ color => onChange(color) } />
        </div>
    );
}

export default HueExample
