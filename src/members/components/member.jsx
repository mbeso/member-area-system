import React, { Component } from 'react';
import { Grid, Row, Col, FormControl, Image } from 'react-bootstrap'
import imgSrc from '../styles/images/thumbnail.png'
import PersonalDetails from './member-personal-details';
import PaymentDetails from './member-payment-datails';

import '../styles/member.css';

export default class Member extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
            <Grid>
                <Row>
                    <Col md="3">
                        <Image src={imgSrc} rounded />
                    </Col>
                </Row>
            </Grid>
            <PersonalDetails/>
            <PaymentDetails/>
            </div>
        )
    }
}