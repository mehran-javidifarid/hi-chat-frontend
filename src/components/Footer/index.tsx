import {FC} from 'react'
import {BottomNavigation, BottomNavigationAction} from "@mui/material";
import {WalletIcon, ProfileIcon} from "../../assets/images/all"
import {styled} from "@mui/material/styles";
import {useHistory} from "react-router-dom";

const menus = [
    {path: '/', icon: WalletIcon, name: 'chat'},
    {path: '/profile', icon: ProfileIcon, name: 'Profile'},
]

const StyledNavigation = styled(BottomNavigationAction)(({active, theme}: any): any => ({
    color:theme.palette.primary.main,
    ...(active === 'black' && {
        filter:'grayscale(1)'
    })
}))

const Footer: FC = () => {
    const history = useHistory();

    const handlePath = (path: any) => {
        history.push(path);
    }

    return (
        <footer style={{
            position: "fixed",
            bottom: "0",
            width: '100%',
        }}>
            <BottomNavigation showLabels>
                {menus.map(({icon, path, name}) =>
                    <StyledNavigation
                        key={path}
                        icon={<img src={icon} alt={name} onClick={() => handlePath(path)}/>}
                        // @ts-ignore
                        active={path === history.location.pathname?'blue':'black'}
                        label={path === history.location.pathname?name:''}
                    />
                )}
            </BottomNavigation>
        </footer>
    )
};

export default Footer
