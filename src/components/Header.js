import React from 'react'
import { AppBar, Container, Toolbar, Typography, Select, MenuItem, makeStyles, createTheme, ThemeProvider } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { CryptoState } from '../CryptoContext'

const useStyles = makeStyles(() => ({
    title: {
        flex: 1,
        color: 'gold',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        cursor: 'pointer',
    }
}))

const Header = () => {
    const classes = useStyles()

    const { currency, setCurrency } = CryptoState()

    console.log(currency)

    const  darkTheme  = createTheme({
        palette:  {
            primary: {
                main: '#fff'
            },
            type: 'dark'
        }
    })

  return (
      <ThemeProvider theme={darkTheme}>
        <AppBar color='transparent' position='static'>
            <Container>
                <Toolbar>
                <Link to={'/'}>
                    <Typography className={classes.title} variant='h6'>Crypto Tracker</Typography>
                </Link>
                    <Select variant='outlined' style={{width: 100, height: 40, marginLeft: 15,}} value={currency} onChange={(e) => setCurrency(e.target.value)}>
                        <MenuItem value={'USD'}>USD</MenuItem>
                        <MenuItem value={'CAD'}>CAD</MenuItem>
                    </Select>
                </Toolbar>
            </Container>
        </AppBar>
    </ThemeProvider>
  )
}

export default Header