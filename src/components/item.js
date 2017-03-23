import React, { Component } from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { findMovieById, findSerieById } from '../actions/index';
import { Card, Icon, Grid } from 'semantic-ui-react'

 class Item extends Component {
 	findMovie(event) {
 		this.props.findMovieById(this.props.item.id);
 	}
 	findSerie(event) {
 		this.props.findSerieById(this.props.item.id);
 	}
	render() {
		if(this.props.FILM) {
			const url = `/movies/${this.props.item.id}`;
			const imgmov = (
				<div className='movie'>
				<img src={`https://image.tmdb.org/t/p/w300_and_h300_bestv2/${this.props.item.poster_path}`}/>
				</div>
				)
			return (
				<div className='card-a'>
				<Link onClick={this.findMovie.bind(this)} to={url}>
				<Card 
				  header={this.props.name}
				  image={imgmov}
				  raised={true}
				/>
				</Link>
			</div>
			);
		} else {
			const url = `/tvshows/${this.props.item.id}`;
			const imgtv = (
				<div className='movie'>
				<img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${this.props.item.poster_path}`}/>
				</div>
				)
			return (
				<div className='card-a'>
				<Link onClick={this.findSerie.bind(this)} to={url}>
					<Card 
					 header={this.props.name}
					  image={imgtv}
					  raised={true}
					/>
				</Link>
			</div>
			);
		}
		
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({ findMovieById, findSerieById }, dispatch);
}

export default connect(null, mapDispatchToProps)(Item);