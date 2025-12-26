import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import SibApiV3Sdk from "sib_api_v3_sdk";

dotenv.config();

const app = express();

/* =======================
   MIDDLEWARE
======================= */
app.set("trust proxy", 1);

app.use(cors({
  origin: "https://magenta-madeleine-9ebd1a.netlify.app",
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"]
}));

app.use(express.json());

/* =======================
   BREVO API SETUP
======================= */
const client = SibApiV3Sdk.ApiClient.instance;
client.authentications["api-key"].apiKey = process.env.BREVO_API_KEY;

const transactionalApi = new SibApiV3Sdk.TransactionalEmailsApi();

console.log("✅ Brevo API inizializzata");

/* =======================
   ROUTE SEND EMAIL
======================= */
app.post("/send-email", async (req, res) => {
  console.log("📩 POST /send-email ricevuta");

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: "Dati mancanti"
    });
  }

  try {
    await transactionalApi.sendTransacEmail({
      sender: {
        email: "noreply@andromedaprog.academy",
        name: "AndromedaProg Academy"
      },
      to: [
        {
          email: "vpatruno528@gmail.com",
          name: "Admin"
        }
      ],
      replyTo: {
        email,
        name
      },
      subject: `Nuovo messaggio da ${name}`,
      htmlContent: `
        <h3>Nuovo messaggio dal sito</h3>
        <p><b>Nome:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Messaggio:</b></p>
        <p>${message}</p>
      `
    });

    console.log("✅ Email inviata con Brevo API");

    res.json({ success: true });

  } catch (error) {
    console.error("❌ Errore Brevo:", error);
    res.status(500).json({ success: false });
  }
});

/* =======================
   START SERVER
======================= */
const PORT = process.env.PORT;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Backend avviato sulla porta ${PORT}`);
});
