import React, { Component } from 'react';
import { connect } from 'react-redux';
import Item from './item';
import SearchForm from './search_form';
import { Grid } from 'semantic-ui-react';

class Movies extends Component {
	renderMovies(movie) {
		return (
		
			<Item FILM='film' key={movie.id} name={movie.title} item={movie}/>
	
		);
	}
	top10Movies(movie) {
		return (
			<Item FILM='film' key={movie.id} name={movie.title} item={movie}/>
		);
	}

	render() {
		if (!this.props.top10) {
			return (
				<div>
				<Grid padded='true'  centered='true'>
					<SearchForm search='movies'/>
					</Grid>
				</div>
			);
		}
		if (!this.props.movies) {
			return (
				<div>
					<SearchForm search='movies'/>
					
					  <Grid divided='horizontally' padded='true'  centered='true'>
				
						{this.props.top10.results.slice(0, 10).map(this.top10Movies)}

						</Grid>
			
				</div>
			);
		}
		return (
			<div>
				<SearchForm search='movies'/>
				<div className='row movies-border'>
				 <Grid divided='vertically' textAlign='left'>
					{this.props.movies.results.slice(0, 4).map(this.renderMovies)}
				</Grid>
				</div>
			</div>
		);
	}
}

function mapStateToProps (state) {
	return {
		movies: state.movies,
		top10: state.top10Movies
	};
}

export default connect(mapStateToProps)(Movies);