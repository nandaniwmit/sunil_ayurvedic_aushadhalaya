import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  faqSchema?: Array<{ question: string; answer: string }>;
}

export const SEO: React.FC<SEOProps> = ({
  title = "Sunil Ayurvedic Aushdhalaya | Medical Store & Pharmacy in Gaya",
  description = "Trusted medical store & Ayurvedic pharmacy at Kali Bindu Bhavan, Gautam Buddha Rd, Gaya, Bihar 823001. Genuine prescription medicines, healthcare products, and WhatsApp order delivery.",
  keywords = "Sunil Ayurvedic Aushdhalaya, Medical store Gaya, Pharmacy Gaya, Ayurvedic Aushdhi Gaya, Gautam Buddha Road Pharmacy, Medicine delivery Gaya",
  canonicalUrl = "https://sunil-ayurvedic-aushdhalaya.com",
  ogImage = "/src/assets/images/hero_banner_pharmacy_1785574087841.jpg",
  faqSchema
}) => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Pharmacy",
    "name": "Sunil Ayurvedic Aushdhalaya",
    "image": ogImage,
    "telephone": "+919835650482",
    "url": canonicalUrl,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kali Bindu Bhavan, Gautam Buddha Rd",
      "addressLocality": "Gaya",
      "addressRegion": "Bihar",
      "postalCode": "823001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 24.7955,
      "longitude": 85.0002
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "08:00",
        "closes": "21:30"
      }
    ],
    "priceRange": "₹",
    "paymentAccepted": "Cash, UPI, Credit Card, Debit Card"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": canonicalUrl
      }
    ]
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Schema.org Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>

      {faqSchema && faqSchema.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqSchema.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>
      )}
    </Helmet>
  );
};
