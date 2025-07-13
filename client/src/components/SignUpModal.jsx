import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import '../styles/SignUpModal.css';

function SignUpModal({ isOpen, onClose }) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_6z76287',     // replace with your actual EmailJS service ID
      'template_f9v9bta',    // replace with your template ID
      form.current,
      'CNQY0k8wKf52-niY_'         // replace with your public key (user ID)
    ).then(() => {
      alert('Message sent successfully!');
      onClose(); // close modal after success
    }).catch((error) => {
        alert('Failed to send message. Please try again.');
        console.error('EmailJS Error:', error.text || error);
      });
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>×</button>
        <h2>We will send you updates as the website continues to grow!</h2>
        <p>Please let us know if you have any questions, comments, or concerns.</p>

        <form ref={form} onSubmit={sendEmail} className="signup-form">
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea name="message" placeholder="Comments or Questions" rows="4" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default SignUpModal;
