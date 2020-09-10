import React from "react";
import PropTypes from "prop-types"

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5 rem 1 rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '.5rem'
    },
    input: {
        marginRight: '1rem'
    }
}


function TodoItem({record, index, funcFromTodoList}) {
    console.log(record)
    return (
        <li style={styles.li}>
            <span>
                <input type="checkbox" style={styles.input} onChange={() => funcFromTodoList(record.id, record.content)}/>
                <strong>{index + 1}</strong>
                &nbsp;
                {record.content}
            </span>

            <button className="rm">&times;</button>
        </li>
    )
}

TodoItem.propTypes = {
    record: PropTypes.object.isRequired,
    index: PropTypes.number,
    funcFromTodoList: PropTypes.func.isRequired
}

export default TodoItem