/* Learn Data Module (learn.js)
   -----------------------------------------
   Comprehensive, polite, and easy-to-read cybersecurity awareness and scam prevention guides for Pakistan.
   All guides are written in clear, respectful English so everyday users can read them effortlessly,
   and our language switcher can translate them cleanly into Urdu when selected.
*/
const learningTopics = [
  {
    id: 'phishing-scams',
    title: 'Phishing Links & Fake Login Pages',
    category: 'Account Safety',
    overview: 'Online scammers often create imitation websites that look like banks, government portals, courier companies, or social media login pages to collect passwords and personal details through SMS, WhatsApp, and email.',
    warningSigns: [
      'Urgent messages claiming your bank account or mobile wallet has been suspended or needs immediate verification.',
      'Unfamiliar website links such as hbl-secure-login.com, meezan-verify.net, or bisp8171-update.com instead of official domains.',
      'Spelling errors, unusual web addresses, or requests to enter your PIN or password on an external web link.',
      'High-pressure messages asking you to click a link immediately to avoid account closure.'
    ],
    examples: [
      'An SMS stating: "Your bank account has been temporarily restricted. Please verify your details immediately at [unverified link]."',
      'A WhatsApp message asking you to complete a mandatory account update through an unofficial web link.'
    ],
    preventionTips: [
      'Always check the official website address (URL) carefully before entering your username or password.',
      'Use only official mobile banking apps downloaded from Google Play Store or Apple App Store.',
      'Enable Two-Factor Authentication (2FA) on all your email, banking, and social media accounts.'
    ],
    reportingGuidance: 'Save a screenshot of the message and web link, then report the incident to the NCCIA Cyber Crime Helpline (1799). If you entered any banking details, contact your bank helpline immediately.',
    iconName: 'mail-warning'
  },
  {
    id: 'whatsapp-scams',
    title: 'WhatsApp Verification Code Scams',
    category: 'Social Media',
    overview: 'Scammers may impersonate WhatsApp support, a group administrator, a bank representative, or a known friend to ask for your 6-digit SMS verification code and gain access to your WhatsApp account.',
    warningSigns: [
      'Anyone asking you to share a 6-digit verification code or OTP sent to your phone via SMS.',
      'Being added unexpectedly to unfamiliar WhatsApp groups or receiving calls from unknown numbers claiming to be support staff.',
      'An urgent message from a friend or relative asking for an immediate money transfer to an unfamiliar mobile wallet.'
    ],
    examples: [
      'A message saying: "Hello, I accidentally sent my WhatsApp verification code to your phone number. Please forward those 6 digits to me."',
      'A message from a compromised contact saying: "I have an urgent family need, please send Rs. 5,000 to this JazzCash number right away."'
    ],
    preventionTips: [
      'Never share your 6-digit WhatsApp registration code with anyone, including friends or family.',
      'Open WhatsApp Settings > Account > Two-Step Verification and set a secure 6-digit PIN.',
      'Always place a direct phone call to your friend or family member before sending money requested over chat.'
    ],
    reportingGuidance: 'If your WhatsApp is accessed by someone else, immediately open WhatsApp, enter your mobile number, and verify with a new SMS code to regain access. Inform your contacts and report serious incidents to NCCIA (1799).',
    iconName: 'message-square'
  },
  {
    id: 'fake-prize-scams',
    title: 'Fake Prize & Welfare Grant Alerts (BISP / Lucky Draws)',
    category: 'Financial Safety',
    overview: 'Fraudulent callers and SMS senders claim that you have won a cash prize or government grant through BISP (8171), a television game show, or a telecom lucky draw, and ask for an advance processing fee or PIN.',
    warningSigns: [
      'Being told you won a lottery, lucky draw, or grant that you never entered.',
      'Requests to pay a registration fee, tax, or processing charge before receiving the promised amount.',
      'Grant messages arriving from a standard 11-digit mobile number (03XX-XXXXXXX) instead of the official 8171 shortcode.',
      'Urgent claims that your grant or prize will expire within a few hours unless you send money first.'
    ],
    examples: [
      'An SMS from a personal mobile number stating: "Congratulations! Your Rs. 25,000 assistance grant is approved. Call this number to receive your payment."',
      'A caller claiming to represent a TV game show and asking for Rs. 2,000 in mobile balance or wallet transfer to release a prize.'
    ],
    preventionTips: [
      'Remember that genuine government welfare programs and official lucky draws never ask for advance fees or PIN codes.',
      'Verify BISP eligibility only through the official 8171 shortcode or official portal (bisp.gov.pk).',
      'Do not reply to or call back unknown mobile numbers offering unexpected cash rewards.'
    ],
    reportingGuidance: 'Keep a screenshot of the message and sender number, and forward spam details to PTA at shortcode 9000 or report financial loss to NCCIA (1799).',
    iconName: 'gift'
  },
  {
    id: 'fake-job-scams',
    title: 'Online Job & Task Earning Scams',
    category: 'Online Earning',
    overview: 'Deceptive job offers shared on WhatsApp, Telegram, and social media promise high daily income for simple online tasks. They often send a small initial payout to build trust before asking for larger deposits.',
    warningSigns: [
      'Promises of high daily income for very simple tasks such as liking videos, rating products, or clicking links.',
      'Requests to pay a registration fee, security deposit, or "VIP level upgrade" to unlock your earnings.',
      'Recruitment conducted exclusively through WhatsApp or Telegram without an official company website or office.',
      'Unrealistic guarantees of fixed daily returns with no professional skills required.'
    ],
    examples: [
      'A WhatsApp message offering Rs. 5,000 per day for liking social media videos, followed by a request to deposit Rs. 3,000 for account activation.',
      'A Telegram group asking members to deposit money to complete "prepaid merchant tasks" for higher commission.'
    ],
    preventionTips: [
      'Never pay advance registration fees, security deposits, or task upgrades to get a job.',
      'Research the company independently through its official website and verified business listings.',
      'Apply for remote work only through reputable career portals and established freelancing platforms.'
    ],
    reportingGuidance: 'Stop sending any further deposits immediately. Save all chat logs, wallet numbers, and payment receipts, and report the incident to your bank/wallet helpline and NCCIA (1799).',
    iconName: 'briefcase'
  },
  {
    id: 'easypaisa-fraud',
    title: 'Easypaisa Fake SMS & Refund Calls',
    category: 'Financial Safety',
    overview: 'Scammers may pose as Easypaisa support staff or send fake payment notifications from personal mobile numbers to trick users into sharing their PIN, OTP, or returning money that was never actually received.',
    warningSigns: [
      'Receiving a payment confirmation SMS from a regular 11-digit mobile number instead of the official 3737 shortcode.',
      'A caller claiming they sent money to your account by mistake and pressuring you to send it back immediately.',
      'Anyone asking for your 5-digit Easypaisa PIN, SMS OTP, or biometric verification over the phone.',
      'Urgent requests to transfer money before you have checked your actual wallet balance inside the app.'
    ],
    examples: [
      'A fake SMS from a private number says "Rs. 10,000 received," followed by an emotional call asking you to return the amount to another number.',
      'A caller claiming your Easypaisa account needs verification and asking you to read out the OTP sent to your phone.'
    ],
    preventionTips: [
      'Always open the official Easypaisa app and check your live balance and transaction statement before returning any funds.',
      'Never share your 5-digit PIN or OTP with anyone—official support staff will never ask for it.',
      'Only trust official notifications from shortcode 3737 and verify any issue via the official helpline.'
    ],
    reportingGuidance: 'Contact the official Easypaisa Helpline (3737 from Telenor or 042-111-003-737) immediately to report the number, and file a complaint with NCCIA (1799) if funds were lost.',
    iconName: 'wallet'
  },
  {
    id: 'jazzcash-fraud',
    title: 'JazzCash Impersonation & PIN Scams',
    category: 'Financial Safety',
    overview: 'Scammers pretend to be JazzCash customer service representatives and claim your wallet is blocked or requires an urgent update, attempting to obtain your MPIN, OTP, or payment approval.',
    warningSigns: [
      'Calls from regular mobile numbers claiming to be from the JazzCash head office or verification department.',
      'Requests to share your 4-digit MPIN, SMS OTP, or CNIC issuance date over the phone.',
      'Warnings that your wallet will be permanently closed unless you share a code immediately.',
      'Prompts on your screen asking you to enter your MPIN to "receive" a prize or refund.'
    ],
    examples: [
      'A caller says: "We are calling from JazzCash support to upgrade your account limit. Please share the 4-digit code sent to your phone."',
      'An SMS with an unverified link claiming your JazzCash wallet has been suspended.'
    ],
    preventionTips: [
      'Keep your 4-digit JazzCash MPIN and OTP completely private at all times.',
      'Remember that entering your MPIN always authorizes money leaving your account—it is never required to receive money.',
      'Do not dial unfamiliar *786# sequences instructed by an unknown caller.'
    ],
    reportingGuidance: 'Call the official JazzCash Helpline (4444 from Jazz or 021-111-124-444) right away to secure your wallet and report unauthorized activity to NCCIA (1799).',
    iconName: 'credit-card'
  },
  {
    id: 'otp-scams',
    title: 'One-Time Password (OTP) Protection Guide',
    category: 'Account Safety',
    overview: 'A One-Time Password (OTP) is a single-use security code that protects your bank transfers, mobile wallets, and personal accounts. Scammers use urgent stories to persuade users to read out this code.',
    warningSigns: [
      'A caller asking you to read aloud an SMS code that just arrived on your phone.',
      'Someone creating panic by claiming an unauthorized transfer is happening and they need the OTP to "cancel" it.',
      'Receiving OTP messages for logins or transactions that you did not initiate.',
      'The SMS clearly states "Do not share this code with anyone," yet the caller insists you share it with them.'
    ],
    examples: [
      'A caller claiming to be from your bank says: "To stop a suspicious transaction on your card, please tell us the 6-digit OTP you just received."',
      'A fake courier agent asking for an SMS code to confirm a parcel delivery address.'
    ],
    preventionTips: [
      'Never share an OTP with anyone—an OTP is used to approve transactions, never to cancel them.',
      'Read the full text of every OTP SMS to see what action the code is authorizing.',
      'If you receive unexpected OTPs, change your account password immediately using the official app.'
    ],
    reportingGuidance: 'If you accidentally shared an OTP, immediately call your bank or wallet helpline to temporarily block your account and cards, then report the incident to NCCIA (1799).',
    iconName: 'shield-alert'
  },
  {
    id: 'sim-swap-fraud',
    title: 'SIM Replacement & Mobile Network Safety',
    category: 'Account Safety',
    overview: 'Unauthorized SIM replacement happens when someone attempts to issue a duplicate SIM card for your mobile number so they can receive your banking alerts and verification codes.',
    warningSigns: [
      'Your phone suddenly shows "No Service" or "Emergency Calls Only" in an area with normal coverage.',
      'You stop receiving expected SMS notifications or verification codes from your bank.',
      'Unexpected messages or calls from your mobile network regarding a SIM replacement request you did not make.'
    ],
    examples: [
      'Your mobile signal drops unexpectedly for several hours, and you later discover someone requested a replacement SIM to access your mobile banking.'
    ],
    preventionTips: [
      'If your SIM loses signal unexpectedly for an extended period, contact your mobile operator immediately from another phone.',
      'When providing a CNIC photocopy for official work, always write the specific purpose and date across the copy.',
      'Send your CNIC number to 668 (PTA service) periodically to verify how many SIMs are registered in your name.'
    ],
    reportingGuidance: 'Contact your mobile network helpline immediately to block any unauthorized SIM replacement, notify your bank to pause mobile banking, and report to PTA and NCCIA (1799).',
    iconName: 'smartphone'
  },
  {
    id: 'fake-banking-calls',
    title: 'Fake Bank Verification Calls',
    category: 'Financial Safety',
    overview: 'Scammers often call pretending to represent commercial banks (such as HBL, Meezan Bank, UBL, Allied Bank, or Bank Alfalah) or the State Bank of Pakistan, asking for card details, PINs, or login codes.',
    warningSigns: [
      'The caller claims to be a bank officer or regulator and warns that your account will be temporarily restricted unless verified immediately.',
      'Requests for your debit/credit card 16-digit number, CVV (3 digits on the back), ATM PIN, or OTP.',
      'The incoming phone number looks similar to a bank helpline due to caller ID spoofing.'
    ],
    examples: [
      'A caller states: "We are calling from your bank security department. Your ATM card is being blocked; please share your card number and OTP to keep it active."'
    ],
    preventionTips: [
      'Remember that banks never ask for your PIN, OTP, or CVV over a phone call.',
      'Hang up politely and dial the official helpline number printed on the back of your debit/credit card.',
      'Never share confidential banking details under time pressure.'
    ],
    reportingGuidance: 'Report the caller number to your bank official helpline and forward the details to PTA (9000) and NCCIA (1799).',
    iconName: 'file-text'
  },
  {
    id: 'facebook-scams',
    title: 'Facebook Profile Impersonation & Marketplace Safety',
    category: 'Social Media',
    overview: 'Scammers may copy a person’s profile photo and name on Facebook to request emergency money from their friends, or post unusually cheap items on Marketplace to collect advance payments.',
    warningSigns: [
      'A new Facebook profile using your friend’s name and photo sends a message asking for urgent financial help.',
      'Marketplace listings offering vehicles, phones, or electronics far below normal market value.',
      'Sellers refusing to meet in person and insisting on advance token payments or delivery fees via mobile wallets.'
    ],
    examples: [
      'A message on Messenger saying: "This is my new Facebook account. I am in an emergency—please send Rs. 5,000 to this wallet number and I will return it tomorrow."'
    ],
    preventionTips: [
      'Enable the "Lock Profile" feature on Facebook and restrict your friends list visibility to "Only Me".',
      'Never send advance payments or booking tokens for classified ads before inspecting the item in person.',
      'Always call your friend on their regular phone number to verify any financial request received on social media.'
    ],
    reportingGuidance: 'Use Facebook’s "Report Profile" option to report impersonation accounts, inform your mutual friends, and report financial fraud to NCCIA (1799).',
    iconName: 'facebook'
  },
  {
    id: 'instagram-scams',
    title: 'Instagram Giveaway & Sponsorship Scams',
    category: 'Social Media',
    overview: 'Users on Instagram are often targeted with fake smartphone giveaways, brand collaboration links, and unrealistic "double your money" investment offers designed to capture accounts or funds.',
    warningSigns: [
      'Phishing links disguised as brand ambassador applications, copyright notices, or voting contests.',
      'Fake giveaway pages asking for a "delivery fee" or login password to claim a prize.',
      'Accounts promising to turn a small deposit into a large payout within 24 hours.'
    ],
    examples: [
      'An Instagram message saying: "You have been selected as our brand ambassador! Log in with your Instagram password on this link to confirm."'
    ],
    preventionTips: [
      'Enable Two-Factor Authentication (2FA) inside Instagram Settings using an authenticator app.',
      'Never enter your Instagram login details on third-party contest or verification links.',
      'Avoid pages that promise guaranteed or instant investment returns.'
    ],
    reportingGuidance: 'Report the fraudulent account directly within the Instagram app and submit any financial loss details to NCCIA (1799).',
    iconName: 'instagram'
  },
  {
    id: 'tiktok-scams',
    title: 'TikTok Viral Earning & Link Traps',
    category: 'Social Media',
    overview: 'Short videos on social platforms often promote unverified earning apps, fake investment groups, or free gift links in the bio and comments to mislead viewers.',
    warningSigns: [
      'Videos promising guaranteed daily payouts in exchange for an initial deposit.',
      'Links in account bios or comments directing you to download unverified APK files or join WhatsApp/Telegram groups.',
      'Requests to pay an activation or withdrawal fee before you can access promised earnings.'
    ],
    examples: [
      'A viral video claiming: "Deposit Rs. 2,000 today and earn Rs. 5,000 daily from home—click the link in our bio to join."'
    ],
    preventionTips: [
      'Be cautious of viral videos showing stacks of cash or claiming effortless daily income.',
      'Do not install unverified apps or click unknown links placed in social media bios.',
      'Always verify whether a financial company is registered with SECP before investing.'
    ],
    reportingGuidance: 'Use the in-app Report option on TikTok to flag deceptive videos and report financial scams to NCCIA (1799).',
    iconName: 'video'
  },
  {
    id: 'email-security',
    title: 'Business Email & Invoice Verification Safety',
    category: 'Workplace Safety',
    overview: 'Organizations and professionals can receive deceptive emails that imitate trusted vendors, banks, or company executives to redirect invoice payments or collect login credentials.',
    warningSigns: [
      'An urgent email requesting a change in vendor bank account details or an immediate wire transfer.',
      'Subtle spelling differences in the sender’s email domain (for example, @company-pk.com instead of @company.com).',
      'Unexpected email attachments (such as .zip or .exe files) or links asking you to sign in to view a document.'
    ],
    examples: [
      'An accounting team receives an email appearing to be from a supplier stating: "Our bank account has been updated. Please send today’s invoice payment to this new IBAN."'
    ],
    preventionTips: [
      'Always confirm any request to change bank account or payment details by calling the vendor on a previously verified phone number.',
      'Avoid opening unexpected attachments or entering work passwords on unfamiliar links.',
      'Enable Multi-Factor Authentication (MFA) across all workplace email accounts.'
    ],
    reportingGuidance: 'Notify your organization’s IT team and bank immediately if a payment is affected, and file a formal report with NCCIA (1799).',
    iconName: 'server'
  },
  {
    id: 'fake-websites',
    title: 'Imitation Shopping & Official Portal Websites',
    category: 'Online Shopping',
    overview: 'Scammers sometimes create look-alike websites that copy the logos and design of popular clothing brands, online stores, or public service portals to collect advance payments or card details.',
    warningSigns: [
      'Heavy discounts (such as 80%–90% off branded items) advertised through sponsored social media links.',
      'Website addresses ending in unusual extensions (.top, .xyz, .shop) instead of the brand’s official domain.',
      'Websites that only accept advance bank transfers or wallet payments and do not offer verified Cash on Delivery.'
    ],
    examples: [
      'A sponsored ad leads to a look-alike clothing brand website offering expensive outfits for Rs. 1,500 if paid in advance.'
    ],
    preventionTips: [
      'Double-check the exact website domain name in your browser address bar before placing an order.',
      'Use official brand apps or well-established e-commerce platforms.',
      'Avoid paying in advance to newly created or unverified online pages.'
    ],
    reportingGuidance: 'Report imitation websites to PTA and NCCIA (1799), and contact your bank immediately if you entered your card details.',
    iconName: 'globe'
  },
  {
    id: 'qr-code-scams',
    title: 'QR Code Payment Safety',
    category: 'Financial Safety',
    overview: 'Scammers may send a QR code on WhatsApp and claim that scanning it will credit a refund or prize into your account, whereas scanning and entering your PIN actually sends money out of your wallet.',
    warningSigns: [
      'Someone asking you to scan a QR code in order to receive a payment or refund.',
      'Receiving an unfamiliar QR code image over WhatsApp or social media.',
      'Your banking or wallet app asking you to enter your MPIN after scanning a code.'
    ],
    examples: [
      'A buyer online says: "I am sending your payment—just scan this QR code in your wallet app and enter your PIN to receive the money."'
    ],
    preventionTips: [
      'Remember that you never need to scan a QR code or enter your PIN to receive money.',
      'Always read the payment confirmation screen carefully to check the recipient name and amount before approving.',
      'Only scan QR codes at trusted merchants when you are intentionally making a payment.'
    ],
    reportingGuidance: 'Contact your bank or mobile wallet helpline immediately if an unauthorized transfer occurs, and report the details to NCCIA (1799).',
    iconName: 'scan'
  },
  {
    id: 'public-wifi-risks',
    title: 'Public Wi-Fi Safety Guide',
    category: 'Device & Network Safety',
    overview: 'Open Wi-Fi networks in cafes, airports, shopping malls, and public spaces are shared by many people. Unsecured networks or look-alike hotspots can expose your browsing session if proper precautions are not taken.',
    warningSigns: [
      'Open Wi-Fi networks that do not require a password or official venue verification.',
      'Your browser displaying a "Connection is Not Private" or security certificate warning.',
      'Multiple Wi-Fi networks appearing with very similar names in the same public place.'
    ],
    examples: [
      'Connecting to an unverified "Free_Public_WiFi" hotspot that asks you to enter your email or social media password on a pop-up page.'
    ],
    preventionTips: [
      'Use your personal mobile data (4G/5G) instead of public Wi-Fi when using banking or mobile wallet apps.',
      'Turn off the "Auto-Connect to Open Wi-Fi" setting on your smartphone and laptop.',
      'Ensure websites always begin with "https://" before signing in to any account.'
    ],
    reportingGuidance: 'If you notice a suspicious Wi-Fi network at a public venue, disconnect immediately, inform the venue staff, and update your passwords from a trusted connection.',
    iconName: 'wifi'
  },
  {
    id: 'identity-theft',
    title: 'CNIC & Personal Identity Protection',
    category: 'Identity Protection',
    overview: 'Your CNIC number, issue date, and family details are sensitive personal identifiers. If shared carelessly on unverified pages, they can be misused for unauthorized registrations or impersonation.',
    warningSigns: [
      'Discovering unfamiliar mobile SIM numbers registered under your CNIC.',
      'Receiving verification calls or messages for accounts or services you never applied for.',
      'Unverified social media pages asking for photos of the front and back of your CNIC.'
    ],
    examples: [
      'An unverified online page asks applicants to send clear photos of their CNIC and mother’s name on WhatsApp before any formal interview.'
    ],
    preventionTips: [
      'Share your CNIC details only with verified institutions, banks, and official government portals.',
      'Always cross out and write the specific purpose and date on any physical CNIC photocopy you submit.',
      'Check the SIMs registered on your CNIC regularly by sending your CNIC number to 668 (PTA).'
    ],
    reportingGuidance: 'Visit an official mobile operator customer care center to disown unfamiliar SIMs, and report any identity misuse to NADRA and NCCIA (1799).',
    iconName: 'fingerprint'
  },
  {
    id: 'online-shopping-scams',
    title: 'Safe Online Shopping on Social Media',
    category: 'Online Shopping',
    overview: 'Many small businesses operate honestly online, but unverified social media pages sometimes advertise luxury electronics or branded goods at steep discounts to collect advance payments without delivering the order.',
    warningSigns: [
      'Prices that are far below normal market rates (for example, expensive smartphones offered at a fraction of the price).',
      'Customer comments or honest reviews are disabled or hidden on the page’s posts.',
      'The seller refuses Cash on Delivery (COD) and insists on full advance payment to a personal wallet.'
    ],
    examples: [
      'An unverified social media page advertises branded electronics for a low price, collects advance payment via bank transfer, and then blocks the buyer.'
    ],
    preventionTips: [
      'Shop with established retailers or pages with a long, verifiable history of genuine customer feedback.',
      'Prefer Cash on Delivery (COD) when ordering from unfamiliar online stores.',
      'Never transfer full advance payments to unverified personal accounts.'
    ],
    reportingGuidance: 'Report the fraudulent page on the social media platform, inform your bank or wallet provider, and submit a complaint to NCCIA (1799).',
    iconName: 'shopping-bag'
  },
  {
    id: 'ai-voice-scams',
    title: 'Fake Family Emergency & Voice Impersonation Calls',
    category: 'Family Safety',
    overview: 'Scammers sometimes call parents or relatives claiming that a family member is in a sudden medical or legal emergency—occasionally using audio clips to imitate their voice—and ask for an immediate money transfer.',
    warningSigns: [
      'An urgent call from an unknown number claiming a family member has had an accident or urgent problem.',
      'High pressure to transfer money immediately to an unfamiliar Easypaisa, JazzCash, or bank account.',
      'The caller tries to keep you on the line so you cannot call your family member directly to check on them.'
    ],
    examples: [
      'A parent receives a distressed call claiming their son or daughter needs Rs. 30,000 urgently after an accident, while the family member is actually safe at school or work.'
    ],
    preventionTips: [
      'Stay calm, hang up, and immediately call your family member on their actual phone number to verify they are safe.',
      'Agree on a private "Family Safe Word" with your loved ones to confirm genuine emergencies.',
      'Never transfer money to an unknown account based solely on an unexpected phone call.'
    ],
    reportingGuidance: 'Save the caller’s phone number and account details, and report the incident to NCCIA (1799) and your telecom operator.',
    iconName: 'audio-lines'
  },
  {
    id: 'deepfake-awareness',
    title: 'Edited Photos, AI Media & Digital Privacy',
    category: 'Digital Privacy',
    overview: 'Modern editing tools and AI software can be used to create altered photos or misleading videos. Understanding how to recognize edited media and protect your personal photos helps keep you and your family safe.',
    warningSigns: [
      'Videos or images where facial movements, lighting, or audio synchronization look unnatural.',
      'Sensational or unverified videos shared on social media designed to cause confusion or mislead viewers.',
      'Unknown accounts attempting to misuse edited personal photos to pressure individuals.'
    ],
    examples: [
      'A public profile photo is copied and edited by an unfamiliar account to create a misleading image or impersonate the person.'
    ],
    preventionTips: [
      'Keep your personal and family photos visible only to trusted friends by locking your social media profiles.',
      'Verify sensational news or videos through credible news outlets before forwarding them.',
      'If someone attempts to pressure you using edited media, do not send money—preserve the evidence and seek official help.'
    ],
    reportingGuidance: 'Report any misuse of personal photos or edited media to the social platform and contact the NCCIA Cyber Crime Helpline (1799) or DRF Helpline (0800-39393) for confidential support.',
    iconName: 'user-check'
  },
  {
    id: 'cyber-bullying',
    title: 'Online Respect & Dealing with Unwanted Contact',
    category: 'Social Media',
    overview: 'Unwanted online contact involves using fake accounts, impolite messages, or unauthorized sharing of personal information to bother students, professionals, or everyday internet users.',
    warningSigns: [
      'Repeated unwanted or upsetting messages from unfamiliar social media or messaging accounts.',
      'Someone sharing your personal phone number, photos, or private conversations without permission.',
      'Impersonation accounts created to affect someone’s personal or professional reputation.'
    ],
    examples: [
      'An unfamiliar account creates a fake profile using a student’s name and sends unwanted messages to their classmates.'
    ],
    preventionTips: [
      'Do not engage or reply to unwanted accounts—use the Block and Report tools immediately.',
      'Take clear screenshots showing the account profile link, username, and messages as evidence.',
      'Keep your social media accounts set to Private and review your followers list regularly.'
    ],
    reportingGuidance: 'Save all screenshots and URLs, and register a confidential complaint with the NCCIA Cyber Crime Portal (1799) or call the Digital Rights Foundation Helpline (0800-39393).',
    iconName: 'users'
  },
  {
    id: 'online-blackmail',
    title: 'Personal Privacy & Handling Online Pressure',
    category: 'Digital Privacy',
    overview: 'Unverified online accounts sometimes attempt to misuse private conversations or edited images to pressure individuals into sending money. Knowing how to protect your privacy and respond calmly is essential.',
    warningSigns: [
      'Unexpected video calls or friend requests from unfamiliar social media accounts.',
      'Attempts to pressure you into sending money by claiming private or edited images will be shared.',
      'Urgent requests for transfers via mobile wallets or gift cards to keep personal information private.'
    ],
    examples: [
      'An unknown account initiates a video call or sends edited images and asks for a payment while claiming they will message the person’s contact list.'
    ],
    preventionTips: [
      'Never accept video calls or share personal photos with unknown online accounts.',
      'Do not send money in response to online pressure—sending money rarely resolves the situation.',
      'Lock your social media profiles, preserve screenshots of the account and messages, and report immediately to official authorities.'
    ],
    reportingGuidance: 'Do not delete the chat history. Save screenshots and account links, and report the matter confidentially to NCCIA Cyber Crime (1799) or the DRF Helpline (0800-39393).',
    iconName: 'shield'
  },
  {
    id: 'olx-advance-scams',
    title: 'Classified Ads & Marketplace Advance Payment Scams',
    category: 'Online Shopping',
    overview: 'On classified platforms and social marketplaces, deceptive sellers post attractive listings for cars, bikes, or phones and ask buyers to send an advance booking token before seeing the item.',
    warningSigns: [
      'High-demand items listed at prices much lower than the normal market rate.',
      'Requests for an advance "booking token," "delivery fee," or "customs clearance charge" via Easypaisa or JazzCash.',
      'The seller makes excuses to avoid meeting face-to-face in a safe public place.',
      'Fake buyers sending edited screenshots of bank transfers without any actual balance arriving in your account.'
    ],
    examples: [
      'A seller lists a motorcycle or phone at half price and asks for Rs. 5,000 in advance to "reserve" the item, then switches off their phone.'
    ],
    preventionTips: [
      'Never send advance token money or delivery fees to unknown sellers on classified websites.',
      'Always meet in a safe, well-lit public place during daylight hours to inspect the item in person.',
      'If you are selling an item, confirm the money is in your actual bank or wallet balance before handing it over.'
    ],
    reportingGuidance: 'Report the listing on the marketplace platform immediately and submit transaction details to your bank/wallet helpline and NCCIA (1799).',
    iconName: 'shopping-cart'
  },
  {
    id: 'daraz-task-scams',
    title: 'Fake E-Commerce Product Review & Task Scams',
    category: 'Online Earning',
    overview: 'Scammers misuse the names of well-known e-commerce brands on WhatsApp and Telegram, offering paid tasks to boost product ratings. After a small initial reward, they ask participants to deposit larger sums.',
    warningSigns: [
      'Unsolicited WhatsApp messages offering Rs. 3,000 to Rs. 10,000 daily for clicking or reviewing products.',
      'Telegram groups where members post screenshots of large payouts to encourage others to deposit money.',
      'Being asked to deposit your own money to unlock "prepaid tasks" or withdraw your balance.'
    ],
    examples: [
      'A participant receives Rs. 500 for completing a few trial clicks, and is then asked to deposit Rs. 25,000 to unlock a higher commission package, after which withdrawals are blocked.'
    ],
    preventionTips: [
      'Official e-commerce platforms never recruit product reviewers through random WhatsApp or Telegram messages.',
      'Never deposit your own money into any task-based earning portal.',
      'Block and report unknown numbers sending unsolicited job or task links.'
    ],
    reportingGuidance: 'Save all transaction receipts, wallet numbers, and chat screenshots, and report the incident to your bank/wallet provider and NCCIA (1799).',
    iconName: 'star'
  },
  {
    id: 'crypto-mining-apps',
    title: 'Unverified Investment & Mining App Scams',
    category: 'Financial Safety',
    overview: 'Unregistered mobile apps and Telegram groups often promote "automated mining" or high-yield investment plans promising fixed daily profits, only to close down once users deposit significant funds.',
    warningSigns: [
      'Promises of guaranteed daily or monthly returns with zero financial risk.',
      'Requests to deposit funds via personal mobile wallets or USDT to activate an account.',
      'Apps that are not on official app stores and require downloading an external APK file.',
      'Heavy focus on recruiting friends and family for referral commissions.'
    ],
    examples: [
      'An unregistered app shows fake daily profit numbers on a dashboard, encourages users to deposit more money, and suddenly stops working when users try to withdraw.'
    ],
    preventionTips: [
      'Only download financial apps from the official Google Play Store or Apple App Store.',
      'Check the SECP Jamapunji portal to verify whether an investment company is legally registered in Pakistan.',
      'Never share your wallet recovery phrases or private keys with any website or person.'
    ],
    reportingGuidance: 'Report unregistered investment schemes to SECP and submit transaction records to the NCCIA Cyber Crime Portal (1799).',
    iconName: 'coins'
  },
  {
    id: 'hajj-umrah-scams',
    title: 'Verifying Hajj & Umrah Travel Packages Safely',
    category: 'Travel Safety',
    overview: 'Some unverified social media pages advertise unusually cheap Hajj and Umrah packages online and request advance transfers without holding an official travel license.',
    warningSigns: [
      'Hajj or Umrah packages offered at prices far below official and market rates.',
      'Agents asking for full advance payment via WhatsApp without a physical office or official receipt.',
      'Inability to provide an official Ministry of Religious Affairs license or enrollment number.'
    ],
    examples: [
      'A social media page advertises a discounted Umrah package, collects advance payments into a personal bank account, and stops responding.'
    ],
    preventionTips: [
      'Always verify that the tour operator is officially licensed by the Ministry of Religious Affairs & Interfaith Harmony.',
      'Visit the travel agency’s registered office in person and obtain formal company receipts.',
      'Verify visa and airline ticket bookings directly on the official airline and visa portals.'
    ],
    reportingGuidance: 'Keep all payment receipts and communication records, and report unlicensed operators to the Ministry of Religious Affairs and NCCIA (1799).',
    iconName: 'milestone'
  },
  {
    id: 'loan-app-extortion',
    title: 'Unlicensed Instant Loan Apps & Data Privacy',
    category: 'Financial Safety',
    overview: 'Unregistered instant loan apps often advertise quick cash with minimal paperwork, but request access to your phone’s contacts and photos, followed by unfair hidden charges and aggressive collection calls.',
    warningSigns: [
      'A loan app asking for permission to access your Contacts, Photo Gallery, and SMS messages.',
      'Very short repayment periods (such as 7 days) with high hidden processing deductions.',
      'Apps distributed through third-party APK links or not listed on SECP’s approved NBFC list.',
      'Unprofessional or pressuring calls from recovery agents if a payment is delayed.'
    ],
    examples: [
      'A user installs an unverified loan app for a small loan, receives a much smaller amount after hidden deductions, and faces high charges and pressure within a week.'
    ],
    preventionTips: [
      'Never install unlicensed loan apps or grant any finance app access to your Contacts or Photo Gallery.',
      'Before using any digital lending app, verify that it is officially licensed by the Securities and Exchange Commission of Pakistan (SECP).',
      'If you experience unfair pressure from an unlicensed app, do not take another loan to pay it—report it immediately.'
    ],
    reportingGuidance: 'File a complaint against unlicensed lending apps with SECP (Jamapunji / Service Desk) and report privacy violations to NCCIA Cyber Crime (1799) and PTA.',
    iconName: 'landmark'
  },
  {
    id: 'car-rental-scams',
    title: 'Online Vehicle Rental & Booking Safety',
    category: 'Travel Safety',
    overview: 'Unverified pages on social media sometimes post photos of rental cars or tour vehicles at low rates to collect advance booking deposits without owning any fleet.',
    warningSigns: [
      'Social media pages with disabled comments, no physical office address, or newly created profiles.',
      'Refusal to allow physical inspection of the vehicle or office before payment.',
      'Insisting on 50% to 100% advance payment via personal mobile wallets.'
    ],
    examples: [
      'A customer sends an advance booking deposit to an unverified Facebook page for a wedding or family trip car, and the number is switched off on the day of travel.'
    ],
    preventionTips: [
      'Book vehicles only through established, verifiable rental services or visit their office in person.',
      'Inspect the vehicle and get a written booking receipt before paying a deposit.',
      'Avoid sending advance payments to unknown social media pages.'
    ],
    reportingGuidance: 'Report the fake page on social media, notify your bank or mobile wallet provider, and submit a complaint to NCCIA (1799).',
    iconName: 'car'
  },
  {
    id: 'academic-writing-scams',
    title: 'Fake Typing, Data Entry & Assignment Job Scams',
    category: 'Online Earning',
    overview: 'Students and job seekers are frequently targeted on WhatsApp and Facebook with offers of home-based handwriting, typing, or data entry work that ask for an upfront registration or material fee.',
    warningSigns: [
      'Being asked to pay a "registration fee," "membership fee," or "courier charge" before starting work.',
      'Promises of unusually high pay for basic typing or copying pages by hand.',
      'No official company website, landline number, or verifiable office address.'
    ],
    examples: [
      'A student pays Rs. 2,500 as a registration fee for a home typing job advertised on WhatsApp, after which the sender blocks their number.'
    ],
    preventionTips: [
      'Remember that legitimate employers pay you for your work—they never ask job applicants to pay a registration fee.',
      'Verify the organization independently before sharing personal documents.',
      'Use reputable freelance marketplaces for genuine online writing and data entry projects.'
    ],
    reportingGuidance: 'Report the fraudulent job account on the social platform and file a complaint with NCCIA (1799) if you experienced financial loss.',
    iconName: 'book-open'
  },
  {
    id: 'foreign-visa-scams',
    title: 'Overseas Visa & Employment Verification Guide',
    category: 'Travel Safety',
    overview: 'Unlicensed agents sometimes advertise "guaranteed" work visas or job permits for Gulf countries, Europe, the UK, or Canada on social media, collecting large advance fees for unverified documents.',
    warningSigns: [
      'Claims of a "100% guaranteed visa" without official embassy procedures or interviews.',
      'Deals conducted solely over WhatsApp or TikTok without a government-registered office.',
      'Demands for urgent advance payments for "file processing" or "medical clearance" into personal accounts.',
      'Refusal to provide an official Overseas Employment Promoter (OEP) license number.'
    ],
    examples: [
      'An applicant pays an unlicensed agent for an overseas work permit and later discovers the job offer letter and visa printout are not genuine.'
    ],
    preventionTips: [
      'Always verify that the overseas employment promoter is officially registered with the Bureau of Emigration & Overseas Employment (beoe.gov.pk).',
      'Check visa authenticity directly on the destination country’s official government immigration portal.',
      'Never hand over your original passport or large advance payments to unlicensed individuals.'
    ],
    reportingGuidance: 'Report unlicensed visa agents to the Bureau of Emigration & Overseas Employment, FIA, and NCCIA (1799) with all payment records.',
    iconName: 'plane-takeoff'
  },
  {
    id: 'charity-ramadan-scams',
    title: 'Safe Charity & Zakat Donation Practices',
    category: 'Financial Safety',
    overview: 'During Ramadan, religious occasions, or flood relief efforts, unverified social media pages may copy emotional photos from the internet to collect donations into personal wallet accounts.',
    warningSigns: [
      'Newly created social media pages or forwarded WhatsApp messages asking for urgent donations to a personal mobile number.',
      'No verifiable charity registration, hospital contact, or official organization bank account.',
      'Using emotional photos without verifiable medical or institutional references.'
    ],
    examples: [
      'A forwarded post asks for urgent medical donations into a personal wallet account using photos copied from an older unrelated case.'
    ],
    preventionTips: [
      'Donate your Zakat and Sadqah to well-known, registered welfare organizations, hospitals, or verified bank charity portals.',
      'Verify individual medical appeals directly with the hospital or someone you personally trust.',
      'Use the official charity donation section inside your banking or mobile wallet app for verified organizations.'
    ],
    reportingGuidance: 'Report fake charity pages on the social media platform and inform your wallet provider and NCCIA (1799).',
    iconName: 'heart'
  },
  {
    id: 'romance-crypto-scams',
    title: 'Online Friendship & Fake Investment Traps',
    category: 'Social Media',
    overview: 'Scammers on social media or messaging apps may spend weeks building a friendly connection to gain trust, and then gradually encourage the person to invest money into a fake trading or crypto website.',
    warningSigns: [
      'An online acquaintance who avoids verified video calls or meeting in person, yet quickly builds a close bond.',
      'Steering conversations toward a "special trading strategy," forex platform, or crypto website.',
      'Asking you to transfer funds to an unfamiliar app or pay "tax fees" to withdraw your balance.'
    ],
    examples: [
      'An online contact befriends a user over WhatsApp, convinces them to deposit savings into an unverified trading site, and disappears when the user tries to withdraw.'
    ],
    preventionTips: [
      'Keep online friendships separate from financial decisions—never invest money on an online acquaintance’s recommendation.',
      'Do not send money, gift cards, or banking details to someone you have only met online.',
      'Discuss any unusual investment suggestion with a trusted family member before taking action.'
    ],
    reportingGuidance: 'Cease all transfers immediately, preserve chat logs and transaction receipts, and report the incident to NCCIA Cyber Crime (1799).',
    iconName: 'heart-handshake'
  }
];

// Globally bind list for dynamic access across the frontend
window.learningTopics = learningTopics;
