import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material'


function App() {

  const [count, setCount] = useState(0)

  function handleClick(){
    setCount(count+1)
    
  }

  return (
    <>
    <Stack>
      <Typography variant='h1'>Soy un gato y vivo feliz.</Typography>
      <Avatar sx={{ width: 100, height: 100}} alt="gatito" src="src/gato.jpg"/>

      <Button sx={{color: 'white', backgroundColor: 'red'}} variant='text' size='large'>variante Text</Button>
      <Button sx={{color: 'white', backgroundColor: 'yellow'}} variant='contained' size='medium' disabled>variante Contained</Button>
      <Button sx={{color: 'white', backgroundColor: 'blue'}} variant='outlined' size='small'>variante Outlined</Button>
      </Stack>
    </>
    

  )
}

export default App
