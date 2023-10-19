'use client'
import { Box, Button } from '@mui/material'
import React from 'react'

const error = ({error,reset}) => {
  return (
    <Box>
       this page:{error.message}
       <Button onClick={()=>reset()}>reset</Button>
    </Box>
  )
}

export default error
