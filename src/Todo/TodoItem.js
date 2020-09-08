import React from "react";
import PropTypes from "prop-types"

function TodoItem({record, index}) {
    return <li><strong>{index +1}</strong> {record.content}  </li>
}

TodoItem.propTypes = {
    record: PropTypes.object.isRequired,
    index: PropTypes.number
}

export default TodoItem