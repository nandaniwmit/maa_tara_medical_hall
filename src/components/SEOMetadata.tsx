import { useEffect } from 'react';
import { ActivePage, FAQ } from '../types';
import { BUSINESS_INFO, FAQS } from '../data';

interface SEOMetadataProps {
  activePage: ActivePage;
  currentSearchQuery?: string;
  selectedCategory?: string;
}

export default function SEOMetadata({ activePage, currentSearchQuery, selectedCategory }: SEOMetadataProps) {
  useEffect(() => {
    // 1. Dynamic Meta Title and Description based on routing/state
    let title = `${BUSINESS_INFO.name} | Pharmacy & Medical Store in Tekari, Bihar`;
    let description = BUSINESS_INFO.tagline;
    let keywords = "Maa Tara Medical Hall, pharmacy in Tekari, medical store Tekari, medicine home delivery, genuine medicines, healthcare Bihar, Rajeev Kumar pharmacist, online medicine order, prescription upload";

    switch (activePage) {
      case 'home':
        title = `${BUSINESS_INFO.name} | Genuine Medicines & Healthcare in Tekari`;
        description = `Welcome to Maa Tara Medical Hall on Khachiya Road, Tekari. We offer 100% genuine medicines, supplements, baby care, surgical items, and WhatsApp ordering support.`;
        break;
      case 'about':
        title = `About Us | ${BUSINESS_INFO.name} - Trusted Pharmacy`;
        description = `Discover our story, mission, and values. Under Mr. Rajeev Kumar, we have been serving Tekari, Bihar with high-quality healthcare products since 2015.`;
        break;
      case 'services':
        title = `Our Healthcare Services | ${BUSINESS_INFO.name}`;
        description = `Explore our services including prescription medicines, orthopedic supports, diabetic monitors, baby essentials, and specialized cold-chain storage.`;
        break;
      case 'gallery':
        title = `Interactive Gallery | ${BUSINESS_INFO.name}`;
        description = `Browse high-quality pictures of our medical store, well-stocked medicine shelves, digital health equipment, and customer-centric operations.`;
        break;
      case 'contact':
        title = `Contact Us & Directions | ${BUSINESS_INFO.name}`;
        description = `Find our location at Khachiya Road, Tekari, Bihar. Call us at 08804210306, see working hours, or get directions on Google Maps.`;
        break;
      case 'whatsapp-order':
        title = `Order Medicines via WhatsApp | ${BUSINESS_INFO.name}`;
        description = `Quickly upload your prescription or search medicine names to create a pre-filled WhatsApp message and order directly from our store.`;
        break;
    }

    if (currentSearchQuery) {
      title = `Search: "${currentSearchQuery}" | ${BUSINESS_INFO.name}`;
      description = `Find availability and prices for "${currentSearchQuery}" at Maa Tara Medical Hall. Inquire directly via WhatsApp.`;
    } else if (selectedCategory) {
      title = `${selectedCategory.toUpperCase()} Category | ${BUSINESS_INFO.name}`;
      description = `Explore high-quality healthcare products in the ${selectedCategory} category at Maa Tara Medical Hall in Tekari, Bihar.`;
    }

    // Update document title
    document.title = title;

    // Update Meta Tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);

    // Open Graph / Facebook
    updateMetaTag('og:title', title, 'property');
    updateMetaTag('og:description', description, 'property');
    updateMetaTag('og:type', 'website', 'property');
    updateMetaTag('og:url', window.location.href, 'property');
    updateMetaTag('og:image', 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&q=80&w=1200', 'property');
    updateMetaTag('og:site_name', BUSINESS_INFO.name, 'property');

    // Twitter Card
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&q=80&w=1200');

    // Canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', window.location.href);

    // 2. Schema Markup Injection
    injectJSONLD('local-business-schema', getLocalBusinessSchema());
    injectJSONLD('faq-schema', getFAQSchema(FAQS));
    injectJSONLD('breadcrumb-schema', getBreadcrumbSchema(activePage));

  }, [activePage, currentSearchQuery, selectedCategory]);

  return null; // Side-effect only component
}

// Helper to update or create meta tags
function updateMetaTag(name: string, content: string, attributeType: 'name' | 'property' = 'name') {
  let element = document.querySelector(`meta[${attributeType}="${name}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attributeType, name);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

// Helper to inject JSON-LD schema
function injectJSONLD(id: string, schemaObj: object) {
  let scriptElement = document.getElementById(id);
  if (scriptElement) {
    scriptElement.textContent = JSON.stringify(schemaObj, null, 2);
  } else {
    scriptElement = document.createElement('script');
    scriptElement.id = id;
    scriptElement.setAttribute('type', 'application/ld+json');
    scriptElement.textContent = JSON.stringify(schemaObj, null, 2);
    document.head.appendChild(scriptElement);
  }
}

// JSON-LD Generative Schemas
function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Pharmacy",
    "name": BUSINESS_INFO.name,
    "image": [
      "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200"
    ],
    "@id": "https://maataramedicalhall.com/#pharmacy",
    "url": window.location.origin,
    "telephone": BUSINESS_INFO.phone,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Khachiya Road, Tekari",
      "addressLocality": "Gaya, Tekari",
      "addressRegion": "Bihar",
      "postalCode": "824236",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 24.9358,
      "longitude": 84.8336
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "08:00",
        "closes": "21:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "08:30",
        "closes": "20:00"
      }
    ],
    "sameAs": [
      BUSINESS_INFO.whatsappUrl
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": BUSINESS_INFO.phone,
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi"]
    },
    "founder": {
      "@type": "Person",
      "name": BUSINESS_INFO.owner
    }
  };
}

function getFAQSchema(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

function getBreadcrumbSchema(activePage: ActivePage) {
  const items = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": window.location.origin
    }
  ];

  if (activePage !== 'home') {
    items.push({
      "@type": "ListItem",
      "position": 2,
      "name": activePage.charAt(0).toUpperCase() + activePage.slice(1).replace('-', ' '),
      "item": `${window.location.origin}#${activePage}`
    });
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items
  };
}
