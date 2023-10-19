import * as React from 'react';
import { Grid, Box, Typography, Button } from '@mui/material';
import Image from 'next/image';
import { ContainerHero } from './../../app/style/style'
import Style from './../../app/style/page.module.css'
export default function FullWidthGrid() {
  return (
    <Box sx={{ flexGrow: 1,padding:'20px',marginTop:15 }} >
      <ContainerHero>
        <Grid container spacing={2}>
          <Grid item xs={12} md={7} sx={{ textAlign: 'center',p:3 }}>
            <Typography variant='h6' gutterBottom>Revolutionizing Traditional Finance with DeFi Connect</Typography>
            <Typography variant='body2'>At DeFi Connect, we&rsquo;re at the forefront of a financial revolution. We&rsquo;re bridging the gap between traditional finance and cutting-edge blockchain technology, transforming the way investing is done. Our mission is to make global assets accessible to all investors, removing geographic barriers, and reducing costly intermediaries. Inspired by Warren Buffett&rsquo;s investment philosophy, we focus on intrinsic value and safety margins. Join us in this exciting journey towards a future where investing is truly inclusive, transparent, and efficient.
            </Typography>
            <Button variant="contained">Learn more</Button>
          </Grid>
          <Grid item xs={12} md={5}>
              <img
                src='/images/logo.jpeg'
                alt=''
                className={Style.hero} />
            
          </Grid>
        </Grid>
      </ContainerHero>
    </Box>
  );
}