export async function login(emailOrUsername: string, password: string) {
  const res = await fetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ emailOrUsername, password })
  });
  if (!res.ok) {
    let msg = 'Échec de la connexion';
    try {
      const data = await res.json();
      if (data.error) msg = data.error;
    } catch {
      // TODO: implement
    }
    throw new Error(msg);
  }
  return res.json();
}

export async function register(username: string, email: string, password: string) {
  const res = await fetch('/api/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, email, password })
  });
  if (!res.ok) {
    let msg = 'Échec de l’inscription';
    try {
      const data = await res.json();
      if (data.error) msg = data.error;
    } catch {
      // TODO: implement
    }
    throw new Error(msg);
  }
  return res.json();
}
