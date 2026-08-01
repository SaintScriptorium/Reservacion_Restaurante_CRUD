let reservations = JSON.parse(localStorage.getItem('reservations')) || [];

function renderTable() {
    console.log("Mesa Actualizada");
}

document.getElementById('reservationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const id = document.getElementById('editId').value;
    const reservation = {
        name: document.getElementById('name').value,
        date: document.getElementById('date').value,
        time: document.getElementById('time').value,
        guests: document.getElementById('guests').value
    };

    if (id) {
        reservations[id] = reservation; 
        document.getElementById('editId').value = '';
    } else {
        reservations.push(reservation); 
    }

    localStorage.setItem('reservations', JSON.stringify(reservations));
    this.reset();
    renderTable();
});