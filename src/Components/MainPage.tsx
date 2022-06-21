import React, { useState } from "react";
import Resume from "./Resume";
import UserInput from "./UserInput";
import "./MainPage.css";
import Navbar from "./NavBar";
import { Divider } from "@mui/material";
import Grid from "@mui/material/Grid";

type Props = {};



export default function MainPage(props : any) {

  const [userD, setUserD] = useState('');

  const userDataFuntion = (param: any) =>{
   let data = {
    ...param,
    id: Math.random().toString()
   };
   setUserD(data);
  }


  
  return (
 

    <Grid container spacing={1.01}>
      <Grid item xs={12}>
        <Navbar></Navbar>
      </Grid>
      <Grid item container>
        <Grid item xs={5}>
          <Resume userData ={userD}></Resume>
        </Grid>
        {/* <Grid item xs={2}>
          <Divider orientation="vertical" flexItem>
            VERTICAL
          </Divider>
        </Grid> */}

        <Grid item xs={6}>
          <UserInput callBack = {userDataFuntion}></UserInput>
        </Grid>
      </Grid>
    </Grid>
  );
}
