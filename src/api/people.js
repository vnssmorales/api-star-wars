export async function getPeople(page = 1) {
  try {
    const response = await fetch(`http://swapi.dev/api/people/?page=${page}`);
    if (!response.ok) {
      throw new NetworkError();
    }
    const data = await response.json();
    return data;
  } catch (err) {
    throw err;
  }
}

export async function getCharacter(id = 1) {
  const response = await fetch(`http://swapi.dev/api/people/${id}`);
  const data = await response.json();
  return data;
}

export async function searchCharacter(name) {
  const response = await fetch(`http://swapi.dev/api/people/?search=${name}`);
  const data = await response.json();
  return data;
}

class NetworkError extends Error {
  constructor() {
    super("Network error");
  }
}
