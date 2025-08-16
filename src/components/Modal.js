const Modal = ({ handleModalState }) => {
  return (
    <div className="modal-container">
      <div className="modal-content">
        <span className="modal-close" onClick={handleModalState}>X</span>
        <div>
          <h2>Why AntrAI?</h2>
          <p>AntrAI was born out of a simple yet profound mission: <strong>to create technology that doesn’t just process your words, it understands your world.</strong></p>
          <p>Unlike traditional AI tools that prioritize productivity, AntrAI listens, relates, and reflects the emotional depth of human experience.</p>
          <p>We believe in empathy-first design, not to replace human connection, but to strengthen it. Because if not now, when?</p>
        </div>
      </div>
    </div>
  )
}

export default Modal