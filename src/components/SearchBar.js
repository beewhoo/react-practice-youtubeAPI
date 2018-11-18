import React from 'react'


class SearchBar extends React.Component{
  state = {term: ''}

  onChangeInput  = (event) => {
    this.setState({term: event.target.value})

  }


  onSubmitForm = (event) => {
    event.preventDefault()
    this.props.onFormSubmit(this.state.term)
  }

  render(){
    return(
      <div className ='search-bar ui segment'>
        <form onSubmit = {this.onSubmitForm} className= 'ui form'>
          <div className = 'field'>
              <label> Video Search </label>
              <input value={this.state.term}type = 'text' onChange={this.onChangeInput}/>
          </div>
        </form>
      </div>
    )
  }
}


export default SearchBar
