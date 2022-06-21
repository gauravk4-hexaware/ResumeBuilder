import { Paper } from "@mui/material";
import React, { useEffect, useState } from "react";

import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import MuiGrid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import CodeIcon from "@mui/icons-material/Code";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import { About } from "../Models/AboutModel";

type Props = {};

export default function Resume(props: any) {
  const [userData, setUserData] = useState(new About());

  useEffect(() => {
    // console.log(userData);
    if (props.userData) {
      setUserData(props.userData) ;
    }
    //setUserData(props.userData ? props.userData );
  });
  // setUserData(props.userData);

  // setUserData((prevValue: any) => {
  //   return {
  //     ...prevValue, props.userData
  //   };
  // })

  //  });
  // console.log(userData);

  const Imgstyles = {
    image: {
      width: 150,
      height: 150,
      borderColor: "red",
      borderWidth: 2,
      borderRadius: 75,
    },
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "lightgrey",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  // #063970
  return (
    <Grid container>
      <Grid item xs={12}>
        <Paper style={{ height: window.innerHeight }}>
          <Grid item container spacing={1}>
            <Grid
              item
              xs={4}
              style={{
                backgroundColor: "#063970",
                height: window.innerHeight,
                textAlign: "center",
              }}
            >
              {/* <img
                src={
                  "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c"
                }
                style={Imgstyles.image}
                loading="lazy"
              /> */}

              <Grid container spacing={0} style={{ marginTop: "20px" }}>
                <Grid item>
                  <CodeIcon fontSize="large" style={{ color: "white" }} />
                </Grid>
                <Grid item>
                  <Typography
                    variant="h6"
                    component="div"
                    gutterBottom
                    fontFamily={"Century Gothic"}
                    color="white"
                    style={{ fontWeight: "bold" }}
                  >
                    Technical Skills
                  </Typography>
                </Grid>
                <Grid item container spacing={1} style={{ marginTop: "10px" }}>
                  <Grid item>
                    <Item>C#</Item>
                  </Grid>
                  <Grid item>
                    <Item>MS SQL</Item>
                  </Grid>
                  <Grid item>
                    <Item>ASP.NET Core WebApi</Item>
                  </Grid>
                  <Grid item>
                    <Item>Dapper</Item>
                  </Grid>
                </Grid>
              </Grid>

              <Grid container spacing={0} style={{ marginTop: "20px" }}>
                <Grid item>
                  <SchoolIcon fontSize="large" style={{ color: "white" }} />
                </Grid>
                <Grid item>
                  <Typography
                    variant="h6"
                    component="div"
                    gutterBottom
                    fontFamily={"Century Gothic"}
                    color="white"
                    style={{ fontWeight: "bold" }}
                  >
                    Education
                  </Typography>
                </Grid>
                <Grid container item>
                  <Grid item>
                    <Typography
                      variant="h6"
                      component="div"
                      gutterBottom
                      fontFamily={"Century Gothic"}
                      color="white"
                      style={{
                        fontWeight: "10px",
                        fontSize: "15px",
                        textAlign: "left",
                      }}
                    >
                      <p style={{ fontSize: "15px" }}>
                        Chandigarh Group of colleges, jhanjeri
                      </p>
                      <p style={{ marginTop: "-20px", fontSize: "10px" }}>
                        (2015-2019)
                      </p>

                      <Grid container item>
                        <Grid item>
                          <FiberManualRecordIcon
                            style={{ fontSize: "10px", marginTop: "-25px" }}
                          />
                        </Grid>
                        <Grid>
                          <p style={{ fontSize: "15px", marginTop: "-10px" }}>
                            Computer science
                          </p>
                        </Grid>
                      </Grid>
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid container spacing={0} style={{ marginTop: "10px" }}>
                <Grid item>
                  <CardMembershipIcon
                    fontSize="large"
                    style={{ color: "white" }}
                  />
                </Grid>
                <Grid item>
                  <Typography
                    variant="h6"
                    component="div"
                    gutterBottom
                    fontFamily={"Century Gothic"}
                    color="white"
                    style={{ fontWeight: "bold", textAlign: "left" }}
                  >
                    <Grid container item>
                      <Grid item>
                        <p>Certification</p>
                      </Grid>
                    </Grid>
                  </Typography>
                </Grid>

                <Grid container item>
                  <Grid item>
                    <Typography
                      variant="h6"
                      component="div"
                      gutterBottom
                      fontFamily={"Century Gothic"}
                      color="white"
                      style={{
                        fontWeight: "10px",
                        fontSize: "15px",
                        textAlign: "left",
                      }}
                    >
                      <Grid container item>
                        <Grid item>
                          <FiberManualRecordIcon
                            style={{ fontSize: "10px", marginTop: "-25px" }}
                          />
                        </Grid>
                        <Grid>
                          <p style={{ fontSize: "15px", marginTop: "-10px" }}>
                            Azure Fundamentals
                          </p>
                        </Grid>
                      </Grid>
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={8}>
              <Typography
                variant="h3"
                component="div"
                gutterBottom
                fontFamily={"Century Gothic"}
                style={{ fontWeight: "bold" }}
              >
                {/* {userData.name == "" ? props.userData.name:"Your Name" } */}
                {userData.name}
              </Typography>
              <Typography
                variant="h5"
                component="div"
                gutterBottom
                fontFamily={"Century Gothic"}
              >
                Software Engineer
                {/* {props.designation} */}
              </Typography>

              <Grid container spacing={1}>
                <Grid item>
                  <LocationOnIcon />
                </Grid>
                <Grid item>
                  <Typography
                    variant="h6"
                    component="div"
                    gutterBottom
                    fontFamily={"Century Gothic"}
                  >
                    Pune, India
                  </Typography>
                </Grid>
              </Grid>

              <Grid container spacing={1}>
                <Grid item>
                  <LocalPhoneIcon />
                </Grid>
                <Grid item>
                  <Typography
                    variant="h6"
                    component="div"
                    gutterBottom
                    fontFamily={"Century Gothic"}
                  >
                    +91 8146829408
                  </Typography>
                </Grid>
              </Grid>

              <Grid container spacing={1}>
                <Grid item>
                  <EmailIcon />
                </Grid>
                <Grid item>
                  <Typography
                    variant="h6"
                    component="div"
                    gutterBottom
                    fontFamily={"Century Gothic"}
                  >
                    gauravkumar98@deloitte.com
                  </Typography>
                </Grid>
              </Grid>

              <Grid container spacing={1}>
                <Grid item>
                  <InfoIcon />
                </Grid>
                <Grid item>
                  <Typography
                    variant="h6"
                    component="div"
                    gutterBottom
                    fontFamily={"Century Gothic"}
                  >
                    About
                  </Typography>
                </Grid>
              </Grid>

              <Divider variant="middle" />

              <Grid container spacing={1}>
                <Grid item>
                  <Typography
                    variant="caption"
                    gutterBottom
                    style={{ fontSize: "large" }}
                  >
                    Motivated Sales Associate with 5 years of experience
                    boosting sales and customer loyalty through individualized
                    service. Resourceful expert at learning customer needs,
                    directing to desirable merchandise and upselling to meet
                    sales quotas. Committed to strengthening customer
                    experiences with positivity and professionalism when
                    answering requests and processing sales.
                  </Typography>
                </Grid>
              </Grid>
              <Grid container style={{ margin: "10px" }}>
                <Grid item>
                  <span> </span>
                </Grid>
              </Grid>

              <Grid container spacing={1}>
                <Grid item>
                  <WorkIcon />
                </Grid>
                <Grid item>
                  <Typography
                    variant="h6"
                    component="div"
                    gutterBottom
                    fontFamily={"Century Gothic"}
                  >
                    Work History
                  </Typography>
                </Grid>
              </Grid>

              <Grid container>
                <Grid container item>
                  <Grid item>
                    <Divider orientation="vertical" flexItem />
                  </Grid>
                </Grid>
                <Grid container item spacing={1}>
                  <Grid item>
                    <Typography
                      variant="h5"
                      component="div"
                      gutterBottom
                      fontFamily={"Century Gothic"}
                      style={{ fontSize: "medium", fontWeight: "bold" }}
                    >
                      Software Engineer
                    </Typography>

                    <Typography
                      variant="h6"
                      component="div"
                      gutterBottom
                      fontFamily={"Century Gothic"}
                      style={{ fontSize: "small" }}
                    >
                      Compubotics, New Delhi
                    </Typography>
                  </Grid>
                </Grid>

                <Grid container item spacing={1}>
                  <Grid item>
                    <Divider orientation="vertical" flexItem />
                  </Grid>
                  <Grid item>
                    <List>
                      <ListItem>
                        <ListItemAvatar>
                          <FiberManualRecordIcon
                            style={{ fontSize: "small" }}
                          />
                        </ListItemAvatar>

                        <Typography
                          variant="h6"
                          component="div"
                          gutterBottom
                          fontFamily={"Century Gothic"}
                          style={{ fontSize: "medium" }}
                        >
                          Effectively upsold products by introducing accessories
                          and other add-ons, adding ₹3000 to average monthly
                          sales.
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <ListItemAvatar>
                          <FiberManualRecordIcon
                            style={{ fontSize: "small" }}
                          />
                        </ListItemAvatar>

                        <Typography
                          variant="h6"
                          component="div"
                          gutterBottom
                          fontFamily={"Century Gothic"}
                          style={{ fontSize: "medium" }}
                        >
                          Effectively upsold products by introducing accessories
                          and other add-ons, adding ₹3000 to average monthly
                          sales.
                        </Typography>
                      </ListItem>
                    </List>
                  </Grid>
                </Grid>

                <Grid container>
                  <Grid container item>
                    <Grid item>
                      <Divider orientation="vertical" flexItem />
                    </Grid>
                  </Grid>
                  <Grid container item spacing={1}>
                    <Grid item>
                      <Typography
                        variant="h5"
                        component="div"
                        gutterBottom
                        fontFamily={"Century Gothic"}
                        style={{ fontSize: "medium", fontWeight: "bold" }}
                      >
                        Junior Software Engineer
                      </Typography>

                      <Typography
                        variant="h6"
                        component="div"
                        gutterBottom
                        fontFamily={"Century Gothic"}
                        style={{ fontSize: "small" }}
                      >
                        Compubotics, New Delhi
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid container item spacing={1}>
                    <Grid item>
                      <Divider orientation="vertical" flexItem />
                    </Grid>
                    <Grid item>
                      <List>
                        <ListItem>
                          <ListItemAvatar>
                            <FiberManualRecordIcon
                              style={{ fontSize: "small" }}
                            />
                          </ListItemAvatar>

                          <Typography
                            variant="h6"
                            component="div"
                            gutterBottom
                            fontFamily={"Century Gothic"}
                            style={{ fontSize: "medium" }}
                          >
                            Effectively upsold products by introducing
                            accessories and other add-ons, adding ₹3000 to
                            average monthly sales.
                          </Typography>
                        </ListItem>
                        <ListItem>
                          <ListItemAvatar>
                            <FiberManualRecordIcon
                              style={{ fontSize: "small" }}
                            />
                          </ListItemAvatar>

                          <Typography
                            variant="h6"
                            component="div"
                            gutterBottom
                            fontFamily={"Century Gothic"}
                            style={{ fontSize: "medium" }}
                          >
                            Effectively upsold products by introducing
                            accessories and other add-ons, adding ₹3000 to
                            average monthly sales.
                          </Typography>
                        </ListItem>
                      </List>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
