export function sendContact(name: string, address: string, topic: string, message: string) {
    return fetch("./.netlify/functions/triggerContact", {
        method: "POST",
        body: JSON.stringify({
          name: name,
          address: address,
          topic: topic,
          message: message
        })
      });
  }
  