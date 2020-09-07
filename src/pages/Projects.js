import React, { useState } from 'react';
import { Row, Col, Container } from 'reactstrap';
import classnames from 'classnames';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Project from "../components/Project";

const Projects = (props) => {
	const [activeTab, setActiveTab] = useState('1');

	const toggle = tab => {
		if (activeTab !== tab) setActiveTab(tab);
	}

	return (
		<>
			<Header />
			<Row>
				<Col>
					<Navigation />
				</Col>
			</Row>
			<Container>
				<Row>
					<Col><h2>Projects</h2></Col>
				</Row>
				<Row>
					<Col>
						<Project
							title={"Monkey Mind"}
							body={"My solo final project. Designed to utilize several of the course lessons including node, react and mongoose"}
							link={"https://frozen-stream-42440.herokuapp.com/"}
						/>
					</Col>
					<Col>
						<Project
							title={"Google Book Search"}
							body={"A challenging project designed to test our skills with React, API calls and state mangagement."}
							link={"https://intense-refuge-54809.herokuapp.com/"}
						/>
					</Col>
				</Row>
				<Row>
					<Col>
						<Project
							title={"Donut Finder"}
							body={"A group class project designed to utilize API keys and ajax calls"}
							link={"https://britt1216.github.io/donut-seeker/"}
						/>
					</Col>
					<Col>
						<Project
							title={"Chatify"}
							body={"Another group class project designed to highlight dynamic database construction."}
							link={"https://project-2-chatify.herokuapp.com/"}
						/>
					</Col>
				</Row>
				<Row>
					<Col>
						<Project
							title={"Note Taker"}
							body={"An interesting project that challenged the student's ability to program for Express and utilize local storage."}
							link={"https://brad-pritchett-note-taker.herokuapp.com/notes"}
						/>
					</Col>
					<Col>
						<Project
							title={"Whether There's Weather"}
							body={"An early project focused on the student's ability to make server side API calls."}
							link={"https://bradpritchett.github.io/brad-pritchett-weather/"}
						/>
					</Col>
				</Row>
			</Container>
			<Footer />
		</ >
	);
}

export default Projects;