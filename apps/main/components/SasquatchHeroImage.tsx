import React from 'react';
import { buildCloudinaryImageUrl } from '../lib/cloudinary';

type SasquatchImageConfig = {
  publicId: string;
  alt: string;
};

const SASQUATCH_HERO_IMAGES: Record<string, SasquatchImageConfig> = {
  angel: {
    publicId: 'sasquatch-family/angel-hero',
    alt: 'A sasquatch handyman helping a neighbor with home repairs',
  },
  art: {
    publicId: 'sasquatch-family/art-hero',
    alt: 'A sasquatch artist painting alongside a human in a studio',
  },
  auto: {
    publicId: 'sasquatch-family/auto-hero',
    alt: 'A sasquatch mechanic working with a human beside a car',
  },
  business: {
    publicId: 'sasquatch-family/business-hero',
    alt: 'A sasquatch business mentor reviewing charts with a human client',
  },
  coach: {
    publicId: 'sasquatch-family/coach-hero',
    alt: 'A sasquatch coach guiding a human learner at a whiteboard',
  },
  coding: {
    publicId: 'sasquatch-family/coding-hero',
    alt: 'A sasquatch developer pair-programming with a human',
  },
  cooking: {
    publicId: 'sasquatch-family/cooking-hero',
    alt: 'A sasquatch chef teaching a human in a modern kitchen',
  },
  crafts: {
    publicId: 'sasquatch-family/crafts-hero',
    alt: 'A sasquatch and a human crafting together at a workbench',
  },
  data: {
    publicId: 'sasquatch-family/data-hero',
    alt: 'A sasquatch data analyst showing insights to a human teammate',
  },
  design: {
    publicId: 'sasquatch-family/design-hero',
    alt: 'A sasquatch designer reviewing mockups with a human',
  },
  finance: {
    publicId: 'sasquatch-family/finance-hero',
    alt: 'A sasquatch financial guide planning with a human at a desk',
  },
  fitness: {
    publicId: 'sasquatch-family/fitness-hero',
    alt: 'A sasquatch fitness coach training a human in a gym',
  },
  gardening: {
    publicId: 'sasquatch-family/gardening-hero',
    alt: 'A sasquatch gardener helping a human in a greenhouse',
  },
  heroes: {
    publicId: 'sasquatch-family/heroes-hero',
    alt: 'A sasquatch volunteer supporting a human learner with accessibility tools',
  },
  history: {
    publicId: 'sasquatch-family/history-hero',
    alt: 'A sasquatch historian guiding a human through archival materials',
  },
  home: {
    publicId: 'sasquatch-family/home-hero',
    alt: 'A sasquatch helper assisting a human with home projects',
  },
  investing: {
    publicId: 'sasquatch-family/investing-hero',
    alt: 'A sasquatch advisor discussing investments with a human',
  },
  language: {
    publicId: 'sasquatch-family/language-hero',
    alt: 'A sasquatch language tutor practicing with a human learner',
  },
  marketing: {
    publicId: 'sasquatch-family/marketing-hero',
    alt: 'A sasquatch marketer presenting a campaign to a human team',
  },
  math: {
    publicId: 'sasquatch-family/math-hero',
    alt: 'A sasquatch math tutor solving problems with a human',
  },
  mechanical: {
    publicId: 'sasquatch-family/mechanical-hero',
    alt: 'A sasquatch mechanic working on machinery with a human',
  },
  music: {
    publicId: 'sasquatch-family/music-hero',
    alt: 'A sasquatch music mentor teaching a human with instruments',
  },
  photography: {
    publicId: 'sasquatch-family/photography-hero',
    alt: 'A sasquatch photographer coaching a human behind a camera',
  },
  sales: {
    publicId: 'sasquatch-family/sales-hero',
    alt: 'A sasquatch sales coach preparing a human for a pitch',
  },
  science: {
    publicId: 'sasquatch-family/science-hero',
    alt: 'A sasquatch scientist collaborating with a human in a lab',
  },
  sports: {
    publicId: 'sasquatch-family/sports-hero',
    alt: 'A sasquatch coach training a human athlete',
  },
  tech: {
    publicId: 'sasquatch-family/tech-hero',
    alt: 'A sasquatch tech mentor working with a human at a workstation',
  },
  wellness: {
    publicId: 'sasquatch-family/wellness-hero',
    alt: 'A sasquatch wellness guide leading a human through calm practice',
  },
  writing: {
    publicId: 'sasquatch-family/writing-hero',
    alt: 'A sasquatch writing coach reviewing drafts with a human',
  },
};

type SasquatchHeroImageProps = {
  subdomain: string;
  className?: string;
};

const SasquatchHeroImage: React.FC<SasquatchHeroImageProps> = ({ subdomain, className = '' }) => {
  const image = SASQUATCH_HERO_IMAGES[subdomain];
  if (!image) {
    return null;
  }

  const imageUrl = buildCloudinaryImageUrl(
    image.publicId,
    'f_auto,q_auto,w_1400,h_788,c_fill,g_auto'
  );

  if (!imageUrl) {
    return null;
  }

  return (
    <div className={`mx-auto mt-10 w-full max-w-5xl ${className}`}>
      <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/40">
        <img
          src={imageUrl}
          alt={image.alt}
          className="h-auto w-full object-cover"
          loading="eager"
        />
      </div>
    </div>
  );
};

export default SasquatchHeroImage;
