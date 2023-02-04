import React from "react";
import styled from "@emotion/styled";
import { AppBar, InputBase, Toolbar,Button, Select, MenuItem, InputLabel } from "@mui/material";
import { Box } from "@mui/system";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import MovingIcon from '@mui/icons-material/Moving';
import DownloadIcon from '@mui/icons-material/Download';
import Login from "../Login-SignUp/Login-SignUp";
import { useState } from 'react';
const HeaderComponent = styled(AppBar)({
    background: "#2874f0",
    height: "54px",
})
const FlipkartLOgo = styled("div")({
    marginLeft: "11.75%",
    cursor: "pointer"
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
    background: "#fff",
    width: "36%",
    padding: "0 16px",
    borderRadius: "2px",
    fontSize: "14px",
    height: "36px",
    marginLeft: "1%",
    display: "flex",
    alignItems: "center"
})
const InputSerachBase = styled(InputBase)({
    width: "100%"
})
const LoginBtn = styled(Button)({
    marginLeft: "2.5%",
    color: "#2874f0",
    fontWeight: "500",
    backgroundColor: "#fff",
    cursor: "pointer",
    borderRadius: "2px",
    height: "32px",
    padding: "5px 40px",
    border: "1px solid #dbdbdb",
    textTransform: "none"

})
const CartBox = styled(Box)({
    marginLeft: "0.75%",
    display: "flex",
    fontWeight: "bold",
    gap: "1%",
    fontSize: "16px"
})
const BecomeSerrler = styled(Box)({
    marginLeft: "3%",
    lineHeight: "20px",
    fontSize: "17px",
    letterSpacing: ".1px",
    fontWeight: "Bolder",
    color: "#fff",
})

const MoreboxInsidecontent = styled(Box)({
    marginLeft: "5%",
    color: "black",
})
const MenuItemBOx = styled(MenuItem)({
    color: "#2874f0",
    borderBottom:"1px solid #f0f0f0"

})
const Header = () => {
    const [open,setopen]=useState(false)
    const handleOpen=()=>{
        setopen(true)
    }
    return (
        <>
            <HeaderComponent>
                <Toolbar style={{ minHeight: "56px" }}>
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
                        <InputSerachBase placeholder="Search of producst,brands and more" />
                        <SearchIcon style={{ color: "blue" }} />
                    </SearchContainer>
                    <LoginBtn variant="contained" onClick={handleOpen}>Login</LoginBtn>

                    <BecomeSerrler>Become a seller</BecomeSerrler>
                    <Box sx={{ display: "flex", alignItems: "center", marginLeft: "3%", color: "#fff" }}>
                        <InputLabel sx={{ color: "#fff", }}>More</InputLabel>
                        <Select sx={{ boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 }, position: "relative", right: "18%" }}>
                            <MenuItemBOx>
                                <NotificationsActiveIcon />
                                <MoreboxInsidecontent>Notification Preferance</MoreboxInsidecontent>
                            </MenuItemBOx>
                            <MenuItemBOx>
                                <LiveHelpIcon />
                                <MoreboxInsidecontent>24X7 Customer Care</MoreboxInsidecontent>
                            </MenuItemBOx>
                            <MenuItemBOx>
                                <MovingIcon />
                                <MoreboxInsidecontent>Advertise</MoreboxInsidecontent>
                            </MenuItemBOx>
                            <MenuItemBOx>
                                <DownloadIcon />
                                <MoreboxInsidecontent>Download App</MoreboxInsidecontent>
                            </MenuItemBOx>
                        </Select>
                    </Box>
                    <CartBox>
                        <ShoppingCartIcon />
                        <Box>Cart</Box>
                    </CartBox>
                </Toolbar>
                <Login popUp={open} setopen={setopen}/>
            </HeaderComponent>

        </>
    )
}
export default Header

