/* Global Data Module (data.js)
   -----------------------------------------
   Is file me generic static content aur resources store hain (jaise dynamic resource links).
   Note: Learn aur Directory section ka data ab unki apni dedicated files (`learn.js` aur `directory.js`) me move ho chuka hai,
   jis se project ki scalability aur maintenance behtar ho gayi hai.
   
   Roman Urdu Developer Guide:
   - Agar kisi page me scripts missing hon toh crash na ho, isliye hum ne niche safe fallbacks lagaye hain.
   - Resource links ko update karne ke liye `resourcesData` array ko edit karein.
*/

// Curated educational safety references list
const resourcesData = [
  {
    title: 'FIA Cyber Crime Application Portal',
    url: 'https://complaint.fia.gov.pk/',
    description: 'The official digital wing to register complaints regarding blackmailing, financial frauds, and hacking threats.',
    category: 'reporting'
  },
  {
    title: 'PTA Online Complaint Portal',
    url: 'https://complaint.pta.gov.pk/RegisterComplaint.aspx',
    description: 'Register complaints against offensive web systems, anonymous bulk spam, or SIM registry discrepancies.',
    category: 'reporting'
  },
  {
    title: 'State Bank Banking Grievances Wing',
    url: 'https://cpd.sbp.org.pk/',
    description: 'Escalate commercial bank complaint resolution failures directly to SBP’s regulatory department.',
    category: 'reporting'
  },
  {
    title: 'PKCERT National Security Advisories',
    url: 'https://pkcert.gov.pk/advisories',
    description: 'Download standard updates, malware catalog records, and network configuration firewall alerts.',
    category: 'government'
  },
  {
    title: 'NADRA Verify Services',
    url: 'https://www.nadra.gov.pk/',
    description: 'Verify national registration details, monitor family list registries, and trace security codes.',
    category: 'government'
  },
  {
    title: 'Digital Rights Foundation (DRF) Pakistan',
    url: 'https://digitalrightsfoundation.pk/',
    description: 'Pakistan\'s premier digital derechos NGO, offering support against harassment and cyberstalking to students and girls.',
    category: 'safety'
  },
  {
    title: 'Cyber Harassment Hotline (DRF)',
    url: 'https://digitalrightsfoundation.pk/cyber-harassment-hotline/',
    description: 'A dedicated, free, and completely confidential helpline (0800-39393) to report online harassment.',
    category: 'reporting'
  },
  {
    title: 'Nighaban Initiative (DRF)',
    url: 'https://digitalrightsfoundation.pk/projects/nighaban/',
    description: 'Cybersecurity workshops and remote educational campaigns structured for students across Pakistan.',
    category: 'educational'
  },
  {
    title: 'FIA Cyber Crime Wing Regional Centers',
    url: 'https://complaint.fia.gov.pk/regionalcircles',
    description: 'Lookup circle office details and addresses in Lahore, Karachi, Islamabad, Peshawar, and Quetta.',
    category: 'government'
  },
  {
    title: 'BISP Official Scam Alert Guide',
    url: 'https://bisp.gov.pk/',
    description: 'Official safety warnings clarifying grant verifications and fraudulent cash lottery SMS alerts.',
    category: 'awareness'
  },
  {
    title: 'VirusTotal Link Inspect Tool',
    url: 'https://www.virustotal.com/',
    description: 'Scan hyperlinks utilizing 70+ antiviruses and blacklist engines in real-time, completely free.',
    category: 'safety'
  },
  {
    title: 'Bitwarden Password Manager',
    url: 'https://bitwarden.com/',
    description: 'Secure, highly praised password manager that syncs passwords across smartphones and laptops.',
    category: 'safety'
  },
  {
    title: 'Google Safety Center - Family Safety',
    url: 'https://safety.google/',
    description: 'Parental controls, safe surfing setups, YouTube kids management, and mobile tracking guides.',
    category: 'educational'
  },
  {
    title: 'APWG (Anti-Phishing Working Group)',
    url: 'https://apwg.org/',
    description: 'A global repository tracking phishing website campaigns, scam servers, and malware threats.',
    category: 'awareness'
  }
];

// Safe fallbacks to prevent crashes in case individual modules are missing
if (typeof window.learningTopics === 'undefined') {
  window.learningTopics = [];
}
if (typeof window.pakistanDirectory === 'undefined') {
  window.pakistanDirectory = [];
}
if (typeof window.articlesData === 'undefined') {
  window.articlesData = [];
}

// Bind variables to global window scope
window.resourcesData = resourcesData;
