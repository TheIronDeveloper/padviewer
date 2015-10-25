/**
 * An Element that handles adding a monster to our selected monsters array
 * Simple Component
 */

import React from 'react';


export default React.createClass({

	getInitialState() {
		return {
			selectedMonsterId: 1
		}
	},

	renderMonsterList() {
		return this.props.monsterList.map((monster) => {
			return (<option key={monster.id} value={monster.id}>{monster.name}</option>);
		});
	},

	addMonster(event) {
		if (event) {
			event.preventDefault();
		}

		let monsterId = this.state.selectedMonsterId;
		this.props.addMonster(monsterId);
	},

	updateSelectedMonster(event) {
		let monsterId = event.target.value;
		this.setState({
			selectedMonsterId: monsterId
		});
	},

	updateSelectedMonsterById(event) {
		let monsterId = event.target.value;
		this.setState({
			selectedMonsterId: monsterId
		});
	},

	render() {

		return (<div className="padviewer-addMonster">

			<div>Add Monster</div>
			<form onSubmit={this.addMonster}>
				<select className="padviewer-addMonster-select" onChange={this.updateSelectedMonster} value={this.state.selectedMonsterId}>
						{this.renderMonsterList()}
				</select>
				<input type="number" value={this.state.selectedMonsterId} onChange={this.updateSelectedMonsterById} />
				<button onClick={this.addMonster}>Submit</button>
			</form>
		</div>);
	}
});