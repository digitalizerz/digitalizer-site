export const contact = {
  phone: {
    label: "1-832-225-2424",
    href: "tel:+18322252424",
  },
  email: {
    label: "business@digitalizer.io",
    href: "mailto:business@digitalizer.io",
  },
  offices: [
    {
      city: "Baltimore",
      note: "Headquarters",
      lines: ["1501 St Paul St, Suite 133", "Baltimore, MD 21202"],
    },
    {
      city: "Houston",
      note: "Office",
      lines: ["5718 Westheimer Rd, Suite 1000", "Houston, TX 77057"],
    },
  ],
  social: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/digitalizer.io",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/digitalizer.io",
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/digitalizer.io",
    },
  ],
  legalName: "Digitalizer LLC",
} as const;

export const contactPage = {
  eyebrow: "Contact",
  supporting:
    "Tell us what you’re trying to do. We’ll help turn it into a clear next step.",
  form: {
    name: "Name",
    email: "Email",
    subject: "Subject",
    details: "Project details",
    detailsHint: "Brief project details",
    submit: "Send the message",
    sending: "Sending",
    success:
      "Thanks. We’ll review this and follow up. You can also reach us by phone or email.",
  },
} as const;
