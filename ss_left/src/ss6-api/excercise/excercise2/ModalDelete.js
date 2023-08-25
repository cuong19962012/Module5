import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
export function ModalDelete(props) {
    const [show, setShow] = useState(props.show);
    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    useEffect(() => {
        setShow(props.show);
    }, [props])
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>Confirm delete {props.title}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => props.deletedRender(props.id, props.title)}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}