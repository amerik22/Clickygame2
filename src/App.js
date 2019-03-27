import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Friends from "./friends.json";
import "./App.css";

class App extends React.Component {
  state = {Friends,
  count: 0,
  bestScore: 0,
  ids: []}

  showFriends = () => {
    this.setState({Friends});
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
    console.log("new", this.state.count);
  };
  
  bestScoreUpdate = () => {
    if(this.state.count >= this.state.bestScore) {
      this.setState({bestScore: this.state.count});
    } else {
      this.setState({count: 0});
    }
  };
  
  resetGame =  () => {
    this.setState({ count: 0});
    this.setState({ ids: [] });
  }
  
  handleImgClick = (id) => {
  console.log("click");
  this.setState({friends: this.shuffleFriends(Friends) })
  console.log(id);
  //If Else
  if(!this.state.ids.includes(id)) {
   this.state.ids.push(id);
    this.handleIncrement();
  } else{
    this.resetGame();
    this.bestScoreUpdate();
  }
  }

  shuffleFriends = Friends => {
    let i = Friends.length -1;
    while (i > 0) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = Friends[i];
      Friends[i] = Friends[j];
      Friends[j] = temp;
      i--;
    }
    return Friends
  }
  

render() {
  return (
    <Wrapper>
      <Header/>
    <h2>Score: {this.state.count}  | Best Score: {this.state.bestScore} </h2> 
      <div className= "grid-container">
      {this.state.Friends.map(Friend =>(<Card
        id={Friend.id}
        name={Friend.name}
        image={Friend.image}
        handleImgClick={this.handleImgClick}
      />))}
      </div>
    </Wrapper>
  );
  }}

  

export default App;
