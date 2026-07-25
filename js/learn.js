/* Learn Data Module (learn.js)
   -----------------------------------------
   Is file me Pakistan ke active cyber threats aur digital scams ki exhaustive, publication-grade educational articles store hain.
   Yeh guides beginner-friendly hain aur Roman Urdu/English me detailed explanations provide karti hain.
   
   Har article me exhaustive educational content hai, jo headings, FAQs, warnings, key takeaways aur actionable steps ke sath fully structured hai.
*/

const learningTopics = [
 {
  id: 'phishing-scams',
  title: 'Phishing Scams (Fake Links and Spoofed Websites)',
  category: 'Urgent Threats',
  iconName: 'mail-warning',
  overview: `
      <div class="article-rich-content">
        <h3>1. Understanding Phishing in Pakistan</h3>
        <p>Phishing is a type of cyberattack in which criminals pretend to be trusted organizations to steal sensitive information such as login credentials, banking passwords, CNIC details, debit or credit card information, and One-Time Passwords (OTPs). In Pakistan, phishing attacks have increased significantly in recent years due to growing internet usage, widespread smartphone adoption, and limited cybersecurity awareness.</p>
        <p>Cybercriminals commonly use the following phishing techniques to target people in Pakistan:</p>
        <ul>
          <li><strong>Smishing (SMS Phishing):</strong> Fake SMS messages pretending to be from the Benazir Income Support Programme (BISP), Federal Board of Revenue (FBR), Pakistan Post, or banks such as HBL, Meezan Bank, and Bank Alfalah.</li>
          <li><strong>Spear Phishing:</strong> Highly targeted emails sent to employees, businesses, or government officials using convincing messages and malicious attachments, such as fake invoices or documents.</li>
          <li><strong>Vishing (Voice Phishing):</strong> Fraudulent phone calls claiming to be from the Pakistan Telecommunication Authority (PTA), State Bank of Pakistan (SBP), banks, or other trusted organizations.</li>
        </ul>

        <h3>2. How a Phishing Attack Works</h3>
        <p>Understanding how phishing attacks work can help you recognize and avoid them.</p>
        <ol>
          <li><strong>Step 1: Creating a Fake Website</strong><br>Attackers register deceptive domain names such as <em>"hbl-digital-verification.com"</em> or <em>"bisp-8171-gov.info"</em>. These websites are designed to closely resemble official websites.</li>

          <li><strong>Step 2: Sending the Scam</strong><br>Using bulk SMS, email campaigns, or WhatsApp messages, scammers send fake notifications claiming your account requires verification, your payment is pending, or your account has been blocked.</li>

          <li><strong>Step 3: Creating Panic</strong><br>The message pressures you to act immediately by claiming your account will be suspended or permanently blocked if you do not respond within a short time.</li>

          <li><strong>Step 4: Stealing Your Credentials</strong><br>When you open the fake website, it looks almost identical to the real banking or government website. Victims unknowingly enter their usernames, passwords, or other personal information.</li>

          <li><strong>Step 5: OTP Theft and Account Access</strong><br>The fake website then asks for your One-Time Password (OTP). At the same time, the attacker attempts to log in to your real account. Once you provide the OTP, the attacker can complete the login or authorize fraudulent transactions.</li>
        </ol>

        <h3>3. Warning Signs and Red Flags</h3>
        <p>If you receive a suspicious message, look for these common warning signs:</p>
        <ul>
          <li><strong>Suspicious Website Address:</strong> Official websites use the correct domain name and secure <code>https://</code> connection. Fake websites often contain spelling mistakes or extra words, such as <em>meezanbankk.com</em> or <em>ubldigitall.net</em>.</li>

          <li><strong>Unofficial SMS Sender:</strong> Legitimate banks usually send messages through verified sender IDs or official short codes, not ordinary mobile numbers.</li>

          <li><strong>Urgent or Threatening Language:</strong> Messages demanding immediate action or threatening to block your account are common phishing tactics.</li>
        </ul>

        <h3>4. How to Protect Yourself</h3>
        <p>Follow these cybersecurity best practices to reduce the risk of phishing attacks:</p>
        <ul>
          <li><strong>Type the Website Address Yourself:</strong> Never open banking websites through links received in SMS, WhatsApp, or email. Instead, manually type the official website address into your browser.</li>

          <li><strong>Enable Multi-Factor Authentication (MFA/2FA):</strong> Activate two-factor authentication or biometric security for your banking, email, and social media accounts whenever available.</li>

          <li><strong>Use Trusted Browser Protection:</strong> Modern browsers such as Google Chrome and Microsoft Edge include built-in phishing protection. Keep your browser updated and use reputable security software.</li>

          <li><strong>Keep Your Devices Secure:</strong> Regularly update your operating system, browser, antivirus software, and mobile applications to protect against newly discovered threats.</li>
        </ul>

        <h3>5. How to Report Phishing in Pakistan</h3>
        <p>If you believe you have been targeted by a phishing scam, take the following steps immediately:</p>
        <ul>
          <li><strong>Step A:</strong> Contact your bank immediately and request that your card or online banking services be temporarily blocked if you shared any sensitive information.</li>

          <li><strong>Step B:</strong> Save screenshots of the SMS, email, WhatsApp message, fake website, and any suspicious phone numbers.</li>

          <li><strong>Step C:</strong> Report suspicious SMS messages or fraudulent websites to the Pakistan Telecommunication Authority (PTA) through its official reporting channels.</li>

          <li><strong>Step D:</strong> Submit a complaint to the National Cyber Crime Investigation Agency (NCCIA) or the relevant cybercrime reporting portal with all available evidence.</li>
        </ul>

        <h3>6. Frequently Asked Questions (FAQs)</h3>

        <p><strong>Q1: Can simply clicking a phishing link empty my bank account?</strong><br>
        A: Usually, no. Simply clicking a phishing link does not normally allow attackers to access your bank account. However, if you enter your username, password, card details, or OTP on a fake website, your account may be compromised. Some malicious links may also attempt to install malware on your device.</p>

        <p><strong>Q2: How can I tell whether a government website is genuine?</strong><br>
        A: Official Pakistani government websites normally use the <code>.gov.pk</code> domain (for example, <code>bisp.gov.pk</code>). Always verify the full website address before entering any personal information.</p>

        <p><strong>Q3: What should I do if I entered my password on a fake website?</strong><br>
        A: Change your password immediately using the official website or mobile app. If you entered banking information or an OTP, contact your bank without delay and request that your online banking services or cards be secured.</p>

        <h3>7. Key Takeaways</h3>

        <table class="checklist-table" style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
          <thead>
            <tr style="background-color: var(--bg-secondary); border-bottom: 2px solid var(--border-color);">
              <th style="padding: 0.5rem; text-align: left;">Action Item</th>
              <th style="padding: 0.5rem; text-align: left;">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom: 1px solid var(--border-color);">
              <td style="padding: 0.5rem;">Verify the website URL before entering your password or personal information.</td>
              <td style="padding: 0.5rem; color: var(--color-success);">✔ Essential</td>
            </tr>
            <tr style="border-bottom: 1px solid var(--border-color);">
              <td style="padding: 0.5rem;">Never share your OTP, PIN, or banking password with anyone.</td>
              <td style="padding: 0.5rem; color: var(--color-success);">✔ Essential</td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
  warningSigns: [
    'Urgent SMS or WhatsApp messages claiming your account has been blocked or requires immediate verification.',
    'Fake website links such as hbl-secure-login.com, meezan-verify.net, or bisp8171-update.com.',
    'Spelling mistakes, poor grammar, or unusual website addresses.',
    'Messages that pressure you to click a link immediately or threaten account suspension.'
  ],
  examples: [
    'SMS: "Your HBL account has been temporarily blocked. Verify your account here: hbl-secure-login.com"',
    'WhatsApp: "Meezan Bank KYC update is required. Log in using the link below to continue."'
  ],
  preventionTips: [
    'Always verify the website URL before entering your password or personal information.',
    'Use only official banking applications and verified websites.',
    'Enable Two-Factor Authentication (2FA) on all important accounts whenever possible.'
  ],
  reportingGuidance: 'Save screenshots of the suspicious message, fake website, and any related phone numbers or links. Report the incident to the NCCIA or the relevant cybercrime authorities. If you shared banking information, contact your bank immediately and request that your account or card be secured.'
},
 {
  id: 'whatsapp-scams',
  title: 'WhatsApp Hijack & Code Scams (Verification Bypass)',
  category: 'Social Media',
  iconName: 'message-square',
  overview: `
      <div class="article-rich-content">
        <h3>1. Understanding WhatsApp Hijacking</h3>
        <p>WhatsApp hijacking is one of the most common online scams in Pakistan. In most cases, attackers do not hack your account using advanced technical methods. Instead, they rely on <strong>social engineering</strong> to trick you into sharing your 6-digit WhatsApp verification code. Once they obtain this code, they can register your WhatsApp account on another device and gain unauthorized access.</p>

        <p>WhatsApp uses a secure verification process to protect user accounts. However, if you voluntarily share your verification code or One-Time Password (OTP), the attacker can bypass this security and take control of your account.</p>

        <h3>2. Step-by-Step Anatomy of a WhatsApp Scam</h3>
        <p>This scam usually follows the pattern below:</p>
        <ol>
          <li><strong>Step 1: The Initial Contact:</strong> The scammer contacts you using a regular mobile number and pretends to be from WhatsApp Support, a government organization, or even a friend or relative claiming to have an emergency.</li>

          <li><strong>Step 2: Creating a False Story:</strong> The scammer may say, <em>"I accidentally used your phone number while registering WhatsApp,"</em> or <em>"A security verification code has been sent to your number. Please share it immediately, otherwise your account will be blocked."</em></li>

          <li><strong>Step 3: Triggering the Verification Code:</strong> Meanwhile, the attacker enters your phone number on their own device to request a WhatsApp verification code.</li>

          <li><strong>Step 4: The Victim Shares the Code:</strong> The verification code arrives on your phone via SMS. Believing the scammer's story, the victim unknowingly shares the code.</li>

          <li><strong>Step 5: Account Hijacking:</strong> The attacker enters the verification code, logs into your WhatsApp account, and immediately enables <strong>Two-Step Verification (2FA)</strong> with a new PIN. They may then impersonate you and ask your friends or family for money through WhatsApp.</li>
        </ol>

        <h3>3. Warning Signs and Red Flags</h3>
        <ul>
          <li>Someone unexpectedly asks for your WhatsApp verification code or OTP over a phone call, SMS, or chat.</li>

          <li>A friend or relative suddenly requests an urgent money transfer through WhatsApp, especially via JazzCash or Easypaisa.</li>

          <li>Someone claims to be from WhatsApp Support and contacts you directly through an unverified phone number or message. Official WhatsApp communication is provided only through verified support channels.</li>
        </ul>

        <h3>4. How to Protect Yourself</h3>
        <ul>
          <li><strong>Enable Two-Step Verification:</strong> Go to <strong>WhatsApp Settings → Account → Two-Step Verification</strong> and enable a secure 6-digit PIN. Also, add a recovery email address to help restore access if needed.</li>

          <li><strong>Never Share Your Verification Code:</strong> Your WhatsApp verification code or OTP should never be shared with anyone, regardless of who they claim to be.</li>

          <li><strong>Verify Before Sending Money:</strong> If a friend or family member asks for money through WhatsApp, always confirm the request by calling them directly instead of relying only on chat messages.</li>
        </ul>

        <h3>5. Recovering a Hijacked WhatsApp Account</h3>
        <p>If your WhatsApp account has been hijacked, act quickly by following these steps:</p>
        <ul>
          <li><strong>Step 1:</strong> Reinstall WhatsApp on your phone, enter your mobile number, and request a new SMS verification code.</li>

          <li><strong>Step 2:</strong> Enter the new verification code. This will automatically log the attacker out of your WhatsApp account.</li>

          <li><strong>Step 3:</strong> If the attacker has enabled Two-Step Verification, tap <strong>"Forgot PIN"</strong> to reset it using your recovery email. If no recovery email is available, you may need to wait up to seven days before regaining access. During this time, your end-to-end encrypted chat history remains protected.</li>
        </ul>
      </div>
    `,
  warningSigns: [
    'Someone unexpectedly asks for your WhatsApp verification code or OTP.',
    'You are added to an unknown WhatsApp group without your permission.',
    'A friend or relative suddenly requests emergency financial assistance through WhatsApp.'
  ],
  examples: [
    'Message: "I am from WhatsApp Support. Share your verification code immediately or your account will be blocked."',
    'Message from a friend\'s account: "I have an emergency. Please send Rs. 5,000 through JazzCash as soon as possible."'
  ],
  preventionTips: [
    'Never share your 6-digit WhatsApp verification code with anyone.',
    'Enable WhatsApp Settings → Account → Two-Step Verification for additional security.',
    'Always confirm money requests by calling the person directly before sending any payment.'
  ],
  reportingGuidance: 'If your WhatsApp account is hijacked, immediately register your number on WhatsApp again using a new verification code, inform your contacts that your account was compromised, and report the incident to the NCCIA or the relevant cybercrime authorities if necessary.'
},
 {
  id: 'fake-prize-scams',
  title: 'Fake Prize Scams (BISP / Jeeto Pakistan Lottery Fraud)',
  category: 'Financial Fraud',
  iconName: 'gift',
  overview: `
      <div class="article-rich-content">
        <h3>1. Understanding Fake Prize Scams in Pakistan</h3>
        <p>Fake prize and lottery scams are among the most common financial frauds in Pakistan. Criminals exploit the names of trusted organizations such as the Benazir Income Support Programme (BISP), the 8171 program, Jeeto Pakistan, or telecom companies to convince people that they have won cash prizes, gold, or other valuable rewards.</p>

        <p>These scams rely on excitement and false promises. Attackers may use spoofed caller IDs, fake social media accounts, WhatsApp messages, or SMS campaigns to make their offers appear genuine.</p>

        <h3>2. How the Scam Works</h3>
        <p>This scam usually follows the pattern below:</p>
        <ol>
          <li><strong>Step 1: The Fake Prize Notification:</strong> The victim receives an SMS or WhatsApp message claiming they have won a large cash prize, such as <em>"Congratulations! You have been approved to receive Rs. 25,000 under the BISP 8171 scheme. Contact us at 0334567890."</em></li>

          <li><strong>Step 2: Building Trust:</strong> When the victim calls the provided number, the scammer speaks politely and confidently, claiming the prize has already been confirmed and is ready for collection.</li>

          <li><strong>Step 3: Requesting a Processing Fee:</strong> The scammer claims that a government tax, registration fee, or processing charge must be paid before the prize can be released.</li>

          <li><strong>Step 4: Repeated Payment Requests:</strong> After the victim sends the first payment, the scammer invents additional charges such as ATM card activation fees, documentation fees, or verification charges to continue collecting money.</li>

          <li><strong>Step 5: Disappearing:</strong> Once the scammers receive enough money, they stop responding, switch off their phone number, and move on to new victims using different SIM cards.</li>
        </ol>
      </div>
    `,
  warningSigns: [
    'Claiming you have won a prize without ever entering a competition or registering.',
    'Requesting taxes, registration fees, or processing charges before releasing the prize.',
    'Messages sent from a regular 11-digit mobile number instead of an official sender ID such as 8171.'
  ],
  examples: [
    'SMS: "Congratulations! You have won Rs. 25,000 through the BISP scheme. Contact 03XX-XXXXXXX to claim your prize."',
    'Caller: "I am calling from Jeeto Pakistan. Please send Rs. 2,000 as a processing fee to receive your prize."'
  ],
  preventionTips: [
    'Government organizations and legitimate prize schemes never ask for advance payments, taxes, or OTPs to release prizes.',
    'Always verify prize claims through official websites, verified helplines, or authorized customer support.'
  ],
  reportingGuidance: 'Save screenshots of the fraudulent SMS or WhatsApp message, the sender\'s phone number, and any payment details. Report the incident to the PTA, NCCIA, or the relevant cybercrime authorities.'
},

{
  id: 'fake-job-scams',
  title: 'Fake Job Scams (YouTube Likes & Online Earning Traps)',
  category: 'Financial Fraud',
  iconName: 'briefcase',
  overview: `
      <div class="article-rich-content">
        <h3>1. Understanding Online Task Scams</h3>
        <p>Cybercriminals take advantage of unemployment and the growing demand for work-from-home opportunities by promoting fake online earning schemes. These scams often involve simple tasks such as liking YouTube videos, rating products, clicking advertisements, or completing online assignments while promising unrealistically high daily income.</p>

        <p>Many of these operations function as <strong>task-based Ponzi schemes</strong>, where money collected from new participants is used to pay earlier victims. Eventually, the platform disappears with everyone's deposits.</p>

        <h3>2. How the Scam Works</h3>
        <ol>
          <li><strong>Step 1: The Recruitment Message:</strong> Victims receive a WhatsApp or Telegram message from someone claiming to be an HR manager or recruitment officer, offering easy online work with promises of earning Rs. 3,000–5,000 per day.</li>

          <li><strong>Step 2: Building Trust:</strong> The victim is asked to complete a few simple tasks, such as liking YouTube videos. To gain trust, the scammer may even send a small payment through Easypaisa or another mobile wallet.</li>

          <li><strong>Step 3: VIP Upgrade:</strong> The victim is invited to a Telegram or WhatsApp group and told that larger tasks and higher earnings are only available after paying a VIP membership or security deposit.</li>

          <li><strong>Step 4: Financial Trap:</strong> After the victim deposits a significant amount of money, the platform blocks withdrawals and demands even more payments, claiming there was an error or additional verification is required.</li>
        </ol>
      </div>
    `,
  warningSigns: [
    'Promising unusually high daily income for simple tasks such as liking videos or rating products.',
    'Requesting registration fees, security deposits, or VIP membership payments before allowing you to work.',
    'Communicating only through WhatsApp or Telegram without an official company website or verified contact information.'
  ],
  examples: [
    'WhatsApp message: "Earn Rs. 5,000 every day by simply liking YouTube videos. Pay Rs. 3,000 to complete your registration."'
  ],
  preventionTips: [
    'Never pay advance fees to obtain a job or unlock earning opportunities.',
    'Always verify the company\'s official website, registration details, and reputation before accepting any job offer.'
  ],
  reportingGuidance: 'Save chat history, payment receipts, wallet details, and screenshots of the scam. Report the incident to the NCCIA or the relevant cybercrime authorities as soon as possible.'
},
 {
  id: 'easypaisa-fraud',
  title: 'Easypaisa Scams (Fake SMS, Fraud Calls & Accidental Transfer Scams)',
  category: 'Financial Fraud',
  iconName: 'wallet',
  overview: `
      <div class="article-rich-content">
        <h3>1. Understanding Easypaisa Fraud</h3>
        <p>Easypaisa is one of Pakistan's largest mobile wallet services, making it a frequent target for cybercriminals. Rather than exploiting technical weaknesses in the platform, scammers manipulate users through social engineering, fake messages, and emotional pressure to convince them to send money or reveal sensitive information.</p>

        <p>Because Easypaisa transactions are usually processed instantly and are difficult to reverse, scammers often pressure victims into acting quickly before they have a chance to verify the transaction.</p>

        <h3>2. How the Fake SMS & Accidental Transfer Scam Works</h3>
        <ol>
          <li><strong>Step 1: The Fake Payment Message:</strong> The victim receives an SMS claiming that money has been credited to their Easypaisa account, for example: <em>"Telenor: Rs. 20,000 received from [Name]."</em> The message may appear convincing but is often sent from an ordinary mobile number instead of an official sender ID.</li>

          <li><strong>Step 2: The Follow-Up Call:</strong> Shortly after the message, the scammer calls and claims they accidentally sent money to your Easypaisa account. They politely request that you return the amount immediately.</li>

          <li><strong>Step 3: Emotional Manipulation:</strong> Without checking the actual balance or transaction history in the official Easypaisa app, the victim transfers money to the scammer's wallet, believing the story to be genuine.</li>
        </ol>
      </div>
    `,
  warningSigns: [
    'Receiving a payment SMS from a regular mobile number instead of an official Easypaisa sender ID.',
    'Someone claims they accidentally transferred money and pressures you to return it immediately.',
    'Anyone asking for your Easypaisa PIN, OTP, or account verification details.'
  ],
  examples: [
    'Caller: "I accidentally sent Rs. 10,000 to your Easypaisa account. Please return it immediately."'
  ],
  preventionTips: [
    'Always check your Easypaisa balance and transaction history before returning any money.',
    'Never share your PIN, OTP, or login credentials with anyone.'
  ],
  reportingGuidance: 'If you suspect fraud, contact the Easypaisa Helpline (3737) immediately, report the suspicious account, and secure your wallet if you shared any sensitive information.'
},

{
  id: 'jazzcash-fraud',
  title: 'JazzCash Agent Fraud & Biometric Scams',
  category: 'Financial Fraud',
  iconName: 'credit-card',
  overview: `
      <div class="article-rich-content">
        <h3>1. Understanding JazzCash Agent Scams</h3>
        <p>JazzCash is widely used across Pakistan through agents, merchants, and mobile services. Cybercriminals often pretend to be official JazzCash representatives, franchise staff, audit teams, or government officials to trick users into authorizing fraudulent transactions.</p>

        <p>Many scams involve fake verification requests, misleading USSD codes, or social engineering techniques designed to persuade users to approve payments themselves.</p>

        <h3>2. How the JazzCash Scam Works</h3>
        <ol>
          <li><strong>Step 1: The Fake Verification Call:</strong> The scammer calls and claims that your JazzCash account is incomplete, blocked, or requires biometric verification.</li>

          <li><strong>Step 2: The USSD Code Request:</strong> The caller instructs you to dial a USSD code, such as <code>*786*1*1*0334567890*5000#</code>, claiming it is required to verify your account.</li>

          <li><strong>Step 3: PIN Confirmation:</strong> After dialing the code, you are asked to enter your JazzCash PIN. Instead of verifying your account, this authorizes a money transfer directly to the scammer.</li>
        </ol>
      </div>
    `,
  warningSigns: [
    'Receiving calls from unknown numbers claiming to represent JazzCash Support.',
    'Being asked to provide your JazzCash PIN, OTP, or verification code.',
    'Receiving unexpected USSD codes or payment approval requests that you did not initiate.'
  ],
  examples: [
    'Caller: "I am calling from JazzCash Head Office. Please share your 4-digit PIN to verify your account."'
  ],
  preventionTips: [
    'JazzCash will never ask for your PIN or OTP over a phone call.',
    'Never dial USSD codes or approve transactions based on instructions from an unknown caller.'
  ],
  reportingGuidance: 'If you receive a suspicious call or believe you have been targeted, contact the JazzCash Helpline (4444) immediately and report the incident.'
},

{
  id: 'otp-scams',
  title: 'OTP (One-Time Password) Theft & Social Engineering',
  category: 'Urgent Threats',
  iconName: 'shield-alert',
  overview: `
      <div class="article-rich-content">
        <h3>1. Understanding OTP Theft</h3>
        <p>A One-Time Password (OTP) is an important security feature that helps protect your online accounts and financial transactions. Cybercriminals use social engineering, fake emergencies, and impersonation techniques to trick victims into revealing their OTPs.</p>

        <p>If an attacker obtains your OTP, they may be able to complete unauthorized logins, approve financial transactions, or gain access to sensitive accounts, even if you have a strong password.</p>

        <h3>2. How OTP Theft Works</h3>
        <ol>
          <li><strong>Step 1: The Unauthorized Login Attempt:</strong> The attacker attempts to log into your account or perform a sensitive action such as adding a new beneficiary or resetting your password.</li>

          <li><strong>Step 2: The Fraudulent Phone Call:</strong> At the same time, the attacker calls you pretending to be a bank representative, government official, or another trusted authority, claiming there is suspicious activity on your account and urgently requesting your OTP.</li>

          <li><strong>Step 3: Account Compromise:</strong> Once you reveal the OTP, the attacker completes the verification process and gains unauthorized access to your account or approves fraudulent transactions.</li>
        </ol>
      </div>
    `,
  warningSigns: [
    'Someone asks you to read or share the OTP received on your phone.',
    'The caller creates urgency by claiming your account will be blocked, frozen, or compromised.',
    'Your OTP message clearly states "Do not share this code," but the caller still insists on receiving it.'
  ],
  examples: [
    'Caller: "I am calling from the HBL Verification Department. Please share your OTP immediately to prevent your account from being blocked."'
  ],
  preventionTips: [
    'Never share your OTP with anyone, even if they claim to represent your bank, a government department, or customer support.',
    'Always read the OTP message carefully to understand which transaction or login request it is authorizing.'
  ],
  reportingGuidance: 'If you accidentally shared your OTP, immediately contact your bank or wallet provider, secure your account, change your password if necessary, and report the incident to the relevant cybercrime authorities.'
},
  {
    id: 'sim-swap-fraud',
    title: 'SIM Swap Fraud & CNIC Biometric Identity Cloning',
    category: 'Urgent Threats',
    iconName: 'smartphone',
    overview: `
      <div class="article-rich-content">
        <h3>1. Explanation of SIM Swap Mechanics</h3>
        <p>SIM Swapping (duplicate SIM issuance) bypasses traditional multi-factor SMS codes. Scammers use fake identity papers, stolen CNIC details, or collude with fraudulent mobile shop agents to run biometric duplicates of your active phone SIM card.</p>
        <p>Once the duplicated SIM is activated on the hacker's handset, your original SIM loses cellular signals (No Service), and all your 2FA verification calls and recovery codes route directly to the hacker.</p>
      </div>
    `,
    warningSigns: [
      'Achanak mobile par "No Service" ya "Emergency Calls Only" ana.',
      'Bank ya wallet ke OTPs receive na hona.',
      'Network company se SIM replacement ya biometric verification ki unexpected call or SMS.'
    ],
    examples: [
      'Subah uthte hi aapki Jazz ya Zong SIM achanak band ho gayi. Kuch der baad pata chala ke kisi ne duplicate SIM issue karwa kar aapke bank account se transactions kar di.'
    ],
    preventionTips: [
      'Agar bina wajah network chala jaye to foran apni mobile company se dusre number se rabta karein.',
      'CNIC ki copy har jagah share na karein aur us par purpose zaroor likhein.'
    ],
    reportingGuidance: 'Foran apni mobile company ko call karein, duplicate SIM block karwayein, bank ko inform karein.'
  },
  {
    id: 'fake-banking-calls',
    title: 'Fake Banking Calls (The Impersonation Blueprint)',
    category: 'Financial Fraud',
    iconName: 'file-text',
    overview: `
      <div class="article-rich-content">
        <h3>1. SBP Rules and Bank Impersonation Trends</h3>
        <p>Commercial banking scams are highly organized operations in Pakistan. Scammers often pose as State Bank of Pakistan (SBP) audit officers, security chiefs of banks, or military investigators. They operate with professional call center setups and scripts.</p>
        <p>The State Bank of Pakistan has strict mandates stating that commercial banks must never ask for customer secure credentials on any phone call, email, or digital medium.</p>
      </div>
    `,
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
      'Call cut karke card ke piche likhe official helpline number par khud call karein.'
    ],
    reportingGuidance: 'Bank ki official helpline par complaint karein aur scam call ki details NCCIA ke official portal ya helpline 1799 par report karein.'
  },

  {
    id: 'facebook-scams',
    title: 'Facebook Fake Profiles & Marketplace Scams',
    category: 'Social Media',
    iconName: 'facebook',
    overview: `
      <div class="article-rich-content">
        <h3>1. Facebook Fraud Landscape in Pakistan</h3>
        <p>Facebook Marketplace and profile cloning are massive avenues for digital fraud in Pakistan. Criminals deploy identity duplication to scam family networks, or bait buyers on Marketplace using dirt-cheap electronics or automobile listings.</p>
        <p>Because Facebook registration has minimal security checks, tracking malicious profiles requires active digital hygiene and platform-level reporting.</p>
      </div>
    `,
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
    reportingGuidance: 'Fake profile ko Facebook par "Report Profile" karein aur apne friends ko bhi warn karein.'
  },

  {
    id: 'instagram-scams',
    title: 'Instagram Giveaway & High-Yield Investment Scams',
    category: 'Social Media',
    iconName: 'instagram',
    overview: `
      <div class="article-rich-content">
        <h3>1. The Evolution of Instagram Fraud</h3>
        <p>Instagram is heavily populated by Pakistan's youth, making it a lucrative platform for cybercriminals. Scammers deploy fake influencer giveaway schemes, paid collaboration lures, and fraudulent Forex/Crypto portfolio plans.</p>
        <p>They use paid bots to inflate fake page follower counts to build immediate trust.</p>
      </div>
    `,
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
      'Unknown links aur giveaway forms open na karein.'
    ],
    reportingGuidance: 'Fake account ya post ko Instagram par report karein aur agar financial fraud hua ho to NCCIA ko complaint submit karein.'
  },

  {
    id: 'tiktok-scams',
    title: 'TikTok Earning Hacks & Fake Cash Apps',
    category: 'Social Media',
    iconName: 'video',
    overview: `
      <div class="article-rich-content">
        <h3>1. Deep Dive: TikTok Fraud Mechanics in Pakistan</h3>
        <p>TikTok is one of the most downloaded apps in Pakistan, creating a wide user base for scammers. Fraudsters upload highly engaging, short videos containing modified audio and cloned voices showing fake online income streams.</p>
        <p>These videos lead unsuspecting users to download malware-ridden APK files outside official app stores, or to pay deposit money on scam sites.</p>
      </div>
    `,
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
      'Unknown apps aur links install na karein.'
    ],
    reportingGuidance: 'Fake video ya account ko TikTok par report karein aur agar paisay lose hue hon to NCCIA ko complaint karein.'
  },

  {
    id: 'email-security',
    title: 'Email Phishing & Corporate BEC (Business Email Compromise)',
    category: 'Corporate Protection',
    iconName: 'server',
    overview: `
      <div class="article-rich-content">
        <h3>1. Deep Technical Explanation of BEC Scams</h3>
        <p>Business Email Compromise (BEC) targets companies, retailers, and corporate entities in Pakistan. Scammers spoof senior executive emails or vendor domains to redirect high-value commercial invoice payments to fraudulent banking accounts.</p>
        <p>Attackers perform long-term surveillance, reading corporate email records before executing the invoice manipulation request.</p>
      </div>
    `,
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
      'Unknown attachments aur links open na karein.'
    ],
    reportingGuidance: 'IT team ko foran inform karein, bank ko notify karein aur zarurat par NCCIA ko report submit karein.'
  },

  {
    id: 'fake-websites',
    title: 'Fake Shopping & Spoofed Government Portals',
    category: 'Digital Integrity',
    iconName: 'globe',
    overview: `
      <div class="article-rich-content">
        <h3>1. The Proliferation of Spoofed Sites in Pakistan</h3>
        <p>Fake or clone websites are designed to capture customer credentials or secure payment processing data. Scammers in Pakistan frequently copy popular brands (Khaadi, J., Daraz, Alkaram) or government service engines (NADRA CNIC verification, FBR TAX updates, Ehsaas program).</p>
        <p>These portals utilize high-end UI graphics to make users believe they are interacting with official authorities.</p>
      </div>
    `,
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
      'Official apps ya websites hi use karein.'
    ],
    reportingGuidance: 'Website ko PTA aur NCCIA ke paas report karein aur payment ki ho to bank ko foran inform karein.'
  },

  {
    id: 'qr-code-scams',
    title: 'QR Code Payment Scams & Unauthorized Authorizations',
    category: 'Digital Integrity',
    iconName: 'scan',
    overview: `
      <div class="article-rich-content">
        <h3>1. Technical Overview of QR Fraud</h3>
        <p>Quick Response (QR) codes simplify digital payments by encoding bank routing codes. However, QR codes cannot be visually inspected, meaning users have no way of knowing what URL or payment transaction request is embedded inside a code.</p>
        <p>In Pakistan, scams surrounding QR codes have risen inside local retail shops, transport, and merchant networks.</p>
      </div>
    `,
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
      'Scan se pehle recipient aur amount verify karein.'
    ],
    reportingGuidance: 'Foran bank ya wallet helpline se rabta karein aur fraud ko NCCIA me report karein.'
  },

  {
    id: 'identity-theft',
    title: 'Identity Theft & CNIC Misuse (Legal & Financial Risks)',
    category: 'Digital Integrity',
    iconName: 'fingerprint',
    overview: `
      <div class="article-rich-content">
        <h3>1. Deep Explanation of Identity Theft in Pakistan</h3>
        <p>Identity theft occurs when an individual acquires and misuses your personal details—primarily your CNIC number, biometric details, or parentage—without permission. In Pakistan, identity theft can lead to illegal SIM registration or fraudulent bank loans.</p>
        <p>Since government networks rely on CNIC numbers as a baseline index, keeping your identity records secure is a critical priority.</p>
      </div>
    `,
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
      'Har photocopy par purpose aur date zaroor likhein.'
    ],
    reportingGuidance: 'Foran NADRA, mobile company aur NCCIA ko report karein.'
  },

  {
    id: 'online-shopping-scams',
    title: 'Online Shopping Scams & Fraudulent COD Orders',
    category: 'Financial Fraud',
    iconName: 'shopping-bag',
    overview: `
      <div class="article-rich-content">
        <h3>1. The Landscape of Online Retail Scams</h3>
        <p>E-commerce in Pakistan has grown immensely, but the rise of fraudulent Instagram stores, fake TikTok marketplaces, and scam Facebook pages has created major issues for buyers. These scams operate primarily via advance bank transfers or fraudulent Cash-on-Delivery (COD) schemes.</p>
        <p>Attackers exploit the lack of direct physical inspection options to deliver counterfeit goods, stones, or garbage to buyers.</p>
      </div>
    `,
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
      'Reviews aur page history check karein.'
    ],
    reportingGuidance: 'Bank ko payment report karein aur NCCIA ko scam details submit karein.'
  },

  {
    id: 'loan-app-extortion',
    title: 'Fake Loan Apps, Harassment, and Cyber Extortion',
    category: 'Financial Fraud',
    iconName: 'landmark',
    overview: `
      <div class="article-rich-content">
        <h3>1. Deep Technical Breakdown of Loan App Exploits</h3>
        <p>Fake digital loan applications target desperate individuals in Pakistan under the pretense of "instant easy loans with 0% interest." These apps are built with hidden spy-payload capabilities designed to access your handset's private directories.</p>
        <p>Once installed, these apps clone your entire contacts list, photo gallery, and personal SMS threads, transferring them directly to secure offshore hacker databases.</p>
      </div>
    `,
    warningSigns: [
      'Loan approve karne se pehle Contacts, Gallery, SMS aur Location ki permission mangna',
      '7 ya 14 din me loan wapas karne ka pressure aur bohat zyada hidden charges',
      'Payment late hote hi family aur friends ko abusive messages bhejna'
    ],
    examples: [
      'Ek user Rs. 10,000 ka instant loan leta hai. Sirf ek hafte baad Rs. 25,000 demand kiye jate hain. Payment na karne par uske contacts ko edited photos aur abusive messages bheje jate hain.'
    ],
    preventionTips: [
      'Unknown loan apps install na karein.',
      'Sirf licensed aur regulated financial institutions se loan hasil karein.'
    ],
    reportingGuidance: 'Evidence, screenshots aur payment details ke sath NCCIA portal par complaint register karein.'
  },

  {
    id: 'hajj-umrah-scams',
    title: 'Fake Hajj & Umrah Tour Package Scams',
    category: 'Travel Scam',
    iconName: 'milestone',
    overview: `
      <div class="article-rich-content">
        <h3>1. Deep Dive: Hajj & Umrah Scams in Pakistan</h3>
        <p>Hajj and Umrah travel fraud exploits religious aspirations in Pakistan. Scammers register fake travel companies or design spoofed websites containing cheap, all-inclusive flight and luxury hotel packages. After collecting substantial cash deposits, they vanish or provide fake travel documents.</p>
        <p>Tracking authentic travel licenses is crucial to avoiding these high-loss scams.</p>
      </div>
    `,
    warningSigns: [
      'Market se bohat sasta Hajj ya Umrah package offer karna',
      'Office visit ke baghair full advance payment demand karna',
      'Official receipt, visa ya booking confirmation na dena'
    ],
    examples: [
      'Ek family Rs. 600,000 advance payment karti hai. Airport pohanchne par pata chalta hai ke visa aur air tickets fake hain aur travel agent ka number bhi band hai.'
    ],
    preventionTips: [
      'Sirf registered aur licensed travel agency se booking karein.',
      'Office physically visit karke contract aur receipts hasil karein.'
    ],
    reportingGuidance: 'Travel agency ki complaint NCCIA aur relevant government authorities ke paas register karein.'
  },

  {
    id: 'academic-writing-scams',
    title: 'Typing, Captcha, & Assignment Writing Scams',
    category: 'Online Earning',
    iconName: 'book-open',
    overview: `
      <div class="article-rich-content">
        <h3>1. The Proliferation of Student-Targeted Scams</h3>
        <p>Scammers heavily target young students in Pakistan by advertising easy, non-technical jobs like PDF-to-Word typing, assignment writing, or captcha entry. These schemes lure students who want to earn extra money to pay their university fees.</p>
        <p>In reality, they use these jobs as a trap to extract "registration, training, or software activation fees" from the students.</p>
      </div>
    `,
    warningSigns: [
      'Registration fee ya security deposit demand karna',
      'Simple typing ke badle bohat zyada salary offer karna',
      'Company ka office ya official website na hona'
    ],
    examples: [
      'Ek student Rs. 3,000 registration fee Easypaisa se bhejti hai. Payment ke baad recruiter uska number block kar deta hai.'
    ],
    preventionTips: [
      'Koi bhi genuine company job ke liye registration fee nahi leti.',
      'Company ki website aur reviews verify karein.'
    ],
    reportingGuidance: 'Fake job post ko Facebook ya WhatsApp par report karein aur NCCIA portal par complaint submit karein.'
  },

  /* =========================================================================
     20 NEW PAKISTAN-FOCUSED CYBERSECURITY ARTICLES ADDED BELOW
     ========================================================================= */

  {
    id: 'public-wifi-hazards',
    title: 'Public Wi-Fi Hazards (Data Snooping Aur MITM Attacks)',
    category: 'Urgent Threats',
    iconName: 'wifi',
    overview: `
      <div class="article-rich-content">
        <h3>1. Deep Technical Explanation of Wi-Fi Snooping</h3>
        <p>Pakistan me Railway Stations, airports, shopping malls, aur local cafes me free public Wi-Fi access bohat popular hai. Lekin public Wi-Fi networks major security protocols use nahi karte, jis ki wajah se attackers "Man-In-The-Middle" (MITM) attacks execute karte hain.</p>
        <p>Jab aap unencrypted public hotspot se connect hote hain, toh attacker aap ke device aur router ke beech flow hone wale poore web-traffic (credentials, cookies, transaction details) ko packet sniffers ke zariye read kar sakta hai.</p>

        <h3>2. Step-by-Step Anatomy of a Wi-Fi Hack</h3>
        <ol>
          <li><strong>Step 1: The Rogue Access Point (Evil Twin):</strong> Attacker café me betha ek portable hotspot on karta hai jis ka naam exactly original shop jesa hota hai (e.g., <em>"Chaaye_Khana_FreeWiFi"</em>).</li>
          <li><strong>Step 2: Connection Trap:</strong> User cheap free internet ke lalach me is malicious twin hotspot se connect ho jata hai.</li>
          <li><strong>Step 3: Traffic Redirection:</strong> Router settings manipulate kar ke attacker aap ki bank requests ko aam bank site se clone banking page par route karta hai.</li>
          <li><strong>Step 4: Session hijacking:</strong> User login details likhta hai, attacker passwords and session cookies intercept kar ke account compromise kar leta hai.</li>
        </ol>
      </div>
    `,
    warningSigns: [
      'Wi-Fi connect karte hi NADRA details or bank login details maangna.',
      'Website open karne par browser me security certificate/SSL warnings display hona.',
      'Internet speed achanak extreme drop hona ya connection bar bar fail hona.'
    ],
    examples: [
      'User airport ke free Wi-Fi par bank app login karta hai. Kuch ghante baad bank account se duplicate transaction notification receive hoti hai kyunke transaction request intercept kar li gayi thi.'
    ],
    preventionTips: [
      'Public locations par free hotspots use karne se mukammal gurez karein.',
      'Agar connection zaroori ho, toh safe aur paid commercial VPN protection lazmi use karein.',
      'Device security settings me "Connect Automatically to Open Networks" disable rakhein.'
    ],
    reportingGuidance: 'Snooping suspect hone par PTA or relevant cybersecurity wing ko hotspot location details report karein.'
  },

  {
    id: 'pubg-gaming-scams',
    title: 'Online Gaming Scams (PUBG/FreeFire UC & Diamonds Theft)',
    category: 'Social Media',
    iconName: 'gamepad-2',
    overview: `
      <div class="article-rich-content">
        <h3>1. Technical Overview of Online Gaming Loot</h3>
        <p>Pakistani teenagers aur students PUBG, FreeFire, aur local sports simulation games heavily play karte hain. Attackers in minor players ko target karte hain by offering free UC (Unknown Cash), free weapon skins, or gaming diamonds bypass codes.</p>
        <p>Yeh phishing ya high-risk mobile application injection models ke zariye work karta hai jo social accounts bypass karne me use hote hain.</p>

        <h3>2. Step-by-Step Anatomy of Gaming Theft</h3>
        <ol>
          <li><strong>Step 1: TikTok Advertising:</strong> Spammed videos show fake accounts generating 1,000,000 free UC bypass systems.</li>
          <li><strong>Step 2: Account Login Trap:</strong> Gamer click karta hai web page link par jo demands karta hai: <em>"Login via Facebook or Google to Claim Rewards"</em>.</li>
          <li><strong>Step 3: Password Harvesting:</strong> Jese hi player social credentials likhta hai, hacker background me account details collect kar ke social accounts permanently hack kar leta hai.</li>
          <li><strong>Step 4: Financial Theft:</strong> Accounts compromised hone par connected payments or bank options se mazeed charges trigger karte hain.</li>
        </ol>
      </div>
    `,
    warningSigns: [
      'Ghair-khooni links or unverified portals offering unlimited Free gaming assets.',
      'Official game publisher portals ke ilawa direct Facebook ya Google account password mangna.',
      'WhatsApp par direct verification/OTP codes requests.'
    ],
    examples: [
      'Student ne link: "free-pubg-skins.xyz" par reward pane ke liye login kiya. Do din baad uska Facebook account block ho gaya aur unke mobile wallet se payments use ho gayin.'
    ],
    preventionTips: [
      'Har third-party login bypass block karein aur sirf official game apps use karein.',
      'Free products offers links ignore karein; official apps me payment options strict rakhein.'
    ],
    reportingGuidance: 'Fraud gaming servers reporting PTA and FIA cyber cells ko capture details ke sath deliver karein.'
  },

  {
    id: 'crypto-currency-traps',
    title: 'Crypto Investment Traps & Fake Wallet Scams (Binance Bypass)',
    category: 'Financial Fraud',
    iconName: 'coins',
    overview: `
      <div class="article-rich-content">
        <h3>1. Understanding Crypto Regulatory Landscape & Fraud</h3>
        <p>Pakistan me State Bank ne cryptocurrency trading par restrictions lagaye hain, jis ki wajah se log non-banking and grey-channels use karte hain. Scammers fake Binance agents ban kar signal subscription groups chalaate hain ya fake hardware/software wallet apps download karwaate hain.</p>
        <p>In transactions ko track karna globally difficult hai, jis ki wajah se Pakistan me log millions lose kar chuke hain.</p>

        <h3>2. Step-by-Step Anatomy of Crypto Fraud</h3>
        <ol>
          <li><strong>Step 1: Telegram Channels Setup:</strong> Scammers VIP channels generate karte hain displaying 500% daily gains indicators.</li>
          <li><strong>Step 2: Token purchase demand:</strong> User se cash local bank or Easypaisa transfer karwa kar unhe fake platform tokens sell kiye jaate hain.</li>
          <li><strong>Step 3: Platform Blockout:</strong> Jab user withdrawals trigger karta hai, platform block ho jata hai ya server error display karta hai.</li>
        </ol>
      </div>
    `,
    warningSigns: [
      '100% Guaranteed profit on Crypto, Bitcoin, USDT margin trading.',
      'Local transactions bank to personal accounts outside verified P2P escrow systems.',
      'Seed phrases (12-word security recovery codes) mangna.'
    ],
    examples: [
      'Mardan ke user ne high profit return bot me $500 transfer kiye. User dashboard me massive profits show ho rahe the par withdraw option click karne par system freeze ho gaya aur system admins contact band kar gaye.'
    ],
    preventionTips: [
      'Apne blockchain wallets ki 12-word Seed Phrase kabhi kisi se share na karein.',
      'Non-escrow grey-market deals bypass karein aur state policies follow karein.'
    ],
    reportingGuidance: 'Crypto platform scams details state blocklists aur FIA cyber systems par send karein.'
  },

  {
    id: 'social-media-blackmail',
    title: 'Sextortion & Video Blackmail (Cyber Harassment)',
    category: 'Social Media',
    iconName: 'user-x',
    overview: `
      <div class="article-rich-content">
        <h3>1. Psychological & Social Breakdown of Harassment Scams</h3>
        <p>Sextortion ya video blackmail Pakistan me extremely sensitive cyber threat ban chuka hai. Is me victim ki personal photos, edited videos, ya deepfakes use kar ke cyber extortionists blackmail karte hain to extract huge cash payouts.</p>
        <p>Attackers Pakistan ki cultural aur family respect boundaries ko tools bana kar panic and immense social pressure deploy karte hain.</p>

        <h3>2. Step-by-Step Anatomy of a Video Blackmail scam</h3>
        <ol>
          <li><strong>Step 1: Friend Request Trap:</strong> Accidental video calls start hoti hain from glamorous unknown female profiles on Instagram or WhatsApp.</li>
          <li><strong>Step 2: Video Recording:</strong> Call ke dauran victim ka reaction ya screen feed trace and record kiya jata hai. Deepfake systems modify physical context in dynamic templates.</li>
          <li><strong>Step 3: Threats Deployment:</strong> Target family member list (scraped from user friends list) share ki jati hai, demanding urgent money transfers via digital wallets.</li>
        </ol>
      </div>
    `,
    warningSigns: [
      'Unknown profiles on Instagram asking for quick audio/video chat.',
      'App permissions demanding raw camera and call logging approvals.',
      'Extortion demands threatening immediate release of personal edits on social platforms.'
    ],
    examples: [
      'Young victim ko WhatsApp blank screen calls aatin hain jo screen record kar ke deepfake context me use ki jati hain. Attacker Rs. 50,000 demand karta hai.'
    ],
    preventionTips: [
      'Unknown audio and video call requests on social applications ignore karein.',
      'Social profiles privacy hamesha Friends-Only locked setup par switch rakhein.',
      'Dhamki milne par darna band karein; absolute silent focus report methods adopt karein.'
    ],
    reportingGuidance: 'Don\'t pay! Safe details and screenshots NCCIA portal (complaint.nccia.gov.pk) ya helpline 1799 par report karein.'
  },

  {
    id: 'fake-visa-scams',
    title: 'Overseas Employment & Fake Visa Lures',
    category: 'Travel Scam',
    iconName: 'plane-takeoff',
    overview: `
      <div class="article-rich-content">
        <h3>1. Deep Dive into Visa Agency Frauds</h3>
        <p>Pakistani citizens high-earnings ke liye Canada, Gulf States, aur European Union migrate hone ki koshish karte hain. Fake, unregistered digital agencies are setting up massive social media marketing networks displaying false visas and work permit approvals.</p>
        <p>Aam log zameen ya assets sell kar ke millions are depositing into personal bank accounts of fake agents.</p>
      </div>
    `,
    warningSigns: [
      'Offering guaranteed work visa/permits without any formal consulate interview steps.',
      'Demanding 100% processing payments in personal bank accounts instead of registered corporate escrow wallets.',
      'Official overseas government visa seals appearing blurry or poorly formatted.'
    ],
    examples: [
      'Gujranwala ke resident ne agency ko Rs. 15 Lakh payment ki for a European Work Permit. Embassy verification par visa sticker fake nikla.'
    ],
    preventionTips: [
      'Bureau of Emigration & Overseas Employment (BEOE) portal par agency licensing status check karein.',
      'Visas and documentation verify directly from embassy portals.'
    ],
    reportingGuidance: 'Fake operators details NCCIA ko notify karein.'
  },

  {
    id: 'credit-card-skimming',
    title: 'ATM Skimming & POS Terminal Manipulation',
    category: 'Financial Fraud',
    iconName: 'credit-card',
    overview: `
      <div class="article-rich-content">
        <h3>1. Technical Mechanics of Card Skimming</h3>
        <p>Card skimming physical hack mechanism hai jahan attackers ATM card entry slots or retail POS machines par invisible readers install karte hain. Jab consumer card check karta hai, internal magnetic tape raw records are duplicated instantly.</p>
        <p>Attackers duplicate custom fake plastic cards and extract cash from global non-EMV transaction endpoints.</p>
      </div>
    `,
    warningSigns: [
      'ATM card entry slot feeling loose, unusually bulky, or structurally altered.',
      'A minor pinhole camera installed right above the physical keypad to record inputs.',
      'Transactions receiving delayed notification alerts.'
    ],
    examples: [
      'ATM user card insert karta hai. Two days later, multiple cash withdrawals trace back from another city branch while the physical card is still with the user.'
    ],
    preventionTips: [
      'ATM Keypad inputs type karte waqt doosre haath se buttons hamesha cover rakhein.',
      'In-branch secure ATMs use karein rather than dark isolated roadside kiosks.',
      'Contactless NFC transactions prefer karein where possible.'
    ],
    reportingGuidance: 'Foran card block list call karein and register report with bank helpline.'
  },

  {
    id: 'ransomware-attacks',
    title: 'Ransomware Attacks (Pakistani SMBs & Local Companies)',
    category: 'Corporate Protection',
    iconName: 'terminal',
    overview: `
      <div class="article-rich-content">
        <h3>1. Understanding Ransomware Threats to Companies</h3>
        <p>Ransomware corporate systems ko targeted encrypt karne wale tools hain. Pakistan ke small-medium businesses (SMBs) un-licensed windows operating systems, free software, aur non-secure routers use karte hain, jis ki wajah se target ransomware vulnerability levels extreme hote hain.</p>
        <p>Scammers complete database locked formats generate kar ke Bitcoin or Crypto payments demand karte hain.</p>
      </div>
    `,
    warningSigns: [
      'Company local file extensions changing suddenly to `.locked`, `.crypto`, `.lock`.',
      'Desktop wallpaper displays extreme threats notes demanding cash.',
      'System files showing extreme speed drop index.'
    ],
    examples: [
      'Local pharmaceutical factory production systems frozen due to a rogue employee downloading cracked software. Attacker demands $10,000 in Crypto.'
    ],
    preventionTips: [
      'Corporate server regular air-gapped cold backups design karein.',
      'Employee systems par local administrator privileges limit rakhein.'
    ],
    reportingGuidance: 'IT security groups and FIA NCIC specialists block alerts file report update generate karein.'
  },

  {
    id: 'domain-squatting',
    title: 'Domain Squatting & Brand Impersonation',
    category: 'Digital Integrity',
    iconName: 'search-code',
    overview: `
      <div class="article-rich-content">
        <h3>1. Typosquatting and Digital Brand Hijacking</h3>
        <p>Typosquatting me attackers popular websites ke names ki spelling mistakes register karwate hain (e.g., <em>"darazz.pk"</em> or <em>"nara.gov.pk"</em>). Users minor spelling typing slip-ups par fake portals land karte hain.</p>
        <p>These cloned setups target direct database extraction, stealing user logins and session access cards.</p>
      </div>
    `,
    warningSigns: [
      'Website interface matching exactly but URL spelling having subtle mistakes.',
      'SSL browser lock icon displaying invalid domain owners info.'
    ],
    examples: [
      'User typed: `hblldigital.com` by mistake and ended up on a high-end banking login replica that logged his bank details.'
    ],
    preventionTips: [
      'Hamesha URLs clear read kar ke verify karein, search shortcuts verify links utilize karein.',
      'Official bookmarks use karein for frequently visited financial resources.'
    ],
    reportingGuidance: 'Report suspicious misspelled portals to PTA web blocking engine.'
  },

  {
    id: 'fake-charity-scams',
    title: 'Fake Charities & Ramzan Donation Fraud',
    category: 'Financial Fraud',
    iconName: 'heart-handshake',
    overview: `
      <div class="article-rich-content">
        <h3>1. Deep Dive into Charity Exploitation</h3>
        <p>Pakistani community global index me charitable donations me extremely high tier par hai, khaas tor par Ramzan ke mahine me. Cybercriminals fake websites ya fraudulent social media flyers create karte hain using names of reputable networks (e.g., Shaukat Khanum clone, Edhi Clone, Saylani Clone).</p>
        <p>User sentiments manipulate kar ke, donations are collected in un-registered personal mobile wallets.</p>
      </div>
    `,
    warningSigns: [
      'Charitable organizations calling and asking to transfer Zakat directly to unknown personal mobile wallet numbers.',
      'Web sites displaying blurry photos of patients and lacking verified registration audits.',
      'Excessive psychological pressure pushing for instant transfers.'
    ],
    examples: [
      'Donor transfers Rs. 20,000 Zakat to a flyer on WhatsApp claiming to represent a regional cancer hospital. It was later revealed that the account belonged to a private individual.'
    ],
    preventionTips: [
      'Donations direct official organization websites or secure designated bank account pathways par send karein.',
      'Physical cash transactions verify collect slips from authentic distribution desks.'
    ],
    reportingGuidance: 'Fake charity flyers are reported to cyber crime cells.'
  },

  {
    id: 'government-scheme-frauds',
    title: 'Fake Government Schemes (Tractor, Green Taxi, and Youth Loans)',
    category: 'Financial Fraud',
    iconName: 'milestone',
    overview: `
      <div class="article-rich-content">
        <h3>1. Exploitation of State-Sponsored Subsidies</h3>
        <p>Pakistan government regularly launches micro-loans or agricultural subsidies (Tractor schemes, Youth loan systems, laptop schemes). Scammers duplicate these systems, launching fake websites and messaging systems to collect "security processing charges" or processing fees from poor applicants.</p>
      </div>
    `,
    warningSigns: [
      'Paying advance registration/processing fees for state aid grants.',
      'SMS alerts about scheme selections coming from non-government shortcodes (anything other than official gov platforms).'
    ],
    examples: [
      'Farmer transfers Rs. 15,000 for a subsidized solar tube well scheme advertised on Facebook. The agent switched off his phone after receiving the money.'
    ],
    preventionTips: [
      'Official government portals hamesha <code>.gov.pk</code> extensions use karte hain.',
      'Never pay any advanced security deposits for social assistance or loan approvals.'
    ],
    reportingGuidance: 'Submit details of fraud systems to PM portal or NCCIA complaint portal.'
  },

  {
    id: 'malicious-mobile-keyboard-loggers',
    title: 'Malicious Mobile Keyboards & Input Loggers',
    category: 'Urgent Threats',
    iconName: 'keyboard',
    overview: `
      <div class="article-rich-content">
        <h3>1. Technical mechanics of Keyloggers</h3>
        <p>Third-party custom mobile keyboard apps (like cracked Urdu/aesthetic styling keyboards) downloaded outside official app stores often contain background keyloggers. When you type passwords, banking PINs, or chat messages, they log inputs and send them to hacker platforms.</p>
      </div>
    `,
    warningSigns: [
      'Keyboards app demanding access to your complete storage, camera, contacts list, and call logs.',
      'Frequent popups saying the application is accessing background system frameworks.'
    ],
    examples: [
      'User installs an unverified, cracked stylized keyboard app. A week later, multiple social media handles get hacked because the logged credentials were leaked.'
    ],
    preventionTips: [
      'Only use default system keyboards (Gboard, Samsung Keyboard, iOS Default).',
      'Disable full access permissions inside custom keyboard settings.'
    ],
    reportingGuidance: 'Delete unverified applications and perform a complete phone factory reset.'
  },

  {
    id: 'courier-shipping-sms-scams',
    title: 'Courier & Shipping SMS Phishing (Customs Duty Scams)',
    category: 'Urgent Threats',
    iconName: 'package',
    overview: `
      <div class="article-rich-content">
        <h3>1. Shipping Phishing (Smishing) Mechanics</h3>
        <p>Users receive SMS notifications pretending to be Pakistan Post, DHL, or TCS, claiming: <em>"Your package address is incorrect. Update details and pay a small custom clearance fee of Rs. 210 to reschedule delivery"</em>. The link leads to a payment form that steals card details.</p>
      </div>
    `,
    warningSigns: [
      'SMS with unverified web links from ordinary mobile numbers claiming to represent logistics companies.',
      'Small, unusual cash demand required to release cheap parcels.'
    ],
    examples: [
      'User clicks on lookalike Pakistan Post link, pays Rs. 210 custom charges using credit card. Scammer steals details and makes an unauthorized online purchase of Rs. 45,000.'
    ],
    preventionTips: [
      'Never click unverified links in parcel notification SMS.',
      'Confirm parcel status by manually visiting official tracking sites using tracking IDs.'
    ],
    reportingGuidance: 'Report fraud numbers and SMS strings to PTA via shortcode 9000.'
  },

  {
    id: 'online-dating-romance-scams',
    title: 'Online Romance Scams & Honey Traps',
    category: 'Social Media',
    iconName: 'heart',
    overview: `
      <div class="article-rich-content">
        <h3>1. Anatomy of Cyber-Romance Scams</h3>
        <p>Scammers set up fake social media or dating profiles to build emotional connections with targets. Over time, they create fake emergencies (medical situations, customs blockages on expensive gifts) to request massive money transfers.</p>
      </div>
    `,
    warningSigns: [
      'Unusually attractive profiles refusing to perform live video calls.',
      'Demanding financial help or gift processing fees shortly after initiating contact.'
    ],
    examples: [
      'Target transfers Rs. 150,000 to clear a "custom duty charge" for a gift package supposedly sent by an overseas online partner. The partner disappeared after the payment.'
    ],
    preventionTips: [
      'Never send money to people you have never met physically.',
      'Perform reverse-image searches on profile pictures to check for duplicates.'
    ],
    reportingGuidance: 'Block communication and file fraud complaints with NCIC/FIA.'
  },

  {
    id: 'sim-cloning-unregistered-sims',
    title: 'Stolen CNICs & Unregistered Biometric SIM Cards',
    category: 'Digital Integrity',
    iconName: 'fingerprint',
    overview: `
      <div class="article-rich-content">
        <h3>1. Misuse of Identity in Mobile Networks</h3>
        <p>Fraudulent retailers use silicon fingerprint models or mock machines to activate mobile SIMs using biometric records of unsuspecting rural citizens. These unregistered SIMs are sold in black markets for criminal operations.</p>
      </div>
    `,
    warningSigns: [
      'Receiving verification SMS for mobile operations you never initiated.',
      'More numbers appearing on your national identity card SIM check portal than you actually own.'
    ],
    examples: [
      'User checks `cnic.sims.pk` and finds 5 active Zong SIMs registered in their name, whereas they only purchased one.'
    ],
    preventionTips: [
      'Always purchase and activate SIMs only from verified, official customer service centers.',
      'Check active SIM limits regularly via PTA systems.'
    ],
    reportingGuidance: 'Visit cellular operator outlets to block unauthorized numbers immediately.'
  },

  {
    id: 'spyware-android-control',
    title: 'Spyware, Stalkerware, & Remote Access Trojans (RATs)',
    category: 'Urgent Threats',
    iconName: 'eye-off',
    overview: `
      <div class="article-rich-content">
        <h3>1. Threat Profile of Phone Spyware</h3>
        <p>Stalkerware or spy apps (like Spyk, Cocospy) can run silently in the background on your device. These apps log private GPS locations, read chat screenshots, record microphone inputs, and send the data to remote monitoring systems.</p>
      </div>
    `,
    warningSigns: [
      'Device battery draining extremely fast or handset running hot even when idle.',
      'Random settings modifications (like "Unknown Sources" installations enabled automatically).'
    ],
    examples: [
      'User notices suspicious background data consumption. Further inspection reveals an unverified, hidden application logging microphone logs.'
    ],
    preventionTips: [
      'Set strong lock passwords and never leave devices unattended with strangers.',
      'Scan apps list regularly for unidentified packages.'
    ],
    reportingGuidance: 'Perform factory reset, install authentic antivirus, and check device safety logs.'
  },

  {
    id: 'dark-web-leak-checks',
    title: 'Dark Web NADRA Data Leaks & Telecom Breach Dumps',
    category: 'Corporate Protection',
    iconName: 'database',
    overview: `
      <div class="article-rich-content">
        <h3>1. Consequences of Public Database Leaks</h3>
        <p>Cybercriminals buy leaked databases containing Pakistani CNICs, mobile numbers, and parentage records from Dark Web forums (like BreachForums). They use this information to bypass bank security systems and build credible phishing scripts.</p>
      </div>
    `,
    warningSigns: [
      'Scam callers knowing exact details like your home address, CNIC number, and mother\'s maiden name.'
    ],
    examples: [
      'A scammer calls, citing the target\'s exact CNIC and date of birth, claiming to be an official bank agent, which tricks the user into sharing their OTP.'
    ],
    preventionTips: [
      'Never trust a caller simply because they know some of your personal details.',
      'Use multifactor authentication options that do not rely on public credentials.'
    ],
    reportingGuidance: 'Report database leaks to national cyber safety watchdogs.'
  },

  {
    id: 'investment-ponzi-schemes',
    title: 'Investment Ponzi Schemes & Algorithmic Trading Frauds',
    category: 'Financial Fraud',
    iconName: 'line-chart',
    overview: `
      <div class="article-rich-content">
        <h3>1. Ponzi Operations in Digital Pakistan</h3>
        <p>Platforms like IDRA, meta-trading clones, or automated bot earning platforms promise high daily interest payouts. These are typical Ponzi schemes that pay older members using money collected from new recruits until the system collapses.</p>
      </div>
    `,
    warningSigns: [
      'Requiring members to recruit secondary users to unlock higher withdrawal tiers.',
      'No clear, verified business generation model outside direct membership fees.'
    ],
    examples: [
      'A user invests Rs. 50,000 on an app, but is locked out from withdrawing their money once the platform goes offline.'
    ],
    preventionTips: [
      'Only invest with SECP registered and audited asset management firms.',
      'Avoid high-yield digital schemes promising fixed payouts.'
    ],
    reportingGuidance: 'Submit Ponzi app records to SECP regulatory portals and FIA.'
  },

  {
    id: 'fake-medicines-medical-scams',
    title: 'Online Healthcare Frauds & Fake Doctors Platforms',
    category: 'Financial Fraud',
    iconName: 'stethoscope',
    overview: `
      <div class="article-rich-content">
        <h3>1. Online Health Frauds</h3>
        <p>Unverified digital platforms advertise fake weight-loss products, counterfeit medicines, or online consultations with fake doctors. They exploit medical desperation to extract money or sell hazardous chemical substances.</p>
      </div>
    `,
    warningSigns: [
      'Selling prescription medications without requiring authentic medical prescriptions.',
      'Unverified doctors lacking PMDC/PMC registration identifiers.'
    ],
    examples: [
      'User buys alternative arthritis medication online, resulting in severe health complications due to steroid adulteration.'
    ],
    preventionTips: [
      'Verify digital doctor licenses on official PMC portals before consultation.',
      'Only purchase medicines from verified, licensed online pharmacies.'
    ],
    reportingGuidance: 'Report counterfeit medical portals to DRAP (Drug Regulatory Authority of Pakistan).'
  },

  {
    id: 'property-real-estate-frauds',
    title: 'Digital Property Plots & Fake Registry File Scams',
    category: 'Financial Fraud',
    iconName: 'home',
    overview: `
      <div class="article-rich-content">
        <h3>1. Real Estate Cyber Frauds</h3>
        <p>Scammers advertise fake files, unapproved plots, or lookalike housing projects online. They display forged NOCs (No Objection Certificates) and fake development maps, taking booking amounts from overseas Pakistani investors.</p>
      </div>
    `,
    warningSigns: [
      'Unbelievably low rates for plots in premium sectors.',
      'Refusal to provide verified development authority approvals (e.g., LDA, CDA NOCs).'
    ],
    examples: [
      'Overseas buyer pays booking amount for a sector that did not exist on the approved map of the housing scheme.'
    ],
    preventionTips: [
      'Verify plot files and NOC status directly on the official development authority web directories.',
      'Never send money without conducting in-person inspections or hiring registered legal consultants.'
    ],
    reportingGuidance: 'File complaints with NAB and NCCIA.'
  },

  {
    id: 'browser-extension-hijackers',
    title: 'Browser Extension Hijackers & Session Token Stealers',
    category: 'Urgent Threats',
    iconName: 'chrome',
    overview: `
      <div class="article-rich-content">
        <h3>1. Technical Overview of Malicious Extensions</h3>
        <p>Cracked browser tools or malicious browser extensions capture active cookie files from active web sessions. This allows hackers to log into your Facebook, Google, or banking portals without needing your password or OTP.</p>
      </div>
    `,
    warningSigns: [
      'Extensions demanding full permission to "Read and change all your data on the websites you visit".',
      'Browser search engine redirecting to strange search portals automatically.'
    ],
    examples: [
      'User downloads a cracked PDF converter extension. The next day, unauthorized changes occur in their active social media accounts.'
    ],
    preventionTips: [
      'Only install verified browser extensions from official web stores.',
      'Regularly review active browser extensions and remove unused utilities.'
    ],
    reportingGuidance: 'Perform browser reset and clear active cookie logins.'
  },

  /* =========================================================================
     30 ADDITIONAL PAKISTAN-FOCUSED CYBERSECURITY ARTICLES ADDED BELOW
     ========================================================================= */

  {
    id: 'pc-spyware-cracked-tools',
    title: 'PC Spyware & Malicious Key Activators (Cracked Office Tools)',
    category: 'Corporate Protection',
    iconName: 'terminal',
    overview: `
      <div class="article-rich-content">
        <h3>1. Technical Threat of Cracked Keygen Tools</h3>
        <p>Pakistan me expensive software license fee (Windows, Office, Adobe Photoshop) avoid karne ke liye crack keygens aur activators widely use hote hain. Scammers keygen apps me trojan spywares pack kar dete hain jo user key logging aur credential storage targets execute karte hain.</p>
        <p>Yeh tools system firewall aur defense controls bypass kar dete hain, jis se corporate or local computer secure environments full exposure me chale jate hain.</p>
      </div>
    `,
    warningSigns: [
      'Security software/antivirus blocks the keygen or activator launcher as a severe threat.',
      'Software installation guidelines instructions demanding to turn off Windows Defender permanently.'
    ],
    examples: [
      'User installs KMSpico or dynamic crack files to activate Microsoft Office, resulting in all local passwords and crypto wallets being extracted and sent to automated hacker logs.'
    ],
    preventionTips: [
      'Avoid using cracked versions of commercial utilities completely.',
      'Use high-quality free open-source alternatives like LibreOffice, Google Docs, or GIMP.'
    ],
    reportingGuidance: 'Isolate compromised PCs from local office networks, run professional bootable antivirus cleans, and change critical credentials from a safe secondary device.'
  },

  {
    id: 'inactive-sim-hijacking',
    title: 'Inactive SIM Card Hijacking (Zong/Jazz Blocked Number Re-issuance)',
    category: 'Urgent Threats',
    iconName: 'smartphone',
    overview: `
      <div class="article-rich-content">
        <h3>1. Understanding Blocked Number Recovery Risks</h3>
        <p>According to PTA rules, if a mobile SIM remains inactive, non-recharged, or out of network for 180 days, telecom operators can re-issue it to the general public. Attackers monitor these numbers, buy the re-issued SIMs, and perform account takeover bypasses on associated digital services (Facebook, Easypaisa, WhatsApp, Gmail).</p>
      </div>
    `,
    warningSigns: [
      'Losing control of old online accounts linked to numbers you haven\'t used in months.',
      'Old friends reporting that "your old number" is active on WhatsApp with a stranger\'s profile picture.'
    ],
    examples: [
      'An old inactive Jazz SIM is purchased by a third-party, who then resets the associated legacy bank account or Facebook profile using simple SMS-based verification.'
    ],
    preventionTips: [
      'Always unlink inactive or discarded phone numbers from your active bank accounts, social media accounts, and digital wallets.',
      'Keep your critical security recovery SIM cards active by performing minor recharges periodically.'
    ],
    reportingGuidance: 'Contact your cellular operator and the linked platforms to block and unlink old account profiles immediately.'
  },

  {
    id: 'easypaisa-merchant-fraud',
    title: 'Easypaisa Cashpoint Merchant Fraud (Fake Transfer Requests)',
    category: 'Financial Fraud',
    iconName: 'wallet',
    overview: `
      <div class="article-rich-content">
        <h3>1. Retail Merchant Account Exploitations</h3>
        <p>Scammers target local retail Easypaisa agents or shopkeepers. Posing as official franchise supervisors or regional bank coordinators, they call the agent claiming an urgent "merchant system update" or "biometric patch installation" is required, tricks them into dialing specific USSD sequences (*786# menus) that transfer balances to scammer wallets.</p>
      </div>
    `,
    warningSigns: [
      'Unexpected calls demanding immediate agent balance transfers to "verify system channels".',
      'Receiving dynamic approval alerts on your merchant portal with high transaction amounts.'
    ],
    examples: [
      'A shopkeeper receives an urgent call from someone posing as an "Easypaisa Regional Manager", instructing him to dial a code to avoid store license blockage. He does so, losing Rs. 40,000 instantly.'
    ],
    preventionTips: [
      'Never dial balance-transfer codes or approve incoming wallet transfers under anyone\'s guidance over a telephone call.',
      'Always verify official circulars directly with your designated area sales representative in person.'
    ],
    reportingGuidance: 'Call your official distribution helpline, lock your merchant register, and submit the caller number to the parent telecom operator.'
  },

  {
    id: 'jazzcash-bvs-frauds',
    title: 'Biometric Verification Shop Scams (Duplicate Fingerprint Captures)',
    category: 'Urgent Threats',
    iconName: 'fingerprint',
    overview: `
      <div class="article-rich-content">
        <h3>1. Biometric Scanner Cloning Tactics</h3>
        <p>Unregistered local mobile vendors or third-party retailer booths capture and duplicate customer biometric fingerprint templates. By using silicon gel sheets, high-resolution cameras, or special physical scanners, they store fingerprint copies and use them to activate illegal SIMs or open fraudulent bank accounts without your knowledge.</p>
      </div>
    `,
    warningSigns: [
      'Retailer asking you to place your thumb on the scanner multiple times under the excuse of "network timeout" or "connection error".',
      'Using suspicious, unbranded, or greasy scanners connected to standard consumer laptops rather than dedicated point-of-sale machines.'
    ],
    examples: [
      'A customer visits a local mobile shop to verify their SIM, only to find out six months later that five unauthorized SIM cards are registered in their name and being used for illegal activities.'
    ],
    preventionTips: [
      'Only perform biometric verifications at official company-owned Customer Service Centers or highly verified, registered franchises.',
      'Insist on seeing the terminal confirmation screen to verify the exact transaction type being processed.'
    ],
    reportingGuidance: 'Check your active SIM limits regularly via `cnic.sims.pk`. Report biometric leaks to PTA and FIA NCIC.'
  },

  {
    id: 'unauthorized-ios-loan-apps',
    title: 'Unregulated iOS AppStore Loan Spyware Tools',
    category: 'Financial Fraud',
    iconName: 'landmark',
    overview: `
      <div class="article-rich-content">
        <h3>1. iOS Sandbox Exploitations by Fake Lenders</h3>
        <p>While Apple has strict sandbox rules, cybercriminals utilize alternative enterprise certificates or publish seemingly harmless calculator apps that silently change into predatory loan platforms post-approval. Once installed, they request contacts, photos, and iCloud sync access, blackmailing the user under severe repayment terms.</p>
      </div>
    `,
    warningSigns: [
      'Predatory financial services demanding raw photo storage, contacts, and calendar permissions before releasing micro-loans.',
      'Interest rates scaling exponentially shortly after installation, bypassing normal banking guidelines.'
    ],
    examples: [
      'An iOS user downloads a quick utility app, which transitions into an un-regulated lending platform, resulting in threats and harassment messages sent to their family contact list.'
    ],
    preventionTips: [
      'Only borrow funds from SECP-licensed, State Bank of Pakistan approved non-banking finance companies.',
      'Strictly deny photo and contact book access to unverified financial applications.'
    ],
    reportingGuidance: 'Submit an incident report directly to Apple Security and file extortion complaints with the NCCIA portal.'
  },

  {
    id: 'payoneer-verification-traps',
    title: 'Payoneer Freelancer Verification Phishing & Account Bans',
    category: 'Online Earning',
    iconName: 'briefcase',
    overview: `
      <div class="article-rich-content">
        <h3>1. Targeting Pakistan\'s Freelance Community</h3>
        <p>Pakistan is home to one of the world\'s largest freelancing communities, making them primary targets for international scammers. Attackers send spoofed emails mimicking Payoneer Support, claiming: <em>\'Account verification required due to regulatory changes. Submit secure card parameters or face a permanent ban\'</em>. The links lead to replica portals that steal account credentials and clear balances.</p>
      </div>
    `,
    warningSigns: [
      'Urgent emails requesting credentials coming from external public domains (e.g., `@gmail.com` or `@payoneer-secure-support.com` instead of the official `@payoneer.com`).',
      'Forms demanding your secure credit/debit card numbers, PINs, or CVV digits for "account validation".'
    ],
    examples: [
      'A software developer uploads their passport copy, password, and security answer on a lookalike Payoneer page, losing their entire monthly earnings to a malicious withdrawal.'
    ],
    preventionTips: [
      'Always log in to your Payoneer account manually by typing `www.payoneer.com` into your browser, never through links in emails.',
      'Enable Multi-Factor Authentication (MFA) via Google Authenticator or SMS codes.'
    ],
    reportingGuidance: 'Forward the phishing email to `abuse@payoneer.com` and secure your login parameters immediately.'
  },

  {
    id: 'upwork-scam-contracts',
    title: 'Upwork & Fiverr Fake Direct Client Orders (Telegram Redirections)',
    category: 'Online Earning',
    iconName: 'briefcase',
    overview: `
      <div class="article-rich-content">
        <h3>1. Freelancer Escrow Bypass Traps</h3>
        <p>Fraudsters post high-paying, simple jobs (like typing scanned PDF images) on Upwork or Fiverr to attract beginner freelancers. They quickly pressure the freelancer to move communication to Telegram or WhatsApp, bypassing platform protection, and then demand "registration, ID card clearance, or training fees" before assigning the work.</p>
      </div>
    `,
    warningSigns: [
      'Clients insisting on shifting communication to Telegram or WhatsApp before a formal contract is funded in escrow.',
      'Demanding advance payments for "registration keys", "software tools", or "verification certificates".'
    ],
    examples: [
      'A student completes a translation project on Telegram, only to be blocked after paying a Rs. 5,000 "withdrawal clearance fee" to receive their earned salary.'
    ],
    preventionTips: [
      'Never move communication or payments outside of Upwork\'s or Fiverr\'s official secure platforms.',
      'Understand that legitimate clients will never ask you to pay any money to work for them.'
    ],
    reportingGuidance: 'Flag the client profile and job posting inside the official freelance platform tools.'
  },

  {
    id: 'p2p-arbitrage-scams',
    title: 'P2P Arbitrage & Bank Account Freeze Cascades',
    category: 'Financial Fraud',
    iconName: 'coins',
    overview: `
      <div class="article-rich-content">
        <h3>1. P2P Payment Poisoning Dynamics</h3>
        <p>When selling digital assets via Binance or other P2P platforms, scammers pay you using compromised bank accounts or stolen wallets. The original victim reports the fraudulent transfer to their bank, which triggers a security chain reaction that freezes your bank account and all your hard-earned funds.</p>
      </div>
    `,
    warningSigns: [
      'P2P buyers insisting on making payments from third-party bank accounts that do not match their registered P2P profile name.',
      'Receiving transfers with weird, unexpected payment reference notes (like "cryptocurrency purchase" or "arbitrage trade").'
    ],
    examples: [
      'A freelancer receives a P2P bank transfer from a buyer. Two days later, their primary bank account is frozen by the FIA due to its association with a stolen funds trail.'
    ],
    preventionTips: [
      'Only accept payments from bank accounts whose owner name matches the buyer\'s verified platform name exactly.',
      'Decline and refund any payments that originate from unverified third-party bank accounts.'
    ],
    reportingGuidance: 'Keep detailed logs of P2P orders, chats, and screenshots. Submit these records to your bank\'s compliance division and the FIA.'
  },

  {
    id: 'whatsapp-group-takeover',
    title: 'WhatsApp Group Admin Takeover (Malicious Invite Links)',
    category: 'Social Media',
    iconName: 'message-square',
    overview: `
      <div class="article-rich-content">
        <h3>1. High-Priority Social Group Takeovers</h3>
        <p>Cybercriminals target highly active community, trading, or family WhatsApp groups. After joining via public invite links, they spam the group with malicious registration links or trick the group administrator into transferring group ownership, using the hijacked group to run cryptocurrency scams.</p>
      </div>
    `,
    warningSigns: [
      'Members sharing external redirect links asking admins to "click here to verify group safety".',
      'Receiving unexpected SMS codes containing WhatsApp security setup parameters.'
    ],
    examples: [
      'A local real-estate discussion group is hijacked after the main admin clicks a malicious verification link, allowing scammers to spam fake plots to 500 members.'
    ],
    preventionTips: [
      'Never click unverified links shared in chats, even if they appear to come from trusted group members.',
      'Configure your group settings to require admin approval for all new incoming members.'
    ],
    reportingGuidance: 'Report the compromised account and group details directly to WhatsApp Support.'
  },

  {
    id: 'facebook-ad-hijack',
    title: 'Facebook Ad Account & Business Manager Hijacks',
    category: 'Corporate Protection',
    iconName: 'facebook',
    overview: `
      <div class="article-rich-content">
        <h3>1. Corporate Ad Manager Exploitations</h3>
        <p>Scammers target marketing agencies and business page owners with phishing links or malware disguised as "product portfolios" or "sponsorship media kits". Running these files drops browser session hijackers that steal Meta session tokens, allowing hackers to run expensive ad campaigns on the victim\'s saved credit cards.</p>
      </div>
    `,
    warningSigns: [
      'Receiving portfolio archives containing executable extensions (e.g., `sponsorship.pdf.exe` or `media-kit.scr`).',
      'Receiving random Meta Business Suite admin invite alerts or unexpected system emails.'
    ],
    examples: [
      'A local agency employee opens a file from a fake client, allowing hackers to spend $5,000 on unauthorized ads within hours.'
    ],
    preventionTips: [
      'Never download or run files from unverified clients, especially those with double extensions.',
      'Always review and limit the number of administrators in your Meta Business Manager.'
    ],
    reportingGuidance: 'Deauthorize unrecognized admin profiles in Meta settings and freeze all connected payment cards.'
  },

  {
    id: 'google-maps-number-hijack',
    title: 'Google Maps Business Listing Hijacks & Phone Number Edits',
    category: 'Corporate Protection',
    iconName: 'map-pin',
    overview: `
      <div class="article-rich-content">
        <h3>1. Business Directory Interceptions</h3>
        <p>Scammers exploit Google Maps\' crowd-sourced editing system to suggest edits on popular hotel, restaurant, or hospital listings. They replace the official contact number with their own fraud hotlines, collecting advance payments and room deposits from customers who call to book.</p>
      </div>
    `,
    warningSigns: [
      'Multiple mismatched contact numbers listed on a business\'s official maps profile.',
      'Agents demanding advance booking deposits solely via personal Easypaisa or JazzCash wallets.'
    ],
    examples: [
      'A traveler calls a hotel number they found on Google Maps and transfers Rs. 10,000 for a room reservation, only to discover the hotel has no record of their booking.'
    ],
    preventionTips: [
      'Always cross-verify contact numbers from the business\'s official verified web domain or social media pages.',
      'Refuse to send booking deposits to unverified personal mobile wallets.'
    ],
    reportingGuidance: 'Use the "Suggest an edit" option in Google Maps to correct wrong numbers and flag fraudulent edits.'
  },

  {
    id: 'sim-tax-exemption-scams',
    title: 'FBR SIM Tax Blockage Exemptions & Non-Filer Traps',
    category: 'Digital Integrity',
    iconName: 'shield-alert',
    overview: `
      <div class="article-rich-content">
        <h3>1. Tax Compliance Phishing Templates</h3>
        <p>In response to FBR\'s active SIM blockages for non-filers, scammers send phishing messages claiming: <em>\'Your SIM is scheduled for tax blockage. Pay a Rs. 500 exemption fee to restore your connection immediately\'</em>. The links steal credit card information.</p>
      </div>
    `,
    warningSigns: [
      'Exemption notices coming from normal 11-digit mobile numbers instead of official government shortcodes.',
      'Payment links leading to suspicious, unbranded third-party payment gateways.'
    ],
    examples: [
      'A non-filer enters their credit card details on a fake "FBR SIM Restore" portal to avoid blockage, leading to continuous fraudulent online transactions on their card.'
    ],
    preventionTips: [
      'Verify your tax filing status only on official FBR Iris portals (`iris.fbr.gov.pk`).',
      'Pay government taxes only through official banking applications using official PSID codes.'
    ],
    reportingGuidance: 'Report fake tax portals and scam SMS campaigns to the PTA helpline and the FBR.'
  },

  {
    id: 'overseas-family-voice-cloning',
    title: 'Overseas Family Emergency Voice Cloning (AI Voice Theft)',
    category: 'Social Media',
    iconName: 'volume-2',
    overview: `
      <div class="article-rich-content">
        <h3>1. AI-Driven Voice Impersonation Attacks</h3>
        <p>Scammers scrape voice samples of overseas Pakistani students or workers from social media videos. Using AI voice generators, they clone their voice and call their parents in Pakistan, crying and claiming they are in urgent trouble (e.g., arrested, in an accident) and need money transferred immediately.</p>
      </div>
    `,
    warningSigns: [
      'Receiving highly emotional, urgent distress calls from unknown international or local numbers.',
      'The caller refusing to answer custom family security questions or abruptly hanging up when questioned.'
    ],
    examples: [
      'A worried father transfers Rs. 150,000 to an unknown account to bail out his son in the UK, only to find out his son was safe in his room and attending university.'
    ],
    preventionTips: [
      'Establish a secret "verbal password" within your family to verify identity during emergency calls.',
      'Verify the situation by contacting your relative directly on their regular, verified phone number or via trusted friends.'
    ],
    reportingGuidance: 'Report scam coordinates, phone numbers, and bank accounts to NCCIA.'
  },

  {
    id: 'fake-ehsaas-program-payouts',
    title: 'Ehsaas Program & BISP Cash Distribution Center Loot',
    category: 'Financial Fraud',
    iconName: 'gift',
    overview: `
      <div class="article-rich-content">
        <h3>1. Exploitation of Social Safety Nets</h3>
        <p>Fraudsters target low-income beneficiaries of government social programs (Ehsaas, BISP) by setting up fake cash disbursement camps near rural areas. They charge high "processing fees" or trick beneficiaries into scanning their fingerprints multiple times on unauthorized mobile verification terminals to steal their cash allocations.</p>
      </div>
    `,
    warningSigns: [
      'Private camps demanding a processing commission or biometric verification fee to release state-funded aid.',
      'Falsely claiming biometric failures multiple times on unbranded mobile devices.'
    ],
    examples: [
      'A rural beneficiary is told her fingerprint verification failed, but the camp owner secretly cleared the biometric check and kept her entire aid payout.'
    ],
    preventionTips: [
      'Collect government aid only from designated bank branches, official biometrically-secured retailer points, or official district centers.',
      'Never pay any private agent or retailer any fee to receive your government aid.'
    ],
    reportingGuidance: 'Report corrupt agents or unauthorized camps directly to the regional BISP monitor cell or the Citizen Portal.'
  },

  {
    id: 'bise-result-alteration-scams',
    title: 'BISE Board Result Alteration & Grade Increase Frauds',
    category: 'Online Earning',
    iconName: 'book-open',
    overview: `
      <div class="article-rich-content">
        <h3>1. Academic Exploitation Schemes</h3>
        <p>Scammers target intermediate and matriculation students who scored low grades. Posing as BISE Board database administrators, they promise to alter result files and increase grades in exchange for an advance payment, sending lookalike fake results sheets to seal the deal.</p>
      </div>
    `,
    warningSigns: [
      'Agents claiming to have back-door database access to modify official board registries.',
      'Demands for quick money transfers before the official result publications.'
    ],
    examples: [
      'A student pays Rs. 15,000 to a WhatsApp contact promising to change his grade from F to A, but the student is declared failed on the official board website.'
    ],
    preventionTips: [
      'Understand that official board results can only be processed through examinations and official re-evaluation procedures.',
      'Never trust or pay illegal academic service agents on social media.'
    ],
    reportingGuidance: 'Report bribe solicitation and cheating networks to regional Board authorities.'
  },

  {
    id: 'cracked-android-apks',
    title: 'Cracked Android APKs (WhatsApp Plus & GB WhatsApp Risks)',
    category: 'Urgent Threats',
    iconName: 'smartphone',
    overview: `
      <div class="article-rich-content">
        <h3>1. Danger of Modded Messaging Clients</h3>
        <p>Modded versions of WhatsApp (GB WhatsApp, WhatsApp Plus, Gold) bypass security sandboxes. They run invisible background scripts that log your contact list, read your chat history, and steal your verification tokens, sending the stolen data to remote databases.</p>
      </div>
    `,
    warningSigns: [
      'Applications downloaded from external browser links requesting deep root access permissions.',
      'Receiving frequent temporary account ban warnings from official service providers.'
    ],
    examples: [
      'An Android user installs GB WhatsApp to access extra features, but their account is soon banned, and their private photos are compromised.'
    ],
    preventionTips: [
      'Only download messaging and social media applications from the official Google Play Store or Apple App Store.',
      'Keep Google Play Protect enabled to scan and remove malicious applications.'
    ],
    reportingGuidance: 'Uninstall all modded clients, secure your active profiles, and perform a complete device security scan.'
  },

  {
    id: 'nadra-identity-verification-calls',
    title: 'Fake NADRA Verification Portal Calls (Identity Harvest)',
    category: 'Urgent Threats',
    iconName: 'shield',
    overview: `
      <div class="article-rich-content">
        <h3>1. Identity Harvesting Scams</h3>
        <p>Scammers call unsuspecting citizens pretending to be NADRA Verification Officers. They claim: <em>\'Your family registration tree contains discrepancies. Confirm your identity parameters, mother\'s maiden name, and CNIC number over this call or face immediate CNIC suspension\'</em>.</p>
      </div>
    `,
    warningSigns: [
      'NADRA verification requests originating from standard 11-digit mobile phone numbers.',
      'High-pressure demands to share sensitive family tree details and verification codes over a phone call.'
    ],
    examples: [
      'A user shares their mother\'s maiden name and CNIC details over a call, allowing scammers to bypass bank security filters and steal their funds.'
    ],
    preventionTips: [
      'Understand that NADRA never conducts biometric or profile verification over standard phone calls.',
      'Always visit physical NADRA registration centers for profile corrections.'
    ],
    reportingGuidance: 'Report scammer phone numbers and verification calls to the NADRA helpline and the PTA.'
  },

  {
    id: 'passport-renewal-agent-frauds',
    title: 'Fake Urgent Passport Renewal Websites',
    category: 'Travel Scam',
    iconName: 'plane-takeoff',
    overview: `
      <div class="article-rich-content">
        <h3>1. Travel Verification Phishing</h3>
        <p>To exploit long passport delays, scammers build lookalike passport renewal portals offering "urgent, guaranteed passport delivery within 48 hours". They charge high fees and capture credit card details under the pretense of visa and travel fee collections.</p>
      </div>
    `,
    warningSigns: [
      'Immigration and passport portal URLs missing the official `.gov.pk` extension.',
      'Demanding payments via personal bank transfers or mobile wallets instead of official National Bank/National Treasury channels.'
    ],
    examples: [
      'A traveler pays Rs. 20,000 for a passport renewal on a fake website, receiving an invalid, poorly formatted booking confirmation slip.'
    ],
    preventionTips: [
      'Ensure all official passport and travel-related operations are conducted exclusively via the official `dgip.gov.pk` portal.',
      'Never hire independent agents to book passport appointments.'
    ],
    reportingGuidance: 'Report spoofed renewal portals to the Directorate General of Immigration & Passports.'
  },

  {
    id: 'electricity-bill-payment-scams',
    title: 'Electricity Bill Payment Expiry Phishing (Fake SMS Alerts)',
    category: 'Financial Fraud',
    iconName: 'wallet',
    overview: `
      <div class="article-rich-content">
        <h3>1. Public Utility Phishing Templates</h3>
        <p>Consumers receive urgent SMS alerts claiming: <em>\'Your LESCO/K-Electric bill remains unpaid. Power disconnection scheduled in 2 hours. Call support or pay instantly via link\'</em>. The link leads to a payment form that steals card details.</p>
      </div>
    `,
    warningSigns: [
      'Utility alerts and disconnection warnings coming from ordinary 11-digit mobile numbers.',
      'Urgent payment links pointing to unverified, suspicious third-party domains.'
    ],
    examples: [
      'A user clicks a link in a panic and pays Rs. 15,000 to avoid disconnection, only to discover their official bill is still pending on the utility provider\'s portal.'
    ],
    preventionTips: [
      'Verify your billing status directly on the official utility provider\'s website using your reference number.',
      'Pay bills only through official banking applications or official retail collection points.'
    ],
    reportingGuidance: 'Report scam SMS campaigns to your regional utility company and the PTA.'
  },

  {
    id: 'daraz-seller-center-takeover',
    title: 'Daraz Seller Center Takeover & Merchant Verification Traps',
    category: 'Corporate Protection',
    iconName: 'shopping-bag',
    overview: `
      <div class="article-rich-content">
        <h3>1. Seller Account Hijacking Tactics</h3>
        <p>Attackers target active merchant stores on Daraz. They send fake verification links disguised as product complaints or seller center policies to steal merchant session credentials, redirecting incoming store payouts to fraudulent accounts.</p>
      </div>
    `,
    warningSigns: [
      'Emails demanding your login credentials to update store policies or resolve urgent complaints.',
      'Unexpected requests to verify your store credentials over third-party links.'
    ],
    examples: [
      'A store owner clicks a compliance link in a panic, losing access to their shop and their monthly payout reserves.'
    ],
    preventionTips: [
      'Log in only via the official Daraz Seller Center portal, never via external links.',
      'Enable Two-Factor Authentication on your merchant and seller profiles.'
    ],
    reportingGuidance: 'Contact Daraz Merchant Support and lock your account balances immediately.'
  },

  {
    id: 'pension-fund-disbursement-scams',
    title: 'Retired Employee Pension Fund & Bank Verification Fraud',
    category: 'Financial Fraud',
    iconName: 'landmark',
    overview: `
      <div class="article-rich-content">
        <h3>1. Targeting Vulnerable Pensioners</h3>
        <p>Scammers target elderly, retired government employees. Posing as National Bank or Treasury Officers, they claim: <em>\'Your pension account is suspended. Share the OTP sent to your phone to activate biometric updates\'</em>, clearing out the pensioner\'s life savings.</p>
      </div>
    `,
    warningSigns: [
      'Urgent claims that your pension funds will freeze unless an OTP is shared immediately.',
      'Posing as senior audit staff to bypass standard security filters.'
    ],
    examples: [
      'A retired teacher shares her security credentials over a call, losing her lifelong pension savings in minutes.'
    ],
    preventionTips: [
      'Understand that banks and treasury offices never ask for OTPs or login credentials over the phone.',
      'Always visit your local bank branch in person for pension biometric verifications.'
    ],
    reportingGuidance: 'Contact your bank\'s helpline immediately to block active fraudulent transfers.'
  },

  {
    id: 'smart-tv-spyware-rootkits',
    title: 'Smart TV Spyware & Home Network Redirection Risks',
    category: 'Digital Integrity',
    iconName: 'wifi',
    overview: `
      <div class="article-rich-content">
        <h3>1. Compromising Home Network Infrastructures</h3>
        <p>Users download free streaming APKs on Smart TVs to watch live sports or premium movies. These un-audited apps contain network redirection tools that capture traffic from other devices on the same home network, including passwords and banking details.</p>
      </div>
    `,
    warningSigns: [
      'Smart TV slowing down or launching unauthorized advertisement popups.',
      'Excessive background network activity when the TV screen is turned off.'
    ],
    examples: [
      'A streaming app on a TV logs home router traffic, helping scammers intercept family banking credentials.'
    ],
    preventionTips: [
      'Only download streaming services from official television store portals, never via browser links.',
      'Place smart televisions on a guest Wi-Fi network to isolate them from your primary devices.'
    ],
    reportingGuidance: 'Perform a factory reset on your smart television system.'
  },

  {
    id: 'fake-scholarship-applications',
    title: 'Fake Fully-Funded Foreign Scholarship Registration Traps',
    category: 'Travel Scam',
    iconName: 'book-open',
    overview: `
      <div class="article-rich-content">
        <h3>1. Exploitation of Student Aspirations</h3>
        <p>Scammers post fake advertisements for fully-funded international scholarships (Erasmus, Fulbright, Chevening clones), demanding security processing deposits or document verification fees to guarantee selection.</p>
      </div>
    `,
    warningSigns: [
      'Guarantees of selection in prestigious international scholarship programs.',
      'Demanding payment for visa vouchers or processing clearances upfront.'
    ],
    examples: [
      'A student transfers Rs. 35,000 for a visa voucher to an agent, who then goes offline and deletes their page.'
    ],
    preventionTips: [
      'Apply only through official scholarship boards or official university directories.',
      'Remember that legitimate scholarship boards never charge fees for selection clearances.'
    ],
    reportingGuidance: 'Report scholarship scam links to the Higher Education Commission (HEC).'
  },

  {
    id: 'freelance-security-deposit-frauds',
    title: 'Freelance Typing Job Security Deposit Traps',
    category: 'Online Earning',
    iconName: 'briefcase',
    overview: `
      <div class="article-rich-content">
        <h3>1. Online Work-from-Home Traps</h3>
        <p>Students and housewives are offered easy typing tasks, but scammers demand a security deposit to guarantee payout releases. Once paid, the recruiter disappears.</p>
      </div>
    `,
    warningSigns: [
      'Requiring an upfront fee to register for simple online work tasks.',
      'Offering high payouts for typing scanned document pages.'
    ],
    examples: [
      'A student pays a Rs. 4,000 security fee to secure a typing project, but the recruiter blocks their WhatsApp account.'
    ],
    preventionTips: [
      'Legitimate clients never charge security deposits to assign tasks.',
      'Conduct background reputation checks on companies before starting work.'
    ],
    reportingGuidance: 'File complaints with NCCIA under Online Work Scams.'
  },

  {
    id: 'domain-expiry-ransom-scams',
    title: 'Local .PK Domain Expiry Hijack & Host Ransom Traps',
    category: 'Corporate Protection',
    iconName: 'globe',
    overview: `
      <div class="article-rich-content">
        <h3>1. Website Hijacking Mechanics</h3>
        <p>Scammers monitor expiring regional corporate domains. When a company fails to renew its <code>.pk</code> domain on time, scammers purchase it and demand high ransom payments to return the domain.</p>
      </div>
    `,
    warningSigns: [
      'Receiving unverified notification emails urging immediate domain payments.',
      'Subtle spelling changes on renewal notice forms.'
    ],
    examples: [
      'A company loses access to corporate email because their expired domain was purchased by an overseas competitor.'
    ],
    preventionTips: [
      'Configure auto-renewal settings on official domain registrar panels.',
      'Regularly audit corporate domain expiry schedules.'
    ],
    reportingGuidance: 'Contact PKNIC registry authorities to report domain squatting.'
  },

  {
    id: 'facebook-page-admin-bait',
    title: 'Facebook Page Ownership Transfer Phishing',
    category: 'Social Media',
    iconName: 'facebook',
    overview: `
      <div class="article-rich-content">
        <h3>1. Social Media Page Theft Tactics</h3>
        <p>Creators receive sponsorship offers from accounts posing as corporate brands. They send links claiming to verify ad statistics, but the links actually transfer page ownership permissions to scammers.</p>
      </div>
    `,
    warningSigns: [
      'Unusually high payout sponsorship proposals for minor page listings.',
      'Demands to verify business manager credentials over external portals.'
    ],
    examples: [
      'A popular local meme page admin clicks a statistics link, losing ownership of their 100k follower page.'
    ],
    preventionTips: [
      'Never click unverified external links to verify ad statistics.',
      'Verify advertiser identity through official Business Manager portals.'
    ],
    reportingGuidance: 'Submit a page takeover appeal directly to the Meta Business Help Center.'
  },

  {
    id: 'crypto-cloud-mining-ponzis',
    title: 'Crypto Cloud Mining Contracts (Automated Mining Traps)',
    category: 'Financial Fraud',
    iconName: 'coins',
    overview: `
      <div class="article-rich-content">
        <h3>1. Dynamic Ponzi Structures</h3>
        <p>Digital setups invite users to buy \'mining hardware packages\' to earn automatic daily crypto rewards. These are Ponzi schemes that use new user investments to pay older members before crashing.</p>
      </div>
    `,
    warningSigns: [
      'Guaranteed fixed daily profit rates on volatile crypto assets.',
      'Heavy reliance on member referrals to unlock withdrawal limits.'
    ],
    examples: [
      'A user invests Rs. 80,000 on a cloud mining platform, only to find the app offline after three weeks.'
    ],
    preventionTips: [
      'Avoid systems promising passive income from mining platforms.',
      'Conduct background audits on blockchain investment products.'
    ],
    reportingGuidance: 'File fraud reports with the Securities and Exchange Commission of Pakistan (SECP).'
  },

  {
    id: 'unverified-apk-earning-apps',
    title: 'Unverified Earning Apps (Spin-to-Win, Watch-Ads APKs)',
    category: 'Online Earning',
    iconName: 'smartphone',
    overview: `
      <div class="article-rich-content">
        <h3>1. High-Risk APK Earning Traps</h3>
        <p>Aam log download unverified APK files outside official stores to earn money through simple tasks. These apps are packaged with spyware that steal active bank credentials.</p>
      </div>
    `,
    warningSigns: [
      'Earning applications requiring external browser APK installations.',
      'Excessive permissions requests on storage and network settings.'
    ],
    examples: [
      'A user installs an ads-watching app, and their mobile wallet balance is drained through credential intercepts.'
    ],
    preventionTips: [
      'Never install mobile applications from unverified browser downloads.',
      'Use Google Play Protect to check device safety status.'
    ],
    reportingGuidance: 'Uninstall unverified packages and perform a security reset.'
  },

  {
    id: 'sim-card-activation-merchants',
    title: 'Mobile Retailer Fingerprint Cloning & Stolen Biometrics',
    category: 'Urgent Threats',
    iconName: 'fingerprint',
    overview: `
      <div class="article-rich-content">
        <h3>1. Biometric Misuse in Retail Networks</h3>
        <p>Scammers pose as mobile network agents, using clone fingerprint sheets to activate bulk SIM cards. These SIMs are then sold to criminal networks for anonymous operations.</p>
      </div>
    `,
    warningSigns: [
      'Retailers insisting on fingerprint scans due to \'connection errors\'.',
      'Lack of official cellular carrier signage inside retail outlets.'
    ],
    examples: [
      'A biometric record collected for a mobile package update was used to activate three illegal SIMs.'
    ],
    preventionTips: [
      'Provide biometrics only inside official cellular brand centers.',
      'Check active registered SIM limits regularly.'
    ],
    reportingGuidance: 'File formal complaints with the PTA and regional law enforcement agencies.'
  },

  {
    id: 'e-challan-spoofed-sms',
    title: 'Traffic Police E-Challan Fake Payment Links (SMS Phishing)',
    category: 'Financial Fraud',
    iconName: 'package',
    overview: `
      <div class="article-rich-content">
        <h3>1. Civic Phishing Scams</h3>
        <p>Scammers exploit digital civic systems by sending fake traffic police SMS notifications with link details, claiming: <em>\'Your car has a pending traffic ticket, pay Rs. 1,200 instantly via portal to avoid license suspension\'</em>.</p>
      </div>
    `,
    warningSigns: [
      'E-challan notifications coming from standard 11-digit mobile numbers.',
      'Payment links pointing to unverified non-government portals.'
    ],
    examples: [
      'A driver pays a fine on a fake portal, resulting in continuous payment leaks from their card.'
    ],
    preventionTips: [
      'Verify pending fines directly on official traffic police web portals.',
      'Pay challans only through authorized bank applications using PSIDs.'
    ],
    reportingGuidance: 'Report scam SMS campaigns to regional traffic police authorities.'
  },

  {
    id: 'bisp-fake-portals',
    title: 'BISP Fake Web Portals (Benazir Income Support Program Clones)',
    category: 'Financial Fraud',
    iconName: 'gift',
    overview: `
      <div class="article-rich-content">
        <h3>1. Explaining BISP Portal Cloning</h3>
        <p>Attackers create duplicate web portals looking exactly like the official Benazir Income Support Program (BISP) or Ehsaas program websites. They promote these fake sites on WhatsApp, claiming users can check their eligibility for Rs. 25,000 cash grants by entering their CNIC and phone number.</p>
        <p>Once entered, the scammers harvest this data to register fake SIMs or perform identity theft.</p>
      </div>
    `,
    warningSigns: [
      'Websites hosted on cheap, unofficial domains (e.g., .blogspot.com, .xyz, .online) instead of .gov.pk.',
      'Urgent messages on WhatsApp promising free cash distributions.'
    ],
    examples: [
      'A WhatsApp message says: "BISP ki taraf se tamam khawateen ko Rs. 25,000 diye ja rahe hain. Apni eligibility yahan check karein: bisp-8171-cash.xyz".'
    ],
    preventionTips: [
      'Government schemes only use official .gov.pk domains.',
      'Never enter your CNIC or personal details on unofficial links received via WhatsApp.'
    ],
    reportingGuidance: 'Report fake portals to the PTA and the official BISP helpline.'
  },

  {
    id: 'whatsapp-voice-impersonation',
    title: 'WhatsApp Voice Note Scams (Impersonating Relatives)',
    category: 'Social Media',
    iconName: 'volume-2',
    overview: `
      <div class="article-rich-content">
        <h3>1. Psychological Relatives Impersonation</h3>
        <p>Scammers use compromised WhatsApp accounts to send voice notes to the victim\'s contacts. They use voice clips from social media or use highly emotional voices to pretend to be a close relative who has been arrested or met with an accident, demanding immediate cash via Easypaisa or JazzCash.</p>
      </div>
    `,
    warningSigns: [
      'Urgent and highly emotional demands for money from a relative\'s number.',
      'Refusal to answer direct questions or take a normal network call.'
    ],
    examples: [
      'A voice note from a cousin\'s WhatsApp says: "Yar mera accident ho gaya hai, police ne rok liya hai, jaldi se 10,000 Rs is mobile wallet par bhej do please!"'
    ],
    preventionTips: [
      'Always call the relative on their regular SIM/network number to confirm.',
      'Never transfer money in a panic based solely on WhatsApp text or voice notes.'
    ],
    reportingGuidance: 'Report the hijacked account to WhatsApp Support and alert common family circles.'
  },

  {
    id: 'easypaisa-fake-screenshots',
    title: 'Easypaisa Fake Screenshot Generator Apps',
    category: 'Financial Fraud',
    iconName: 'wallet',
    overview: `
      <div class="article-rich-content">
        <h3>1. Retail Transaction Screen Spoofing</h3>
        <p>Scammers use special Android applications (Fake Screenshot Generators) to create realistic-looking payment confirmation screens. They show these fake screens to local shopkeepers or online sellers as "proof of payment" without actually transferring any money.</p>
      </div>
    `,
    warningSigns: [
      'The buyer shows you a screenshot of the transfer but you haven\'t received any SMS from 3737.',
      'The transaction ID or timestamp on the screenshot looks blurry, edited, or misaligned.'
    ],
    examples: [
      'A customer buys a mobile phone and shows an Easypaisa success screenshot of Rs. 45,000, but the shopkeeper\'s account balance remains unchanged.'
    ],
    preventionTips: [
      'Never trust screenshots or user-provided receipts.',
      'Always log into your official Easypaisa application to verify the cash receipt directly in your statement history.'
    ],
    reportingGuidance: 'Report the fraudster to the local police station and call your wallet support.'
  },

  {
    id: 'jazzcash-otp-verification-calls',
    title: 'JazzCash OTP Verification Calls for Merchant Accounts',
    category: 'Financial Fraud',
    iconName: 'credit-card',
    overview: `
      <div class="article-rich-content">
        <h3>1. Explaining Merchant Takeovers</h3>
        <p>Scammers call small business owners who use JazzCash Merchant accounts. Posing as JazzCash franchise agents, they claim that the merchant\'s business registry is expired and will be suspended unless they read out the verification code sent to their phone.</p>
      </div>
    `,
    warningSigns: [
      'Calls from 11-digit mobile numbers claiming to be JazzCash Head Office.',
      'Asking for OTPs or PIN numbers to "verify" or "renew" your merchant status.'
    ],
    examples: [
      'A shopkeeper receives a call claiming: "Aap ka JazzCash merchant portal band ho raha hai, aapke phone par ek validation code aaya hai, batayein."'
    ],
    preventionTips: [
      'Never share OTP codes or passwords with anyone on a call, no matter who they claim to be.',
      'JazzCash official helpdesk only contacts merchants via official shortcodes.'
    ],
    reportingGuidance: 'Contact the official JazzCash helpline (4444) to report the caller\'s mobile number.'
  },

  {
    id: 'fbr-fake-tax-emails',
    title: 'FBR Fake Income Tax Refund Emails',
    category: 'Corporate Protection',
    iconName: 'server',
    overview: `
      <div class="article-rich-content">
        <h3>1. Deep Dive into FBR Phishing</h3>
        <p>Cybercriminals target salaried individuals and business owners with professional emails looking exactly like the Federal Board of Revenue (FBR) tax system. They claim: <em>\'Your tax refund of Rs. 35,000 has been approved. Click here to verify your banking details and claim your refund.\'</em></p>
      </div>
    `,
    warningSigns: [
      'Emails coming from public domains like Yahoo, Gmail, or fake tax-gov domains instead of official @fbr.gov.pk.',
      'Urgent instructions to click on a link and enter your banking username, password, and credit card credentials.'
    ],
    examples: [
      'An email states: "FBR Refund Department: Your income tax rebate is ready. Claim your payment now: fbr-tax-refund.org".'
    ],
    preventionTips: [
      'Check your tax file status directly by logging into the official FBR Iris portal manually.',
      'FBR never asks for banking credentials or passwords to process tax refunds.'
    ],
    reportingGuidance: 'Forward the phishing email to FBR IT support and file a complaint with the NCCIA portal.'
  },

  {
    id: 'pta-fake-device-blockage',
    title: 'PTA Fake Device Registration / Blockage SMS',
    category: 'Urgent Threats',
    iconName: 'smartphone',
    overview: `
      <div class="article-rich-content">
        <h3>1. Device Registration Phishing</h3>
        <p>Users receive SMS notifications claiming to be from the Pakistan Telecommunication Authority (PTA). The messages state: <em>\'Your phone is unregistered and will be permanently blocked in 24 hours. Pay your PTA duty tax immediately at [fake link]\'</em>.</p>
      </div>
    `,
    warningSigns: [
      'Messages sent from mobile numbers instead of official 8484 shortcode.',
      'Links pointing to insecure non-government domains (e.g., pta-customs-duty.xyz).'
    ],
    examples: [
      'SMS: "Aapka mobile PTA se block ho chuka hai. Tax jama karwane ke liye is link par click karein: pta-mobile-tax.net".'
    ],
    preventionTips: [
      'Verify your mobile registration status only through the official PTA DIRBS system (dial *8484# or download DIRBS app).',
      'Pay custom duties only at official bank branches or through official custom collection gateways.'
    ],
    reportingGuidance: 'Report the fake SMS and website link to the PTA helpline or 8484 authorities.'
  },

  {
    id: 'fake-driving-license-portals',
    title: 'Fake Online Driving License Renewal Portals',
    category: 'Digital Integrity',
    iconName: 'globe',
    overview: `
      <div class="article-rich-content">
        <h3>1. Spoofing Civic Portals</h3>
        <p>With the digitization of driving license services in Punjab, Sindh, and KP, scammers have launched clone websites offering "express online driving license delivery". They charge high upfront fees and steal the users\' CNIC copies, photos, and payment information.</p>
      </div>
    `,
    warningSigns: [
      'Websites charging an extra "express processing fee" through private mobile wallets (JazzCash/Easypaisa).',
      'The domain name does not end in .gov.pk (e.g., punjab-driving-license.com).'
    ],
    examples: [
      'An ad on Facebook promises: "Ghar bethe driving license banwayen sirf 1000 Rs me. Link par click karein: dlims-punjab.org".'
    ],
    preventionTips: [
      'Only use official government portals (e.g., dlims.punjab.gov.pk) to apply for or renew licenses.',
      'Never send photos of your CNIC or payment cards to unrecognized websites.'
    ],
    reportingGuidance: 'Report fake driving license portals to the respective Traffic Police IT wing.'
  },

  {
    id: 'nadra-cnic-sms-spoofing',
    title: 'NADRA CNIC Status Check SMS Spoofing',
    category: 'Urgent Threats',
    iconName: 'shield-alert',
    overview: `
      <div class="article-rich-content">
        <h3>1. Explaining CNIC Spoofing</h3>
        <p>Scammers use spoofed SMS headers to send messages looking like they came from official NADRA services (like 8009 or 8171). The messages state that your identity profile contains legal anomalies and instructs you to call a designated number immediately to avoid CNIC cancellation.</p>
      </div>
    `,
    warningSigns: [
      'The message instructs you to call a standard 11-digit mobile number instead of visiting a NADRA center.',
      'Demands to pay fine charges or verification processing fees through mobile wallets.'
    ],
    examples: [
      'SMS (appearing from official-looking header): "NADRA Alert: Aapka CNIC block ho gaya hai. Verification ke liye foran is number par rabta karein: 0334567890".'
    ],
    preventionTips: [
      'NADRA never conducts verification processes or disputes over standard telephone calls.',
      'Always visit your nearest NADRA Registration Center physically to check your CNIC status.'
    ],
    reportingGuidance: 'Report the number to NADRA support and NCCIA.'
  },

  {
    id: 'daraz-order-cancellation-scams',
    title: 'Daraz Customer Service Calls (Order Cancellation Scams)',
    category: 'Financial Fraud',
    iconName: 'shopping-bag',
    overview: `
      <div class="article-rich-content">
        <h3>1. Shopping Order Interception</h3>
        <p>Fraudsters gain access to leaking seller data or guess order details. They call customers who recently placed orders on Daraz, claiming: <em>\'Your order cannot be shipped due to a system error. We are issuing a full refund. Please read the OTP sent to your phone to process your refund.\'</em></p>
      </div>
    `,
    warningSigns: [
      'The caller knows your exact order item or shipping address but calls from an unofficial personal mobile number.',
      'Demanding verification codes or OTPs to initiate refunds or cancellations.'
    ],
    examples: [
      'A caller says: "Sir aapne Daraz se jo jacket order ki thi wo out of stock hai. Refund ke liye apna bank OTP batayein."'
    ],
    preventionTips: [
      'Only track and manage your orders inside the official Daraz application or website.',
      'Never share OTP codes or credit card details on phone calls.'
    ],
    reportingGuidance: 'Report the incident to Daraz official customer care support immediately.'
  },

  {
    id: 'pubg-uc-card-fraud',
    title: 'PUBG UC Mobile Purchase Card Fraud',
    category: 'Social Media',
    iconName: 'gamepad-2',
    overview: `
      <div class="article-rich-content">
        <h3>1. Online Gaming Payment Traps</h3>
        <p>Scammers sell cheap PUBG UC (Unknown Cash) packages or gaming skins on WhatsApp groups or TikTok. They ask the young players to pay by sending mobile network scratch cards (Jazz/Telenor load pins) or Easypaisa transfers, and then block them immediately after receiving the codes.</p>
      </div>
    `,
    warningSigns: [
      'Offering UC or diamonds at rates 50% cheaper than the official in-game store.',
      'Insisting on payments via mobile load scratch cards or direct wallet transfers.'
    ],
    examples: [
      'An ad on TikTok: "PUBG 5000 UC for only Rs. 500. Pay via Telenor card load pin. Send screenshot to WhatsApp."'
    ],
    preventionTips: [
      'Only purchase game credits from verified official partners like Codashop Pakistan or direct in-app purchases.',
      'Never send mobile scratch card PINs or advance payment to unverified social media profiles.'
    ],
    reportingGuidance: 'Report the seller profile on the respective social media platform (TikTok/Facebook).'
  },

  {
    id: 'facebook-marketplace-advance-scams',
    title: 'Facebook Marketplace "Advance Delivery" Scam',
    category: 'Financial Fraud',
    iconName: 'shopping-bag',
    overview: `
      <div class="article-rich-content">
        <h3>1. Facebook Marketplace Payment Scams</h3>
        <p>Fraudsters list popular high-demand items (laptops, cameras, home appliances) on Facebook Marketplace at extremely low prices. When contacted, they claim they are located in another city and demand advance shipping or token money via mobile wallet before dispatching the product.</p>
      </div>
    `,
    warningSigns: [
      'The seller refuses physical cash-on-delivery or in-person pickup.',
      'Demanding urgent advance transfers for "delivery charges" or "courier fees".'
    ],
    examples: [
      'Seller: "Bhai main Multan me hun, Rs. 1,000 advance delivery charges bhej do, baaki paise parcel milne par de dena." After receiving Rs. 1,000, the seller blocks the buyer.'
    ],
    preventionTips: [
      'Only deal with local buyers or sellers where you can inspect the product in person before paying.',
      'Never send advance token or shipping money on Facebook Marketplace.'
    ],
    reportingGuidance: 'Report the fraudulent listing and profile directly to Facebook Marketplace support.'
  },

  {
    id: 'instagram-fake-boutiques',
    title: 'Instagram Beauty Product Stores (Counterfeit / No-Delivery)',
    category: 'Social Media',
    iconName: 'instagram',
    overview: `
      <div class="article-rich-content">
        <h3>1. Cloned Boutiques on Instagram</h3>
        <p>Scammers set up professional-looking Instagram pages selling designer clothing, shoes, or cosmetics with massive follower counts (inflated by paid bots). They demand advance bank transfers, but send damaged, counterfeit products, or block the buyer altogether after receiving the money.</p>
      </div>
    `,
    warningSigns: [
      'The page has thousands of followers but comment sections on all posts are disabled or heavily restricted.',
      'The store refuses Cash on Delivery (COD) even for small orders.'
    ],
    examples: [
      'An Instagram page sells lawn suits at 70% off, demands Rs. 5,000 advance bank transfer, and blocks the customer upon delivery of a cheap unbranded piece of rag.'
    ],
    preventionTips: [
      'Only buy from stores that offer Cash on Delivery (COD) and have positive public customer reviews.',
      'Check if the store has a physical address, contact number, or physical retail outlet.'
    ],
    reportingGuidance: 'Report the profile to Instagram and warn other users in community groups.'
  },

  {
    id: 'tiktok-coins-discount-scams',
    title: 'TikTok Coins Purchase Discount Scams',
    category: 'Social Media',
    iconName: 'video',
    overview: `
      <div class="article-rich-content">
        <h3>1. TikTok Live Coin Fraud</h3>
        <p>With the rising popularity of TikTok live streams in Pakistan, scammers offer "discounted TikTok Coins" used for gifting. They trick creators and viewers into entering their credit card details or bank logins on fake billing websites, cleaning out their bank accounts.</p>
      </div>
    `,
    warningSigns: [
      'Websites offering TikTok coins at rates far below the official in-app coin recharge store.',
      'Entering card PINs or banking credentials on unofficial third-party links.'
    ],
    examples: [
      'A stream says: "Saste TikTok Coins khareedein, Rs. 100 me 500 coins. Is link par jaen: tiktok-recharge-coins.info".'
    ],
    preventionTips: [
      'Only purchase TikTok coins through the official TikTok application recharge menu.',
      'Never enter your debit or credit card details on unverified third-party websites.'
    ],
    reportingGuidance: 'Report the live stream and user account on TikTok for financial fraud.'
  },

  {
    id: 'linkedin-fake-recruiters',
    title: 'LinkedIn Fake Recruiting Agencies (Visa / Processing Fees)',
    category: 'Online Earning',
    iconName: 'briefcase',
    overview: `
      <div class="article-rich-content">
        <h3>1. Professional Recruitment Phishing</h3>
        <p>Fraudsters create fake recruiter profiles on LinkedIn, targeting job seekers in Pakistan. They offer lucrative job vacancies in Gulf countries (UAE, Saudi Arabia) or Europe, and then demand payments for "visa verification, medical tests, or background check processing fees".</p>
      </div>
    `,
    warningSigns: [
      'Recruiters using public domain emails (like @gmail.com) instead of corporate domains.',
      'Asking the candidate to pay for their own visa processing or medical screening fees upfront.'
    ],
    examples: [
      'A LinkedIn message offers: "Congratulations! You have been selected for an IT role in Dubai. Send Rs. 40,000 for visa registration fees to our agent in Pakistan."'
    ],
    preventionTips: [
      'Legitimate global employers never ask candidates to pay any recruitment or visa processing fees.',
      'Research the company\'s official website and verify the recruiter\'s profile directly.'
    ],
    reportingGuidance: 'Report the profile and job post on LinkedIn and submit complaints to the Bureau of Emigration.'
  },

  {
    id: 'fake-overseas-promoters',
    title: 'Fake Overseas Employment Promoters',
    category: 'Travel Scam',
    iconName: 'plane-takeoff',
    overview: `
      <div class="article-rich-content">
        <h3>1. Explaining Overseas Job Frauds</h3>
        <p>Unregistered local travel agents pose as official overseas employment promoters approved by the Government of Pakistan. They collect passports and large cash advances from rural citizens, promising work visas in Europe or Gulf countries, before disappearing with the money and documents.</p>
      </div>
    `,
    warningSigns: [
      'The agent lacks a valid Overseas Employment Promoter (OEP) License Number.',
      'Demanding payment in cash without providing official receipts or registration slips.'
    ],
    examples: [
      'An agent collects Rs. 500,000 from a candidate for a Greece work visa and shuts down his temporary office the next day.'
    ],
    preventionTips: [
      'Always verify the agent\'s license number on the official website of the Bureau of Emigration & Overseas Employment (`beoe.gov.pk`).',
      'Never hand over your original passport or cash without official verification.'
    ],
    reportingGuidance: 'Submit a complaint to the Bureau of Emigration and report the agent to NCCIA.'
  },

  {
    id: 'hajj-quota-registration-scams',
    title: 'Hajj/Umrah Quota Registration Scams',
    category: 'Travel Scam',
    iconName: 'milestone',
    overview: `
      <div class="article-rich-content">
        <h3>1. Explaining Quota Booking Frauds</h3>
        <p>With high demand for Hajj and Umrah packages, scammers send SMS and WhatsApp alerts claiming: <em>\'Hajj Quota registration open. Government scheme registration requires Rs. 50,000 deposit to secure your slot. Apply now.\'</em> The payments are routed to personal accounts and stolen.</p>
      </div>
    `,
    warningSigns: [
      'Urgent demands to deposit money to "reserve" a government Hajj quota seat.',
      'Payments requested via personal mobile wallets or private bank accounts.'
    ],
    examples: [
      'A WhatsApp message states: "Sarkari Hajj Scheme: Quota me 50 seats baaki hain. Foran Rs. 30,000 bhej kar apni seat pakki karein."'
    ],
    preventionTips: [
      'Government Hajj registration is only done through designated banks and the official Ministry of Religious Affairs website.',
      'Never send Hajj deposits to private accounts or third-party travel coordinators.'
    ],
    reportingGuidance: 'Report the scammer to the Ministry of Religious Affairs and the FIA.'
  },

  {
    id: 'online-qurbani-frauds',
    title: 'Online Qurbani Animal Purchase Fraud (Eid-ul-Adha)',
    category: 'Financial Fraud',
    iconName: 'shopping-bag',
    overview: `
      <div class="article-rich-content">
        <h3>1. Festive Season Payment Scams</h3>
        <p>During Eid-ul-Adha, scammers create fake Facebook pages and websites showcasing beautiful goats, cows, and sheep at incredibly cheap rates. They demand full or partial advance payments via bank transfer or mobile wallets, but deliver nothing or send sick, underweight animals on Eid day.</p>
      </div>
    `,
    warningSigns: [
      'Sellers refusing in-person visits to see the animals before purchase.',
      'Unrealistically low prices for high-weight livestock animals.'
    ],
    examples: [
      'A buyer transfers Rs. 40,000 for a cow share online, but on Eid day, the seller\'s phone is switched off and the Facebook page is deleted.'
    ],
    preventionTips: [
      'Always physically inspect the animals before making any financial transactions.',
      'Only use highly reputable, well-known organic farms or charities for online Qurbani shares.'
    ],
    reportingGuidance: 'Report fake farming pages to Facebook support and file financial complaints with the FIA.'
  },

  {
    id: 'fake-charity-campaigns',
    title: 'Fake Charity & Flood Relief Donation Campaigns',
    category: 'Financial Fraud',
    iconName: 'gift',
    overview: `
      <div class="article-rich-content">
        <h3>1. Exploitation of Generosity</h3>
        <p>During natural disasters (floods, earthquakes) or Ramadan, fraudsters set up fake crowdfunding pages or WhatsApp campaigns using the names of legitimate charity organizations (e.g., Edhi Foundation, Alkhidmat Foundation) to divert donation funds into their personal wallets.</p>
      </div>
    `,
    warningSigns: [
      'Donation appeals requesting transfers to personal Easypaisa, JazzCash, or bank accounts instead of official corporate charity accounts.',
      'Lack of official verified badges on the social media profiles promoting the fund.'
    ],
    examples: [
      'A WhatsApp message says: "Sailab zadgan ki madad karein. Edhi relief fund me 500 Rs bhejien is wallet par: 0321-XXXXXXX."'
    ],
    preventionTips: [
      'Only donate by visiting the official, verified websites of reputable charity organizations.',
      'Double-check bank account titles to ensure they belong to the registered trust and not a private individual.'
    ],
    reportingGuidance: 'Report fake charity profiles to PTA and NCCIA.'
  },

  {
    id: 'real-estate-plot-frauds',
    title: 'Real Estate Plot Scheme Booking Frauds',
    category: 'Financial Fraud',
    iconName: 'map-pin',
    overview: `
      <div class="article-rich-content">
        <h3>1. Fake Real-Estate Schemes</h3>
        <p>Fraudsters run aggressive social media ad campaigns promoting luxurious housing societies with incredibly low down payments. They collect booking fees for plots that do not physically exist or are built on disputed, non-approved land.</p>
      </div>
    `,
    warningSigns: [
      'The housing scheme lacks official approval or NOC (No Objection Certificate) from relevant development authorities (like LDA, CDA, KDA).',
      'Extremely high-pressure sales tactics demanding immediate token deposits.'
    ],
    examples: [
      'An ad claims: "Islamabad me 5 marla plot sirf Rs. 10,000 ki down payment par book karein. Limit seat offer."'
    ],
    preventionTips: [
      'Always verify the society\'s NOC status on the official website of the city\'s development authority before buying.',
      'Physically visit the society site and demand official legal ownership documents.'
    ],
    reportingGuidance: 'File booking frauds with the Securities and Exchange Commission (SECP) and the FIA.'
  },

  {
    id: 'fake-university-admission-portals',
    title: 'Fake University Admission Processing Portals',
    category: 'Online Earning',
    iconName: 'book-open',
    overview: `
      <div class="article-rich-content">
        <h3>1. Academic Admission Phishing</h3>
        <p>Scammers target students seeking admission to top universities (NUST, FAST, Punjab University, Karachi University). They build fake admission portals that look exactly like official university pages, charging students hefty "admission test processing and registration fees".</p>
      </div>
    `,
    warningSigns: [
      'The portal\'s web address is slightly different from the official university URL (e.g., fast-admissions.com instead of nu.edu.pk).',
      'The portal requests fee submission via personal mobile wallets or local exchange shops.'
    ],
    examples: [
      'A student submits their educational transcripts and transfers Rs. 5,000 for entry test registration on a replica university portal.'
    ],
    preventionTips: [
      'Always access university admission details through their official verified website or physical campus.',
      'Pay academic fees only through designated commercial bank branches using official printout challans.'
    ],
    reportingGuidance: 'Report the fake academic portal to the university administration and the HEC.'
  },

  {
    id: 'wifi-default-passwords',
    title: 'WiFi Router Default Password Vulnerabilities (Home Network Hijack)',
    category: 'Digital Integrity',
    iconName: 'wifi',
    overview: `
      <div class="article-rich-content">
        <h3>1. Default Credentials Security Risks</h3>
        <p>Most internet users in Pakistan keep the default administrator credentials (username: <code>admin</code>, password: <code>admin</code>) on their home PTCL, StormFiber, or Nayatel Wi-Fi routers. This allows wardriving hackers or neighbors to log into the router settings and silently intercept or redirect all internet traffic.</p>
      </div>
    `,
    warningSigns: [
      'Unrecognized devices appearing in your router\'s connected client list.',
      'Your internet browser frequently redirecting you to suspicious advertisement pages.'
    ],
    examples: [
      'A neighbor accesses the victim\'s router configuration portal, changes the DNS server settings, and redirects all online traffic to a replica password harvesting portal.'
    ],
    preventionTips: [
      'Always change your router\'s default administrator password immediately after installation.',
      'Disable remote management settings in your router configuration panel.'
    ],
    reportingGuidance: 'Reset your Wi-Fi router to factory settings and reconfigure secure credentials.'
  },

  {
    id: 'free-internet-trojans',
    title: 'Remote Access Trojan (RAT) in "Free Internet" Apps',
    category: 'Urgent Threats',
    iconName: 'terminal',
    overview: `
      <div class="article-rich-content">
        <h3>1. Malicious Android Packages</h3>
        <p>Scammers promote modded VPN or "Free Internet" APK files on YouTube or TikTok, claiming users can bypass network charges. In reality, these APKs contain Remote Access Trojans (RATs) that allow hackers to control the victim\'s phone camera, read SMS inbox OTPs, and steal bank accounts.</p>
      </div>
    `,
    warningSigns: [
      'The application requests unnecessary sensitive permissions like reading SMS, system overlay, or accessibility access.',
      'Your phone becomes hot, battery drains quickly, and uses high background internet data.'
    ],
    examples: [
      'A user installs a "PTCL Free Wi-Fi Hacker App" via an external download link, which secretly monitors their device and steals their bank credentials.'
    ],
    preventionTips: [
      'Never download or install applications from external blogs or file hosting links.',
      'Only trust and install verified applications from the official Google Play Store.'
    ],
    reportingGuidance: 'Perform a full factory reset of your mobile device and change your passwords.'
  },

  {
    id: 'telegram-pump-and-dump',
    title: 'Telegram Crypto Trading Signal Groups (Pump & Dump)',
    category: 'Financial Fraud',
    iconName: 'coins',
    overview: `
      <div class="article-rich-content">
        <h3>1. Crypto Trading Manipulation</h3>
        <p>Scammers run Telegram channels with thousands of members, offering "100% guaranteed crypto trading signals". They hype up a low-volume token, convince the group members to buy it (pumping the price), and then sell their own holdings at the peak, leaving the followers with massive losses.</p>
      </div>
    `,
    warningSigns: [
      'Groups promising 10x profits in a few hours on specific low-market crypto tokens.',
      'Admins pressuring you to register on unverified, shady cryptocurrency exchange portals.'
    ],
    examples: [
      'A user buys Rs. 50,000 worth of a suggested crypto coin, only to watch the coin value crash to zero minutes after the signal announcement.'
    ],
    preventionTips: [
      'Avoid relying on social media channels for financial trading or cryptocurrency signals.',
      'Conduct independent research before investing your hard-earned money.'
    ],
    reportingGuidance: 'Report the channel inside Telegram for financial scam operations.'
  },

  {
    id: 'sms-forwarder-spyware',
    title: 'WhatsApp Verification Code Sniffing (SMS Forwarder Apps)',
    category: 'Urgent Threats',
    iconName: 'smartphone',
    overview: `
      <div class="article-rich-content">
        <h3>1. Explaining SMS Interception</h3>
        <p>Scammers trick users into installing simple-looking utility apps (like "Battery Saver" or "Flashlight") outside the official store. These apps contain background scripts that silently forward all incoming SMS messages (including bank OTPs and WhatsApp codes) to the hacker\'s phone.</p>
      </div>
    `,
    warningSigns: [
      'The app demands "Receive SMS" and "Read SMS" permission during installation.',
      'The app does not have a professional presence or list on Google Play Store.'
    ],
    examples: [
      'A user downloads an APK, and minutes later, their WhatsApp stops working because the registration verification SMS was forwarded to the attacker.'
    ],
    preventionTips: [
      'Never grant SMS read permissions to non-messaging applications like calculators, torch apps, or battery tools.',
      'Regularly check and review active device administrator apps in your phone settings.'
    ],
    reportingGuidance: 'Uninstall the suspicious application immediately and run a complete malware scan.'
  },

  {
    id: 'fuel-card-loyalty-scams',
    title: 'Fake Petrol Pump Loyalty Card Schemes (Pumping Station Scams)',
    category: 'Financial Fraud',
    iconName: 'package',
    overview: `
      <div class="article-rich-content">
        <h3>1. Fuel Card Phishing Alerts</h3>
        <p>Scammers call victims pretending to be representatives of major fuel companies (e.g., PSO, Shell, Total). They offer "fuel loyalty cards" providing a 30% discount on fuel purchases, demanding an upfront card activation fee of Rs. 3,000 via mobile wallet to register.</p>
      </div>
    `,
    warningSigns: [
      'Receiving calls from personal numbers offering massive discount cards for government/public utility sectors.',
      'Demanding immediate mobile wallet transfers to secure promotional fuel packages.'
    ],
    examples: [
      'A driver receives a call offering a lifetime PSO discount card for Rs. 2,000, but receives a cheap printed piece of plastic that works nowhere.'
    ],
    preventionTips: [
      'Only purchase loyalty cards directly from official petrol pump stations or customer service kiosks.',
      'Verify promotions on the verified web portal of the oil marketing company.'
    ],
    reportingGuidance: 'Report the scammer\'s phone number to PTA and the respective fuel company support.'
  },

  {
    id: 'nadra-family-tree-scams',
    title: 'Fake NADRA Family Tree Verification SMS',
    category: 'Urgent Threats',
    iconName: 'fingerprint',
    overview: `
      <div class="article-rich-content">
        <h3>1. Explaining Family Tree Phishing</h3>
        <p>Citizens receive messages on SMS or WhatsApp claiming: <em>\'NADRA Security Notice: An unknown person has registered under your family tree. Reply with your CNIC and mother\'s name to verify your family register\'</em>. This is used to bypass bank security filters.</p>
      </div>
    `,
    warningSigns: [
      'Verifications requested via normal 11-digit numbers or WhatsApp business accounts without green checkmarks.',
      'High-pressure warnings claiming your CNIC will be permanently suspended.'
    ],
    examples: [
      'A citizen receives a message: "Aap ke khandan me ghair-mulki log register ho gaye hain. Apne khandan ki details is number par bhejien to verify."'
    ],
    preventionTips: [
      'Only send family verification queries directly to NADRA\'s official shortcode (8008) via your own registered phone number.',
      'Never share personal family structure details with unauthorized contacts.'
    ],
    reportingGuidance: 'Report fake SMS coordinates to NADRA and PTA for immediate action.'
  },

  {
    id: 'fake-medicine-apps',
    title: 'Online Medicine Delivery App Clones',
    category: 'Digital Integrity',
    iconName: 'globe',
    overview: `
      <div class="article-rich-content">
        <h3>1. Spoofed Pharmaceutical Channels</h3>
        <p>With online healthcare rising, scammers launch cloned online pharmacy websites. They offer life-saving medicines at massive discounts, collect advance payments via bank transfer, and send counterfeit, expired, or dangerous dummy pills.</p>
      </div>
    `,
    warningSigns: [
      'Online pharmacies offering prescription medicines without asking for a valid medical prescription.',
      'Refusal to offer Cash on Delivery (COD) services.'
    ],
    examples: [
      'A family orders urgent heart medication on a lookalike pharmacy site, pays Rs. 8,000 advance bank transfer, but receives sugar pills in return.'
    ],
    preventionTips: [
      'Only purchase medicines from highly reputable, licensed pharmacy chains with physical outlets.',
      'Always check the packaging, expiry dates, and registration seals upon delivery.'
    ],
    reportingGuidance: 'Report counterfeit medicines to the Drug Regulatory Authority of Pakistan (DRAP).'
  },

  {
    id: 'fake-bank-apps',
    title: 'Fake Bank App Updates on Unofficial Stores',
    category: 'Urgent Threats',
    iconName: 'landmark',
    overview: `
      <div class="article-rich-content">
        <h3>1. Explaining Malicious Banking Clones</h3>
        <p>Hackers upload malicious clone apps resembling banking portals (e.g., HBL, Meezan, Alfalah) on unofficial third-party stores. They promote these apps via links as "new version updates", harvesting login credentials upon download.</p>
      </div>
    `,
    warningSigns: [
      'The application download source is outside the official Google Play or Apple App Store.',
      'The app requests permissions to read all your contacts, call history, and SMS inbox.'
    ],
    examples: [
      'An Android user downloads a file "hbl-update-2026.apk" from a link, leading to immediate transaction withdrawals from their actual account.'
    ],
    preventionTips: [
      'Only download or update your bank applications from the verified Apple App Store or Google Play Store.',
      'Never click on SMS links prompting you to install security updates.'
    ],
    reportingGuidance: 'Immediately call your bank helpline to change login passwords and freeze accounts.'
  },

  {
    id: 'fake-flight-tickets',
    title: 'Fake Flight Ticket Reservation Scams',
    category: 'Travel Scam',
    iconName: 'plane-takeoff',
    overview: `
      <div class="article-rich-content">
        <h3>1. Explaining Travel Booking Phishing</h3>
        <p>Scammers run fake travel websites or Facebook pages offering incredibly discounted airline tickets for international travel. They issue fake PDF booking receipts or reservation slips, disappearing after receiving bank transfers.</p>
      </div>
    `,
    warningSigns: [
      'Unbelievably cheap flight rates that commercial airlines do not offer.',
      'Refusing to share a valid, checkable PNR (Passenger Name Record) code before payment.'
    ],
    examples: [
      'A traveler pays Rs. 150,000 for a PIA flight ticket to London on an unofficial page, but discovers at the airport that their PNR is invalid.'
    ],
    preventionTips: [
      'Always purchase airline tickets directly from official airline websites or certified, renowned travel agents.',
      'Cross-check your PNR reservation code on the airline\'s official portal before paying the agent.'
    ],
    reportingGuidance: 'Report the travel scammer to NCCIA and the Civil Aviation Authority (CAA).'
  },

  {
    id: 'overseas-job-whatsapp-scams',
    title: 'WhatsApp Job Invitations from Foreign Numbers',
    category: 'Online Earning',
    iconName: 'message-square',
    overview: `
      <div class="article-rich-content">
        <h3>1. Foreign Number Recruitment Fraud</h3>
        <p>Users receive WhatsApp messages from foreign numbers (+234, +212, +1, +44) offering high-paying online part-time jobs. These messages are designed to lure users into task-based financial scams, where they are eventually asked to deposit funds to clear withdrawal limits.</p>
      </div>
    `,
    warningSigns: [
      'Messages from unknown overseas country codes offering easy income for simple tasks like rating hotels or clicking ads.',
      'The job recruiter refuses to hop on an official video call or share corporate email.'
    ],
    examples: [
      'A user receives a text from a +234 (Nigeria) country code offering Rs. 8,000 daily for liking TikTok videos, leading to a financial deposit trap.'
    ],
    preventionTips: [
      'Block and report unknown foreign numbers offering unsolicited financial opportunities.',
      'Never pay registration or activation fees to start a remote job.'
    ],
    reportingGuidance: 'Report and block the number directly within WhatsApp and alert the FIA NCIC.'
  },

  // 1. Real Estate File Fraud and Fake Societies
  {
    id: 'real-estate-file-fraud',
    title: 'Real Estate File Fraud & Fake Housing Societies',
    category: 'Property Scam',
    iconName: 'home-warning',
    overview: `
      <div class="article-rich-content">
        <h3>1. Real Estate & Housing Scheme Frauds in Pakistan</h3>
        <p>Pakistani investors and overseas Pakistanis are frequently targeted by fake housing societies and cooperative schemes. Scammers promote non-existent or unapproved land files using luxurious 3D video renders, celebrity endorsements, and easy installment plans. Once they collect millions in "booking fees," they delay development or vanish entirely.</p>
        <p>These fraudulent housing schemes operate without acquiring the necessary NOC (No Objection Certificate) from relevant development authorities like LDA, CDA, KDA, or RDA.</p>
      </div>
    `,
    warningSigns: [
      'Housing schemes offering booking files without a verified NOC from regional development authorities.',
      'Sellers pushing for rapid cash payments without official bank channel transactions.'
    ],
    examples: [
      'An overseas investor buys a booking file for Rs. 500,000 in a society that claims to be "near Islamabad highway," only to discover the land was never acquired.'
    ],
    preventionTips: [
      'Always verify the housing scheme\'s approval and NOC status directly on the official portal of LDA, CDA, RDA, or KDA.',
      'Refuse to buy files through unverified third-party dealers; trade only through registered corporate offices.'
    ],
    reportingGuidance: 'Report fake societies and land grabbers to the National Accountability Bureau (NAB) and your local development authority.'
  },

  // 2. Under-Invoice Import Scams
  {
    id: 'under-invoice-import-scam',
    title: 'Under-Invoice Import & Custom Duty Scams',
    category: 'Customs Scams',
    iconName: 'shield-alert',
    overview: `
      <div class="article-rich-content">
        <h3>1. Understanding Custom Import Clearance Scams</h3>
        <p>Scammers pose as customs clearance agents or importers on social media, offering cheap laptops, iPhones, or machinery. They claim the goods are held up at Karachi Port or Islamabad Airport due to custom duties. They ask you to pay a minor "clearance fee" or "under-invoice duty" directly to their personal bank accounts to release the items.</p>
      </div>
    `,
    warningSigns: [
      'Unsolicited offers to clear imported goods at custom check-posts using informal payments.',
      'Demands for money to be sent to private personal wallets instead of official FBR / National Bank channels.'
    ],
    examples: [
      'A buyer is asked to pay Rs. 30,000 as "bribe/tax" to a personal Easypaisa account to release a parcel containing a raffle-winning iPhone.'
    ],
    preventionTips: [
      'Always request an official FBR (Federal Board of Revenue) computerized payment receipt (CPR) for any duty taxes.',
      'Do not hire unauthorized or unverified custom clearing agents from Facebook or WhatsApp.'
    ],
    reportingGuidance: 'Report customs scam calls and blackmailing attempts to the FBR helpline and NCCIA.'
  },

  // 3. Fake Government Ehsaas Program Cash Offers
  {
    id: 'ehsaas-program-scam',
    title: 'Fake Ehsaas Program & Cash Grant Fraud',
    category: 'Welfare Fraud',
    iconName: 'alert-triangle',
    overview: `
      <div class="article-rich-content">
        <h3>1. Welfare Program Impersonation (Ehsaas / BISP)</h3>
        <p>Attackers target underprivileged citizens by sending fake SMS notifications claiming they have been selected to receive a cash grant under the Benazir Income Support Programme (BISP) or Ehsaas Program. They ask victims to pay a small processing or biometric verification fee at local retail shops or transfer it to an Easypaisa/JazzCash account.</p>
      </div>
    `,
    warningSigns: [
      'SMS alerts about cash programs from normal 11-digit mobile numbers instead of official 8171 shortcode.',
      'Requirements to pay an upfront booking, registration, or activation fee to claim your welfare money.'
    ],
    examples: [
      'A domestic worker receives an SMS from 0304-XXXXXXX claiming she has won Rs. 25,000 and must send Rs. 2,000 registration fee to receive it.'
    ],
    preventionTips: [
      'Keep in mind that all official BISP and Ehsaas communication is routed strictly through the shortcode 8171.',
      'The government of Pakistan never requests processing fees, mobile balance loads, or commissions to release welfare funds.'
    ],
    reportingGuidance: 'Report fake Ehsaas/BISP scam messages by forwarding the sender number to the BISP helpline and PTA shortcode 9000.'
  },

  // 4. Cryptocurrency Investment Scams and Fake Arbitrage Bots
  {
    id: 'crypto-arbitrage-scams',
    title: 'Cryptocurrency Investment & Fake Arbitrage Scams',
    category: 'Investment Scam',
    iconName: 'trending-down',
    overview: `
      <div class="article-rich-content">
        <h3>1. Explaining Cryptocurrency Ponzi Schemes</h3>
        <p>Fraudulent apps and websites promise guaranteed daily or weekly returns by using "automated AI crypto trading bots" or "arbitrage pools." They ask you to deposit USDT, Bitcoin, or cash. Initially, they show fake profits on their dashboard to lure you into depositing more, then shut down the portal entirely.</p>
      </div>
    `,
    warningSigns: [
      'Guaranteed high-percentage daily returns on crypto deposits without any risk.',
      'Refusal to explain the underlying business model, or demanding that you recruit more members to unlock withdrawals.'
    ],
    examples: [
      'An investor deposits $500 in an app called "CryptoBot-AI" after being promised a 5% daily return, only for the app to freeze withdrawals after two weeks.'
    ],
    preventionTips: [
      'Remember that cryptocurrency trading and investment apps are unregulated and unauthorized by the SBP and SECP in Pakistan.',
      'Avoid high-yield investment programs (HYIPs) that function like digital multi-level marketing (MLM) schemes.'
    ],
    reportingGuidance: 'Report illegal digital asset operators and fraudulent investment platforms to the SECP and NCCIA.'
  },

  // 5. Unregistered Digital Prize Scheme Alerts
  {
    id: 'unregistered-prize-schemes',
    title: 'Unregistered Digital Prize Scheme & Lottery Fraud',
    category: 'Lottery Scams',
    iconName: 'gift',
    overview: `
      <div class="article-rich-content">
        <h3>1. Fake Television & Brand Lottery Prizes</h3>
        <p>Scammers run fraudulent prize schemes claiming to be affiliated with famous TV game shows, telecom providers (Mobilink, Telenor), or retail brands. They contact victims via phone calls or WhatsApp, stating they have won luxury cars, gold, or huge cash sums, but must transfer a registration or tax fee beforehand.</p>
      </div>
    `,
    warningSigns: [
      'Winning notifications for lotteries, game shows, or lucky draws you never actually entered.',
      'Urgent demands to transfer tax money or purchasing scratch cards to redeem the cash prize.'
    ],
    examples: [
      'A shopkeeper receives a WhatsApp audio note from "Jeeto Pakistan" organizers telling him he won a Corolla car and must deposit Rs. 15,000 for transport tax.'
    ],
    preventionTips: [
      'No legitimate brand or lucky draw organization will ever ask for advance payments, tax, or scratch card pins to release prizes.',
      'Verify any such claims directly with the company\'s official customer support department.'
    ],
    reportingGuidance: 'File complaints against fake lottery coordinators and fraudulent phone numbers with the PTA and FIA CCW.'
  },

  // 6. Fake Medical Emergency and Hospital Bill Appeals
  {
    id: 'fake-medical-emergency-scams',
    title: 'Fake Medical Emergency & Hospital Bill Frauds',
    category: 'Social Media Scams',
    iconName: 'heart-crack',
    overview: `
      <div class="article-rich-content">
        <h3>1. Exploiting Human Empathy Through Fake Illnesses</h3>
        <p>Scammers steal real patient photos and medical prescriptions from internet forums. They post emotional appeals on Twitter, Facebook, or WhatsApp, claiming a child or parent requires immediate life-saving surgery or expensive medicines. They supply private mobile wallet numbers for immediate relief donations.</p>
      </div>
    `,
    warningSigns: [
      'Emotional charity posts on social media that refuse to provide verifiable hospital registration numbers or treating physician details.',
      'Urging immediate peer-to-peer transfers to personal digital wallets instead of registered hospital billing desks.'
    ],
    examples: [
      'A social media user donates Rs. 10,000 via Easypaisa for a baby\'s emergency heart surgery, only to find the same post circulating with a different account number.'
    ],
    preventionTips: [
      'Verify the authenticity of charity appeals by contacting the hospital directly or requesting to pay the bill directly to the hospital desk.',
      'Always channel your charity and donations through registered, verified, and well-known non-profit organizations.'
    ],
    reportingGuidance: 'Report fake medical charity profiles and fraudulent fund-raisers to the relevant social media platform and NCCIA.'
  },

  // 7. Customs Duty Auction Phishing Scams
  {
    id: 'customs-duty-auction-scams',
    title: 'Customs Duty Auction Phishing Scams',
    category: 'Import / Customs',
    iconName: 'gavel',
    overview: `
      <div class="article-rich-content">
        <h3>1. Explaining Fake Customs Auctions</h3>
        <p>Fraudsters create fake social media groups or send bulk emails claiming to offer "confiscated customs goods" (such as cars, iPhones, and luxury watches) at unbelievably low auction rates. They pretend to be official custom officers and ask you to pay advanced security fees to reserve the item.</p>
      </div>
    `,
    warningSigns: [
      'Offers for high-end customs auction items at flat 80-90% discounts.',
      'Being asked to send money to private individuals for securing custom-cleared goods.'
    ],
    examples: [
      'A college student pays Rs. 40,000 for a confiscated MacBook Pro listed on a fake "FBR Customs Auction" Facebook page, only to be blocked after payment.'
    ],
    preventionTips: [
      'Keep in mind that genuine Pakistan Customs auctions are officially conducted through public notices in newspapers and secure, verified state platforms.',
      'Never send personal funds to anyone claiming to be an active custom officer conducting auctions on WhatsApp.'
    ],
    reportingGuidance: 'Report these fake auctioneers and spoofed pages to the FBR helpline and the FIA CCW.'
  },

  // 8. Fake Utility Bills with Malicious QR Codes
  {
    id: 'fake-utility-bill-qr-scams',
    title: 'Fake Utility Bills with Malicious QR Codes',
    category: 'Utility Fraud',
    iconName: 'scan',
    overview: `
      <div class="article-rich-content">
        <h3>1. The Mechanics of Malicious QR Code Bill Scams</h3>
        <p>Attackers print and deliver highly realistic, fake physical utility bills (electricity, gas, or water) to residential doorsteps. These bills contain massive "late payment" warnings and feature a custom-printed QR code designed for "instant discount payment." Scanning the QR code redirects users to a phishing page designed to steal bank details.</p>
      </div>
    `,
    warningSigns: [
      'Utility bills delivered outside the regular monthly schedule or with altered consumer names.',
      'A prominent QR code on the bill claiming to offer immediate 20-30% discounts if paid via digital wallets.'
    ],
    examples: [
      'A homeowner scans a QR code on a physical electricity bill claiming to offer a "quick pay discount," losing Rs. 50,000 from his bank account via the phishing portal.'
    ],
    preventionTips: [
      'Always verify the consumer billing amount and late date using the official utility provider\'s digital application or website.',
      'Avoid scanning unverified QR codes on physical bills; make payments directly through your bank app or official retail agents.'
    ],
    reportingGuidance: 'Report counterfeit physical utility documents to the regional utility company (e.g., LESCO, K-Electric, SNGPL) and law enforcement.'
  },

  // 9. Sim Swap and Biometric Verification Bypass Scams
  {
    id: 'sim-swap-biometric-bypass',
    title: 'SIM Swap & Biometric Bypass Frauds',
    category: 'Identity Theft',
    iconName: 'shield-off',
    overview: `
      <div class="article-rich-content">
        <h3>1. How SIM Swapping Occurs in Pakistan</h3>
        <p>In a SIM Swap scam, attackers use forged identity documents or social engineering to convince a cellular company agent to issue a duplicate copy of your SIM card. Once activated, your real SIM loses signal, and the attacker receives all your OTP codes, allowing them to take over your bank accounts, emails, and WhatsApp.</p>
      </div>
    `,
    warningSigns: [
      'Your mobile phone suddenly loses cellular signal entirely for hours without any network outage.',
      'Receiving unexpected SMS notifications about a duplicate SIM card issuance request.'
    ],
    examples: [
      'A businessman\'s phone goes completely silent. Within two hours, attackers use the newly issued duplicate SIM to bypass his bank OTP and steal Rs. 200,000.'
    ],
    preventionTips: [
      'If your phone loses signal suddenly, immediately contact your telecom operator to confirm the status of your SIM card.',
      'Never share your biometric thumbprints on unverified mobile retail setups or with unknown street agents.'
    ],
    reportingGuidance: 'Immediately report unauthorized SIM duplicate requests to your cellular carrier and register a case with the PTA.'
  },

  // 10. Fake International Scholarship and Visa Consultants
  {
    id: 'fake-scholarship-visa-scams',
    title: 'Fake International Scholarship & Visa Consultants',
    category: 'Academic Scams',
    iconName: 'graduation-cap',
    overview: `
      <div class="article-rich-content">
        <h3>1. Student Exploitation in Higher Education</h3>
        <p>Unregistered "academic consultants" target young Pakistani students by promising fully-funded scholarships or guaranteed visas to Europe, Canada, or Australia. They charge massive fees for "file processing," "embassy appointments," or " IELTS waiver fees," providing counterfeit acceptance letters before shutting down their offices.</p>
      </div>
    `,
    warningSigns: [
      'Consultants promising 100% guaranteed visa approvals or full scholarships without assessing your academic transcripts or language scores.',
      'Demands for high cash payments for unofficial documents or non-transparent booking services.'
    ],
    examples: [
      'A student pays Rs. 400,000 for a visa file to Germany, only to receive a forged university admission letter that leads to an immediate embassy rejection.'
    ],
    preventionTips: [
      'Always check the SECP and HEC registration status of any educational consultant you hire.',
      'Verify college admission offers by contacting the international admissions office of the foreign university directly via email.'
    ],
    reportingGuidance: 'Report fraudulent consultants and visa agencies to the Higher Education Commission (HEC) and the FIA CCW.'
  },

  // 11. Remote Desktop Administration Trojan Scam (AnyDesk/TeamViewer)
  {
    id: 'remote-desktop-trojan-scams',
    title: 'Remote Desktop Trojan Scams (AnyDesk/TeamViewer)',
    category: 'Tech Support',
    iconName: 'monitor',
    overview: `
      <div class="article-rich-content">
        <h3>1. The Trap of Remote Access Assistance</h3>
        <p>Scammers masquerading as bank staff, telecom agents, or Microsoft security experts call users claiming their device is infected with malware or their banking app has a security glitch. They instruct you to download a remote access app (e.g., AnyDesk, TeamViewer, or RustDesk) and give them the connection ID. Once connected, they control your phone or computer to initiate unauthorized transactions.</p>
      </div>
    `,
    warningSigns: [
      'Unsolicited calls from anyone urging you to install any remote desktop application to "fix a security issue."',
      'Requests to share remote access connection IDs, PIN codes, or device control permissions.'
    ],
    examples: [
      'A retired government official installs AnyDesk on his phone following instructions from a caller claiming to be from SBP, losing control of his screen as Rs. 150,000 is transferred out.'
    ],
    preventionTips: [
      'Never install third-party remote desktop applications or screen-sharing tools based on instructions from unsolicited callers.',
      'Banks and state agencies will never request remote control access to your personal devices.'
    ],
    reportingGuidance: 'Foran uninstall the application, disconnect from the internet, and report the caller number to the PTA and FIA CCW.'
  },

  // 12. Blackmail through Leaked Cloud Backups and Private Photos
  {
    id: 'cloud-leak-blackmail',
    title: 'Cloud Leaks, Fake Apps & Online Blackmailing',
    category: 'Sextortion / Harassment',
    iconName: 'unlock',
    overview: `
      <div class="article-rich-content">
        <h3>1. Cyber-Harassment and Digital Blackmail</h3>
        <p>Cybercriminals lure victims into installing malicious "chat" or "camera" apps that secretly upload private photos, contacts, and SMS from the device to a secure database. Alternatively, they hack vulnerable cloud storage accounts (Google Photos, iCloud). They then threaten to send these private photos to family members unless a ransom is paid via digital currency or wallets.</p>
      </div>
    `,
    warningSigns: [
      'Strangers on social media pushing you to install private .APK files or obscure video call apps outside the Google Play Store.',
      'Threats to publish personal media, screenshots, or private data unless immediate payments are made.'
    ],
    examples: [
      'A female student installs an APK file shared by an online acquaintance, which secretly steals her private family gallery and leads to a blackmail demand of Rs. 100,000.'
    ],
    preventionTips: [
      'Avoid downloading or installing application packages (.APK) from third-party websites or untrusted links.',
      'Secure your Google and Apple Cloud accounts with strong, unique passwords and mandatory hardware-based 2FA.'
    ],
    reportingGuidance: 'Do not pay blackmailers; gather screenshots of the threats and contact the NCCIA Cyber Crime Helpline 1799.'
  },

  // 13. Fake Online Vehicle Registration & Token Tax Portals
  {
    id: 'fake-token-tax-portals',
    title: 'Fake Online Vehicle Registration & Token Tax Portals',
    category: 'Government Portals',
    iconName: 'car',
    overview: `
      <div class="article-rich-content">
        <h3>1. Counterfeit E-Government Portals</h3>
        <p>With the rise of digital vehicle verification and online token tax systems in Pakistan, fraudsters launch fake websites that clone the design of official provincial Excise & Taxation departments. Users enter their vehicle chassis number, pay the token tax online via cards, but the payment is funneled to the scammer, leaving the tax unpaid.</p>
      </div>
    `,
    warningSigns: [
      'Online payment portals for taxation that do not use official government URLs (e.g., using <code>.com</code> or <code>.org</code> instead of <code>.gov.pk</code>).',
      'The payment gateway does not support standard official state invoicing channels like PSID or e-Pay.'
    ],
    examples: [
      'A car owner pays Rs. 12,000 on a website styled as "punjab-excise-gov.com" and only finds out during a traffic stop that his token tax is still unpaid.'
    ],
    preventionTips: [
      'Always pay excise duties, vehicle registrations, and token taxes only through official provincial apps like e-Pay Punjab or official Excise department portals ending in <code>.gov.pk</code>.',
      'Verify your vehicle registration status independently via the MTMIS official systems.'
    ],
    reportingGuidance: 'Report fake government payment platforms immediately to the PTA web blocking engine and the Excise department.'
  },

  // 14. Social Media Account Recovery Scams
  {
    id: 'social-media-recovery-scams',
    title: 'Social Media Account Recovery Scams',
    category: 'Account Hijacking',
    iconName: 'user-x',
    overview: `
      <div class="article-rich-content">
        <h3>1. Phishing for Social Media Account Access</h3>
        <p>Attackers hack a user\'s account (Facebook, Instagram, or Snapchat) and send messages to their contact list. They state: <em>\'I am locked out of my account, please receive a security verification code on your phone and send it to me to help me log back in\'</em>. Sending the code allows them to hijack your own social media profile.</p>
      </div>
    `,
    warningSigns: [
      'An acquaintance or friend asking you to receive and share a security code or OTP to help them recover their profile.',
      'Unexpected password reset notifications or security alert SMS sent to your phone.'
    ],
    examples: [
      'A user receives a message from her cousin\'s hacked Instagram account asking for a recovery code, shares the code, and finds her own account compromised within minutes.'
    ],
    preventionTips: [
      'Never share password reset codes, SMS links, or OTPs with anyone, even close friends or family members.',
      'Activate Two-Factor Authentication (2FA) across all your digital social media profiles.'
    ],
    reportingGuidance: 'Report the hijacked profile directly to the social media platform (Meta/Instagram Help Center) and inform your friends using other channels.'
  },

  // 15. Direct Carrier Billing (DCB) and Unsolicited SMS Subscriptions
  {
    id: 'direct-carrier-billing-scams',
    title: 'Direct Carrier Billing & Unsolicited SMS Scams',
    category: 'Mobile Scams',
    iconName: 'smartphone',
    overview: `
      <div class="article-rich-content">
        <h3>1. Explaining Unauthorized Mobile Balance Deductions</h3>
        <p>Scammers setup shady third-party web portals (games, adult content, or horoscopes). When you visit these sites on a mobile data connection, they trick you into clicking an invisible link or button that silently subscribes your number to a premium "Direct Carrier Billing" service, draining Rs. 20-50 daily from your mobile balance.</p>
      </div>
    `,
    warningSigns: [
      'Frequent, sudden deductions of mobile credit balance without any active usage.',
      'Receiving periodic SMS notifications confirming subscriptions to digital services you never signed up for.'
    ],
    examples: [
      'A user notices his prepaid mobile balance draining Rs. 30 every day, discovering a hidden subscription to an "Elite Gaming Hub" he never joined.'
    ],
    preventionTips: [
      'Avoid clicking on strange popup ads or suspicious banners on free media streaming websites.',
      'Regularly review your active subscriptions via your telecom operator\'s official application (e.g., My Jazz, My Telenor).'
    ],
    reportingGuidance: 'Call your telecom operator helpline to unsubscribe from all active third-party services, and report persistent credit drain to the PTA.'
  },

  // 16. Fake Hajj and Umrah Discount Package Scams
  {
    id: 'fake-hajj-umrah-scams',
    title: 'Fake Hajj & Umrah Discount Package Frauds',
    category: 'Travel Scams',
    iconName: 'milestone',
    overview: `
      <div class="article-rich-content">
        <h3>1. Explaining Religious Pilgrimage Frauds</h3>
        <p>Unlicensed travel agents run online advertisements offering Hajj or Umrah travel packages at incredibly discounted rates. They issue fake hotel booking vouchers in Mecca and Medina, and collect upfront cash. When the pilgrims arrive in Saudi Arabia, they find no flights booked or hotel reservations made.</p>
      </div>
    `,
    warningSigns: [
      'Hajj or Umrah packages advertised at prices significantly below standard market rates.',
      'The travel agent is not listed as an approved organizer by the Ministry of Religious Affairs (MORA).'
    ],
    examples: [
      'A family pays Rs. 800,000 for an Umrah package, only to discover upon landing in Jeddah that their visa was fake and no accommodation exists.'
    ],
    preventionTips: [
      'Only book pilgrimage services through agents verified and registered with the Ministry of Religious Affairs (MORA) Pakistan.',
      'Verify hotel reservations directly with the hotel in Saudi Arabia before making the final payment.'
    ],
    reportingGuidance: 'Report fraudulent travel agencies to the Ministry of Religious Affairs, FIA CCW, and local police.'
  },

  // 17. Work from Home Typing and CAPTCHA Solving Fraud
  {
    id: 'typing-captcha-solving-scams',
    title: 'Work-from-Home Typing & CAPTCHA Solving Scams',
    category: 'Online Earning',
    iconName: 'keyboard',
    overview: `
      <div class="article-rich-content">
        <h3>1. Exploiting Remote Workers with Fake Typing Jobs</h3>
        <p>Fraudulent agencies advertise simple data entry, PDF-to-Word typing, or CAPTCHA solving jobs. They promise lucrative daily salaries, but demand that you pay a "security deposit," "software training fee," or "account activation charge" before starting work. Once paid, they block you.</p>
      </div>
    `,
    warningSigns: [
      'Requirements to pay any upfront fee or registration charges to secure remote work.',
      'Extremely high pay promised for basic typing or CAPTCHA entry tasks.'
    ],
    examples: [
      'An unemployed graduate pays Rs. 5,000 as a "security deposit" to a Facebook page for a data-entry job, but the recruiter disappears after receiving the funds.'
    ],
    preventionTips: [
      'Remember that genuine remote employers or freelance clients will never demand that you pay money to secure a job.',
      'Conduct remote freelance work only through trusted international platforms like Upwork, Fiverr, or Guru.'
    ],
    reportingGuidance: 'Report these fake recruitment agencies and pages to NCCIA.'
  },

  // 18. Pre-Approved Credit Card and Loan Scam Phone Calls
  {
    id: 'pre-approved-loan-scams',
    title: 'Pre-Approved Credit Card & Loan Phone Calls',
    category: 'Banking Scams',
    iconName: 'credit-card',
    overview: `
      <div class="article-rich-content">
        <h3>1. Explaining Fake Bank Loan Offers</h3>
        <p>Scammers posing as representatives of major banks call users, informing them they are eligible for a pre-approved credit card, cash loan, or interest-free markup plan. To process the application, they request your existing bank account digits, CNIC, and the SMS security code (OTP) received on your phone.</p>
      </div>
    `,
    warningSigns: [
      'Unsolicited phone calls claiming to offer pre-approved credit cards or loans without standard paperwork.',
      'Demands to share OTPs, credit card expiry dates, or internet banking login details on the phone.'
    ],
    examples: [
      'A caller claiming to represent Meezan Bank offers an immediate Rs. 100,000 personal loan, asking the victim for his card number and the OTP to "verify the account."'
    ],
    preventionTips: [
      'Keep in mind that banks will never call you to request OTP codes or sensitive credentials to approve credit cards or loans.',
      'Always visit your nearest physical bank branch if you are interested in applying for financial loans.'
    ],
    reportingGuidance: 'Report the scammer\'s phone number to your bank\'s helpline and the PTA immediately.'
  },

  // 19. Counterfeit Online Grocery & Electronics Delivery Sites
  {
    id: 'counterfeit-delivery-sites',
    title: 'Counterfeit E-Commerce & Electronics Portals',
    category: 'E-Commerce Scams',
    iconName: 'shopping-cart',
    overview: `
      <div class="article-rich-content">
        <h3>1. Fake E-Commerce Stores in Pakistan</h3>
        <p>Fraudsters launch fake websites or Instagram stores selling designer clothes, electronics, or groceries at massive discounts. They insist on advanced payments (via bank transfer or digital wallets) or ship broken, counterfeit items using cash on delivery (COD). When you try to contact them for a return, you are blocked.</p>
      </div>
    `,
    warningSigns: [
      'E-commerce stores with no physical office address, customer reviews, or landline support numbers.',
      'Being pressured to pay in advance for high-value items, or receiving suspicious parcels with unverified delivery slips.'
    ],
    examples: [
      'A shopper pays Rs. 8,000 in advance for a branded shoe on an Instagram page, but receives a worn-out, unbranded pair and gets blocked by the seller.'
    ],
    preventionTips: [
      'Shop only from trusted, established e-commerce brands or platforms that offer verifiable refund policies.',
      'For new or unfamiliar online pages, always opt for Cash on Delivery (COD) and inspect the package before paying.'
    ],
    reportingGuidance: 'Report fake social media shops to the provincial Consumer Courts and the FIA CCW.'
  },

  // 20. Public Wi-Fi Rogue Hotspots and Man-in-the-Middle Attacks
  {
    id: 'public-wifi-rogue-hotspots',
    title: 'Public Wi-Fi Rogue Hotspots & Snooping Attacks',
    category: 'Wi-Fi Security',
    iconName: 'wifi',
    overview: `
      <div class="article-rich-content">
        <h3>1. Understanding Rogue Public Wi-Fi Hotspots</h3>
        <p>Attackers set up open, password-free Wi-Fi hotspots in busy public places like shopping malls, cafes, or airports, naming them "Free Public Wi-Fi" or similar. When you connect to these rogue hotspots, the attacker can intercept all your unencrypted internet traffic, capturing passwords, emails, and sensitive credentials.</p>
      </div>
    `,
    warningSigns: [
      'Open, public Wi-Fi networks that do not require any registration, login portal, or security password.',
      'Browser warning alerts about insecure SSL certificates or untrusted connections when using a public hotspot.'
    ],
    examples: [
      'A traveler logs into her bank account while connected to an open, unencrypted Wi-Fi hotspot at Karachi Airport, unknowingly sharing her login credentials with an attacker.'
    ],
    preventionTips: [
      'Avoid logging into banking apps, payment wallets, or sensitive email accounts while connected to public, unsecured Wi-Fi.',
      'Use a trusted, encrypted Virtual Private Network (VPN) if you absolutely must access public networks.'
    ],
    reportingGuidance: 'Report suspicious rogue hotspots to the network security team at the venue or local cybersecurity wings.'
  },

  // --- 20 REAL-WORLD CYBER ATTACK STORIES / CASE STUDIES ---

  // 1. Bangladesh Bank Heist (2016)
  {
    id: 'bangladesh-bank-heist',
    title: 'The Bangladesh Bank SWIFT Heist (2016)',
    category: 'Real Hacking Story',
    iconName: 'landmark',
    overview: `
      <div class="article-rich-content">
        <h3>The $101 Million SWIFT Credential Compromise</h3>
        <p>In February 2016, hackers successfully infiltrated the network of Bangladesh Bank, the nation's central bank. They spent months scouting the system, eventually deploying custom malware to bypass local security checks and harvest operator credentials for the SWIFT network—the global backbone of international bank transfers.</p>
        <p>The attackers issued 35 fraudulent transfer instructions totaling nearly $951 million to the Federal Reserve Bank of New York, requesting transfers to fake foundation accounts in the Philippines. Five transactions succeeded, resulting in the theft of $81 million that vanished into casinos, while a single spelling typo ("fandation" instead of "foundation") halted the remaining $850 million in transfers.</p>
      </div>
    `,
    warningSigns: [
      'Unusual printer outages and delayed network status logs inside central banking units.',
      'SWIFT transaction queues suddenly operating during local public holidays and weekends.'
    ],
    examples: [
      'Hackers timed the attack for Friday morning (weekend in Bangladesh) and executed routing paths through New York (Friday afternoon) and Manila (Chinese New Year holiday), exploiting timezone delays.'
    ],
    preventionTips: [
      'Ensure strict physical and network segregation of terminal systems connected to SWIFT or high-value clearing networks.',
      'Enforce multi-operator multi-approval workflows for every outbound international wire transfer.'
    ],
    reportingGuidance: 'The incident highlighted the need to report anomalous transactional logs immediately to the global SWIFT Security Team.'
  },

  // 2. The Stuxnet Worm (2010)
  {
    id: 'stuxnet-worm-incident',
    title: 'The Stuxnet Industrial Sabotage Worm (2010)',
    category: 'Real Hacking Story',
    iconName: 'cpu',
    overview: `
      <div class="article-rich-content">
        <h3>The First Weaponized Digital SCADA Worm</h3>
        <p>Discovered in 2010, Stuxnet was an incredibly complex, state-sponsored cyberweapon designed to infiltrate and physically destroy industrial centrifuges at Iran's Natanz nuclear facility. It utilized four zero-day vulnerabilities in Microsoft Windows and specifically targeted Siemens Step7 industrial control systems (SCADA).</p>
        <p>Because the Natanz facility was "air-gapped" (completely disconnected from the public internet), the worm was physically carried inside the facility on infected USB flash drives, likely by unwitting external contractors.</p>
      </div>
    `,
    warningSigns: [
      'Unexplained physical failure of mechanical hardware while software dashboards display normal operating metrics.',
      'Sudden propagation of obscure LNK files and print-spooler activities across internal local networks.'
    ],
    examples: [
      'The worm played recorded, normal-operating noise and telemetry back to the monitoring engineers, while secretly spinning centrifuges to dangerous speeds until they tore themselves apart.'
    ],
    preventionTips: [
      'Enforce strict USB device policies and hardware blocks on all air-gapped industrial control stations.',
      'Implement secondary, out-of-band analog sensors to verify physical machinery metrics independently of digital monitors.'
    ],
    reportingGuidance: 'Industrial control anomalies must be immediately isolated and investigated by qualified industrial control system (ICS) security experts.'
  },

  // 3. WannaCry Ransomware Attack (2017)
  {
    id: 'wannacry-ransomware-attack',
    title: 'The WannaCry Global Ransomware Epidemic (2017)',
    category: 'Real Hacking Story',
    iconName: 'shield-alert',
    overview: `
      <div class="article-rich-content">
        <h3>The EternalBlue-Powered Global Lockout</h3>
        <p>In May 2017, the WannaCry ransomware attack swept across the globe, infecting over 200,000 computers in 150 countries within a matter of hours. The attack crippled critical infrastructure, including the United Kingdom\'s National Health Service (NHS), shipping giants, and railway networks.</p>
        <p>WannaCry used the "EternalBlue" exploit, a leaked NSA-developed vulnerability targeting old, unpatched versions of Microsoft's Server Message Block (SMBv1) protocol, enabling the ransomware to spread automatically like a worm across networks without any human interaction.</p>
      </div>
    `,
    warningSigns: [
      'Rapid encrypting of internal network shares and local database files with a <code>.WNCRY</code> extension.',
      'Sudden system popups demanding Bitcoin payments with countdown timers to avoid file destruction.'
    ],
    examples: [
      'A hospital computer in the NHS becomes infected, rapidly spreading the malware across the local network, locking doctors out of patient records and forcing ambulance diversions.'
    ],
    preventionTips: [
      'Disable outdated, insecure communication protocols like SMBv1 and apply security patches instantly.',
      'Maintain offline, immutable backups of critical data that are completely disconnected from your main production network.'
    ],
    reportingGuidance: 'Alert your national computer emergency response team (CERT) and coordinate isolated system restorations.'
  },

  // 4. Carbanak Bank Theft (2014)
  {
    id: 'carbanak-bank-theft',
    title: 'The Carbanak ATM Jackpotting Campaigns (2014)',
    category: 'Real Hacking Story',
    iconName: 'landmark',
    overview: `
      <div class="article-rich-content">
        <h3>The $1 Billion Silent Banking Infiltration</h3>
        <p>Carbanak was an incredibly stealthy cyber-heist targeting over 100 financial institutions worldwide. Instead of targeting individual banking customers, the attackers sent targeted phishing emails (spear-phishing) to bank employees, gaining access to internal systems.</p>
        <p>They monitored administrative screens for months, recording video of how employees worked. Once they understood the banking routines, they took control of ATMs, ordering them to dispense cash at specific physical locations where mules were waiting to collect it.</p>
      </div>
    `,
    warningSigns: [
      'Unusual administrative remote logins on domain controller networks during late-night hours.',
      'ATMs dispensing large sums of cash without any recorded card insertion or local transaction logs.'
    ],
    examples: [
      'The gang programmed ATMs to cash-out on a strict schedule, allowing physical couriers to simply walk up and scoop the money without touching the machine.'
    ],
    preventionTips: [
      'Implement strict endpoint detection and response (EDR) software on all internal workstations.',
      'Establish dual-authorization protocols for any command that triggers physical hardware actions on ATM endpoints.'
    ],
    reportingGuidance: 'Report internal network compromises immediately to financial regulators and state cyber investigation bodies.'
  },

  // 5. Mt. Gox Bitcoin Exchange Hack (2014)
  {
    id: 'mt-gox-crypto-hack',
    title: 'The Mt. Gox Cryptocurrency Collapse (2014)',
    category: 'Real Hacking Story',
    iconName: 'coins',
    overview: `
      <div class="article-rich-content">
        <h3>The Theft of 850,000 Bitcoins</h3>
        <p>At its peak, Tokyo-based Mt. Gox handled over 70% of all global Bitcoin transactions. In early 2014, the exchange abruptly suspended trading, filed for bankruptcy, and announced that 850,000 Bitcoins (worth nearly $450 million at the time, and billions today) had been stolen from its hot wallet.</p>
        <p>Investigations revealed that the exchange\'s hot wallet private keys had been stolen as early as 2011. The hackers drained funds gradually over three years, exploiting poor wallet isolation and lack of multi-signature security controls.</p>
      </div>
    `,
    warningSigns: [
      'Persistent wallet balance discrepancies and delays in processing customer BTC withdrawals.',
      'Insecure use of standard unencrypted hot wallets containing high values of digital assets.'
    ],
    examples: [
      'Hackers compromised a wallet private key file and repeatedly swept incoming customer deposits to external wallets over several years without triggering alarms.'
    ],
    preventionTips: [
      'Secure exchange assets primarily in multi-signature cold storage wallets that remain completely offline.',
      'Run continuous real-time transaction reconciliation audits between database values and block ledger records.'
    ],
    reportingGuidance: 'Report security incidents immediately to national financial regulators and coordinate blockchain-tracking efforts.'
  },

  // 6. Equifax Data Breach (2017)
  {
    id: 'equifax-data-breach',
    title: 'The Equifax Corporate Data Breach (2017)',
    category: 'Real Hacking Story',
    iconName: 'user-x',
    overview: `
      <div class="article-rich-content">
        <h3>The Unpatched Apache Struts Vulnerability</h3>
        <p>In September 2017, Equifax, one of the world\'s largest credit reporting agencies, announced a massive data breach affecting 147 million consumers. Stolen data included names, Social Security numbers, birth dates, addresses, and credit card numbers.</p>
        <p>The attackers breached Equifax through an unpatched web application vulnerability in the Apache Struts framework. Although a patch for the vulnerability had been released months prior, Equifax failed to identify and update the vulnerable system in time.</p>
      </div>
    `,
    warningSigns: [
      'High volumes of outbound database queries originating from public-facing web servers.',
      'Unusual, unencrypted SQL query strings passed via web application forms.'
    ],
    examples: [
      'Attackers executed a public remote code execution vulnerability, gained command access to web hosts, and slowly extracted database records over 76 days.'
    ],
    preventionTips: [
      'Maintain an active, automated software inventory and patch management cycle for all public web libraries.',
      'Enforce deep database encryption and strict access limits between public web servers and core databases.'
    ],
    reportingGuidance: 'Disclose customer data breaches transparently and report findings to data protection commissioners.'
  },

  // 7. SolarWinds Supply Chain Attack (2020)
  {
    id: 'solarwinds-supply-chain-attack',
    title: 'The SolarWinds Orion Supply Chain Hack (2020)',
    category: 'Real Hacking Story',
    iconName: 'cpu',
    overview: `
      <div class="article-rich-content">
        <h3>The SUNBURST Backdoor Build Compromise</h3>
        <p>In 2020, security firm FireEye discovered a highly sophisticated, nation-state cyber-espionage campaign that exploited SolarWinds, an enterprise IT management software provider. The attackers did not target the victims directly; instead, they compromised the build system of SolarWinds\' Orion platform.</p>
        <p>They inserted a covert backdoor named "SUNBURST" into official software updates. When SolarWinds distributed these verified, digitally signed updates to its clients, over 18,000 public and private organizations—including US government agencies—installed the malware.</p>
      </div>
    `,
    warningSigns: [
      'Security tools executing unusual outbound internet queries shortly after a major software update.',
      'Unknown, unsigned binaries executing inside secure application directory folders.'
    ],
    examples: [
      'The malware slept for up to two weeks before contacting control servers, mimicking normal application traffic to evade signature detection.'
    ],
    preventionTips: [
      'Implement deep software bill of materials (SBOM) scanning and code integrity validation in build pipelines.',
      'Use highly restricted egress network filtering to block corporate management platforms from calling out to arbitrary internet IPs.'
    ],
    reportingGuidance: 'Coordinate immediately with international threat intelligence agencies and implement multi-stage software isolation.'
  },

  // 8. Yahoo Security Breaches (2013-2014)
  {
    id: 'yahoo-data-breaches',
    title: 'The Yahoo Database & Session Breaches (2013-14)',
    category: 'Real Hacking Story',
    iconName: 'database',
    overview: `
      <div class="article-rich-content">
        <h3>3 Billion User Accounts Exposed</h3>
        <p>Yahoo suffered the largest recorded data breaches in history, affecting all 3 billion of its active user accounts. In 2013 and 2014, state-sponsored attackers breached Yahoo\'s user database, stealing encrypted passwords, security questions, and telephone numbers.</p>
        <p>Furthermore, the attackers stole Yahoo\'s proprietary source code, which allowed them to forge web browser cookies. This allowed them to access specific user accounts without needing passwords, bypassing authentication layers entirely.</p>
      </div>
    `,
    warningSigns: [
      'Unusual session cookies matching high-value accounts being used from unexpected geographic locations.',
      'Suspicious database access patterns by accounts with high privileges.'
    ],
    examples: [
      'Attackers forged cookies to access the inboxes of political targets, completely bypassing two-factor authentication (2FA).'
    ],
    preventionTips: [
      'Implement secure, modern cryptographic hashing algorithms (like Argon2 or bcrypt) for all database credentials.',
      'Rotate signing keys for user session cookies frequently and implement strict contextual session validation.'
    ],
    reportingGuidance: 'Mandate immediate global password resets and session terminations for all active accounts during a breach.'
  },

  // 9. Target Corporation Retail Hack (2013)
  {
    id: 'target-retail-hack',
    title: 'The Target Retail Point-of-Sale Hack (2013)',
    category: 'Real Hacking Story',
    iconName: 'credit-card',
    overview: `
      <div class="article-rich-content">
        <h3>The HVAC Vendor Credential Entryway</h3>
        <p>During the 2013 holiday shopping season, retail giant Target fell victim to a massive data breach that compromised 40 million credit and debit card records, alongside personal data for 70 million customers. The breach cost the company over $185 million in settlement fees.</p>
        <p>The entry point was not Target's main corporate network, but rather a third-party heating, ventilation, and air conditioning (HVAC) vendor. Attackers stole the vendor\'s network credentials via a phishing email, and used those credentials to log into Target\'s vendor portal, finding a pathway to the main billing network and Point-of-Sale (POS) cash registers.</p>
      </div>
    `,
    warningSigns: [
      'Unusual network traffic crossing over between non-critical facility portals (HVAC) and sensitive payment zones.',
      'Point-of-sale memory scraping logs showing unauthorized RAM reads.'
    ],
    examples: [
      'Attackers uploaded custom malware directly onto POS terminals, scraping customer credit card tracks in real-time as they were swiped.'
    ],
    preventionTips: [
      'Strictly segregate networks; third-party portals must never have access to internal payment processing segments.',
      'Deploy end-to-end encryption (P2PE) on all payment terminals so card data is never unencrypted in memory.'
    ],
    reportingGuidance: 'Enforce immediate lockdown of affected billing terminals and notify payment networks.'
  },

  // 10. Sony Pictures Cyberattack (2014)
  {
    id: 'sony-pictures-cyberattack',
    title: 'The Sony Pictures Corporate Destructive Attack (2014)',
    category: 'Real Hacking Story',
    iconName: 'monitor',
    overview: `
      <div class="article-rich-content">
        <h3>The "Guardians of Peace" Wiper Intrusion</h3>
        <p>In November 2014, a hacker group calling themselves the "Guardians of Peace" breached the internal network of Sony Pictures Entertainment. Rather than silently stealing data, they deployed highly destructive "wiper" malware that erased entire data centers, rendering computers useless.</p>
        <p>The attackers leaked private corporate emails, executive salaries, and unreleased movies online. The attack was reportedly launched in retaliation for Sony's upcoming satirical movie "The Interview."</p>
      </div>
    `,
    warningSigns: [
      'Sudden local network slowdowns accompanied by critical files failing to read or disappearing from corporate shares.',
      'Workstation screens showing skeletal graphics with demands to cancel movie releases.'
    ],
    examples: [
      'The wiper malware overwrote master boot records (MBR) on thousands of corporate computers, completely stopping all studio operations.'
    ],
    preventionTips: [
      'Implement strict application whitelisting to block unauthorized binaries from executing on employee computers.',
      'Perform regular disaster recovery simulations and keep immutable, off-site system images.'
    ],
    reportingGuidance: 'Formally report large-scale destructive attacks to federal law enforcement and national security agencies.'
  },

  // 11. Colonial Pipeline Ransomware (2021)
  {
    id: 'colonial-pipeline-ransomware',
    title: 'The Colonial Pipeline Fuel Disruption (2021)',
    category: 'Real Hacking Story',
    iconName: 'shield-alert',
    overview: `
      <div class="article-rich-content">
        <h3>The Single Leaked VPN Password Catastrophe</h3>
        <p>In May 2021, Colonial Pipeline, the largest refined fuel pipeline operator in the United States, suffered a devastating ransomware attack by the DarkSide cybercrime gang. To contain the spread of the ransomware, the company shut down its massive fuel pipeline for six days, causing fuel shortages and panic buying across the East Coast.</p>
        <p>The entry point was a single, old Virtual Private Network (VPN) account password that was found on a leaked dark web forum. The account did not have multi-factor authentication (MFA) enabled, allowing attackers to log in unchallenged.</p>
      </div>
    `,
    warningSigns: [
      'Unusual VPN connections originating from overseas IP ranges using inactive employee accounts.',
      'Encryption messages appearing on internal financial billing and customer portal servers.'
    ],
    examples: [
      'Although the operational pipeline control systems were uninfected, the company shut them down because their billing systems were locked.'
    ],
    preventionTips: [
      'Enforce multi-factor authentication (MFA) across all remote access ports and corporate entryways without exception.',
      'Deactivate inactive user profiles and conduct continuous audits of external-facing corporate portals.'
    ],
    reportingGuidance: 'Report infrastructure cyber attacks instantly to national security and infrastructure protection units.'
  },

  // 12. Ashley Madison Data Leak (2015)
  {
    id: 'ashley-madison-leak',
    title: 'The Ashley Madison Data Leak Scandal (2015)',
    category: 'Real Hacking Story',
    iconName: 'user-x',
    overview: `
      <div class="article-rich-content">
        <h3>The "Impact Team" Extortion Campaign</h3>
        <p>In 2015, a hacker collective calling themselves the "Impact Team" breached Ashley Madison, a dating website marketed for extramarital affairs. The hackers demanded that the parent company shut down the site permanently, citing fraudulent billing practices and fake profiles.</p>
        <p>When the parent company refused, the hackers leaked over 25 gigabytes of user data, exposing names, email addresses, credit card transactions, and private messages for over 32 million users, resulting in global humiliation, blackmail, and public divorces.</p>
      </div>
    `,
    warningSigns: [
      'Corporate blackmail messages threatening major data dumps unless specific business actions are taken.',
      'Mass extraction logs of sensitive user database registries over standard HTTPS ports.'
    ],
    examples: [
      'The hackers proved they had full control by leaking a small batch of high-profile user profiles before dumping the entire SQL database.'
    ],
    preventionTips: [
      'Minimally collect personal identifier data and purge user history logs regularly when no longer legally required.',
      'Encrypt highly sensitive databases at-rest with advanced column-level encryption.'
    ],
    reportingGuidance: 'Initiate critical security incident responses and offer comprehensive support for affected users.'
  },

  // 13. Capital One Cloud SSRF Hack (2019)
  {
    id: 'capital-one-ssrf-breach',
    title: 'The Capital One Cloud SSRF Breach (2019)',
    category: 'Real Hacking Story',
    iconName: 'shield-off',
    overview: `
      <div class="article-rich-content">
        <h3>The Server-Side Request Forgery Exploit</h3>
        <p>In 2019, a former cloud software engineer exploited a misconfigured Web Application Firewall (WAF) protecting Capital One's cloud servers. The hacker executed a Server-Side Request Forgery (SSRF) attack, tricking the vulnerable WAF into requesting highly sensitive access credentials from the cloud metadata service.</p>
        <p>Using these credentials, the attacker accessed 140,000 Social Security numbers, 80,000 bank account numbers, and credit card records for over 100 million customers stored on cloud buckets.</p>
      </div>
    `,
    warningSigns: [
      'Web application firewall profiles permitting arbitrary outbound requests to cloud metadata IPs (e.g., <code>169.254.169.254</code>).',
      'High volumes of storage bucket listing commands originating from web server roles.'
    ],
    examples: [
      'The hacker leveraged SSRF to obtain temporary cloud IAM keys and ran command-line tools to list and sync entire database backup folders.'
    ],
    preventionTips: [
      'Block all direct access from application containers to the cloud instance metadata endpoint using firewall rules.',
      'Enforce least-privilege cloud IAM roles so web hosts cannot read core storage backends.'
    ],
    reportingGuidance: 'Implement cloud-monitoring alerts for bulk data downloads and inform federal cybersecurity units.'
  },

  // 14. Twitter VIP Account Phishing Takeover (2020)
  {
    id: 'twitter-vip-account-hijacking',
    title: 'The Twitter VIP Account Phishing Takeover (2020)',
    category: 'Real Hacking Story',
    iconName: 'smartphone',
    overview: `
      <div class="article-rich-content">
        <h3>The Internal Support Tool Phone Phishing</h3>
        <p>In July 2020, the Twitter accounts of high-profile individuals—including Barack Obama, Elon Musk, Bill Gates, and Apple—were hijacked simultaneously. The hijacked accounts tweeted a classic Bitcoin double-your-money scam, netting the hackers over $110,000 in minutes.</p>
        <p>The attackers succeeded not by finding software bugs, but by calling Twitter employees on the phone (spear-phishing), pretending to be from Twitter\'s IT department. They directed employees to log into a fake VPN portal, capturing credentials and gaining access to internal administrative tools.</p>
      </div>
    `,
    warningSigns: [
      'Unsolicited calls from "internal helpdesk staff" asking you to log into unverified corporate portals.',
      'Internal admin accounts modifying passwords and email addresses of verified public figures in rapid succession.'
    ],
    examples: [
      'The young hackers changed account ownership settings via the internal Twitter admin panel, bypassing security checks entirely.'
    ],
    preventionTips: [
      'Train employees to verify internal IT team calls using official communication platforms (e.g., Slack or internal messaging).',
      'Implement strict approval steps and secondary review before modifying high-profile user profiles.'
    ],
    reportingGuidance: 'Report spear-phishing calls to internal security operations and suspend compromised accounts instantly.'
  },

  // 15. Uber MFA Fatigue Hack (2022)
  {
    id: 'uber-mfa-fatigue-hack',
    title: 'The Uber MFA Fatigue & Social Engineering Hack (2022)',
    category: 'Real Hacking Story',
    iconName: 'user-x',
    overview: `
      <div class="article-rich-content">
        <h3>The Multi-Factor Authentication Exhaustion</h3>
        <p>In September 2022, an 18-year-old hacker successfully breached Uber\'s internal network, gaining access to their cloud infrastructure, source code, and Slack workspace. The entry point was an external contractor\'s credentials, likely purchased on the dark web.</p>
        <p>When the hacker tried to log in, the contractor\'s phone kept buzzing with multi-factor authentication (MFA) requests. The hacker sent WhatsApp messages pretending to be Uber IT support, telling the contractor to accept the notification to stop the alerts. Out of exhaustion, the contractor clicked "Approve."</p>
      </div>
    `,
    warningSigns: [
      'Receiving multiple, persistent multi-factor authentication (MFA) push notifications on your phone you did not trigger.',
      'Unsolicited WhatsApp or SMS support messages demanding you approve security popups.'
    ],
    examples: [
      'The contractor accepted the push notification after getting bombarded with MFA requests for hours, granting the attacker access.'
    ],
    preventionTips: [
      'Transition from basic MFA push notifications to secure, number-matching MFA or hardware keys (FIDO2).',
      'Never approve MFA prompts unless you are actively attempting to log into a corporate terminal.'
    ],
    reportingGuidance: 'Report persistent MFA spam immediately to your corporate IT security team as a critical incident.'
  },

  // 16. Twitch Source Code Leak (2021)
  {
    id: 'twitch-source-code-leak',
    title: 'The Twitch Source Code & Earnings Dump (2021)',
    category: 'Real Hacking Story',
    iconName: 'code',
    overview: `
      <div class="article-rich-content">
        <h3>The 125GB Misconfigured Git Repository Leak</h3>
        <p>In October 2021, an anonymous hacker leaked a massive 125-gigabyte torrent containing Twitch\'s entire source code, proprietary build frameworks, internal testing tools, and years of payouts to top streamers. The hacker claimed the leak was intended to "disrupt and create competition."</p>
        <p>The leak occurred due to a major server configuration error that exposed internal Git repositories directly to the public internet, allowing the attacker to clone Twitch's entire development history.</p>
      </div>
    `,
    warningSigns: [
      'Public access permitted to sensitive version control directories (like <code>.git</code>) on production servers.',
      'Unencrypted API keys and developer passwords committed directly inside version control code repositories.'
    ],
    examples: [
      'The leaked data revealed secret, unreleased digital game store plans and detailed payout lists for Twitch streamers.'
    ],
    preventionTips: [
      'Regularly run automated tools (like GitGuardian or Trufflehog) to scan repositories for hardcoded API keys and secrets.',
      'Ensure strict network configuration and block external public access to build systems and code repositories.'
    ],
    reportingGuidance: 'Immediately revoke any hardcoded secrets exposed in leaked code repositories and rebuild infrastructure.'
  },

  // 17. The Mirai Botnet DDoS Attack (2016)
  {
    id: 'mirai-botnet-ddos',
    title: 'The Mirai IoT Botnet Network Attack (2016)',
    category: 'Real Hacking Story',
    iconName: 'wifi',
    overview: `
      <div class="article-rich-content">
        <h3>The Army of Compromised Webcams & Routers</h3>
        <p>In late 2016, a massive Distributed Denial of Service (DDoS) attack crippled major websites—including Twitter, Netflix, and Reddit—by knocking out Dyn, a major DNS provider. The attack was launched by Mirai, a botnet composed of hundreds of thousands of infected smart devices.</p>
        <p>Mirai spread automatically across the internet by scanning for Internet of Things (IoT) devices—such as security cameras, routers, and baby monitors—that still used factory-default telnet username and password settings.</p>
      </div>
    `,
    warningSigns: [
      'Smart home devices performing poorly, overheating, or generating high volumes of background network traffic.',
      'Repeated external connection requests on old port protocols like Telnet (23) or SSH (22).'
    ],
    examples: [
      'Mirai used simple lists of 60 common default manufacturer passwords to compromise and gain root control of cameras in seconds.'
    ],
    preventionTips: [
      'Change factory-default passwords on all smart devices and routers immediately upon installation.',
      'Disable Telnet, SSH, and external WAN management options on consumer routers unless explicitly required.'
    ],
    reportingGuidance: 'Isolate compromised IoT endpoints and flash their firmware with secure, updated software.'
  },

  // 18. Heartland Payment Systems Hack (2008)
  {
    id: 'heartland-payment-hack',
    title: 'The Heartland Payment SQL Injection Breach (2008)',
    category: 'Real Hacking Story',
    iconName: 'credit-card',
    overview: `
      <div class="article-rich-content">
        <h3>The SQLi Leading to 130 Million Card Thefts</h3>
        <p>In 2008, Heartland Payment Systems, one of the largest credit card processors in the United States, suffered a catastrophic security breach that compromised over 130 million credit card numbers, costing the company over $140 million in damages.</p>
        <p>The attackers gained their initial foothold using a classic SQL Injection (SQLi) vulnerability on a public corporate web portal. They leveraged this web access to move laterally across internal networks and install keyloggers and malware directly on core payment processing servers.</p>
      </div>
    `,
    warningSigns: [
      'Web input fields permitting raw SQL code characters (like single quotes) without standard sanitization.',
      'Unusual, automated data exports from payment processing servers to unknown external IPs.'
    ],
    examples: [
      'Hackers installed silent sniffer software that captured unencrypted magnetic stripe tracks as they passed through processing servers.'
    ],
    preventionTips: [
      'Validate, sanitize, and strictly parameterize all inputs in web applications to completely eliminate SQL Injection risks.',
      'Encrypt card transaction data immediately at the terminal level and keep it encrypted through the entire network lifecycle.'
    ],
    reportingGuidance: 'Report SQL database and transaction irregularities to payment card industry (PCI) compliance units.'
  },

  // 19. Pegasus Spyware Exploits (2021)
  {
    id: 'pegasus-spyware-incidents',
    title: 'The Pegasus Zero-Click Mobile Surveillance (2021)',
    category: 'Real Hacking Story',
    iconName: 'smartphone',
    overview: `
      <div class="article-rich-content">
        <h3>The Hidden Zero-Click Messaging Exploits</h3>
        <p>Pegasus is an incredibly advanced, military-grade spyware suite developed by NSO Group. In 2021, collaborative investigations revealed the software was being used to compromise the mobile phones of journalists, human rights defenders, and world leaders.</p>
        <p>Pegasus stood out because of its "zero-click" exploit delivery. Victims did not have to click any malicious link; the spyware infected target devices silently through unpatched vulnerabilities in messaging apps like iMessage or WhatsApp, gaining total access to microphones, cameras, emails, and passwords.</p>
      </div>
    `,
    warningSigns: [
      'Excessive background mobile battery drain and high, unexplained mobile data consumption.',
      'Unusual system logs showing background system file modifications on iOS or Android devices.'
    ],
    examples: [
      'An iPhone is infected silently via a custom-crafted GIF image sent through iMessage, executing code and installing spyware in the background.'
    ],
    preventionTips: [
      'Keep your mobile operating systems and apps patched to the absolute latest version immediately.',
      'Enable security features like Apple\'s "Lockdown Mode" if you are in a high-risk profession (journalism, politics).'
    ],
    reportingGuidance: 'If your device is suspected of advanced state-sponsored infection, contact professional cybersecurity forensic labs for audit.'
  },

  // 20. Ronin Network Web3 Phishing Hack (2022)
  {
    id: 'ronin-network-web3-hack',
    title: 'The Ronin Network Web3 Validator Compromise (2022)',
    category: 'Real Hacking Story',
    iconName: 'coins',
    overview: `
      <div class="article-rich-content">
        <h3>The $620 Million Fake PDF Job Offer Phishing</h3>
        <p>In March 2022, the Ronin Network, a blockchain bridging platform used by the popular play-to-earn game Axie Infinity, suffered a historic $620 million cryptocurrency heist—the largest decentralized finance (DeFi) hack in history.</p>
        <p>The attackers compromised five of the nine validator nodes required to approve transactions. They achieved this by creating a highly sophisticated fake job recruitment scheme on LinkedIn, targeting a senior developer at the firm. They sent a malicious PDF document containing a hidden Trojan horse during a fake interview, which compromised the developer's computer and gave attackers access to the private validator keys.</p>
      </div>
    `,
    warningSigns: [
      'Job recruiters on social platforms urging you to download and open PDF files or software outside standard portals.',
      'Unauthorized multi-signature transaction approvals appearing on blockchain validator logs.'
    ],
    examples: [
      'The developer opened the malicious "job offer" PDF on a company computer, granting the hackers remote access to internal network nodes.'
    ],
    preventionTips: [
      'Strictly inspect and open unsolicited files or job applications inside isolated virtual sandboxes.',
      'Distribute validator keys across independent, physically separated organizations to prevent single points of failure.'
    ],
    reportingGuidance: 'Report block activity anomalies to validator networks and alert international blockchain tracking teams.'
  },

  // 21. AI Deepfake Live Video Call & Face Swapping Fraud
  {
    id: 'ai-deepfake-video-calls',
    title: 'AI Deepfake Live Video Call & Face Swapping Fraud',
    category: 'Urgent Threats',
    iconName: 'cpu',
    overview: `
      <div class="article-rich-content">
        <h3>1. Real-Time Generative Video Swapping</h3>
        <p>Generative AI now allows cybercriminals to manipulate live video feeds during Zoom calls, WhatsApp video chats, or video KYC verification sessions. Scammers construct synthetic digital avatars using stolen photos and videos of corporate executives, public figures, or family members.</p>
        <p>In high-profile corporate attacks, attackers join live video conferences posing as CFOs or regional directors, directing accounting staff to execute unauthorized multi-million dollar wire transfers.</p>

        <h3>2. Key Indicators of Deepfake Video Feeds</h3>
        <ul>
          <li>Unnatural blinking patterns, rigid neck movements, or blurring around hair and chin edges.</li>
          <li>Distortion when the caller turns their head sideways or places a hand in front of their face.</li>
          <li>Audio-video lip synchronization lag during conversation.</li>
        </ul>
      </div>
    `,
    warningSigns: [
      'Unusual financial transfer orders requested during an unexpected video conference call.',
      'Visual artifacts, glitching skin textures, or unnatural facial lighting on screen.'
    ],
    examples: [
      'A finance manager transfers $25 Million after attending a video conference where all other participants were deepfake avatars of company executives.'
    ],
    preventionTips: [
      'Ask the caller to turn their head sideways or touch their cheek to break AI face-mesh tracking.',
      'Always verify high-value payment instructions through secondary verified communication channels.'
    ],
    reportingGuidance: 'Report deepfake corporate fraud immediately to law enforcement, NCCIA, and corporate security officers.'
  },

  // 22. Malicious Browser Extensions & Infostealer Plugins
  {
    id: 'malicious-browser-extensions',
    title: 'Malicious Browser Extensions & Infostealer Plugins',
    category: 'Urgent Threats',
    iconName: 'monitor',
    overview: `
      <div class="article-rich-content">
        <h3>1. The Threat of Rogue Browser Add-Ons</h3>
        <p>Browser extensions offering free VPNs, ad-blockers, PDF converters, or ChatGPT helpers frequently get sold to malicious developers or updated with hidden infostealer scripts. Once installed in Chrome, Edge, or Firefox, these plugins quietly log every keystroke, capture active session cookies, and steal saved passwords.</p>
        <p>By capturing session cookies, attackers bypass Two-Factor Authentication (2FA) entirely, hijacking social media, banking, and crypto exchange accounts.</p>
      </div>
    `,
    warningSigns: [
      'Extensions requesting permissions to "Read and change all your data on all websites".',
      'Sudden browser popups, unwanted search engine redirects, or rapid battery drain.'
    ],
    examples: [
      'A user installs a free "PDF Converter" extension that silently exfiltrates session cookies, giving hackers access to their Facebook Business Manager account.'
    ],
    preventionTips: [
      'Audit browser extensions monthly and remove unused plugins.',
      'Only install extensions from developer accounts with verified reviews and high user counts.'
    ],
    reportingGuidance: 'Remove the extension, clear browser cookies/cache, change account passwords, and revoke active login sessions.'
  },

  // 23. ATM Skimming & Hardware Shimmering Fraud
  {
    id: 'atm-skimming-shimmering-fraud',
    title: 'ATM Skimming & Hardware Shimmering Fraud',
    category: 'Financial Fraud',
    iconName: 'trending-up',
    overview: `
      <div class="article-rich-content">
        <h3>1. Hardware Interception at Cash Machines</h3>
        <p>ATM Skimming involves physical devices installed over card insertion slots on ATMs to read magnetic stripe data, while hidden pinhole cameras capture PIN entries. Newer "Shimmers" are ultra-thin microchip readers inserted inside the card slot to intercept EMV chip communication.</p>

        <h3>2. How to Inspect ATMs Before Use</h3>
        <ul>
          <li><strong>Check for Loose Parts:</strong> Lightly wiggle the card reader slot, keypad, and overhead plastic covers before inserting your card.</li>
          <li><strong>Cover the Keypad:</strong> Always shield the PIN keypad with your hand when entering your secret code.</li>
        </ul>
      </div>
    `,
    warningSigns: [
      'A card slot that feels loose, bulky, or misaligned with the ATM body.',
      'Keypads that feel unusually thick or raised above the surface.'
    ],
    examples: [
      'A customer uses an ATM with a hidden micro-camera installed. Scammers clone the card magnetic stripe and drain Rs. 50,000 using the captured PIN.'
    ],
    preventionTips: [
      'Prefer ATMs located inside bank branches under active security guard supervision.',
      'Enable contactless (NFC) tap payments or bank mobile withdrawal options whenever available.'
    ],
    reportingGuidance: 'Report tampered ATMs to bank security immediately and temporarily block your debit card via mobile app.'
  },

  // 24. Merchant QR Code Sticker Tampering & Quishing
  {
    id: 'quishing-tampered-standees',
    title: 'Merchant QR Code Sticker Tampering & Quishing',
    category: 'Financial Fraud',
    iconName: 'qr-code',
    overview: `
      <div class="article-rich-content">
        <h3>1. Understanding QR Code Quishing</h3>
        <p>"Quishing" is phishing conducted via QR codes. Scammers paste sticker overlays of their own fraudulent Raast or mobile wallet QR codes over legitimate merchant payment standees at fuel stations, shops, or restaurants.</p>
        <p>When customers scan the QR code to pay for goods, funds are directed to the fraudster's account instead of the shopkeeper.</p>
      </div>
    `,
    warningSigns: [
      'Beneficiary account name on mobile banking screen does not match the merchant store name.',
      'A raised sticker visibly pasted over a shop\'s original acrylic standee board.'
    ],
    examples: [
      'A driver at a petrol pump scans a tampered QR sticker pasted over the dispenser standee and unknowingly transfers payment to a personal scammer wallet.'
    ],
    preventionTips: [
      'Always confirm the beneficiary account title with the shopkeeper before authorizing payment.',
      'Report peeling or suspicious QR stickers to shop owners.'
    ],
    reportingGuidance: 'Inform the merchant immediately and lodge transaction fraud alerts with your mobile wallet support.'
  },

  // 25. Smart Camera & IoT Device Hijacking
  {
    id: 'smart-home-iot-hijack',
    title: 'Smart Camera & IoT Device Hijacking (Default Passwords)',
    category: 'Digital Integrity',
    iconName: 'shield',
    overview: `
      <div class="article-rich-content">
        <h3>1. Exposed Home Security Cameras</h3>
        <p>Smart home security cameras, Wi-Fi baby monitors, and network video recorders (NVRs) installed in homes and offices are frequently deployed with factory default login credentials (e.g., admin/admin or admin/12345).</p>
        <p>Automated IoT search engines crawl public IP spaces to locate unpassworded camera feeds, allowing strangers to spy on private indoor rooms or live stream footage online.</p>
      </div>
    `,
    warningSigns: [
      'Smart camera LED indicator light turning on or panning without user interaction.',
      'Unexpected voice sounds coming from two-way camera speakers.'
    ],
    examples: [
      'A family installs indoor security cameras but leaves the factory admin password active. The stream is exposed on an online camera portal.'
    ],
    preventionTips: [
      'Change default passwords on all camera devices immediately upon installation.',
      'Update device firmware regularly and disable Universal Plug and Play (UPnP) on home routers.'
    ],
    reportingGuidance: 'Disconnect compromised cameras from the internet, update credentials, and reset device firmware.'
  },

  // 26. Cash on Delivery (COD) Empty Parcel Scam
  {
    id: 'cod-empty-parcel-scams',
    title: 'Cash on Delivery (COD) Empty Parcel & Junk Delivery Scam',
    category: 'Online Earning',
    iconName: 'package',
    overview: `
      <div class="article-rich-content">
        <h3>1. Anatomy of the COD Parcel Fraud</h3>
        <p>Scammers obtain leaked customer order data from compromised delivery databases. They dispatch Cash-on-Delivery (COD) packages via local courier services containing cheap items like rocks, paper scrap, or broken plastic valued at Rs. 2,000 to Rs. 5,000.</p>
        <p>Couriers deliver the package when the primary buyer is away from home. Family members assume someone ordered the item and pay cash to the rider. Upon opening, they discover garbage inside.</p>
      </div>
    `,
    warningSigns: [
      'Arrival of a COD courier parcel that no one in the household recalls ordering.',
      'Lack of sender store details or return address on the courier flyer tag.'
    ],
    examples: [
      'A rider delivers a COD parcel worth Rs. 3,500 to a home. The mother pays cash thinking her son ordered shoes, but the box contained discarded plastic.'
    ],
    preventionTips: [
      'Instruct household members never to accept COD parcels unless verified with the buyer.',
      'Cross-check tracking numbers on your active online order apps before paying cash.'
    ],
    reportingGuidance: 'Refuse delivery immediately or contact courier customer care within 24 hours to hold payment dispatch.'
  },

  // 27. Telegram Micro-Task & Rating Scams
  {
    id: 'micro-task-telegram-scams',
    title: 'Telegram YouTube Rating & Micro-Task Earning Frauds',
    category: 'Online Earning',
    iconName: 'dollar-sign',
    overview: `
      <div class="article-rich-content">
        <h3>1. The "Like Videos & Earn Cash" Scam</h3>
        <p>Victims receive unsolicited WhatsApp or Telegram messages inviting them to earn Rs. 3,000 to Rs. 10,000 daily by simply liking YouTube videos, subscribing to channels, or rating Google Maps locations.</p>
        <p>For the first few tasks, scammers pay small bonuses (Rs. 500) directly to the victim\'s wallet to build trust. Then, they invite the victim to "Prepaid Tasks", requiring them to deposit Rs. 20,000 to unlock higher task payouts. Once money is deposited, scammers lock the group and steal the funds.</p>
      </div>
    `,
    warningSigns: [
      'Offers of high daily income for basic social media clicks or video likes.',
      'Requirements to pay "activation fees" or "prepaid task funds" to withdraw earned money.',
      'Communication strictly limited to Telegram channels and anonymous admins.'
    ],
    examples: [
      'A student receives Rs. 1,000 for liking 3 videos, then deposits Rs. 50,000 for a "VIP Earning Task" and is immediately removed from the Telegram group.'
    ],
    preventionTips: [
      'Legitimate companies do not pay high daily salaries for simple video likes.',
      'Never pay money upfront to get paid for work.'
    ],
    reportingGuidance: 'Block scam numbers, report Telegram channels, and submit transaction receipts to NCCIA.'
  },

  // 28. USB Charging Kiosk Data Theft (Juice Jacking)
  {
    id: 'usb-juice-jacking-kiosks',
    title: 'USB Charging Kiosk Data Theft (Juice Jacking)',
    category: 'Digital Integrity',
    iconName: 'wifi',
    overview: `
      <div class="article-rich-content">
        <h3>1. Hardware Juice Jacking Kiosks</h3>
        <p>When charging mobile devices at public USB stations in airports, railway stations, or hotel lobbies, compromised USB ports can transfer malware or steal photos and contacts while drawing power. Cybercriminals modify USB ports to establish an active data connection alongside charging.</p>
      </div>
    `,
    warningSigns: [
      'Connecting to a public USB charger triggers a "Trust this computer?" prompt on your phone screen.',
      'Unusual popup dialogs requesting device storage access upon plugging in.'
    ],
    examples: [
      'A traveler plugs into a public airport USB port and dismisses a host authorization popup, allowing background theft of saved personal photos.'
    ],
    preventionTips: [
      'Use a hardware "USB Data Blocker" adapter (USB condom) that disables data lines while allowing power flow.',
      'Charge using your own original AC wall adapter plugged into standard electrical sockets.'
    ],
    reportingGuidance: 'Report tampered charging stations to venue security and inspect device storage for unrecognized applications.'
  },

  // 29. Credential Stuffing & Account Takeover
  {
    id: 'credential-stuffing-protection',
    title: 'Password Reuse, Credential Stuffing & Account Takeover',
    category: 'Digital Integrity',
    iconName: 'key',
    overview: `
      <div class="article-rich-content">
        <h3>1. What is Credential Stuffing?</h3>
        <p>When a website suffers a database breach, hacker groups leak email-password combinations online. Cybercriminals use automated scripts to "stuff" millions of leaked credentials into popular banking, gaming, social media, and e-commerce login portals.</p>
        <p>Because over 60% of internet users reuse the exact same password across multiple websites, attackers easily gain unauthorized access to secondary accounts.</p>
      </div>
    `,
    warningSigns: [
      'Receiving password reset emails for accounts you did not request.',
      'Login notifications from unknown devices or locations.'
    ],
    examples: [
      'An email/password leaked from an old forum breach is used by automated tools to log into the victim\'s food delivery account, using saved credit cards.'
    ],
    preventionTips: [
      'Enable Two-Factor Authentication (2FA) on every critical service.',
      'Check if your email was in a breach on verified safety tools like HaveIBeenPwned.'
    ],
    reportingGuidance: 'Change passwords immediately across all accounts and revoke unauthorized device sessions.'
  },

  // 30. Cloud Storage Exposure & Misconfigurations
  {
    id: 'cloud-data-leak-protection',
    title: 'Cloud Storage Exposure & S3 Bucket Misconfigurations',
    category: 'Corporate Protection',
    iconName: 'cloud',
    overview: `
      <div class="article-rich-content">
        <h3>1. The Threat of Unsecured Cloud Storage</h3>
        <p>Organizations and startups migrating to AWS, Google Cloud, or Azure frequently leave cloud storage buckets, database backups, or API keys exposed to the public internet due to misconfigured permission policies.</p>
        <p>Automated threat scanners crawl the web 24/7 searching for open storage buckets, extracting database dumps containing customer CNIC records, phone numbers, and financial records.</p>
      </div>
    `,
    warningSigns: [
      'Public accessibility enabled on internal cloud storage buckets.',
      'API keys and cloud credentials committed to public GitHub repositories.'
    ],
    examples: [
      'A software agency uploads a database backup containing 500,000 user accounts to a public storage bucket, exposing full PII data.'
    ],
    preventionTips: [
      'Enforce strict "Block Public Access" policies on all cloud storage containers.',
      'Use secret scanning tools in Git pipelines to prevent credential commits.'
    ],
    reportingGuidance: 'Conduct security audits, restrict bucket permissions, and inform affected users in compliance with data privacy laws.'
  },

  // 31. Business Email Compromise (BEC) & Vendor Wire Fraud
  {
    id: 'business-email-compromise-bec',
    title: 'Business Email Compromise (BEC) & Vendor Wire Fraud',
    category: 'Corporate Protection',
    iconName: 'building',
    overview: `
      <div class="article-rich-content">
        <h3>1. How BEC Attacks Target Enterprises</h3>
        <p>Business Email Compromise (BEC) is a high-value scam targeting companies that conduct international wire transfers. Attackers hack into or spoof the email account of an executive, CEO, or key vendor.</p>
        <p>They monitor ongoing email conversations regarding pending supplier invoices. Right before payment is executed, the compromised email account intervenes, claiming "due to tax audits, please remit this invoice payment to our new updated overseas bank account."</p>
      </div>
    `,
    warningSigns: [
      'Sudden requests from existing vendors to update bank account details for wire transfers.',
      'Emails from company executives urging urgent offshore transfers with secrecy.',
      'Slight domain typos in vendor email addresses (e.g., <em>supplier-corp.com</em> vs <em>supplier--corp.com</em>).'
    ],
    examples: [
      'An import firm transfers $120,000 for raw materials to a fake bank account in Europe after receiving an altered invoice email from a compromised supplier account.'
    ],
    preventionTips: [
      'Always verify bank account change requests via a secondary out-of-band channel (phone call to known contact).',
      'Implement strict multi-level sign-off approvals for high-value corporate transfers.'
    ],
    reportingGuidance: 'Notify paying and receiving banks immediately to freeze funds, and file a report with NCCIA.'
  },

  // 32. Ransomware Encryption & Double Extortion Attacks
  {
    id: 'ransomware-extortion-defense',
    title: 'Ransomware Encryption & Double Extortion Corporate Threat',
    category: 'Corporate Protection',
    iconName: 'shield-alert',
    overview: `
      <div class="article-rich-content">
        <h3>1. Evolution of Modern Ransomware</h3>
        <p>Ransomware is malicious software that encrypts an organization\'s files, databases, and servers, making systems unusable. Modern ransomware groups practice "Double Extortion": they not only encrypt internal databases but also steal confidential files beforehand.</p>
        <p>If the target refuses to pay millions in crypto ransom, the attackers threaten to publish trade secrets, customer PII, and financial records on dark web leak portals.</p>
      </div>
    `,
    warningSigns: [
      'Unexpected server slowdowns and bulk file extension changes (e.g., <em>.locked</em>, <em>.crypto</em>).',
      'Ransom note text files appearing across server desktop folders.'
    ],
    examples: [
      'A hospital network is compromised via unpatched VPN software; ransomware encrypts patient records and demands $500,000 to provide a decryption key.'
    ],
    preventionTips: [
      'Maintain immutable, offline (air-gapped) multi-location backups.',
      'Deploy Endpoint Detection and Response (EDR) software across all enterprise endpoints.'
    ],
    reportingGuidance: 'Isolate infected systems immediately from the network and report corporate ransomware attacks to national CERT teams.'
  },

  // 33. Fake University Degree & Unaccredited Certification Scams
  {
    id: 'fake-degree-certification-scams',
    title: 'Fake University Degree & Unaccredited Certification Scams',
    category: 'Social Media',
    iconName: 'award',
    overview: `
      <div class="article-rich-content">
        <h3>1. Fake Diploma Mills & Verification Scams</h3>
        <p>Unaccredited "diploma mills" operate fake online university portals advertising instant Bachelor\'s, Master\'s, or PhD degrees based solely on "life experience" without classes or exams. They charge high fees for counterfeit degree certificates, transcripts, and fake verification websites.</p>
        <p>When candidates submit these fake degrees for job verification or attestation, they face criminal prosecution for document forgery under education regulatory laws.</p>
      </div>
    `,
    warningSigns: [
      'Websites offering university degrees within days without classes or examinations.',
      'Requests for payment via non-traceable money transfers.',
      'Lack of official accreditation from the Higher Education Commission (HEC).'
    ],
    examples: [
      'A job seeker pays $1,500 for an online "MBA degree" from a fake online university, only to have it flagged as fraudulent during HEC degree attestation.'
    ],
    preventionTips: [
      'Verify higher education institute recognition on the official HEC Pakistan portal.',
      'Avoid online academies that sell degrees without formal coursework.'
    ],
    reportingGuidance: 'Report fake degree sellers and diploma mills to HEC and NCCIA.'
  },

  // 34. Digital Signature & Corporate E-Seal Forgery
  {
    id: 'digital-signature-e-seal-forgery',
    title: 'Digital Signature & Corporate E-Seal Forgery',
    category: 'Corporate Protection',
    iconName: 'file-text',
    overview: `
      <div class="article-rich-content">
        <h3>1. Counterfeiting Digital Seals & PDF Certificates</h3>
        <p>Fraudsters forge corporate e-seals, digital PKI signature stamps, and official company letterheads to issue fake purchase orders, tenancy agreements, and vendor contracts.</p>
        <p>They place simple image graphics of signatures over PDF documents, tricking accounting departments into releasing goods or making vendor advance payments without validating the cryptographic signature chain.</p>
      </div>
    `,
    warningSigns: [
      'PDF signature panels showing "Signature Not Valid" or missing official PKI certificate authorities.',
      'Purchase orders sent from free public email addresses (@gmail.com) instead of corporate domains.'
    ],
    examples: [
      'A supplier dispatches goods worth Rs. 2 Million based on a PDF purchase order featuring a copy-pasted seal graphic, later discovering the company never issued the order.'
    ],
    preventionTips: [
      'Always inspect the cryptographic signature tree in Adobe Acrobat or official PDF readers.',
      'Verify high-value purchase orders with corporate procurement departments prior to dispatch.'
    ],
    reportingGuidance: 'Report corporate document forgery to legal advisors and law enforcement agencies.'
  },

  // 35. eSIM Hijacking & Mobile Carrier Takeover
  {
    id: 'esim-hijacking-protection',
    title: 'eSIM Hijacking & Mobile Carrier Account Takeover',
    category: 'Mobile Scams',
    iconName: 'smartphone',
    overview: `
      <div class="article-rich-content">
        <h3>1. How eSIM Hijacking Works</h3>
        <p>As telecom operators adopt digital eSIM technology, scammers use stolen identity documents or social engineering calls to mobile operator customer support to request an "eSIM upgrade" for a target\'s phone number.</p>
        <p>Once the scammer obtains the QR activation code, the victim\'s physical SIM card loses network signal immediately. The scammer\'s phone receives all incoming SMS OTPs for banking, WhatsApp, and email accounts.</p>
      </div>
    `,
    warningSigns: [
      'Your mobile phone suddenly displays "No Service" unexpectedly in an area with good coverage.',
      'Receiving an unexpected SMS or email confirming an eSIM conversion request.'
    ],
    examples: [
      'A scammer impersonates a customer via a fake CNIC copy, converts the victim\'s mobile number to an eSIM, and drains funds by receiving two-factor authentication codes.'
    ],
    preventionTips: [
      'Set up a PIN / Password protection with your telecom service provider for account changes.',
      'If your SIM loses signal unexpectedly, contact your telecom operator immediately.'
    ],
    reportingGuidance: 'Report unauthorized SIM transfers to your telecom operator and PTA immediately.'
  },

  // 36. Android Accessibility Service Exploits & Keyloggers
  {
    id: 'android-accessibility-malware',
    title: 'Android Accessibility Service Exploits & Keyloggers',
    category: 'Mobile Scams',
    iconName: 'download',
    overview: `
      <div class="article-rich-content">
        <h3>1. Exploiting Accessibility Privileges</h3>
        <p>Malicious Android apps trick users into enabling Android "Accessibility Services" under the guise of an auto-cleaner or battery saver tool. Once granted, the malware gains permission to tap the screen autonomously, read on-screen text, capture login credentials, and bypass Two-Factor Authentication prompts without user intervention.</p>
      </div>
    `,
    warningSigns: [
      'Unverified apps asking for "Accessibility" permission in Android settings.',
      'Phone performing unexpected taps or screen unlocks automatically.'
    ],
    examples: [
      'A battery saver app uses accessibility privileges to grant itself overlay rights and silently approve bank transfers.'
    ],
    preventionTips: [
      'Never grant Accessibility permissions to untrusted or non-essential applications.',
      'Regularly review Accessibility access under Android Settings > Accessibility.'
    ],
    reportingGuidance: 'Revoke accessibility permissions immediately, uninstall the app, and perform a security scan.'
  },

  // 37. SIM Card PUK Code & Telecom PIN Theft Traps
  {
    id: 'sim-puk-telecom-pin-theft',
    title: 'SIM Card PUK Code & Telecom PIN Theft Traps',
    category: 'Mobile Scams',
    iconName: 'lock',
    overview: `
      <div class="article-rich-content">
        <h3>1. Tricking Users into Locking SIM Cards</h3>
        <p>Scammers call victims pretending to be telecom helpline agents, convincing them that their SIM card requires an urgent network upgrade. They instruct the victim to enter wrong PIN codes until the SIM gets locked, and then ask for the secret PUK (Personal Unlocking Key) or customer portal PIN.</p>
        <p>With this information, the fraudster takes control of the customer\'s telecom account and initiates an unauthorized SIM transfer.</p>
      </div>
    `,
    warningSigns: [
      'Callers asking for your SIM card PUK code or account portal security PIN.',
      'Instructions to dial MMI codes (*# codes) on your mobile dialer.'
    ],
    examples: [
      'A subscriber shares their PUK code with a fake caller, allowing the scammer to re-register the SIM card on another device.'
    ],
    preventionTips: [
      'Never share your SIM card PUK code or account PIN with anyone over the phone.',
      'Telecom operators never call customers asking for secret SIM unlock codes.'
    ],
    reportingGuidance: 'Contact telecom official helplines directly to report account tampering attempts.'
  },

  // 38. Romance Scams & Digital Catfishing Extortion
  {
    id: 'romance-catfishing-blackmail',
    title: 'Romance Scams & Digital Catfishing Extortion',
    category: 'Social Media',
    iconName: 'heart-off',
    overview: `
      <div class="article-rich-content">
        <h3>1. Anatomy of Online Romance Scams</h3>
        <p>Scammers create attractive fake profiles on social media, matrimony apps, and messaging platforms to build romantic relationships over several weeks. Once trust is established, they concoct stories about sudden medical emergencies, customs clearance holds for expensive gifts sent overseas, or business travel crises.</p>

        <h3>2. Cyber Blackmail & Sextortion</h3>
        <p>In darker variations, scammers trick victims into sharing private photos or video calls. They record the interaction and use the media for extortion, threatening to send the recordings to the victim\'s family members or employers unless money is paid.</p>
      </div>
    `,
    warningSigns: [
      'Online contacts professing deep love quickly without meeting in person.',
      'Requests for financial help or customs clearing fees for unexpected gift parcels.',
      'Pressure to engage in intimate video calls or share private images.'
    ],
    examples: [
      'A victim is recorded during a compromised video call and receives demands for Rs. 200,000 under threat of uploading the video to social media.'
    ],
    preventionTips: [
      'Never send money to someone you have only met online.',
      'Never share private photos or engage in video calls with unverified online profiles.'
    ],
    reportingGuidance: 'Do not pay blackmailers. Report online harassment and extortion immediately to NCCIA.'
  },

  // 39. The MOVEit Transfer Zero-Day Data Theft Incident (2023)
  {
    id: 'moveit-zero-day-exploit',
    title: 'The MOVEit Transfer Zero-Day Data Theft Incident (2023)',
    category: 'Real Hacking Story',
    iconName: 'terminal',
    overview: `
      <div class="article-rich-content">
        <h3>1. The MOVEit Managed File Transfer Zero-Day</h3>
        <p>In May 2023, cybercrime group CL0P exploited a critical zero-day SQL injection vulnerability in MOVEit Transfer, a widely used enterprise managed file transfer application.</p>
        <p>Rather than encrypting systems with ransomware, the attackers silently stolen sensitive personal data and financial records from over 2,000 organizations and 60 Million individuals worldwide, demanding ransom payments to delete stolen datasets.</p>

        <h3>2. Impact on Enterprise Security</h3>
        <p>This incident highlighted how zero-day vulnerabilities in enterprise file transfer software can expose millions of customer records across government agencies, financial institutions, and global corporations in a matter of days.</p>
      </div>
    `,
    warningSigns: [
      'Unusual web webshell files created inside MOVEit web server directories.',
      'Bulk database export spikes logged outside normal operating hours.'
    ],
    examples: [
      'Attackers stole payroll records, pension data, and SSNs from thousands of enterprise organizations by exploiting a single web application zero-day.'
    ],
    preventionTips: [
      'Apply emergency vendor security patches immediately upon zero-day advisories.',
      'Restrict administrative access to file transfer web interfaces behind internal VPNs.'
    ],
    reportingGuidance: 'Notify CERT teams and affected data subjects according to corporate breach notification procedures.'
  },

  // 40. The MGM Resorts IT Helpdesk Vishing Heist (2023)
  {
    id: 'mgm-resorts-vishing-breach',
    title: 'The MGM Resorts IT Helpdesk Vishing Heist (2023)',
    category: 'Real Hacking Story',
    iconName: 'user-x',
    overview: `
      <div class="article-rich-content">
        <h3>1. The 10-Minute Phone Call That Shut Down Las Vegas</h3>
        <p>In September 2023, cybercriminal group Scattered Spider paralyzed major Las Vegas casino operator MGM Resorts, causing an estimated $100 Million in operational losses within days.</p>
        <p>The hackers did not use zero-day exploits; instead, they found an MGM employee\'s details on LinkedIn, called the internal MGM IT Helpdesk, impersonated the employee, and requested a password and Multi-Factor Authentication (MFA) reset. The helpdesk agent complied without proper identity verification, granting hackers full admin access to enterprise systems.</p>
      </div>
    `,
    warningSigns: [
      'Helpdesk password reset requests made via unverified phone calls.',
      'Sudden unauthorized MFA device registrations on employee admin accounts.'
    ],
    examples: [
      'A scammer calls the IT support desk pretending to be an employee who lost their phone, obtaining an administrator password reset in minutes.'
    ],
    preventionTips: [
      'Enforce strict biometric or in-person verification protocols for helpdesk password resets.',
      'Mandate strict FIDO2 hardware security keys for enterprise admin accounts.'
    ],
    reportingGuidance: 'Report internal IT social engineering incidents to corporate SOC teams and law enforcement immediately.'
  }
];

window.learningTopics = learningTopics;

/* ==========================================================================
   SafePK Knowledge Center & Article Page Engine Helpers (2026)
   ========================================================================== */

// Category Styling & Theme Configuration Map
window.categoryConfig = {
  'Urgent Threats': {
    icon: 'alert-triangle',
    accent: '#f87171',
    bg: 'rgba(248, 113, 113, 0.1)',
    border: 'rgba(248, 113, 113, 0.3)',
    defaultDifficulty: 'Beginner'
  },
  'Social Media': {
    icon: 'message-square',
    accent: '#38bdf8',
    bg: 'rgba(56, 189, 248, 0.1)',
    border: 'rgba(56, 189, 248, 0.3)',
    defaultDifficulty: 'Beginner'
  },
  'Financial Fraud': {
    icon: 'credit-card',
    accent: '#10b981',
    bg: 'rgba(16, 185, 129, 0.1)',
    border: 'rgba(16, 185, 129, 0.3)',
    defaultDifficulty: 'Beginner'
  },
  'Corporate Protection': {
    icon: 'building',
    accent: '#a78bfa',
    bg: 'rgba(167, 139, 250, 0.1)',
    border: 'rgba(167, 139, 250, 0.3)',
    defaultDifficulty: 'Intermediate'
  },
  'Digital Integrity': {
    icon: 'shield-check',
    accent: '#34d399',
    bg: 'rgba(52, 211, 153, 0.1)',
    border: 'rgba(52, 211, 153, 0.3)',
    defaultDifficulty: 'Intermediate'
  },
  'Online Earning': {
    icon: 'dollar-sign',
    accent: '#f59e0b',
    bg: 'rgba(245, 158, 11, 0.1)',
    border: 'rgba(245, 158, 11, 0.3)',
    defaultDifficulty: 'Beginner'
  },
  'Travel Scam': {
    icon: 'globe',
    accent: '#38bdf8',
    bg: 'rgba(56, 189, 248, 0.1)',
    border: 'rgba(56, 189, 248, 0.3)',
    defaultDifficulty: 'Beginner'
  },
  'Real Hacking Story': {
    icon: 'terminal',
    accent: '#a78bfa',
    bg: 'rgba(167, 139, 250, 0.1)',
    border: 'rgba(167, 139, 250, 0.3)',
    defaultDifficulty: 'Advanced'
  }
};

// Custom Slug Alias Mapping for Clean SEO-friendly URLs
window.slugMap = {
  'what-is-phishing': 'phishing-scams',
  'whatsapp-security-guide': 'whatsapp-scams',
  'easypaisa-scam-prevention': 'easypaisa-fraud',
  'jazzcash-security-guide': 'jazzcash-fraud',
  'fake-job-scams-guide': 'fake-job-scams',
  'otp-theft-prevention': 'otp-scams',
  'sim-swap-protection': 'sim-swap-fraud',
  'fake-banking-call-defense': 'fake-banking-calls',
  'facebook-scams-guide': 'facebook-scams',
  'instagram-security-guide': 'instagram-scams',
  'loan-app-extortion-defense': 'loan-app-extortion',
  'hajj-umrah-scam-guide': 'hajj-umrah-scams',
  'identity-theft-protection': 'identity-theft',
  'online-shopping-scam-defense': 'online-shopping-scams',
  'deepfake-voice-cloning-guide': 'ai-deepfake-video-calls',
  'remote-access-rat-guide': 'malicious-browser-extensions',
  'crypto-trading-ponzi-guide': 'atm-skimming-shimmering-fraud',
  'qr-quishing-guide': 'quishing-tampered-standees',
  'visa-consultant-scam-guide': 'smart-home-iot-hijack',
  'cod-empty-parcel-guide': 'cod-empty-parcel-scams',
  'telegram-microtask-scam-guide': 'micro-task-telegram-scams',
  'juice-jacking-wifi-guide': 'usb-juice-jacking-kiosks',
  'credential-stuffing-guide': 'credential-stuffing-protection',
  'cloud-data-exposure-guide': 'cloud-data-leak-protection',
  'business-email-compromise-guide': 'business-email-compromise-bec',
  'ransomware-extortion-guide': 'ransomware-extortion-defense',
  'fake-degree-certification-guide': 'fake-degree-certification-scams',
  'real-estate-property-scam-guide': 'digital-signature-e-seal-forgery',
  'esim-hijacking-guide': 'esim-hijacking-protection',
  'apk-sideloading-malware-guide': 'android-accessibility-malware',
  'govt-subsidy-scam-guide': 'sim-puk-telecom-pin-theft',
  'romance-catfishing-guide': 'romance-catfishing-blackmail',
  'moveit-zero-day-exploit-guide': 'moveit-zero-day-exploit',
  'mgm-resorts-vishing-guide': 'mgm-resorts-vishing-breach'
};

// Retrieve article object by ID or custom SEO slug
window.getArticleBySlugOrId = function(query) {
  if (!query) return null;
  const cleanQuery = String(query).trim().toLowerCase();
  
  // Check exact ID match
  let matched = learningTopics.find(t => t.id.toLowerCase() === cleanQuery);
  if (matched) return matched;
  
  // Check slug map
  if (window.slugMap[cleanQuery]) {
    const targetId = window.slugMap[cleanQuery];
    matched = learningTopics.find(t => t.id.toLowerCase() === targetId);
    if (matched) return matched;
  }
  
  // Partial title/slug match fallback
  return learningTopics.find(t => t.id.toLowerCase().includes(cleanQuery) || t.title.toLowerCase().includes(cleanQuery)) || null;
};

// Calculate dynamic reading time (words / 180 wpm)
window.getArticleReadingTime = function(article) {
  if (article.readingTime) return article.readingTime;
  
  let totalText = (article.overview || '') + ' ' +
                  (article.warningSigns ? article.warningSigns.join(' ') : '') + ' ' +
                  (article.preventionTips ? article.preventionTips.join(' ') : '');
                  
  // Strip HTML tags for clean word count
  totalText = totalText.replace(/<[^>]*>/g, ' ');
  const words = totalText.trim().split(/\s+/).filter(w => w.length > 0).length;
  const mins = Math.max(3, Math.ceil(words / 180));
  return mins + ' min read';
};

// Retrieve Difficulty level
window.getArticleDifficulty = function(article) {
  if (article.difficulty) return article.difficulty;
  const cfg = window.categoryConfig[article.category];
  return cfg ? cfg.defaultDifficulty : 'Beginner';
};

// Retrieve Category Configuration
window.getCategoryConfig = function(category) {
  return window.categoryConfig[category] || {
    icon: 'book-open',
    accent: '#38bdf8',
    bg: 'rgba(56, 189, 248, 0.1)',
    border: 'rgba(56, 189, 248, 0.3)',
    defaultDifficulty: 'Beginner'
  };
};

// Generate auto Table of Contents from HTML
window.generateArticleTOC = function(overviewHtml) {
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = overviewHtml || '';
  const headings = tempDiv.querySelectorAll('h2, h3, h4');
  const tocItems = [];
  
  headings.forEach((h, idx) => {
    const text = h.textContent.trim();
    if (text) {
      const id = 'section-' + idx + '-' + text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      tocItems.push({ id, text, tag: h.tagName.toLowerCase() });
    }
  });
  
  return tocItems;
};

// Formats article overview HTML with IDs for TOC scrolling and enhanced callout styling
window.formatArticleContent = function(overviewHtml) {
  if (!overviewHtml) return '';
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = overviewHtml;
  
  // Attach IDs to headings
  const headings = tempDiv.querySelectorAll('h2, h3, h4');
  headings.forEach((h, idx) => {
    const text = h.textContent.trim();
    const id = 'section-' + idx + '-' + text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    h.setAttribute('id', id);
  });
  
  return tempDiv.innerHTML;
};

