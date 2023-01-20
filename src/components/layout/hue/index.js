import React, {useCallback, useState} from 'react';
import ContainedButtons from "../form/components/Button";
import ColorPicker from "./ColorPicker";

const totalLight = [
    { id: 1, title: 'plafond', on: true, bri: 254, xy: [0.13925249880279772, 0.05774393974323418], delay: 0 },
    { id: 2, title: 'bureau_left', on: true, bri: 254, xy: [0.13925249880279772, 0.05774393974323418], delay: 3300 },
    { id: 3, title: 'bureau_right', on: true, bri: 254, xy: [0.13925249880279772, 0.05774393974323418], delay: 6600 }
];
const API_URI = 'http://192.168.1.28/api/cQEFkFXeHXjbbNyzSqIh-W5qCUQXJ-paLqIUqdIl/';

// The function below does the grunt work of creating an xy pair that produces
// colours equivalent to RGB colours.
function getXY({ r, g, b }){
    if (r > 0.04045){
        r = Math.pow((r + 0.055) / (1.0 + 0.055), 2.4);
    }
    else r = (r / 12.92);
    if (g > 0.04045){
        g = Math.pow((g + 0.055) / (1.0 + 0.055), 2.4);
    }
    else g = (g / 12.92);
    if (b > 0.04045){
        b = Math.pow((b + 0.055) / (1.0 + 0.055), 2.4);
    }
    else b = (b / 12.92);
    const X = r * 0.664511 + g * 0.154324 + b * 0.162028;
    const Y = r * 0.283881 + g * 0.668433 + b * 0.047685;
    const Z = r * 0.000088 + g * 0.072310 + b * 0.986039;
    const x = X / (X + Y + Z);
    const y = Y / (X + Y + Z);
    return [x, y];
}

const Hue = () => {
    const [state, setState] = useState(totalLight);
    const [startRotate, setStartRotate] = useState(false);

    const put = useCallback((id, index) => {
        fetch(
            `${API_URI}lights/${id}/state`,
            {
                method: 'PUT',
                body: JSON.stringify({ on: !state[index].on })
            },
        )
            .then(async (response) => {
                if (!response.ok) {
                    throw new Error('Error - 404 Not Found')
                }
                const data = await response.json();
                if (data[0].hasOwnProperty('success')) {
                    setState(prevState => ({ ...prevState, [index]: { ...prevState[index], on: !prevState[index].on }}));
                } else {
                    console.log(data);
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }, [state]);

    const setColor = useCallback((light, index, color) => {
        // get Philips Hue x,y values as an array
        const aXY = getXY(color.rgb);
        fetch(
            `${API_URI}lights/${light}/state`,
            {
                method: 'PUT',
                body: JSON.stringify({ bri: 254, xy: [aXY[0],aXY[1]] })
            },
        )
            .then(async (response) => {
                if (!response.ok) {
                    throw new Error('Error - 404 Not Found')
                }
                const data = await response.json();
                if (data[0].hasOwnProperty('success')) {
                    setState(prevState => ({ ...prevState, [index]: { ...prevState[index], bri: 254, xy: [aXY[0],aXY[1]] }}));
                } else {
                    console.log(data);
                }
            })
            .catch((error) => {
                console.log(error)
            })

    }, []);

    const onRotate = useCallback((id, index, color) => {
        // get Philips Hue x,y values as an array
        const aXY = getXY(color.rgb);
        fetch(
            `${API_URI}lights/${id}/state`,
            {
                method: 'PUT',
                body: JSON.stringify({ bri: 254, xy: [aXY[0],aXY[1]] })
            },
        )
            .then(async (response) => {
                if (!response.ok) {
                    throw new Error('Error - 404 Not Found')
                }
                const data = await response.json();
                if (data[0].hasOwnProperty('success')) {
                    setState(prevState => ({ ...prevState, [index]: { ...prevState[index], bri: 254, xy: [aXY[0],aXY[1]] }}));
                } else {
                    console.log(data);
                }
            })
            .catch((error) => {
                console.log(error)
            })

    }, []);
    return (
        <div>
            <ContainedButtons label={'Rotate'} onClick={() => setStartRotate(prevState => !prevState)} />
            {totalLight.map((light, index) => <ContainedButtons key={`on-off-${light.title}`} label={`On/Off light ${light.title}`} onClick={() => put(light.id, index)} />)}
            {totalLight.map((light, index) => (
                <div key={`color-${light.id}`}>
                    {light.title}
                    <ColorPicker startRotate={startRotate} onRotate={onRotate} onChange={color => setColor(light.id, index, color)} {...light} index={index} />
                </div>
            ))}
        </div>
    );
}

export default Hue;
