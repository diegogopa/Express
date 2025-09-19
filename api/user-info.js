const students = require("../data");

module.exports = (req, res) => {
  const { id } = req.query; // Recibe ?id=0 como query

  if (students[id]) {
    res.status(200).json(students[id]);
  } else {
    res.status(404).json({ error: "Student not found :(" });
  }
};
