import React from 'react';

export const Pagination = ({changePage}) => {

    const handleClick = num => () => {
        changePage(num);
    };

    return (<>
        <button onClick={handleClick(-1)} className="m-3">Prev</button>
        <button onClick={handleClick(1)} className="m-3">Next</button>
    </>)
};