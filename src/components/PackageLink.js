import React from 'react';
import { ListItem, ListItemText } from '@material-ui/core'
import PropTypes from 'prop-types'

const PackageLink = ({pkg, setSelected}) => {
    return (
        <ListItem button key={pkg.name} onClick={() => setSelected(pkg)}>
            <ListItemText primary={pkg.name} />
        </ListItem>
    )
}

PackageLink.propTypes = {
    pkg: PropTypes.object,
    setSelected: PropTypes.func
}

export default PackageLink;