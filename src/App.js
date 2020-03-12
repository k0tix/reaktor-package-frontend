import React, { useState, useEffect } from 'react'
import { Grid } from '@material-ui/core'
import Package from './components/Package';
import SearchBar from './components/SearchBar';
import packageService from './services/packages';
import PackageList from './components/PackageList';

const App = () => {
  const [pkgs, setPkgs] = useState([]);
  const [filter, setFilter] = useState('apt');
  const [selected, setSelected] = useState(false);

  useEffect(() => {
      console.log('Set packages')
      packageService.getAll().then(response => {
        setPkgs(response)
      })
  }, [])

  return (
    
    <div>
        <Grid container spacing={3}>
          <Grid item xs={2}>
          <SearchBar filter={filter} setFilter={setFilter}/>
          <PackageList pkgs={pkgs} filter={filter} setSelected={setSelected}/>
        </Grid>
        <Grid item xs={8}>
          <Package pkgs={pkgs} selected={selected} setSelected={setSelected}/>
        </Grid>       
      </Grid>
    </div>
  );
}

export default App;
