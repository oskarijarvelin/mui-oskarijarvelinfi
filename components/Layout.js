import React from 'react';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import Head from '../components/Head';
import AppBar from '../components/AppBar';
import Footer from '../components/Footer';
import { Box, Fab } from '@material-ui/core';
import CallIcon from '@material-ui/icons/Call';

const useStyles = makeStyles((theme) => ({
    content: {
        marginTop: 64,
    },
    fab: {
        fontFamily: 'Roboto Condensed',
        fontWeight: 700,
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    fabIcon: {
        marginRight: theme.spacing(1),
    }
}));

export default function Layout({title, desc, children}) {
    const classes = useStyles();
    return (
        <>
            <Head title={title} desc={desc} />

            <AppBar />
            <div className={classes.content} />

            {children}

            <Box display={{xs: "block", md: "none"}} className={classes.fabBox}>
                <Link href="tel:+358458983883">
                    <Fab color="primary" aria-label="soita" className={classes.fab}>
                        <CallIcon />
                    </Fab>
                </Link>
            </Box>

            <Box display={{xs: "none", md: "block"}} className={classes.fabBox}>
                <Link href="tel:+358458983883">
                    <Fab color="primary" variant="extended" className={classes.fab}>
                        <CallIcon className={classes.fabIcon} />
                        045 898 3883
                    </Fab>
                </Link>
            </Box>

            <Footer />
        </>
    );
    }
