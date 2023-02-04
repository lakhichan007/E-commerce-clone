import styled from "@emotion/styled";
import { Button, TextField, Typography } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import { Box } from '@mui/system';
import { useState } from "react";
import { authsignUp ,authlogin} from "../../services/connect";
let newUserData = {
    email: "",
    mobile: "",
    password: "",
    confirm_password: ""
}
let oldUser = {
    email: "",
    password: ""
}
const Login = ({ popUp, setopen }) => {

    const [login, setlogin] = useState(true)

    const [singnUp, setSignUp] = useState(newUserData)

    const [userLogin, setUserLogin] = useState(oldUser)
    // const [account,setAccount]=useContext(userContext)
    function handleclose() {
        setopen(false);
        setlogin(true);
    }
    const openSignUp = () => {
        setlogin(false)
    }

    const handleSignUp = (e) => {
        setSignUp({ ...singnUp, [e.target.name]: e.target.value })
    }
    const signupUser=()=>{
     authsignUp(singnUp,setlogin)  
       
    }

    const handleLogin = (e) => {
        setUserLogin({ ...userLogin, [e.target.name]: e.target.value })
    }
    const loginUser=async()=>{
       await authlogin(userLogin)

    }

    const DialogBoxLeft = styled(Box)({
        height: "100%",
        width: "40%",
        background: "#2874f0",
        padding: "20px 0px 20px 20px",
        color: "#fff",
        fontWeight: "bolder",
        boxSizing: "border-box",

    })
    const LoginBtn = styled(Button)({
        textTransform: "none",
        background: "#fb641b",
        fontWeight: "bolder",
    })
    const SignupBtn = styled(Button)({
        textTransform: "none",
    })
    // console.log(singnUp)

    return (
        <Dialog open={popUp} onClose={handleclose}>
            {login ? <Box sx={{ height: "70vh", width: "80vh", display: "flex", boxSizing: "border-box" }}>
                <DialogBoxLeft> <Typography variant="h5" sx={{ mb: "10px" }}>Login</Typography>
                    <Typography sx={{ mb: "200px" }}>Get access to your Orders, Wishlist and Recommendations</Typography>
                    <img width="200px" src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png" alt="img1" />
                </DialogBoxLeft>
                <Box sx={{ height: "100%", width: "60%", padding: "30px 20px", boxSizing: "border-box", display: "flex", flexDirection: 'column', gap: "40px", }}>
                    <TextField id="standard" label="Email/Phone Number" variant="standard" name="email" onChange={(e) => handleLogin(e)} />
                    <TextField id="standard" label="password" type="password" name="password" variant="standard" onChange={(e) => handleLogin(e)} />
                    <Typography>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
                    <LoginBtn variant="contained" onClick={loginUser}>Login</LoginBtn>
                    <Box>
                        <Typography>New to Flipkart?<SignupBtn variant="text" onClick={openSignUp}>Create an account</SignupBtn></Typography>
                    </Box>
                </Box>
            </Box> :
                <Box style={{ display: "flex" }}>
                    <DialogBoxLeft> <Typography variant="h5" sx={{ mb: "10px" }}>SignUp</Typography>
                        <Typography variant="h5" sx={{ mb: "10px" }}>Looks like you're new here!</Typography>
                        <Typography sx={{ mb: "200px" }}>Welcome to flipkart please fill the details for registration with us!</Typography>
                        <img width="200px" src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png" alt="img1" />
                    </DialogBoxLeft>
                    <Box sx={{ height: "100%", width: "60%", padding: "30px 20px", boxSizing: "border-box", display: "flex", flexDirection: 'column', gap: "40px", }}>
                        <TextField id="standard" label="Enter Email" variant="standard" name="email" onChange={(e) => handleSignUp(e)} />
                        <TextField id="standard" label="Enter Mobile Number" type="number" variant="standard" name="mobile" onChange={(e) => handleSignUp(e)} />
                        <TextField id="standard" label="Enter Password" type="password" variant="standard" name="password" onChange={(e) => handleSignUp(e)} />
                        <TextField id="standard" label="Enter Confirm-Password" type="password" variant="standard" name="confirm_password" onChange={(e) => handleSignUp(e)} />
                        <Typography>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
                        <LoginBtn variant="contained" onClick={signupUser}>signUp</LoginBtn>
                    </Box>
                </Box>
            }
        </Dialog>
    )
}
export default Login