import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export const AddToCartModal = ({ modal, toggle, handleAddToCart }) => {
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Alert</ModalHeader>
        <ModalBody>Are you sure want to add this product into cart?</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleAddToCart}>
            Add to cart
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default AddToCartModal;
