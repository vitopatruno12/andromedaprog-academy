import React, { useState } from "react";

import { Toast, ToastContainer } from "react-bootstrap";



console.log("BUILD DEL", new Date().toISOString());
console.log("API_URL FRONTEND =", process.env.REACT_APP_API_URL);



// ✅ URL backend con fallback PRODUZIONE
const API_URL = process.env.REACT_APP_API_URL;

export default function ContactEmail({ darkMode }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({
    show: false,
    type: "success",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!isValidEmail(formData.email)) {
      setToast({
        show: true,
        type: "error",
        message: "Inserisci un indirizzo email valido.",
      });
      return;
    }

    setLoading(true);

    try {
      console.log("API URL =", API_URL);

      const res = await fetch(`${API_URL}/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setToast({
          show: true,
          type: "success",
          message: "Email inviata con successo! Ti risponderemo presto 🚀",
        });

        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Errore server");
      }
    } catch (err) {
      setToast({
        show: true,
        type: "error",
        message:
          "Errore nell'invio dell'email. Controlla la connessione o riprova più tardi.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`container p-4 my-5 rounded fade-in ${
        darkMode ? "bg-dark text-light" : "bg-light"
      }`}
    >
      <h2 className="text-center fw-bold mb-4">Contattaci via Email</h2>

      <ToastContainer position="top-end" className="p-3">
        <Toast
          bg={toast.type === "success" ? "success" : "danger"}
          show={toast.show}
          onClose={() => setToast({ ...toast, show: false })}
          delay={4000}
          autohide
        >
          <Toast.Header closeButton>
            <strong className="me-auto">
              {toast.type === "success" ? "Successo" : "Errore"}
            </strong>
          </Toast.Header>
          <Toast.Body className="text-white">
            {toast.message}
          </Toast.Body>
        </Toast>
      </ToastContainer>

      <form onSubmit={sendEmail}>
        <div className="mb-3">
          <label className="form-label">Nome</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            className="form-control"
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            className="form-control"
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Messaggio</label>
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            className="form-control"
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button className="btn btn-primary w-100" disabled={loading}>
          {loading ? "Invio in corso..." : "Invia Email"}
        </button>
      </form>
    </div>
  );
}
