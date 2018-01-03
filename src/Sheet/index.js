import React, {Component} from 'react';
// import { Link } from 'react-router-dom';
import { sheetService } from '../services';
import { firebaseDb } from '../firebase';
import { Navbar } from '../Navbar';
import { MultilineText } from '../MultilineText';
import swal from 'sweetalert2'

export class Sheet extends Component {
    
    constructor() {
        super();
        this.state = {
            loading: true,
            selected: 0,
            sheet: null,
            questions: null,
            showComments: false
        }
        this.handleCommentChange = this.handleCommentChange.bind(this);
        this.updateSheet = this.updateSheet.bind(this);
    }

    componentDidMount() {
        // TODO: Loading Screen while fetching
        let ref = firebaseDb.ref('grammar-check-system/sheets/' + this.props.match.params.id);
        // console.log(this.props.match.params.id);
        ref.on('value', (snapshot) => {
            console.log(snapshot.val());
            let sheet = snapshot.val();
            sheetService.getSheetValues(sheet.spreadsheetId, sheet.sheetName + `!A2:Z`)
                    .then(result => {
                        console.log(result);
                        this.setState({
                            loading: false,
                            sheet: sheet,
                            questions : result.data.values
                        });
                    })
                    .catch(error => {
                        console.log(error);
                    });
        });
    }

    updateSheet() {
        sheetService.saveSheet(this.props.match.params.id, this.state.sheet)
                    .then(() => {
                        swal({
                            title: 'Success!',
                            text: 'Your comment has been saved.',
                            type: 'success'
                        });
                    });
    }

    renderCommentsTable() {
        let keys = Object.keys(this.state.sheet.comments);
        return(
            keys.map((key) => 
                <tr key={key}>
                    <td>{key}</td>
                    <td>{this.state.sheet.comments[key]}</td>
                </tr>
            )
        )
        
    }

    handleCommentChange(e) {
        const { name, value } = e.target;
        let sheet = Object.assign({}, this.state.sheet);

        sheet.comments[name] = value;

        this.setState({
            sheet: sheet
        });
    }
    
    render() {
        let selected = this.state.selected;
        return (
            <div>
                <Navbar/>
                <div className="container-fluid">
                    {
                        this.state.loading &&
                        <div>
                            Loading...
                        </div>
                    }
                    <div className="row">
                        {
                            this.state.sheet !== null && this.state.loading === false && !this.state.showComments &&
                            <div className="col-sm">
                                <div className="card card-inverse w-100 mb-2 fixed">
                                    <div className="card-body">
                                        <h5 className="card-text">Test ID: {this.state.questions[selected][1]}</h5>
                                        <h5 className="card-text">Level: {this.state.questions[selected][2]}</h5>
                                        <kbd className="card-text"><MultilineText text={this.state.questions[selected][8]}/></kbd>
                                    </div>
                                </div>
                                <div style={{overflowY: "auto", height: "calc(100vh - 310px)"}}>
                                    <div className="card w-100 mb-2">
                                        <div className="card-body">
                                            <p className="card-text">Segment ID: {this.state.questions[selected][3]}</p>
                                            <p className="card-text">Segment ID definitions: {this.state.questions[selected][4]}</p>
                                            <p className="card-text"><MultilineText text={this.state.questions[selected][5]} /></p>
                                        </div>
                                    </div>
                                    <div className="card w-100 mb-2">
                                        <div className="card-body">
                                            <p className="card-text">{this.state.questions[selected][6]}   {this.state.questions[selected][7]}</p>
                                        </div>
                                    </div>
                                    <div className="card w-100 mb-2">
                                        <div className="card-body">
                                            <table className="table">
                                                <tbody>
                                                    <tr>
                                                        <td>{this.state.questions[selected][10]}</td>
                                                        <td>{this.state.questions[selected][18]}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>{this.state.questions[selected][11]}</td>
                                                        <td>{this.state.questions[selected][19]}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>{this.state.questions[selected][12]}</td>
                                                        <td>{this.state.questions[selected][20]}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>{this.state.questions[selected][13]}</td>
                                                        <td>{this.state.questions[selected][21]}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="card w-100 mb-2">
                                        <div className="card-body">
                                            <p className="card-text"><MultilineText text={this.state.questions[selected][16]}/></p>
                                        </div>
                                    </div>
                                    <div className="card w-100 mb-2">
                                        <div className="card-body">
                                            <p className="card-text">{this.state.questions[selected][17]}</p>
                                        </div>
                                    </div>
                                    <div className="card w-100 mb-2">
                                        <div className="card-body">
                                            <p className="card-text"><MultilineText text={this.state.questions[selected][9]}/></p>
                                        </div>
                                    </div>
                                    <div className="card w-100 mb-2">
                                        <div className="card-body">
                                            <textarea className="w-100 form-control" name={this.state.questions[selected][1]} placeholder="Comment here Naomiさん..." rows="7" value={this.state.sheet.comments[this.state.questions[selected][1]]} onChange={this.handleCommentChange}/>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            
                        }
                        {
                            this.state.sheet !== null && this.state.loading === false && this.state.showComments &&
                            <div className="col-sm">
                                <div style={{overflowY: "auto", height: "calc(100vh - 200px)"}}>
                                    <div className="card card-inverse w-100 mb-2">
                                        <div className="card-body">
                                            <table className="table table-inverse">
                                                <thead className="thead-inverse">
                                                    <tr>
                                                        <th>#</th>
                                                        <th>Comment</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                {
                                                    this.renderCommentsTable()
                                                }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
                {
                    this.state.sheet !== null && this.state.loading === false &&
                    <div className="card w-100 mb-2 mx-auto fixed-bottom">
                        <div className="card-body mx-auto" style={{padding: '1.25rem 1rem 1.25rem 1rem'}}>
                            <div className="btn-group" role="group">
                                <button disabled={selected === 0} onClick={(e) => {e.preventDefault(); this.setState({selected: selected-1, showComments: false})}} className="btn btn-primary" style={{margin: "1px"}}>&laquo; Back</button>
                                <button className="btn btn-primary" style={{margin: "1px"}} onClick={this.updateSheet} type="button"><span className="fa fa-save"></span></button>
                                <button className="btn btn-primary" style={{margin: "1px"}} onClick={() => { this.setState({showComments: !this.state.showComments})}}><span className="fa fa-comments"></span></button>
                                <button disabled={selected === this.state.questions.length - 1} onClick={(e) => {e.preventDefault(); this.setState({selected: selected < this.state.questions.length ? selected + 1 : selected, showComments: false})}}className="btn btn-primary" style={{margin: "1px"}}>Next &raquo;</button>
                            </div>
                        </div>
                    </div>
                }
            </div>
           
        )
    }
};
