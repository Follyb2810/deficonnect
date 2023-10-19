'use client'
import Style from './../../app/style/page.module.css'
import { Grid, Paper, Typography } from '@mui/material';
import { partnerData,PartnerHead } from './../data'
import styled from '@emotion/styled';
import Temp from '../Temp';

const Partner = () => {
  return (
    <Temp head={PartnerHead.h1} paragraph={PartnerHead.paragraph} >
    <Grid container spacing={3} id='Partners'>
    {
      partnerData.map((partner, index) => (
        <Grid item xs={6} sm={3} key={index}>
        <Paper elevation={5} sx={{ textAlign: 'center' }}>
        <img src={partner.image} alt={partner.partner} className={Style.partner} />
        <Typography>{partner.partner}</Typography>
        </Paper>
          </Grid>
          ))
        }
        </Grid>
    </Temp>
  );
};

export default Partner;