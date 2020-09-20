import React from "react";

import Card from "../../components/UI/Card/Card";

import classes from "./Home.module.css";

const Home = (props) => {
  return (
    <div className={classes.MainLayout}>
      <Card
        name="Republique"
        sum="Modern French plates served in a striking space with communal tables, plus a bakery & cocktail bar."
        location="624 South La Brea Ave, Los Angeles, CA 90036"
        image="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        url="theboilingcrab.com"
      />
      <Card
        name="Providence"
        sum="Chef Michael Cimarusti's fine-dining destination delivers innovative seafood in a tranquil setting."
        location="5955 Melrose Ave, Los Angeles, CA 90038"
        image="https://www.stlmag.com/downloads/291284/download/0219_Elmwood_0016.jpg?cb=05f56521ae049e15a8f3d244cafb3822&w=640"
        url="providencela.com"
      />
      <Card
        name="Petit Trois"
        sum="Cozy spot with Parisian flare offers classic French fare & full bar from the team behind Trois Mec."
        location="718 N Highland Ave, Los Angeles, CA 90038"
        image="https://www.sundayguardianlive.com/wp-content/uploads/2020/07/3-Dib-restaurant-losses-edited.jpg"
        url="doordash.com"
      />
      <Card
        name="Osteria Mozza"
        sum="Lauded upscale Italian cuisine from chef Nancy Silverton in a bustling atmosphere."
        location="6602 Melrose Ave, Los Angeles, CA 90038"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTspWTXoTF9DPe-Mk81VkjH1QI2rH4bud5JgA&usqp=CAU"
        url="places.singleplatform.com"
      />
      <Card
        name="Antico"
        sum="Traditional pasta & rustic, wood-fired meats in an elegant but laid-back setting."
        location="4653 Beverly Blvd, Los Angeles, CA 90004"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQvnGR01cltipbru9LlpIvNdoVdSz6WNJRndg&usqp=CAU"
        url="antico-la.com"
      />
      <Card
        name="The Boiling Crab"
        sum="Casual small chain offering boiled-in-bag Cajun-spiced crawfish, oysters, shrimp & other shellfish."
        location="3377 Wilshire Blvd UNIT 115, Los Angeles, CA 90010"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIu7jM3YCG4slcHBEugMoD1cmpNbA4VMRnbw&usqp=CAU"
        url="theboilingcrab.com"
      />
    </div>
  );
};

export default Home;
