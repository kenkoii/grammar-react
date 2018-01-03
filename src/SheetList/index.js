import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { sheetService } from '../services/index';

export class SheetList extends Component {

    constructor() {
        super();
        this.state = {
            sheets: []
        }
        this.deleteSheet = this.deleteSheet.bind(this);
    }

    componentDidMount() {
        sheetService.getSheets().on('value', snapshot => {
            console.log(snapshot);
            let sheets = [];
            snapshot.forEach(data => {
                console.log('data: \n');
                console.log(data.val());
                // sheets[data.key] = data.val();
                let sheet = data.val();
                sheet['id'] = data.key;
                sheets.push(sheet);
            });
            this.setState({sheets: sheets});
        })
    }

    deleteSheet(key) {
        sheetService.deleteSheet(key);
    }

    render() {
        const { sheets } = this.state;
        return (
            <div className="row">                
                {sheets.map((sheet) => 
                    <div key={sheet.id} className="col-sm-4" style={{padding: 10 + 'px'}}>
                        <div className="card w-100">
                            <div className="card-header">
                                <h5 style={{margin: 0}}>{sheet.name}
                                {console.log(sheet)}
                                <span aria-hidden="true" name={sheet.id} className="close" aria-label="Delete" onClick={() => { this.deleteSheet(sheet.id)}}>&times;</span>
                                </h5>
                            </div>
                            <div className="card-body">
                                <p className="card-text">{sheet.questionCount + ' questions'}</p>
                                <Link to={'/sheet/' + sheet.id}><button className="btn btn-primary">View Sheet</button></Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )
    }
};



        // const sheets = [
        //     {
        //         id: '1',
        //         name: 'Example Sheet #1',
        //         spreadsheetId: '1GKWQ0WEec0icTm2fGfLmNYrR44v6Lch8btTG2v7Bs0s',
        //         sheetName: 'TestSheetForSystem',
        //         questionCount: 30 
        //     },{
        //         id: '2',
        //         name: 'Example Sheet #2',
        //         spreadsheetId: '1GKWQ0WEec0icTm2fGfLmNYrR44v6Lch8btTG2v7Bs0s',
        //         sheetName: 'TestSheetForSystem',
        //         questionCount: 30 
        //     },{
        //         id: '3',
        //         name: 'Example Sheet #3',
        //         spreadsheetId: '1GKWQ0WEec0icTm2fGfLmNYrR44v6Lch8btTG2v7Bs0s',
        //         sheetName: 'TestSheetForSystem',
        //         questionCount: 30 
        //     },{
        //         id: '4',
        //         name: 'Example Sheet #4',
        //         spreadsheetId: '1GKWQ0WEec0icTm2fGfLmNYrR44v6Lch8btTG2v7Bs0s',
        //         sheetName: 'TestSheetForSystem',
        //         questionCount: 30 
        //     }
        // ];