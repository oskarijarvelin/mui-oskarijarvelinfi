import React from 'react';
import Image from 'next/image';
import Layout from '../components/Layout';
import ExtLink from '../components/ExtLink';
import { Container, Typography, Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Moment from 'react-moment';
import LaunchIcon from '@material-ui/icons/Launch';

const useStyles = makeStyles((theme) => ({
  image: {
    backgroundColor: 'rgba(0,0,0,.05)',
    boxShadow: '0 1px 4px 1px rgba(0,0,0,.15)',
    display: 'flex'
  },
  button: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    textTransform: 'none'
  }
}));
  
export default function Index() {
  const classes = useStyles();
  const onlyYears = (d) => {
    return d.substring(0, d.length - 6);
  }
  return (
    <Layout title="Kuinka voin palvella?" desc="Olen Oskari Järvelin, Web Developer ja tapahtumatekniikan moniosaaja Oulusta. Opiskelen tietojenkäsittelyn Tradenomiksi OAMK:ssa. Kuinka voin palvella?">

      <Container maxWidth="sm">
        <Box pt={{xs:6, md:12}} pb={4}>
          <Typography variant="h3" component="h1">
            Kuinka voin palvella?
          </Typography>
        </Box>

        <Box pb={6}>
          <Typography variant="body2">
            Olen <Moment toNow ago filter={onlyYears}>1994-09-29</Moment>-vuotias <ExtLink href="https://digimoguli.fi/">Digimogulin</ExtLink> Web Developer ja tapahtumatekniikan moniosaaja Oulusta. Laaja-alaisesta oppimisen nälästäni on syntynyt monipuolinen osaaminen, jota olen viime vuosina laajentanut aiempaakin määrätietoisemmin ja tavoitteellisemmin.
          </Typography>
        </Box>
      </Container>

      <Container maxWidth="md">
        <Box className={classes.image}>
          <Image src="/hero-index.jpg" alt="Oskari Järvelin" width="960" height="640" className={classes.image} />
        </Box>
        <Typography variant="caption" color="textSecondary">
          Lokakuussa 2019 Pakkahuoneenkadulla. Kuva: Sami Säily.
        </Typography>
      </Container>

      <Container maxWidth="sm">

        <Box pt={6} pb={2}>
          <Typography>
            Jo peruskoulun päättymisestä lähtien olen tehnyt asiakkailleni sekä tapahtumia että kotisivuja, enkä osannut päättää kumpien tekeminen kiinnostaa minua enemmän. Kun alanvalinta ei helpottunut vuosienkaan myötä, olen päätynyt rakentamaan työurani molempien alojen ainutlaatuisen symbioosin päälle. Viime vuosina olen saanut poimia parhaat puolet, kiinnostavimmat työtehtävät ja mieluisimmat työkaverit molemmilta aloilta, säilyttäen taloudellisen mielenrauhan jopa maailmanlaajuisen COVID-19-pandemian keskellä.
          </Typography>
        </Box>

        <Box pt={6} pb={4}>
          <Typography variant="h4" component="h2">
            Hyödynnä laaja osaamiseni
          </Typography>
        </Box>

        <Box pb={2}>
          <Typography>
            Osaamistani web-kehityksen parissa tarjoaa yksinoikeudella Oululainen <ExtLink href="https://digimoguli.fi/">Digimoguli Oy</ExtLink>. Digimoguli on modernin markkinoinnin ja myynnin palveleva asiantuntijayritys, jolla on pitkä kokemus erilaisista digitaalisen markkinoinnin ja viestinnän projekteista sekä ratkaisuista.
          </Typography>
        </Box>

        <Box pb={6}>
          <Button variant="contained" color="primary" endIcon={<LaunchIcon />} className={classes.button}>
            <ExtLink href="https://digimoguli.fi/" color="inherit">
              Digimoguli Oy
            </ExtLink>
          </Button>
        </Box>

        <Box pb={2}>
          <Typography>
            Freelancer-teknikkona voit ostaa osaamistani suoraan minulta tai esimerkiksi yhdessä tarvittavan tapahtumatekniikan kanssa Oululaiselta <ExtLink href="https://livepaletti.fi/">Livepaletti Oy</ExtLink>:ltä. Livepaletti on toiminut <b>pitkään</b> alalla, omistaa laadukasta kalustoa erilaisiin tarpeisiin ja on mm. valittu Vuoden Palveluntarjoajaksi Pohjoisen Parhaat 2018 -gaalassa.
          </Typography>
        </Box>

        <Box pb={4}>
          <Button variant="contained" color="primary" endIcon={<LaunchIcon />} className={classes.button}>
            <ExtLink href="https://livepaletti.fi/" color="inherit">
              Livepaletti Oy
            </ExtLink>
          </Button>
        </Box>

      </Container>

    </Layout>
  );
}
