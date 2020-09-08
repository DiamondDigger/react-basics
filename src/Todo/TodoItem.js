import React from "react";

export default function TodoItem({record, index}) {
    return <li><strong>{index +1}</strong> {record.content}  </li>
}