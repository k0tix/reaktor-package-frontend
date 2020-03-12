import React from 'react';
import { ListItem, ListItemText } from '@material-ui/core'

const PackageLink = ({pkg, setSelected}) => {
    return (
        <ListItem button key={pkg.name} onClick={() => setSelected(pkg)}>
            <ListItemText primary={pkg.name} />
        </ListItem>
    )
}

export default PackageLink;