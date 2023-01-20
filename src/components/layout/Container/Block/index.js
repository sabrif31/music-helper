import React from 'react';
import { Draggable } from "react-beautiful-dnd";
import InnerBlock from './InnerBlock';
const Block = props => {
    return (
        <Draggable draggableId={props.draggableId} index={props.index}>
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    // isDragging={snapshot.isDragging}
                    {...provided.draggableProps}
                    // style={{ maxWidth: props.width }}
                >
                    <InnerBlock dragHandleProps={provided.dragHandleProps} {...props} />
                </div>
            )}
        </Draggable>
    );
}

export default Block;
