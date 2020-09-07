import React, { useState } from 'react';
import { Row, Col, Container } from 'reactstrap';
import classnames from 'classnames';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
const Example = (props) => {
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
					<Col><h2>Professional Summary</h2></Col>
				</Row>
				<Row>
					<Col><p>A talented  UI/UX developer with proven success in planning and executing application and web site development, UX design, and content direction. Possesses a solid understanding of front-end development and user experiences. A hands-on producer that works closely with marketing managers, product managers, and software teams. Passionate about the intersection of UX, design, and technology. Has a comprehensive understanding of UI/UX concepts, including user-centered design, UI design, usability testing, information architecture, and user/task analysis.</p></Col>
				</Row>
			</Container>
			<Footer />
		</ >
	);
}

export default Example;