const DEFAULT_TIMEOUT_MS = 700;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function submitApplication(payload) {
  const endpoint = import.meta.env.VITE_APPLICATIONS_API_URL;
  const apiKey = import.meta.env.VITE_APPLICATIONS_API_KEY;

  // Local fallback so UI flow works before backend is connected.
  if (!endpoint) {
    await sleep(DEFAULT_TIMEOUT_MS);
    return { ok: true, source: "mock" };
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(apiKey ? { Authorization: `Bearer ${apiKey}` } : {}),
    },
    body: JSON.stringify(payload),
  });

  let data = null;
  try {
    data = await response.json();
  } catch {
    data = null;
  }

  if (!response.ok) {
    throw new Error(data?.message || "Не вдалося відправити заявку");
  }

  return data || { ok: true, source: "api" };
}

