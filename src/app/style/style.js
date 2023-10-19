'use client'
import {} from '@mui/icons-material'
import { Box, Card, CardActionArea, Paper } from '@mui/material'
import { styled } from '@mui/material/styles';

const ContainerHero =styled(Paper)({
    // background: 'linear-gradient(to right top, #8b02d4, #b400c0, #cf07ae, #e12d9f, #ec4993, #f95a7c, #fd7068, #f9885b, #e5a643, #c0c448, #8bdd71, #08f1b0)'
    background: 'linear-gradient(to right, #f65763, #f93b81, #ef2aa7, #cf37d2, #8e52fb)'
})
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const BorderContainer = styled(Paper)(({ theme }) => ({
    border: '2px solid '+ theme.palette.brand.main,
    borderRadius: '10px',
    background: 'linear-gradient(to right top, #8b02d4, #b400c0, #cf07ae, #e12d9f, #ec4993, #f95a7c, #fd7068, #f9885b, #e5a643, #c0c448, #8bdd71, #08f1b0)',
    padding:'10px'
  }));

  const StyledCard = styled(Card)(({ theme,height }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    border: `3px solid ${theme.palette.brand.contrastText}`,
    background: `linear-gradient(to right top, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    height:'100%',

    [theme.breakpoints.down('sm')]: {
      
    },
    [theme.breakpoints.down('xs')]: {
       
    },
  }));

  const RoadmapCard = styled(CardActionArea)({
    padding: '16px',
    borderRadius: '8px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'
  });

  const StyledCards = styled(Card)(({ theme, height }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    border: `3px solid ${theme.palette.brand.contrastText}`,
    background: `linear-gradient(to right top, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    height: height || '100px',
  
    [theme.breakpoints.down('sm')]: {
  
    },
    [theme.breakpoints.down('xs')]: {
  
    },
  }));
  const StyledCardss = styled(Card)(({ theme, height }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    border: `3px solid ${theme.palette.brand.contrastText}`,
    background: `linear-gradient(to right top, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    height: height ? '100px' : 'auto', 
  
    [theme.breakpoints.down('sm')]: {
  
    },
    [theme.breakpoints.down('xs')]: {
  
    },
  }));
  
  
  export {
    ContainerHero,
    Item,
    BorderContainer,
    StyledCard,
    RoadmapCard
  }