import { useEffect, cloneElement } from "react";

import "./login-popup.css"

function Popup(props) {
    const { children, closeModal } = props;

    const handleClick = (e) => {
        if (e.target.classList.contains("modal__container") || e.target.classList.contains("modal__close")) {
            closeModal()
        }
    }

    const childrenWithProps = cloneElement(children, {
        closeModal: closeModal
    })

    useEffect(() => {
        document.body.classList.add("lock")
        return () => document.body.classList.remove("lock")
    })
    return (
        <div className="modal header__modal">
            <div className="modal__container" onClick={handleClick}>
                <div className="modal__content">
                    <div className="modal__close"></div>
                    <div className="modal__header">
                        <h2 className="modal__title">Add a task</h2>
                    </div>
                    <div className="modal__body">
                        {childrenWithProps}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popup