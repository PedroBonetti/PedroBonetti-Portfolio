import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
 try {
  const body = await request.json();
  const { name, email, message } = body;

  if (!name || !email || !message) {
   return NextResponse.json(
    { error: "Missing fields" },
    { status: 400 }
   );
  }

  await resend.emails.send({
   from: "Portfolio Contact <onboarding@resend.dev>",
   to: ["pedro_bonetti@hotmail.com"],
   replyTo: email,
   subject: `Contato via Portfolio: ${name}`,
   html: `
<!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Nova Mensagem</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f9f9f9; color: #111111;">
      
      <div style="max-width: 600px; margin: 40px auto; background-color: #ffffff; border: 1px solid #eaeaea; border-radius: 8px; overflow: hidden;">
        
        <div style="padding: 24px 32px; border-bottom: 1px solid #eaeaea; background-color: #fafafa;">
          <p style="margin: 0; font-size: 12px; text-transform: uppercase; letter-spacing: 1.5px; color: #666666; font-weight: 600;">
            Nova mensagem do Portfolio
          </p>
        </div>

        <div style="padding: 32px;">
          
          <div style="margin-bottom: 24px;">
            <p style="margin: 0 0 4px; font-size: 14px; color: #888888;">De</p>
            <p style="margin: 0; font-size: 18px; font-weight: 500; color: #111111;">${name}</p>
            <p style="margin: 0; font-size: 14px; color: #666666;">${email}</p>
          </div>

          <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid #eaeaea;">
            <p style="margin: 0 0 12px; font-size: 14px; color: #888888;">Mensagem</p>
            <p style="margin: 0; font-size: 16px; line-height: 1.6; color: #333333; white-space: pre-wrap;">${message}</p>
          </div>
          
        </div>

        <div style="padding: 16px 32px; background-color: #fafafa; border-top: 1px solid #eaeaea; text-align: center;">
          <p style="margin: 0; font-size: 12px; color: #999999;">
            Responda diretamente a este e-mail para contatar ${name}.
          </p>
        </div>

      </div>
    </body>
    </html>
      `,
  });

  return NextResponse.json({ message: "E-mail enviado com sucesso!" });

 } catch (error) {
  return NextResponse.json(
   { error: "Erro ao enviar e-mail" },
   { status: 500 }
  );
 }
}