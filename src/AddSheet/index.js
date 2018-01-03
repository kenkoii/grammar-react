import React, {Component} from 'react';
import { sheetService } from '../services';

export class AddSheet extends Component {
    constructor() {
        super();
        this.state = {
            showJumbotron: true,
            alert: null,
            name: '',
            sheetId: '',
            sheetName: ''
        };


        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearForm = this.clearForm.bind(this);
    }

    handleSubmit(e) {
            e.preventDefault();
            const { name, sheetId, sheetName } = this.state;
            sheetService.getSheetValues(sheetId, sheetName + '!A2:Z')
                .then((result) => {
                    console.log(result);
                    if(result.status !== 200) {
                        // this.setState({alert: ((result.data.error) ? result.data.error : null) });
                        this.setState({alert: result.data.error});
                    } else {
                        let comments = {};
                        result.data.values.forEach(question => {
                            comments[question[1].toString()] = "";
                        });
                        sheetService.addSheet(name, sheetId, sheetName, result.data.values.length, comments)
                                    .then(result => {
                                        this.setState(
                                            {
                                                alert: {code: 200, message: 'Sheet Added Successfully'},
                                                name: '',
                                                sheetId: '',
                                                sheetName: ''
                                            });
                                    })
                    }
                }, error => {
                    console.log('Caught Error: ' + error);
                })
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    clearForm() {
        this.setState(
            {
                alert: null,
                name: '',
                sheetId: '',
                sheetName: ''
            });
    }

    render() {

        const { name, sheetId, sheetName } = this.state;
        return (
            <div>
            {
                this.state.showJumbotron === true &&
                <div className="jumbotron d-none d-lg-block d-md-block">
                    <span aria-hidden="true" className="close" aria-label="Hide" onClick={e => {this.setState({showJumbotron: !this.state.showJumbotron})}}>&times;</span>
                    <h4 className="display-4">Add a sheet.</h4>
                    <p className="lead">Please fill out the form in order to track a sheet. 
                    You can hide this by pressing the '&times;' in the upper right corner.</p>
                    <hr className="my-4"/>
                    <div className="container bboard">
                        <div className="col-sm-6 float-left">
                            <form onSubmit={this.handleSubmit}>
                                {   this.state.alert !== null && 
                                    <div className={'alert alert-' + (this.state.alert.code === 200 ? 'success' : 'danger')} role="alert">{ this.state.alert.code !== 200 ? 'Error ' + this.state.alert.code + ': ' + this.state.alert.message : this.state.alert.message}</div>   
                                }
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Pack Name</label>
                                    <div className="input-group tp-hover">
                                        <input type="text" className="form-control" value={name} name="name" aria-describedby="emailHelp" placeholder="(e.g. Grammar Test 1)" onChange={this.handleChange}/>
                                        
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Spreadsheet ID</label>
                                    <div className="input-group tp-hover">
                                        <input type="text" className="form-control" value={sheetId} name="sheetId" aria-describedby="emailHelp" placeholder="(e.g. 1GKWQ0WEec0icTm2fGfLmNYrR44v6Lch8btTG2v7Bs0s)" onChange={this.handleChange}/>
                                        <span className="input-group-btn">
                                            <button disabled className="btn btn-secondary" type="button">!</button>
                                        </span>
                                        <div className="tp tp-ctr">
                                            <img src="/img/sheetid.png" alt="Sheet ID" style={{height: '200px'}} />
                                        </div>
                                    </div>
                                    <small id="emailHelp" className="form-text text-muted">Hover mouse for more information.</small>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Sheet Name</label>
                                    <div className="input-group tp-hover">
                                        <input type="text" className="form-control" value={sheetName} name="sheetName" aria-describedby="emailHelp" placeholder="(e.g. GrammarTest1)" onChange={this.handleChange}/>
                                        <span className="input-group-btn">
                                            <button disabled className="btn btn-secondary" type="button">!</button>
                                        </span>
                                        <div className="tp tp-ctr">
                                            <img src="/img/sheetname.png" alt="Sheet Name" style={{height: '200px'}} />
                                        </div>
                                    </div>
                                    <small id="emailHelp" className="form-text text-muted">Hover mouse for more information.</small>
                                </div>
                                <div className="form-group btm-btn-grp">
                                    <div className="float-right">
                                        <button className="btn btn-danger mr-2" onClick={this.clearForm} type="button">Clear</button>
                                        { /* <button className="btn btn-primary" onClick={(e) =>{ e.preventDefault(); this.addSheet("Example", "askdjhakjdsa", "Hello World")}}>Submit</button> */ }
                                        <button className="btn btn-primary">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-sm-6 float-left">
                            <div className="form-group">
                                <h4>Instructions:</h4>
                                <ol>
                                    <li>
                                        Add <kbd>kentoyfrecre@gmail.com</kbd> to the shared users of the Google Document.
                                    </li>
                                    <li>
                                        Get the ID of the Google sheet document.<br/>
                                        <small className="form-text text-muted">It can be found in the URL/Link of the Google Docs sheet. Hover over the <kbd>!</kbd> sign to see more details.</small>
                                    </li>
                                    <li>
                                        Make sure the name of the current sheet has no spaces. <br/>
                                        <small className="form-text text-muted">(e.g. GrammarSegment, TestSheet1)</small>
                                    </li>
                                    <li>
                                        Fill out the form and press submit.
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            }
            </div>
        )
    }
};
