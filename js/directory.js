/* Directory Data Module (directory.js)
   -----------------------------------------
   Is file me Pakistan ke saare verified security agency, banks, telco networks aur digital wallet directory contacts store hain.
   Naye items ko is array me add karne, remove karne, ya reorder karne se poori website ka UI automatically update ho jayega.
   Aapko kisi bhi HTML page ko manually edit karne ki zaroorat nahi padegi.
   
   Roman Urdu Developer Guide:
   - Naya Bank ya Agency add karne ke liye niche `pakistanDirectory` array me ek naya object insert karein.
   - Object structure ko check karein aur ensure karein ke `id`, `name`, `abbreviation`, `description`, `website` aur `points` correctly specified hon.
   - Is data ko dynamic tarike se access karne ke liye `window.pakistanDirectory` global scope me bind kiya gaya hai.
*/

const pakistanDirectory = [
  {
    id: 'nccia',
    name: 'National Cyber Crime Investigation Agency (NCCIA)',
    abbreviation: 'NCCIA',
    description: 'Pakistan\'s premier federal authority dedicated to cyber crime investigations, forensic analysis, and safeguarding digital spaces. NCCIA accepts and processes public complaints regarding online harassment, hacking, and financial fraud with utmost security.',
    website: 'https://complaint.nccia.gov.pk/',
    email: 'helpdesk@nccia.gov.pk',
    complaintPortal: 'https://complaint.nccia.gov.pk/',
    phone: '1799'
  },
  {
    id: 'fia',
    name: 'Federal Investigation Agency (FIA)',
    abbreviation: 'FIA',
    description: 'The premier national law enforcement agency responsible for combating high-level financial crimes, immigration fraud, and legacy cybercrimes. Operates in close coordination with specialized digital wings to protect citizens.',
    website: 'https://fia.gov.pk/',
    email: 'complaints@fia.gov.pk',
    complaintPortal: 'https://complaint.fia.gov.pk/',
    phone: '051-111-345-786'
  },
  {
    id: 'pta',
    name: 'Pakistan Telecommunication Authority (PTA)',
    abbreviation: 'PTA',
    description: 'The apex telecom regulator of Pakistan, overseeing telecommunication systems, digital access, and network compliance. PTA actively assists consumers with SIM card verifications, mobile device blocks (DIRBS), and filtering malicious digital content.',
    website: 'https://pta.gov.pk/',
    complaintPortal: 'https://complaint.pta.gov.pk/',
    phone: '0800-25625'
  },
  {
    id: 'nadra',
    name: 'National Database and Registration Authority (NADRA)',
    abbreviation: 'NADRA',
    description: 'The official state identity registry of Pakistan, providing world-class biometric verifications, digital identification certificates, and secure national identity databases to prevent digital identity theft.',
    website: 'https://www.nadra.gov.pk/'
  },
  {
    id: 'sbp',
    name: 'State Bank of Pakistan (SBP) CPD',
    abbreviation: 'SBP',
    description: 'The central bank of Pakistan\'s Consumer Protection Department. SBP regulates commercial banking, microfinance institutions, and digital wallets, ensuring fair dispute resolution and strong protection for customer deposits.',
    website: 'https://cpd.sbp.org.pk/',
    points: [
      'Escalate complaints here if your commercial bank fails to resolve fraud disputes within 45 days.',
      'Never share passwords, PINs, or OTPs with anyone, including State Bank staff.'
    ]
  },
  {
    id: 'easypaisa',
    name: 'Easypaisa (Telenor Microfinance Bank)',
    abbreviation: 'Easypaisa',
    description: 'A leading digital financial services platform and licensed microfinance bank in Pakistan. Regulated under SBP, providing secure mobile wallet services, digital payments, and small-scale loans to promote financial inclusion.',
    website: 'https://easypaisa.com.pk/',
    points: [
      'Official transaction alerts ONLY come from 3737.',
      'Never share your 5-digit PIN, OTP, or passwords with anyone.',
      'Report unauthorized transactions immediately inside the Easypaisa App.'
    ]
  },
  {
    id: 'jazzcash',
    name: 'JazzCash (Mobilink Microfinance Bank)',
    abbreviation: 'JazzCash',
    description: 'A widely used mobile wallet and branchless banking service operated by Mobilink Microfinance Bank. Supervised by the SBP, providing nationwide digital payment rails, micro-loans, and safe mobile money transfers.',
    website: 'https://www.jazzcash.com.pk/',
    points: [
      'Official messages only originate from JazzCash or 8558.',
      'Block your wallet instantly if your SIM card is cloned or lost.',
      'JazzCash agents will never call to ask for your MPIN.'
    ]
  },
  {
    id: 'nayapay',
    name: 'NayaPay (Electronic Money Institution)',
    abbreviation: 'NayaPay',
    description: 'A prominent SBP-licensed Electronic Money Institution (EMI) offering chat-based digital wallets, secure Visa debit cards, and seamless digital transaction services tailored for everyday consumers and freelancers.',
    website: 'https://www.nayapay.com/',
    points: [
      'Check card freeze option directly inside the NayaPay App if card is misplaced.',
      'Report suspicious digital transactions at support@nayapay.com.'
    ]
  },
  {
    id: 'sadapay',
    name: 'SadaPay (Electronic Money Institution)',
    abbreviation: 'SadaPay',
    description: 'An SBP-authorized Electronic Money Institution (EMI) offering contemporary digital account services, fee-free Mastercard debit cards, and streamlined mobile finance management with enhanced digital safety.',
    website: 'https://sadapay.pk/',
    points: [
      'SadaPay will never request your PIN or passcode over any call.',
      'In-app support is available 24/7 for freezing cards instantly.'
    ]
  },
  {
    id: 'upaisa',
    name: 'UPaisa (U Microfinance Bank)',
    abbreviation: 'UPaisa',
    description: 'A fast-growing branchless digital wallet solution powered by U Microfinance Bank. Fully SBP-licensed, facilitating easy utility payments, money transfers, and rural mobile financial access.',
    website: 'https://upaisa.com/',
    points: [
      'Access your wallet securely via the UPaisa mobile app or dial *786#.',
      'Report phishing SMS or scam calls claiming to be from UPaisa.'
    ]
  },
  {
    id: 'finja',
    name: 'Finja (Electronic Money Institution)',
    abbreviation: 'Finja',
    description: 'An SBP-licensed EMI focused on corporate financial systems, digital salary disbursements, and institutional lending platforms with automated audit logs and secure payment pathways.',
    website: 'https://finja.pk/',
    points: [
      'Regularly audit your commercial ledger logs inside your Finja dashboard.',
      'Never click suspicious redirection shortcuts claiming to be Finja payroll updates.'
    ]
  },
  {
    id: 'alfa',
    name: 'Alfa (Bank Alfalah Digital Wallet)',
    abbreviation: 'Alfa',
    description: 'The premier digital wallet application by Bank Alfalah, allowing individuals to operate instant mobile bank accounts, make contactless payments, and access personal micro-credit facilities securely.',
    website: 'https://www.bankalfalah.com/alfa/',
    points: [
      'Avoid sharing any secure device-binding registration codes.',
      'Always use the official Bank Alfalah store links to download Alfa.'
    ]
  },
  {
    id: 'jazz',
    name: 'Jazz Cellular Support',
    abbreviation: 'Jazz Network',
    description: 'Pakistan\'s largest telecommunications operator. Provides robust customer support for managing SIM card security, blocking lost/stolen SIMs, and reporting cellular spam to protect user privacy.',
    website: 'https://www.jazz.com.pk/',
    phone: '111 (Jazz SIM) or 021-111-300-300',
    points: [
      'Immediately block your SIM card if you lose network signal unexpectedly (possible SIM Swap).',
      'Forward spam/scam SMS numbers to PTA shortcode 9000.'
    ]
  },
  {
    id: 'telenor',
    name: 'Telenor Pakistan Support',
    abbreviation: 'Telenor Network',
    description: 'A leading national mobile network provider offering dedicated services to handle SIM card safety, secure biometric registration inquiries, and the immediate block of stolen connections.',
    website: 'https://www.telenor.com.pk/',
    phone: '345 (Telenor SIM) or 042-111-345-345',
    points: [
      'Block lost SIMs instantly to prevent scammers from receiving your bank transaction OTPs.',
      'Regularly verify active SIM cards registered under your CNIC using PTA shortcode 668.'
    ]
  },
  {
    id: 'zong',
    name: 'Zong 4G Cellular Support',
    abbreviation: 'Zong Network',
    description: 'A premier 4G cellular service provider in Pakistan. Offers essential tools for blocking unauthorized SIM card duplications and reporting malicious telecom caller activities.',
    website: 'https://www.zong.com.pk/',
    phone: '310 (Zong SIM) or 051-111-222-111',
    points: [
      'Verify biometric status of your connection at official franchises only.',
      'Report fake prize callers claiming network lottery awards to Zong authorities.'
    ]
  },
  {
    id: 'ufone',
    name: 'Ufone 4G Cellular Support',
    abbreviation: 'Ufone Network',
    description: 'A PTCL Group subsidiary offering high-speed telecom services. Provides direct support channels for safeguarding customer SIM registries, blocking lost connections, and confirming biometrics.',
    website: 'https://www.ufone.com/',
    phone: '333 (Ufone SIM) or 033-111-333-100',
    points: [
      'Call their support center immediately if your SIM loses network coverage suddenly.',
      'Check active SIM statistics using your CNIC to monitor unregistered numbers.'
    ]
  },
  {
    id: 'hbl',
    name: 'Habib Bank Limited (HBL)',
    abbreviation: 'HBL',
    description: 'The largest commercial financial institution in Pakistan, regulated by the State Bank of Pakistan. Offers robust retail banking, elite customer support, and advanced electronic security protections.',
    website: 'https://www.hbl.com/',
    points: [
      'Avoid responding to spoofed helpline calls asking to re-verify your biometric data over the phone.',
      'Official HBL SMS alerts only come from \'HBL\'.'
    ]
  },
  {
    id: 'meezan',
    name: 'Meezan Bank Limited',
    abbreviation: 'Meezan Bank',
    description: 'Pakistan\'s premier and largest Islamic commercial bank, operating under SBP regulation. Provides comprehensive Shariah-compliant personal savings, digital banking, and secure transaction systems.',
    website: 'https://www.meezanbank.com/',
    points: [
      'Enable Meezan Internet Banking security features (OTP, biometric) on your phone.',
      'Contact Meezan helpline immediately if you receive fraudulent transaction alerts.'
    ]
  },
  {
    id: 'ubl',
    name: 'United Bank Limited (UBL)',
    abbreviation: 'UBL',
    description: 'A leading Pakistani commercial bank at the forefront of digital innovation. Supervised by the SBP, serving millions of active digital users with secure, card-freeze capable mobile solutions.',
    website: 'https://www.ubldigital.com/',
    points: [
      'Lock or freeze cards temporarily via the UBL Digital App in case of fraud.',
      'UBL support never asks for login passwords or CVV codes.'
    ]
  },
  {
    id: 'abl',
    name: 'Allied Bank Limited (ABL)',
    abbreviation: 'ABL',
    description: 'One of the oldest and most reliable commercial banks in Pakistan, fully SBP-regulated. Combines traditional retail services with high-security online transaction systems and dynamic 2FA.',
    website: 'https://www.abl.com/',
    points: [
      'Only trust emails originating from official \'@abl.com\' domains.',
      'Use ABL\'s myABL app for secure electronic funds transfer.'
    ]
  },
  {
    id: 'bankalfalah',
    name: 'Bank Alfalah Limited',
    abbreviation: 'Alfalah',
    description: 'A distinguished commercial bank offering extensive digital financial services under SBP supervision. Provides robust customer safety tools, fraud prevention controls, and dynamic mobile banking.',
    website: 'https://www.bankalfalah.com/',
    points: [
      'Change your ATM and mobile banking PINs regularly.',
      'Report cyber security threats or suspicious links immediately to the bank.'
    ]
  },
  {
    id: 'mcb',
    name: 'MCB Bank Limited',
    abbreviation: 'MCB',
    description: 'A leading private commercial bank regulated by the SBP, servicing a diverse customer base with secure online banking, credit solutions, and dedicated digital security alerts.',
    website: 'https://www.mcb.com.pk/',
    points: [
      'Do not click on links received in MCB SMS alerts.',
      'Always confirm transfer details on your phone screen before entering OTP.'
    ]
  },
  {
    id: 'nbp',
    name: 'National Bank of Pakistan (NBP)',
    abbreviation: 'NBP',
    description: 'The state-owned premier commercial bank of Pakistan under SBP supervision. Handles major public-sector accounts, treasury management services, and highly secure citizen financial operations.',
    website: 'https://www.nbp.com.pk/',
    points: [
      'NBP will never ask for personal bank details or card numbers over unverified cell phone calls.',
      'Official NBP website uses HTTPS and displays a green lock icon.'
    ]
  },
  {
    id: 'faysal',
    name: 'Faysal Bank Limited (FBL)',
    abbreviation: 'FBL',
    description: 'A prominent SBP-regulated Islamic bank. Offers fully certified Shariah-compliant retail banking, secure wealth management, and highly protected online fund transfer networks.',
    website: 'https://www.faysalbank.com/',
    points: [
      'Confirm the transaction amount on your screen before entering your dynamic 2FA code.',
      'Report any phishing attempts simulating Faysal Bank alerts directly to the bank.'
    ]
  },
  {
    id: 'askari',
    name: 'Askari Bank Limited (AKBL)',
    abbreviation: 'AKBL',
    description: 'A trusted SBP-regulated commercial bank offering comprehensive consumer retail banking, secure institutional salary management, and robust mobile transaction tracking.',
    website: 'https://askaribank.com/',
    points: [
      'Use the Askari Mobile App for instant transaction tracking and card management.',
      'Always log out securely from your internet banking sessions.'
    ]
  },
  {
    id: 'soneri',
    name: 'Soneri Bank Limited',
    abbreviation: 'Soneri',
    description: 'A respected retail commercial bank regulated by SBP. Offers nationwide branch networks, secure digital funds transfers, and instant-use debit card security controls.',
    website: 'https://www.soneribank.com/',
    points: [
      'Use Soneri Digital App to immediately report card issues.',
      'Ensure your registration details are kept updated biometric-wise at official branches.'
    ]
  },
  {
    id: 'jsbank',
    name: 'JS Bank Limited',
    abbreviation: 'JS Bank',
    description: 'A major SBP-licensed commercial bank recognized for digital investment services, business banking solutions, and comprehensive customer-oriented debit and credit card safety networks.',
    website: 'https://jsbl.com/',
    points: [
      'Lock your JS Bank card if you notice any suspicious e-commerce activity.',
      'Always change your online portal login details quarterly.'
    ]
  },
  {
    id: 'silkbank',
    name: 'Silkbank Limited',
    abbreviation: 'Silkbank',
    description: 'A private commercial bank specializing in consumer financing, high-value credit card products, and digital savings programs under strict State Bank oversight.',
    website: 'https://www.silkbank.com.pk/',
    points: [
      'Regularly check your card statements to spot unauthorized local transactions.',
      'Silkbank representative calls never demand your active dynamic OTP.'
    ]
  },
  {
    id: 'mcbislamic',
    name: 'MCB Islamic Bank Limited',
    abbreviation: 'MCBIBL',
    description: 'A dedicated subsidiary of MCB Bank providing custom-tailored Islamic retail financial services, digital escrow accounts, and secure online transaction security.',
    website: 'https://www.mcbislamicbank.com.pk/',
    points: [
      'Check that your transaction alerts are being routed to your registered SIM.',
      'Never interact with third-party applications claiming to offer MCB Islamic savings.'
    ]
  },
  {
    id: 'apnabank',
    name: 'Apna Microfinance Bank Limited',
    abbreviation: 'Apna Bank',
    description: 'An SBP-regulated commercial microfinance institution dedicated to providing affordable micro-credit facilities, personal savings accounts, and safe digital transfers to the underbanked.',
    website: 'https://www.apnabank.com.pk/',
    points: [
      'Review your passbook entries periodically at your nearest branch counter.',
      'Ignore phone calls asking for personal details for social welfare programs.'
    ]
  },
  {
    id: 'bok',
    name: 'The Bank of Khyber',
    abbreviation: 'BOK',
    description: 'A premier provincial banking institution owned by the Government of KP. Regulated by SBP, offering high-security Islamic and conventional corporate, commercial, and retail digital accounts.',
    website: 'https://www.bok.com.pk/',
    points: [
      'Verify the authenticity of BOK communication via official portals or branches only.',
      'Keep your online transaction limits configured safely inside your BOK app.'
    ]
  },
  {
    id: 'sindhbank',
    name: 'Sindh Bank Limited',
    abbreviation: 'Sindh Bank',
    description: 'A scheduled commercial bank majority-owned by the Government of Sindh. Fully SBP-regulated, offering secure civil salary disbursements, agricultural financing, and digital card safety.',
    website: 'https://www.sindhbank.com.pk/',
    points: [
      'Use the official Sindh Bank mobile platform to securely execute and track your funds transfers.',
      'Never reveal card pin or other biometric authorization logs to anyone.'
    ]
  }
];

// Globallly bind list for seamless frontend rendering
window.pakistanDirectory = pakistanDirectory;
