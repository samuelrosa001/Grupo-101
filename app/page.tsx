import React from 'react';
import { HeroService } from '@/lib/services/HeroService';
import { BenefitsService } from '@/lib/services/BenefitsService';
import { StepsService } from '@/lib/services/StepsService';
import { DeliverablesService } from '@/lib/services/DeliverablesService';
import { ResourcesService } from '@/lib/services/ResourcesService';
import { BlogService } from '@/lib/services/BlogService';
import { FaqService } from '@/lib/services/FaqService';

import { HeroSection } from '@/features/hero/components/HeroSection';
import { BenefitsSection } from '@/features/benefits/components/BenefitsSection';
import { StepsTimelineSection } from '@/features/steps/components/StepsTimelineSection';
import { DeliverablesSection } from '@/features/deliverables/components/DeliverablesSection';
import { ResourcesSection } from '@/features/resources/components/ResourcesSection';
import { BlogPreviewSection } from '@/features/blog/components/BlogPreviewSection';
import { FaqSection } from '@/features/faq/components/FaqSection';
import { FinalCtaSection } from '@/features/cta/components/FinalCtaSection';

export default async function HomePage() {
  const heroData = await HeroService.getHeroData();
  const benefits = await BenefitsService.getBenefits();
  const steps = await StepsService.getSteps();
  const deliverables = await DeliverablesService.getDeliverables();
  const resources = await ResourcesService.getResources();
  const posts = await BlogService.getPosts();
  const faqs = await FaqService.getFaqs();

  return (
    <>
      <HeroSection data={heroData} />
      <BenefitsSection benefits={benefits} />
      <StepsTimelineSection steps={steps} />
      <DeliverablesSection deliverables={deliverables} />
      <ResourcesSection resources={resources} />
      <BlogPreviewSection posts={posts} />
      <FaqSection faqs={faqs} />
      <FinalCtaSection />
    </>
  );
}
