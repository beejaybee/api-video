import React from 'react';

class SearchBar extends React.Component{
    state = {term : ''};

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmital(this.state.term)
    }


    onInputChange = (e) => {
    this.setState({term : e.target.value});
}

    render() {
        return (
            <div className='search-bar ui segment'>
                <form className='ui form' onSubmit={this.onFormSubmit}>
                    <div className='ui field'>
                        <label>Videos Search</label>
                        <input
                        value = {this.state.term}
                        type='text'
                        onChange={this.onInputChange} 
                        />
                      </div>
                </form>
            </div>
        )
    }
}

export default SearchBar