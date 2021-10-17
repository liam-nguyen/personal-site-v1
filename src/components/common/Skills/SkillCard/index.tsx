import { FC } from 'react';
import { TSkill } from 'src/types/api/skill';

export const SkillCard: FC<{ skill: TSkill }> = ({ skill: { title, description } }) => {
    return (
        <div className="flex flex-col">
            <h4 className="font-white font-bold text-5xl leading-13 tracking-wide mb-3.5">{title}</h4>
            <p className="text-3xl leading-13 opacity-75">{description}</p>
        </div>
    );
};
