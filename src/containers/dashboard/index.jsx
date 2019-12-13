import React from 'react';

import Row from '../../components/grid/Row';
import Column from '../../components/grid/Column';

export default props => (
    <Row>
        <Column>
            <h2 className="section-title">Dashboard</h2>
        </Column>
        <Column sizes="12-6-6-3-3">
            <div className="dashboard-box-info">
                &nbsp;<br></br>&nbsp;<br></br>&nbsp;
            </div>
        </Column>
        <Column sizes="12-6-6-3-3">
            <div className="dashboard-box-success">
                &nbsp;<br></br>&nbsp;<br></br>&nbsp;
            </div>
        </Column>
        <Column sizes="12-6-6-3-3">
            <div className="dashboard-box-warning">
                &nbsp;<br></br>&nbsp;<br></br>&nbsp;
            </div>
        </Column>
        <Column sizes="12-6-6-3-3">
            <div className="dashboard-box-danger">
                &nbsp;<br></br>&nbsp;<br></br>&nbsp;
            </div>
        </Column>
        <Column sizes="6-6-6-6-6">
            <Row>
                <Column>
                    <div className="page-section">
                        &nbsp;<br></br>&nbsp;<br></br>&nbsp;
                    </div>
                </Column>
                <Column>
                    <div className="page-section">
                        &nbsp;<br></br>&nbsp;<br></br>&nbsp;
                    </div>
                </Column>
            </Row>
        </Column>
        <Column sizes="6-6-6-6-6">
            <Row>
                <Column>
                    <div className="page-section">
                        &nbsp;<br></br>&nbsp;<br></br>&nbsp;
                    </div>
                </Column>
                <Column>
                    <div className="page-section">
                        &nbsp;<br></br>&nbsp;<br></br>&nbsp;
                    </div>
                </Column>
            </Row>   
        </Column>
    </Row>
);