import { Container, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import Carousel from './Carousel';

const useStyles=makeStyles(() => ({
    banner: {
        backgroundImage: "url(./banner.jpg)",
    },
    bannerContent: {
        height: 400,
        display: 'flex',
        flexDirection: 'columm',
        paddingTop: 25,
        justifyContent: 'space-around',
    },
    tagline: {
        display: 'flex',
        height: '40%',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign:"center",
    }
}))

const Banner = () => {
    const classes = useStyles();
  return (
    <div className={classes.banner}>
        <Container className={classes.bannerContent}>
            <div className={classes.tagline}>
                <Typography variant='h2' style={{fontWeight:'bold', marginBottom: 15, fontFamily: "Roboto"}}>
                    Crypto Bros
                </Typography>
                <Typography variant='subtitle2' style={{color: 'darkgrey', textTransform: 'capitalize', fontFamily: 'Roboto'}}>
                    Track your favourite Crypto Currencies here!
                </Typography>

            </div>
        </Container>
        <Carousel/>
    </div>
  )
}

export default Banner