import React from 'react';
import { Paper, Chip, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        padding: theme.spacing(0.5),
      },
      chip: {
        margin: theme.spacing(0.5),
      },
  }));

const Dependencies = ({ pkgs, dependencies, setSelected, color }) => {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <Paper>
            {dependencies.map(dependency => {
            return (
              <Chip
                    key={dependency}
                    label={dependency}
                    className={classes.chip}
                    onClick={setSelected !== undefined ? () => setSelected(pkgs.find(p => p.name === dependency)) : undefined}
                    color={color}
              />
            );
          })}
        </Paper>
        </div>
    )
}

export default Dependencies;