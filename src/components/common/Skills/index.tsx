import { FC } from 'react';
import { TSkill, TSkills } from 'src/types/api/skill';
import { SectionText } from '../Section/Text';
import { SectionTitle } from '../Section/Title';
import { SkillCard } from './SkillCard';

export const Skills: FC<{ skills: TSkill[] }> = ({ skills }) => (
    <section>
        <SectionTitle text="Skills" />
        <SectionText text="As a full stack dev, I've worked with multiple frameworks and toolings" />
        <div className="grid grid-cols-3 gap-16 mb-16">
            {skills.map((skill) => (
                <li className="max-w-lg">
                    <SkillCard skill={skill} />
                </li>
            ))}
        </div>
    </section>
);
