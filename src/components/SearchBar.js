import React from 'react';
import { TextField } from '@material-ui/core'

const SearchBar = ({filter, setFilter}) => {
    const handleInputChange = (event) => {
            setFilter(event.target.value)
    }
    
    return (
        <TextField id="standard-basic" label="Search packages" value={filter} onChange={handleInputChange} />
    )
}

export default SearchBar;