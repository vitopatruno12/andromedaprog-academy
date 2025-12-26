import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./animations.css";
import CourseModal from "./CourseModale";


// ============================
// LISTA CORSI
// ============================
const allCourses = [
  {
    id: 1,
    title: "Programmazione da Zero",
    tag: "Base",
    category: "base",
    duration: "4 settimane",
    level: "Principianti",
    mode: "Online",
    description:
      "Impara la logica della programmazione da zero con esempi semplici e pratici.",
    program: [
     "Cos'è la programmazione e come ragiona un computer",
    "Introduzione agli algoritmi e al pensiero logico",
    "Variabili, tipi di dato e operatori",
    "Condizioni (if / else) e flussi decisionali",
    "Cicli (for, while) e automazione delle operazioni",
    "Funzioni: come organizzare e riutilizzare il codice",
    "Gestione degli errori e debug di base",
    "Struttura di un piccolo programma reale",
    "Sviluppo guidato del primo progetto pratico",
    "Consigli su come continuare lo studio e specializzarsi" 
    ]
  },

  {
    id: 2,
    title: "Web Development (HTML, CSS, JavaScript)",
    tag: "Base/Medio",
    category: "frontend",
    duration: "6 settimane",
    level: "Principianti / Intermedi",
    mode: "Online",
    description:
      "Crea siti web moderni, responsive e completamente professionali.",
    program: [
       "Fondamenti del Web e funzionamento dei browser",
    "HTML5: struttura semantica delle pagine web",
    "Creazione di layout accessibili e SEO-friendly",
    "CSS3: box model, colori, font e gestione degli spazi",
    "Flexbox e Grid per layout moderni e responsive",
    "Responsive Design e Mobile First",
    "Introduzione a JavaScript e sintassi di base",
    "Variabili, funzioni, condizioni e cicli",
    "Manipolazione del DOM e gestione degli eventi",
    "Creazione di interazioni dinamiche nelle pagine",
    "Best practice e organizzazione del codice",
    "Progetto finale: realizzazione di un sito web completo",
    "Ottimizzazione e pubblicazione online del progetto"
    ]
  },

  {
    id: 3,
    title: "React Developer",
    tag: "Avanzato",
    category: "frontend",
    duration: "8 settimane",
    level: "Intermedio",
    mode: "Online",
    description:
      "Diventa sviluppatore React creando componenti, Router, Hooks e web app complesse.",
    program: [
       "Introduzione a React e setup dell’ambiente di sviluppo",
    "JSX, componenti funzionali e struttura di un progetto React",
    "Props, riutilizzo dei componenti e composizione",
    "Gestione dello stato con useState e useEffect",
    "Gestione eventi e form controllati",
    "React Router: navigazione tra pagine e layout dinamici",
    "Consumo di API REST e gestione dati asincroni",
    "Pattern di progettazione e best practice React",
    "Ottimizzazione delle performance e organizzazione del codice",
    "Sviluppo di una web application completa",
    "Preparazione del progetto per il deploy",
    "Pubblicazione dell’applicazione online e portfolio finale"
    ]
  },

  {
    id: 4,
    title: "Backend Developer",
    tag: "Backend",
    category: "backend",
    duration: "8 settimane",
    level: "Intermedio",
    mode: "Online",
    description:
      "Crea API professionali con Node.js, Express e database MongoDB.",
    program: [
     "Introduzione al backend e architettura client-server",
  "Node.js: event loop, moduli, npm e gestione dell’ambiente",
  "Creazione di server con Express.js",
  "REST API: rotte, controller e best practices",
  "CRUD completo (Create, Read, Update, Delete)",
  "Middleware: autenticazione, validazione e gestione errori",
  "Database MongoDB: modelli, query e relazioni",
  "Integrazione backend–frontend",
  "Gestione delle variabili d’ambiente e sicurezza",
  "Test delle API con Postman",
  "Progetto finale: API backend completa e pronta per la produzione"
    ]
  },

  {
    id: 5,
    title: "Full Stack Developer",
    tag: "Full Stack",
    category: "fullstack",
    duration: "12 settimane",
    level: "Intermedio / Avanzato",
    mode: "Online + Tutor",
    description:
      "Percorso completo: frontend, backend, database e deploy professionale.",
    program: [
     "Ripasso avanzato di HTML, CSS e JavaScript",
    "Frontend moderno con React",
    "Gestione avanzata dello stato e routing",
    "Backend con Node.js ed Express",
    "Creazione e consumo di API REST",
    "Database MongoDB e integrazione backend",
    "Autenticazione utenti e gestione dei permessi",
    "Connessione frontend-backend",
    "Debug e ottimizzazione dell'applicazione",
    "Deploy frontend e backend",
    "Progetto Full Stack completo con tutoraggio"
    ]
  },

  {
    id: 6,
    title: "Python Developer",
    tag: "Avanzato",
    category: "backend",
    duration: "4 settimane",
    level: "Intermedio",
    mode: "Online + Tutor",
    description:
      "Diventa sviluppatore Python backend e crea applicazioni reali.",
    program: [
      "Introduzione a Python e sintassi base",
  "Strutture dati e controllo del flusso",
  "Programmazione orientata agli oggetti",
  "Gestione file e moduli",
  "Introduzione al backend con Python",
  "Creazione di API con Flask o FastAPI",
  "Gestione delle richieste HTTP",
  "Connessione a database",
  "Autenticazione e sicurezza base",
  "Testing e debugging",
  "Deploy di applicazioni Python",
  "Progetto finale backend Python"
    ]
  }
];

// ============================
// COMPONENTE PRINCIPALE
// ============================
export default function CoursesCatalog({ darkMode }) {
  const [filter, setFilter] = useState("all");

  const filteredCourses =
    filter === "all"
      ? allCourses
      : allCourses.filter((c) => c.category === filter);

  const cardColors = ["#0066FF", "#FF6B00", "#7C3AED", "#00C78B", "#FF0077"];

  const [showModal, setShowModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const openModal = (course) => {
    setSelectedCourse(course);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedCourse(null);
    setShowModal(false);
  };

  return (
    <div
      className={`container py-5 ${darkMode ? "text-light" : ""}`}
      id="courses"
    >
      {/* TITOLO ACCATTIVANTE */}
      <div className="text-center mb-4">
        <h2 className="fw-bold mb-3 display-5">
           Trasforma il tuo Futuro con i Corsi{" "}
          <span className="text-gradient">AndromedaProg</span>
        </h2>

        <p className="text-muted">
          Scegli il percorso perfetto per crescere come sviluppatore.
        </p>

        {/* FILTRI */}
        <div className="btn-group mt-3">
          <button
            className="btn btn-outline-primary"
            onClick={() => setFilter("all")}
          >
            Tutti
          </button>
          <button
            className="btn btn-outline-primary"
            onClick={() => setFilter("base")}
          >
            Base
          </button>
          <button
            className="btn btn-outline-primary"
            onClick={() => setFilter("frontend")}
          >
            Frontend
          </button>
          <button
            className="btn btn-outline-primary"
            onClick={() => setFilter("backend")}
          >
            Backend
          </button>
          <button
            className="btn btn-outline-primary"
            onClick={() => setFilter("fullstack")}
          >
            Full Stack
          </button>
        </div>
      </div>

      {/* LISTA CORSI */}
      <div className="row g-4">
        {filteredCourses.map((corso, index) => (
          <div key={corso.id} className="col-md-6 col-lg-4">
            <div
              className="card course-card h-100 shadow-sm fade-in"
              style={{
                borderTop: `6px solid ${
                  cardColors[index % cardColors.length]
                }`,
                boxShadow: `0 0 12px ${
                  cardColors[index % cardColors.length]
                }55`,
              }}
            >
              <div className="card-body">
                <span
                  className="badge text-light mb-2"
                  style={{
                    backgroundColor:
                      cardColors[index % cardColors.length],
                  }}
                >
                  {corso.tag}
                </span>

                <h4 className="fw-bold">{corso.title}</h4>
                <p className="mt-2">{corso.description}</p>
              </div>

              <div className="card-footer bg-transparent border-0">
                <button
                  className="btn w-100 text-light"
                  style={{
                    backgroundColor:
                      cardColors[index % cardColors.length],
                  }}
                  onClick={() => openModal(corso)}
                >
                  Scopri di più
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* MODALE DETTAGLI CORSO */}
      <CourseModal
        show={showModal}
        onClose={closeModal}
        course={selectedCourse}
      />
    </div>
  );
}
