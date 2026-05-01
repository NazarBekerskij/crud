import { method } from "lodash";

const BASE_URL = 'http://localhost:3001/students';



export const getStudents = () => {
    return fetch(BASE_URL).then(res => res.json())
}




export const addStudent = (studentData) => {
    const options = {
        method: "POST",
        body: JSON.stringify(studentData),
        headers: { "Content-Type": "application/json; charset=UTF-8",
        },
    }
    return fetch(BASE_URL, options).then(res => res.json())
}




export const updateStudent = (id, updatedData) => {
    const options = {
        method: "PATCH",
        body: JSON.stringify(updatedData),
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
 }
 return fetch(`${BASE_URL}/${id}`, options).then(res => res.json())
};



export const deleteStudent = (id) => {
    const options = {
        method: "DELETE",
    };
    return fetch(`${BASE_URL}/${id}`, options).then(res => res.json());
}



