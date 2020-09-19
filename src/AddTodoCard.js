import React from "react";
import Modal from "./Modal/Modal";
import './Modal/Modal.css'
import ModalFunctional from "./Modal/ModalFunctional";

function AddTodoCard() {
    return(
        <ModalFunctional data={{title: 'title from card', info: 'info from card'}}/>
    )
}

export default AddTodoCard