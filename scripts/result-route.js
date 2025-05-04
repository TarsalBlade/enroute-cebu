const routeForm = document.getElementById('route-form');
if (routeForm) {
    routeForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        const fromLocation = document.getElementById('from-location').value;
        const toLocation = document.getElementById('to-location').value;

        if (fromLocation && toLocation) {
        } else {
            alert("Please select both 'From' and 'To' locations.");
        }
    });
}