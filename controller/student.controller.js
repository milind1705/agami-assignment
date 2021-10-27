const Student = require("../models/student.model");

module.exports.createStudent = (req, res) => {
  const { name, standard, rollNo } = req.body;
  const newStudent = new Student({
    name: name,
    standard: standard,
    rollNo: rollNo,
  });

  newStudent
    .save()
    .then((data) => {
      return res.status(200).json({
        data: data,
        error: null,
        message: "Student's Details saved sucessfully",
      });
    })
    .catch((err) => {
      return res.status(400).json({
        data: null,
        error: err,
        message: "Something went wrong while saving student details",
      });
    });
};

module.exports.getStudent = (req, res) => {
  Student.find({})
    .then((data) => {
      return res.status(200).json({
        data: data,
        error: null,
        message: "student details fetched successfuly",
      });
    })
    .catch((err) => {
      return res.status(400).json({
        data: null,
        error: err,
        message: "Something went wrong while fetching student details",
      });
    });
};

module.exports.getStudentbyId = (req, res) => {
  Student.findById({ _id: req.params.id })
    .then((data) => {
      return res.status(200).json({
        data: data,
        error: null,
        message: "student details fetched successfuly",
      });
    })
    .catch((err) => {
      return res.status(400).json({
        data: null,
        error: err,
        message: "Something went wrong while fetching student details",
      });
    });
};

module.exports.updateStudent = (req, res) => {
  Student.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then((data) => {
      Student.findById({ _id: req.params.id }).then((data) => {
        return res.status(200).json({
          data: data,
          error: null,
          message: "student details updated successfuly",
        });
      });
    })
    .catch((err) => {
      return res.status(400).json({
        data: null,
        error: err,
        message: "Something went wrong while updating student details",
      });
    });
};

module.exports.deleteStudentbyId = (req, res) => {
  Student.findByIdAndDelete({ _id: req.params.id })
    .then(() => {
      return res.status(200).json({
        error: null,
        message: "student details deleted successfuly",
      });
    })
    .catch((err) => {
      return res.status(400).json({
        data: null,
        error: err,
        message: "Something went wrong while deleting student details",
      });
    });
};


//Bulk data 
module.exports.addBulkStudent = (req, res) => {
    let student = [];
    
    Student.collection.insertMany(student, (err, res) =>{
        if(err){
            throw err
        }else{
            console.log("All students are inserted")
        }
    } );
  
    // newStudent
    //   .save()
    //   .then((data) => {
    //     return res.status(200).json({
    //       data: data,
    //       error: null,
    //       message: "Student's Details saved sucessfully",
    //     });
    //   })
    //   .catch((err) => {
    //     return res.status(400).json({
    //       data: null,
    //       error: err,
    //       message: "Something went wrong while saving student details",
    //     });
    //   });
  };