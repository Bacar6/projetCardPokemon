const tagImg = document.getElementById("tagImg");
const namePokemon = document.getElementById("namePokemon");
const buttonPrev = document.getElementById("buttonPrev");
const buttonNext = document.getElementById("buttonNext");

displayImagePokemon = async () => {
  let randomNumber = Math.ceil(Math.random() * 898) + 1;

  const urlPokemon = `https://pokebuildapi.fr/api/v1/pokemon/${randomNumber}`;

  let dataPokemon = await fetch(urlPokemon);
  console.log(urlPokemon);

  let response = await dataPokemon.json();
  console.log(response);

  tagImg.src = response.image;
  namePokemon.innerHTML = `<p><strong>${response.name}</strong></p>`;
};

displayImagePokemon();

buttonPrev.addEventListener("click", displayImagePokemon);
buttonNext.addEventListener("click", displayImagePokemon);
