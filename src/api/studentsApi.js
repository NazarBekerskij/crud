import { method } from "lodash";

const BASE_URL = 'http://localhost:3000/students';



// export const getStudents = () => {
//     return fetch(`${BASE_URL}`).then(res => res.json())
// }


export const getStudents = async () => {
    const res = await fetch((`${BASE_URL}`))
    return res.json()
}







// export const addStudent = (studentData) => {
//     const options = {
//         method: "POST",
//         body: JSON.stringify(studentData),
//         headers: { "Content-Type": "application/json; charset=UTF-8",
//         },
//     }
//     return fetch(BASE_URL, options).then(res => res.json())
// }



export const addStudent = async (studentData) => {
    const options = {
        method: "POST",
        body: JSON.stringify(studentData),
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
    };

    const result = await fetch(BASE_URL, options); 
    return result.json();
};


















// export const updateStudent = (id, updatedData) => {
//     const options = {
//         method: "PATCH",
//         body: JSON.stringify(updatedData),
//         headers: {
//             "Content-Type": "application/json; charset=UTF-8",
//         },
//  }
//  return fetch(`${BASE_URL}/${id}`, options).then(res => res.json())
// };


export const updateStudent = async (id, updatedData) => {
    const options = {
        method: "PATCH",
        body: JSON.stringify(updatedData),
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
    };
    
    const res = await fetch(`${BASE_URL}/${id}`, options);
    return res.json();
};







// export const deleteStudent = (id) => {
//     const options = {
//         method: "DELETE",
//     };
//     return fetch(`${BASE_URL}/${id}`, options).then(res => res.json());
// }



export const deleteStudent = async(id) => {
    const options = {
        method: "DELETE",
    };
    const res = await fetch(`${BASE_URL}/${id}`, options)
    return await res.json()
}