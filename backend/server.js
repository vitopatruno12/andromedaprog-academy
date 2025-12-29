import express from "express";
import cors from "cors";

const app = express();

app.set("trust proxy", 1);

app.use(cors({
  origin:  "https://serene-meerkat-3872f9.netlify.app",
  methods: ["POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"]
}));

app.use(express.json());

console.log("🔥 Backend avviato (Brevo API)");

app.post("/send-email", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false });
    }

    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY,
      },
      body: JSON.stringify({
        sender: {
          name: "AndromedaProg Academy",
          email: process.env.BREVO_SENDER_EMAIL, // email verificata Brevo
        },
        to: [
          {
            email: "info@andromedaprog.it",

            name: "AndromedaProg Academy"
          },
        ],
        replyTo: {
          email :"info@andromedaprog.it",
          name :"Andromedaprog-Academy",
        },
        subject: `Nuovo messaggio da ${name}`,
        htmlContent: `
          <h3>Nuovo messaggio</h3>
          <p><b>Nome:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Messaggio:</b><br/>${message}</p>
        `,
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error("❌ Brevo API error:", err);
      return res.status(500).json({ success: false });
    }

    console.log("✅ Email inviata via Brevo API");
    res.json({ success: true });

  } catch (err) {
    console.error("❌ Errore:", err);
    res.status(500).json({ success: false });
  }
});

const PORT = process.env.PORT;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server attivo su porta ${PORT}`);
});
