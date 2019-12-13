import React from 'react';

import Row from '../../components/grid/Row';
import Column from '../../components/grid/Column';

export default props => (
    <Row>
        <Column>
            <h2 className="section-title">Home</h2>
        </Column>
        <Column>
            <div className="page-section">
                &nbsp;<br></br>&nbsp;<br></br>&nbsp;
            </div>
        </Column>
        <Column sizes="12-12-12-6-6">
            <div className="page-section">
                &nbsp;<br></br>&nbsp;<br></br>&nbsp;
            </div>
        </Column>
        <Column sizes="12-12-12-6-6">
            <div className="page-section">
                &nbsp;<br></br>&nbsp;<br></br>&nbsp;
            </div>
        </Column>
        <Column sizes="12-12-12-6-6">
            <div className="page-section">
                &nbsp;<br></br>&nbsp;<br></br>&nbsp;
            </div>
        </Column>
        <Column sizes="12-12-12-6-6">
            <div className="page-section">
                &nbsp;<br></br>&nbsp;<br></br>&nbsp;
            </div>
        </Column>
    </Row>
);