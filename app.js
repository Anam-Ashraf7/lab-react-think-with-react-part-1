
const reactContainer = document.getElementById('react-container');

const Container = () =>{
    return React.createElement(`div`,null,`Hey Kalvians! Welcome to React Learning`,
       React.createElement(`div`,null,`Let's rock and roll`)
       );
}


ReactDOM.render("Hello! Welcome to React. My name is Anam",reactContainer);
ReactDOM.render(React.createElement(Container),reactContainer);

class ReactContainer extends React.Component{
    
      render(){
          return React.createElement(`div`,null,`Hey Kalvians`,
          React.createElement(`div`,null,`Let's rock and roll with classes`)
          );
      }
    
  }

ReactDOM.render(React.createElement(ReactContainer),reactContainer);



  