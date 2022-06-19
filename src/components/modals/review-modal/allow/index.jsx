import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";
import Button from "@ui/button";

const AllowReviewModal = ({ show, handleModal }) => (
    <Modal
        className="rn-popup-modal placebid-modal-wrapper"
        show={show}
        onHide={handleModal}
        centered
    >
        {show && (
            <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={handleModal}
            >
                <i className="feather-x" />
            </button>
        )}
        <Modal.Header>
            <h3 className="modal-title">Are you sure?</h3>
        </Modal.Header>
        <Modal.Body>
            <p>Do you want to make this course avaiable?</p>
            <div className="placebid-form-box">
                <div className="bit-continue-button">
                    <Button path="/connect" size="medium" fullwidth>
                        Allow
                    </Button>
                </div>
            </div>
        </Modal.Body>
    </Modal>
);

AllowReviewModal.propTypes = {
    show: PropTypes.bool.isRequired,
    handleModal: PropTypes.func.isRequired,
};
export default AllowReviewModal;
