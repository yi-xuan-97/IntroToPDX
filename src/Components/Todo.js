import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import { CardHeader } from "@material-ui/core";
import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import { Popover } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import {
  createStore,
  action,
  useStoreActions,
  useStoreState,
} from "easy-peasy";
import Dialog from "@material-ui/core/Dialog";

import "../Styles/Todo.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: "2%",
    marginBottom: "2%",
  },
  paper: {
    width: "30vw",
    height: "75vh",
    overflow: "auto",
  },
  button: {
    margin: theme.spacing(0.5, 0),
  },
  add: {},
  but: {
    position: "absolute",
    right: "15px",
    bottom: theme.spacing(10),
  },
  input: {
    width: "100%",
    // margin: "10%",
  },
}));

function not(a, b) {
  return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a, b) {
  return a.filter((value) => b.indexOf(value) !== -1);
}

function Todo() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([]);
  const [left, setLeft] = React.useState([]);
  const [right, setRight] = React.useState([]);

  const [add, setadd] = useState("");
  // const MemoizedInput = React.memo(InputComponent);

  const l = useStoreState((state) => state.todo);
  const r = useStoreState((state) => state.done);
  const setl = useStoreActions((actions) => actions.settodo);
  const setr = useStoreActions((actions) => actions.setdone);

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  const [open, setOpen] = React.useState(false);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleAllRight = () => {
    setRight(right.concat(left));
    setLeft([]);
  };

  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };

  const handleAllLeft = () => {
    setLeft(left.concat(right));
    setRight([]);
  };

  const customList = (items, title) => (
    <Paper className={classes.paper}>
      <List dense component="div" role="list">
        <CardHeader className={classes.cardHeader} title={title} />
        <Divider />
        {items.map((value) => {
          const labelId = `transfer-list-item-${value}-label`;

          return (
            <ListItem
              key={value}
              role="listitem"
              button
              onClick={handleToggle(value)}
            >
              <ListItemIcon>
                <Checkbox
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`${value}`} />
            </ListItem>
          );
        })}
        <ListItem />
      </List>
    </Paper>
  );

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  function SimpleDialog(props) {
    const classes = useStyles();
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
      onClose(selectedValue);
    };

    const handleTextFieldChange = (event) => {
      setadd(event.target.value);
    };

    return (
      // <Popover
      //   className="todo_pop"
      //   // id={id}
      //   open={open}
      //   // anchorEl={anchorEl}
      //   onClose={handleClose}
      //   anchorOrigin={{
      //     vertical:  400,
      //     horizontal: 500,
      //   }}
      // >
      //   <div>

      //   <Typography className={classes.typography}>
      //     The content of the Popover.
      //   </Typography>
      //   <TextField
      //     className={classes.input}
      //     onChange={(e) => {
      //       console.log(e.target.value);
      //       setadd(e.target.value);
      //     }}
      //     id="standard-basic"
      //     label="Cannon beach"
      //   />
      // </Popover>
      <Dialog
        onClose={handleClose}
        aria-labelledby="simple-dialog-title"
        open={open}
        // className={classes.dialog}
      >
        <DialogTitle id="simple-dialog-title">
          ADD YOUR OWN PLAN into TO DO
        </DialogTitle>
        <DialogContent>
          <TextField
            className={classes.input}
            value={add}
            onChange={handleTextFieldChange}
            id="standard-basic"
            label="Cannon beach"
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              handleClose();
              left.push(add);
              console.log(left);
            }}
            color="primary"
          >
            ADD
          </Button>
        </DialogActions>
      </Dialog>
    );
  }

  useEffect(() => {
    setLeft(l);
    setRight(r);
  }, []);

  useEffect(() => {
    setl(left);
    setr(right);
  }, [left, right, setl, setr]);

  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      alignItems="center"
      className={classes.root}
    >
      <Grid item>{customList(left, "TO DO :)")}</Grid>
      <Grid item>
        <Grid container direction="column" alignItems="center">
          <Button
            variant="outlined"
            size="small"
            className={classes.button}
            onClick={handleAllRight}
            disabled={left.length === 0}
            aria-label="move all right"
          >
            ≫
          </Button>
          <Button
            variant="outlined"
            size="small"
            className={classes.button}
            onClick={handleCheckedRight}
            disabled={leftChecked.length === 0}
            aria-label="move selected right"
          >
            &gt;
          </Button>
          <Button
            variant="outlined"
            size="small"
            className={classes.button}
            onClick={handleCheckedLeft}
            disabled={rightChecked.length === 0}
            aria-label="move selected left"
          >
            &lt;
          </Button>
          <Button
            variant="outlined"
            size="small"
            className={classes.button}
            onClick={handleAllLeft}
            disabled={right.length === 0}
            aria-label="move all left"
          >
            ≪
          </Button>
        </Grid>
      </Grid>
      <Grid item>{customList(right, "DONE!!")}</Grid>
      <Grid item className={classes.but}>
        <Fab className={classes.add} color="primary" aria-label="add">
          <AddIcon onClick={handleClickOpen} />
        </Fab>
        <SimpleDialog open={open} onClose={handleClose} />
      </Grid>
    </Grid>
  );
}

export default Todo;
