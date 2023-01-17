import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from './box/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import "./TaskManager.css";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#ffffec',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function TaskManager() {
  return (
    <div id="taskmanager">
      <h1>Organizador de tareas</h1>
      
      <div id="calendar">
        <Grid container spacing={1}>
          <Grid item xs={12} id="title">
            <Item>Martes 17 de enero</Item>
          </Grid>
          <Grid item xs={2}>
            <Item>7:00 - 8:00</Item>
          </Grid>
          <Grid item xs={10} id="box-a7">
            <Item>ACTIVIDADES</Item>
          </Grid>
          <Grid item xs={2}>
            <Item>8:00 - 9:00</Item>
          </Grid>
          <Grid item xs={10} id="box-a8">
            <Item>ACTIVIDADES</Item>
          </Grid>
          <Grid item xs={2}>
            <Item>9:00 - 10:00</Item>
          </Grid>
          <Grid item xs={10} id="box-a9">
            <Item>ACTIVIDADES</Item>
          </Grid>
          <Grid item xs={2}>
            <Item>10:00 - 11:00</Item>
          </Grid>
          <Grid item xs={10} id="box-a10">
            <Item>ACTIVIDADES</Item>
          </Grid>
          <Grid item xs={2}>
            <Item>11:00 - 12:00</Item>
          </Grid>
          <Grid item xs={10} id="box-a11">
            <Item>ACTIVIDADES</Item>
          </Grid>
          <Grid item xs={2}>
            <Item>12:00 - 13:00</Item>
          </Grid>
          <Grid item xs={10} id="box-a12">
            <Item>ACTIVIDADES</Item>
          </Grid>
          <Grid item xs={2}>
            <Item>13:00 - 14:00</Item>
          </Grid>
          <Grid item xs={10} id="box-a13">
            <Item>ACTIVIDADES</Item>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default TaskManager;
