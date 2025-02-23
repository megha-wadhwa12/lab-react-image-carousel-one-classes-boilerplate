import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// implement the class below
class Carousel extends Component {
  constructor(){
    super()
    //setting an initial state
    this.state = {
        currIndex: 0,
    }
  }
  increaseCount = ()=>{
    console.log("increase count")

    // if index is == length of image - 1 then bring it back to 0th index
    if(this.state.currIndex == images.length - 1){
        this.setState({
            currIndex : 0,
        })    
    } else{
            this.setState({
                currIndex: this.state.currIndex + 1
            })
        }
  }
  decreaseCount = ()=>{
    console.log("decrease count")

    // if index is == length of image - 1 then bring it back to 0th index
    if(this.state.currIndex == 0){
        this.setState({
            currIndex : images.length -1,
        })    
    } else{
            this.setState({
                currIndex: this.state.currIndex - 1
            })
        }
  }

  render(){
    return(
        <>
        <div className="carousel-container flex">
            <div className="leftArrow arrowDiv flex"  onClick={this.decreaseCount}>
                <ArrowBackIosIcon />
            </div>
            <div className="rightArrow arrowDiv flex" onClick={this.increaseCount}>
                <ArrowForwardIosIcon/>
            </div>
            <h2 className="title">{images[this.state.currIndex].title}</h2>
            <h4 className="caption">{images[this.state.currIndex].subtitle}</h4>
            <img src={images[this.state.currIndex].img} alt="" />
        </div>
        </>
    )
  }
}

export default Carousel;