import React from 'react'
import { Helmet } from 'react-helmet-async'

const SEO = ({
  title = 'Karachi Dental Clinic - Expert Dental Care in New York',
  description = 'Bright Smiles, Lasting Health - Expert dental care in New York. Comfortable, affordable, and trusted dental services. Book your appointment today!',
  keywords = 'dentist, dental clinic, teeth whitening, orthodontics, dental care, New York, dental implants, root canal, cosmetic dentistry',
  image = '/og-image.jpg',
  url = 'https://karachidentalclinic.com',
  type = 'website'
}) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Karachi Dental Clinic" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Karachi Dental Clinic" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      
      {/* Local Business Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Dentist",
          "name": "Karachi Dental Clinic",
          "description": description,
          "url": url,
          "telephone": "+1-555-123-4567",
          "email": "info@karachidentalclinic.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Broadway Street",
            "addressLocality": "New York",
            "addressRegion": "NY",
            "postalCode": "10001",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "40.7589",
            "longitude": "-73.9851"
          },
          "openingHours": [
            "Mo-Fr 10:00-20:00",
            "Sa 10:00-17:00"
          ],
          "priceRange": "PKR",
          "image": image,
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "500"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Dental Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "General Checkup & Cleaning",
                  "description": "Comprehensive dental examination and professional cleaning"
                }
              },
              {
                "@type": "Offer", 
                "itemOffered": {
                  "@type": "Service",
                  "name": "Teeth Whitening",
                  "description": "Professional teeth whitening for a brighter smile"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service", 
                  "name": "Orthodontics",
                  "description": "Braces and Invisalign for straighter teeth"
                }
              }
            ]
          }
        })}
      </script>
    </Helmet>
  )
}

export default SEO
