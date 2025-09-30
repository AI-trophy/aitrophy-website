import type { Metadata } from 'next';

import Hero from '~/components/widgets/Hero';
import { heroContact } from '~/shared/data/pages/contact.data';

export const metadata: Metadata = {
  title: 'Contact us',
};

const Page = () => {
  return (
    <>
      <Hero {...heroContact} />
    </>
  );
};

export default Page;
