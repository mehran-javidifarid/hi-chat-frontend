import Home from "../pages/home";
import PrivateLayout from "../pages/layout/privateLayout";
import PublicLayout from "../pages/layout/publicLayout";
import NotFound from "../pages/404";
import IntroView from "../pages/intro";
import RegisterView from "../pages/register";
import SpinnerView from "../pages/Splash";
import LoginView from "../pages/login/login";
import ProfileView from "../pages/profile";
import NotificationView from "../pages/notification";
import ServiceView from "../pages/service";
import DepositView from "../pages/deposit";
import TransactionView from "../pages/transaction";


export interface Iroutes {
    path: string
    header: boolean,
    footer: boolean,
    Component: any,
    exact: boolean,
    reverse: boolean,
    Layout: any,
    backLink?: string,
    filterButton?: string,
}

const routes: Iroutes[] = [
    {
        path: "/spinner",
        header: false,
        footer: false,
        Component: SpinnerView,
        exact: false,
        reverse: true,
        Layout: PublicLayout,
    },
    {
        path: "/login",
        header: false,
        footer: false,
        Component: LoginView,
        exact: false,
        reverse: true,
        Layout: PublicLayout,
    },
    {
        path: "/intro",
        header: false,
        footer: false,
        Component: IntroView,
        exact: false,
        reverse: true,
        Layout: PublicLayout,
    },
    {
        path: "/register",
        header: false,
        footer: false,
        Component: RegisterView,
        exact: false,
        reverse: true,
        Layout: PublicLayout,
    },
    {
        path: "/profile",
        header: false,
        footer: true,
        Component: ProfileView,
        exact: true,
        reverse: false,
        Layout: PrivateLayout,
    },
    {
        path: "/transaction",
        header: false,
        footer: false,
        Component: TransactionView,
        exact: true,
        reverse: false,
        Layout: PrivateLayout,
    },
    {
        path: "/notification",
        header: false,
        footer: true,
        Component: NotificationView,
        exact: true,
        reverse: false,
        Layout: PrivateLayout,
    },
    {
        path: "/service",
        header: true,
        footer: true,
        Component: ServiceView,
        exact: true,
        reverse: false,
        Layout: PrivateLayout,
    },
    {
        path: "/deposit/:id",
        header: false,
        footer: true,
        Component: DepositView,
        exact: true,
        reverse: false,
        Layout: PrivateLayout,
    },
    {
        path: "/",
        header: false,
        footer: true,
        Component: NotificationView,
        exact: true,
        reverse: false,
        Layout: PrivateLayout,
    },
    {
        path: "*",
        header: true,
        footer: true,
        Component: NotFound,
        exact: false,
        reverse: false,
        Layout: PrivateLayout,
    }
];

export default routes
