// widgets/alert_modal.js
export default function AlertModal({ show, title, description, onClose }) {
    if (!show) return null;

    return (
        <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered"> {/* Orta pozisyonda yerleştirme */}
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{title}</h5>
                        <button type="button" className="btn-close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        {description}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onClose}>Kapat</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
