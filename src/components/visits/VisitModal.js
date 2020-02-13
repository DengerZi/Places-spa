import React from 'react';
import Modal from 'react-modal';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { yellow700 } from 'material-ui/styles/colors';

import Container from '../Container';
import Title from '../Title';

export default class VisitModal extends React.Component {
  constructor(props){
    super(props);
    this.state = { open: true }
    this.closeModal = this.closeModal.bind(this)
  }

  openModal() {
    this.setState({
      open: true
    })
  }

  closeModal() {
    this.setState({
      open: false
    })
  }

  render(){
    return(
      <div>
        <Modal
        isOpen={this.state.open}
        >
          <Container>
            <div style={{'textAlign': 'left', 'marginTop': '2em'}}>
              <header>
                <Title />
                <h1>Cuéntanos de tu visita <span style={{'backgroundColor': yellow700, 'margin': '0 0.3em'}}>{this.props.place.title}</span></h1>
              </header>
              <div className="row">
                <div className="col-xs-4 col-sm-2 col-lg-1"></div>
                <div className="col-xs">
                  <TextField floatingLabelText="Cuéntanos qué te parecio este lugar" ref="observationField" multiLine={true} style={{'width': '100%'}} />
                  <div style={{'marginTop': '1em'}}>
                    <RaisedButton label='Guardar' secondary={true} />
                    <FlatButton label='Cancelar' style={{'marginLeft': '2em' }} onClick={this.closeModal} />
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Modal>
      </div>
    )
  }
}