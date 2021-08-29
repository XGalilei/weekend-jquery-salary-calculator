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

    
    $('tbody').append(
        `<tr id = "employee-${emID}">
            <td>${emFirstName}</td>
            <td>${emLastName}</td>
            <td>${emID}</td>
            <td>${emTitle}</td>
            <td class = "salary-row">${emSalary}</td>
            <td class = "delete-row"><button class = "delete">Delete</button></td>
        </tr>`
    );
    updateMonthlyCosts(emSalary / 12);
    $('input').val('');
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