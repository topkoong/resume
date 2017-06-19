import React, { Component } from 'react';
class Resume extends Component {
  render() {
    if(this.props.data) {
      var education = this.props.data.education.map((edu) => {
          return (
            <div key={edu.school} className="row item">
               <div className="twelve columns">
                  <h3>{edu.school}</h3>
                  <p className="info">{edu.degree} <span>&bull;</span> <em className="date">{edu.graduated}</em></p>
                  <ul>
                    <li key={edu.project.toString()}><span>&bull;</span>{edu.project}</li>
                  </ul>
               </div>
            </div>
          );
      });
      var work = this.props.data.work.map((job) => {
        //console.log(job.test);
        return (
          <div key={job.company} className="row item">
             <div className="twelve columns">
                <h3>{job.company}</h3>
                <p className="info">{job.title} <span>&bull;</span> <em className="date">{job.years}</em></p>
                <p>{job.description}</p>
             </div>
          </div>
        );
      });

      var skills = this.props.data.skills.map((skill) => {
        var className = 'bar-expand '+skill.name.toLowerCase();
        return (
          <li key={skill.name}><span style={{width: skill.level}} className={className}></span><em>{skill.name}</em></li>
        );
      });

    }
    return (
      <section id="resume">
            <div className="row education">
               <div className="three columns header-col">
                  <h1><span>Education</span></h1>
               </div>
               <div className="nine columns main-col">
                {education}
               </div>
            </div>
            <div className="row work">
         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>
         <div className="nine columns main-col">
            {work}
         </div>
      </div>
      <div className="row skill">
         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>
         <div className="nine columns main-col">
            <p>I am a geek. I love computers. I love everything about them. I am also passionate about coding. I would like to pursue a passion, not a big paycheck because I think it is better to give than receive, and following my passinon can be far more motivating and satisfying.
            </p>
				<div className="bars">
				   <ul className="skills">
             {skills}
					</ul>
				</div>
			</div>
      </div>
   </section>
    );
  }
}

export default Resume;
