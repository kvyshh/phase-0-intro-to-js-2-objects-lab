const employee = {};
employee.name = "Kindred";
employee.streetAddress = "38 Harriet";

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value,
    };
}
    const newEmployee = updateEmployeeWithKeyAndValue(newEmployee, "name", "Sam");
    newEmployee;

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

const newerEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "11 Broadway");
newerEmployee;

function deleteFromEmployeeByKey(employee, key) {
    delete newEmployee.name;
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name;
    return employee;
}