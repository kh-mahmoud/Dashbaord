import React from 'react'
import { Stack, Box, Typography, duration } from '@mui/material';
import { useTheme } from 'next-themes';
import { Sidedata } from '../data/dummyData'
import { IconButton } from '@mui/material';
import user from "../assets/user.png"
import '../App.css'
import { NavLink } from 'react-router-dom';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { useState } from 'react';
import { useStateContext } from '../ContextApi';
import { motion } from 'framer-motion'
import CloseIcon from '@mui/icons-material/Close';


const Sidebar = () => {
  const { theme, setTheme } = useTheme()
  const activeLink = theme === "dark" ? 'text-[#4e52a9]' : 'text-[#3a6eff]'
  const normalLink = 'text-[white]'
  const { ActiveMenu, setActiveMenu,size } = useStateContext()
  const handleclose=()=>
  {
    if(size<=900)
    {
      setActiveMenu(false)
    }
  }



  return (
    <>
      {<motion.div className={`h-screen relative sidebar`} style={{
        overflow: "auto", boxShadow: theme === "light" && "0px 0px 15px rgba(0, 0, 0, 0.2)",
        background: theme === "dark" ? "#1F2A40" : "white", zIndex: 100
      }}>

        <Box className={"absolute right-2 top-2"}>
          <IconButton onClick={() => setActiveMenu((prev) => !prev)} type='button'>
            <CloseIcon />
          </IconButton>
        </Box>

        <Box className="flex justify-around items-center mt-[70px]">
          <Typography fontSize={"30px"} variant='body2'>ADMIN</Typography>
        </Box>

        <Box className={"flex flex-col justify-center items-center mt-6"}>
          <img src={user} height={"100px"} width={"100px"} style={{ borderRadius: "50%", marginBottom: '6px' }} />
          <Typography variant='h4'>Ed Roh</Typography>
          <Typography sx={{ color: '#4cceac' }} variant='h6'>VP Fancy Admin</Typography>
        </Box>

        <Box className={"pl-7 mt-5 flex flex-col mb-5"}>
          <Box>
            <NavLink onClick={handleclose} className={({ isActive }) => (isActive ? `${activeLink} flex items-center` : `${normalLink}  links flex items-center`)} to={'/'}>
              <HomeOutlinedIcon sx={{ mr: "15px" }} />
              <p>Dashboard</p>
            </NavLink>
          </Box>

          {Sidedata.map((item, indx) =>
            <Box key={indx} className={"mt-5"} >
              <p className='text-[#697180]'>
                {item.title}
              </p>
              <Box className={"flex flex-col"}>
                {item.links.map((link, indx) =>
                  <NavLink onClick={handleclose} key={indx} style={{ marginTop: "10px" }} to={`${link.name}`} className={({ isActive }) => (isActive ? activeLink : `${normalLink} links  `)}>
                    <span className='mr-[15px]' >{link.icon}</span>
                    {link.name}
                  </NavLink>
                )}
              </Box>
            </Box>


          )
          }
        </Box>
      </motion.div>}
    </>
  )
}

export default Sidebar