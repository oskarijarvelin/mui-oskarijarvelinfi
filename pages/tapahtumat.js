import React from 'react';
import Image from 'next/image';
import Layout from '../components/Layout';
import Breadcrumbs from '../components/Breadcrumbs';
import ExtLink from '../components/ExtLink';
import { Container, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  image: {
    backgroundColor: 'rgba(0,0,0,.05)',
    boxShadow: '0 1px 4px 1px rgba(0,0,0,.15)',
    display: 'flex'
  }
}));

export default function Tapahtumat() {
  const classes = useStyles();
  return (
    <Layout title="Tapahtumat" desc="Työskentelen tapahtumatekniikan parissa äänen, valon kuin videonkin parissa. Kuinka voin palvella monialaisellaa osaamisellani ja pitkällä kokemuksellani.">

      <Breadcrumbs />

      <Container maxWidth="sm">
        <Box pt={1} pb={4}>
          <Typography variant="h3" component="h1">
            Tapahtumat
          </Typography>
        </Box>

        <Box pb={6}>
          <Typography variant="body2">
            Olen päässyt työskentelemään tapahtumatekniikan parissa lähes koko toimialan laajuudelta, niin äänen, valon kuin videonkin parissa. Asiakkaani arvostavat monialaista osaamistani ja pitkää kokemustani alalta. C-kortillisena freelancerina olen ehtinyt työskentelemään monelle alan yritykselle Suomessa, mutta parhaiten olen viihtynyt Oululaisen <ExtLink href="https://livepaletti.fi/">Livepaletin</ExtLink> palveluksessa.
          </Typography>
        </Box>
      </Container>

      <Container maxWidth="md">
        <Box className={classes.image}>
          <Image src="/hero-tapahtumat.jpg" alt="Oskari Järvelin" width="960" height="640" />
        </Box>
        <Typography variant="caption" color="textSecondary">
          Kuva: Jorik Kleen.
        </Typography>
      </Container>

      <Container maxWidth="sm">
        <Box pt={6} pb={2}>
          <Typography>
            Eniten työtunteja olen tehnyt valaistuksen parissa, joita peruskoulun juhliin tehden alunperinkin alalle eksyin. Valaistuksen ohella olen pitkään toiminut myös saliääni- sekä monitorimiksaajana. COVID-19-pandemian myötä tapahtumakalenteriin jäljelle jäivät ainoastaan livestriimit.
          </Typography>
        </Box>

        <Box pt={6} pb={4}>
          <Typography variant="h4" component="h2">
            Valaistus
          </Typography>
        </Box>

        <Box pb={2}>
          <Typography>
            Valomiehenä olen työskennellyt monipuolisesti mm. festareilla, kiertueilla, yritysjuhlissa, tanssi- ja luistelukoulujen lukukausinäytöksissä, livestriimeissä kuin Oulun teatterissakin.
          </Typography>
        </Box>

        <Box pb={2}>
          <Typography>
            Venueista olen päässyt kokemaan mm. festarilavat, olohuoneet, jäähallit, konserttisalit, tyhjät teollisuushallit, klubit, autotallit kuin jumppasalitkin.
          </Typography>
        </Box>

        <Box pt={6} pb={4}>
          <Typography variant="h4" component="h2">
            Miksaus
          </Typography>
        </Box>

        <Box pb={2}>
          <Typography>
            Työskentelen elävän musiikin tapahtumissa pääasiassa saliäänimiksaajana, jolloin huolehdin yleisön kuulonautinnosta. Tarvittaessa olen toiminut myös monitorimiksaajana huolehtien siitä, että artistit kuulevan itsensä ja toisensa.
          </Typography>
        </Box>

        <Box pb={2}>
          <Typography>
            Viime vuosina olen päässyt työskentelemään suuresti ihailemani <b>Moskah</b>-yhtyeen vakioäänimiehenä huolehtien sekä saliäänestä että monitoroinnista.
          </Typography>
        </Box>

        <Box pt={6} pb={4}>
          <Typography variant="h4" component="h2">
            Livestriimit
          </Typography>
        </Box>

        <Box pb={2}>
          <Typography>
            Livestream-osaamista olen päässyt kehittämään, kun COVID-19-pandemian myötä keikkakalenteri tyhjentyi muista tapahtumista. Striimeissä olen toiminut mm. kuvaajana, ohjaajana, miksaajana, valomiehenä kuin striimiteknikkonakin.
          </Typography>
        </Box>
      </Container>
    </Layout>
  );
}
