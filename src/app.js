import { isElement } from "lodash";
import { getStudents, addStudent, updateStudent, deleteStudent } from "./api/studentsApi";



let currentId = null
const listRef = document.querySelector("#students-table tbody");
const getStudentsBtn = document.querySelector("#get-students-btn")
const form = document.querySelector("#add-student-form");


function createItemsMurckups(array){
    const item = array.map(({id, name, age, course, skills, email, isEnrolled}) => {
        return`
        <tr id="${id}">
            <td>${id}</td>
            <td>${name}</td>
            <td>${age}</td>
            <td>${course}</td>
            <td>${skills}</td> 
            <td>${email}</td>
            <td>${isEnrolled}</td>
            <td>
                <button type="button" data-action="update">Оновити</button>
                <button type="button" data-action="delete" style="background-color: red;">Видалити</button>
            </td>
        </tr>`;
    }).join("")
    listRef.innerHTML = item
}


// getStudentsBtn.addEventListener("click", () => {getStudents().then(res => createItemsMurckups(res))})

getStudentsBtn.addEventListener("click", async () => {
    const res = await getStudents();
    createItemsMurckups(res)
})



form.addEventListener("submit", async (event) => {
    event.preventDefault()

    const elements = event.currentTarget.elements


    const studentData = {
        name: elements.name.value,
        age: Number(elements.age.value),
        course: elements.course.value,
        skills: elements.skills.value,
        email: elements.email.value,
        isEnrolled: elements.isEnrolled.checked,
    }

    if(currentId === null){
        //   addStudent(studentData).then(getStudents).then(res => createItemsMurckups(res))
      await addStudent(studentData)
      const res = await getStudents()
      createItemsMurckups(res)
      form.reset()
      return
    }

    // updateStudent(currentId, studentData).then(getStudents).then(res => {
    // form.reset()
    // createItemsMurckups(res)
    // } )


    updateStudent(currentId, studentData)
    const res = await getStudents()
    createItemsMurckups(res)
    form.reset()
})

// update
// delete



listRef.addEventListener("click", async (event) => {
    if(event.target.nodeName !== "BUTTON"){
        return;
    }

    const action = event.target.dataset.action
    const id = event.target.closest("tr").id
    const tr = event.target.closest("tr")

    
    switch(action){
        case "update": 
        form.elements.name.value = tr.children[1].textContent;
        form.elements.age.value = tr.children[2].textContent;
        form.elements.course.value = tr.children[3].textContent;
        form.elements.skills.value = tr.children[4].textContent;
        form.elements.email.value = tr.children[5].textContent;
        form.elements.isEnrolled.checked = tr.children[6];
        currentId = id;
  

        break;
        case "delete":
        // deleteStudent(id).then(getStudents).then(res => createItemsMurckups(res))
        deleteStudent(id)
        const res = await getStudents()
        createItemsMurckups(res)
        break;
        default: return
    }
    
})


