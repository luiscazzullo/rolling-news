import React, {Component} from 'react';

class Clock extends Component {
    
    constructor(props) {
      super(props);
      this.state = {date: new Date()}
      this.days =  ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];
      this.months = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']  
    }  

    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        date: new Date(),        
      });      
    }
          
    render() {       
      return (
        <div>               
          {this.days[this.state.date.getDay()]} {this.state.date.getDate()} de {this.months[this.state.date.getMonth()]} de {this.state.date.getFullYear()} - {this.state.date.toLocaleTimeString()}
        </div>
      );
    }
  }
  
  export default Clock;