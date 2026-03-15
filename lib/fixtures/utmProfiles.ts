export const utmProfiles = [
  {
    "id": "utm_1",
    "label": "Email Standard",
    "source": "email",
    "medium": "affiliate",
    "campaign": "dynamic",
    "contentTemplate": "{{variant}}"
  },
  {
    "id": "utm_2",
    "label": "Instagram Story",
    "source": "instagram",
    "medium": "affiliate",
    "campaign": "dynamic",
    "contentTemplate": "story_{{variant}}"
  },
  {
    "id": "utm_3",
    "label": "Partner Site",
    "source": "partner_site",
    "medium": "affiliate",
    "campaign": "dynamic",
    "contentTemplate": "site_placement"
  }
] as const
