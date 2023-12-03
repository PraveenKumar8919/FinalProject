var $ = function (id) {
  return document.getElementById(id);
};

function calculateGPA() {
  const credit1 = parseInt(document.getElementById("credit1").value);
  const grade1 = document.getElementById("grade1").value.toUpperCase().trim();

  const credit2 = parseInt(document.getElementById("credit2").value);
  const grade2 = document.getElementById("grade2").value.toUpperCase().trim();

  const credit3 = parseInt(document.getElementById("credit3").value);
  const grade3 = document.getElementById("grade3").value.toUpperCase().trim();

  const credit4 = isNaN(
    parseInt(document.getElementById("credit4").value)
  )
    ? 0
    : parseInt(document.getElementById("credit4").value);
  const grade4 =
    document.getElementById("grade4").value.toUpperCase().trim() == ""
      ? "F"
      : document.getElementById("grade4").value.toUpperCase().trim();

  const credit5 = isNaN(
    parseInt(document.getElementById("credit5").value)
  )
    ? 0
    : parseInt(document.getElementById("credit5").value);
  const grade5 =
    document.getElementById("grade5").value.toUpperCase().trim() == ""
      ? "F"
      : document.getElementById("grade5").value.toUpperCase().trim();

  const totalCreditHours =
    credit1 + credit2 + credit3 + credit4 + credit5;
  const gradeValues = {
    A: 4.0,
    B: 3.0,
    C: 2.0,
    D: 1.0,
    F: 0.0,
  };

  const gradePoint1 = gradeValues[grade1];
  const gradePoint2 = gradeValues[grade2];
  const gradePoint3 = gradeValues[grade3];
  const gradePoint4 = gradeValues[grade4];
  const gradePoint5 = gradeValues[grade5];

  const totalGradePoints =
    credit1 * gradePoint1 +
    credit2 * gradePoint2 +
    credit3 * gradePoint3 +
    credit4 * gradePoint4 +
    credit5 * gradePoint5;
  const gpa = totalGradePoints / totalCreditHours;

  document.getElementById("avg-gpa").value = gpa.toFixed(2);
}
