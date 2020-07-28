import React, { Component } from 'react';
import Moment from 'react-moment';

class ComponentDashboardPortfolio extends Component {
	render() {

		const companies = [
			{
				_id : "1", 
				company_name: "Instant Procurement Services Pvt Ltd.",
				position 	: "Deputy Manager - Technical",
				start_date 	: new Date(2017, 10, 24, 10, 33, 30, 0),
				end_date    : undefined
			},
			{
				_id : "2", 
				company_name: "LBT Mind Technologies Pvt Ltd.",
				position 	: "Java Developer",
				start_date 	: new Date(2016, 11, 10, 10, 33, 30, 0),
				end_date    : new Date(2017, 5, 10, 10, 33, 30, 0)
			}
		]
		const projects  = [
			{
				company_id : "1",
				project_name : "ProcMart",
				project_description : "B2B Ecommerce web application",
				description_points  :[
					"The project “ProcMart” is a tech enabled B2B platform which connects industry buyers to sellers through quotations with a good user interface.",
					"Application is developed using MeteorJS and native JavaScript which aided in developing UI/UX skill.",
					"Designed schemas for CRUD operations using AutoForms with database being MongoDB",
					"Automated the billing system with emails which helped the operations department in better handling of invoices and tax calculations.",
					"Generated Excel-sheet for Sales and Purchase reports through software to reduce paperwork for Finance department.",
					"Technical support and remote assistance, Worked with team to resolve complex problems and improved system stability, reliability, and performance.",
					"Mentored new candidate by giving training sessions, practice modules and helped in getting to the know platform used.",
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
						'name' : "Materialize",
						'description' : "Front-end Framework"
					}

				]
			},
			{
				company_id : "1",
				project_name : "ProcBaba",
				project_description : "Website builder platform.",
				description_points :[
					"ProcBaba is a leading cloud-based website builder platform to simplify creation of professional websites with optimized SEO",
					"Promote your business, showcase your art, set up an online shop or just test out new ideas",
					"Designed templates as per client requirements with dynamic data",
					"Structured, modified scalable database.",
					"Written python apis for database operations"
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
				company_id : "2",
				project_name : "Bizgati",
				project_description : "Website builder platform.",
				description_points :[
					"Maintained and developed features for a GWT based windows application(BizGati) for inventory management system in JAVA with Spring MVC and Hibernate frameworks",
					"BizGati provide convenient solution of billing pattern and automate the process of ordering, billing and bar-coding of product. Managed accounting and inward outward of stock",
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
				<h4>All frontend and backend part of below projects are done by me</h4>
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
			</div>
		)
	}
}

export default ComponentDashboardPortfolio