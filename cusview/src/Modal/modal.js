import './modal.css';

function Modal ({ show, children }) {
    const showHideClassName = show ? "m display-block" : "m display-none";
    return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
      </section>
    </div>
    );
};
export default Modal;