var express = require("express");
var app = express();
app.use(express.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );  
  res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT,OPTIONS");
  next();
});
// const port= 2450;
var  port =process.env.PORT||2450
 let customers = [
    {
      custId: 1,
      name: "ABC",
      password: "abc1234",
      role: "admin",
      email: "abc@gmail.com"
    },
    {
      custId: 2,
      name: "Willie",
      password: "willie1234",
      role: "student",
      email: "willie@gmail.com"
    },
    {
      custId: 3,
      name: "Jack",
      password: "jack1234",
      role: "faculty",
      email: "jack@gmail.com"
    },
    {
      custId: 4,
      name: "James",
      password: "james1234",
      role: "student",
      email: "james@gmail.com"
    },
    {
      custId: 5,
      name: "Harry",
      password: "harry1234",
      role: "faculty",
      email: "harry@gmail.com"
    },
    {
      custId: 6,
      name: "Tia",
      password: "tia1234",
      role: "student",
      email: "tia@gmail.com"
    },
    {
      custId: 7,
      name: "Aditya",
      password: "aditya123",
      role: "faculty",
      email: "aditya@gmail.com"
    },
    {
      custId: 8,
      name: "Sonu",
      password: "sonu1234",
      role: "student",
      email: "sonu@gmail.com"
    },
    {
      custId: 9,
      name: "Ellie",
      password: "ellie1234",
      role: "student",
      email: "ellie@gmail.com"
    },
    {
      custId: 10,
      name: "Gia",
      password: "gia1234",
      role: "faculty",
      email: "gia@gmail.com"
    }
  ];
 let courses = [
    {
      courseId: 1,
      name: "ANGULAR",
      code: "ANG97",
      description: "All fundamentals of Angular 7",
      faculty: ["Daniel", "Jack"],
      students: ["Sam"]
    },
    {
      courseId: 2,
      name: "JAVASCRIPT",
      code: "JS124",
      description: "Intoduction to javascript",
      faculty: ["Aditya"],
      students: ["James", "Joy", "Monu", "Rita"]
    },
    {
      courseId: 3,
      name: "REACT",
      code: "RCT56",
      description: "React Javascript library",
      faculty: ["Jack", "Gia"],
      students: ["Raima", "Rita", "Sonu", "James"]
    },
    {
      courseId: 4,
      name: "BOOTSTRAP",
      code: "BS297",
      description: "Bootstrap Designing Framework",
      faculty: [],
      students: ["James", "Tia", "Ellie"]
    },
    {
      courseId: 5,
      name: "CSS",
      code: "CS365",
      description: "Basic stylesheet language",
      faculty: [],
      students: ["James", "Rita", "Monica"]
    },
    {
      courseId: 6,
      name: "REST AND MICROSERVICES",
      code: "RM392",
      description: "Introduction to Microservices",
      faculty: [],
      students: ["Sam"]
    },
    {
      courseId: 7,
      name: "NODE",
      code: "ND725",
      description: "Introduction to Node",
      faculty: ["Sonia"],
      students: ["Saransh", "Shrey", "Monica"]
    }
  ];
 let faculties = [
    { id: 5, name: "Daniel", courses: ["ANGULAR"] },
    { id: 4, name: "Sonia", courses: ["NODE"] },
    { id: 3, name: "Jack", courses: ["REACT", "ANGULAR"] },
    { id: 2, name: "Gia", courses: ["REACT"] },
    { id: 1, name: "Aditya", courses: ["ANGULAR"] }
  ];
 let classes = [
    {
      classId: 1,
      course: "REACT",
      time: "07:45",
      endTime: "08:45",
      topic: "Redux",
      facultyName: "Jack"
    },
    {
      classId: 2,
      course: "ANGULAR",
      time: "15:45",
      endTime: "17:40",
      topic: "Component",
      facultyName: "Jack"
    },
    {
      classId: 3,
      course: "JAVASCRIPT",
      time: "15:45",
      endTime: "17:40",
      topic: "Component",
      facultyName: "Aditya"
    }
  ];
 let students = [
    {
      id: 16,
      name: "Willie",
      dob: "31-July-1997",
      gender: "male",
      about: "Pursuing Graduation",
      courses: ["ANGULAR", "NODE"]
    },
    {
      id: 15,
      name: "Tia",
      dob: "30-July-1997",
      gender: "male",
      about: "Pursuing Graduation",
      courses: []
    },
    {
      id: 14,
      name: "Apoorv",
      dob: "31-August-1998",
      gender: "male",
      about: "Want to learn new technologies",
      courses: []
    },
    {
      id: 13,
      name: "Joy",
      dob: "31-July-1997",
      gender: "male",
      about: "Pursuing Graduation",
      courses: ["JAVASCRIPT"]
    },
    {
      id: 12,
      name: "Rachel",
      dob: "31-August-1998",
      gender: "female",
      about: "Pursuing Graduation",
      courses: []
    },
    {
      id: 11,
      name: "Monica",
      dob: "30-July-1997",
      gender: "female",
      about: "Want to learn new technologies",
      courses: ["CSS", "NODE"]
    },
    {
      id: 10,
      name: "Monu",
      dob: "12-May-1997",
      gender: "male",
      about: "Pursuing Graduation",
      courses: ["JAVASCRIPT"]
    },
    {
      id: 9,
      name: "Sonu",
      dob: "12-May-1997",
      gender: "male",
      about: "Pursuing Graduation",
      courses: ["REACT"]
    },
    {
      id: 8,
      name: "Raima",
      dob: "30-July-1997",
      gender: "female",
      about: "Want to learn new technologies",
      courses: ["REACT"]
    },
    {
      id: 7,
      name: "Rita",
      dob: "31-August-1998",
      gender: "female",
      about: "Pursuing Graduation",
      courses: ["JAVASCRIPT", "REACT", "CSS"]
    },
    {
      id: 6,
      name: "Shrey",
      dob: "12-May-1997",
      gender: "male",
      about: "Pursuing Graduation",
      courses: ["NODE"]
    },
    {
      id: 5,
      name: "Saransh",
      dob: "31-July-1997",
      gender: "male",
      about: "Want to learn new technologies",
      courses: ["NODE"]
    },
    {
      id: 4,
      name: "Sanya",
      dob: "31-July-1997",
      gender: "male",
      about: "Want to learn new technologies",
      courses: []
    },
    {
      id: 3,
      name: "James",
      dob: "12-July-1994",
      gender: "male",
      about: "Pursuing Graduation",
      courses: ["JAVASCRIPT", "BOOTSTRAP", "CSS", "REACT"]
    },
    {
      id: 2,
      name: "Sam",
      dob: "12-July-1994",
      gender: "male",
      about: "Pursuing Graduation",
      courses: ["ANGULAR", "REST AND MICROSERVICES"]
    },
    {
      id: 1,
      name: "Ellie",
      dob: "12-June-1992",
      gender: "female",
      about: "Want to learn new technologies",
      courses: ["BOOTSTRAP"]
    }
  ];

  app.post('/login',function(req,res){
      try{

        let email=req.body.email;
        let password=req.body.password
        let data1=customers.find((st)=>st.email==email)
        if(data1.password==password){
          let data2={
            name:data1.name,
            email:data1.email,
            role:data1.role
          }
          res.send(data2)
          // console.log(data2)
        }
        else{
          res.send('please enter valin email and password')
          // console.log('no data')
        }
      }catch(ex){
        res.send(ex)
        // console.log('err')
      }
  })
  //admin Apis start

  app.post('/register',function(req,res){
    let name=req.body.name
    let email=req.body.email
    let password=req.body.password
    let role=req.body.role
    if(name&&email&&password&&role){
      customers.push({custId:customers.length+1,name:name,password:password,role:role,email:email})
     if(role=='student'){
      students.unshift({id:students.length+1,name:name,dob:'',gender:'',about:"",courses:[]})
     }
     else if(role=='faculty'){
     faculties.unshift({ id: faculties.length+1, name: name, courses: [] })
     }
     res.send({name:name,role:role,password:password})
    }
  })

  app.get('/getStudentNames',function(req,res){
    let studentNames=students.map((st)=>st.name)
    console.log(studentNames)
    res.send(studentNames)
  })
  app.get('/getFacultyNames',function(req,res){
    let facultytNames=faculties.map((st)=>st.name)
    // console.log(faculties)
    res.send(facultytNames)
  })
  app.get('/getCourses',function(req,res){
    res.send(courses)
  })
  app.get('/courseName',function(req,res){
    let Names=courses.map((st)=>st.name)
    res.send(Names)
  })

  app.get('/getCourse/:id',function(req,res){
     let id=req.params.id;
    // console.log('id',id)
     let data1=courses.find((st)=>st.courseId==id)
     res.send(data1)
  })

  app.put('/putCourse', function (req, res) {
    let courseId = req.body.courseId;
    let name = req.body.name;
    let code = req.body.code;
    let description = req.body.description;
    let faculty = req.body.faculty;
    let students = req.body.students;
  
    let data1 = {
      courseId: courseId, name: name, code: code, description: description,
      faculty: faculty, students: students
    };
  
    if (courseId && name && code && description && faculty && students) {
      let ind = courses.findIndex((st) => st.courseId === courseId);
  
      if (ind >= 0) {
        // Update the courses array
        courses[ind] = data1;
  
      //  Update the faculties array
        faculty.forEach((facultyName) => {
          let facultyIndex = faculties.findIndex((f) => f.name === facultyName);
          if (facultyIndex >= 0) {
            if (!faculties[facultyIndex].courses.includes(name)) {
              faculties[facultyIndex].courses.push(name);
            } else {
              // If the course is already present, remove it
              faculties[facultyIndex].courses = faculties[facultyIndex].courses.filter(c => c !== name);
            }
          }
        });
  
        // Update the students array
        students.forEach((studentName) => {
          let studentIndex = students.findIndex((s) => s.name === studentName);
          if (studentIndex >= 0) {
            if (!students[studentIndex].courses.includes(name)) {
              students[studentIndex].courses.push(name);
            } else {
              // If the course is already present, remove it
              students[studentIndex].courses = students[studentIndex].courses.filter(c => c !== name);
            }
          }
        });

  
        res.send(data1);
      } else {
        res.status(404).send("Course not found");
      }
    } else {
      res.status(400).send("Invalid request");
    }
  });


  app.put('/putStudent/:id',function(req,res){
    let id=req.params.id;
    let student=req.body.students
    let name=req.body.name
    // console.log(name)
    let ind=courses.findIndex((st)=>st.courseId==id)
    if(ind>=0){
      courses[ind].students=student
      console.log(ind,student,'course',name)
      students.forEach((st) => {
       if(student.includes(st.name)){
        if(!st.courses.includes(name)){
          st.courses.push(name)
        }
       } else if(st.courses.includes(name)){
        let ind=st.courses.findIndex((s)=>s==name)
        st.courses.splice(ind,1)
       }
      });
    }    
  })

  app.put('/putFaculty/:id',function(req,res){
    let id=req.params.id;
    let faculty=req.body.faculty
    let name=req.body.name
    // console.log(name)
    let ind=courses.findIndex((st)=>st.courseId==id)
    if(ind>=0){
      courses[ind].faculty=faculty
      console.log(ind,faculty,'course',name)
      faculties.forEach((st) => {
       if(faculty.includes(st.name)){
        if(!st.courses.includes(name)){
          st.courses.push(name)
        }
       } else if(st.courses.includes(name)){
        let ind=st.courses.findIndex((s)=>s==name)
        st.courses.splice(ind,1)
       }
      });
    }    
  })

  
  
  app.get('/getFaculties', (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const pageSize = 5; // Number of items per page
    const courseFilter = req.query.course ? req.query.course.split(',') : null;
  
    // Filter faculties based on the course if provided
    const filteredFaculties = courseFilter
      ? faculties.filter(student => student.courses.find((st)=>courseFilter.includes(st)))
      : faculties;
  
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
  
    const paginatedFaculties = filteredFaculties.slice(startIndex, endIndex);
  
    // Response format
    const response = {
      page: page,
      items: paginatedFaculties,
      totalItems: paginatedFaculties.length,
      totalNum: filteredFaculties.length
    };
  
    res.json(response);
  });
  
  
app.get('/getStudents', (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const pageSize = 5; // Number of items per page
  // const courseFilter = req.query.course ? req.query.course.split(',') : null;
  
  const courseFilter = req.query.course ? req.query.course.split(',') : null;

  // Filter students based on the course if provided
  const filteredStudents = courseFilter
    ? students.filter(student => student.courses.find((st)=>courseFilter.includes(st)))
    : students;
  

  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const paginatedStudents = filteredStudents.slice(startIndex, endIndex);

  // Response format
  const response = {
    page: page,
    items: paginatedStudents,
    totalItems: paginatedStudents.length,
    totalNum: filteredStudents.length
  };

  res.json(response);
});


app.get('/getFaculties', (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const pageSize = 5; // Number of items per page
  const courseFilter = req.query.course ? req.query.course.split(',') : null;

  // Filter faculties based on the course if provided
  const filteredFaculties = courseFilter
    ? faculties.filter(faculty => courseFilter.every(course => faculty.courses.includes(course)))
    : faculties;

  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const paginatedFaculties = filteredFaculties.slice(startIndex, endIndex);

  // Response format
  const response = {
    page: page,
    items: paginatedFaculties,
    totalItems: paginatedFaculties.length,
    totalNum: filteredFaculties.length
  };

  res.json(response);
});
  
app.put('/putStudentDetails',function(req,res){
  let id=req.body.id
  let name=req.body.name
  let dob=req.body.dob
  let gender=req.body.gender
  let about=req.body.about
  if(id&&name&&dob&&gender&&about&&about){
    let ind=students.findIndex((st)=>st.id==id)
    if(ind>=0){
      students[ind].name=name
      students[ind].id=id
      students[ind].dob=dob
      students[ind].gender=gender
      students[ind].about=about
      res.send(students[ind])
    }else{
      let data={
        name:name,id:id,dob:dob,gender:gender,about:about,courses:[]
      }
      students.push(data)
      res.send(data)
    }
}
}
)
app.get('/getStudentDetails/:name', function(req, res) {
  let studentName = req.params.name;

  let student = students.find((st) => st.name === studentName);

  if (student) {
    res.json(student);
  } else {
    res.status(500).json({ error: "Student details not found." });
  }
});

app.get('/getStudentCourse/:name', function(req, res) {
  let studentName = req.params.name;

  let student = students.find((st) => st.name === studentName);

  if (student) {
    let studentCourses = student.courses.map((courseName) => {
      let course = courses.find((c) => c.name === courseName);
      if (course) {
        return {
          courseId: course.courseId,
          name: course.name,
          code: course.code,
          description: course.description,
        };
      }
      return null;
    });

    res.json(studentCourses.filter(course => course !== null));
  } else {
    res.status(500).json({ error: "Student details not found." });
  }
});


app.get('/getStudentClass/:name', function(req, res) {
  let studentName = req.params.name;

  let student = students.find((st) => st.name === studentName);

  if (student) {
    let studentClasses = classes.filter((cls) => student.courses.includes(cls.course));

    // Modify the response to include only relevant details
    let response = studentClasses.map((cls) => ({
      classId: cls.classId,
      course: cls.course,
      time: cls.time,
      endTime: cls.endTime,
      topic: cls.topic,
      facultyName: cls.facultyName,
    }));

    res.json(response);
  } else {
    res.status(500).json({ error: "Student details not found." });
  }
});

//faculty api start

app.get('/getFacultyCourse/:name', function(req, res) {
  let facultyName = req.params.name;

  let faculty = faculties.find((fac) => fac.name === facultyName);

  if (faculty) {
    let facultyCourses = courses.filter((course) => faculty.courses.includes(course.name));

    // Modify the response to include only relevant details
    let response = facultyCourses.map((course) => ({
      courseId: course.courseId,
      name: course.name,
      code: course.code,
      description: course.description,
    }));

    res.json(response);
  } else {
    res.status(500).json({ error: "Faculty details not found." });
  }
});

app.get('/getFacultyClass/:name', function(req, res) {
  let facultyName = req.params.name;

  let facultyClasses = classes.filter((cls) => cls.facultyName === facultyName);

  // Modify the response to include only relevant details
  let response = facultyClasses.map((cls) => ({
    classId: cls.classId,
    course: cls.course,
    time: cls.time,
    endTime: cls.endTime,
    topic: cls.topic,
    facultyName: cls.facultyName,
  }));

  res.json(response);
});

app.post('/postClass', function(req, res) {
  let newClass = {
    classId: classes.length + 1,
    course: req.body.course,
    time: req.body.time,
    endTime: req.body.endTime,
    topic: req.body.topic,
    facultyName: req.body.facultyName,
  };
  classes.push(newClass);
   res.send(newClass)
  // faculties.forEach((st)=>{
  //     if(st.name==newClass.facultyName){
  //       if(!st.courses.includes(newClass.course)){
  //        st.courses.push(newClass.course)
  //       }
  //     }
  // })
  // let ind=courses.findIndex((st)=>st.name==newClass.course);
  // if(ind>=0){
  //   if(!courses[ind].faculty.includes(newClass.facultyName)){
  //     courses[ind].faculty.push(newClass.facultyName)
  //   }
  // }
});

app.put('/postClass/:classId', function(req, res) {
  let classId = parseInt(req.params.classId);
  let editedClass = {
    classId: classId,
    course: req.body.course,
    time: req.body.time,
    endTime: req.body.endTime,
    topic: req.body.topic,
    facultyName: req.body.facultyName,
  };

  let index = classes.findIndex((cls) => cls.classId === classId);

  if (index !== -1) {
    classes[index] = editedClass;
    res.json(editedClass);
  } else {
    res.status(500).json({ error: "Class not found." });
  }
});
app.get('/getClass/:id', function(req, res) {
  let classId = parseInt(req.params.id);

  let classInfo = classes.find((cls) => cls.classId === classId);

  if (classInfo) {
    res.json(classInfo);
  } else {
    res.status(404).json({ error: "Class not found." });
  }
});


  app.listen(port, () => console.log(`Node app listening on port ${port}!`));