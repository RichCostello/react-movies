import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

export default class Header extends Component {
	render() {
		return (
			<div className='header'>
				<IndexLink activeClassName='active' to='/'>Movies</IndexLink>
				{  ` | ` }
				<Link activeClassName='active' to='/tvshows'>Tv Shows</Link>
			</div>
		);
	}
}
