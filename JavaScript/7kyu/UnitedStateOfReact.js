// My solution
const React = require('react');

class States extends React.Component {
	constructor(props) {
		super(props);
		this.united = this.unite.bind(this)
		this.state = {
			united: false
		}
	}

	unite() {
		const { united } = this.state
		this.setState({ united: !united })
	}

	render() {
		const { united } = this.state
		return (
			<div className="status">
				{united && "Code for everyone"}
				{!united && "Make America code again"}
			</div>
		)
	}
}

// Top solution
const React = require('react');

class States extends React.Component {

	state = {
		united: false
	}

	unite() {
		this.setState({
			united: true
		})
	}

	render() {
		const message = this.state.united ? 'Code for everyone' : 'Make America code again';
		return <div className="status" >{message}</div>
	}
}