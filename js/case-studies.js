// Case Studies Data and Modal Functionality

const caseStudies = {
  'lawton-smith': {
    name: 'Luxury Real Estate Team',
    industry: 'Luxury Real Estate · Denver, Colorado',
    image: 'images/Lawton Smith Hero Image.jpg',
    challenge: 'A top-producing Denver luxury real estate team needed to establish a stronger digital presence and position themselves as thought leaders in the competitive high-end market. They had no cohesive marketing strategy in place, lacked consistent branding across platforms, and had minimal engagement with their target audience of luxury home buyers and sellers.',
    approach: 'Built a complete marketing system from the ground up. Established elevated, cohesive branding across every platform and cleaned up and organized their CRM to support consistent client follow-up. Managed organic and paid social across Instagram, Facebook, LinkedIn, and TikTok, paired with digital ads, print marketing, and ongoing website updates backed by SEO and SEM. Created sophisticated content that speaks to high-net-worth clients while staying approachable, launched a monthly newsletter to nurture relationships, and produced thought leadership content for LinkedIn to connect with industry peers and high-value prospects.',
    impact: 'Transformed their online presence into a powerful lead generation and brand-building engine. The team closed $10.2 million in real estate volume within six months, supported by a growing community of engaged followers who view them as trusted advisors in Denver\'s luxury market.',
    metrics: [
      { value: '+16,700%', label: 'Instagram Reach' },
      { value: '+677%', label: 'Instagram Followers' },
      { value: '+556%', label: 'LinkedIn Impressions' },
      { value: '62%', label: 'Newsletter Open Rate' },
      { value: '21%', label: 'Newsletter Click Rate' },
      { value: '$10.2M', label: 'Volume Closed (6 mo)' }
    ],
    services: ['Brand Strategy', 'Instagram Management', 'Facebook Management', 'LinkedIn Strategy', 'TikTok Management', 'Content Creation', 'Email Marketing', 'CRM Cleanup', 'Website Updates', 'SEO & SEM', 'Paid Social & Digital Ads', 'Print Marketing']
  },

  'the-saint': {
    name: 'Luxury Boutique Resort',
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
    name: 'Beach Apparel Retailer',
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
    name: 'Charter & Excursion Company',
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
    name: 'Locally Owned Restaurant',
    industry: 'Restaurant · Boulder & Louisville, Colorado',
    image: 'images/Organic Sandwich Hero Image.jpg.webp',
    challenge: 'A beloved locally owned restaurant known for fresh, organic ingredients needed to expand their reach and connect with the Boulder community in a meaningful way. Despite a loyal customer base, they weren\'t capturing the attention of University of Colorado students and the broader Boulder food scene on social media.',
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
  },

  'north-point': {
    name: 'Real Estate Developer',
    industry: 'Luxury Custom Homes & Development · Denver, Colorado',
    image: 'images/NPC-hero.jpg',
    challenge: 'A luxury real estate developer delivering ground-up custom homes and high-end remodels across Denver needed a digital presence that matched the caliber of their work. They had no website, brand voice, or content strategy, and were missing opportunities to showcase craftsmanship, attract custom build clients, and position themselves as a leader in the Denver luxury development market.',
    approach: 'Designed and built their website from scratch and developed a refined, minimal brand identity that mirrors the work itself: confident, intentional, and free of fluff. Set up and optimized their Google Business Profile for local search, then built a social media strategy and content engine organized around project showcases, craft and detail close-ups, and the design process. Launched new properties directly through social media and coordinated cross-promotion with the affiliated luxury real estate team, connecting the build side and the buy side of the Denver market.',
    impact: 'Launched a clear, ownable brand presence and saw rapid traction in the first month, growing Instagram from 20 to 223 followers and driving an 800% increase in reach. The strategy positioned the developer as the standard for thoughtful, ground-up custom homes, supporting both client acquisition and long-term brand equity as the portfolio grows.',
    metrics: [
      { value: '+1,015%', label: 'Instagram Followers' },
      { value: '+800%', label: 'Instagram Reach' },
      { value: '+646%', label: 'LinkedIn Impressions' }
    ],
    services: ['Website Design & Development', 'Branding', 'Social Media Strategy', 'Content Creation', 'Google Business Optimization', 'Property Launch Campaigns', 'Instagram Management', 'LinkedIn Strategy']
  },

  'vacation-rental': {
    name: 'Vacation Rental Property',
    industry: 'Short-Term Rental · Hospitality',
    image: 'images/vacation-rental-hero.JPG',
    challenge: 'A vacation rental property needed to stand out in a saturated short-term rental market and drive direct bookings. With strong amenities but limited online visibility, they needed a content strategy that would inspire travelers and convert interest into reservations.',
    approach: 'Launched the property\'s Airbnb listing and optimized it for search, earning consistent top placement in the area\'s results across both Airbnb and VRBO. Launched social accounts across TikTok, Instagram, and Facebook with a destination-driven content strategy that showcases the property and the surrounding location, driving travelers from social discovery straight to booking.',
    impact: 'Turned a brand-new listing into a consistent booking driver, increasing booking revenue by $20,000 and generating strong first-month visibility with 32,000 TikTok views and 10,000 Instagram views. Consistent top search rankings on Airbnb and VRBO keep the property in front of travelers actively planning their stay.',
    metrics: [
      { value: '+$20K', label: 'Booking Revenue' },
      { value: '32,000', label: 'TikTok Views' },
      { value: '10,000', label: 'Instagram Views' },
      { value: 'Top Ranked', label: 'Airbnb & VRBO Search' }
    ],
    services: ['Airbnb Listing Launch', 'Search Optimization', 'TikTok Management', 'Instagram Management', 'Facebook Management', 'Content Creation', 'Booking Strategy']
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
