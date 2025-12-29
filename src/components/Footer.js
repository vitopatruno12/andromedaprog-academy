import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Footer({ darkMode }) {
  const location = useLocation();
  const navigate = useNavigate();

  const goAndScroll = (id) => {
    const doScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return true;
      }
      return false;
    };

    // Se siamo già in home, scroll immediato
    if (location.pathname === "/") {
      doScroll();
      return;
    }

    // Se siamo su un'altra route, torniamo in home e poi scrolliamo
    navigate("/");

    // Aspetta che la Home venga renderizzata (DOM pronto)
    let tries = 0;
    const maxTries = 40; // ~2s (40 * 50ms)

    const timer = setInterval(() => {
      tries += 1;
      const ok = doScroll();
      if (ok || tries >= maxTries) clearInterval(timer);
    }, 50);
  };

  const linkBtnStyle = {
    background: "none",
    border: "none",
    padding: 0,
    cursor: "pointer",
    textAlign: "left",
  };

  return (
    <footer
      className={`pt-5 mt-5 ${darkMode ? "bg-dark text-light" : "bg-light text-dark"}`}
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
            <h5 className="fw-bold mb-3 text-gradient">AndromedaProg Academy</h5>
            <p className="small">
              Accademia di programmazione moderna dedicata a chi vuole trasformare
              la passione per il codice in competenze reali e spendibili nel mondo del lavoro.
            </p>
          </div>

          {/* LINK UTILI */}
          <div className="col-md-4">
            <h6 className="fw-bold mb-3">Link Utili</h6>

            <ul className="list-unstyled small">
              <li className="mb-2">
                <Link to="/" className="text-decoration-none text-reset">
                  Home
                </Link>
              </li>

              <li className="mb-2">
                <Link to="/corsi" className="text-decoration-none text-reset">
                  Corsi
                </Link>
              </li>

              <li className="mb-2">
                <button
                  type="button"
                  onClick={() => goAndScroll("faq")}
                  className="text-decoration-none text-reset"
                  style={linkBtnStyle}
                >
                  FAQ
                </button>
              </li>

              <li className="mb-2">
                <button
                  type="button"
                  onClick={() => goAndScroll("whatsapp")}
                  className="text-decoration-none text-reset"
                  style={linkBtnStyle}
                >
                  Contatti
                </button>
              </li>

              <li className="mt-3">
                <a
                  href="https://www.andromedaprog.it"
                  className="text-decoration-none text-reset fw-bold"
                >
                  ← Sito principale
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
            <p className="small mb-0">🌍 Formazione online • Tutor dedicato</p>
          </div>
        </div>

        <hr
          className="my-4"
          style={{
            borderColor: darkMode
              ? "rgba(255,255,255,0.15)"
              : "rgba(0,0,0,0.15)",
          }}
        />

        <div className="text-center pb-4 small">
          © {new Date().getFullYear()} <strong>AndromedaProg Academy</strong> – Tutti i diritti riservati.
        </div>
      </div>
    </footer>
  );
}
