/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2025 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/data-bi-cv/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    const filterContainer = document.querySelector('#filters');
    const skillItems = document.querySelectorAll('#skills-grid .grid-item');

    if (filterContainer && skillItems.length > 0) {
        filterContainer.addEventListener('click', function(e) {
            // Make sure a button was clicked
            if (e.target.tagName !== 'BUTTON') { return; }

            // Update the active button
            const currentActiveButton = filterContainer.querySelector('.active');
            if (currentActiveButton) {
                currentActiveButton.classList.remove('active', 'btn-primary');
                currentActiveButton.classList.add('btn-outline-primary');
            }
            const newActiveButton = e.target;
            newActiveButton.classList.add('active', 'btn-primary');
            newActiveButton.classList.remove('btn-outline-primary');

            // Filtering logic
            const filterValue = newActiveButton.getAttribute('data-filter');

            skillItems.forEach(item => {
                // If the filter is "*" (All) or the item's class list contains the filter class
                if (filterValue === '*' || item.classList.contains(filterValue.substring(1))) {
                    item.classList.remove('hide');
                } else {
                    item.classList.add('hide');
                }
            });
        });
    }
 
});

