const API_URL = "https://dummyjson.com/recipes";

async function fetchData(path) {
  const response = await fetch(`${API_URL}/${path}`);
  const data = await response.json();
  return data;
}

async function searchRecipes(searchTerm) {
  const response = await fetchData(`tag/${searchTerm}`);
  return response;
}

async function updateDataList() {
  const datalist = document.getElementById("recipes");

  const data = await fetchData("tags");

  data.forEach((item) => {
    const option = document.createElement("option");
    option.value = item;
    datalist.appendChild(option);
  });
}

async function displayRecipes(recipes) {
  const recipesContainer = document.getElementById("recipes-container");
  recipesContainer.innerHTML = "";

  if (recipes.length === 0) {
    const noResults = document.createElement("p");
    noResults.textContent = "No results found";
    noResults.classList.add("no-results");
    recipesContainer.appendChild(noResults);
    return;
  }
  recipes.forEach((recipe) => {
    const { name, image, difficulty, cuisine, mealType } = recipe;

    const recipeCard = document.createElement("div");
    recipeCard.classList.add("recipe-card");
    recipeCard.innerHTML = `<h2>${name}</h2>
    <img src="${image}" alt="${name}" />
    <div class="recipe-details">
    <span>Difficulty: ${difficulty}</span>
    <span>Cuisine: ${cuisine}</span>
    <span>Meal Type: ${mealType}</span>
    </div>
    `;
    recipesContainer.appendChild(recipeCard);
  });
}

async function handleSearch() {
  const searchTerm = document.getElementById("search").value;
  if (searchTerm) {
    const response = await searchRecipes(searchTerm);
    console.log(response);
    displayRecipes(response.recipes);
  }
}

function handleButtonClick() {
  const searchButton = document.getElementById("search-button");
  if (searchButton) {
    searchButton.addEventListener("click", handleSearch);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  updateDataList();
  handleButtonClick();
});
