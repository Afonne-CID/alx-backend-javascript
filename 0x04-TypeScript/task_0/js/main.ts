interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  const student1: Student = {
    firstName: 'Paul',
    lastName: 'CID',
    age: 100,
    location: 'PH',
  }
  
  const student2: Student = {
    firstName: 'Joy',
    lastName: 'Afonne',
    age: 300,
    location: 'AB',
  }
  
  const studentsList = [student1, student2];
  let table = document.createElement('table');
  let tbody = document.createElement('tbody');
  
  studentsList.forEach((obj) => {
    let row = document.createElement('tr');
    row.appendChild(document.createElement('td')).innerHTML = `${obj.firstName}`;
    row.appendChild(document.createElement('td')).innerHTML = `${obj.location}`;
    tbody.appendChild(row);
  });
  table.appendChild(tbody);
  document.body.appendChild(table);  
