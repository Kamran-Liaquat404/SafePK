/* Learn Data Module (learn.js)
   -----------------------------------------
   Is file me Pakistan ke active cyber threats aur digital scams ki educational guides store hain.
   Agar aapko koi naya scam guide add karna ho, purana remove karna ho, ya reorder karna ho, 
   toh aap sirf is file ko modify karenge. Website ke UI pages me koi manual code change nahi karna parega.
   
   Roman Urdu Developer Guide:
   - Naya scam topic add karne ke liye `learningTopics` array me ek naya object insert karein.
   - Har object ke andar `id`, `title`, `category`, `overview`, `warningSigns`, `examples`, `preventionTips`, `reportingGuidance`, aur `iconName` (lucide-react icon) ka hona zaroori hai.
   - Yeh array window scope me `window.learningTopics` ke naam se available hai.
*/
const learningTopics = [
  {
    id: 'phishing-scams',
    title: 'Phishing Scams (Fake Links)',
    category: 'Urgent Threats',
    overview: 'Cyber criminals fake bank websites, government portals, courier services, and social media login pages to steal your passwords, banking details, and personal information. These fake links are commonly shared through SMS, WhatsApp, Facebook, and email in Pakistan.',

    warningSigns: [
      'SMS ya WhatsApp par "Account Block Ho Gaya" ya "KYC Update Required" jese urgent messages.',
      'Fake website links jese hbl-secure-login.com, meezan-verify.net ya bisp8171-update.com.',
      'Spelling mistakes, poor grammar, ya unusual website address.',
      'Message me foran click karne ka pressure ya account band hone ki warning.'
    ],

    examples: [
      'SMS: "Aap ka HBL account temporarily block ho gaya hai. Verify karein: hbl-secure-login.com"',
      'WhatsApp message: "Meezan Bank KYC update lazmi hai. Neeche diye gaye link se login karein."'
    ],

    preventionTips: [
      'Password enter karne se pehle website ka URL hamesha verify karein.',
      'Sirf official banking apps ya official websites hi use karein.',
      'Har important account par Two-Factor Authentication (2FA) enable rakhein.'
    ],

    reportingGuidance: 'Fake link, SMS aur screenshots save karein aur NCCIA/FIA Cyber Crime ko report karein. Agar banking information share ho gayi ho to foran apne bank ki helpline se rabta karein.',

    iconName: 'mail-warning'
  },

  {
    id: 'whatsapp-scams',
    title: 'WhatsApp Hijack & Code Scams',
    category: 'Social Media',

    overview: 'Scammers WhatsApp Support, group admin, bank representative ya kisi dost ban kar aapse 6-digit verification code mangte hain. Code milte hi woh aap ka WhatsApp account apne device par activate kar lete hain.',

    warningSigns: [
      'Unknown person WhatsApp verification code ya OTP mang raha ho.',
      'Achanak kisi unknown WhatsApp group me add kar diya jaye.',
      'Friend ya relative ke account se emergency me paisay mangne ka message aaye.'
    ],

    examples: [
      'Message: "Main WhatsApp Support se bol raha hun. Verification code share karein warna account band ho jayega."',
      'Friend ke account se message: "Yaar emergency hai, JazzCash par Rs. 5,000 bhej do."'
    ],

    preventionTips: [
      'Apna 6-digit WhatsApp verification code kabhi kisi ke saath share na karein.',
      'WhatsApp Settings > Account > Two-Step Verification ko enable karein.',
      'Paisay bhejne se pehle us shakhs ko direct call karke confirm zaroor karein.'
    ],

    reportingGuidance: 'Agar account hijack ho jaye to foran dobara WhatsApp register karein, naya verification code enter karein, apne contacts ko inform karein aur zarurat par NCCIA/FIA Cyber Crime ko report karein.',

    iconName: 'message-square'
  },
  {
  id: 'fake-prize-scams',
  title: 'Fake Prize Scams (BISP / Jeeto Pakistan)',
  category: 'Financial Fraud',

  overview: 'Scammers claim that you have won cash prizes through BISP, 8171, Jeeto Pakistan, mobile companies, or lucky draws. They ask for registration fees, taxes, OTPs, or banking details before releasing the fake prize.',

  warningSigns: [
    'Claiming you have won a prize without ever registering or participating.',
    'Asking for registration fees, taxes, or processing charges before releasing the prize.',
    'Messages arriving from a normal 11-digit mobile number instead of an official sender like 8171.',
    'Creating urgency by saying the prize will expire if you do not respond immediately.'
  ],

  examples: [
    'SMS: "Mubarak ho! Aap BISP se Rs. 25,000 jeet gaye hain. Claim ke liye 03XX-XXXXXXX par rabta karein."',
    'Caller: "Jeeto Pakistan ki taraf se bol raha hun. Prize release karne ke liye pehle Rs. 2,000 processing fee bhej dein."'
  ],

  preventionTips: [
    'Government organizations aur genuine lucky draws kabhi bhi prize dene ke liye paisay ya OTP nahi mangte.',
    'Sirf official websites aur verified helplines se information verify karein.',
    'Unknown numbers ya suspicious prize calls ko ignore karein.'
  ],

  reportingGuidance: 'Fake SMS ka screenshot aur sender number save karein. PTA, NCCIA/FIA Cyber Crime ko report karein aur agar banking information share ki ho to foran apne bank se rabta karein.',

  iconName: 'gift'
},
{
  id: 'fake-job-scams',
  title: 'Fake Job Scams (Online Earning Traps)',
  category: 'Financial Fraud',

  overview: 'Scammers advertise easy online jobs through WhatsApp, Telegram, Facebook, and social media. They pay a small amount initially to gain trust, then demand deposits, VIP upgrades, or activation fees before disappearing with your money.',

  warningSigns: [
    'Offering high daily income for very simple tasks like liking videos or rating products.',
    'Asking you to pay registration fees, security deposits, or VIP upgrade charges.',
    'Communicating only through WhatsApp or Telegram without a registered office or company details.',
    'Promising guaranteed income with little or no experience.'
  ],

  examples: [
    'WhatsApp message: "Rozana Rs. 5,000 kamaen. Sirf YouTube videos like karein. Registration ke liye Rs. 3,000 jama karein."',
    'Telegram group: "VIP Task unlock karne ke liye Rs. 10,000 deposit karein, phir daily Rs. 20,000 earning hogi."'
  ],

  preventionTips: [
    'Job hasil karne ke liye kabhi advance payment na karein.',
    'Company ki website, registration aur reputation verify karein.',
    'Trusted job portals aur verified employers ke through hi apply karein.'
  ],

  reportingGuidance: 'Chats, payment receipts aur wallet details ka record save karein aur NCCIA/FIA Cyber Crime ko report karein. Agar wallet ya bank transfer kiya ho to foran service provider se rabta karein.',

  iconName: 'briefcase'
},
 {
  id: 'easypaisa-fraud',
  title: 'Easypaisa Scam (Fake SMS & Calls)',
  category: 'Financial Fraud',

  overview: 'Scammers impersonate Easypaisa representatives or send fake payment SMS messages to trick users into sharing OTPs, PINs, or refunding money that was never received.',

  warningSigns: [
    'Receiving a fake payment SMS from a normal mobile number instead of the official 3737 sender.',
    'Caller claims they accidentally sent money and asks you to return it immediately.',
    'Someone asks for your Easypaisa PIN, OTP, or account verification details.',
    'Being pressured to act quickly without checking your actual wallet balance.'
  ],

  examples: [
    'Caller: "Bhai galti se Rs. 10,000 aap ke Easypaisa account me transfer ho gaye hain. Meherbani karke foran wapas bhej dein."',
    'Fake SMS: "Rs. 15,000 received in your Easypaisa account." Lekin app kholne par balance me koi payment receive nahi hoti.'
  ],

  preventionTips: [
    'Refund bhejne se pehle Easypaisa app me apna balance aur transaction history check karein.',
    'Apna PIN, OTP ya login details kabhi kisi ke saath share na karein.',
    'Sirf official Easypaisa app aur verified helpline hi use karein.'
  ],

  reportingGuidance: 'Foran Easypaisa Helpline (3737) par rabta karein, suspicious account report karein aur zarurat par NCCIA/FIA Cyber Crime ko complaint submit karein.',

  iconName: 'wallet'
},
{
  id: 'jazzcash-fraud',
  title: 'JazzCash Agent Fraud',
  category: 'Financial Fraud',

  overview: 'Fraudsters pretend to be JazzCash customer support and claim your account has been blocked, needs verification, or requires an update. They try to steal your PIN, OTP, or approve unauthorized transactions.',

  warningSigns: [
    'Receiving calls from an unknown mobile number claiming to be JazzCash Support.',
    'Being asked to share your JazzCash PIN, OTP, or verification code.',
    'Caller says your account will be blocked unless you verify immediately.',
    'Unexpected USSD codes or approval requests you did not initiate.'
  ],

  examples: [
    'Caller: "Main JazzCash Head Office se bol raha hun. Account verify karne ke liye apna 4-digit PIN batayein."',
    'SMS: "Aap ka JazzCash account suspend hone wala hai. Verification ke liye is link par click karein."'
  ],

  preventionTips: [
    'JazzCash kabhi bhi phone par PIN ya OTP nahi mangta.',
    'Kisi unknown caller ki hidayat par code dial ya transaction approve na karein.',
    'Sirf official JazzCash app aur verified helpline use karein.'
  ],

  reportingGuidance: 'JazzCash Helpline (4444) par foran complaint register karein aur agar fraud transaction hui ho to NCCIA/FIA Cyber Crime ko report karein.',

  iconName: 'credit-card'
},
{
  id: 'otp-scams',
  title: 'OTP (One-Time Password) Theft',
  category: 'Urgent Threats',

  overview: 'OTP protects your bank accounts, wallets, and online services. Scammers pretend to be bank staff, courier companies, government officials, or customer support representatives to trick you into revealing your OTP.',

  warningSigns: [
    'Someone asks you to read the OTP received on your phone.',
    'Caller creates panic by saying your account will be blocked or frozen.',
    'OTP SMS clearly says "Do not share this code" but the caller still demands it.',
    'Unexpected OTP messages for transactions or logins you did not request.'
  ],

  examples: [
    'Caller: "Main HBL Verification Department se bol raha hun. OTP batayein warna aap ka account block ho jayega."',
    'SMS receive hote hi call aati hai: "Verification complete karne ke liye code read kar dein."'
  ],

  preventionTips: [
    'OTP kabhi bhi kisi ke saath share na karein, chahe caller bank ya government officer hone ka dawa kare.',
    'OTP SMS ko dhyan se padhein aur verify karein ke woh kis transaction ke liye hai.',
    'Agar OTP bina request ke aaye to foran password change karein aur bank ko inform karein.'
  ],

  reportingGuidance: 'Agar OTP share ho gaya ho to foran bank ya wallet provider ko call karein, account secure karein aur NCCIA/FIA Cyber Crime ko incident report karein.',

  iconName: 'shield-alert'
},
 {
  id: 'sim-swap-fraud',
  title: 'SIM Swap Fraud (Duplicate SIM)',
  category: 'Urgent Threats',
  overview: 'Scammers use fake documents or social engineering to get your SIM duplicated. As soon as the duplicate SIM is activated, your OTPs, banking alerts, and account verification codes go to them.',
  warningSigns: [
    'Achanak mobile par "No Service" ya "Emergency Calls Only" ana.',
    'Bank ya wallet ke OTPs receive na hona.',
    'Network company se SIM replacement ya biometric verification ki unexpected call ya SMS ana.'
  ],
  examples: [
    'Subah uthte hi aapki Jazz ya Zong SIM achanak band ho gayi. Kuch der baad pata chala ke kisi ne duplicate SIM issue karwa kar aapke bank account se transactions kar di.'
  ],
  preventionTips: [
    'Agar bina wajah network chala jaye to foran apni mobile company se dusre number se rabta karein.',
    'CNIC ki copy har jagah share na karein aur us par purpose zaroor likhein.',
    'Biometric sirf official franchise se hi karwayein.'
  ],
  reportingGuidance: 'Foran apni mobile company ko call karein, duplicate SIM block karwayein, bank ko inform karein aur FIA NCCIA Cyber Crime ko complaint submit karein.',
  iconName: 'smartphone'
},
{
  id: 'fake-banking-calls',
  title: 'Fake Banking Calls',
  category: 'Financial Fraud',
  overview: 'In Pakistan, scammers call people using the names of HBL, Meezan Bank, UBL, Allied Bank, Bank Alfalah, or State Bank and ask for OTP, ATM PIN, CVV, or card details.',
  warningSigns: [
    'Caller khud ko bank ya State Bank ka officer bataye.',
    'OTP, ATM PIN, CVV ya account password mangna.',
    'Account block hone ya card band hone ki dhamki dena.'
  ],
  examples: [
    '"Sir main HBL Security Department se bol raha hun. Aapka account verify karna hai, OTP bata dein warna account block ho jayega."'
  ],
  preventionTips: [
    'Koi bhi asli bank kabhi OTP, PIN ya CVV phone par nahi mangta.',
    'Call cut karke card ke piche likhe official helpline number par khud call karein.',
    'Pressure me aakar koi information share na karein.'
  ],
  reportingGuidance: 'Bank ki official helpline par complaint karein aur scam call ki details FIA NCCIA Cyber Crime ko report karein.',
  iconName: 'file-text'
},
{
  id: 'facebook-scams',
  title: 'Facebook Fake Profiles & Marketplace Scams',
  category: 'Social Media',
  overview: 'Scammers create fake Facebook IDs to ask money from friends or show cheap bikes, mobiles, and cars on Marketplace to take advance payments and disappear.',
  warningSigns: [
    'Aapke naam aur photo se duplicate Facebook account banana.',
    'Marketplace par bohat sasti deal aur advance payment ki demand.',
    'Messenger par emergency ke naam par paisay mangna.'
  ],
  examples: [
    '"Yar meri nayi Facebook ID hai, emergency hai. 5,000 Rs JazzCash bhej do, baad me wapas kar dunga."'
  ],
  preventionTips: [
    'Facebook profile ko Lock Profile ya Friends Only rakhein.',
    'Advance payment kabhi na bhejein.',
    'Paisay bhejne se pehle call karke identity verify karein.'
  ],
  reportingGuidance: 'Fake profile ko Facebook par "Report Profile" karein aur apne friends ko bhi warn karein.',
  iconName: 'facebook'
},
{
  id: 'instagram-scams',
  title: 'Instagram Giveaway & Investment Scams',
  category: 'Social Media',
  overview: 'In Pakistan, scammers target people through fake giveaways, sponsorship offers, and crypto or investment schemes to steal accounts and money.',
  warningSigns: [
    'Unknown sponsorship ya collaboration links.',
    'Free iPhone ya cash giveaway ke badle login ya fee mangna.',
    'Rs.10,000 ko Rs.100,000 banane ka claim karna.'
  ],
  examples: [
    '"Sirf Rs.10,000 invest karein aur 24 ghanton me Rs.1 lakh hasil karein. Limited offer!"'
  ],
  preventionTips: [
    'Instagram par Two-Factor Authentication (2FA) enable karein.',
    'Unknown links aur giveaway forms open na karein.',
    'Guaranteed profit ya double money schemes se hamesha bachain.'
  ],
  reportingGuidance: 'Fake account ya post ko Instagram par report karein aur agar financial fraud hua ho to FIA NCCIA ko complaint submit karein.',
  iconName: 'instagram'
},
{
  id: 'tiktok-scams',
  title: 'TikTok Earning & Viral Scam Videos',
  category: 'Social Media',
  overview: 'In Pakistan, scammers share fake earning apps, investment schemes, and free gift videos on TikTok to make people open their links or invest money.',
  warningSigns: [
    'Rs.10,000 ko Rs.1 Lakh banane ka wada.',
    'Bio ya comments me unknown earning link dena.',
    'Registration ya withdrawal ke liye pehle fee mangna.'
  ],
  examples: [
    'Video me kaha jata hai: "Sirf Rs.2,000 invest karo aur rozana Rs.5,000 kamao. Link bio me hai."'
  ],
  preventionTips: [
    'Guaranteed earning ya double money claims par kabhi bharosa na karein.',
    'Unknown apps aur links install na karein.',
    'Investment se pehle platform ki authenticity verify karein.'
  ],
  reportingGuidance: 'Fake video ya account ko TikTok par report karein aur agar paisay lose hue hon to FIA NCCIA ko complaint karein.',
  iconName: 'video'
},
{
  id: 'email-security',
  title: 'Email Phishing & Fake Business Emails',
  category: 'Corporate Protection',
  overview: 'Scammers in Pakistan target companies and businesses by sending fake emails to steal invoice payments, login credentials, or sensitive documents.',
  warningSigns: [
    'Unknown email se urgent payment request ana.',
    'Company ke email address me choti si spelling change hona.',
    'Attachment ya link open karne ka pressure dena.'
  ],
  examples: [
    'Accounts department ko email milta hai: "Vendor ka bank account change ho gaya hai. Payment is naye account me transfer karein."'
  ],
  preventionTips: [
    'Bank account change hamesha phone call ya official confirmation se verify karein.',
    'Unknown attachments aur links open na karein.',
    'Office email accounts par 2FA enable rakhein.'
  ],
  reportingGuidance: 'IT team ko foran inform karein, bank ko notify karein aur zarurat par FIA NCCIA ko report submit karein.',
  iconName: 'server'
},
{
  id: 'fake-websites',
  title: 'Fake Shopping & Government Websites',
  category: 'Digital Integrity',
  overview: 'Scammers create fake copies of famous websites like Daraz, Khaadi, J., NADRA, FBR, and other popular websites to steal login details and online payments.',
  warningSigns: [
    'Bohat sasti deals ya unrealistic discounts.',
    'Website URL official website se different hona.',
    'Advance payment ya card details ki demand.'
  ],
  examples: [
    'Fake Daraz Sale website par iPhone sirf Rs.15,000 me dikhaya jata hai aur advance payment mangi jati hai.'
  ],
  preventionTips: [
    'Website ka URL hamesha check karein.',
    'Official apps ya websites hi use karein.',
    'Unknown stores par advance payment se bachain.'
  ],
  reportingGuidance: 'Website ko PTA aur FIA NCCIA ke paas report karein aur payment ki ho to bank ko foran inform karein.',
  iconName: 'globe'
},
{
  id: 'qr-code-scams',
  title: 'QR Code Payment Scams',
  category: 'Digital Integrity',
  overview: 'In Pakistan, scammers send fake QR codes or place them in shops to trick users into scanning them. Instead of receiving money, the amount gets deducted from their account.',
  warningSigns: [
    'Refund ya payment receive karne ke liye QR scan karne ko kehna.',
    'Unknown person ka WhatsApp par QR code bhejna.',
    'PIN ya OTP enter karne ka prompt ana.'
  ],
  examples: [
    'Scammer kehta hai: "Main aapko refund bhej raha hun. Easypaisa se ye QR scan kar dein." Scan karte hi payment authorize ho jati hai.'
  ],
  preventionTips: [
    'Paisay receive karne ke liye QR scan karna zaroori nahi hota.',
    'Scan se pehle recipient aur amount verify karein.',
    'PIN ya OTP tabhi enter karein jab transaction aap khud kar rahe hon.'
  ],
  reportingGuidance: 'Foran bank ya wallet helpline se rabta karein aur fraud ko FIA NCCIA me report karein.',
  iconName: 'scan'
},
{
  id: 'public-wifi-risks',
  title: 'Public WiFi Risks',
  category: 'Corporate Protection',
  overview: 'In Pakistan, free WiFi at cafes, airports, universities, and shopping malls can be an easy target for hackers. Through fake WiFi networks, they can steal your login details and personal information.',
  warningSigns: [
    'Free WiFi bina password ya verification ke available ho.',
    'Browser security warning ya "Not Secure" message dikhaye.',
    'Same naam ke multiple WiFi networks nazar aayen.'
  ],
  examples: [
    'Aap airport par "Free_Airport_WiFi" se connect hote hain, lekin woh hacker ka fake hotspot hota hai jo aapki login details capture kar leta hai.'
  ],
  preventionTips: [
    'Public WiFi par banking ya wallet apps use na karein.',
    'Zarurat ho to VPN use karein.',
    'Phone me Auto Connect WiFi option off rakhein.'
  ],
  reportingGuidance: 'Agar fake WiFi ka shak ho to location management ko inform karein aur apne account passwords foran change karein.',
  iconName: 'wifi'
},
{
  id: 'identity-theft',
  title: 'Identity Theft (CNIC Misuse)',
  category: 'Digital Integrity',
  overview: 'Scammers misuse your CNIC copy or biometric information to register fake SIMs, bank accounts, loans, or online accounts.',
  warningSigns: [
    'Aapke CNIC par unknown SIMs registered hona.',
    'Loan ya bank verification calls aana jab ke aap ne apply hi na kiya ho.',
    'Unknown financial notices ya legal messages receive hona.'
  ],
  examples: [
    'Facebook par online job ke naam par CNIC ki front aur back photo mangi jati hai aur baad me usi se fake SIM issue kar di jati hai.'
  ],
  preventionTips: [
    'CNIC ki copy sirf trusted organizations ko dein.',
    'Har photocopy par purpose aur date zaroor likhein.',
    'PTA se regularly apne naam par registered SIMs check karein.'
  ],
  reportingGuidance: 'Foran NADRA, mobile company aur FIA NCCIA Cyber Crime ko report karein.',
  iconName: 'fingerprint'
},
{
  id: 'online-shopping-scams',
  title: 'Online Shopping Scams',
  category: 'Financial Fraud',
  overview: 'Fake Facebook, Instagram, and WhatsApp stores offer very cheap deals to collect advance payments or send fake and damaged products after COD orders.',
  warningSigns: [
    'Unrealistic discounts.',
    'Comments ya reviews disable hona.',
    'Sirf advance payment ya bank transfer accept karna.'
  ],
  examples: [
    'Instagram page par iPhone sirf Rs.20,000 me advertise hota hai. Payment ke baad seller account delete kar deta hai.'
  ],
  preventionTips: [
    'Sirf trusted sellers se shopping karein.',
    'Reviews aur page history check karein.',
    'Unknown stores ko advance payment na karein.'
  ],
  reportingGuidance: 'Bank ko payment report karein aur FIA NCCIA ko scam details submit karein.',
  iconName: 'shopping-bag'
},
{
  id: 'ai-voice-scams',
  title: 'AI Voice Cloning Scams',
  category: 'Urgent Threats',
  overview: 'With the help of AI, scammers copy someone’s voice and call their family members pretending to be in an emergency, asking for money through JazzCash or Easypaisa.',
  warningSigns: [
    'Unknown number se family member ki awaaz me call ana.',
    'Emergency ke naam par foran paisay transfer karne ka pressure.',
    'Call me verification questions avoid karna.'
  ],
  examples: [
    'Aapke walid ko call aati hai: "Abu meri accident ho gayi hai, foran Rs.30,000 JazzCash bhej dein." Jab ke aap bilkul theek hote hain.'
  ],
  preventionTips: [
    'Family ke sath ek secret code word decide karein.',
    'Call cut karke usi person ko uske original number par call karein.',
    'Sirf voice sun kar paisay transfer na karein.'
  ],
  reportingGuidance: 'Call recording aur number FIA NCCIA ko report karein aur wallet provider ko bhi inform karein.',
  iconName: 'audio-lines'
},
{
  id: 'deepfake-awareness',
  title: 'Deepfake Videos & Fake Media',
  category: 'Digital Integrity',
  overview: 'Scammers use AI to create fake videos or photos to blackmail people or spread fake information on social media.',
  warningSigns: [
    'Video me face ya lips unnatural lagna.',
    'Audio aur lips ka match na hona.',
    'Unknown account se edited video bhej kar paisay mangna.'
  ],
  examples: [
    'Kisi ki Facebook ya Instagram photo use karke fake video banai jati hai aur Rs.50,000 na dene par viral karne ki dhamki di jati hai.'
  ],
  preventionTips: [
    'Social media privacy settings strong rakhein.',
    'Blackmail hone par paisay na dein.',
    'Family aur friends ko fake media ke bare me aware rakhein.'
  ],
  reportingGuidance: 'Deepfake ya blackmail ka case foran FIA NCCIA Cyber Crime ko report karein aur social media platform par bhi report submit karein.',
  iconName: 'user-x'
},
{
  id: 'cyber-bullying',
  title: 'Cyber Bullying & Online Harassment',
  category: 'Social Media',
  overview: 'Cyber bullying in Pakistan is becoming a common way to target students, professionals, and individuals. Fake accounts, abusive messages, edited photos, and leaked private chats are used to harass victims online.',
  warningSigns: [
    'Anonymous Facebook, Instagram ya WhatsApp accounts se abusive ya threatening messages milna',
    'Aapki personal photos, chats ya phone number ko Facebook groups ya Telegram channels me share karna',
    'Fake profile bana kar aapki reputation kharab karna'
  ],
  examples: [
    'Ek university student ki edited screenshots social media groups me viral ki jati hain taake uski reputation ko nuksan pohanchaya ja sake.'
  ],
  preventionTips: [
    'Harassing accounts ko turant Block aur Report karein.',
    'Chat, Profile Link aur Screenshots evidence ke tor par save karein.',
    'Apni social media privacy settings ko Friends Only ya Private rakhein.'
  ],
  reportingGuidance: 'Evidence save karein aur NCCIA/FIA Cyber Crime Portal par complaint register karein. Agar harassment serious ho to nearest Cyber Crime Reporting Center se bhi rabta karein.',
  iconName: 'users'
},
{
  id: 'online-blackmail',
  title: 'Online Blackmail & Sextortion',
  category: 'Urgent Threats',
  overview: 'Online blackmail cases are increasing in Pakistan. Criminals create fake profiles, record video calls, or create edited images and demand money from victims.',
  warningSigns: [
    'Unknown Facebook, Instagram ya Snapchat account se achanak video call ana',
    'Edited photos ya fake videos viral karne ki dhamki dena',
    'Easypaisa ya JazzCash par emergency payment demand karna'
  ],
  examples: [
    'Ek fake Facebook profile video call record karti hai aur baad me victim se Rs. 50,000 mangti hai warna recording family ko bhejne ki dhamki deti hai.'
  ],
  preventionTips: [
    'Unknown accounts ki video calls kabhi accept na karein.',
    'Blackmailer ko paisay na bhejein.',
    'Evidence save karein aur account ko block/report karein.'
  ],
  reportingGuidance: 'NCCIA/FIA Cyber Crime ko screenshots, chats aur payment details ke sath report karein. Agar financial loss hua ho to apne bank ya wallet provider ko bhi foran inform karein.',
  iconName: 'user-x'
},
{
  id: 'olx-advance-scams',
  title: 'OLX & Facebook Marketplace Advance Scam',
  category: 'Online Shopping',
  overview: 'In Pakistan, scammers post fake listings on OLX and Facebook Marketplace for cheap cars, mobiles, and electronics. They ask for advance payments through Easypaisa or JazzCash and disappear after receiving money.',
  warningSigns: [
    'Market se bohat kam price offer karna',
    'Advance token ya booking amount mangna',
    'Sirf Easypaisa ya JazzCash payment insist karna',
    'Face-to-face meeting se inkar karna'
  ],
  examples: [
    'Seller Honda Civic Rs. 18 lakh ki bajaye Rs. 10 lakh me offer karta hai aur booking ke liye Rs. 20,000 token Easypaisa par bhejne ka kehta hai.'
  ],
  preventionTips: [
    'Kabhi bhi advance payment na karein.',
    'Busy public place me face-to-face deal karein.',
    'Vehicle ya product verify kiye baghair payment na karein.'
  ],
  reportingGuidance: 'Fake listing ko OLX/Facebook par Report karein aur financial fraud ki complaint NCCIA/FIA Cyber Crime me register karein.',
  iconName: 'shopping-cart'
},
{
  id: 'daraz-task-scams',
  title: 'Daraz Task & Online Earning Scam',
  category: 'Online Earning',
  overview: 'Scammers use the name of Daraz or online shopping platforms to offer fake earning tasks through WhatsApp and Telegram. They give small payments first and later demand large investments before disappearing.',
  warningSigns: [
    'WhatsApp par daily Rs. 3,000-10,000 earning ka offer',
    'Telegram group me fake earning screenshots share hona',
    'VIP Task unlock karne ke liye recharge ya investment demand karna'
  ],
  examples: [
    'Victim ko pehle Rs. 600 milte hain, phir VIP Task ke liye Rs. 50,000 deposit karwaye jate hain aur account block kar diya jata hai.'
  ],
  preventionTips: [
    'Daraz kabhi WhatsApp par jobs ya paid tasks offer nahi karta.',
    'Pehle paisa deposit karne wali earning schemes se hamesha bachain.',
    'Fake WhatsApp aur Telegram numbers ko block aur report karein.'
  ],
  reportingGuidance: 'NCCIA/FIA Cyber Crime Portal par complaint register karein aur fraudulent WhatsApp/Telegram accounts ko report karein.',
  iconName: 'star'
},
 {
  id: 'crypto-mining-apps',
  title: 'Fake Crypto Investment & Mining Apps',
  category: 'Online Investment',
  overview: 'In Pakistan, fake crypto investment and mining apps attract people through social media, WhatsApp, and Telegram by promising daily profits. These apps steal users money and personal information by demanding registration fees, USDT deposits, or wallet access.',
  warningSigns: [
    'Daily guaranteed profit ya fixed monthly return ka wada karna',
    'Mining activate karne ke liye USDT ya activation fee demand karna',
    'Google Play Store ya Apple App Store ke bajaye APK file install karwana',
    'Har referral par cash bonus dene ka wada karna'
  ],
  examples: [
    'Ek student Telegram group ke through fake crypto mining app install karta hai aur USDT me Rs. 20,000 invest karta hai. Kuch dino baad app band ho jati hai aur uska wallet bhi empty ho jata hai.'
  ],
  preventionTips: [
    'Sirf Google Play Store ya Apple App Store se apps install karein.',
    'Guaranteed profit dene wali crypto schemes se hamesha bachain.',
    'Apni wallet recovery phrase ya private keys kisi ke sath share na karein.'
  ],
  reportingGuidance: 'Fake app ko Google Play par report karein aur crypto wallet address, transaction details aur screenshots ke sath NCCIA/FIA Cyber Crime Portal par complaint register karein.',
  iconName: 'coins'
},
{
  id: 'hajj-umrah-scams',
  title: 'Fake Hajj & Umrah Package Scam',
  category: 'Travel Scam',
  overview: 'In Pakistan, fake travel agencies advertise cheap Hajj and Umrah packages through Facebook, WhatsApp, and TikTok. After receiving advance payment, they provide fake visas, fake tickets, or fake hotel bookings and disappear.',
  warningSigns: [
    'Market se bohat sasta Hajj ya Umrah package offer karna',
    'Office visit ke baghair full advance payment demand karna',
    'Official receipt, visa ya booking confirmation na dena',
    'License ya registration details share na karna'
  ],
  examples: [
    'Ek family Rs. 600,000 advance payment karti hai. Airport pohanchne par pata chalta hai ke visa aur air tickets fake hain aur travel agent ka number bhi band hai.'
  ],
  preventionTips: [
    'Sirf registered aur licensed travel agency se booking karein.',
    'Office physically visit karke contract aur receipts hasil karein.',
    'Visa aur booking details official portals se verify karein.'
  ],
  reportingGuidance: 'Travel agency ki complaint NCCIA/FIA Cyber Crime aur relevant government authorities ke paas register karein. Payment records aur receipts evidence ke tor par sambhal kar rakhein.',
  iconName: 'milestone'
},
{
  id: 'loan-app-extortion',
  title: 'Fake Loan Apps & Blackmail',
  category: 'Financial Fraud',
  overview: 'In Pakistan, fake instant loan apps attract users with easy loans and get access to Contacts, Gallery, and personal data. Later, this information is used for blackmail and harassment.',
  warningSigns: [
    'Loan approve karne se pehle Contacts, Gallery, SMS aur Location ki permission mangna',
    '7 ya 14 din me loan wapas karne ka pressure aur bohat zyada hidden charges',
    'Payment late hote hi family aur friends ko abusive messages bhejna',
    'Edited photos bana kar social media par upload karne ki dhamki dena'
  ],
  examples: [
    'Ek user Rs. 10,000 ka instant loan leta hai. Sirf ek hafte baad Rs. 25,000 demand kiye jate hain. Payment na karne par uske contacts ko edited photos aur abusive messages bheje jate hain.'
  ],
  preventionTips: [
    'Unknown loan apps install na karein.',
    'Sirf licensed aur regulated financial institutions se loan hasil karein.',
    'Contacts aur Gallery permissions dene se pehle app ko verify karein.',
    'Blackmail ki surat me paisa bhejne ke bajaye foran report karein.'
  ],
  reportingGuidance: 'Evidence, screenshots aur payment details ke sath NCCIA/FIA Cyber Crime Portal par complaint register karein. Zarurat parne par apne bank ya wallet provider ko bhi inform karein.',
  iconName: 'landmark'
},
{
  id: 'car-rental-scams',
  title: 'Fake Car Rental Scam',
  category: 'Travel Scam',
  overview: 'In Pakistan, fake Facebook pages and WhatsApp accounts advertise fake luxury car rentals or wedding rentals to collect advance payments and disappear afterwards.',
  warningSigns: [
    'Facebook ya Instagram page par fake reviews ya disabled comments',
    'Office visit ya vehicle inspection se inkar karna',
    '50% ya 100% advance payment Easypaisa, JazzCash ya bank transfer me mangna',
    'Written agreement dene se inkar karna'
  ],
  examples: [
    'Ek family wedding ke liye Toyota Prado book karti hai aur Rs. 30,000 advance bhej deti hai. Event wale din number band hota hai aur koi gari nahi aati.'
  ],
  preventionTips: [
    'Sirf registered rental companies se booking karein.',
    'Office visit karke vehicle aur documents verify karein.',
    'Written rental agreement hasil karein.',
    'Advance payment se pehle company ki authenticity check karein.'
  ],
  reportingGuidance: 'Fake page ko Facebook ya Instagram par report karein aur financial fraud ki complaint NCCIA/FIA Cyber Crime me register karein.',
  iconName: 'car'
},
{
  id: 'academic-writing-scams',
  title: 'Typing & Assignment Job Scam',
  category: 'Online Earning',
  overview: 'In Pakistan, students are targeted through WhatsApp, Facebook, and Telegram with fake typing jobs, assignment writing, and data entry offers. Scammers disappear after collecting registration fees.',
  warningSigns: [
    'Registration fee ya security deposit demand karna',
    'Simple typing ke badle bohat zyada salary offer karna',
    'Company ka office ya official website na hona',
    'Sirf WhatsApp ya Telegram par communication karna'
  ],
  examples: [
    'Ek university student Rs. 3,000 registration fee Easypaisa se bhejti hai. Payment ke baad recruiter uska number block kar deta hai.'
  ],
  preventionTips: [
    'Koi bhi genuine company job ke liye registration fee nahi leti.',
    'Company ki website aur reviews verify karein.',
    'Unknown WhatsApp jobs se bachain.',
    'Trusted freelancing platforms hi use karein.'
  ],
  reportingGuidance: 'Fake job post ko Facebook ya WhatsApp par report karein aur NCCIA/FIA Cyber Crime Portal par complaint submit karein.',
  iconName: 'book-open'
},
{
  id: 'foreign-visa-scams',
  title: 'Fake Overseas Visa & Immigration Scam',
  category: 'Travel Scam',
  overview: 'In Pakistan, fake immigration consultants claim to provide guaranteed work or visit visas for countries like Canada, UK, Australia, Europe, and Gulf states, and take large advance payments before disappearing or providing fake documents.',
  warningSigns: [
    'IELTS, interview ya document verification ke baghair guaranteed visa ka wada karna',
    'Office visit ke baghair sirf WhatsApp ya Facebook par deal karna',
    'Urgent processing ke naam par foran payment demand karna',
    'License ya registration details provide na karna'
  ],
  examples: [
    'Ek applicant Canada work visa ke liye Rs. 800,000 transfer karta hai. Airport par pata chalta hai ke visa aur approval letter dono fake hain.'
  ],
  preventionTips: [
    'Sirf registered aur licensed immigration consultants se deal karein.',
    'Embassy ya official visa portal se application verify karein.',
    'Advance payment se pehle consultant ki reputation aur office verify karein.'
  ],
  reportingGuidance: 'Fake consultant ke against NCCIA/FIA Cyber Crime me complaint register karein aur tamam payment receipts, chats aur documents evidence ke tor par submit karein.',
  iconName: 'plane-takeoff'
},
{
  id: 'charity-ramadan-scams',
  title: 'Fake Charity & Donation Scam',
  category: 'Social Media',
  overview: 'During Ramadan, Eid, Muharram, and natural disasters, scammers create fake Facebook pages and WhatsApp campaigns to collect donations, Zakat, and Sadqah and then disappear with the money.',
  warningSigns: [
    'Unknown Facebook pages ya WhatsApp numbers donation demand karein',
    'Sirf personal Easypaisa ya JazzCash account diya jaye',
    'NGO registration ya hospital documents verify na ho saken',
    'Emotional photos aur videos ke zariye pressure create kiya jaye'
  ],
  examples: [
    'Ek Facebook post me bimar bache ke operation ke liye donation mangi jati hai. Log Easypaisa par paisa bhejte hain, baad me pata chalta hai ke photos internet se chori ki gayi thin.'
  ],
  preventionTips: [
    'Sirf registered aur trusted charities ko donation dein.',
    'Hospital ya organization se case verify karein.',
    'Unknown personal wallet accounts me donation transfer na karein.'
  ],
  reportingGuidance: 'Fake page ko social media par report karein aur NCCIA/FIA Cyber Crime Portal par complaint submit karein.',
  iconName: 'heart'
},
{
  id: 'romance-crypto-scams',
  title: 'Romance & Investment Scam',
  category: 'Social Media',
  overview: 'Scammers on Facebook, Instagram, WhatsApp, and Telegram build fake relationships or friendships to gain trust and later convince victims to invest in crypto, forex, or other fake investment platforms.',
  warningSigns: [
    'Unknown person ka achanak friendship ya relationship start karna',
    'Video call ya physical meeting se bachna',
    'Crypto, Forex ya investment platform join karne par zor dena',
    'Guaranteed profit aur luxury lifestyle dikhana'
  ],
  examples: [
    'Ek scammer 3 mahine tak WhatsApp par friendship rakhta hai aur phir victim ko fake crypto platform me Rs. 1,500,000 invest karwa deta hai. Withdrawal ke waqt account block ho jata hai.'
  ],
  preventionTips: [
    'Unknown online relationships par financial trust na karein.',
    'Kisi bhi online contact ke kehne par investment na karein.',
    'Apni banking information, CNIC ya wallet details share na karein.'
  ],
  reportingGuidance: 'Investment scam aur fake platform ki complaint NCCIA/FIA Cyber Crime me register karein aur agar bank ya wallet use hua ho to foran unko bhi inform karein.',
  iconName: 'heart-handshake'
}

];

// Globally bind list for dynamic access across the frontend
window.learningTopics = learningTopics;
