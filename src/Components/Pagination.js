import React from "react";

const Pagination = (props) =>{
    const {onLeftClick, onRightClick, page, totalPages} = props;
    return (
        <div className="pagination">
            <button className="pagination-btn-left" onClick={onLeftClick}>&#11164;</button>
            <div>
                {page} of {totalPages}
            </div>
            <button className="pagination-btn-right" onClick={onRightClick}>&#11166;</button>
        </div>
    )
}


export default Pagination;