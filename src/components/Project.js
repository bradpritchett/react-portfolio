import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

const Project = (props) => {
	console.log(props)
	return (
		<Row>
			<Col sm="12">
				<Card body>
					<CardTitle><h2>{props.title}</h2></CardTitle>
					<CardText>{props.body}</CardText>
					<Button href={props.link} target="_blank">Visit</Button>
				</Card>
			</Col>

		</Row>
	);
};

export default Project;