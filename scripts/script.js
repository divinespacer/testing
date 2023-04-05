// 1. find the element
const bodyRef = document.body;
let studentsArray = [];
//2.define a function
function clickHandler(event) {
  if (event.target.tagName === "BUTTON") {
    if (event.target.textContent === "Submit") {
      //store the values from the inputs
      const firstNameInput = document.querySelector("#firstname");
      const lastNameInput = document.querySelector("#lastname");
      const progNameInput = document.querySelector("#progname");
      let student = {
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        progName: progNameInput.value,
      };
      console.log(student);
      firstNameInput.value = "";
      lastNameInput.value = "";
      progNameInput.value = "";
      studentsArray.push(student);
      addStudentToList(student);
    } else if (event.target.id === "changeBG") {
      console.log("change BG");
    }
  }
  //which button was clicked on?
}

//3.addEventListener
bodyRef.addEventListener("click", clickHandler);

function addStudentToList(newStudent) {
  const cstList = document.querySelector("#CST");
  const newLi = document.createElement("li");
  newLi.textContent = `${newStudent.firstName} ${newStudent.lastName}`;
  //newStudent will have whatever is passed to this function when it's called
  //{firstName:,lastName:,progName:}
  if (newStudent.progName === "CIT") {
    //  add a new li to the <ul id="CIT">
    const citList = document.querySelector("#CIT");
    citList.appendChild(newLi);
  } else if (newStudent.progName === "CST") {
    cstList.appendChild(newLi);
  }
}
