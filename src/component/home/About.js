'use client'
import { BorderContainer, StyledCard } from '@/app/style/style'
import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import Temp from '../Temp'
import { useTheme } from '@mui/material/styles';
import { AboutData } from '../data'
import Image from 'next/image'

const About = () => {
  const theme = useTheme();
  return (
    <Temp head='About' paragraph='Empowering Investors with Inclusive Finance' >
      <BorderContainer>
          <Grid container spacing={2} >
            {AboutData.map((data, index) => (
              <Grid item xs={12} sm={index === 0 || index === 3 ? 4 : 8} key={index}>
                <StyledCard sx={{p:3}}>
                <Image src={data.img} alt='' width={100} height={100} />
                  <Typography variant='body2'>{data.content}</Typography>
                </StyledCard>
              </Grid>
            ))}
          </Grid>
      </BorderContainer>
    </Temp>
  )
}

export default About
