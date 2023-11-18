import React, {FC} from 'react';
import {ToastContainer} from "react-toastify";
import {makeStyles} from "@mui/styles";

const PublicLayout: FC = ({children}) => {
  const classes = useStyle()

  return (
    <div className={classes.wrapper}>
      <ToastContainer/>
      {children}
    </div>
  );
}


export default PublicLayout;


const useStyle = makeStyles((theme: any) => ({
  wrapper: {
    backgroundColor: theme.palette.primary.backgroundMain,
    height: '100vh'
  }
}))
