import React from "react";

export default function Footer({ darkMode }) {
  return (
    <footer
      className={`pt-5 mt-5 ${
        darkMode ? "bg-dark text-light" : "bg-light text-dark"
      }`}
      style={{
        borderTop: darkMode
          ? "1px solid rgba(255,255,255,0.1)"
          : "1px solid rgba(0,0,0,0.1)",
      }}
    >
      <div className="container">
        <div className="row gy-4">

          {/* BRAND */}
          <div className="col-md-4">
            <h5 className="fw-bold mb-3 text-gradient">
              AndromedaProg Academy
            </h5>
            <p className="small">
              Accademia di programmazione moderna dedicata a chi vuole
              trasformare la passione per il codice in competenze reali
              e spendibili nel mondo del lavoro.
            </p>
          </div>

          {/* LINK UTILI */}
          <div className="col-md-4">
            <h6 className="fw-bold mb-3">Link Utili</h6>
            <ul className="list-unstyled small">
              <li className="mb-2">
                <a href="/" className="text-decoration-none text-reset">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="/corsi" className="text-decoration-none text-reset">
                  Corsi
                </a>
              </li>
              <li className="mb-2">
                <a href="#faq" className="text-decoration-none text-reset">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#whatsapp" className="text-decoration-none text-reset">
                  Contatti
                </a>
              </li>
            </ul>
          </div>

          {/* CONTATTI */}
          <div className="col-md-4">
            <h6 className="fw-bold mb-3">Contatti</h6>
            <p className="small mb-2">
               Email: <strong>info@andromedaprog.it</strong>
            </p>
            <p className="small mb-2">
               WhatsApp: <strong>+39 328 318 7865</strong>
            </p>
            <p className="small mb-0">
              🌍 Formazione online • Tutor dedicato
            </p>
          </div>
        </div>

        {/* DIVIDER */}
        <hr
          className="my-4"
          style={{
            borderColor: darkMode
              ? "rgba(255,255,255,0.15)"
              : "rgba(0,0,0,0.15)",
          }}
        />

        {/* COPYRIGHT */}
        <div className="text-center pb-4 small">
          © {new Date().getFullYear()}{" "}
          <strong>AndromedaProg Academy</strong> – Tutti i diritti riservati.
        </div>
      </div>
    </footer>
  );
}
