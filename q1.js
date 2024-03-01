// resume data in JSON format


const resumeData = {
    "firstName": "swathi",
    "lastName": "pandi",
    "contact": {
      "email": "swathipandi24@gmail.com",
      "github": "github.com/Swathipandi24/swathipandi24"
    },
    "summary": " As a third-year student eager to enhance my skills in Full Stack Development",
    "education":
      {  "degree": "Bachelor of Engineering",
        "institution": "N P R  college of engineering and technology",
        "department": "Electronics and communication engineering",
        "location":"Natham,Dindigul"},
    "skills": [
      "c",
      "AI ML",
      "c++",
      "Digital marketing",
      "python",
      "oracle"
    ]
  };
  
  // Accessing the data
  console.log("First Name:", resumeData.firstName);
  console.log("Last Name:", resumeData.lastName);
  console.log("Email:", resumeData.contact.email);
  console.log("github:", resumeData.contact.github);
  console.log("Summary:", resumeData.summary);
  console.log("degree:", resumeData.education.degree);
  console.log("institution:", resumeData.education.institution);
  console.log("department:", resumeData.education.department);
  console.log("location:", resumeData.education.location);
  console.log("Skills:");
  resumeData.skills.forEach(skill => console.log("-", skill));
  
  //output data
  /* First Name: swathi
Last Name: pandi
Email: swathipandi24@gmail.com
github: github.com/Swathipandi24/swathipandi24
Summary:  As a third-year student eager to enhance my skills in Full Stack Development
degree: Bachelor of Engineering
institution: N P R  college of engineering and technology
department: Electronics and communication engineering
location: Natham,Dindigul
Skills:
- c
- AI ML
- c++
- Digital marketing
- python
- oracle
 */
 