'use client'
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';
import { BorderContainer, StyledCard } from '@/app/style/style';
import { Box, Typography } from '@mui/material';
import { useCaseData } from '../data';
import Temp from '../Temp';

const UseCase = () => {
    const theme = useTheme();

    return (
        <Temp head='Use Cases' paragraph='Unlocking Global Assets with Tokenization'>
            <BorderContainer>
                <Box
                    sx={{
                        display: { sm: 'column', md: 'flex' },
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: theme.spacing(1),
                        gap: theme.spacing(2),
                    }}
                >
                    {useCaseData.map((data, index) => (
                        <StyledCard key={index} sx={{ p:1, marginBottom: theme.spacing(2),height:{md:'400px'}}} >
                            <Image src={data.img} alt={data.p} width={100} height={100} />
                            <Typography variant="h6" sx={{ marginBottom: theme.spacing(1) }}>{data.h1}</Typography> 
                            <Typography variant="body2">{data.p}</Typography>
                        </StyledCard>
                    ))}
                </Box>
            </BorderContainer>
        </Temp>
    );
};

export default UseCase;
