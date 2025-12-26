import React from "react";


export default function WhatsAppSection({ darkMode }){
    return(
        <div
      className={`container my-5 py-4 rounded shadow ${
        darkMode ? "bg-dark text-light" : "bg-light"
      }`}

      id="whatsapp"
      >

        <h2 className="fw-bold text-center mb-3"> Hai  domande sui corsi</h2>
        <p className="text-center mb-4">
          Contattaci  su whatapp: ti rispondiamo in pochi minuti e ti aiutiamo a scegliere il percorso giusto per te!
        </p>

 <div className="d-flex justify-content-center">
        <a
          href="https://wa.me/393283187865?text=Ciao! Vorrei avere informazioni sui corsi AndromedaProg."
          target="_blank"
          rel="noopener noreferrer"
          className="btn text-light fw-bold px-4 py-2"
          style={{
            backgroundColor: "#25D366",
            borderRadius: "12px",
            fontSize: "18px",
          }}
        >
           Contattaci su WhatsApp
        </a>
      </div>
    </div>
  );
}