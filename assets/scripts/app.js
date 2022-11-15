const ATTACK_VALUE = 10;

let chosenMaxLife = 100;
const currentMonsterHealth = chosenMaxLife;
const currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackHandler() {
  const damage = dealMonsterDamage(ATTACK_VALUE);
}

attackBtn.addEventListener('click', attackHandler);
