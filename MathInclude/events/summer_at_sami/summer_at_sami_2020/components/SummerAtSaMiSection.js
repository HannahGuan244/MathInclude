import React, { PureComponent } from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import classNames from "classnames";
import compose from 'recompose/compose'
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import withStyles from "@material-ui/core/styles/withStyles";
import featuresStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/featuresStyle.jsx";

import SummerAtSaMiCards from "./SummerAtSaMiCards";
import SummerAtSaMiCarousel from "./SummerAtSaMiCarousel";

const style = {
    paddingCustom: {
        padding: "30px 0"
    },
    paddingTop: {
        paddingTop: "30px"
    },
    eventFont: {
        fontSize: "18px",
        textAlign: "left"
    },
    cardTitle: {
      fontWeight: "700"
    }
}

class SummerAtSaMiSection extends PureComponent {

    render() {
        const {
            classes,
        }  = this.props;

        return (
            <div className={classes.contactContent, classes.paddingCustom}>
              <div className={classes.container}>
                <GridContainer justify="center">
                  <GridItem
                    xs={12}
                    sm={8}
                    md={8}
                    className={
                      classNames(classes.mlAuto, classes.mrAuto, classes.textCenter)
                    }
                  > 
                    <h2 className={classes.title}>Program Description</h2>
                    <p className={classes.eventFont}>
                      Our summer camps are <b>FREE</b> for all students in grades K-8. They are supervised by college professors and led by high school students and national/regional math contest winners. If your child is in grades K-8, please fill out this form.  
                      <br />
                      <br />
                      For low income families, the {" "} 
                      <Link to='/casting-your-future-scholarship' target="_blank" className="link">
                          <b>Casting Your Future Scholarship</b>
                      </Link>
                      {" "} are provided to cover transportation costs and lunch, for any options you sign up.
                      <br />
                      <br />
                      <b>Three Weeks</b>(Monday to Friday): 
                      <ol>
                        <li>July 20-July 24</li>
                        <li>July 27-July 31</li>
                        <li>August 3-August 7</li>
                      </ol>
                      <ul>
                        <li>All three weeks are the same so you just need to sign up for one week.</li>
                      </ul>
                      <b>Two Sessions</b>:
                      <ol>
                        <li>9-12 AM Core Courses</li>
                        <li>1-4 PM Enrichment Courses</li>
                      </ol>
                      <ul>
                        <li>You can sign up for the AM session, the PM sessions, or both.</li>
                        <li>If you sign up for both AM and PM sessions, your child needs to bring his/her own lunch.</li>
                        <li>Every class has a 20 student limit. These who sign up after the 20 student limit will be automatically waitlisted.</li>
                      </ul>
                      <br />
                      For <b>9-12 AM</b> Core Courses(K-8) there are <b>six classes</b>:
                      <ul>
                        <li>Tadpoles (K-1)</li>
                        <li>Whirlpool (2-3)</li>
                        <li>Andromeda (4-5)</li>
                        <li>Prealgebra (6-8)</li>
                        <li>Algebra I (6-8)</li>
                        <li>Algebra II (6-8)</li>
                      </ul>
                      For <b>1-4 PM</b> Enrichment Courses(K-8) there are <b>three classes</b>:
                      <ul>
                        <li>Math Games and Fun (K-5)</li>
                        <li>Python for Kids (3-5)</li>
                        <li>C++ for Beginner (6-8)</li>
                      </ul>
                      <br /> 
                      <b>Address</b>: Basis San Antonio Shavano, 4114 Lockhill Selma Rd, San Antonio, TX 78230.  
                    </p>
                    <SummerAtSaMiCards />
                  </GridItem>
                </GridContainer>
              </div>
            </div>
        );
    }
}



// export default withStyles(null)(SummerAtSaMiSection);

export default compose(
    withStyles(style),
    withStyles(featuresStyle),
    // withStyles(sectionPillsStyle),
)(SummerAtSaMiSection);