import React, { useState, useEffect } from 'react'
import { Grid, Paper, Divider } from '@material-ui/core'
import Package from './components/Package'
import SearchBar from './components/SearchBar'
import packageService from './services/packages'
import PackageList from './components/PackageList'

const App = () => {
    const [pkgs, setPkgs] = useState([])
    const [filter, setFilter] = useState('')
    const [selected, setSelected] = useState({})

    useEffect(() => {
        console.log('Set packages')
        packageService.getAll().then(response => {
            setPkgs(response.sort((a, b) =>  a.name.localeCompare(b.name)))
        })
    }, [])

    return (
        <div>
            <Grid container justify="center" spacing={2}>
                <Grid item xs={12} md={8}>
                    <Package pkgs={pkgs} selected={selected} setSelected={setSelected} />
                </Grid>
                <Grid item xs={12} md={7}>
                    <Paper>
                        <SearchBar filter={filter} setFilter={setFilter} />
                        <Divider />
                        <PackageList pkgs={pkgs} filter={filter} setSelected={setSelected}/>
                    </Paper>

                </Grid>
            </Grid>
        </div>
    )
}

export default App
