function filterProperties() {
    let type = document.getElementById("typeFilter").value;
    let budget = document.getElementById("budgetFilter").value;

    let cards = document.querySelectorAll(".property-card");

    cards.forEach(card => {
        let cardType = card.dataset.type;
        let cardBudget = card.dataset.budget;

        let typeMatch = (type === "all" || type === cardType);
        let budgetMatch = (budget === "all" || budget === cardBudget);

        if (typeMatch && budgetMatch) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

const grid = document.getElementById("propertyGrid");

function renderProperties(data) {
    grid.innerHTML = "";

    data.forEach(property => {
        grid.innerHTML += `
            <div class="property-card">
                <img src="${property.image}" alt="${property.name}">
                <div class="property-info">
                    <h3>${property.name}</h3>
                    <p class="price">${property.price}</p>
                    <p>${property.type} • ${property.location}</p>
                    <a href="property-details.html" class="btn">View Details</a>
                </div>
            </div>
        `;
    });
}

renderProperties(properties);

function searchProperties() {
    const keyword = document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    const filtered = properties.filter(property =>
        property.name.toLowerCase().includes(keyword) ||
        property.location.toLowerCase().includes(keyword)
    );

    renderProperties(filtered);
}