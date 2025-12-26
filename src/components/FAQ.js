import React from "react";

export default function FAQ({ darkMode }) {
  return (
    <div className="container my-5" id="faq">
      <h2 className="fw-bold text-center mb-4">FAQ - Domande Frequenti</h2>

      <div className="accordion" id="faqAccordion">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className={`accordion-button ${
                darkMode ? "bg-dark text-light" : ""
              }`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq1"
            >
              I corsi sono adatti ai principianti?
            </button>
          </h2>
          <div id="faq1" className="accordion-collapse collapse">
            <div className="accordion-body faq-fad">
              Certo! I corsi iniziano da zero e aumentano gradualmente la difficoltà.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className={`accordion-button collapsed ${
                darkMode ? "bg-dark text-light" : ""
              }`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq2"
            >
              È previsto un certificato finale?
            </button>
          </h2>
          <div id="faq2" className="accordion-collapse collapse">
            <div className="accordion-body faq-fad">
              Sì, ogni corso rilascia un certificato AndromedaProg.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className={`accordion-button collapsed ${
                darkMode ? "bg-dark text-light" : ""
              }`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq3"
            >
              C'è un supporto tutor?
            </button>
          </h2>
          <div id="faq3" className="accordion-collapse collapse">
            <div className="accordion-body faq-fad">
              Certo! Puoi contattarci via email o WhatsApp per dubbi o aiuto.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
