import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { useState } from "react";
import * as Service from "../excercise2/Service"
import { toast } from "react-toastify";
function ModalDelete(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const confirmDelete = async (id) => {
        await Service.deleteBook(id);
        toast(`${props.title} deleted`);
        props.func();
    };
    return (
        <>
            <Button variant="danger" onClick={handleShow}>
                Delete
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>Confirm delete book</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => confirmDelete(props.id)}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default ModalDelete