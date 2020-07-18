import React,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ConditionalSection from './sections/conditional'

function Hello (props){
    //return <h2>Hola mundo desde ReactJS</h2>
    return <h3>{props.title}</h3>
}

/*const HelloInline = (props) => <h4>{props.title}</h4>

class HelloClass extends Component {
  render(){
    return <h2>{this.props.title}</h2>
  }
}*/

class Contador extends Component {
  constructor(props){
    super(props)
    console.log(this.props.contadorInicial);
    this.state = { contador: this.props.contadorInicial }
    setInterval(() => {
      this.setState({ contador: this.state.contador + 1})
    }, 1000)
  }
  render(){
    /*
    const contador = 0
    return <span>{contador}</span>}
    */
    //return <span>Primer componente con state {this.state.contador}.</span>
    return <ContadorNumero numero={this.state.contador} />
  }
}

Contador.defaultProps = {
  contadorInicial: 0
}

class ContadorNumero extends Component {
  render(){
    console.log('ContadorNumero render()')
    return <span>Renderizando con un objeto hijo contador valor {this.props.numero}.</span>
  }
}

/*class ContadorNuevo extends Component {
  state = { contador: 0 };
  render(){
    return(
      <div>
        <h2>El contador nuevo esta en {this.state.contador}.</h2>
      <div>
    );
  }
}*/

class Text extends Component {
  render(){
    // const textoCondicional = this.props.boolean ? 'Cierto' : 'Falso'
    // const textoActivado = this.props.isActivated ? 'On' : 'Off'
    // const mapaNumeros = this.props.arrayOfNumbers.map(n => n * 3)
    //const mapaNumeros = this.props.arrayOfNumbers.map(this.props.multiply)
    const {
      arrayOfNumbers,
      //isActivated,
      multiply,
      objectWithInfo,
      text,
      title
    } = this.props
    const mapaNumeros = arrayOfNumbers.map(multiply)

    return(
      <div>
        {/*
          <p>{this.props.number}</p>
          <p>{this.props.text}</p>
          <p>{JSON.stringify(this.props.boolean)}</p>
          <p>{textoCondicional}</p>
          <p>{textoActivado}</p>
          <p>{this.props.arrayOfNumbers.join(', ')}</p>
          */}
        {title}
        <p>{text}</p>
        <p>{mapaNumeros.join(', ')}</p>
        <p>{mapaNumeros.join(', ')}</p>
        <p>{objectWithInfo.key1}</p>

      </div>
    );
  }
}

Text.defaultProps = {
  text: 'Este es mi texto por defecto',
  title: <h1>Este es mi titulo por defecto</h1>
}

class App extends Component {
  render() {
    return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a className="App-link"
            href="http://tmbprd.atnubis.com/Encomiendas"
            target="_blank"
            rel="noopener noreferrer" >
            <Hello title="Old school JavaEE pages." />
            {/* <Hello title="Hello from React with function and props" />
             <HelloInline title="Hello from React with inline function" />
             <HelloClass title="Hello from React with class constructor" />*/}
          </a>
          {/*<p>Primer componente con state</p>
          <Contador /> */}
          <ConditionalSection />
          <Contador contadorInicial={100}/>
          <h1>
          <Text
            arrayOfNumbers={[2,3,10]}
            boolean={true}
            isActivated
            number={2}
            multiply = {(number) => number * 4}
            objectWithInfo={{key1: 'value #1', key2: 'value #2'}}
            //text='String desde componente'
            //title={<h1>Este es mi titulo</h1>}
            />
          </h1>
        </header>
      </div>
    );
  }
}

export default App;
