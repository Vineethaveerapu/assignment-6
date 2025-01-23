const API_URL = "https://dummyjson.com/recipes";

async function fetchData(path) {
  const response = await fetch(`${API_URL}/${path}`);
  const data = await response.json();
  return data;
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

document.addEventListener("DOMContentLoaded", () => {
  updateDataList();
});
