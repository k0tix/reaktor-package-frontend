import React from 'react'
import { Card, CardContent, Typography, CardActions } from '@material-ui/core'
import Dependencies from './Dependencies'
import PropTypes from 'prop-types'

const Package = ({ pkgs, selected, setSelected }) => {
    return (
        selected.name !== undefined ?
            <Card style={{ position: 'fixed', maxWidth: '96em' }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {selected.name}
                    </Typography>
                    <Typography color="textSecondary">
                        description
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {selected.description}
                    </Typography>
                    <br />

                    {selected.dependencies.length > 0 ?
                        <div>
                            <Typography variant="body1" color="textPrimary" component="h2">
                            Dependencies
                            </Typography>
                            <Dependencies pkgs={pkgs} dependencies={selected.dependencies} setSelected={setSelected} color={'primary'} />
                        </div>
                        : <Typography variant="body2" color="textPrimary" component="h2">
                            No dependencies :)
                        </Typography>}
                    <br />

                    {selected.reverseDependencies.length > 0 ?
                        <div>
                            <Typography variant="body2" color="textPrimary" component="h2">
                                Reverse dependencies
                            </Typography>
                            <Dependencies pkgs={pkgs} dependencies={selected.reverseDependencies} setSelected={setSelected} color={'secondary'} />
                        </div>
                        : <Typography variant="body2" color="textPrimary" component="h2">
                            No reverse dependencies :(
                        </Typography>
                    }

                    <br />
                    {selected.alternatives.length > 0 ?
                        <div>
                            <Typography variant="body2" color="textPrimary" component="h2">
                                Alternative dependencies
                            </Typography>
                            <Dependencies pkgs={pkgs} dependencies={selected.alternatives} color={'default'} />
                        </div>
                        : ''
                    }
                </CardContent>
                <CardActions>

                </CardActions>
            </Card>
            :
            <Card style={{ position: 'fixed' }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    No package selected
                    </Typography>
                </CardContent>
            </Card>
    )
}

Package.propTypes = {
    pkgs: PropTypes.array,
    selected: PropTypes.object,
    setSelected: PropTypes.func
}

export default Package