import { contact } from "@/data/contact";
import { seo, siteUrl } from "@/data/seo";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#organization`,
        name: seo.name,
        legalName: seo.legalName,
        url: siteUrl,
        foundingDate: seo.founded,
        telephone: contact.phone.href.replace("tel:", ""),
        email: contact.email.label,
        image: `${siteUrl}/icon.png`,
        logo: `${siteUrl}/images/digitalizer-logo.png`,
        description:
          "Digital product studio for custom software, AI website design, UX, and digital transformation. Houston and Baltimore, serving clients nationwide.",
        priceRange: "$$$$",
        areaServed: [
          { "@type": "City", name: "Houston" },
          { "@type": "City", name: "Baltimore" },
          { "@type": "State", name: "Texas" },
          { "@type": "State", name: "Maryland" },
          { "@type": "Country", name: "United States" },
        ],
        knowsAbout: [
          "AI website design",
          "AI website development",
          "custom software development",
          "UX design",
          "product strategy",
          "agile delivery",
          "digital marketing",
          "brand strategy",
        ],
        address: [
          {
            "@type": "PostalAddress",
            streetAddress: "5718 Westheimer Rd, Suite 1000",
            addressLocality: "Houston",
            addressRegion: "TX",
            postalCode: "77057",
            addressCountry: "US",
          },
          {
            "@type": "PostalAddress",
            streetAddress: "1501 St Paul St, Suite 133",
            addressLocality: "Baltimore",
            addressRegion: "MD",
            postalCode: "21202",
            addressCountry: "US",
          },
        ],
        sameAs: contact.social.map((item) => item.href),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Digitalizer capabilities",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI website design and development" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom software engineering" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "UX and product strategy" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Agile project management" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Digital marketing and branding" } },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: seo.name,
        publisher: { "@id": `${siteUrl}/#organization` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
