/* code_filename.js */

// This JavaScript code is a complex and sophisticated example that demonstrates a multi-level data structure manipulation and analysis.
// The code presents a fictional company's employee hierarchy system, allowing for the manipulation and analysis of employee data.

// Define the employee class
class Employee {
  constructor(name, title, department, directReports) {
    this.name = name;
    this.title = title;
    this.department = department;
    this.directReports = directReports ? directReports : [];
  }
}

// Create a sample employee hierarchy
const ceo = new Employee("John Doe", "CEO", "Executive");
const cto = new Employee("Jane Smith", "CTO", "Executive");
const cfo = new Employee("Mark Johnson", "CFO", "Executive");

const softwareManager1 = new Employee("Michael Brown", "Software Manager", "IT", [new Employee("David Davis", "Software Engineer", "IT"), new Employee("Lisa Thompson", "Software Engineer", "IT")]);
const softwareManager2 = new Employee("Chris Wilson", "Software Manager", "IT", [new Employee("Sandra Baker", "Software Engineer", "IT"), new Employee("Paul Martinez", "Software Engineer", "IT")]);
const salesManager = new Employee("Emily Lee", "Sales Manager", "Sales", [new Employee("Jennifer Collins", "Sales Executive", "Sales"), new Employee("Kevin Jackson", "Sales Executive", "Sales")]);

ceo.directReports.push(cto, cfo);
cto.directReports.push(softwareManager1, softwareManager2);
cfo.directReports.push(salesManager);

// Function to calculate the total number of employees in a department
const getTotalEmployeesInDepartment = (department) => {
  let count = 0;
  const stack = ceo.directReports.slice();
  
  while (stack.length > 0) {
    const employee = stack.pop();
    
    if (employee.department === department) {
      count++;
    }
    
    stack.push(...employee.directReports);
  }
  
  return count;
};

// Function to find the highest paid employee
const getHighestPaidEmployee = () => {
  let highestPaid = null;
  let maxSalary = -Infinity;
  const stack = ceo.directReports.slice();
  
  while (stack.length > 0) {
    const employee = stack.pop();
    
    if (employee.title !== "CEO" && employee.title !== "CTO" && employee.title !== "CFO" && employee.directReports.length === 0 && employee.salary > maxSalary) {
      highestPaid = employee;
      maxSalary = employee.salary;
    }
    
    stack.push(...employee.directReports);
  }
  
  return highestPaid;
};

// Function to find all employees in a certain department
const getEmployeesInDepartment = (department) => {
  const employees = [];
  const stack = ceo.directReports.slice();
  
  while (stack.length > 0) {
    const employee = stack.pop();
    
    if (employee.department === department) {
      employees.push(employee);
    }
    
    stack.push(...employee.directReports);
  }
  
  return employees;
};

// Function to print employee details
const printEmployeeDetails = (employee) => {
  console.log(`Name: ${employee.name}`);
  console.log(`Title: ${employee.title}`);
  console.log(`Department: ${employee.department}`);
  console.log(`Direct Reports:`);
  employee.directReports.forEach((report) => console.log(`- ${report.name}`));
  console.log("\n");
};

// Calculate and print the total number of employees in the IT department
const itDepartmentCount = getTotalEmployeesInDepartment("IT");
console.log(`Total number of employees in the IT department: ${itDepartmentCount}`);

// Find and print the highest paid employee
const highestPaidEmployee = getHighestPaidEmployee();
console.log("Highest Paid Employee:");
printEmployeeDetails(highestPaidEmployee);

// Find and print all employees in the Sales department
const salesEmployees = getEmployeesInDepartment("Sales");
console.log("Employees in the Sales department:");
salesEmployees.forEach((employee) => printEmployeeDetails(employee));

// ... (additional analysis and manipulation functions)
// ...

// Execution continues...
// ...