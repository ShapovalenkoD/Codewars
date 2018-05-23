// My solution
const React = require('react');

const EggList = (props) => {
	const { eggs } = props
	return (
		<ul>
			{eggs.map((egg, index) => (
				<EasterEgg name={egg} key={index} />
			))}
		</ul>
	)
};

const EasterEgg = (props) => {
	const { name } = props
	return (<li>{name}</li>)
};

// Top solution
const React = require('react');

const EasterEgg = ({ name }) => <li>{name}</li>;

const EggList = ({ eggs }) => (
	<ul>
		{eggs.map((egg, i) =>
			<EasterEgg key={i} name={egg} />
		)}
	</ul>
);