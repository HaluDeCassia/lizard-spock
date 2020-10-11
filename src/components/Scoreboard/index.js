import React from 'react';
import PropTypes from 'prop-types';

import Grid from '../Grid';

import { Col, Name, Points, Title } from './styles';

export default function Scoreboard({ points }) {
  return (
    <React.Fragment>
      <Title>Placar</Title>
      <Grid>
        <Col className="left-col"> 
          <Name>Você</Name>
          <Points>{points.player}</Points>
        </Col>
        <Col>
          <Name>Computador</Name>
          <Points>{points.computer}</Points>
        </Col>
      </Grid>
    </React.Fragment>
  );
}

Scoreboard.propTypes = {
  points: PropTypes.object.isRequired
};