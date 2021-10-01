export async function getHTTPHeader(data) {
    const response = await fetch(`/`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({user: data})
      })
    return await response.json();
}