import React from "react";
import Card from "./Card";

function Modal(props) {

    function hideModal(e) {
        let target = e.target
        if (target.id === "modal") {
            props.onHideModal()
        }
    }

    return (
        <div onClick={hideModal} id="modal" className={props.show ? "modal" : "modal hide"}>
            <Card className="cardModal">
                {props.children}
            </Card>
        </div>
    )
}

export default Modal