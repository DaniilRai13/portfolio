"use server";

export type ContactField = "name" | "email" | "message";

export interface ContactFormState {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<ContactField, string>>;
  /** Введённые значения, чтобы не терять их при ошибке */
  values?: Partial<Record<ContactField, string>>;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const LIMITS: Record<ContactField, number> = {
  name: 100,
  email: 200,
  message: 3000,
};

function escapeHtml(value: string) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function validate(values: Record<ContactField, string>) {
  const errors: ContactFormState["errors"] = {};

  if (values.name.length < 2) errors.name = "Please enter your name.";
  if (!EMAIL_PATTERN.test(values.email)) errors.email = "Please enter a valid email.";
  if (values.message.length < 10) {
    errors.message = "Tell me a bit more — at least 10 characters.";
  }

  for (const field of Object.keys(LIMITS) as ContactField[]) {
    if (values[field].length > LIMITS[field]) {
      errors[field] = `Too long — max ${LIMITS[field]} characters.`;
    }
  }

  return errors;
}

export async function sendContactMessage(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  // Honeypot: поле скрыто от людей, его заполняют только боты
  if (formData.get("company")) {
    return { status: "success", message: "Thanks! Your message has been sent." };
  }

  const values = {
    name: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
  };

  const errors = validate(values);
  if (Object.keys(errors).length > 0) {
    return { status: "error", message: "Please check the highlighted fields.", errors, values };
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    console.error("Contact form: TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID is not set");
    return {
      status: "error",
      message: "The form is temporarily unavailable. Please write to me by email or Telegram.",
      values,
    };
  }

  const text = [
    "<b>New message from the portfolio</b>",
    "",
    `<b>Name:</b> ${escapeHtml(values.name)}`,
    `<b>Email:</b> ${escapeHtml(values.email)}`,
    "",
    escapeHtml(values.message),
  ].join("\n");

  try {
    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text, parse_mode: "HTML" }),
      signal: AbortSignal.timeout(10_000),
    });

    if (!response.ok) {
      console.error("Contact form: Telegram responded with", response.status, await response.text());
      throw new Error("Telegram request failed");
    }
  } catch {
    return {
      status: "error",
      message: "Something went wrong. Please try again or write to me by email.",
      values,
    };
  }

  return { status: "success", message: "Thanks! Your message has been sent — I'll reply within a day." };
}
