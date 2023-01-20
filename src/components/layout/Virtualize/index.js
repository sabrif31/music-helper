import React from 'react';
import { InfiniteLoader, List, AutoSizer, CellMeasurerCache } from 'react-virtualized';
import Paper from "@material-ui/core/Paper";

// import data from '../../../assets/MOCK_DATA.json';
import data from '../../../assets/KeyFrequencies.json';
import './style.scss';
import Typography from "@material-ui/core/Typography";

const total = data.length;
let list = data.slice(0, 100);
const cache = new CellMeasurerCache({ fixedWidth: true, defaultHeight: 30 });

let rowSelected = 0;
const setSelected = index => {
    rowSelected = index;
    console.log('setSelected', rowSelected);
}
function rowRenderer({
    key, // Unique key within array of rows
    index, // Index of row within collection
    isScrolling, // The List is currently being scrolled
    isVisible, // This row is visible within the List (eg it is not an overscanned row)
    style, // Style object to be applied to row (to position it)
}) {
    // const newStyle = { ...style };
    // if (style.height === 'auto') newStyle.top = cache.rowHeight(index) * index;
    // if (isScrolling && !isVisible) {
    //     return (
    //         <Paper elevation={0} key={key} style={style} className={'info'} square>
    //             <Typography variant="subtitle2" gutterBottom color={'secondary'}>
    //                 Scrolling...
    //             </Typography>
    //         </Paper>
    //     );
    // }
    // console.log('rowSelected', rowSelected);
    // ${rowSelected === index ? 'selected' : '' }
    return (
        <Paper elevation={0} key={key} style={style} onClick={() => setSelected(index)} className={`info`} square>
            <Typography variant="subtitle2">
                {list[index].instrument}
            </Typography>
            <Typography variant="subtitle2">
                {list[index]['high-pass']}
            </Typography>
            <Typography variant="subtitle2">
                {list[index].fondamental}
            </Typography>
            <Typography variant="subtitle2">
                {list[index]['sensible-frenquency']}
            </Typography>
            <Typography variant="subtitle2">
                {list[index].harmonics}
            </Typography>
        </Paper>
    );
}

const getRowHeight = ref => cache.rowHeight(ref) + 10;
const isRowLoaded = ({ index }) => list.length + 1 !== total && !!list[index];
const loadMoreRows = ({ startIndex, stopIndex }) => {
    list = [...list, ...data.slice(startIndex, stopIndex)];
    // console.log('list.length', list.length);
    // console.log('total', total);
}

const VirtualizedList = () => (
    <div style={{ display: 'flex' }}>
        <div style={{ flex: '1 1 auto' }}>
            <div className={'table-head'}>
                {Object.keys(list[0]).map(item => <span key={item}>{item}</span>)}
            </div>
            <InfiniteLoader
                isRowLoaded={isRowLoaded}
                loadMoreRows={loadMoreRows}
                rowCount={total}
            >
                {({onRowsRendered, registerChild}) => (
                    <AutoSizer>
                        {({height, width}) => (
                            <List
                                rowCount={total}
                                ref={registerChild}
                                width={width}
                                height={height}
                                onRowsRendered={onRowsRendered}
                                rowHeight={getRowHeight}
                                rowRenderer={rowRenderer}
                            />
                        )}
                    </AutoSizer>
                )}
            </InfiniteLoader>
        </div>
    </div>
)

export default VirtualizedList;
