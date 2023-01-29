import styled from "@emotion/styled";
import { Button, TextField, Typography } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import { Box, color, padding } from '@mui/system';

const Login=({popUp,setopen})=>{
    
    const handleclose=()=>{
        setopen(false)
    }

    const DialogBox=styled(Box)({
        height:"70vh",
        width:"90vh",
        display:"flex",
    })
    const DialogBoxLeft=styled(Box)({
        height:"100%",
        width:"40%",
        background:"#2874f0",
        padding:"40px",
        color:"#fff",
        fontWeight:"bolder",
    })
    const DialogBoxRight=styled(Box)({
        height:"100%",
        width:"60%",
        padding:"40px"
    })
    return(
        <Dialog open={popUp} onClose={handleclose}>
                <DialogBox>
                    <DialogBoxLeft>
                        <Typography variant="h5">Login</Typography>
                        <Typography >Get access to your Orders, Wishlist and Recommendations</Typography>
                        <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png"/>
                    </DialogBoxLeft>
                    <DialogBoxRight>
                        <TextField id="standard-basic" label="Email/Phone Number" variant="standard" />
                        <TextField id="standard-basic" label="password" type="password" variant="standard" />
                        <Typography>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
                        <Button variant="contained">Ligin</Button>
                        <Box>
                            <Typography>New to Flipkart?</Typography>
                            <Button variant="text">Create an account</Button>
                        </Box>
                    </DialogBoxRight>
                </DialogBox>
        </Dialog>
    )
}
export default Login