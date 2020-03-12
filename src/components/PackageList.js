import React from 'react';
import { List } from '@material-ui/core'
import PackageLink from './PackageLink';

const PackageList = ({pkgs, filter, setSelected}) => {
    return (
            <List component="nav" aria-label="main mailbox folders">
                {
                    pkgs.filter((pkg) => pkg.name.includes(filter))
                    .map((pkg) => (
                    <PackageLink pkg={pkg} setSelected={setSelected} key={pkg.name} />
                ))}
            </List >
    )
}

export default PackageList;