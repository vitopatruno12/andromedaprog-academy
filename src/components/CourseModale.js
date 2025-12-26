import React from "react";
import { Modal, Button } from "react-bootstrap";

export default function CourseModal({ show, onClose, course }) {
  if (!course) return null;

  return (
    <Modal show={show} onHide={onClose} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title className="fw-bold">{course.title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <h5 className="fw-bold mb-2">{course.tag}</h5>

        <p>{course.description}</p>

        <hr />

        <ul className="list-unstyled">
          <li> Durata: <strong>{course.duration}</strong></li>
          <li>Livello: <strong>{course.level}</strong></li>
          <li> Modalità: <strong>{course.mode}</strong></li>
        </ul>

        {course.program && (
          <>
            <h5 className="mt-4 fw-bold">Programma del Corso:</h5>
            <ul>
              {course.program.map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </>
        )}

        {/* Bottone WhatsApp */}
        <a
          href={`https://wa.me/393283187865?text=Ciao! Vorrei informazioni sul corso: ${encodeURIComponent(
            course.title
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn w-100 text-light fw-bold mt-3"
          style={{ backgroundColor: "#25D366" }}
        >
         Contattaci su WhatsApp
        </a>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Chiudi
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
