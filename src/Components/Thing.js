import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { NaturePeople, Store, Streetview } from "@material-ui/icons";

import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  paper: {
    textAlign: "left",
    padding: theme.spacing(2),
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  day: {
    marginTop: theme.spacing(2),
  },
}));

function Things() {
  const classes = useStyles();

  return (
    <div className="things">
      <Timeline align="alternate">
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography
              variant="body2"
              className={classes.day}
              color="textSecondary"
            >
              Step 1
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot>
              <FastfoodIcon color="primary" />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-label="Expand"
                aria-controls="additional-actions1-content"
                id="additional-actions1-header"
              >
                <FormControlLabel
                  aria-label="Acknowledge"
                  onClick={(event) => event.stopPropagation()}
                  onFocus={(event) => event.stopPropagation()}
                  control={<Checkbox />}
                  label="I acknowledge that I should stop the click event propagation"
                />
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="textSecondary">
                  The click event of the nested action will propagate up and
                  expand the accordion unless you explicitly stop it.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-label="Expand"
                aria-controls="additional-actions2-content"
                id="additional-actions2-header"
              >
                <FormControlLabel
                  aria-label="Acknowledge"
                  onClick={(event) => event.stopPropagation()}
                  onFocus={(event) => event.stopPropagation()}
                  control={<Checkbox />}
                  label="I acknowledge that I should stop the focus event propagation"
                />
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="textSecondary">
                  The focus event of the nested action will propagate up and
                  also focus the accordion unless you explicitly stop it.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-label="Expand"
                aria-controls="additional-actions3-content"
                id="additional-actions3-header"
              >
                <FormControlLabel
                  aria-label="Acknowledge"
                  onClick={(event) => event.stopPropagation()}
                  onFocus={(event) => event.stopPropagation()}
                  control={<Checkbox />}
                  label="I acknowledge that I should provide an aria-label on each action that I add"
                />
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="textSecondary">
                  If you forget to put an aria-label on the nested action, the
                  label of the action will also be included in the label of the
                  parent button that controls the accordion expansion.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent>
            <Typography
              variant="body2"
              className={classes.day}
              color="textSecondary"
            >
              Step 2
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <Streetview />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                Street View
              </Typography>
              <Typography>Because it&apos;s awesome!</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent>
            <Typography
              variant="body2"
              className={classes.day}
              color="textSecondary"
            >
              Step 3
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary" variant="outlined">
              <Store />
            </TimelineDot>
            <TimelineConnector className={classes.secondaryTail} />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                Shopping
              </Typography>
              <Typography>Because you need rest</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography
              variant="body2"
              className={classes.day}
              color="textSecondary"
            >
              Step 4
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <NaturePeople />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                Nature
              </Typography>
              <Typography>Because this is the life you love!</Typography>
            </Paper>
          </TimelineContent>
          <TimelineSeparator />
        </TimelineItem>
      </Timeline>
    </div>
  );
}

export default Things;
