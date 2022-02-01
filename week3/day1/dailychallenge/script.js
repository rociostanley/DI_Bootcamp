let solarSystem = [
  "Mercury",
  "Venus",
  "Earth",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune",
];

let colors = [
  "white",
  "yellow",
  "green",
  "red",
  "purple",
  "orange",
  "pink",
  "blue",
];

let section = document.body.children[0];

for (let i = 0; i < solarSystem.length; i++) {
  let planets = document.createElement("div");
  planets.className = "planet ";
  planets.className += solarSystem[i];
  planets.style.backgroundColor = colors[i];
  section.appendChild(planets);
}