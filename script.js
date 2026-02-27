const searchInput = document.getElementById('search-input');
const cards = document.querySelectorAll('.product-card');
const noResults = document.getElementById('no-results');
const filterBtns = document.querySelectorAll('.filter-btn');

let activeCategory = 'all';

function filterCards() {
    const query = searchInput.value.trim().toLowerCase();
    let visibleCount = 0;

    cards.forEach(function (card) {
        const name = (card.dataset.name || '').toLowerCase();
        const matchesSearch = query === '' || name.includes(query);
        const matchesCategory = activeCategory === 'all' || card.dataset.category === activeCategory;
        const matches = matchesSearch && matchesCategory;

        card.hidden = !matches;
        if (matches) visibleCount++;
    });

    noResults.hidden = visibleCount > 0;
}

searchInput.addEventListener('input', filterCards);

filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
        filterBtns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        activeCategory = btn.dataset.category;
        filterCards();
    });
});
