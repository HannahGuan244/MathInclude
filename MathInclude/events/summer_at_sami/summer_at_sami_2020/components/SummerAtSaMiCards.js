import React, { PureComponent, Fragment } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
// nodejs library to set properties for components
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import FormatAlignLeft from "@material-ui/icons/FormatAlignLeft";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Button from "components/CustomButtons/Button.jsx";
import mathTwoGirls from "../../../../../static/events/math_two_girls.jpg";
import tutorHelp from "../../../../../static/events/tutor_help_2.jpg";
import lawn from "../../../../../static/events/lawn.jpg";
import piece from "../../../../../static/events/piece.jpg";
import featuresStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/featuresStyle.jsx";

import poster from "../../../../../static/events/summer_at_sami/pdf/SaMiSummerCamp2020.pdf";

class SummerAtSaMiCards extends PureComponent {
    render() {
        const { classes } = this.props;

        return (
            <Fragment>
                <GridContainer>
                  <GridItem xs={12} sm={6} md={6}>
                    <Card
                      raised
                      background
                      style={{ backgroundImage: "url(" + mathTwoGirls + ")" }}
                    >
                      <CardBody background>
                        <h6 className={classes.category}>Summer@SaMi 2020</h6>
                        <h3 className={classes.cardTitle}>
                          Student Register
                        </h3>
                        <p className={classes.textCenter}>
                          Click button below to join as a student
                        </p>
                        <a className="link" href="https://forms.gle/3hLCoXBYmVRwp9P57" target="_blank" rel="noopener noreferrer">
                            <Button round color="rose">
                                <FormatAlignLeft className={classes.icons} />Sign Up
                            </Button>
                        </a>
                      </CardBody>
                    </Card>
                  </GridItem>
                  <GridItem xs={12} sm={6} md={6}>
                    <Card
                      raised
                      background
                      style={{ backgroundImage: "url(" + tutorHelp + ")" }}
                    >
                      <CardBody background>
                        <h6 className={classes.category}>Summer@SaMi 2020</h6>
                        <h3 className={classes.cardTitle}>
                          Tutor Register
                        </h3>
                        <p className={classes.category}>
                          Click button below to join as a tutor
                        </p>
                        <a className="link" href="https://forms.gle/f3AojiJYwT79am4K9" target="_blank" rel="noopener noreferrer">
                            <Button round color="rose">
                                <FormatAlignLeft className={classes.icons} />Sign Up
                            </Button>
                        </a>
                      </CardBody>
                    </Card>
                  </GridItem>
                  <GridItem xs={12} sm={6} md={6}>
                    <Card
                      raised
                      background
                      style={{ backgroundImage: "url(" + lawn + ")" }}
                    >
                      <CardBody background>
                        <h6 className={classes.category}>Summer@SaMi 2020</h6>
                        <h3 className={classes.cardTitle}>
                          Program Poster
                        </h3>
                        <p className={classes.textCenter}>
                          Click button below to view our poster
                        </p>
                        <a className="link" href={poster} target="_blank" rel="noopener noreferrer">
                            <Button round color="rose">
                                <FormatAlignLeft className={classes.icons} />View PDF
                            </Button>
                        </a>
                      </CardBody>
                    </Card>
                  </GridItem>
                  <GridItem xs={12} sm={6} md={6}>
                    <Card
                      raised
                      background
                      style={{ backgroundImage: "url(" + piece + ")" }}
                    >
                      <CardBody background>
                        <h6 className={classes.category}>Summer@SaMi 2020</h6>
                        <h3 className={classes.cardTitle}>
                          FAQ
                        </h3>
                        <p className={classes.category}>
                          Click button below to view FAQ
                        </p>
                        <a className="link" href="https://docs.google.com/document/d/1yUFUXhub6TutIXbuAAc2pprZBiozVJRlC_xFYeKekck/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                            <Button round color="rose">
                                <FormatAlignLeft className={classes.icons} />View FAQ
                            </Button>
                        </a>
                      </CardBody>
                    </Card>
                  </GridItem>
                  
                </GridContainer>
            </Fragment>
        );
    }
}



export default withStyles(featuresStyle)(SummerAtSaMiCards);

// export default compose(
//     withStyles(style),
//     withStyles(contactUsStyle),
// )(ContactSection)