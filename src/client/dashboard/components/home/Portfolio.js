import React, { Component } from 'react';
import Moment from 'react-moment';

class ComponentDashboardPortfolio extends Component {
	render() {

		const companies = [
			{
				_id : "1", 
				company_name: "Accenture",
				position 	: "Sr. Software Developer",
				start_date 	: new Date(2021, 5, 1),
				end_date    : undefined
			},
			{
				_id : "2", 
				company_name: "Instant Procurement Services Pvt Ltd.",
				position 	: "Deputy Manager - Technical",
				start_date 	: new Date(2017, 10, 24),
				end_date    : new Date(2021, 4, 31)
			},
			{
				_id : "3", 
				company_name: "LBT Mind Technologies Pvt Ltd.",
				position 	: "Java Developer",
				start_date 	: new Date(2016, 11, 10),
				end_date    : new Date(2017, 5, 10)
			}
		]
		const projects  = [
			{
				company_id : "1",
				project_name : "Help Me Choose",
				project_description : "Healthcare web application",
				description_points :[
					"Help me choose is a web application to facilitate the process of searching and enrolling the best health care plan for the member of the application.",
					"The app takes a user's entry such as age, address and other preferences based on that app suggests a recommended health insurance plan for the user.",
					"Help me choose also provides the option to locate an agent based on the agent's name, the agency name user can also request a new agent by providing information.",
					"It is developed using React Js and Fiber UI (front-end framework developed by the client).",
					"Designed functional, responsive, reusable components with all accessibility features for people with disabilities.",
					"Interact with the scrum team on a regular basis to understand and develop user stories.",
					"Provided release support worked on onshore hours whenever needed.",
					"Trained new joiners by giving them KT sessions and practice modules."
				],
				technologies : [
					{
						'name' : "ReactJS",
						'description' : "JavaScript Library"
					},
					{
						'name' : "Fiber UI",
						'description' : "Frontend framework developed by client"
					},
					{
						'name' : "AEM",
						'description' : "Adobe experience manager"
					},
					{
						'name' : "Jenkins",
						'description' : "DevOps tool"
					},
				]
			},
			{
				company_id : "2",
				project_name : "ProcMart",
				project_description : "B2B Ecommerce web application",
				description_points  :[
					"The ProcMart project is a technological B2B platform that links buyers in the industry to sellers through quotations with a good user interface.",
					"The application is developed using MeteorJS and ReactJs as frontend which helped to develop the UI/UX skill.",
					"designed schemas for CRUD operations using AutoForms with the database being MongoDB.",
					"Automated the billing system with emails which helped the operations department in better handling of invoices and tax calculations.",
					"Produced Excel sheets for sales and purchasing reports using software to reduce paperwork for Finance.",
					"Technical support and remote assistance, Worked with team to resolve complex problems and improve system stability, reliability and performance.",
					"Mentored new candidate by giving training sessions, practice modules and helped to obtain the knowledge of platform used.",
					"Along with software development I managed server deployments (using MUP) I also managed to gain expertise in basic functionalities of AWS such as EC2, ElasticIP.",
				],
				technologies : [
					{
						'name' : "MeteorJS",
						'description' : "Javascript-based Web Framework"
					},
					{
						'name' : "MongoDB",
						'description' : "NoSQL Database"
					},
					{
						'name' : "ReactJS",
						'description' : "JavaScript Library"
					},
					{
						'name' : "Materialize",
						'description' : "Front-end Framework"
					}

				]
			},
			{
				company_id : "2",
				project_name : "ProcBaba",
				project_description : "Website builder platform.",
				description_points :[
					"ProcBaba is a cloud-based website creation platform that simplifies creating professional websites with optimised SEO.",
					"Promote your company, present your art, create an online store or simply test new ideas.",
					"Development of models according to customer requirements with dynamic data.",
					"Structured, modified scalable database.",
					"Python interface written for database operations."
				],
				technologies : [
					{
						'name' : "Django",
						'description' : "Python-based Web Framework"
					},
					{
						'name' : "ReactJS",
						'description' : "JavaScript Library"
					},
					{
						'name' : "MySQL",
						'description' : "Database"
					},
					{
						'name' : "Bootstrap",
						'description' : "Front-end Framework"
					}

				]
			},

			{
				company_id : "3",
				project_name : "Bizgati",
				project_description : "Website builder platform.",
				description_points :[
					"Maintain and expand the functionality of a GWT-based Windows application (BizGati) for the JAVA inventory management system with Spring MVC and Hibernate frameworks.",
					"BizGati provide convenient solution of billing pattern and automate the process of ordering, billing and bar-coding of product. Managed accounting and inward outward of stock",
				],
				technologies : [
					{
						'name' : "Java",
						'description' : "Programming language"
					},
					{
						'name' : "Hibernate",
						'description' : "Object-relational mapping tool "
					},
					{
						'name' : "Spring",
						'description' : "Application framework"
					},
				]
			}

		]
		return(
			<div className="full_height" style={{marginLeft: '2%'}}>
				<br />
				<h1><strong>PORTFOLIO</strong></h1>
				{/*<h4>All frontend and backend part of below projects are done by me</h4> */}
			    {
					companies.map((company, company_key) =>{
						return(
						<div>
						<br />
						<div className="ui list segment" style={{marginRight:'2%'}}>
						<div className="item" key={ company_key }>
							<div className="content">
							  	<div className="header">
							  		<h2> <i className="angle right icon"></i> 
							  			<Moment format="MMMM YYYY">
							            { company.start_date } 
							            </Moment>
							            &nbsp;-&nbsp;
							            {
							            	!company.end_date?'Present':
								            <Moment format="MMM YYYY">
							                { company.end_date }
								            </Moment>
							        	}
							  		</h2>
							    </div>
							  	<div className="description custom-font">
							  		<p>&nbsp;&nbsp;<i className="building icon"></i>&nbsp;&nbsp; { company.company_name }
							  		&nbsp;&nbsp;<i className="suitcase icon"></i> { company.position } </p>
							  	</div>
							  	<div className="list custom-font" style={{marginLeft: '3%'}}>
							  	{
							  		projects.map((project, project_key)=>{
							  			return(
							  				project.company_id != company._id?'':
											<div className="item" key = { project_key }>
												<br/><br/>
											  	<i className="laptop icon"></i>
											  	<div className="content content-font">
													<div className="header">{ project.project_name }</div>
													<div className="description">{ project.project_description }</div>
													<div className="list">
													{
														project.description_points.map((point, point_key)=>{
															return(
															  	<div className="item" key={ point_key }>
																	<i className="circle outline icon small"></i>
																	<div className="content">
																	  	<div className="description">
																	  		{ point }
																	  	</div>
																	</div>
															  	</div>
															)
														})
												  	}
													</div>
											  	</div>
											  	<br/>
												<div className="ui four cards">
										  		{
										  			!project.technologies?'':
										  			project.technologies.map((technology, tech_key)=>{
											  			return(
														  	<a className="card yellow">
														    	<div className="content">
															      	<div className="header">
															        	{ technology.name }
															      	</div>
															      	<div className="meta">
															        	{ technology.description }
															      	</div>
															    </div>
															</a>
														)
											  		})
										  		}
											  	</div>

											</div>
							  			)
							  		})
								}
							  	</div>
							</div>
							<br/>
					  	</div>
					  	</div>
					  	</div>
					  	)
				  	})
				}
				<br/><br/><br/><br/>
			</div>
		)
	}
}

export default ComponentDashboardPortfolio
