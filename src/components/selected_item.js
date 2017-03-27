import React, { Component } from 'react';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import { ukini } from '../actions/index';
import { Image, Label, Segment } from 'semantic-ui-react'



class SelectedMovie extends Component {

	addDefaultSrc(ev){
 	 ev.target.src = 'https://placehold.it/150x150'
	}

	constructor(props) {
		super(props);
		
	}
	componentWillUnmount() {
		// dispatch actiona da foundmovie stavi ko null bugfix 
		this.props.ukini();
	}

	render() {
	
		if(!this.props.foundMovie && !this.props.foundSerie) {
			return (
					<div></div>
			);
		}
		if(this.props.foundMovie) {
			return (
				<div className='col-md-6 col-md-offset-3'>
				  <Segment raised>
					       <Image onError={this.addDefaultSrc} src={`https://image.tmdb.org/t/p/w500_and_h500_bestv2/${this.props.foundMovie.poster_path}`}  height='600' />
					
						<h4>{this.props.foundMovie.title}</h4>
						<p>  <Label color='green' ribbon>Overview</Label>{this.props.foundMovie.overview}</p>
						
					 	<Label color='green' ribbon>Production Company</Label> {this.props.foundMovie.production_companies.map((prod, i) =><ul><li key={i}> {prod.name}</li></ul>)}
					 	<p> <Label color='green' ribbon>Tagline</Label> {this.props.foundMovie.tagline}</p>
					 	<p><Label color='green' ribbon><strong>Budget: </strong></Label>  ${this.props.foundMovie.budget}</p>
					
				
				
			    </Segment>
			    </div>
			);
		}
		return (
			<div className='col-md-6 col-md-offset-3'>
					  <Segment raised>
					<img onError={this.addDefaultSrc} src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${this.props.foundSerie.poster_path}`}/>
					<h4>{this.props.foundSerie.name}</h4>
					<p>  <Label color='green' ribbon>Overview</Label>{this.props.foundSerie.overview}</p>
						<Label color='green' ribbon>Seasons</Label> {this.props.foundSerie.seasons.map((seas, i) =><ul><li key={i}>Season {seas.season_number} -Air Date {seas.air_date}</li></ul>)}
					<p><Label color='green' ribbon>First Air Date</Label>{this.props.foundSerie.first_air_date}</p>	
				</Segment>
			</div>
		);
	}
}

function mapStateToProps (state) {
	return {
		foundMovie: state.foundMovie,
		foundSerie: state.foundSerie
	};
}
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ ukini }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectedMovie);