import type { Metadata } from 'next';

import Hero from '~/components/widgets/Hero';
import Team from '~/components/widgets/Team';
import { heroTeam, teamHome } from '~/shared/data/pages/team.data';

export const metadata: Metadata = {
  title: 'Our Team',
};

const Page = () => {
  return (
    <>
      <Team {...teamHome} />
    </>
  );
};

export default Page;