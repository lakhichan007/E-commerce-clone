import styled from "@emotion/styled"
import { Box } from "@mui/system"
import {navData} from "../../Constants/NavData"
const Navbar=()=>{

    const NavbarBox=styled(Box)({
        display:"flex",
        padding:" 0.5% 9%",
        gap:"4.5%",
        // background:"green"
        
    });

    return(
        <>
        <NavbarBox>
            {navData.map(ele=>(
                <Box>
                    <img src={ele.url} alt="img" style={{height:"64px",width:"64px"}}/>
                    <p style={{fontSize:"14px",marginTop:"1%",fontWeight:"bold"}}>{ele.text}</p>
                </Box>
            ))}
        </NavbarBox>
        </>
    )
}
export default Navbar