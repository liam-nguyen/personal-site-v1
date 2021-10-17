import { getLayout } from '../src/layouts/ContentLayout';
import { Hero } from '@components/common';
import { Skills } from '@components/common/Skills';
import { Divider } from '@components/common/Divider';
import { TSkill } from 'src/types/api/skill';
import data from '@data/skills.json';

export async function getStaticProps() {
    const { skills } = data;

    return {
        props: {
            skills,
        },
    };
}

const HomePage = ({ skills }: { skills: TSkill[] }) => {
    return (
        <>
            <Hero />
            <Divider divider />
            <Skills skills={skills} />
        </>
    );
};

HomePage.getLayout = getLayout;

export default HomePage;
