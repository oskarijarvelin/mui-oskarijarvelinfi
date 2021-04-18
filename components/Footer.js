import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  copyright: {
    fontSize: 14,
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <Box pt={{xs:8, md:16}} pb={4}>
      <Typography variant="body2" color="textSecondary" align="center" className={classes.copyright}>
        {'Copyright © 2012 - '}
        {new Date().getFullYear()}{': '}
        <span className="oskari">Oskari Järvelin</span>
        {'.'}
      </Typography>
    </Box>
  );
}
