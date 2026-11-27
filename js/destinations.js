// Search and category filters for the destinations page.
document.addEventListener('DOMContentLoaded', () => {
  const cards = Array.from(document.querySelectorAll('.destination'));
  const searchInput = document.getElementById('destinationSearch');
  const filterButtons = Array.from(document.querySelectorAll('[data-filter]'));
  const noResults = document.getElementById('noResults');
  let selectedFilter = 'all';

  function updateDestinations() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    let visibleCount = 0;

    cards.forEach((card) => {
      const categories = card.dataset.category.split(' ');
      const searchText = `${card.dataset.search} ${card.textContent}`.toLowerCase();
      const matchesFilter = selectedFilter === 'all' || categories.includes(selectedFilter);
      const matchesSearch = searchText.includes(searchTerm);
      const visible = matchesFilter && matchesSearch;
      card.style.display = visible ? '' : 'none';
      if (visible) visibleCount++;
    });

    noResults.style.display = visibleCount === 0 ? 'block' : 'none';
  }

  searchInput.addEventListener('input', updateDestinations);
  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      selectedFilter = button.dataset.filter;
      filterButtons.forEach((item) => {
        item.setAttribute('aria-pressed', String(item === button));
      });
      updateDestinations();
    });
  });
});
