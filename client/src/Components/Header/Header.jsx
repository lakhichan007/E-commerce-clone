import React from "react";
import styled from "@emotion/styled";
import { InputBase, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import SearchIcon from '@mui/icons-material/Search';

const HeaderComponent = styled("div")({
    background: "#2874f0",
    height: "56px",
})
const FlipkartLOgo = styled("div")({
    marginLeft: "11%"
})
const Explore = styled("div")({
    fontSize: "11px",
    fontStyle: "italic",
    marginTop: "-1px",
    color: "#fff"
})
const PlusImg = styled("img")({
    width: "10px",
    height: "10px"

})
const SearchContainer = styled(Box)({
    background:"#fff",
    width:"36%",
    padding: "0 16px",
    borderRadius: "2px",
    fontSize: "14px",
    height: "36px",
    marginLeft:"2%",
    display:"flex",
    alignItems:"center"
})

const InputSerachBase = styled(InputBase)({
 width:"100%"
})
const Header = () => {
    return (
        <>
            <HeaderComponent>
                <Toolbar style={{minHeight:"56px"}}>
                    <FlipkartLOgo>
                        <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="logo" style={{ width: 75 }} />
                        <Box style={{ display: "flex" }}>
                            <Explore>Explore
                                <Box component="span" style={{ color: "#ffe500", margin: "0px 2px" }}>Plus</Box>
                            </Explore>
                            <PlusImg src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png" alt="plus" />
                        </Box>
                    </FlipkartLOgo>
                        <SearchContainer>
                            <InputSerachBase  placeholder="Search of producst,brands and more" />
                            <SearchIcon style={{color:"blue"}}/>
                        </SearchContainer>
                </Toolbar>
            </HeaderComponent>

        </>
    )
}
export default Header