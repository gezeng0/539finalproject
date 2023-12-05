document.addEventListener('DOMContentLoaded', function () {
    function dropDown() {
        document.getElementById('sort-dropdown').style.display = 'block';
    }

    function sortCountries(order) {
        const countriesContainer = document.getElementById('countries');
        const countryItems = Array.from(countriesContainer.getElementsByClassName('country'));
        countryItems.sort((a, b) => {
            const yearA = a.getAttribute('data-visit-year');
            const yearB = b.getAttribute('data-visit-year');
            if (order == 'earliest') {
                return yearA - yearB;
            } else {
                return yearB - yearA;
            }
        });
        countriesContainer.innerHTML = '';
        countryItems.forEach(country => {
            countriesContainer.appendChild(country);
        });
        document.getElementById('sort-dropdown').style.display = 'none';
    }

    document.getElementById('sort-dropdown').style.display = 'none';

    const sortButton = document.getElementById('sort-button');
    sortButton.addEventListener('mouseenter', dropDown);

    sortButton.addEventListener('mouseleave', function () {
        setTimeout(function() {
            document.getElementById('sort-dropdown').style.display = 'none';
        }, 1800);
    });

    const earliestButton = document.getElementById('sort-earliest');
    earliestButton.addEventListener('click', function () {
        sortCountries('earliest');
    });

    const latestButton = document.getElementById('sort-latest');
    latestButton.addEventListener('click', function () {
        sortCountries('latest');
    });
});