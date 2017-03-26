import React, { Component } from 'react';
import { connect } from 'react-redux';
import Item from './item';
import SearchForm from './search_form';
import { Grid } from 'semantic-ui-react';

class TvShows extends Component {
	top10Shows (serie) {
		return (
			<Item key={serie.id} name={serie.name} item={serie}/>
		);
	}
	foundSeries(serie){
		return (
			<Item key={serie.id} name={serie.name} item={serie}/>
		);
	}

	render() {
		if(!this.props.series) {
			if(!this.props.top10Series) {
			return (
				<div>
					<SearchForm/>
				</div>
			);
		}
		return (
			<div>
				<SearchForm />
				<Grid padded={true}  centered={true}>
					{this.props.top10Series.results.slice(0, 10).map(this.top10Shows)}
				</Grid>
			</div>
		);
		}
		return (
			<div>
				<SearchForm />
				<div className='row movies-border'>
				<Grid padded={true}  centered={true}>
					{this.props.series.results.slice(0, 4).map(this.foundSeries)}
				</Grid>	
				</div>
			</div>
		);
	}
}

function mapStateToProps (state) {
	return { 
		top10Series: state.top10Series,
		series: state.series
	};
}

export default connect(mapStateToProps)(TvShows);