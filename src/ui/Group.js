import blacklist from 'blacklist';
import classnames from 'classnames';
import React from 'react';

module.exports = React.createClass({
	displayName: 'Group',
	propTypes: {
		children: React.PropTypes.node.isRequired,
		className: React.PropTypes.string,
		hasTopGutter: React.PropTypes.bool
	},
	render () {
		var className = classnames('Group', {
			'Group--has-gutter-top': this.props.hasTopGutter
		}, this.props.className);
		var props = blacklist(this.props, 'className');

		return (
			<div className={className} {...props} />
		);
	}
});
