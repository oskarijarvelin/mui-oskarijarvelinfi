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

export default function Webkehitys() {
  const classes = useStyles();
  return (
    <Layout title="Web-kehitys">

      <Breadcrumbs />

      <Container maxWidth="sm">
        <Box pt={1} pb={4}>
          <Typography variant="h3" component="h1">
            Web-kehitys
          </Typography>
        </Box>

        <Box pb={6}>
          <Typography variant="body2">
            Työskentelen <ExtLink href="https://digimoguli.fi/">Digimogulin</ExtLink>  Web Developerina ja vastuualueisiini kuuluvat web-kehityksen lisäksi integraatioihin, versionhallintaan ja tietoturvaan liittyvät tehtävät. Erikoisosaamistani ovat sivustojen nopeus, turvallisuus, ja saavutettavuus.
          </Typography>
        </Box>
      </Container>

      <Container maxWidth="md">
        <Box className={classes.image}>
          <Image src="/hero-web-kehitys.jpg" alt="Oskari Järvelin" width="960" height="640" />
        </Box>
        <Typography variant="caption" color="textSecondary">
          Kuva: Giorgio Trovato.
        </Typography>
      </Container>

      <Container maxWidth="sm">

        <Box pt={6} pb={2}>
          <Typography>
            Webteknologiat kehittyvät nopeampaa kuin ikinä ennen ja rima verkkopalvelun laadun suhteen nousee yhä ylemmäs. Ajantasaisen osaamisen ylläpitäminen vaatii yhä aktiivisempaa ja määrätietoisempaa otetta webkehityksestä. Samalla kun kotisivujen hinnat laskevat ja sivujen muokkaus helpottuu, nousee asiantuntijan osaamisen arvo.
          </Typography>
        </Box>

        <Box pt={6} pb={4}>
          <Typography variant="h4" component="h2">
            Valjasta erikoisosaamiseni
          </Typography>
        </Box>

        <Box pb={2}>
          <Typography>
            Olen rakentanut osaamistani erityisesti verkkosivustojen mitattavan laadun ympärille. Verkkopalvelun laadun yleisimmät ja helpoimmin mitattavat metriikat liittyvät sivuston nopeuteen, turvallisuuteen, saavutettavuuteen ja hakukoneoptimointiin.
          </Typography>
        </Box>

        <Box pb={2}>
          <Typography>
            Työkalupakistani löytyy mittarit kunkin metriikan avainlukujen selvittämiseen ja keinot parantaa niitä. Hyödynnä osaamiseni todistettavasti huippulaadukkaiden sivustojen luomisessa tai olemassa olevan sivuston jatkokehittämisessä.
          </Typography>
        </Box>

        <Box pt={2} pb={3}>
          <Typography variant="h5" component="h3">
            Nopeus
          </Typography>
        </Box>

        <Box pb={2}>
          <Typography>
            Verkkosivun nopeuteen voi vaikuttaa oikeilla valinnoilla palvelinohjelmiston, käytettävien web-teknologioiden, resurssien käytön ja selaimen välimuistin hyödyntämisen suhteen.
          </Typography>
        </Box>

        <Box pb={2}>
          <Typography>
            Nopeuden kolme tärkeintä avainmetriikkaa tunnetaan myös Core Web Vitaleina. Niistä ensimmäinen, <b>LCP (Largest Contentful Paint)</b>, kertoo tärkeimmän latausajan eli sivun suurimman visuaalisen elementin latausajan. LCP kertoo siis kuinka nopeasti sivusto näyttää valmiilta. <b>FID (First Input Delay)</b> taas kertoo olennaisimman ajan interaktiivisuudesta eli kuinka nopeasti sivusto on valmis käytettäväksi. Kolmas ja viimeinen avainmetriikka <b>CLS (Cumulative Layout Shift)</b> kertoo taas kuinka paljon sivusto hyppii latautuessaan. Jokainen on varmasti törmännyt sivustoon, jolla sisältö pomppii ärsyttävästi alemmas kuvien ja mainosten latautuessa. Kun CLS on tavoiteltu 0, osaa sivusto laskea kuvien ja mainosten korkeuden oikein jo ennen niiden lataamista eikä sisältö pompi enää lataamisen aikana.
          </Typography>
        </Box>

        <Box pt={2} pb={3}>
          <Typography variant="h5" component="h3">
            Tietoturva
          </Typography>
        </Box>

        <Box pb={2}>
          <Typography>
            Kuva sivuston turvallisuudesta muodostuu hyökkäysvektoreiden tunnistamisesta ja ennaltatorjumisesta. Tärkeää onkin ylläpitää ajantasaista tilannekuvaa uusista haavoittuvuuksista ja uhkista.
          </Typography>
        </Box>

        <Box pb={2}>
          <Typography>
            Tietoturvan kannalta olennaisin metriikka muodostuu siitä kuinka monta tietoturvan kannalta huonoa ratkaisua tai tunnettua haavoittuvuutta sivustolta tai sivuston käyttämistä komponenteista löytyy.
          </Typography>
        </Box>

        <Box pt={2} pb={3}>
          <Typography variant="h5" component="h3">
            Saavutettavuus
          </Typography>
        </Box>

        <Box pb={2}>
          <Typography>
            Saavutettavuus on tärkeää, jotta mahdollisimman moni pystyisi käyttämään sivustoa. Suomessa on arvioitu olevan yli miljoona ihmistä, joiden voi olla vaikeaa käyttää huonosti saavutettavia verkkopalveluja. Saavutettavuutta tarvitsevat mm. pysyvästä kuulon, näön tai motoriikan heikentymisestä kärsivät, luki- ja oppimisvaikeuksia omaavat sekä heikosti suomen kieltä osaavat. Saavutettavuudesta hyötyvät erityisesti myös kaikki erilaisia tilapäisiä haasteita kohtaavat, joita voivat olla meluisa ympäristö, kirkas auringonpaiste tai stressi. 
          </Typography>
        </Box>

        <Box pb={2}>
          <Typography>
            Saavutettavuutta arvioidaan kansainvälisen WCAG-stantardin kolmiportaisella asteikolla. Stantardi sisältää erilaisia sisältöön, toimintaan sekä ulkoasuun liittyviä vaatimuksia verkkopalvelulle. Metriikka muodostuu siitä kuinka moni vaatimus ei täyty sivustolla, kun se testataan automaattisesti jokaisen vaatimuksen osalta.
          </Typography>
        </Box>

        <Box pt={2} pb={3}>
          <Typography variant="h5" component="h3">
            Hakukoneoptimointi
          </Typography>
        </Box>

        <Box pb={2}>
          <Typography>
            Tekninen hakukoneoptimointi on tärkeää, jotta sivusto nousee luontaisesti hakutuloksissa. Hakukoneet eivät kerro suoraan miten hakulogaritmit toimivat, mutta julkaisevat ohjeita miten hakukoneoptimointia voi tehdä, millaisia virheitä tulisi välttää sekä erilaisia työkaluja optimoinnin onnistumisen analysoimiseksi.
          </Typography>
        </Box>

        <Box pb={2}>
          <Typography>
            Myös hakukoneoptimoinnin onnistumisen metriikka muodostuu siitä, kuinka moni asia sivustolla on tehty väärin hakukoneiden kannalta. Teknisesti voidaan mitata myös miten onnistuneesti sivut on optimoitu jonkin tietyn hakusanan suhteen.
          </Typography>
        </Box>

        <Box pt={6} pb={4}>
          <Typography variant="h4" component="h2">
            Progressiiviset Webapplikaatiot (PWA)
          </Typography>
        </Box>

        <Box pb={2}>
          <Typography>
            Progressiivinen webapplikaatio (PWA) mahdollistaa sivuston asentamisen mobiililaitteelle, laitteen omien sovellusrajapintojen hyödyntämisen ja sivuston käyttämisen ilman verkkoyhteyttä.
          </Typography>
        </Box>

        <Box pb={2}>
          <Typography>
            PWA mahdollistaa websivuston muuttamisen natiiviksi mobiilisovellukseksi, joka toimii kaikilla käyttöjärjestelmillä. Merkittävin etu on kehityksen hinta, kun yhdellä projektilla voidaan luoda websivu ja universaalisti toimiva sovellus, jonka asentaminen laitteelle onnistuu suoraan selaimesta eikä listautumista sovelluskauppoihin tarvita.
          </Typography>
        </Box>

      </Container>
    </Layout>
  );
}
