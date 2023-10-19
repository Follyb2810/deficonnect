import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { Facebook, Instagram, Twitter } from '@mui/icons-material'
import Image from 'next/image'
import Style from './../app/style/page.module.css'


const Footer = () => {
  return (
    <footer>
    <Grid container spacing={2} justifyContent="space-between">
    <Grid item xs={12} md={4}>
    <Image src="/images/logo.jpeg" alt="" width={50} height={50} />
            <Typography variant="h6" component="h2" gutterBottom>
              DefiCinnect
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget libero nec quam dapibus aliquet.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
          <Typography variant="h6" component="h2" gutterBottom>

            Contact Info
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Address: 123 
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Phone: +
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Email: info@example.com
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
        <Typography variant="h6" component="h2" gutterBottom>
          Follow Us
        </Typography>
        <Box display="flex" gap={1}>
          <Box component="a" href="#" target="_blank" sx={{ color: 'inherit' }}>
            <Facebook/>
          </Box>
          <Box component="a" href="#" target="_blank" sx={{ color: 'inherit' }}>
            <Twitter/>
          </Box>
          <Box component="a" href="#" target="_blank" sx={{ color: 'inherit' }}>
            <Instagram />
          </Box>
        </Box>
      </Grid>
    </Grid>
    </footer>
  )
}


export default Footer
