const apiUrl =
  "https://us-central1-sending-emails-c80ff.cloudfunctions.net/api/marko-creativos/contact";

const fetchSendEmail = async (contact) => {
  const result = await fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify({
      contact: contact,
    }),
    headers: {
      "content-Type": "application/json",
      Accept: "application/json",
    },
  });

  return result;
};
