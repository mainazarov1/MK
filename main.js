const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');
const player1 = {
	player: 1,
  name: "Scorpion",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
  weapon: ["knife"],
  attack: () => {
    console.log(`${this.name} Fight...`);
  },
};
const player2 = {
	player: 2,
  name: "Sub-Zero",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
  weapon: ["knife"],
  attack: () => {
    console.log(`${this.name} Fight...`);
  },
};
function createElement(tag, className) {
	const $tag = document.createElement(tag);
	$tag.classList.add(className);
	return $tag;
}
function createPlayer(playerCharacter) {
  const $player = createElement('div', 'player' + playerCharacter.player);
	const $progressbar = createElement('div', 'progressbar');
  const $character = createElement('div', 'character');
	const $life = createElement('div', 'life');
  const $name = createElement('div', 'name');
  const $img = document.createElement('img');
	
	$life.style.width = playerCharacter.hp + '%';
  $name.innerText = playerCharacter.name;
  $img.src = playerCharacter.img;
	
	$progressbar.appendChild($name);
  $progressbar.appendChild($life);
	$character.appendChild($img);
	$player.appendChild($progressbar);
	$player.appendChild($character);
	return $player;
}
function changeHP(player) {
	const $playerLife = document.querySelector('.player' + player.player + ' .life');
	player.hp -= Math.round(Math.random() * (20 - 1) + 1);
	console.log(player.hp);
	$playerLife.style.width = player.hp + '%';

	if (player.hp < 0) {
		$arenas.appendChild(playerLose(player.name));
	}
}
function playerLose(name) {
	const $loseTitle = createElement('div', 'loseTitle');
	$loseTitle.innerText = name + ' lose';
	return $loseTitle;
}
$randomButton.addEventListener('click', function() {
	changeHP(player1);
	changeHP(player2);

})
$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));
