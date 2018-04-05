import React, { Component } from 'react';
import { Grid, Row, Col, FormControl, PageHeader } from 'react-bootstrap'

export default class PaymentDetails extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <Grid>
                <Row>
                    <Col md="12">
                        <PageHeader>
                            <small>Podaci o sistemu placanja</small>
                        </PageHeader>
                    </Col>
                </Row>
                <Row>
                    <Col md="2"></Col>
                    <Col md="4">
                        <FormControl type="text"/>
                    </Col>
                    <Col md="2"></Col>
                    <Col md="4">
                        <FormControl type="text"/>
                    </Col>
                </Row>
            </Grid>
        );
    }
}