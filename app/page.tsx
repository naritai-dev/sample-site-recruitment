import { HeroSection } from '@/components/sections/hero/hero-section';
import { MessageSection } from '@/components/sections/message/message-section';
import { ServicesSection } from '@/components/sections/services-section';
import { CultureSection } from '@/components/sections/culture/culture-section';
import { RecruitSection } from '@/components/sections/recruit/recruit-section';
import { CompanySection } from '@/components/sections/company-section';

export default function Home(): JSX.Element {
  return (
    <>
      <HeroSection />
      <MessageSection />
      <ServicesSection />
      <CultureSection />
      <RecruitSection />
      <CompanySection />
    </>
  );
}
