import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Chybí povinná pole." }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "CHCUHR web <onboarding@resend.dev>",
    to: "info@suhr.cz",
    subject: `Nová zpráva z webu od ${name}`,
    text: `Jméno: ${name}\nE-mail: ${email}\n\nZpráva:\n${message}`,
    replyTo: email,
  });

  if (error) {
    return NextResponse.json({ error: "Nepodařilo se odeslat zprávu." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
