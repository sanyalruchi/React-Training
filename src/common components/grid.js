import React from 'react';

function GridLayout(props){
    console.log(props.data && props.data.data[0], "props");
    return(
        <div className="grid-container">
            {props.data && props.data.data && props.data.data.map(element => (
            <div className="grid-row" key={element.id}>
                <div className="grid-column">{element.id}</div>
                <div className="grid-column">{element.first_name}</div>
                <div className="grid-column">{element.last_name}</div>
            </div> 
            ))
            }
        </div>
    )
}

export default GridLayout;