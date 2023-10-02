//your code here

let bandNames = ['The Rolling Stones', 'Led Zeppelin', 'Pink Floyd', 'The Beatles', 'Aerosmith'];

// Custom sorting function that ignores articles
function customSort(a, b) {
  // Define a regular expression to match articles at the beginning of band names
  const articleRegex = /^(?:the|an|a)\s+/i;

  // Remove articles from band names for comparison
  const nameA = a.replace(articleRegex, '').toLowerCase();
  const nameB = b.replace(articleRegex, '').toLowerCase();

  if (nameA < nameB) {
    return -1;
  } else if (nameA > nameB) {
    return 1;
  } else {
    return 0;
  }
}

// Sort the band names using the custom sorting function
bandNames.sort(customSort);

// Get the ul element with id 'band'
const bandList = document.getElementById('band');

// Iterate through the sorted band names and add them to the ul as list items
for (const name of bandNames) {
  const listItem = document.createElement('li');
  listItem.textContent = name;
  bandList.appendChild(listItem);
}
