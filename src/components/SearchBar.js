import React from 'react';
import { TextField } from '@material-ui/core'
import PropTypes from 'prop-types'

const SearchBar = ({filter, setFilter}) => {
    const handleInputChange = (event) => {
            setFilter(event.target.value)
    }
    
    return (
        <TextField id="standard-basic" label="Search packages" value={filter} onChange={handleInputChange} />
    )
}

SearchBar.propTypes = {
    filter: PropTypes.string,
    setFilter: PropTypes.func
}

export default SearchBar;