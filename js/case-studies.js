// Case Studies Data and Modal Functionality

const caseStudies = {
  'lawton-smith': {
    name: 'The Lawton & Smith Team',
    industry: 'Luxury Real Estate · Denver, Colorado',
    image: 'images/Lawton Smith Hero Image.jpg',
    challenge: 'A top-producing Denver luxury real estate team needed to establish a stronger digital presence and position themselves as thought leaders in the competitive high-end market. They lacked consistent branding across platforms and had minimal engagement with their target audience of luxury home buyers and sellers.',
    approach: 'Developed a comprehensive organic social media strategy with elevated, cohesive branding across all platforms. Created sophisticated content that speaks to high-net-worth clients while maintaining approachability. Launched a monthly newsletter to nurture relationships and establish expertise. Focused on thought leadership content for LinkedIn to connect with industry peers and high-value prospects.',
    impact: 'Transformed their online presence into a powerful lead generation and brand-building engine. The team closed $10.2 million in real estate volume within six months, supported by a growing community of engaged followers who view them as trusted advisors in Denver\'s luxury market.',
    metrics: [
      { value: '+16,700%', label: 'Instagram Reach' },
      { value: '+677%', label: 'Instagram Followers' },
      { value: '+556%', label: 'LinkedIn Impressions' },
      { value: '62%', label: 'Newsletter Open Rate' },
      { value: '21%', label: 'Newsletter Click Rate' },
      { value: '$10.2M', label: 'Volume Closed (6 mo)' }
    ],
    services: ['Instagram Management', 'Facebook Management', 'LinkedIn Strategy', 'Email Marketing', 'Brand Strategy', 'Content Creation']
  },

  'the-saint': {
    name: 'The Saint Resort',
    industry: 'Luxury Hospitality · St. John, USVI',
    image: 'images/Saint Hero Image.jpg',
    challenge: 'A boutique luxury resort in the U.S. Virgin Islands needed to maintain visibility and drive direct bookings in a competitive Caribbean hospitality market. With stunning visuals but limited engagement, they needed a strategy that would convert followers into guests.',
    approach: 'Created a content strategy that transports audiences to island life, emphasizing the unique luxury experience of the property. Built community through strategic engagement in travel-focused Facebook groups, connecting with travelers actively planning Caribbean getaways. Focused on driving traffic directly to their booking platform.',
    impact: 'Established the resort as a must-visit destination with dramatically increased visibility reaching over 1.2 million views. Strategic link placement drove 17,000 clicks to their website, directly supporting booking goals and reducing reliance on third-party booking platforms.',
    metrics: [
      { value: '1.2M', label: 'Total Facebook Views' },
      { value: '+118%', label: 'Instagram Reach' },
      { value: '106,700', label: 'Total Instagram Reach' },
      { value: '17,000', label: 'Website Clicks' },
      { value: '+4.6%', label: 'Facebook View Growth' }
    ],
    services: ['Instagram Management', 'Facebook Management', 'Community Engagement', 'Content Strategy', 'TikTok Content']
  },

  'ocean-surfari': {
    name: 'Ocean Surfari',
    industry: 'Beach Apparel Retail · U.S. Virgin Islands',
    image: 'images/OS Hero Image.JPEG',
    challenge: 'A beloved beach apparel brand with retail locations in the Virgin Islands needed to expand their reach beyond walk-in traffic and build an online presence that could drive e-commerce sales. They had loyal local customers but limited visibility with tourists before they arrived on the island.',
    approach: 'Implemented a community-first strategy, engaging in Facebook groups frequented by travelers planning Virgin Islands trips. Created content showcasing products in authentic island settings to inspire purchases. Focused on driving traffic to their online store to capture sales from visitors before and after their trips.',
    impact: 'Dramatically expanded their digital footprint, reaching nearly 214,000 views and driving 3,700 website visits in the first month alone. The strategy created a pipeline of customers who discover the brand before arriving, increasing both online and in-store sales.',
    metrics: [
      { value: '+65%', label: 'Facebook Views' },
      { value: '213,900', label: 'Total Facebook Views' },
      { value: '+270%', label: 'Link Clicks' },
      { value: '3,700', label: 'Website Visits' },
      { value: '+161%', label: 'Instagram Followers' }
    ],
    services: ['Instagram Management', 'Facebook Management', 'Community Building', 'Content Strategy', 'E-commerce Support']
  },

  'reef-surfari': {
    name: 'Reef Surfari',
    industry: 'Boat Excursions & Tours · U.S. Virgin Islands',
    image: 'images/RS Hero Image.JPEG',
    challenge: 'A premier boat excursion company offering unforgettable island experiences needed to stand out in a crowded tour operator market. While they delivered exceptional experiences, their online presence wasn\'t capturing the magic of what they offer or converting interest into bookings.',
    approach: 'Built brand awareness through authentic content showcasing the beauty of their excursions and the warmth of their crew. Established community presence in travel Facebook groups where potential visitors research and plan their trips. Created clear paths from content to booking with strategic call-to-actions.',
    impact: 'Generated massive visibility with over 313,000 total views across platforms, putting Reef Surfari top-of-mind for travelers planning Virgin Islands adventures. The 2,800 link clicks represent direct booking intent, translating social engagement into revenue.',
    metrics: [
      { value: '+119%', label: 'Facebook Views' },
      { value: '284,500', label: 'Total Facebook Views' },
      { value: '+100%', label: 'Instagram Views' },
      { value: '28,600', label: 'Total Instagram Views' },
      { value: '2,800', label: 'Booking Link Clicks' }
    ],
    services: ['Instagram Management', 'Facebook Management', 'Community Building', 'Content Creation', 'Booking Optimization']
  },

  'organic-sandwich': {
    name: 'Organic Sandwich Company',
    industry: 'Restaurant · Boulder & Louisville, Colorado',
    image: 'images/Organic Sandwich Hero Image.jpg.webp',
    challenge: 'A beloved local restaurant known for fresh, organic ingredients needed to expand their reach and connect with the Boulder community in a meaningful way. Despite a loyal customer base, they weren\'t capturing the attention of University of Colorado students and the broader Boulder food scene on social media.',
    approach: 'Developed a video-first content strategy leveraging Reels and TikTok to showcase their vibrant food and laid-back atmosphere. Created content that resonates with health-conscious locals, students, and the Boulder lifestyle. Focused on authentic, behind-the-scenes content that highlights what makes them special.',
    impact: 'Exploded their social presence virtually overnight, reaching thousands of new potential customers across Colorado. The dramatic increase in visibility introduced the brand to CU students, health-conscious locals, and Boulder visitors, directly supporting foot traffic and building lasting brand awareness.',
    metrics: [
      { value: '+138%', label: 'Reels & Post Views' },
      { value: '+882%', label: 'Instagram Reach' },
      { value: '13,248', label: 'Total Instagram Views' },
      { value: '+10,591%', label: 'TikTok Reach' },
      { value: '11,350', label: 'Total TikTok Views' }
    ],
    services: ['Instagram Reels', 'TikTok Content', 'Video Production', 'Content Strategy', 'Local Marketing']
  }
};

// Modal functionality
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('case-modal');
  if (!modal) return;

  const closeBtn = modal.querySelector('.case-modal-close');
  const portfolioItems = document.querySelectorAll('.portfolio-item[data-case-study]');

  // Open modal
  portfolioItems.forEach(item => {
    item.style.cursor = 'pointer';
    item.addEventListener('click', () => {
      const studyKey = item.dataset.caseStudy;
      const study = caseStudies[studyKey];
      if (!study) return;

      // Populate modal
      document.getElementById('case-modal-image').src = study.image;
      document.getElementById('case-modal-name').textContent = study.name;
      document.getElementById('case-modal-industry').textContent = study.industry;
      document.getElementById('case-modal-challenge').textContent = study.challenge;
      document.getElementById('case-modal-approach').textContent = study.approach;
      document.getElementById('case-modal-impact').textContent = study.impact;

      // Metrics
      const metricsHtml = study.metrics.map(m => `
        <div class="case-metric">
          <div class="case-metric-value">${m.value}</div>
          <div class="case-metric-label">${m.label}</div>
        </div>
      `).join('');
      document.getElementById('case-modal-metrics').innerHTML = metricsHtml;

      // Services
      const servicesHtml = study.services.map(s => `
        <span class="case-service-tag">${s}</span>
      `).join('');
      document.getElementById('case-modal-services').innerHTML = servicesHtml;

      // Show modal
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  // Close modal
  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
});
