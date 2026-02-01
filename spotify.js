const token = "YOUR_SPOTIFY_ACCESS_TOKEN";

window.search = async function () {
  const query = document.getElementById("search").value;
  const res = await fetch(
    `https://api.spotify.com/v1/search?q=${query}&type=track&limit=10`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

  const data = await res.json();
  const results = document.getElementById("results");
  results.innerHTML = "";

  data.tracks.items.forEach(track => {
    const li = document.createElement("li");
    li.textContent = `${track.name} - ${track.artists[0].name}`;
    results.appendChild(li);
  });
};
