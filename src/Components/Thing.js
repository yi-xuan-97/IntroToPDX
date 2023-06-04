import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import Typography from "@material-ui/core/Typography";
import { NaturePeople, Store, Streetview } from "@material-ui/icons";

import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import { Button, Collapse } from "@material-ui/core";
import { useStoreActions, useStoreState } from "easy-peasy";
import { food, street, shop, nature } from "../Data";
import { Alert } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  paper: {
    textAlign: "left",
    padding: theme.spacing(2),
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  day: {
    // marginTop: theme.spacing(2)),
  },
  heading: {
    margin: "auto",
    fontSize: "20px",
  },
  alert: {
    width: "80%",
    marginLeft: "10%",
    marginTop: "2%",
    position: "absolute",
    zIndex: "1",
  },
  title: {
    height: theme.spacing(4),
    marginTop: "5%",
    fontSize: "20px",
  },
  web: {
    textAlign: "left",
  }
}));

function Things() {
  const classes = useStyles();

  const [todo, settodo] = useState([]);
  const l = useStoreState((state) => state.todo);
  const r = useStoreState((state) => state.done);
  const setl = useStoreActions((actions) => actions.settodo);
  const [check, setcheck] = useState([]);
  const [open, setopen] = useState(false);

  const list = (items) => {
    const handleAdd = (event) => {
      event.stopPropagation();
      const temp = event.target.parentNode.id;
      console.log(temp);
      if (temp.trim() !== "") {
        if (!check.some((v) => v === temp)) {
          todo.push(temp);
          check.push(temp);
        } else {
          setopen(true);
          setTimeout(function () {
            setopen(false);
          }, 3000);
        }
      }
    };

    return items.map((value) => {
      return (
        <Accordion>
          <AccordionSummary>
            <a href={value.url}>
              <img
                src={value.logo}
                alt={`logo of${value.title}`}
                onClick={(event) => event.stopPropagation()}
                width={90}
                height={80}
              />
            </a>
            <Typography className={classes.heading}>{value.title}</Typography>
            <Button
              data-button-key={value.title}
              className={classes.title}
              color="primary"
              onClick={handleAdd}
              id={value.title}
              size="large"
            >
              ADD
            </Button>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{value.description}{<p className={classes.web}>Click <a href={value.url}>here</a> to visit website</p>}</Typography>
          </AccordionDetails>
        </Accordion>
      );
    });
  };

  useEffect(() => {
    settodo(l);
    setcheck(l.concat(r));
  }, []);

  useEffect(() => {
    setl(todo);
  }, [todo, setl]);

  return (
    <div className="things">
      <Collapse in={open}>
        <Alert severity="error" className={classes.alert}>
          You already added this!
        </Alert>
      </Collapse>
      <Timeline align="alternate">
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography
              variant="h4"
              className={classes.day}
              color="primary"
            >
              Food and drink
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot>
              <FastfoodIcon color="primary" />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>{list(food)}</TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent>
            <Typography
              variant="h4"
              className={classes.day}
              color="primary"
            >
              Attraction
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <Streetview />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>{list(street)}</TimelineContent>
        </TimelineItem>


        <TimelineItem>
          <TimelineOppositeContent>
            <Typography
              variant="h4"
              className={classes.day}
              color="primary"
            >
              Shop
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary" variant="outlined">
              <Store />
            </TimelineDot>
            <TimelineConnector className={classes.secondaryTail} />
          </TimelineSeparator>
          <TimelineContent>{list(shop)}</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography
              variant="h4"
              className={classes.day}
              color="primary"
            >
              Nature View
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <NaturePeople />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent>{list(nature)}</TimelineContent>
          <TimelineSeparator />
        </TimelineItem>
      </Timeline>
    </div>
  );
}

export default Things;
