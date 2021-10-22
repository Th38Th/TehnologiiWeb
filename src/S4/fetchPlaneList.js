function getObjectFromUrl(url) {
  return new Promise((resolve) =>
    fetch(url)
      .then((response) => response.text())
      .then((text) => resolve(JSON.parse(text)))
  );
}

function getPlanes(country) {
  return new Promise((resolve) =>
    getObjectFromUrl(
      'https://api.aviationstack.com/v1/flights/?access_key=16f12abe30fcc9c81cadf685ba9106f0'
    ).then((object) => ({
      x: object[0],
      y: object[1]
    }))
  );
}
