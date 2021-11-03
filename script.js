let monthlyTotal = 0;
let employees = [];

$(document).ready(readyNow);

function readyNow() {
    console.log('jQuery initialized');
    $('#submit').on('click', submitEmployee);
    $('#employee-table').on('click', '.delete', deleteEmployee);
}

//submits an employee's information and adds it to the table
function submitEmployee() {
    let emFirstName = $('#first-name-input').val();
    let emLastName = $('#last-name-input').val();
    let emID = $('#id-input').val();
    let emTitle = $('#title-input').val();
    let emSalary = $('#salary-input').val();

    if(emFirstName === '' || emLastName === '' || emID === '' || emTitle === '' || emSalary === '') {
        console.log('Fields missing: please supply all input');
    }
    else {
        $('tbody').append(
            `<tr id = "employee-${emID}">
                <td>${emFirstName}</td>
                <td>${emLastName}</td>
                <td>${emID}</td>
                <td>${emTitle}</td>
                <td class = "salary-row">$${emSalary}</td>
                <td class = "delete-row"><button class = "delete">Delete</button></td>
            </tr>`
        );

        employees.push({
            firstName: emFirstName,
            lastName: emLastName,
            id: emID,
            title: emTitle,
            salary: emSalary
        });

        updateMonthlyCosts(emSalary / 12);
        $('input').val('');
        console.log('Employee added to the table');
    }

}

function deleteEmployee() {
    let sal = $(this).closest('tr').children(".salary-row").text();
    console.log(sal);
    updateMonthlyCosts(-sal / 12);
    $(this).closest('tr').remove();
    console.log('Deleted employee');
}

function updateMonthlyCosts(salary) {
    monthlyTotal += salary;
    if(monthlyTotal > 20000) 
    {
        $('h3').css('background-color', "red");
    }
    else{
        $('h3').css('background-color', "white");
    }
    $('#fee').text(monthlyTotal.toFixed(2));
}