//import required packages
const Student = require("../models/student");
const csv = require("fast-csv");
const fs = require("fs");
const Employee = require("../models/employee");
//list the all students (view all students)
module.exports.allStudents = async (req, res) => {
  try {
    let employee = await Employee.findById(req.user.id).populate("students");

    const students = employee.students;
    const BASE_URL = process.env.BASE_URL;
    return res.render("student", { students, BASE_URL });
  } catch (err) {
    console.log(`Error in view all students controller ${err}`);
    return;
  }
};

//Add new student (from to create a student )
module.exports.create = async (req, res) => {
  try {
    const employee = await Employee.findById(req.user.id);
    if (employee) {
      const student = await Student.create(req.body);
      student.user = req.user.id;
      //add to student to employee
      employee.students.push(student);
      employee.save();
      student.save();
      req.flash("success", "Student Added Successfully");
      return res.redirect("/students");
    }
  } catch (err) {
    console.log(`Error in create student controller ${err}`);
    req.flash("success", "Please Fill Correct Fields");
    return res.redirect("back");
  }
};
//Download a complete CSV of all the data of students
module.exports.downloadCSV = async (req, res) => {
  try {
    let students = await Student.find().populate("interviews");

    const csvStream = csv.format({ headers: true });

    if (!fs.existsSync("public/files/export")) {
      if (!fs.existsSync("public/files")) {
        fs.mkdirSync("public/files/");
      }

      if (!fs.existsSync("public/files/export/")) {
        fs.mkdirSync("./public/files/export/", { recursive: true });
      }
    }

    const writeableStream = fs.createWriteStream(
      "public/files/export/students.csv"
    );

    csvStream.pipe(writeableStream);

    writeableStream.on("finish", function () {
      return res.json({
        downloadURL: `${process.env.BASE_URL}/files/export/students.csv`,
      });
    });

    if (students.length > 0) {
      students.map((student) => {
        let interviews = student.interviews || [];

        // If no interviews, write just the student info
        if (interviews.length === 0) {
          csvStream.write({
            Student_id: student._id ? student._id : "-",
            Student_Name: student.name ? student.name : "-",
            Student_College: student.college ? student.college : "-",
            Student_Status: student.status ? student.status : "-",
            Student_DSAFinalScore: student.DSAFinalScore
              ? student.DSAFinalScore
              : "-",
            Student_WebDFinalScore: student.WebDFinalScore
              ? student.WebDFinalScore
              : "-",
            Student_ReactFinalScore: student.ReactFinalScore
              ? student.ReactFinalScore
              : "-",
            Student_InterviewDate: "-",
            Student_InterviewCompany: "-",
            Student_InterviewResult: "-",
          });
        } else {
          // If interviews exist, process them
          interviews.map((interview) => {
            let results = interview.results || [];

            results.map((result) => {
              csvStream.write({
                Student_id: student._id ? student._id : "-",
                Student_Name: student.name ? student.name : "-",
                Student_College: student.college ? student.college : "-",
                Student_Status: student.status ? student.status : "-",
                Student_DSAFinalScore: student.DSAFinalScore
                  ? student.DSAFinalScore
                  : "-",
                Student_WebDFinalScore: student.WebDFinalScore
                  ? student.WebDFinalScore
                  : "-",
                Student_ReactFinalScore: student.ReactFinalScore
                  ? student.ReactFinalScore
                  : "-",
                Student_InterviewDate: interview.date ? interview.date : "-",
                Student_InterviewCompany: interview.companyName
                  ? interview.companyName
                  : "-",
                Student_InterviewResult: result.result ? result.result : "-",
              });
            });
          });
        }
      });
    }
    csvStream.end();
    writeableStream.end();
  } catch (err) {
    console.log(`error in download CSV controller ${err}`);
    return;
  }
};
