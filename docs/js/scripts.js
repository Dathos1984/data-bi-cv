/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2025 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
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

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
    // ---------------------------------------------------
    // --- SKILLS FILTER SCRIPT ---
    // ---------------------------------------------------
    
    // 1. Get DOM elements for the filter
    const filterContainer = document.querySelector('#filters');
    const skillItems = document.querySelectorAll('#skills-grid .skill-item');

    // Only run the filter script if the filter container exists on the page
    if (filterContainer) {

        // 2. Add an event listener to the button container
        filterContainer.addEventListener('click', function(e) {

            // Make sure a button was clicked
            if (e.target.tagName !== 'BUTTON') {
                return;
            }

            // 3. Manage the active state for the buttons
            // Remove 'active' class from the currently active button
            const currentActiveButton = filterContainer.querySelector('.active');
            if (currentActiveButton) {
                currentActiveButton.classList.remove('active', 'btn-primary');
                currentActiveButton.classList.add('btn-outline-primary');
            }
            
            // Add 'active' class to the clicked button
            const newActiveButton = e.target;
            newActiveButton.classList.add('active', 'btn-primary');
            newActiveButton.classList.remove('btn-outline-primary');

            // 4. Filter the items
            const filterValue = newActiveButton.getAttribute('data-filter');

            skillItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');

                // If the filter is "all" or the item's category matches the filter
                if (filterValue === 'all' || itemCategory === filterValue) {
                    item.classList.remove('hide');
                } else {
                    item.classList.add('hide');
                }
            });
        });
    }
    // --- END OF SKILLS FILTER SCRIPT ---

});

