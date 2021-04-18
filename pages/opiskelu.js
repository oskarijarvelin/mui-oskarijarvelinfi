import React from 'react';
import Image from 'next/image';
import Layout from '../components/Layout';
import Breadcrumbs from '../components/Breadcrumbs';
import ExtLink from '../components/ExtLink';
import { Container, Typography, Box, LinearProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  image: {
    backgroundColor: 'rgba(0,0,0,.05)',
    boxShadow: '0 1px 4px 1px rgba(0,0,0,.15)',
    display: 'flex',
  },
  ops: {
    fontSize: 16,
  },
  thead: {
    backgroundColor: '#E0E0E0',
  },
  th: {
    backgroundColor: '#F2F2F2',
    borderTop: '1px solid',
  },
  tr: {
    borderTop: '1px solid',
  },
  summary: {
    borderTop: '2px solid',
  }
}));

function LinearProgressWithLabel(props) {
  return (
    <Box display="flex" alignItems="center" pt={2}>
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography color="textSecondary">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

function createData(kurssi, op, type) {
  return { kurssi, op, type};
}

const rows = [
  createData('Perusopinnot', 60, 'th'),
  createData('Web-kehityksen perusteet', 15, 'tr'),
  createData('Web-projekti', 15, 'tr'),
  createData('Johdatus digitaalisiin palveluihin', 15, 'tr'),
  createData('Verkkopalveluprojekti', 15, 'tr'),
  createData('Ammattiopinnot', 90, 'th'),
  createData('Digital products and services', 12, 'tr'),
  createData('Web Content Project', 15, 'tr'),
  createData('Mobile Services', 12, 'tr'),
  createData('Mobile Project', 15, 'tr'),
  createData('Professional English Communication', 3, 'tr'),
  createData('Ammatillinen ruotsin kieli ja viestintä', 3, 'tr'),
  createData('Peliala', 15, 'tr'),
  createData('Tietojenkäsittelyn toimeksianto', 15, 'tr'),
  createData('Vapaasti valittavat opinnot', 15, 'th'),
  createData('Harjoittelu', 30, 'th'),
  createData('Opinnäytetyö', 15, 'th'),
];

export default function Opiskelu() {
  const classes = useStyles();
  var op = 43;
  var progress = Math.round(op / 210 * 100);
  return (
    <Layout title="Opiskelu" desc="Opiskelen Oulun Ammattikorkeakoulussa tietojenkäsittelyn Tradenomiksi. Tutkinnon laajuus on 210 opintopistettä eli 3,5 vuotta. Kuinka voin palvella?">

      <Breadcrumbs />

      <Container maxWidth="sm">
        <Box pt={1} pb={4}>
          <Typography variant="h3" component="h1">
            Opiskelu
          </Typography>
        </Box>

        <Box pb={6}>
          <Typography variant="body2">
            Opiskelen <abbr title="Oulun Ammattikorkeakoulu">OAMK</abbr>:ssa <ExtLink href="https://www.oamk.fi/fi/koulutus/ammattikorkeakoulututkinnot/tradenomi-amk-tietojenkasittely">tietojenkäsittelyn Tradenomiksi</ExtLink> verkko-opetuksena järjestettävässä monimuoto-toteutuksessa. Tutkinnon laajuus on 210 op eli 3,5 vuotta, joista yksi vuosi opiskellaan englanniksi. Koulutus suuntautuu digitaalisten tuotteiden ja palveluiden kehittämiseen. Taustaltani olen vuoden 2013 ylioppilas Limingan lukiosta.
          </Typography>
        </Box>
      </Container>

      <Container maxWidth="md">
        <Box className={classes.image}>
          <Image src="/hero-opiskelu.jpg" alt="Oskari Järvelin" width="960" height="640" />
        </Box>
        <Typography variant="caption" color="textSecondary">
          Lokakuussa 2019 Pakkahuoneenkadulla. Kuva: Sami Säily.
        </Typography>
      </Container>

      <Container maxWidth="sm">
        <Box pt={6} pb={2}>
          <Typography>
            Monimuoto-toteutuksesta huolimatta opintojen edistymistavoite on yhtä suuri kuin päivätoteutuksenakin: <b>60 opintopistettä / vuosi</b>. Opiskelun aloitin tammikuussa 2021 ja valmistumistavoite on kesällä 2024.
          </Typography>

          <LinearProgressWithLabel value={progress} op={op} />
          <Typography color="textSecondary" className={classes.ops}>
            {op} / 210 op
          </Typography>
        </Box>

        <Box pt={6} pb={4}>
          <Typography variant="h4" component="h2">
            Opintojen sisältö
          </Typography>
        </Box>

        <Box pb={2}>
          <Typography>
            Opintosuunnitelma on rakennettu siten, että jokaisen lukukauden (30 <abbr title="opintopistettä">op</abbr>) ensimmäinen puolisko opiskellaan asioita, joita jälkimmäisen puoliskon aikana hyödynnetään oikean projektin tekemisessä.
          </Typography>
        </Box>

        <Box pb={2}>
          <Typography>
            Opinnot ovat tiivisti kiinni työelämän todellisissa haasteissa ja vähintään 60 op kertyykin työskentelemällä alan työtehtävissä. Tällaisia opintoja ovat harjoittelun lisäksi tietojenkäsittelyn toimeksianto sekä opinnäytetyö. Näiden opintojaksojen lisäksi olen itse pystynyt hyväksilukemaan työkokemustani monen opintojakson osion osalta jo perus- ja ammattiopintoihin.
          </Typography>
        </Box>

        <Box py={2}>
          <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
              <TableHead className={classes.thead}>
                <TableRow>
                  <TableCell>
                    Opintojakso
                  </TableCell>
                  <TableCell align="right">
                    op
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>

                {rows.map((row) => (
                  <TableRow key={row.name} className={row.type == 'th' ? classes.th : classes.tr}>
                    <TableCell component={row.type} scope="row">
                      {row.kurssi}
                    </TableCell>
                    <TableCell component={row.type} align="right">
                      {row.op}
                    </TableCell>
                  </TableRow>
                ))}

                <TableRow className={classes.summary}>
                  <TableCell component="th">
                    Yhteensä
                  </TableCell>
                  <TableCell component="th" align="right">
                    210 op
                  </TableCell>
                </TableRow>

              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        <Box pt={6} pb={4}>
          <Typography variant="h4" component="h2">
            Portfolio
          </Typography>
        </Box>

        <Box pb={2}>
          <Typography>
            Tähän osioon tulen listaamaan ja linkittämään kaikki koulutyöni, projektit, ryhmätyöt sekä opinnäytetyön niiden valmistuttua.
          </Typography>
        </Box>
      </Container>
    </Layout>
  );
}
