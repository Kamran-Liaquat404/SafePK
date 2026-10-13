/* Directory Data Module (directory.js)
   -----------------------------------------
   Official directory containing FIA / NCCIA, SBP, NADRA, BISP, Pakistan Post Office,
   SBP-registered Electronic Money Institutions (EMIs) / Digital Wallets, and SBP-registered Banks.
*/

const pakistanDirectory = [
  // =========================================================================
  // 1. OFFICIAL AGENCIES (FIA / NCCIA, SBP, NADRA, BISP & PAKISTAN POST OFFICE)
  // =========================================================================
  {
    id: 'nccia',
    name: 'National Cyber Crime Investigation Agency (NCCIA)',
    category: 'agency',
    website: 'https://complaint.nccia.gov.pk/',
    email: 'helpdesk@nccia.gov.pk',
    complaintPortal: 'https://complaint.nccia.gov.pk/',
    phone: '1799',
    keywords: 'nccia fia cyber crime cybercrime 1799 nr3c online fraud hacking blackmail whatsapp hack report complaint'
  },
  {
    id: 'fia',
    name: 'Federal Investigation Agency (FIA Pakistan)',
    category: 'agency',
    website: 'https://www.fia.gov.pk/',
    email: 'complaints@fia.gov.pk',
    complaintPortal: 'https://www.fia.gov.pk/complaints',
    phone: '1991',
    keywords: 'fia federal investigation agency cyber crime financial crime 111345786 complaint'
  },
  {
    id: 'nadra',
    name: 'National Database and Registration Authority (NADRA)',
    category: 'agency',
    website: 'https://www.nadra.gov.pk/',
    email: 'csd@nadra.gov.pk',
    complaintPortal: 'https://complaints.nadra.gov.pk/',
    phone: '1777 (Mobile) or 051-111-786-100',
    keywords: 'nadra nadira cnic id card identity pak id biometric verification family tree 7000'
  },
  {
    id: 'bisp',
    name: 'Benazir Income Support Programme (BISP 8171)',
    category: 'agency',
    website: 'https://bisp.gov.pk/',
    email: '',
    phone: '0800-26477',
    keywords: 'bisp 8171 ehsaas kafalat fake sms prize scam benazir income support'
  },
  {
    id: 'pakpost',
    name: 'Pakistan Post Office Department',
    category: 'agency',
    website: 'https://www.pakpost.gov.pk/',
    email: 'customercare@pakpost.gov.pk',
    phone: '051-111-111-117',
    keywords: 'pakistan post post office parcel scam delivery tracking customs fee fraud'
  },

  // =========================================================================
  // 2. SBP REGISTERED DIGITAL WALLETS & ELECTRONIC MONEY INSTITUTIONS (EMIs)
  // =========================================================================
  {
    id: 'easypaisa',
    name: 'Easypaisa Digital Bank',
    category: 'wallet',
    website: 'https://easypaisa.com.pk/',
    email: 'complaints@easypaisa.com.pk',
    phone: '3737',
    keywords: 'easypaisa easy paisa 3737 telenor wallet mobile account block otp fraud raast'
  },
  {
    id: 'jazzcash',
    name: 'JazzCash Mobile Wallet',
    category: 'wallet',
    website: 'https://www.jazzcash.com.pk/',
    email: '',
    phone: '4444',
    keywords: 'jazzcash jazz cash 4444 mobilink wallet account freeze otp scam raast'
  },
  {
    id: 'nayapay',
    name: 'NayaPay (SBP Licensed EMI)',
    category: 'wallet',
    website: 'https://www.nayapay.com/',
    email: 'support@nayapay.com',
    phone: '021-111-222-729',
    keywords: 'nayapay naya pay virtual card visa debit wallet dispute emi'
  },
  {
    id: 'upaisa',
    name: 'UPaisa Mobile Wallet (U Microfinance Bank)',
    category: 'wallet',
    website: 'https://upaisa.com/',
    phone: '7777',
    keywords: 'upaisa u paisa ufone wallet 7777 ubank mobile money'
  },
  {
    id: 'finja',
    name: 'Finja / SimSim Wallet (SBP Licensed EMI)',
    category: 'wallet',
    website: 'https://finja.pk/',
    email: 'info@finja.pk',
    keywords: 'finja simsim wallet emi digital wallet'
  },
  {
    id: 'keenu',
    name: 'Keenu Digital Wallet (Wemsol — SBP Licensed EMI)',
    category: 'wallet',
    website: 'https://www.keenu.pk/',
    email: 'help@keenu.pk',
    phone: '03-111-153-368',
    keywords: 'keenu wemsol netconnect pos wallet merchant payment emi'
  },

  // =========================================================================
  // 3. SBP REGISTERED COMMERCIAL, ISLAMIC & MICROFINANCE BANKS
  // =========================================================================
  {
    id: 'hbl',
    name: 'Habib Bank Limited (HBL)',
    category: 'bank',
    website: 'https://www.hbl.com/',
    email: 'customer.care@hbl.com',
    phone: '111-111-425',
    keywords: 'hbl habib bank limited 1425 card block internet banking'
  },
  {
    id: 'meezan',
    name: 'Meezan Bank Limited',
    category: 'bank',
    website: 'https://www.meezanbank.com/',
    email: 'complaints@meezanbank.com',
    phone: '021-111-331-331',
    keywords: 'meezan bank islamic banking 331331 card block fraud'
  },
  {
    id: 'ubl',
    name: 'United Bank Limited (UBL)',
    category: 'bank',
    website: 'https://www.ubldigital.com/',
    email: 'customer.services@ubl.com.pk',
    phone: '111-825-888',
    keywords: 'ubl united bank limited ubl digital app 825888'
  },
  {
    id: 'mcb',
    name: 'MCB Bank Limited',
    category: 'bank',
    website: 'https://www.mcb.com.pk/',
    email: 'info@mcb.com.pk',
    phone: '111-000-622',
    keywords: 'mcb muslim commercial bank mcb live 000622'
  },
  {
    id: 'bankalfalah',
    name: 'Bank Alfalah Limited',
    category: 'bank',
    website: 'https://www.bankalfalah.com/',
    email: 'contactus@bankalfalah.com',
    phone: '021-111-225-111',
    keywords: 'bank alfalah baf alfa 225111'
  },
  {
    id: 'bankalhabib',
    name: 'Bank AL Habib Limited (BAHL)',
    category: 'bank',
    website: 'https://www.bankalhabib.com/',
    email: 'info@bankalhabib.com',
    phone: '021-111-014-014',
    keywords: 'bank al habib bahl alhabib 014014'
  },
  {
    id: 'nbp',
    name: 'National Bank of Pakistan (NBP)',
    category: 'bank',
    website: 'https://www.nbp.com.pk/',
    phone: '021-111-627-627',
    keywords: 'nbp national bank of pakistan pension digital app 627627'
  },
  {
    id: 'faysal',
    name: 'Faysal Bank Limited (FBL)',
    category: 'bank',
    website: 'https://www.faysalbank.com/',
    email: 'customercare@faysalbank.com',
    phone: '021-111-060-606',
    keywords: 'faysal bank fbl digibank islamic 060606'
  },
  {
    id: 'askari',
    name: 'Askari Bank Limited (AKBL)',
    category: 'bank',
    website: 'https://askaribank.com/',
    phone: '051-111-000-787',
    keywords: 'askari bank akbl 000787'
  },
  {
    id: 'bop',
    name: 'The Bank of Punjab (BOP)',
    category: 'bank',
    website: 'https://www.bop.com.pk/',
    email: 'complaints@bop.com.pk',
    phone: '042-111-267-200',
    keywords: 'bop bank of punjab digibop 267200'
  },
  {
    id: 'bankislami',
    name: 'BankIslami Pakistan Limited',
    category: 'bank',
    website: 'https://bankislami.com.pk/',
    email: 'complaints@bankislami.com.pk',
    phone: '021-111-475-264',
    keywords: 'bankislami bank islami 247111'
  },
  {
    id: 'mcbislamic',
    name: 'MCB Islamic Bank Limited (MIB)',
    category: 'bank',
    website: 'https://www.mcbislamicbank.com/',
    email: 'quality.service@mcbislamicbank.com',
    phone: '042-111-222-642',
    keywords: 'mcb islamic bank mib 222642'
  },
];

// Globally bind list for frontend rendering
window.pakistanDirectory = pakistanDirectory;
