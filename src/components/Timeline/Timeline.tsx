import { SchoolIcon, WorkflowIcon } from 'lucide-react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'; // Import the default styles

const Timeline = () => {
    return (
        <VerticalTimeline lineColor='rgb(30, 45, 61)'>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(1, 22, 39)', color: 'rgb(153, 161, 175)', border: '2px solid rgb(221, 221, 221)', }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(221, 221, 221)' }}
                date="Apr 2024 - Aug 2025"
                iconStyle={{ background: 'rgb(1, 22, 39)', color: 'rgb(153, 161, 175)' }}
                icon={<WorkflowIcon />}
            >
                <h3 className="vertical-timeline-element-title font-bold">Backend Developer (Full Time)</h3>
                <h4 className="vertical-timeline-element-subtitle">Digital Infinit, remote working</h4>
                <p>
                Delivered robust backend solutions through API development, database optimization, and system security — driving impact for both company products and client projects.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(1, 22, 39)', color: 'rgb(153, 161, 175)', border: '2px solid rgb(221, 221, 221)', }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(221, 221, 221)' }}
                date="Aug 2024 - Dec 2024"
                iconStyle={{ background: 'rgb(1, 22, 39)', color: 'rgb(153, 161, 175)' }}
                icon={<WorkflowIcon />}
            >
                <h3 className="vertical-timeline-element-title font-bold">Software Engineer & Tech Lead (Internship)</h3>
                <h4 className="vertical-timeline-element-subtitle">SEAQIS Bandung, West Java</h4>
                <p>
                Grew from building and optimizing internal systems as a Software Developer Intern to leading full-stack development, system architecture, and infrastructure as a Technical Lead.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(1, 22, 39)', color: 'rgb(153, 161, 175)', border: '2px solid rgb(221, 221, 221)', }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(221, 221, 221)' }}
                date="Feb 2024 - June 2024"
                iconStyle={{ background: 'rgb(1, 22, 39)', color: 'rgb(153, 161, 175)' }}
                icon={<WorkflowIcon />}
            >
                <h3 className="vertical-timeline-element-title font-bold">Fullstack Developer (Internship)</h3>
                <h4 className="vertical-timeline-element-subtitle">PT. Telekomunikasi (Telkom) Indonesia, West Jakarta</h4>
                <p>
                Developed a comprehensive web application for Telkom Corporate University, including portfolio management, API and database development, user interface integration, and deployment to support business processes effectively.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(1, 22, 39)', color: 'rgb(153, 161, 175)', border: '2px solid rgb(221, 221, 221)', }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(221, 221, 221)' }}
                date="Jan 2021 - Jan 2024"
                iconStyle={{ background: 'rgb(1, 22, 39)', color: 'rgb(153, 161, 175)' }}
                icon={<WorkflowIcon />}
            >
                <h3 className="vertical-timeline-element-title font-bold">Software Engineer & IT Specialist</h3>
                <h4 className="vertical-timeline-element-subtitle">Freelance, Remote Working</h4>
                <p>
                Collaborated with clients as a freelance Software Engineer and IT Specialist, delivering tailored solutions in back-end development, IoT systems, server management, and custom applications to meet unique business needs.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(1, 22, 39)', color: 'rgb(153, 161, 175)', border: '2px solid rgb(221, 221, 221)', }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(221, 221, 221)' }}
                date="Sep 2022 - Jan 2024"
                iconStyle={{ background: 'rgb(20, 60, 120)', color: 'rgb(153, 161, 175)' }}
                icon={<SchoolIcon />}
            >
                <h3 className="vertical-timeline-element-title font-bold">Laboratory & Research Assistant</h3>
                <h4 className="vertical-timeline-element-subtitle">Universitas Pendidikan Indonesia, Bandung West Java</h4>
                <p>
                Develop the practical modul with lecturer. Assist and guide students during the practicum.
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    )
}

export default Timeline;