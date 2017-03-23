import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {searchMovie, top10Movies, top10Series, searchSeries} from '../actions/index';

class Form extends Component {
	constructor(props) {
		super(props);


		this.state = ({ searchTerm: '' });
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);

		// fetch actions to get top10 movies / top10 series
		this.props.top10Movies();
		this.props.top10Series();
	}
	
	handleSubmit (event) {
		event.preventDefault();
		if(this.props.search === 'movies') {
			this.props.searchMovie(this.state.searchTerm);
			this.setState({ searchTerm: ''});
		} else {
			this.props.searchSeries(this.state.searchTerm);
			this.setState({ searchTerm: ''});
		}

	}
	handleChange (event) {
		this.setState({ searchTerm: event.target.value });
	}
	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input onChange={this.handleChange} value={this.state.searchTerm} className='form-control' type='text' placeholder='Find Movies/TV Shows'/>
				</form>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({searchMovie, top10Movies, top10Series, searchSeries}, dispatch);
}

export default connect(null, mapDispatchToProps)(Form);