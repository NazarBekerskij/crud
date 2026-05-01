import { isElement } from "lodash";
import { getStudents, addStudent, updateStudent, deleteStudent } from "./api/studentsApi";

const listRef = document.querySelector("students-table tbody");
const getStudentsBtn = document.querySelector("#get-students-btn")
const form = document.querySelector("add-student-form");


function createItemsMurckups(array){
    const item = array.map(({id, name, age, course, skills, email, isEnrolled}) => {
        reutnr`
        <tr id="${id}">
            <td>${id}</td>
            <td>${name}</td>
            <td>${age}</td>
            <td>${course}</td>
            <td>${skills.join(', ')}</td> <!-- Перетворюємо масив навичок у рядок -->
            <td>${email}</td>
            <td>${isEnrolled ? "✅" : "❌"}</td>
            <td>
                <button type="button" data-action="update">Оновити</button>
                <button type="button" data-action="delete" style="background-color: red;">Видалити</button>
            </td>
        </tr>`;
    }).join()
    listRef.innerHTML = item
}


getStudentsBtn.addEventListener("click", () => {
    getStudents().then((res) => {
        createItemsMurckups(res)
    })
})



form.addEventListener("submit", (event) => {
    event.preventDefault()

    const elements = event.currentTarget.elements


    const studentData = {
        name: elements.name.value,
        age: Number(elements.age.value),
        course: elements.course.value,
        skills: elements.skills.value,
        email: elements.email.value,
        isEnrolled: elements.isElement.value,
    }


    addStudent(studentData).then(() => {
        getStudents().then(res => {
            form.reset()
            createItemsMurckups(res)
        })
    })
})




