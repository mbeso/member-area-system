import React, { Component } from 'react';
import { Grid, Row, Col, FormControl, Image, PageHeader } from 'react-bootstrap'

export default class PersonalDetails extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Grid>
                <Row>
                    <Col md="12">
                        <PageHeader>
                            <small>Licni podaci</small>
                        </PageHeader>
                    </Col>
                </Row>
                <Row>
                    <Col md="2">Ime</Col>
                    <Col md="4">
                        <FormControl type="text" />
                    </Col>
                    <Col md="2">Ocevo ime</Col>
                    <Col md="4">
                        <FormControl type="text" />
                    </Col>
                </Row>
                <Row>
                    <Col md="2">Prezime</Col>
                    <Col md="4">
                        <FormControl type="text" />
                    </Col>
                    <Col md="2">Datum rodjenja</Col>
                    <Col md="4">
                        <FormControl type="text" />
                    </Col>
                </Row>
                <Row>
                    <Col md="2">Broj telefona</Col>
                    <Col md="4">
                        <FormControl type="text" />
                    </Col>
                    <Col md="2">E-mail</Col>
                    <Col md="4">
                        <FormControl type="text" />
                    </Col>
                </Row>
            </Grid>
        );
    }
}