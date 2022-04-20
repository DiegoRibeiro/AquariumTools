import React from "react";
import "./Calculator.css";

class Calculator extends React.Component {
	constructor() {
		super();
		this.state = {
			height: '',
			capacity: '',
			shape: '',
			length: '',
			width: ''
		}

		this.handleChangeHeight = this.handleChangeHeight.bind(this);
		this.handleChangeCapacity = this.handleChangeCapacity.bind(this);
		this.handleChangeShape = this.handleChangeShape.bind(this);
		this.handleChangeLength = this.handleChangeLength.bind(this);
		this.handleChangeWidth = this.handleChangeWidth.bind(this);
		this.reset = this.reset.bind(this);
	}

	handleChangeHeight(e) {
		this.setState({
			height: e.target.value
		});
	}

	handleChangeCapacity(e) {
		this.setState({
			capacity: e.target.value
		});
	}

	handleChangeShape(e) {
		this.setState({
			shape: e.target.value,
		}, () => {
			if(this.state.shape === "square") {
				this.setState({
					length: Math.sqrt(this.state.capacity * 1000 / this.state.height),
					width: Math.sqrt(this.state.capacity * 1000 / this.state.height)
				})
			}
		});
	}

	handleChangeLength(e) {
		this.setState({
			length: e.target.value
		}, () => {
			this.setState({
				width: this.state.capacity * 1000 / this.state.height / this.state.length
			});
		});
	}

	handleChangeWidth(e) {
		this.setState({
			width: e.target.value
		}, () => {
			this.setState({
				length: this.state.capacity * 1000 / this.state.height / this.state.width
			});
		})
	}

	reset() {
		this.setState({
			height: '',
			capacity: '',
			shape: '',
			length: '',
			width: ''
		});
	}

	render() {
		return (
			<main className="Calculator">
				<section>
					<h2>Step 1:</h2>
					<div className="Row">
						<div>
							<label>Height</label>
							<input type="text" value={this.state.height} onChange={this.handleChangeHeight} disabled={this.state.height && this.state.capacity && this.state.shape}/>
							<label>cm</label>
						</div>
						<div>
							<label>Capacity</label>
							<input type="text" value={this.state.capacity} onChange={this.handleChangeCapacity} disabled={this.state.height && this.state.capacity && this.state.shape}/>
							<label>L</label>
						</div>
						<div>
							<label>Shape</label>
							<select value={this.state.shape} onChange={this.handleChangeShape} disabled={(this.state.height && this.state.capacity && this.state.shape) || (!this.state.height || !this.state.capacity)}>
								<option value="">choose a shape</option>
								<option value="rectangle">Rectangle</option>
								<option value="square">Square</option>
							</select>
						</div>
					</div>
				</section>

				<section className="FormGroup">
					<h2>Step 2:</h2>
					<div className="Row">
						<div>
							<label>Length</label>
							<input type="number" value={this.state.length} onChange={this.handleChangeLength} disabled={!this.state.height || !this.state.capacity || !this.state.shape} />
							<label>cm</label>
						</div>
						<div>
							<label>Width</label>
							<input type="number" value={this.state.width} onChange={this.handleChangeWidth} disabled={!this.state.height || !this.state.capacity || !this.state.shape} />
							<label>cm</label>
						</div>
						<div>
							<button onClick={this.reset}>Reset</button>
						</div>
					</div>
				</section>
			</main>
		);
	}
}

export default Calculator;