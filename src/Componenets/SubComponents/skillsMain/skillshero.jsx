    import React from 'react';
    import 'font-awesome/css/font-awesome.min.css';
    import "./skillsmain.css";
    import ProgressCircle from '../progressCircle/progress';

    const SkillsHero = () => {
        const skills = [
            { percentage: 99, text: 'React', icon: 'bi bi-filetype-jsx' },
            { percentage: 100, text: 'JavaScript', icon: 'bi bi-braces' },
            { percentage: 100, text: 'CSS', icon: 'bi bi-palette' },
            { percentage: 98, text: 'Node.js', icon: 'bi bi-terminal' },
            { percentage: 100, text: 'Express', icon: 'bi bi-server' },
            { percentage: 100, text: 'SQL-Server', icon: 'bi bi-database' },
            { percentage: 100, text: 'HTML', icon: 'bi bi-code' },
            { percentage: 100, text: 'Python', icon: 'bi bi-puzzle' },
            { percentage: 100, text: 'C#', icon: 'bi bi-cogs' },  
            { percentage: 100, text: 'C++', icon: 'bi bi-code-slash' },
            { percentage: 100, text: 'MongoDB', icon: 'bi bi-database' }
        ];
    

        return (
            <div className="text-light row p-0 m-0">
                <div className="display-4 text-center p-5">
                    Explore my Skills
                </div>
                {skills.map((skill, index) => (
                    <div className="skills-container col-lg-3 col-md-4 col-sm-6 col-12" key={index}>
                        <ProgressCircle 
                            percentage={skill.percentage} 
                            text={skill.text} 
                            icon={skill.icon} 
                        />
                    </div>
                ))}
            </div>
        );
    }

    export default SkillsHero;
