import React, {useCallback, useEffect, useMemo, useState} from 'react';
import { orderBy } from 'lodash';
import Block from "./Block";
import Hue from "../hue";
import VirtualizedList from "../Virtualize";
import Piano from "../Piano";
import YoutubeConverter from "../YoutubeConverter";
import CustomizedAccordions from "../Accordion";
import PDFViewer from "../PdfViewer";
import Compressor from "../Compressor";
import Reverb from "../Reverb";
import PausePlayRepeat from "../PausePlayRepeat";

import './style.scss';

const inputs = [
    {
        component: 'input',
        name: 'email',
        type: 'email',
        autoFocus: true,
        required: true,
        hasValidityIcons: true,
        rules: ['isEmail', 'isForbiddenEmail'],
        label: 'Email',
        onChangeState: () => {},
    },
    {
        component: 'input',
        name: 'password',
        type: 'password',
        required: true,
        hasValidityIcons: true,
        rules: ['isAcceptableStringLength', 'isPassword'],
        label: 'Password',
        onChangeState: () => {},
    },
];

const buttons = [
    {
        component: 'button',
        type: 'submit',
        color: 'primary',
        variant: 'contained',
        label: 'OK',
        onClick: () => {},
        disabled: true,
        loading: true,
    },
];

const blocks = [
    { title: 'Piano', component: <Piano />, slug: 'piano', index: 0, width: '800px' },
    { title: 'Compressor calcul compensation', component: <Compressor />, slug: 'compressor', index:1, width: '800px' },
    { title: 'Calcul reverb', component: <Reverb />, slug: 'reverb', index: 5, width: '800px' },
    { title: 'Virtualized list', component: <VirtualizedList />, slug: 'virtualized-list', index: 2, width: '100%' },
    // { title: 'Youtube converter', component: <YoutubeConverter />, slug: 'youtube-converter', index: 3, width: '800px' }, // Not finish
    { title: 'Hue', component: <Hue />, slug: 'hue', index: 4, width: '800px' },
    { title: 'PausePlayRepeat', component: <PausePlayRepeat />, slug: 'pauseplayrepeat', index: 5, width: '800px' },
]
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
};

const getData = blocks => {
    const Json = localStorage.getItem('blocks');
    if (!Json) return blocks;
    const updatedBlocks = blocks.map(item => {
        const updateBlock = JSON.parse(Json).find(block => block.title === item.title);
        item.index = updateBlock.index
        return item;
    });
    return orderBy(updatedBlocks, ['index'], ['asc']);
}

const Container = () => {
    const [state, setState] = useState(getData(blocks));
    const onDragEnd = useCallback(result => {
        // dropped outside the list
        if (!result.destination) return;
        const items = reorder(state, result.source.index, result.destination.index);
        setState(items);
        // localStorage.setItem('blocks', JSON.stringify(items));
        localStorage.setItem('blocks', JSON.stringify(items.map((item, index) => ({ title: item.title, index }))))
    }, [state]);

    const Blocks = () => {
        return orderBy(state, ['index'], ['asc']).map((block, index) => <Block key={index} draggableId={`draggable-${index}`} index={index} {...block} />);
    };

    return (
        <div className="container-block">
            <CustomizedAccordions list={state} />
        </div>
    );
}

export default Container;
