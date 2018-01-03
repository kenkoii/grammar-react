import React, {Component} from 'react';

export class QuestionNavbar extends Component {
    render() {
        return (
            <div className="card mb-2 mx-auto" style={{position: 'fixed', bottom: '0px', margin: '0px !important'}}>
                <div className="card-body mx-auto" style={{padding: '1.25rem 1rem 1.25rem 1rem'}}>
                    <div className="btn-group" role="group">
                        
                        <button className="btn btn-primary" style={{margin: "1px"}}>Button</button>
                        <button className="btn btn-primary" style={{margin: "1px"}}>Button</button>
                        
                    </div>
                </div>
            </div>
        )
    }
};
