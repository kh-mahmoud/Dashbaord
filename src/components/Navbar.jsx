import React from 'react'
import { useTheme } from 'next-themes'
import { Box,Stack } from '@mui/material'
import {InputBase} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import {IconButton} from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useStateContext } from '../ContextApi';



const Navbar = () => {
   const {ActiveMenu,setActiveMenu}=useStateContext()
    const {theme,setTheme}=useTheme();
    return (
       <Stack direction={"row"} justifyContent={"space-between"} className=' pb-3  backdrop-blur bg-[rgba(255,255,255,0.1)]' pt={1.8}>
            <Box className='flex'>
              <Box className={"mr-2 ml-1"}>
                  <IconButton onClick={()=>setActiveMenu((prev)=>!prev)} >
                     <MenuOutlinedIcon  sx={{cursor:"pointer"}}/>
                  </IconButton>
              </Box>
              <Box className="flex rounded  mr-2" sx={{background:theme=="dark"?"#1c2331":"#e0e0e0"}}>
                    <InputBase   placeholder='Search' className="p-1"/>
                     <IconButton  type='button'>
                        <SearchIcon  />
                     </IconButton>
               </Box>
           </Box>
      
       <Box className='flex'>
            <IconButton   onClick={()=>setTheme(theme==="dark"?"light":"dark")} type='button'>
               {theme==="dark"?<DarkModeIcon/>:<LightModeIcon/>}
            </IconButton>
            <IconButton type='button'>
               <NotificationsOutlinedIcon />
            </IconButton>
            <IconButton type='button'>
               <SettingsOutlinedIcon />
            </IconButton>
            <IconButton type='button'>
               < PersonOutlinedIcon/>
            </IconButton>
       </Box>

    </Stack>
  )
}

export default Navbar