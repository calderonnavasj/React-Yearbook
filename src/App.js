import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Wrap from './Wrap';
import Person from './Person';

export default class App extends Component{

  constructor(){
    super();
    this.state={
        message: 'Class of the year'
    }
  }

  componentDidMount() {
    this.setState({
      message: "Class of"
    })
  }

  render() {
  return (
    <div className="App">
      <Header year="2019" title="Class of"/>
      <Wrap>
        <Person name="Axel Rose" band="Guns N' Roses" biography="Hello, I am Axel Rose, the Guns N' Roses's singer." image="https://d1bi2srgse3uhl.cloudfront.net/uploads/2018/07/image5b5e5e084a826.jpg"/>
        <Person name="James Hetfield" band="Metallica" biography="Hello, I am James. The famous singer of the band Metallica." image="https://i0.wp.com/metalsound.es/wp-content/uploads/2018/02/james-hetfield.jpg?fit=800%2C449"/>
        <Person name="Dave Mustaine" band="Megadeth" biography="Hello, I am Dave. The famous singer of the band Megadeth." image="https://cdn1.eldia.com/062019/1560837469308.jpg"/>
        <Person name="Chester Bennington" band="Linkin Park" biography="Hello, I am Chester. The famous singer of the band Linkin Park." image="https://www.intouchweekly.com/wp-content/uploads/2017/12/chester-bennington-e1547063113947.jpg?fit=200%2C1"/>
        <Person name="Billie Joe" band="Green Day" biography="Hello, I am Billie. The famous singer of the band Green Day." image="https://www.rockandpop.cl/wp-content/uploads/2018/02/20130227_012550_PEOPLE-ARMSTRONG-e1518882547660-400x360.jpg"/>
        <Person name="Corey Taylor" band="Slipknot" biography="Hello, I am Corey. The famous singer of the band Slipknot." image="https://townsquare.media/site/366/files/2018/09/coreytaylor6.jpg"/>
        <Person name="Bruce Dickinson" band="Iron Maiden" biography="Hello, I am Bruce. The famous singer of the band Iron Maiden." image="https://pixel.nymag.com/imgs/daily/vulture/2017/12/05/05-bruce-dickinson-iron-maiden.w700.h700.jpg"/>
        <Person name="ZP Theart" band="Dragonforce" biography="Hello, I am ZP. The famous singer of the band Dragonforce." image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/ZP_Theart.jpg/220px-ZP_Theart.jpg"/>
        <Person name="Freddy Mercury" band="Queen" biography="Hello, I am Freddy. The famous singer of the band Queen." image="https://img.etimg.com/thumb/msid-69025502,width-643,imgsize-242706,resizemode-4/freddiemercury.jpg"/>
        <Person name="John Lennon" band="The Beattles" biography="Hello, I am John. The famous singer of the band The Beatles." image="https://www.biografiasyvidas.com/biografia/l/fotos/lennon_john_1.jpg"/>
        <Person name="Brian Johnson" band="AC/DC" biography="Hello, I am Brian. The famous singer of the band AC/DC." image="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Brian_Johnson.jpg/280px-Brian_Johnson.jpg"/>
        <Person name="Anthony Kiedis" band="Red Hot Chili Peppers" biography="Hello, I am Anthony. The famous singer of the band Red Hot Chili Peppers." image="https://image.cnbcfm.com/api/v1/image/104896723-Anthony_Kiedis.jpg?v=1532563712"/>        
      </Wrap>
    </div>
  );
}
}