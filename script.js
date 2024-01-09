// Given array of band names
let bandNames = ['The Rolling Stones', 'Led Zeppelin', 'The Beatles', 'Pink Floyd', 'Aerosmith'];

// Function to sort band names without articles
function sortBandNames(bandNames) {
    // Custom sorting function
    function customSort(a, b) {
        // Helper function to remove articles and get the remaining name
        function removeArticles(name) {
            const articles = ['a', 'an', 'the'];
            for (const article of articles) {
                const articleWithSpace = article + ' ';
                if (name.startsWith(articleWithSpace)) {
                    return name.slice(articleWithSpace.length);
                }
            }
            return name;
        }

        // Compare names without articles
        const nameA = removeArticles(a.toLowerCase());
        const nameB = removeArticles(b.toLowerCase());

        return nameA.localeCompare(nameB);
    }

    // Sort the array using the custom sorting function
    return bandNames.sort(customSort);
}

// Sort the band names and print them inside ul id='band' tag
const sortedBandNames = sortBandNames(bandNames);

// Create ul element
const ulElement = document.createElement('ul');
ulElement.id = 'band';

// Add li elements to ul
sortedBandNames.forEach(band => {
    const liElement = document.createElement('li');
    liElement.textContent = band;
    ulElement.appendChild(liElement);
});

// Append ul to the body
document.body.appendChild(ulElement);
