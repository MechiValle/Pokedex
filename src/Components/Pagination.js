import React from "react";

const Pagination = (props) =>{
    const {onLeftClick, onRightClick, page, totalPages} = props;
    return (
        <div className="pagination">
            <button className="pagination-btn-left" onClick={onLeftClick}>&#9194;</button>
            <div>
                {page} of {totalPages}
            </div>
            <button className="pagination-btn-right" onClick={onRightClick}>&#9193;</button>
        </div>
    )
}


export default Pagination;