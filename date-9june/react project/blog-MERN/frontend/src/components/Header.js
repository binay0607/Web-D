import React, { useState } from 'react'
import {AppBar, Toolbar, Typography, Box, Button, Tabs, Tab} from '@mui/material'
import {Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Header = () => {
  const isLoggedIn= useSelector(state=> state.isLoggedIn);
  const [value, setvalue] = useState();
  return (

    <AppBar position='sticky'>
        <Toolbar>
            <Typography variant='h4'>BlogsApp</Typography>
            {isLoggedIn && <Box marginLeft={'100px'}>
              <Tabs textColor='inherit' value={value} onChange={(e,val)=> setvalue(val)}>
                <Tab LinkComponent={Link} to="/blogs" label='All Blogs'></Tab>
                <Tab LinkComponent={Link} to="/myBlogs" label='My Blogs'></Tab>
              </Tabs>
            </Box>}
            <Box display='flex' marginLeft= 'auto'>
              {!isLoggedIn && <Button LinkComponent={Link} to="/auth" variant='contained' sx={{margin: 1, borderRadius: 10}} color='warning' >Log-In</Button>}
              {!isLoggedIn && <Button LinkComponent={Link} to="/auth" variant='contained' sx={{margin: 1, borderRadius: 10}} color='warning' >Sign-Up</Button>}
              {isLoggedIn && <Button LinkComponent={Link} to="/auth" variant='contained' sx={{margin: 1, borderRadius: 10}} color='warning' >Log-Out</Button>}
            </Box>
        </Toolbar>
    </AppBar>
  )
}

export default Header