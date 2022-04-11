export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((elem) => {
      const grades = newGrades.filter((grd) => grd.studentId === elem.id);
      const grade = grades.length ? grades[0].grade : 'N/A';
      return {
        ...elem,
        grade,
      };
    });
}
