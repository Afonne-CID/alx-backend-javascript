interface Teacher {
  readonly firstName: string;
  readonly lastName; string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

interface printTeacherFunction {
  firstName: string;
  lastNumber: string;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

function printTeacher(firstName, lastName): printTeacherFunction {
  return `${firstName[0]}. ${lastName}`;
}
