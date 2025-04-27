import {NextResponse} from "next/server";
import mailjet from 'node-mailjet';
import * as process from "process";

export async function POST(req: NextResponse) {
	const body = await req.json();
	const name = body['name'];
	const email = body['email'];
	const subject = body['subject'];
	const message = body['message'];
	let hasError = false;

	if (!name ||!email ||!subject ||!message) {
		hasError = true;
	}

	if (!name.trim().length || name.length < 5) {
		hasError = true;
	}

	if (
		!email.trim().length ||
		!/\S+@\S+\.\S+/.test(email)
	) {
		hasError = true;
	}

	if (!subject.trim().length || subject.length < 10) {
		hasError = true;
	} else {
		if (subject.length > 100) {
			hasError = true;
		}
	}

	if (
		!message.trim().length ||
		message.length < 20
	) {
		hasError = true;
	}

	if (hasError) {
    return NextResponse.json({
      message: "Invalid inputs"
    }, {
			status: 400
    })
  }

	const mailjetClient = mailjet.apiConnect(
		process.env.MAILJET_PUBLIC_KEY || '',
		process.env.MAILJET_PRIVATE_KEY || ''
	)

	try {
		const response = await mailjetClient.post("send", { version: "v3.1" }).request({
			Messages: [
				{
					From: {
						Email: "contact@aymericdev.com",
						Name: "Formulaire de contact Aymericdev'"
					},
					To: [
						{
							Email: process.env.MAILJET_TO || '',
							Name: process.env.MAILJET_NAME || '',
						}
					],
					Subject: `[CONTACT]: ${subject}`,
					TextPart: `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`,
				},
			],
    });

		if (response.response.status !== 200) {
      return NextResponse.json({
        message: "Failed to send email"
      }, {
        status: 500
      })
		}

    return NextResponse.json({
      message: "Message sent"
    })
	} catch {
    return NextResponse.json({
      message: "Failed to send email"
    }, {
      status: 500
    })
	}
}