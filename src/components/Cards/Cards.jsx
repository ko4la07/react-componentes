import React from 'react';
import {Card, CardContent, CardMedia, Button, Typography} from "@material-ui/core";
import './main.css'



export const Cards = () => {
  
  return (
<section className= "card">
      <Card className= "cardLayout">
        <CardMedia clasName="cardImg" component="img"
          height="130"
          width="150"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="products" className = "cardImg"/>
        <CardContent className = "cardTitleContent">
          <Typography className = "cardTitle" componente = "p" variant = "h6">product</Typography>
        </CardContent>
      
          <Button   className = "cardButton" variant="contained"> click</Button>
        
      </Card>
    </section>
  );
};