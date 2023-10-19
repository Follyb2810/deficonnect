import React from 'react';
import Hero from './../component/home/Hero'
import {Card,Container,Typography,Box }from '@mui/material';
import About from '@/component/home/About';
import UseCase from '@/component/home/UseCase';
import Partner from '@/component/home/Partner';
import Road from '@/component/home/Road';
;

export default function Home() {
  return (
        <React.Fragment>
         <Hero/>  
         <About/>
         <UseCase/>
         <Partner/>
         <Road/>
        </React.Fragment>
  );
}


