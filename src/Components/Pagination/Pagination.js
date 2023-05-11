import React from 'react';
import '../../App.css'
function Pagination({page, count, handleNext, handlePrev}) {
    return (
        <div className='pag'>
            <button
                className="prev"
                onClick={handlePrev}>
                ❮ Prev
            </button>
            {page} / {count}
            <button
                className='next'
                onClick={handleNext}>

                ❯ Next
            </button>
        </div>
    );
}

export default Pagination;