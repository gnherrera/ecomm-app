const API_URL = "https://api.restful-api.dev/objects";

export async function api<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const res = 
  await fetch(`${API_URL}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  })

  if (!res.ok) {
    throw new Error(`API error: ${res.status}`)
  }

  return res.json()
}
