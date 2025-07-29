import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(request: Request) {
 try {
  const body = await request.json();
  const { name, email, message } = body;

  if (!name || !email || !message) {
   return NextResponse.json(
    { error: "Missing fields: name, email and message are required." },
    { status: 400 }
   );
  }

  const msg = {
   to: "pedro_bonetti@hotmail.com",
   from: "pedro_bonetti@hotmail.com",
   replyTo: email,
   templateId: process.env.SENDGRID_TEMPLATE_ID!,
   dynamic_template_data: {
    name,
    email,
    message,
   },
  };

  await sgMail.send(msg);

  return NextResponse.json({ message: "E-mail enviado com sucesso!" });
 } catch (error) {
  if (
   typeof error === "object" &&
   error !== null &&
   "response" in error &&
   typeof error.response === "object" &&
   error.response !== null &&
   "body" in error.response
  ) {
   console.error("Erro ao enviar e-mail:", error.response.body);
  } else {
   console.error("Erro ao enviar e-mail:", error);
  }

  return NextResponse.json(
   { error: "Erro ao enviar e-mail. Por favor, tente novamente mais tarde." },
   { status: 500 }
  );
 }
}
