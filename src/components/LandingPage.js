import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./animations.css";

export default function LandingPage({ darkMode }) {
  return (
    <div className={darkMode ? "bg-dark text-light" : "bg-light"}>

      {/* ============================= */}
      {/* 1. HERO SEZIONE PRINCIPALE    */}
      {/* ============================= */}
      <section className="container py-5 text-center hero-section fade-slide-down">
        <h1 className="display-4 fw-bold mb-3">
          Diventa Programmatore con{" "}
          <span className="text-gradient">AndromedaProg</span>
        </h1>

        <h2 className="fw-bold mb-3 banner-title">
          Corsi pratici, moderni e facili da seguire: creati per portarti
          da zero al tuo primo progetto reale.
        </h2>

        <div className="text-center mt-5">
          <img
            src="/images/logo-andromedaprog.png"
            alt="Logo AndromedaProg"
            style={{ width: "748px", marginRight: "10px" }}
          />
        </div>
      </section>

      {/* ============================= */}
      {/* BANNER - CHI SIAMO */}
      {/* ============================= */}
      <section
        className="text-center about-banner fade-slide-right"
        style={{
          background: "linear-gradient(90deg, #00544dd0, #879900ff)",
          color: "white",
          borderRadius: "16px",
          padding: "40px 20px",
          margin: "40px auto",
          maxWidth: "1300px",
        }}
      >
        <h2 className="fw-bold mb-3" style={{ fontSize: "30px" }}>
          Un nuovo modo di imparare a programmare
        </h2>

        <p className="fs-5 mx-auto" style={{ maxWidth: "700px" }}>
          AndromedaProg nasce con una missione: rendere la programmazione chiara,
          accessibile e davvero pratica attraverso un metodo moderno e supporto personalizzato.
        </p>

        <div className="text-center mt-4">
          <Link to="/corsi" className="btn btn-primary px-4 py-2">
            Vedi tutti i corsi
          </Link>
        </div>
      </section>

      {/* ============================= */}
      {/* PERCHÉ SCEGLIERE */}
      {/* ============================= */}
      <section className="container py-5 fade-slide-left">
        <h2 className="fw-bold text-center mb-5">Perché scegliere AndromedaProg?</h2>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="choose-card text-center p-4 shadow-sm">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1828/1828817.png"
                width="70"
                className="mb-3"
                alt="Metodo pratico di apprendimento"
              />
              <h4 className="fw-bold mb-2">Metodo 100% pratico</h4>
              <p className="text-muted">
                Ogni lezione è progettata per farti creare progetti reali fin dal primo giorno.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="choose-card text-center p-4 shadow-sm">
              <img
                src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
                width="70"
                className="mb-3"
                alt="Tutor dedicato"
              />
              <h4 className="fw-bold mb-2">Tutor dedicato</h4>
              <p className="text-muted">
                Hai sempre un tutor che ti segue passo passo.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="choose-card text-center p-4 shadow-sm">
              <img
                src="https://cdn-icons-png.flaticon.com/512/992/992534.png"
                width="70"
                className="mb-3"
                alt="Risultati concreti"
              />
              <h4 className="fw-bold mb-2">Risultati garantiti</h4>
              <p className="text-muted">
                Costruirai progetti reali da inserire nel tuo portfolio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= */}
      {/* RECENSIONI */}
      {/* ============================= */}
      <section className="container py-5 fade-slide-up">
        <h2 className="fw-bold text-center mb-5">Dicono di noi</h2>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="card p-4 shadow-sm review-card h-100">
              <div className="d-flex align-items-center mb-3">
                <img
                  src="https://i.pravatar.cc/80?img=12"
                  className="rounded-circle me-3"
                  width="60"
                  height="60"
                  alt="Foto studente Marco"
                />
                <div>
                  <h5 className="fw-bold mb-0">Marco L.</h5>
                  <small className="text-muted">Corso: Web Development</small>
                </div>
              </div>
              <div className="mb-2">⭐⭐⭐⭐⭐</div>
              <p>
                “Non sapevo nulla di programmazione. In 6 settimane ho costruito il mio primo sito.”
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-4 shadow-sm review-card h-100">
              <div className="d-flex align-items-center mb-3">
                <img
                  src="https://i.pravatar.cc/80?img=32"
                  className="rounded-circle me-3"
                  width="60"
                  height="60"
                  alt="Foto studentessa Sara"
                />
                <div>
                  <h5 className="fw-bold mb-0">Sara P.</h5>
                  <small className="text-muted">Corso: React Developer</small>
                </div>
              </div>
              <div className="mb-2">⭐⭐⭐⭐⭐</div>
              <p>
                “Le lezioni sono chiare e pratiche. Ora creo app da sola!”
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-4 shadow-sm review-card h-100">
              <div className="d-flex align-items-center mb-3">
                <img
                  src="https://i.pravatar.cc/80?img=45"
                  className="rounded-circle me-3"
                  width="60"
                  height="60"
                  alt="Foto studente Davide"
                />
                <div>
                  <h5 className="fw-bold mb-0">Davide R.</h5>
                  <small className="text-muted">Corso: Programmazione da Zero</small>
                </div>
              </div>
              <div className="mb-2">⭐⭐⭐⭐⭐</div>
              <p>
                “Partivo da zero. Ora ho finalmente capito la programmazione.”
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
