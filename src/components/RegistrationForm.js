import React from 'react';

export default class RegistrationFrom extends React.Component {
	render() {
		return (
			<form>
				<input type="text"/>
				<input type="password"/>
				<button type="submit">Submit</button>
			</form>
		)
	}
}