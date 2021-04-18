import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    content: {
        marginTop: 64,
    }
}));

export default function Hero({title}) {
    const classes = useStyles();
    return (
        <Container maxWidth="sm" className={classes.content}>
            <Box py={16}>
                <Typography variant="h3" component="h1" gutterBottom>
                    {title}
                </Typography>
            </Box>
        </Container>
    );
}
