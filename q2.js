//iterating over all for loops (for, for Of, for in) for below JSON form resume data


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

// **Accessing the data:**

console.log("First Name:", resumeData.firstName);
console.log("Last Name:", resumeData.lastName);
console.log("Email:", resumeData.contact.email);
console.log("github:", resumeData.contact.github);
console.log("Summary:", resumeData.summary);
console.log("degree:", resumeData.education.degree);
console.log("institution:", resumeData.education.institution);
console.log("department:", resumeData.education.department);
console.log("location:", resumeData.education.location);
//-----------------------------------------------------------------------------------------------------------//

// **Iterating over Skills:**

//1. Using for in loop

console.log("Skills (using for...in):");
for (const skill in resumeData.skills) {
  console.log(skill, resumeData.skills[skill]); // Access both key and value
}

// 2. Using for of loop 

console.log("Skills (using for...of):");
for (const skill of resumeData.skills) {
  console.log(skill); // Access only the value
}

// 3. Using for loop 

console.log("Skills (using for loop with index):");
for (let i = 0; i < resumeData.skills.length; i++) {
  const skill = resumeData.skills[i];
  console.log(skill);
}


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

//Skills (using for...in):
0 c
1 AI ML
2 c++
3 Digital marketing
4 python
5 oracle

//Skills (using for...of):
c
AI ML
c++
Digital marketing
python
oracle

//Skills (using for loop with index):
c
AI ML
c++
Digital marketing
python
oracle
 */