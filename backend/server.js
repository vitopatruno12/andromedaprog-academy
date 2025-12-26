import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import SibApiV3Sdk from "sib-api-v3-sdk";

dotenv.config();

const app = express();
app.set("trust proxy", 1);

app.use(cors({
  origin: "https://magenta-madeleine-9ebd1a.netlify.app",
  methods: ["POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
}));

app.use(express.json());

/* =======================
   BREVO API CONFIG
======================= */
const client = SibApiV3Sdk.ApiClient.instance;
client.authentications["api-key"].apiKey = process.env.BREVO_API_KEY;

const emailApi = new SibApiV3Sdk.TransactionalEmailsApi();

/* =======================
   SEND EMAIL
======================= */
app.post("/send-email", async (req, res) => {
  console.log("📩 POST /send-email ricevuta");

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false });
  }

  try {
    await emailApi.sendTransacEmail({
      sender: { email: "vpatruno528@gmail.com", name: "AndromedaProg Academy" },
      to: [{ email: "vpatruno528@gmail.com" }],
      replyTo: { email },
      subject: `Nuovo messaggio da ${name}`,
      textContent: `
Nome: ${name}
Email: ${email}

Messaggio:
${message}
      `,
    });

    console.log("✅ Email inviata via Brevo API");
    res.json({ success: true });
  } catch (err) {
    console.error("❌ Brevo API error:", err);
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
