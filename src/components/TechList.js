import React, {Component} from 'react'
import TechItem from './techItem'


class TechList extends Component {
  state = {
    newTech: '',
    techs: [
      'Node.js',
      'ReactJS',
      'React Native'
    ]
  }
  handleInputChange = e => {
    this.setState({newTech: e.target.value})

  }
  handleSubmit = e =>{
    e.preventDefault()

    this.setState({techs:[...this.state.techs, this.state.newTech],
    newTech: ''})  //seta uma array inteira nova, devido ao estado de imutabilidade que o React requer

  }
  handleDelete = (tech) => {
    this.setState({ techs: this.state.techs.filter(t => t !== tech)})
  }



  render(){
    return (
      <form onSubmit={this.handleSubmit}>
      <h1>{this.state.newTech}</h1>
      <ul>
        {this.state.techs.map(tech => <TechItem key={tech} tech={tech} onDelete={() => this.handleDelete(tech)}/>)}
        {/* propriedade para ser reconhecido no arquivo techitem */}

        </ul>
      <input type='text'
      onChange={this.handleInputChange}
      value={this.state.newTech}/>
      <button type="submit">Enviar</button>
    </form>
    )
  }

}
export default TechList
