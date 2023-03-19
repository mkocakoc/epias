import React from 'react';
import styles from './TableComponent.module.css';
import DataTables from "datatables.net-dt";
import uploadImages from '../../assets/images/upload-solid.svg';
import optionsImages from '../../assets/images/gear-solid.svg';
import plusImages from '../../assets/images/plus-solid.svg';


class TableComponent extends React.Component {
	table = null;

	constructor(props) {
		super(props);

		this.state = {
			filterOptions: []
		}
	}

	componentDidMount() {
		this.initializeDataTable();
	}

	initializeDataTable() {
		if (this.table != null) {
			return;
		}

		this.table = new DataTables("#myTable", {
			dom: '',
			initComplete: () => {
				setTimeout(() => {
					const filterOptions = [];
					const columnFilter = [];

					const data = this.table.column(0).data().unique();
					for (let i = 0; i < data.length; i++) {
						filterOptions.push(data[i]);
					}

					const numColumns = this.table.columns().header().length;
					for (let i = 0; i < numColumns; i++) {
						const columnHeader = this.table.column(i).header();
						const columnName = columnHeader.innerText;
						columnFilter.push(columnName);
					}

					this.setState({
						filterOptions: filterOptions,
						columnFilter: columnFilter
					})
				})
			}
		});
	}

	onFilterChanged(event) {
		const value = event.target.value;

		if (value === "-1") {
			this.table.columns(0).search('').draw()
			return;
		}

		this.table.columns(0).search(value).draw()
	}

	onChangeCheckbox(event) {
		const value = event.target.value;

		let column = this.table.column(value);
		column.visible(!column.visible());		
	}

	toggleDiv() {
		this.setState(prevState => ({ isToggleDivVisible: !prevState.isToggleDivVisible }));
	}

	 
	



	render() {
		return (
			<div className={styles.TableComponent}>
				<div className='form-group'>
					<div id="toggleCheckdiv" style={{ display: this.state.isToggleDivVisible ? 'block' : 'none' }}>
						<div className='toggleCheckdivMain' onChange={this.onChangeCheckbox.bind(this)}>
							{this.state.filterOptions.map(i => (
								<div className='form-group'><input type={'checkbox'} className="form-check-input" value={i - 1} id={'input' + i} 
									 /> {this.state.columnFilter[i - 1]} </div>
							))}
						</div>
					</div>
					<select className='form-select form-select-sm' onChange={this.onFilterChanged.bind(this)}>
						<option value={-1}>Hepsi</option>
						{this.state.filterOptions.map(i => (
							<option value={i}>{i}</option>
						))}
					</select>
					<div className='tableOptionsArea'>
						<div className='tableRows'>
							<img className='uploadImages' src={uploadImages} alt='uploadImages' height={16} />
						</div>
						<div className='tableRows'>
							<img className='optionsImages' src={optionsImages} alt='optionsImages' height={16} onClick={this.toggleDiv.bind(this)} />
						</div>
						<div className='tableRows'>
							<img className='plusImages' src={plusImages} alt='plusImages' height={16} />
						</div>
					</div>
				</div>

				<table id="myTable" className="display" width={'100%'}>
					<thead>
						<tr>
							<th>ID</th>
							<th>Kontrat</th>
							<th>Teklif</th>
							<th>Data</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1</td>
							<td>4</td>
							<td>7</td>
							<td>7</td>
						</tr>
						<tr>
							<td>2</td>
							<td>5</td>
							<td>8</td>
							<td>8</td>
						</tr>
						<tr>
							<td>3</td>
							<td>6</td>
							<td>9</td>
							<td>9</td>
						</tr>
						<tr>
							<td>3</td>
							<td>12</td>
							<td>15</td>
							<td>15</td>
						</tr>
						<tr>
							<td>4</td>
							<td>16</td>
							<td>24</td>
							<td>16</td>
						</tr>
					</tbody>
				</table>
			</div >
		)
	}
}

TableComponent.propTypes = {};

TableComponent.defaultProps = {};

export default TableComponent;
