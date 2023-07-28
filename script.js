// Sample data for recipes
// Sample data for recipes
const recipes = [
  { title: 'Rasgulla', cuisine: 'indian', diet: 'vegetarian', rating: 4.8, image: 'rasgulla.jpg', link: 'ras.html' },
  { title: 'Gulab Jamun', cuisine: 'indian', diet: 'vegetarian', rating: 4.7, link: 'https://youtu.be/Do9mk9mya_A' },
  { title: 'Kheer', cuisine: 'indian', diet: 'vegetarian', rating: 4.6, link: 'https://youtu.be/pCGZryBVv4A' },
  { title: 'Pasta Carbonara', cuisine: 'italian', diet: 'non-vegetarian', rating: 4.5, junk: 8, link: 'https://www.youtube.com/results?search_query=kheer+recipe' },
  { title: 'Margherita Pizza', cuisine: 'italian', diet: 'vegetarian', rating: 4.9, link: 'https://youtu.be/yVDz0Av-s2A' },
  { title: 'Tiramisu', cuisine: 'italian', diet: 'vegetarian', rating: 4.8, link: 'https://www.youtube.com/results?search_query=pasta' },
];


// Function to display recipes
function displayRecipes(recipesData) {
  const recipesContainer = document.getElementById('recipes');
  recipesContainer.innerHTML = '';

  recipesData.forEach(recipe => {
      const recipeCard = document.createElement('div');
      recipeCard.classList.add('recipe-card');

      const title = document.createElement('h3');
      title.textContent = recipe.title;
      recipeCard.appendChild(title);

      const cuisine = document.createElement('p');
      cuisine.textContent = 'Cuisine: ' + recipe.cuisine;
      recipeCard.appendChild(cuisine);

      const diet = document.createElement('p');
      diet.textContent = 'Diet: ' + recipe.diet;
      recipeCard.appendChild(diet);

      const rating = document.createElement('p');
      rating.textContent = 'Rating: ' + recipe.rating;
      recipeCard.appendChild(rating);

      const readMoreLink = document.createElement('a');
      readMoreLink.href = 'ras.html'; // Replace '#' with the actual recipe page URL
      readMoreLink.textContent = 'Read More';
      recipeCard.appendChild(readMoreLink);

      recipesContainer.appendChild(recipeCard);
  });

  recipesContainer.style.display = 'block'; // Show recipes
}

// Function to handle filter changes
function handleFilterChange() {
  const selectedCuisine = document.getElementById('cuisine').value;
  const selectedDiet = document.getElementById('diet').value;

  let filteredRecipes = [];

  if (selectedCuisine && selectedCuisine !== 'none') {
      filteredRecipes = recipes.filter(recipe => recipe.cuisine === selectedCuisine);
  } else {
      // If no cuisine is selected or "Select" is chosen, show all recipes
      filteredRecipes = recipes;
  }

  if (selectedDiet) {
      filteredRecipes = filteredRecipes.filter(recipe => recipe.diet === selectedDiet);
  }

  displayRecipes(filteredRecipes);
}

// Add event listeners for filter changes
document.getElementById('cuisine').addEventListener('change', handleFilterChange);
document.getElementById('diet').addEventListener('change', handleFilterChange);

// Initial display of recipes (empty array as no cuisine selected initially)
displayRecipes([]);

// Hide recipes initially
const recipesContainer = document.getElementById('recipes');
recipesContainer.style.display = 'none';

// Set "Select" as the initial cuisine selection
document.getElementById('cuisine').value = 'none';

// Get all the recipe cards
const recipeCards = document.getElementsByClassName('recipe-card');

// Loop through each recipe card and set the "Read More" link
// Loop through each recipe card and set the links
for (let i = 0; i < recipeCards.length; i++) {
  const recipe = recipes[i];
  const recipeCard = recipeCards[i];

  // Create links
  const linkNames = ['Link 1', 'Link 2', 'Link 3'];
  const linkUrls = recipe.links; // Assuming you have the links stored in the recipe object's `links` property

  for (let j = 0; j < linkNames.length; j++) {
      const link = document.createElement('a');
      link.href = linkUrls[j]; // Replace with the actual URL for each link
      link.textContent = linkNames[j];
      recipeCard.appendChild(link);
  }
}
// Loop through each recipe card and set the links and background color
for (let i = 0; i < recipeCards.length; i++) {
  const recipe = recipes[i];
  const recipeCard = recipeCards[i];

  // Create links
  const linkNames = ['Link 1', 'Link 2', 'Link 3'];
  const linkUrls = recipe.links; // Assuming you have the links stored in the recipe object's `links` property

  for (let j = 0; j < linkNames.length; j++) {
      const link = document.createElement('a');
      link.href = linkUrls[j]; // Replace with the actual URL for each link
      link.textContent = linkNames[j];
      recipeCard.appendChild(link);
  }

  // Set background color
  const backgroundColors = ['lightblue', 'lightgreen', 'lightpink']; // Array of background colors for each recipe
  const backgroundColor = backgroundColors[i % backgroundColors.length];
  recipeCard.style.backgroundColor = backgroundColor;
}
// Loop through each recipe card and set the links and background color
for (let i = 0; i < recipeCards.length; i++) {
  const recipe = recipes[i];
  const recipeCard = recipeCards[i];

  // Create links
  const linkNames = ['Link 1', 'Link 2', 'Link 3'];
  const linkUrls = recipe.links; // Assuming you have the links stored in the recipe object's `links` property

  for (let j = 0; j < linkNames.length; j++) {
      const link = document.createElement('a');
      link.href = linkUrls[j]; // Replace with the actual URL for each link
      link.textContent = linkNames[j];
      recipeCard.appendChild(link);
  }

  // Set background color based on cuisine
  let backgroundColor = '';

  if (recipe.cuisine === 'indian') {
      backgroundColor = 'skyblue';
  } else if (recipe.cuisine === 'italian') {
      backgroundColor = 'lightgreen';
  }

  recipeCard.style.backgroundColor = backgroundColor;
}
