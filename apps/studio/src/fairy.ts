export async function talkToFairy(message: string) {
  const res = await fetch("/api/fairy", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      messages: [{ role: "user", content: message }],
    }),
  });

  if (!res.ok) {
    throw new Error(`Fairy API error: ${res.status}`);
  }

  const data = await res.json();
  return data.message.content as string;
}
