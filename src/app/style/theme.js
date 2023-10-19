"use client"
import { createTheme } from '@mui/material/styles';


const theme =createTheme({
  palette:{

    mode: 'dark',
    brand:{
      main: '#8b02d4',
      light: '#08f1b0',
      dark: '#000034',
      contrastText: '#fff',
      brand10: "#f3bc16",
      brand10: "#fc94d1",
    },
    primary: {
      main: '#000',
      light: '#42a5f5',
      dark: '#1565c0',
      contrastText: '#fff',
      primary10: "#E5EFFF",
      primary20: "#B7D4FF",
      primary30: "#8AB8FF",
      primary40: "#5C9DFF",
      primary50: "#2E81FF",
      primary60: "#0066FF",
      primary70: "#0056D6",
      primary80: "#0045AD",
      primary90: "#003585",
      primary100: "#00255C",
    },
    secondary:{
      main: '#1976d2',
      light: '#42a5f5',
      dark: '#1565c0',
      contrastText: '#fff',
      secondary10: "#FFF5EB",
      secondary20: "#FFE0BE",
      secondary30: "#FFCB92",
      secondary40: "#FFB665",
      secondary50: "#FFA138",
      secondary60: "#EA8D26",
      secondary70: "#C87315",
      secondary80: "#A65B08",
      secondary90: "#844500",
      secondary100: '#623400'
    },
    error:{
      main: '#1976d2',
      light: '#42a5f5',
      dark: '#1565c0',
      contrastText: '#fff',
      error10:"#FEF2F2",
      error20:"#FEE2E2",
      error30:"#FECACA",
      error40:"#FCA5A5",
      error50:"#F87171",
      error60:"#EF4444",
      error70:"#DC2626",
      error80:"#B91C1C",
      error90:"#991B1B",
      error100:"#7F1D1D"
    },
    warning:{
      main: '#1976d2',
      light: '#42a5f5',
      dark: '#1565c0',
      contrastText: '#fff',
      warning10:"#FFFBEB",
      warning20:"#FEF3C7",
      warning30:"#FDE68A",
      warning40:"#FCD34D",
      warning50:"#FBBF24",
      warning60:"#F59E0B",
      warning70:"#D97706",
      warning80:"#B45309",
      warning90:"#92400E",
      warning100:"#78350F"
    },
    info:{
      main: '#1976d2',
      light: '#42a5f5',
      dark: '#1565c0',
      contrastText: '#fff',
      Neutral10: "#FAFBFC",
      Neutral20: "#E1EAF8",
      Neutral30: "#C9D2E1",
      Neutral40: "#B1BBCB",
      Neutral50: "#9AA4B4",
      Neutral60: "#848E9D",
      Neutral70: "#6E7887",
      Neutral80: "#5A6270",
      Neutral90: "#464D59",
      Neutral100: "#333943"
    },
    success:{
      main: '#1976d2',
      light: '#42a5f5',
      dark: '#1565c0',
      contrastText: '#fff',
      success10: "#ECFDF5",
      success20: "#D1FAE5",
      success30: "#A7F3D0",
      success40: "#6EE7B7",
      success50: "#34D399",
      success60: "#10B981",
      success70: "#059669",
      success80: "#047857",
      success90: "#065F46",
      success100: "#064E3B"
    }

  }
  
})



export default theme;
// export default lightTheme;