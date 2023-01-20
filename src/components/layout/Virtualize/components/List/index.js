import React from 'react';
import { List } from 'react-virtualized';

// List data as an array of strings
const list = [
    'Brian Vaughn',
];

function rowRenderer({
    key, // Unique key within array of rows
    index, // Index of row within collection
    isScrolling, // The List is currently being scrolled
    isVisible, // This row is visible within the List (eg it is not an overscanned row)
    style, // Style object to be applied to row (to position it)
}) {
    return (
        <div key={key} style={style}>
            {list[index]}
        </div>
    );
}
export default props => (
    <List
        {...props}
        width={300}
        height={300}
        rowCount={list.length}
        rowHeight={20}
        rowRenderer={rowRenderer}
    />
);
