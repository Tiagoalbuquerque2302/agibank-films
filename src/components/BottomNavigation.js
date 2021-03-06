import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import menu from '../lists/menu'

const useStyles = makeStyles({
    root: {
        width: '100%',
        position: 'fixed',
        bottom: 0,
        zIndex: 100
    },
})

export default function SimpleBottomNavigation() {
    const classes = useStyles()
    const [value, setValue] = React.useState('/home')

    const handleChange = (event, newValue) => {
        setValue(newValue)
    };

    return (
        <BottomNavigation
            value={value}
            onChange={handleChange}
            className={classes.root}
        >
            {menu.map((option) => (
                <a href={option.path} key={option.name}>
                    <BottomNavigationAction
                        label={option.name}
                        value={option.path}
                        icon={option.icon} />
                </a>
            ))}
        </BottomNavigation>
    )
}