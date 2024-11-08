import type { Handler } from "@netlify/functions";
import fetch from "node-fetch";

const handler: Handler = async function(event) {
  if (event.body === null) {
    return {
      statusCode: 400,
      body: JSON.stringify("Payload required"),
    };
  }

  const requestBody = JSON.parse(event.body) as {
    name: string;
    address: string;
    topic: string;
    message: string;
  };

  //automatically generated snippet from the email preview
  //sends a request to an email handler for a request email
  await fetch(`${process.env.URL}/.netlify/functions/emails/requests`, {
    headers: {
      "netlify-emails-secret": process.env.NETLIFY_EMAILS_SECRET as string,
    },
    method: "POST",
    body: JSON.stringify({
      from: "website-contact@domain.com",
      to: process.env.DESTINATION_EMAIL,
      subject: "Contact Request",
      parameters: {
        name: requestBody.name,
        address: requestBody.address,
        topic: requestBody.topic,
        message: requestBody.message,
      },
    }),
  });

  return {
    statusCode: 200,
    body: JSON.stringify("Contact sent"),
  };
};

export { handler };