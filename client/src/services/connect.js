import axios from "axios"
const URL = `http://localhost:5401`

export const authsignUp = (data, setlogin) => {
    try {
        if (data.email && data.mobile && data.password && data.confirm_password) {
            if (data.password === data.confirm_password) {
                axios.post(`${URL}/signup`, data)
                    .then((res) => {
                        alert(res.data.message)
                        if (res.data.message === "Registration sucessfull !") {
                            setlogin(true)
                        }
                    })
                    .catch(err => {

                    })
            }
            else {
                alert("Password & Confirm_password should be same!")
            }
        }
        else {
            alert("Input field can't be Empty!")
        }

    }
    catch (err) {
        console.log(err)
    }
}

export const authlogin = (data) => {
    try {
        if (data.email && data.password) {

            axios.post(`${URL}/login`, data)
            .then((res)=>{
                alert(res.data.message)
            })
            .catch(err => {

            })
        }

        else {
            alert("Input field can't be Empty!")
        }

    }
    catch (err) {
        console.log(err)
    }
}