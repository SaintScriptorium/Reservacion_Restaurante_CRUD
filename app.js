let reservations = JSON.parse(localStorage.getItem('reservations')) || [];

function renderTable() {
    const tbody = document.querySelector('#reservationsTable tbody');
    tbody.innerHTML = '';
    reservations.forEach((res, index) => {
        tbody.innerHTML += `
            <tr>
                <td>${res.name}</td>
                <td>${res.date}</td>
                <td>${res.time}</td>
                <td>${res.guests}</td>
                <td>
                    <button class="btn-edit" onclick="editReservation(${index})">Edit</button>
                    <button class="btn-delete" onclick="deleteReservation(${index})">Delete</button>
                </td>
            </tr>
        `;
    });
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