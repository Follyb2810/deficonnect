import React from 'react'
import Temp from '../Temp'
import { Box, Card, Grid, Typography } from '@mui/material'
import { roadData } from './../data'
import {RoadmapCard} from './../../app/style/style'

const Road = () => {
    return (
        <Temp head='Road Map' paragraph='Mapping the Future of Finance' >
        <Grid container spacing={3} id='Roadmap'>
            {
                roadData.map((road,index)=>(
                    <Grid item  sm={12} md={6} key={index} >
                        <RoadmapCard sx={{p:2}}>
                        <Box>
                         <Typography className='heal' variant='h6'>{road.phase}</Typography>
                         <Typography  variant='h6'>{road.year}</Typography>
                        </Box>
                          <>
                          {
                            road.desc.map((desc,index)=>(
                                <Box key={index} pt={2}>
                                    <Typography variant="body1">{desc}</Typography>
                                </Box>
                            ))
                          }
                          </>
                          
                        </RoadmapCard>        
                    </Grid>
                ))
            }
        </Grid>
            
        </Temp>
    )
}

export default Road
