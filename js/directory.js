/* Directory Data Module (directory.js)
   -----------------------------------------
   Is file me Pakistan ke saare SBP-regulated commercial banks, Islamic banks, microfinance banks, aur digital wallets (EMIs) directory contacts store hain.
   Is list me koi bhi non-professional ya generic organizational data nahi hai. Only certified banks aur wallets shamil hain.
   
   Roman Urdu Developer Guide:
   - Naya Bank ya Wallet add karne ke liye niche `pakistanDirectory` array me ek naya object insert karein.
   - Object structure ko check karein aur ensure karein ke `id`, `name`, `abbreviation`, `description`, `website` aur `points` correctly specified hon.
   - Is data ko dynamic tarike se access karne ke liye `window.pakistanDirectory` global scope me bind kiya gaya hai.
*/

const pakistanDirectory = [
  // --- PAKISTAN OFFICIAL REGULATORY & SAFETY AGENCIES ---
  {
    id: 'nccia',
    name: 'National Cyber Crime Investigation Agency',
    abbreviation: 'NCCIA',
    description: 'The premier specialized independent agency in Pakistan responsible for investigating cybercrimes, digital threats, online harassment, and electronic financial frauds, succeeding the FIA Cyber Crime Wing.',
    website: 'https://nccia.gov.pk/',
    phone: '1799',
    email: 'info@nccia.gov.pk',
    points: [
      'Officially designated to receive and investigate cybercrime and online harassment complaints in Pakistan.',
      'Never share any password, verification code, or PIN with anyone claiming to represent NCCIA.',
      'Submit your complaints directly through the official NCCIA secure portal or designated regional offices.'
    ]
  },
  {
    id: 'fia',
    name: 'Federal Investigation Agency',
    abbreviation: 'FIA CCW',
    description: 'The specialized federal wing of the FIA dedicated to combatting electronic crimes, cyberterrorism, identity theft, and high-tech financial fraud across Pakistan.',
    website: 'https://complaint.fia.gov.pk/',
    phone: '1991',
    email: 'helpdesk@cybercrime.gov.pk',
    points: [
      'Official FIA communications are only dispatched from verified official channels.',
      'Do not share credit card details, OTPs, or bank logins under any circumstances.',
      'You can check your existing complaint status online via the official FIA CCW portal.'
    ]
  },
  {
    id: 'pta',
    name: 'Pakistan Telecommunication Authority',
    abbreviation: 'PTA',
    description: 'The state regulatory body responsible for establishment, operation, and maintenance of telecommunications in Pakistan, protecting consumer rights and managing the national blocking of offensive online content.',
    website: 'https://complaint.pta.gov.pk/',
    phone: '1603',
    email: 'complaint@pta.gov.pk',
    points: [
      'Verify your mobile device registration status only via the official PTA DIRBS system (*8484#).',
      'Report unlawful web content, bulk SMS spam, and suspicious phone numbers to the PTA via shortcode 7729.',
      'Register unresolved telecom service complaints directly on the official PTA Consumer Portal.'
    ]
  },
  {
    id: 'nadra',
    name: 'National Database and Registration Authority',
    abbreviation: 'NADRA',
    description: 'The state registration authority of Pakistan managing national identity records, biometrics, family registries, and secure civil database systems.',
    website: 'https://www.nadra.gov.pk/',
    email: 'info@nadra.gov.pk',
    points: [
      'Verify your registered mobile SIM count using the official SMS service by texting CNIC to 668.',
      'Never share your biometrics or SMS verification codes with unverified agents.',
      'NADRA will never request your bank credentials or security PINs over phone calls.'
    ]
  },
  {
    id: 'sbp',
    name: 'State Bank of Pakistan',
    abbreviation: 'SBP',
    description: 'The central bank of Pakistan responsible for regulating the monetary policy, commercial banks, microfinance institutions, payment systems, and electronic money institutions (EMIs).',
    website: 'https://www.sbp.org.pk/',
    email: 'cpd.helpdesk@sbp.org.pk',
    points: [
      'SBP regulates and monitors all banks, microfinance banks, and electronic money institutions (EMIs) in Pakistan.',
      'Escalate unresolved bank disputes and payment grievances directly to the SBP Consumer Protection Department.',
      'SBP representatives will never call you to request credit card pins, OTPs, or biometric verification details.'
    ]
  },
  {
    id: 'bisp',
    name: 'Benazir Income Support Programme',
    abbreviation: 'BISP',
    description: 'The national social safety net program in Pakistan, providing financial assistance and welfare payments to eligible low-income families.',
    website: 'https://bisp.gov.pk/',
    phone: '8171',
    email: 'info@bisp.gov.pk',
    points: [
      'Official BISP communications and cash transfer alerts are sent strictly from shortcode 8171.',
      'Beware of fake SMS alerts, phone calls, or websites asking for fee payments to unlock BISP grants.',
      'Never share your CNIC or biometrics with unauthorized individuals promising cash rewards.'
    ]
  },

  // --- DIGITAL WALLETS & EMIs ---
  {
    id: 'easypaisa',
    name: 'Easypaisa',
    abbreviation: 'Easypaisa',
    description: "Pakistan's leading SBP-regulated digital financial services platform operated by Telenor Microfinance Bank. Easypaisa provides secure mobile wallets, digital payments, domestic money transfers, bill payments, QR payments, savings, insurance, and other financial services to millions of users across Pakistan.",
    website: 'https://easypaisa.com.pk/',
    points: [
      'Official transaction alerts are sent through Easypaisa verified channels, including shortcode 3737.',
      'Never share your PIN, OTP, CVV, or account credentials with anyone, including Easypaisa representatives.',
      'Immediately report unauthorized transactions through the Easypaisa App or Official Customer Support.'
    ]
  },
  {
    id: 'jazzcash',
    name: 'JazzCash',
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
    name: 'NayaPay',
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
    name: 'SadaPay',
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
    name: 'UPaisa',
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
    name: 'Finja',
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
    name: 'Alfa (Bank Alfalah)',
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
    id: 'keenu',
    name: 'Keenu',
    abbreviation: 'Keenu Wallet',
    description: 'An SBP-licensed Electronic Money Institution (EMI) offering progressive digital wallet apps, merchant POS installations, and incredibly secure online/offline shopping payments.',
    website: 'https://keenu.pk/',
    points: [
      'Monitor card and app purchases instantly using Keenu App notification center.',
      'Do not share your Keenu wallet passcode or login OTP with third parties.',
      'Regularly rotate your payment security PIN code.'
    ]
  },
  {
    id: 'careempay',
    name: 'CareemPay',
    abbreviation: 'CareemPay',
    description: 'An SBP-licensed digital EMI wallet integrated inside Careem Super App, allowing users to make secure online payments, send money, split bills, and save digital coins.',
    website: 'https://www.careem.com/careempay/',
    points: [
      'Verify that your Careem App account has two-factor authentication enabled.',
      'Never tell anyone your Ride or CareemPay security PIN/OTP code.',
      'Report any unapproved digital wallet transactions immediately through the Careem App support.'
    ]
  },
  {
    id: 'yappakistan',
    name: 'YAP Pakistan',
    abbreviation: 'YAP Wallet',
    description: 'An innovative SBP-licensed EMI digital wallet providing users with beautiful expense-tracking debit cards, instant domestic/international transfers, and elite virtual budget controls.',
    website: 'https://www.yap.com/',
    points: [
      'Create temporary virtual cards inside the YAP App for highly secure online shopping.',
      'Never disclose your YAP app passcode, CVV, or card security PIN.',
      'Freeze your YAP card instantly from the app if you suspect it is lost or stolen.'
    ]
  },
  {
    id: 'konnect',
    name: 'Konnect by HBL',
    abbreviation: 'Konnect',
    description: 'The branchless digital banking service from Habib Bank Limited (HBL) regulated by the SBP, offering secure mobile wallets, instant utility payments, and cardless digital transactions.',
    website: 'https://www.hbl.com/personal/konnect/',
    points: [
      'Use only official Konnect App or verified shortcodes (*786#) for your wallet.',
      'HBL will never ask you for your Konnect account MPIN or OTP over phone call.',
      'Immediately lock your Konnect wallet if your registered mobile SIM is lost or swapped.'
    ]
  },

  // --- MAJOR COMMERCIAL & ISLAMIC BANKS ---
  {
    id: 'hbl',
    name: 'Habib Bank Limited (HBL)',
    abbreviation: 'HBL',
    description: "Pakistan's largest commercial bank, regulated by the State Bank of Pakistan. HBL provides comprehensive retail, corporate, Islamic, SME, and digital banking services with advanced security features for secure financial transactions.",
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
    description: "Pakistan's leading Islamic commercial bank, regulated by the State Bank of Pakistan. Meezan Bank provides Shariah-compliant retail, corporate, SME, investment, and digital banking services with secure online and mobile banking solutions.",
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
    description: "One of Pakistan's oldest commercial banks, regulated by the State Bank of Pakistan. Allied Bank offers secure retail, corporate, Islamic, and digital banking services through its nationwide branch and online banking network.",
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
    description: 'A leading commercial bank regulated by the State Bank of Pakistan (SBP), offering retail, Islamic, corporate, SME, and digital banking services with advanced fraud prevention and secure payment solutions.',
    website: 'https://www.bankalfalah.com/',
    points: [
      'Regularly update your ATM and mobile banking PINs.',
      'Never disclose your OTP, PIN, passwords, CVV, or debit card security codes.',
      'Report suspicious emails, calls, or unauthorized transactions immediately through official Bank Alfalah support channels.'
    ]
  },
  {
    id: 'mcb',
    name: 'MCB Bank Limited',
    abbreviation: 'MCB',
    description: 'A leading commercial bank regulated by the State Bank of Pakistan (SBP), providing retail, corporate, Islamic, investment, SME, and digital banking services with advanced security features.',
    website: 'https://www.mcb.com.pk/',
    points: [
      'Never click suspicious links claiming to represent MCB.',
      'Always verify transaction details before entering your OTP.',
      'Report unauthorized transactions immediately through official MCB customer support.'
    ]
  },
  {
    id: 'nbp',
    name: 'National Bank of Pakistan (NBP)',
    abbreviation: 'NBP',
    description: 'A commercial bank regulated by the State Bank of Pakistan (SBP), providing retail, corporate, government, and international banking services through secure branch and digital banking platforms.',
    website: 'https://www.nbp.com.pk/',
    points: [
      'NBP will never request your PIN, OTP, passwords, or debit card details over phone calls, emails, or SMS.',
      'Always access NBP services through the official website or mobile application.',
      'Report suspected fraud immediately through official NBP customer support.'
    ]
  },
  {
    id: 'faysal',
    name: 'Faysal Bank Limited (FBL)',
    abbreviation: 'FBL',
    description: 'A State Bank of Pakistan (SBP) regulated Islamic commercial bank offering Shariah-compliant retail, corporate, SME, and digital banking services across Pakistan.',
    website: 'https://www.faysalbank.com/',
    points: [
      'Verify all payment details before authorizing any transaction.',
      'Never share your OTP, PIN, passwords, CVV, or debit card information.',
      'Report phishing emails, fraudulent calls, or suspicious transactions immediately through official Faysal Bank support.'
    ]
  },
  {
    id: 'askari',
    name: 'Askari Bank Limited (AKBL)',
    abbreviation: 'AKBL',
    description: 'A State Bank of Pakistan (SBP) regulated commercial bank offering retail, Islamic, corporate, agricultural, and digital banking services through a nationwide branch network and secure digital platforms.',
    website: 'https://askaribank.com/',
    points: [
      'Use the official Askari Mobile App to manage your accounts and payment cards securely.',
      'Always log out after completing internet banking sessions.',
      'Never disclose your banking credentials, PIN, or OTP to anyone.'
    ]
  },
  {
    id: 'soneri',
    name: 'Soneri Bank Limited',
    abbreviation: 'Soneri',
    description: 'A State Bank of Pakistan (SBP) regulated commercial bank providing retail, Islamic, SME, corporate, and secure digital banking services.',
    website: 'https://www.soneribank.com/',
    points: [
      'Monitor your account activity regularly through Soneri Digital Banking.',
      'Never share your debit card PIN, OTP, passwords, or verification codes.',
      'Report lost cards or suspicious transactions immediately through official Soneri Bank support.'
    ]
  },
  {
    id: 'jsbank',
    name: 'JS Bank Limited',
    abbreviation: 'JS Bank',
    description: 'A State Bank of Pakistan (SBP) regulated commercial bank offering retail, corporate, Islamic, investment, SME, and digital banking services with secure online payment solutions.',
    website: 'https://jsbl.com/',
    points: [
      'Lock your payment card immediately if you notice suspicious activity.',
      'Use strong, unique passwords for online banking.',
      'Never share your OTP, PIN, passwords, or verification codes.'
    ]
  },
  {
    id: 'silkbank',
    name: 'Silkbank Limited',
    abbreviation: 'Silkbank',
    description: 'A commercial bank regulated by the State Bank of Pakistan (SBP), providing retail banking, consumer finance, deposit accounts, and secure digital banking services.',
    website: 'https://www.silkbank.com.pk/',
    points: [
      'Review your account statements regularly for unauthorized transactions.',
      'Silkbank will never ask for your OTP, PIN, or passwords.',
      'Report suspicious activity immediately through official Silkbank customer support.'
    ]
  },
  {
    id: 'mcbislamic',
    name: 'MCB Islamic Bank Limited',
    abbreviation: 'MCBIBL',
    description: 'A State Bank of Pakistan (SBP) regulated Islamic commercial bank providing Shariah-compliant retail, corporate, SME, and secure digital banking services.',
    website: 'https://www.mcbislamicbank.com.pk/',
    points: [
      'Ensure your registered mobile number remains active for transaction alerts.',
      'Never share your OTP, PIN, passwords, or verification codes.',
      'Use only official MCB Islamic digital banking platforms.'
    ]
  },
  {
    id: 'bok',
    name: 'The Bank of Khyber',
    abbreviation: 'BOK',
    description: 'A State Bank of Pakistan (SBP) regulated commercial bank owned by the Government of Khyber Pakhtunkhwa, offering Islamic, conventional, retail, corporate, and digital banking services.',
    website: 'https://www.bok.com.pk/',
    points: [
      'Verify all communications through official Bank of Khyber channels.',
      'Protect your online banking credentials, PIN, and OTP.',
      'Monitor your account regularly for unauthorized activity.'
    ]
  },
  {
    id: 'sindhbank',
    name: 'Sindh Bank Limited',
    abbreviation: 'Sindh Bank',
    description: 'A State Bank of Pakistan (SBP) regulated commercial bank majority-owned by the Government of Sindh, providing retail, Islamic, corporate, agricultural, and digital banking services across Pakistan.',
    website: 'https://www.sindhbank.com.pk/',
    points: [
      'Use only the official Sindh Bank mobile and internet banking platforms.',
      'Never share your ATM PIN, OTP, passwords, or banking credentials.',
      'Report suspicious transactions or phishing attempts immediately through official Sindh Bank customer support.'
    ]
  },
  {
    id: 'scb',
    name: 'Standard Chartered Bank Pakistan',
    abbreviation: 'Standard Chartered',
    description: 'A premium international commercial bank regulated by the State Bank of Pakistan, delivering retail, corporate, and digital banking services with elite security and worldwide transactional protection.',
    website: 'https://www.sc.com/pk/',
    points: [
      'Always use SC Mobile Pakistan app with activated biometric login for highest security.',
      'Standard Chartered will never ask you for your login passwords or digital card verification codes.',
      'Report unauthorized transactions immediately to SC helpline 111-002-002.'
    ]
  },
  {
    id: 'bankalhabib',
    name: 'Bank Al Habib Limited',
    abbreviation: 'Bank Al Habib',
    description: 'A highly trusted commercial bank in Pakistan, regulated by SBP, providing secure retail, trade finance, corporate, Islamic, and mobile banking services with high-class transaction tracking.',
    website: 'https://www.bankalhabib.com/',
    points: [
      'Always verify AL Habib SMS notifications are received only from shortcode 8114.',
      'Never share your ATM PIN, Web Password, or mobile app MPIN with anyone.',
      'Block lost debit cards instantly via the AL Habib Digital App.'
    ]
  },
  {
    id: 'habibmetro',
    name: 'Habib Metropolitan Bank',
    abbreviation: 'HabibMetro',
    description: 'A major commercial bank regulated by the State Bank of Pakistan, specializing in trade finance, retail banking, Islamic banking, and secure digital operations with advanced multi-factor security solutions.',
    website: 'https://www.habibmetro.com/',
    points: [
      'Access online banking safely through official Web/App portals only.',
      'Keep your contact info updated to receive instant transaction alerts.',
      'Never share login IDs, passwords, or SMS OTP codes.'
    ]
  },
  {
    id: 'bop',
    name: 'The Bank of Punjab',
    abbreviation: 'BOP',
    description: 'A prominent commercial bank regulated by the State Bank of Pakistan, offering retail, corporate, Islamic, and agricultural banking services with state-of-the-art security layers.',
    website: 'https://www.bop.com.pk/',
    points: [
      'Never respond to unauthorized calls or messages asking for BOP account verification.',
      'Only download the DigiBOP mobile app from official Google Play Store or iOS App Store.',
      'Report fraudulent activities immediately to BOP Helpline at 111-267-200.'
    ]
  },
  {
    id: 'dib',
    name: 'Dubai Islamic Bank Pakistan',
    abbreviation: 'Dubai Islamic',
    description: 'A pioneering Shariah-compliant Islamic commercial bank in Pakistan, regulated by the SBP, providing retail, corporate, and investment services with robust and secure electronic channels.',
    website: 'https://www.dibpak.com/',
    points: [
      'Activate instant mobile SMS and Email notifications for all transactions.',
      'The bank never requests sensitive PINs, OTPs, or CVV codes over calls or SMS.',
      'Update your online banking credentials regularly for optimal safety.'
    ]
  },
  {
    id: 'bankislami',
    name: 'BankIslami Pakistan Limited',
    abbreviation: 'BankIslami',
    description: 'A leading dedicated Islamic commercial bank regulated by the SBP, offering Shariah-compliant retail, corporate, and consumer banking services with biometric-enabled safe payment channels.',
    website: 'https://bankislami.com.pk/',
    points: [
      'Make use of BankIslami Biometric ATM services for cardless, super-secure withdrawals.',
      'Never share your OTP or digital banking passwords with anyone.',
      'Keep your contact numbers updated to receive fast transaction alerts.'
    ]
  },
  {
    id: 'samba',
    name: 'Samba Bank Limited',
    abbreviation: 'Samba',
    description: 'An SBP-regulated commercial bank delivering professional retail, corporate, investment, and digital banking services with world-class transaction protocols.',
    website: 'https://www.samba.com.pk/',
    points: [
      'Ensure you use Samba Smart mobile app only on secure personal devices.',
      'Never share your ATM or digital banking PIN/passwords with anyone.',
      'Block payment cards instantly via the app if they are misplaced.'
    ]
  },
]
// Globally bind list for seamless frontend rendering
window.pakistanDirectory = pakistanDirectory;
