const searchInput = document.getElementById('search-input');
const cards = document.querySelectorAll('.product-card');
const noResults = document.getElementById('no-results');

searchInput.addEventListener('input', function () {
    const query = searchInput.value.trim().toLowerCase();
    let visibleCount = 0;

    cards.forEach(function (card) {
        const name = card.dataset.name.toLowerCase();
        const matches = query === '' || name.includes(query);

        card.hidden = !matches;
        if (matches) visibleCount++;
    });

    noResults.hidden = visibleCount > 0;
});
