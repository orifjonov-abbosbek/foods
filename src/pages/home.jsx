import React from "react";
import "./home.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const Home = () => {
  const [modalOpen, setModalOpen] = React.useState(false);


  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };


  return (
    <>
      <div className="container">
       
        <div className="home-wrapper">
          <div className="content">
            <h1 className="home-title">Give order for a table !!!</h1>
            <button
              className="home-contact mt-8"
              style={{ marginTop: "100px" }}
              onClick={toggleModal}
            >
              Contact
            </button>
          </div>
        </div>
      </div>

      <Modal isOpen={modalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Contact Us</ModalHeader>
        <ModalBody>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea className="form-control" id="message"></textarea>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggleModal}>
            Close
          </Button>
          <Button color="primary">Send</Button>
        </ModalFooter>
      </Modal>

     
    </>
  );
};

export default Home;
