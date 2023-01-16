import React from 'react';
import ReactDOM from 'react-dom'; 
import App from './App';
import {Formik} from 'formik';


class AppClick extends React.Component{   

    
    handleClick() {  // switch the value of the showModal state
       this.getComponent();
      }

      getComponent() { 
        console.log('get component call on local');     
          return <App />;        
      }
   
    render() {
        return (            
                <Button onClick={this.handleClick} />           
        )
      }
}

export default AppClick;