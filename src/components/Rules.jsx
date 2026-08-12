import React from 'react';
import './Rules.css';

const Rules = () => {
  const rulesList = [
    {
      heading: "Team Composition",
      text: "Each team must consist of exactly 3 members."
    },
    {
      heading: "Professional Conduct",
      text: "Participants are expected to maintain discipline, professionalism, and respectful behaviour throughout the event."
    },
    {
      heading: "Disqualification for Misconduct",
      text: "Any form of indiscipline, misconduct, harassment, damage to property, or inappropriate behaviour may lead to immediate disqualification from Aurex’26."
    },
    {
      heading: "Dress Code",
      text: "All participants must wear decent, appropriate, and professional attire suitable for an institutional event."
    },
    {
      heading: "Dress Code for Male Participants",
      text: "Shorts and sleeveless attire are not permitted."
    },
    {
      heading: "Dress Code for Female Participants",
      text: "Mini dresses, short skirts, sleeveless attire, and crop tops are not permitted."
    },
    {
      heading: "Respect for the Venue",
      text: "Participants must follow all rules and instructions of the host institution and must not damage, misuse, or disturb any facility, equipment, or property."
    },
    {
      heading: "Identification and Registration",
      text: "Participants must carry the required college/institution ID and event registration proof throughout the event."
    },
    {
      heading: "Team Changes",
      text: "Once the final team registration is confirmed, changes in team members may not be permitted unless approved by the organizing committee."
    },
    {
      heading: "Problem Statement Compliance",
      text: "Teams must develop their ideas and solutions strictly in accordance with the official problem statements provided for Aurex’26."
    },
    {
      heading: "Originality of Work",
      text: "The solution presented by the team must represent their own work. Any form of plagiarism, copied project submission, or misrepresentation may result in disqualification."
    },
    {
      heading: "No Previously Prepared Projects",
      text: "Previously developed GitHub repositories, ready-made projects, pre-built applications, or earlier project submissions must not be reused as the hackathon solution. The core project must be developed during Aurex’26."
    },
    {
      heading: "Use of Existing Resources",
      text: "Open-source libraries, APIs, frameworks, datasets, and development tools may be used where permitted. However, participants must not use a previously completed project as their submission."
    },
    {
      heading: "Laptop and Equipment",
      text: "Participants must bring their own laptop, charger, and any other essential accessories required for development. Participants are responsible for taking care of their own devices and belongings."
    },
    {
      heading: "Submission Deadline",
      text: "All required project files, presentations, prototypes, or other submissions must be submitted within the deadline announced by the organizing committee. Late submissions may not be considered."
    },
    {
      heading: "Presentation and Evaluation",
      text: "Teams must be available to demonstrate and explain their solution before the judging panel during the allotted evaluation period."
    },
    {
      heading: "Judges’ Decision",
      text: "The scores awarded by the judges will be based on the official evaluation criteria. The decision of the judging panel shall be final and binding."
    },
    {
      heading: "No Disputes Regarding Scores",
      text: "Participants must respect the evaluation process. No further questions, arguments, or disputes regarding the scores awarded by the judges will be entertained after the results are finalized."
    },
    {
      heading: "Selection of Prize Winners",
      text: "The judging panel will determine the final prize winners based on the evaluation criteria and overall performance of the teams."
    },
    {
      heading: "Use of Unfair Means",
      text: "Any attempt to manipulate results, interfere with another team, obtain unauthorized assistance, or engage in unfair practices may result in immediate disqualification."
    },
    {
      heading: "Attendance and Punctuality",
      text: "Participants must report to the venue on time and attend all mandatory sessions, evaluations, presentations, and announcements according to the official event schedule."
    },
    {
      heading: "Food Arrangements",
      text: "Food will be provided to the registered participants by the organizers during the event as per the scheduled arrangements."
    },
    {
      heading: "Organizers’ Authority",
      text: "Participants must follow all instructions issued by the Aurex’26 organizing committee. The organizers reserve the right to take appropriate decisions in situations not specifically covered by these rules to ensure the fair and smooth conduct of the event."
    },
    {
      heading: "Changes to Rules",
      text: "The organizing committee reserves the right to make necessary changes to the schedule, rules, evaluation process, or event arrangements. Any such updates will be communicated through the official Aurex’26 channels."
    }
  ];

  return (
    <section className="rules-section" id="rules">
      <div className="container">
        <div className="rules-container">
          <h2 className="rules-title animate-slide-up">AUREX’26 – Rules and Regulations</h2>
          
          <div className="rules-grid">
            {rulesList.map((rule, index) => (
              <div 
                key={index} 
                className="rule-item animate-slide-up"
                style={{ animationDelay: `${(index % 5) * 100}ms` }}
              >
                <div className="rule-number">{index + 1}</div>
                <div className="rule-content">
                  <h3 className="rule-heading">{rule.heading}</h3>
                  <p className="rule-text">{rule.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="rules-acknowledgement animate-slide-up delay-200">
            <p>
              By registering for and participating in Aurex’26 – தொழில்நுட்பப் படைப்பாக்கப் போட்டி, every participant agrees to abide by these rules, respect the decisions of the organizers and judges, and maintain appropriate conduct throughout the event.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rules;
