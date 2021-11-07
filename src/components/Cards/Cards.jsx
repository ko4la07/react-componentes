import React from 'react';
import {Card, CardContent, CardMedia, Button, Typography, makeStyles} from "@material-ui/core";
import './main.css'


const useStyle = makeStyles ({
  
CardContainer:{
  display: "inline-flex"
  },

CardLayout:{
  border: "indigo",
  borderRadius:"5px",
  height: "230px",
  width: "250px",
  marginTop:"30px",
  marginLeft:"20px",
  display: "inline-table",
},

CardImg:{
  border: "groove",
  margin: "10px",
  display:"flex",
  inlineSize: "-webkit-fill-available",
},

CardTitleContent:{
  border: "groove",
  width: "100px",
  height: "15px",
  display: "contents",
},

CardTitle:{
justifyContent: "center",
}, 

cardButton:{
  margin: "30px",
  border: "indigo",
  height: "30px",
  display: "inline-flex",
  // width: "100px",
  // padding: "revert",   
},


})


export const Cards = () => {
const classes = useStyle ();
  
  return (
<section  className={classes.CardContainer} >
      <Card className={classes.CardLayout}>
        <CardMedia  component="img"
          height="130"
          width="150"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
          className={classes.CardImg} />

        <CardContent className = {classes.CardTitleContent}>
          <Typography className= {classes.CardTitle} componente = "p" variant = "h6">hola</Typography>

        </CardContent>
          <Button variant="contained"className = {classes.cardButton}> click</Button>
      </Card>
    </section>
  );
};