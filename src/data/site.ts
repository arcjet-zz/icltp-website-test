export const navGroups = [
  {
    label: 'Conference',
    links: [
      { label: 'About ICLTP', href: '/#about' },
      { label: 'Scientific topics', href: '/topics/' },
      { label: 'Committees', href: '/committees/' },
      { label: 'Invited speakers', href: '/speakers/' },
      { label: 'Program', href: '/program/' },
    ],
  },
  {
    label: 'Participate',
    links: [
      { label: 'Abstract submission', href: '/abstract-submission/' },
      { label: 'Registration', href: '/registration/' },
      { label: 'Travel grants', href: '/travel-grants/' },
      { label: 'Student awards', href: '/oral-presentation-award/' },
      { label: 'Sponsor the conference', href: '/sponsorship/' },
    ],
  },
  {
    label: 'Plan your trip',
    links: [
      { label: 'Venue & transport', href: '/venue/' },
      { label: 'Lodging', href: '/lodging/' },
      { label: 'Visa information', href: '/visa/' },
      { label: 'Beijing tours', href: '/tours/' },
    ],
  },
  {
    label: 'More',
    links: [
      { label: 'News & announcement', href: '/assets/documents/6c21a898e8-1780065938462339.pdf' },
      { label: 'Sponsors', href: '/sponsors/' },
      { label: 'Contact', href: '/contact/' },
      { label: 'ICLTP constitution', href: '/assets/documents/22d8437088-1769394112175005.pdf' },
    ],
  },
] as const;

export const deadlines = [
  { date: 'Sep 01', year: '2026', label: 'Invited speaker nominations', state: 'Next milestone' },
  { date: 'Dec 01', year: '2026', label: 'Abstract submission', state: 'Submission deadline' },
  { date: 'Dec 01', year: '2026', label: 'Student awards & travel grants', state: 'Nomination deadline' },
  { date: 'Feb 01', year: '2027', label: 'Early registration', state: 'Early rate closes' },
  { date: 'Mar 01', year: '2027', label: 'Room reservations', state: 'Hotel deadline' },
] as const;

export const topics = [
  { index: '01', title: 'Fundamentals', text: 'Electron kinetics, sheath dynamics, transport and elementary plasma processes.' },
  { index: '02', title: 'Diagnostics', text: 'Optical, laser, probe and non-invasive methods across space and time.' },
  { index: '03', title: 'Modeling', text: 'Fluid, kinetic, PIC/MCC, hybrid and multi-scale simulation approaches.' },
  { index: '04', title: 'Plasma sources', text: 'RF, magnetized, atmospheric, microplasma, DC and pulsed systems.' },
  { index: '05', title: 'Materials & energy', text: 'Semiconductor processing, advanced materials, catalysis and gas conversion.' },
  { index: '06', title: 'Life & environment', text: 'Medicine, agriculture, plasma–liquid interaction and sustainable applications.' },
] as const;

export const speakers = [
  {
    name: 'Peter Bruggeman',
    role: 'Plenary talk',
    affiliation: 'University of Minnesota, USA',
    title: 'Plasma–liquid interactions',
    image: '/assets/images/0bf11c8ac7-1775785990125047.jpg',
  },
  {
    name: 'Tony Murphy',
    role: 'Plenary talk',
    affiliation: 'CSIRO, Australia',
    title: 'Computational modelling of arc processes',
    image: '/assets/images/234f07b9b4-1775785990251663.jpg',
  },
  {
    name: 'David Graves',
    role: 'Plenary talk',
    affiliation: 'Princeton University, USA',
    title: 'Machine learning for plasma-surface simulations',
    image: '/assets/images/9943c80b0d-1777551101121613.png',
  },
  {
    name: 'Heji Huang',
    role: 'Plenary talk',
    affiliation: 'Chinese Academy of Sciences, China',
    title: 'Plasma-flow interactions in high-speed regimes',
    image: '/assets/images/a84b32a72a-1779584878832109.png',
  },
  {
    name: 'Shahid Rauf',
    role: 'Plenary talk',
    affiliation: 'Applied Materials, USA',
    title: 'Plasma–surface interactions for semiconductor processing',
    image: '/assets/images/1db6642d0f-1774583792877500.jpg',
  },
  {
    name: 'Wonho Choe',
    role: 'Plenary talk',
    affiliation: 'KAIST, Republic of Korea',
    title: 'Cylindrical Hall thruster plasmas',
    image: '/assets/images/e35beede23-1776129425458460.png',
  },
] as const;

export const routeMeta: Record<number, { route: string; eyebrow: string; description: string; order: number }> = {
  1896: { route: 'topics', eyebrow: 'Science', description: 'Fourteen research areas spanning fundamental plasma physics, diagnostics, modeling and applications.', order: 1 },
  1897: { route: 'committees', eyebrow: 'Governance', description: 'The scientific and local committees shaping the first ICLTP.', order: 2 },
  1909: { route: 'speakers', eyebrow: 'People', description: 'Meet the plenary and invited speakers joining us in Beijing.', order: 3 },
  1910: { route: 'program', eyebrow: 'Conference', description: 'The scientific program and daily conference schedule.', order: 4 },
  1907: { route: 'registration', eyebrow: 'Participate', description: 'Registration dates, rates and practical information for attendees.', order: 5 },
  1906: { route: 'abstract-submission', eyebrow: 'Participate', description: 'Prepare and submit your abstract for ICLTP 2027.', order: 6 },
  1903: { route: 'lodging', eyebrow: 'Beijing guide', description: 'Recommended hotels and accommodation near the conference venue.', order: 7 },
  1911: { route: 'venue', eyebrow: 'Beijing guide', description: 'Venue details and transport options from Beijing airports.', order: 8 },
  1912: { route: 'tours', eyebrow: 'Beijing guide', description: 'Discover Beijing beyond the conference.', order: 9 },
  2208: { route: 'visa', eyebrow: 'Travel', description: 'Visa guidance and invitation-letter support for international participants.', order: 10 },
  1908: { route: 'contact', eyebrow: 'Contact', description: 'Get in touch with the scientific and local organizing teams.', order: 11 },
  2206: { route: 'travel-grants', eyebrow: 'Student support', description: 'Eligibility and nomination procedures for student travel grants.', order: 12 },
  2247: { route: 'oral-presentation-award', eyebrow: 'Student awards', description: 'Recognition for outstanding student oral presentations.', order: 13 },
  2207: { route: 'poster-awards', eyebrow: 'Student awards', description: 'Recognition for outstanding student poster presentations.', order: 14 },
  2209: { route: 'sponsorship', eyebrow: 'Partners', description: 'Sponsorship and exhibitor opportunities at ICLTP 2027.', order: 15 },
  1898: { route: 'sponsors', eyebrow: 'Partners', description: 'Organizations supporting the first ICLTP.', order: 16 },
};
