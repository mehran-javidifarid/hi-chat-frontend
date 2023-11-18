import React, { FC } from 'react';
import {
    Box,
    SwipeableDrawer,
    Button
} from "@mui/material";
import { makeStyles } from '@mui/styles'

type Anchor = 'top' | 'left' | 'bottom' | 'right';

interface props {
    Anchor: 'top' | 'left' | 'bottom' | 'right'
    Icon?: any
    click?: boolean
    setClick?: any
}

const Drawer: FC<props> = ({ Anchor, Icon, click, setClick, children }) => {
    const classes = useStyles();

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer =
        (Anchor: Anchor, open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event &&
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }
                setState({ ...state, [Anchor]: open });
            };

    const list = (Anchor: Anchor) => (
        <Box
            sx={{ width: Anchor === 'top' || Anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(Anchor, false)}
            onKeyDown={toggleDrawer(Anchor, false)}
        >
            {children}
        </Box>
    );

    return (
        <>
            {([Anchor] as const).map((Anchor) => (
                <React.Fragment key={Anchor}>
                    {Icon && <Button onClick={toggleDrawer(Anchor, true)}><img src={Icon}></img></Button>}
                    <SwipeableDrawer
                        anchor={Anchor}
                        open={click || state[Anchor]}
                        onClose={setClick ? () => setClick(false) : toggleDrawer(Anchor, false)}
                        onOpen={toggleDrawer(Anchor, true)}
                    >
                        {list(Anchor)}
                    </SwipeableDrawer>
                </React.Fragment>
            ))}
        </>
    );
};

export default Drawer;

const useStyles = makeStyles({
    sidebar: {
        position: "absolute",
        width: 200,
        right: 0,
        minHeight: `1000px`,
        top: "70px"
    }
})