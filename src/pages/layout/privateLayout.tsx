import React, {FC, useEffect, useState} from 'react';
import {RouteComponentProps,} from 'react-router-dom';
import {ToastContainer} from "react-toastify";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import {Box} from "@mui/material";

interface IPrivateLayout extends RouteComponentProps<any> {
    header: boolean,
    footer: boolean,
}

const PrivateLayout: FC<IPrivateLayout> = ({children, footer, header}) => {
    const [style, setStyle] = useState<any>({
        height: "calc(100% - 132px)",
        overflowY: "auto",
        overflowX: "hidden"
    })

    useEffect(() => {
        if (header && footer) {
            setStyle({
                ...style,
                height: `calc(100% - 132px)`,
            })
        } else if (footer) {
            setStyle({
                ...style,
                height: "calc(100% - 56px)",
            })
        } else {
            setStyle({
                ...style,
                height: "auto",
            })
        }
    }, [])

//    onMessageListener().then((payload: any) => {
//        console.log(payload);
//    }).catch(err => console.log('failed: ', err));

    return (
        <Box sx={{height: "100vh", overflowY: "auto", overflowX: "hidden", backgroundColor: '#F5F5F5'}}>
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={true}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            {header && <Header/>}
            <div style={style}>
                {children}
            </div>
            {footer && <Footer/>}
        </Box>
    );
}
export default PrivateLayout
