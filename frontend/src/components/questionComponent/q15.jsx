import React, { Component } from 'react';
import Header from '../headerComponent/header';
import './questions.css';
import { Button, Progress } from 'reactstrap';
import { AvForm } from 'availity-reactstrap-validation';
import { Redirect } from 'react-router'
//import _ from 'lodash';
import tuples from '../../api/touples';
 import '../../pages/pages.css';
 import Fade from 'react-reveal/Fade';
 import Pulse from 'react-reveal/Pulse';

 class Q15 extends Component {
  
  constructor(props) {
    super(props);

    this.handleValidSubmit = this.handleValidSubmit.bind(this);
    this.state = {      
      fireRedirect: false,
      qA: '',
      qB: '',
      qAid: '',
      qBid: '',
      qAcat: '',
      qBcat: ''

 
    };
  }

  handleValidSubmit(event, values) {

    event.preventDefault()
    this.setState({ fireRedirect: true, values })
    const idA = this.state.qAid;
    const idB = this.state.qBid;

    const eventPush = event.target.id;  
    const chosen = event.target.name;
 


    //record the chosen button and the rejected button
    if(localStorage.getItem('chosenRejected' === null)){
      if (chosen === 'A')
        {
          localStorage.setItem('chosenRejected', idA + idB);
      
        } else {
           localStorage.setItem('chosenRejected', idB + idA);
        }
     } else {

      if (chosen === 'A')
      {
         var chosenPreviousA = localStorage.getItem('chosenRejected');
         localStorage.setItem('chosenRejected', chosenPreviousA + ','  + idA + idB);
      } else {
        var chosenPreviousB = localStorage.getItem('chosenRejected');

           localStorage.setItem('chosenRejected', chosenPreviousB + ',' + idB + idA);
  }
}
    // add up the chosen categories

    if(eventPush === "EWD"){
      values = "EWD"
      if(localStorage.getItem('EWD') === null ){
        localStorage.setItem('EWD', 1);
       } else {
        var aCount = parseInt(localStorage.getItem('EWD'));
        localStorage.setItem('EWD', aCount + 1);
       }
      } else {
      if(eventPush === "ESJ"){
        values = "ESJ"
        if(localStorage.getItem('ESJ') === null ){
          localStorage.setItem('ESJ', 1);
         } else {
          var bCount = parseInt(localStorage.getItem('ESJ'));
          localStorage.setItem('ESJ', bCount + 1);
         }
    } else {
      if(eventPush === "CC"){
        values = "CC"
        if(localStorage.getItem('CC') === null ){
          localStorage.setItem('CC', 1);
         } else {
          var cCount = parseInt(localStorage.getItem('CC'));
          localStorage.setItem('CC', cCount + 1);
         }
    } else {
      if(eventPush === "CL"){
        values = "CL"
        if(localStorage.getItem('CL') === null ){
          localStorage.setItem('CL', 1);
         } else {
          var dCount = parseInt(localStorage.getItem('CL'));
          localStorage.setItem('CL', dCount + 1);
         }

      } else {
      if(eventPush === "TSS"){
        values = "TSS"
        if(localStorage.getItem('TSS') === null ){
          localStorage.setItem('TSS', 1);
         } else {
          var eCount = parseInt(localStorage.getItem('TSS'));
          localStorage.setItem('TSS', eCount + 1);
         }
      } else {
        if(eventPush === "PAJ"){
          values = "PAJ"
          if(localStorage.getItem('PAJ') === null ){
            localStorage.setItem('PAJ', 1);
           } else {
            var fCount = parseInt(localStorage.getItem('PAJ'));
            localStorage.setItem('PAJ', fCount + 1);
           } 
        } else {

        if(eventPush === "SRI"){
          values = "SRI"
          if(localStorage.getItem('SRI') === null ){
            localStorage.setItem('SRI', 1);
          } else {
            var gCount = parseInt(localStorage.getItem('SRI'));
            localStorage.setItem('SRI', gCount + 1);
          }
        }
        }
       }
       }
      } 
    }
  }

  //alert(values + idA); 
  


 
  }
 
  componentWillMount() {
    // const Q11 = tuples[0][0][0].qText;
    // const Q11ID = tuples[0][0][0].catID;

    // const printQ12 = tuples[0][1][0].qText;
    // const printQ12ID = tuples[0][1][0].catID;

     //alert(Q11 + Q11ID + printQ12 + printQ12ID);
    //const shuffledQ = _.shuffle(quizQuestions[0].questions);
   //alert(shuffledQ[0].qText);
    
   
       
    this.setState({
       qA: tuples[14][0][0].qText,
       qAcat: tuples[14][0][0].catID,
       qAid: tuples[14][0][0].qID,

       qB: tuples[14][1][0].qText,
       qBcat: tuples[14][1][0].catID,
       qBid: tuples[14][1][0].qID
          
     });
// alert(this.state.answerOptions);
  }

 
  

 

  


  render() {

    const { from } = this.props.location.state || '/'

    const { fireRedirect } = this.state

    // left button image 
  var btnClassLeft = ''
  var leftSwitch = this.state.qAcat

      switch(leftSwitch) {
        case 'EWD':
        btnClassLeft = 'quizbtnL bgBlue';
             break;
        case 'ESJ':
        btnClassLeft =  'quizbtnL bgGreen';
             break;
        case 'CC':
        btnClassLeft = 'quizbtnL bgPurple';
             break;
        case 'CL':
        btnClassLeft =  'quizbtnL bgPink';
             break;
        case 'TSS':
        btnClassLeft =  'quizbtnL bgRed';
             break;
        case 'PAJ':
        btnClassLeft =  'quizbtnL bgOrange';
             break;
        case 'SRI':
        btnClassLeft =  'quizbtnL bgYellow';
             break;
  }


  // right button image 
  var btnClassRight = ''
  var rightSwitch = this.state.qBcat

      switch(rightSwitch) {
        case 'EWD':
        btnClassRight = 'quizbtnR bgBlue';
             break;
        case 'ESJ':
        btnClassRight =  'quizbtnR bgGreen';
             break;
        case 'CC':
        btnClassRight = 'quizbtnR bgPurple';
             break;
        case 'CL':
        btnClassRight =  'quizbtnR bgPink';
             break;
        case 'TSS':
        btnClassRight =  'quizbtnR bgRed';
             break;
        case 'PAJ':
        btnClassRight =  'quizbtnR bgOrange';
             break;
        case 'SRI':
        btnClassRight =  'quizbtnR bgYellow';
             break;
  }


    return (
         <div>
          <Header /> 
           <hr/>
          {/* <br /> */}
          <div className="aboutWrapper">
          <h3 id="center">Which statement better reflects your core values?</h3>
          </div>
          <div className="progressBarDiv">
     <div className="center">

            <div className="text-center">15 of 21</div>
            <Progress color="success" value={15} max={21} />
            </div>
           </div>
          <br />
          <div className="wrapper">
 
              <AvForm className="text-form" >
                <Button className={btnClassLeft} name='A' onClick={this.handleValidSubmit} outline color="secondary" id={this.state.qAcat}>{this.state.qA}</Button>      
        
                <Button className={btnClassRight} name='B' onClick={this.handleValidSubmit} outline color="secondary"id={this.state.qBcat}>{this.state.qB}</Button>      
              </AvForm>
  
           </div>

        {fireRedirect && (<Redirect to={from || '/quiz/q16'}/>
        )}
</div>
      );
  }
}

export default Q15;