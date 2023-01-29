import styled from "@emotion/styled"
import { Box } from "@mui/system"
import CroselBox from "./CroselBox"
import Navbar from "./Navbar"

const Home=()=>{

    const HeroComponent=styled(Box)({
        padding:"10px 10px",
        background:"#dfeafd",
        // height:"600px",
        
    })
    return(
        <>
        <Navbar/>
        <HeroComponent>
        <CroselBox/>
        </HeroComponent>
        </>
    )
}
export default Home