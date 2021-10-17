const scorpion = {
  name: "Scorpion",
  hp: 110,
  img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
  weapon: ["knife"],
  attack: () => {
    console.log(`${this.name} Fight...`);
  },
};
const sunzero = {
  name: "Sub-Zero",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
  weapon: ["knife"],
  attack: () => {
    console.log(`${this.name} Fight...`);
  },
};

function createPlayer(player, playerCharacter) {
  const $player = document.createElement("div");
  $player.classList.add(player);

	const $progressbar = document.createElement("div");
  $progressbar.classList.add("progressbar");
	$player.appendChild($progressbar);
	
  const $life = document.createElement("div");
  $life.classList.add("life");
  $life.style.width = "100%";
  $progressbar.appendChild($life);

  const $name = document.createElement("div");
  $name.classList.add("name");
  $name.innerText = playerCharacter.name;
  $progressbar.appendChild($name);

  const $character = document.createElement("div");
  $character.classList.add("character");
	$player.appendChild($character);
	
  const $img = document.createElement("img");
  $img.src = playerCharacter.img;
	$character.appendChild($img);
	
	const $root = document.querySelector(".arenas");
  $root.appendChild($player);
}
createPlayer("player1", scorpion);
createPlayer("player2", sunzero);
