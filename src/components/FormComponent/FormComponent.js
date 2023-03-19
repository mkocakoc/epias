import React from 'react';
import styles from './FormComponent.module.css';
import * as formData from "../../data/form-data";
import DataTables from "datatables.net-dt";

class FormComponent extends React.Component {
  table = null;

  constructor(props) {
    super(props);

    this.state = {
      toggleAddNewForm: false,
      inputValues: {
        textbox1: '',
        textbox2: '',
        textbox3: '',
        textbox4: '',
      }
    }
  }

  componentDidMount() {
    this.initializeDataTable();
  }

  initializeDataTable() {
    if (this.table != null) {
      return;
    }

    let data = formData.data;
    let storedData = localStorage.getItem('formDatas');

    if (storedData != null) {
      data = data.concat(JSON.parse(storedData));
    }

    this.table = new DataTables('#formTable', {
      data: data,
      ordering: false,
      dom: '',
      columns: [
        { data: 'col1' },
        { data: 'col2' },
        { data: 'col3' },
        { data: 'col4' },
      ]
    });
  }

  handleInputChange = (event) => {
    const { id, value } = event.target;
    this.setState(prevState => ({ inputValues: { ...prevState.inputValues, [id]: value } }));
  }

  addNewRow() {
    const newRow = {
      col1: this.state.inputValues.textbox1,
      col2: this.state.inputValues.textbox2,
      col3: this.state.inputValues.textbox3,
      col4: this.state.inputValues.textbox4,
    };

    this.table.row.add(newRow).draw(false);

    this.saveRowToLocalStorage(newRow);
  }

  toggleDiv() {
    this.setState(prevState => ({ isToggleDivVisible: !prevState.isToggleDivVisible }));
  }

  saveRowToLocalStorage(row) {
    debugger;

    let data = localStorage.getItem('formDatas')
    if (data == null) {
      data = [];
    } else {
      data = JSON.parse(data);
    }

    data.push(row);

    localStorage.setItem('formDatas', JSON.stringify(data));
  }

  render() {
    return (
        <div className={styles.FormComponent}>
          <table id="formTable" className="display" width={'100%'}>
            <thead>
            <tr>
              <th>No</th>
              <th>Kontrat</th>
              <th>Teklif</th>
              <th>Data</th>
            </tr>
            </thead>
          </table>

          <div className='form-group'>
            <div id="togglediv" style={ { display: this.state.isToggleDivVisible ? 'block' : 'none'} }>
              <div className='toggledivMain'>
                <div className='formRow'>

                  <input type="text" className="form-control" id="textbox1" onChange={this.handleInputChange} placeholder='No Giriniz'/>
                </div>
                <div className='formRow'>

                  <input type="text" className="form-control" id="textbox2" onChange={this.handleInputChange} placeholder='Kontrat Giriniz' />
                </div>
                <div className='formRow'>

                  <input type="text" className="form-control" id="textbox3" onChange={this.handleInputChange} placeholder='Teklif Giriniz'/>
                </div>
                <div className='formRow'>

                  <input type="text" className="form-control" id="textbox4" onChange={this.handleInputChange} placeholder='Data Giriniz' />
                </div>
                <button id="save-button" className="btn btn-success"  onClick={this.addNewRow.bind(this)}>Kaydet</button>
              </div>

            </div>
            <button id="toggle-div" className="btn btn-primary" onClick={this.toggleDiv.bind(this) }>Yeni Ekle</button>
          </div>
        </div>
    );
  }
}

FormComponent.propTypes = {};

FormComponent.defaultProps = {};

export default FormComponent;
