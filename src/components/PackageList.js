import React from 'react'
import { List } from '@material-ui/core'
import PackageLink from './PackageLink'
import PropTypes from 'prop-types'

const PackageList = ({ pkgs, filter, setSelected }) => {
    return (
        <List component="nav" aria-label="main mailbox folders" style={{ overflow: 'auto', height: '500px' }}>
            {
                pkgs.filter((pkg) => pkg.name.includes(filter))
                    .map((pkg) => (
                        <PackageLink pkg={pkg} setSelected={setSelected} key={pkg.name} />
                    ))
            }
        </List >
    )
}

PackageList.propTypes = {
    pkgs: PropTypes.array,
    filter: PropTypes.string,
    setSelected: PropTypes.func
}

export default PackageList