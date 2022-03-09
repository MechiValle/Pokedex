import React from "react";
import { Arrows } from "../Styles/Arrows";
import { PaginationText } from "../Styles/PaginationText";

const Pagination = (props) =>{
    const {onLeftClick, onRightClick, page, totalPages} = props;
    return (
        <div className="pagination">
            <Arrows onClick={onLeftClick}>&#x3c;</Arrows>
            <PaginationText>
                {page} of {totalPages}
            </PaginationText>
            <Arrows onClick={onRightClick}>&#x3e;</Arrows>
        </div>
    )
}


export default Pagination;