import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const SearchTaskPopup = ({ modal, toggle, taskObj }) => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescripation] = useState("");

  useEffect(() => {
    setTaskName(taskObj.Name);
    setDescripation(taskObj.Description);
  }, [taskObj]);

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>상세보기</ModalHeader>
      <ModalBody>
        <form>
          <div className="form-group">
            <label>Task Name</label>
            <input
              type="text"
              className="form-control"
              value={taskName}
              readOnly
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              rows="5"
              className="form-control"
              value={description}
              readOnly
            ></textarea>
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default SearchTaskPopup;