import './Notification.css';

const Notification = ({ message, onClose }) => {

    if (!message) return null;
  
    return (
      <div className="notification">
        <p>{message}</p>
        <button onClick={onClose} className="close-btn">Close</button>
      </div>
    );
  };
  
  export default Notification;