"use server";

import sgMail from "@sendgrid/mail";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method !== "POST") {
		res.status(405).json({ message: "INVALID_METHOD" });

		return;
	}

	const { nom, email, contenu } = req.body;
	if (!email || !contenu) {
		res.status(400).json({ message: "INVALID_PARAMETER" });
		return;
	}

	const emailPattern =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (!emailPattern.test(email)) {
		console.log("ici");
		res.status(400).json({
			message: "EMAIL_SYNTAX_INCORRECT",
		});
		return;
	}

	const message = contenu
		.replace(/\r?\n/g, "<br>")
		.replace(/\t/g, "<br>")
		.replace(/<br\s*\/?>/gi, "<br>");

	const sendgridApiKey = process.env.KEY_SENDGRID;

	if (!sendgridApiKey) {
		console.error("SendGrid key not defined");
		res.status(500).json({ message: "SENDGRID_KEY_NOT_DEFINED" });
		return;
	}
	sgMail.setApiKey(sendgridApiKey);

	const sendGridMail = {
		to: "guestin.jonathan@gmail.com",
		from: "guestin.jonathan@gmail.com",
		templateId: "d-af36343989f646699cd9c59b82f6e298",
		dynamic_template_data: {
			nom: nom,
			contenu: message,
			email: email,
		},
	};
	try {
		await sgMail.send(sendGridMail);
		console.log('Email sent');
	
		// Envoyer une réponse réussie
		res.status(200).json({ message: 'EMAIL_SENT_SUCCESSFULLY' });
	  } catch (error) {
		console.error(error);
		res.status(500).json({ message: 'EMAIL_SENDING_FAILED' });
	  }
}
