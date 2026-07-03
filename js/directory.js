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
    description: 'Pakistan's specialized federal cybercrime investigation agency operating under the Ministry of Interior and Narcotics Control. NCCIA investigates cybercrime, online fraud, digital harassment, hacking, identity theft, and other offences under applicable cyber laws while providing secure complaint registration, digital forensic support, and public cyber safety awarenes.',
    website: 'https://complaint.nccia.gov.pk/',
    email: 'helpdesk@nccia.gov.pk',
    complaintPortal: 'https://complaint.nccia.gov.pk/',
    phone: '1799'
  },
  {
    id: 'fia',
    name: 'Federal Investigation Agency (FIA)',
    abbreviation: 'FIA',
    description: 'Pakistan's premier federal law enforcement agency responsible for investigating federal offences, financial crimes, immigration violations, human trafficking, corruption-related offences within its mandate, and other organized crimes. FIA delivers professional investigative services while protecting the public through lawful enforcement and national coordination.',
    website: 'https://fia.gov.pk/',
    email: 'complaints@fia.gov.pk',
    complaintPortal: 'https://complaint.fia.gov.pk/',
    phone: '051-111-345-786'
  },
  {
    id: 'pta',
    name: 'Pakistan Telecommunication Authority (PTA)',
    abbreviation: 'PTA',
    description: 'Pakistan's national telecommunications regulator responsible for regulating telecom services, protecting consumer interests, managing spectrum resources, promoting secure digital connectivity, facilitating complaint resolution, mobile device registration (DIRBS), SIM verification services, and ensuring compliance across the telecommunications sector.',
    website: 'https://pta.gov.pk/',
    complaintPortal: 'https://complaint.pta.gov.pk/',
    phone: '0800-25625'
  },
  {
    id: 'nadra',
    name: 'National Database and Registration Authority (NADRA)',
    abbreviation: 'NADRA',
    description: 'Pakistan's national identity management authority responsible for citizen registration, secure identity verification, biometric authentication, and issuance of identity documents including CNIC, NICOP, POC, CRC, and related services. NADRA operates the national identity database to support secure governance, public service delivery, and digital identity infrastructure.',
    website: 'https://www.nadra.gov.pk/'
  },
  {
    id: 'sbp',
    name: 'State Bank of Pakistan (SBP),
    abbreviation: 'SBP',
    description: 'The Consumer Protection Department of the State Bank of Pakistan promotes fair banking practices, oversees consumer protection frameworks, facilitates complaint resolution related to regulated financial institutions, and supports a secure, transparent, and trusted financial system for banking and digital payment services.',
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
  description: 'Pakistan\'s leading SBP-regulated digital financial services platform operated by Telenor Microfinance Bank. Easypaisa provides secure mobile wallets, digital payments, domestic money transfers, bill payments, QR payments, savings, insurance, and other financial services to millions of users across Pakistan.',
  website: 'https://easypaisa.com.pk/',
  points: [
    'Official transaction alerts are sent through Easypaisa verified channels, including shortcode 3737.',
    'Never share your PIN, OTP, CVV, or account credentials with anyone, including Easypaisa representatives.',
    'Immediately report unauthorized transactions through the Easypaisa App or Official Customer Support.'
  ]
},
{
  id: 'jazzcash',
  name: 'JazzCash (Mobilink Microfinance Bank)',
  abbreviation: 'JazzCash',
  description: 'A State Bank of Pakistan regulated digital wallet and branchless banking platform operated by Mobilink Microfinance Bank. JazzCash offers secure mobile wallets, instant money transfers, bill payments, QR payments, merchant solutions, and digital financial services nationwide.',
  website: 'https://www.jazzcash.com.pk/',
  points: [
    'Official JazzCash notifications are sent only through verified JazzCash communication channels, including shortcode 8558.',
    'Never disclose your MPIN, OTP, debit card PIN, or verification codes to anyone.',
    'Immediately block your wallet and contact JazzCash Support if your SIM is lost, replaced, or compromised.'
  ]
},
{
  id: 'nayapay',
  name: 'NayaPay (Electronic Money Institution)',
  abbreviation: 'NayaPay',
  description: 'An SBP-licensed Electronic Money Institution (EMI) providing secure digital wallets, Visa debit cards, online payments, money transfers, and modern financial services for individuals and businesses across Pakistan.',
  website: 'https://www.nayapay.com/',
  points: [
    'Freeze your Visa card instantly through the NayaPay App if it is lost or stolen.',
    'Report suspicious transactions immediately via the official NayaPay support channels.',
    'Never share your PIN, OTP, or account verification codes with anyone.'
  ]
},
{
  id: 'sadapay',
  name: 'SadaPay (Electronic Money Institution)',
  abbreviation: 'SadaPay',
  description: 'An SBP-licensed Electronic Money Institution (EMI) offering secure digital accounts, Mastercard debit cards, domestic and international payments, and modern mobile financial services with advanced account security features.',
  website: 'https://sadapay.pk/',
  points: [
    'SadaPay will never ask for your PIN, OTP, passcode, or card security code.',
    'Freeze your card instantly through the SadaPay App if you suspect unauthorized activity.',
    'Use only the official SadaPay App and verified customer support channels.'
  ]
},
{
  id: 'upaisa',
  name: 'UPaisa (U Microfinance Bank)',
  abbreviation: 'UPaisa',
  description: 'A State Bank of Pakistan regulated branchless banking platform operated by U Microfinance Bank. UPaisa provides secure mobile wallets, money transfers, bill payments, mobile top-ups, merchant payments, and digital financial services throughout Pakistan.',
  website: 'https://upaisa.com/',
  points: [
    'Access your UPaisa wallet securely through the official mobile application or *786# service.',
    'Never share your PIN, OTP, or account credentials with anyone.',
    'Report suspicious calls, phishing attempts, or unauthorized transactions immediately through official UPaisa Support.'
  ]
},
{
  id: 'finja',
  name: 'Finja (Electronic Money Institution)',
  abbreviation: 'Finja',
  description: 'An SBP-licensed Electronic Money Institution (EMI) providing secure digital payment solutions, business financial services, payroll management, lending solutions, and embedded finance products for individuals and enterprises across Pakistan.',
  website: 'https://finja.pk/',
  points: [
    'Use only the official Finja website and mobile application to access your account.',
    'Never share your PIN, OTP, passwords, or account verification codes with anyone.',
    'Immediately report any suspicious login attempts or unauthorized transactions through official Finja Support.'
  ]
},
{
  id: 'alfa',
  name: 'Alfa (Bank Alfalah Digital Banking)',
  abbreviation: 'Alfa',
  description: 'The official digital banking platform of Bank Alfalah, providing secure mobile banking, digital accounts, fund transfers, bill payments, QR payments, card management, and a wide range of personal banking services under SBP regulation.',
  website: 'https://www.bankalfalah.com/alfa/',
  points: [
    'Download Alfa only from the official Google Play Store or Apple App Store links provided by Bank Alfalah.',
    'Never share your OTP, PIN, CVV, or device verification codes with anyone.',
    'Immediately lock your debit or credit card through Alfa if you suspect unauthorized activity.'
  ]
},
{
  id: 'jazz',
  name: 'Jazz Cellular Support',
  abbreviation: 'Jazz Network',
  description: 'Pakistan\'s largest digital telecommunications operator, providing nationwide mobile voice, data, and digital services. Jazz offers dedicated customer support for SIM management, lost or stolen SIM blocking, biometric verification, and mobile security assistance.',
  website: 'https://jazz.com.pk/',
  points: [
    'Immediately report and block your SIM if you lose service unexpectedly or suspect a SIM swap.',
    'Never share OTPs received from banks or digital wallets with anyone.',
    'Forward spam or fraudulent SMS messages to PTA shortcode 9000.'
  ]
},
{
  id: 'telenor',
  name: 'Telenor Pakistan Support',
  abbreviation: 'Telenor Network',
  description: 'A leading mobile telecommunications operator providing nationwide voice, data, and digital connectivity services. Telenor Pakistan offers customer support for SIM security, biometric verification, lost SIM replacement, and telecom-related assistance.',
  website: 'https://www.telenor.com.pk/',
  points: [
    'Block a lost or stolen SIM immediately to prevent unauthorized access to OTPs and banking services.',
    'Verify all SIMs registered against your CNIC through PTA official services.',
    'Never share verification codes or personal account information over phone calls.'
  ]
},
{
  id: 'zong',
  name: 'Zong 4G Cellular Support',
  abbreviation: 'Zong Network',
  description: 'A leading telecommunications provider offering nationwide mobile voice, 4G data, and digital connectivity services. Zong provides customer support for SIM security, biometric verification, lost SIM replacement, and mobile account protection.',
  website: 'https://www.zong.com.pk/',
  points: [
    'Visit official Zong Customer Service Centers for biometric verification and SIM replacement.',
    'Immediately report lost or stolen SIM cards to prevent unauthorized access.',
    'Ignore fraudulent calls or messages claiming prizes, rewards, or lottery winnings.'
  ]
},
{
  id: 'ufone',
  name: 'Ufone 4G Cellular Support',
  abbreviation: 'Ufone Network',
  description: 'A PTCL Group telecommunications company providing nationwide mobile voice, data, and digital communication services. Ufone offers customer support for SIM security, biometric verification, lost SIM replacement, and account protection.',
  website: 'https://www.ufone.com/',
  points: [
    'Report lost or stolen SIM cards immediately through official Ufone Customer Support.',
    'Regularly verify the number of SIMs registered against your CNIC using PTA services.',
    'Never share OTPs, verification codes, or personal account information with anyone.'
  ]
},
{
  id: 'hbl',
  name: 'Habib Bank Limited (HBL)',
  abbreviation: 'HBL',
  description: 'Pakistan\'s largest commercial bank, regulated by the State Bank of Pakistan. HBL provides comprehensive retail, corporate, Islamic, SME, and digital banking services with advanced security features for secure financial transactions.',
  website: 'https://www.hbl.com/',
  points: [
    'Official HBL SMS alerts are delivered only through verified HBL sender IDs.',
    'Never share your ATM PIN, OTP, CVV, passwords, or internet banking credentials with anyone.',
    'Immediately report suspicious transactions or phishing attempts through official HBL Customer Support.'
  ]
},
 {
  id: 'meezan',
  name: 'Meezan Bank Limited',
  abbreviation: 'Meezan Bank',
  description: 'Pakistan\'s leading Islamic commercial bank, regulated by the State Bank of Pakistan. Meezan Bank provides Shariah-compliant retail, corporate, SME, investment, and digital banking services with secure online and mobile banking solutions.',
  website: 'https://www.meezanbank.com/',
  points: [
    'Enable biometric authentication and OTP security for Meezan Digital Banking.',
    'Never share your PIN, OTP, passwords, or card details with anyone.',
    'Report suspicious transactions immediately through the official Meezan helpline or mobile app.'
  ]
},
{
  id: 'ubl',
  name: 'United Bank Limited (UBL)',
  abbreviation: 'UBL',
  description: 'A leading commercial bank regulated by the State Bank of Pakistan, offering retail, corporate, Islamic, SME, and digital banking services through secure online and mobile banking platforms.',
  website: 'https://www.ubldigital.com/',
  points: [
    'Temporarily lock or unblock your debit card through the UBL Digital App whenever required.',
    'UBL representatives will never ask for your passwords, OTPs, PINs, or CVV.',
    'Immediately report suspicious transactions through official UBL Customer Support.'
  ]
},
{
  id: 'abl',
  name: 'Allied Bank Limited (ABL)',
  abbreviation: 'ABL',
  description: 'One of Pakistan\'s oldest commercial banks, regulated by the State Bank of Pakistan. Allied Bank offers secure retail, corporate, Islamic, and digital banking services through its nationwide branch and online banking network.',
  website: 'https://www.abl.com/',
  points: [
    'Use the official myABL Digital Banking App for secure banking services.',
    'Only trust emails sent from official @abl.com addresses.',
    'Never share your PIN, OTP, passwords, or debit card information with anyone.'
  ]
},
{
  id: 'bankalfalah',
  name: 'Bank Alfalah Limited',
  abbreviation: 'Alfalah',
  description: 'A leading commercial bank regulated by the State Bank of Pakistan, offering retail, Islamic, corporate, SME, and digital banking services with advanced fraud prevention and secure payment solutions.',
  website: 'https://www.bankalfalah.com/',
  points: [
    'Regularly update your ATM and mobile banking PINs.',
    'Never disclose your OTP, passwords, or debit card security codes.',
    'Report suspicious emails, calls, or fraudulent transactions immediately.'
  ]
},
{
  id: 'mcb',
  name: 'MCB Bank Limited',
  abbreviation: 'MCB',
  description: 'A leading private commercial bank regulated by the State Bank of Pakistan, providing retail, corporate, Islamic, investment, and digital banking services with advanced online security features.',
  website: 'https://www.mcb.com.pk/',
  points: [
    'Never click suspicious links claiming to be from MCB.',
    'Always verify transaction details before entering your OTP.',
    'Report unauthorized transactions immediately through official MCB channels.'
  ]
},
{
  id: 'nbp',
  name: 'National Bank of Pakistan (NBP)',
  abbreviation: 'NBP',
  description: 'A State Bank of Pakistan regulated commercial bank serving retail, corporate, government, and international banking customers through secure digital and branch banking services.',
  website: 'https://www.nbp.com.pk/',
  points: [
    'NBP will never request your PIN, OTP, passwords, or debit card details by phone.',
    'Always access NBP services through the official website or mobile application.',
    'Report suspected fraud immediately through official NBP Customer Support.'
  ]
},
{
  id: 'faysal',
  name: 'Faysal Bank Limited (FBL)',
  abbreviation: 'FBL',
  description: 'A State Bank of Pakistan regulated Islamic commercial bank providing Shariah-compliant retail, corporate, SME, and digital banking services across Pakistan.',
  website: 'https://www.faysalbank.com/',
  points: [
    'Verify all payment details before authorizing transactions.',
    'Never share your OTP, PIN, passwords, or debit card information.',
    'Report phishing emails or fraudulent calls immediately to Faysal Bank.'
  ]
},
{
  id: 'askari',
  name: 'Askari Bank Limited (AKBL)',
  abbreviation: 'AKBL',
  description: 'A State Bank of Pakistan regulated commercial bank offering secure retail, Islamic, corporate, agricultural, and digital banking services through nationwide branches and digital platforms.',
  website: 'https://askaribank.com/',
  points: [
    'Use the Askari Mobile App to securely manage your accounts and payment cards.',
    'Always log out after completing internet banking sessions.',
    'Never disclose your banking credentials or OTP to anyone.'
  ]
},
{
  id: 'soneri',
  name: 'Soneri Bank Limited',
  abbreviation: 'Soneri',
  description: 'A State Bank of Pakistan regulated commercial bank providing retail, Islamic, SME, and corporate banking services with secure digital banking and payment solutions.',
  website: 'https://www.soneribank.com/',
  points: [
    'Use Soneri Digital Banking to monitor your account activity regularly.',
    'Never share your debit card PIN, OTP, or passwords.',
    'Report lost cards or suspicious transactions immediately.'
  ]
},
{
  id: 'jsbank',
  name: 'JS Bank Limited',
  abbreviation: 'JS Bank',
  description: 'A State Bank of Pakistan regulated commercial bank offering retail, corporate, Islamic, investment, and digital banking services with secure online payment and card management solutions.',
  website: 'https://jsbl.com/',
  points: [
    'Lock your payment card immediately if you notice suspicious activity.',
    'Use strong and unique passwords for online banking.',
    'Never share your OTP, PIN, or verification codes.'
  ]
},
{
  id: 'silkbank',
  name: 'Silkbank Limited',
  abbreviation: 'Silkbank',
  description: 'A commercial bank regulated by the State Bank of Pakistan providing retail banking, consumer finance, deposits, and digital banking services with secure electronic payment facilities.',
  website: 'https://www.silkbank.com.pk/',
  points: [
    'Review your account statements regularly for unauthorized transactions.',
    'Silkbank will never ask for your OTP, PIN, or passwords.',
    'Immediately report suspicious activity through official Silkbank Support.'
  ]
},
{
  id: 'mcbislamic',
  name: 'MCB Islamic Bank Limited',
  abbreviation: 'MCBIBL',
  description: 'A State Bank of Pakistan regulated Islamic commercial bank providing Shariah-compliant retail, corporate, SME, and digital banking services with secure online banking facilities.',
  website: 'https://www.mcbislamicbank.com.pk/',
  points: [
    'Ensure your registered mobile number is active for transaction alerts.',
    'Never share your OTP, PIN, passwords, or verification codes.',
    'Use only official MCB Islamic digital banking platforms.'
  ]
},
{
  id: 'apnabank',
  name: 'Apna Microfinance Bank Limited',
  abbreviation: 'Apna Bank',
  description: 'A State Bank of Pakistan regulated microfinance bank providing financial inclusion through savings accounts, microfinance, digital banking, and secure payment services for individuals and small businesses.',
  website: 'https://www.apnabank.com.pk/',
  points: [
    'Review your account activity regularly through official banking channels.',
    'Never disclose your banking credentials or OTP.',
    'Report suspicious calls or fraudulent transactions immediately.'
  ]
},
{
  id: 'bok',
  name: 'The Bank of Khyber',
  abbreviation: 'BOK',
  description: 'A State Bank of Pakistan regulated commercial bank owned by the Government of Khyber Pakhtunkhwa, offering Islamic, conventional, retail, corporate, and digital banking services.',
  website: 'https://www.bok.com.pk/',
  points: [
    'Verify all communications through official Bank of Khyber channels.',
    'Protect your online banking credentials and OTPs.',
    'Monitor your account regularly for unauthorized activity.'
  ]
},
{
  id: 'sindhbank',
  name: 'Sindh Bank Limited',
  abbreviation: 'Sindh Bank',
  description: 'A State Bank of Pakistan regulated commercial bank majority-owned by the Government of Sindh, providing retail, Islamic, corporate, agricultural, and digital banking services across Pakistan.',
  website: 'https://www.sindhbank.com.pk/',
  points: [
    'Use only the official Sindh Bank mobile and internet banking platforms.',
    'Never share your ATM PIN, OTP, or banking passwords.',
    'Immediately report suspicious transactions or phishing attempts through official Sindh Bank Customer Support.'
  ]
}
];

// Globallly bind list for seamless frontend rendering
window.pakistanDirectory = pakistanDirectory;
