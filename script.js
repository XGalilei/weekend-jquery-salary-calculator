let monthlyTotal = 0;

$(document).ready(readyNow);

function readyNow() {
    console.log('jQuery initialized');
    $('#submit').on('click', submitEmployee);
    $('#employee-table').on('click', '.delete', deleteEmployee);
}

function submitEmployee() {
    let emFirstName = $('#first-name-input').val();
    let emLastName = $('#last-name-input').val();
    let emID = $('#id-input').val();
    let emTitle = $('#title-input').val();
    let emSalary = $('#salary-input').val();
    
    $('#employee-table').append(
        `<tr>
            <td>${emFirstName}</td>
            <td>${emLastName}</td>
            <td>${emID}</td>
            <td>${emTitle}</td>
            <td>${emSalary}</td>
            <td><button class = "delete">Delete</button></td>
        </tr>`
    );
    //emSalary = emSalary / 12;
}

function deleteEmployee() {
    console.log('Deleted employee');
}