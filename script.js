/* ===========================================================
   REWIND: The Video Store Simulator — Grade 5, Monday
   All money is stored in CENTS (whole numbers) to avoid
   rounding errors. $4.99 is 499.
   =========================================================== */

/* ---------- 1. TEXT (all on-screen words live here for French later) ---------- */

const STRINGS = {
  en: {
    tagline: "The Video Store Simulator",
    crtHead: "REWIND VIDEO SYSTEM v2.1",
    cardFirst: "First name",
    cardLast: "Last name",
    cardPhone: "Phone",
    cardEmail: "Email",
    cardGenre: "Favourite genre",
    genre_Action: "Action",
    genre_Comedy: "Comedy",
    genre_Family: "Family",
    genre_Spooky: "Spooky",
    "genre_Sci-Fi": "Sci-Fi",
    printHead: "{day} shift: Manager's notes",
    printNameFilled: "Name: {name}",
    and: " and ",
    rcptHead: "Today's receipts",
    rcptHelp: "Here's everyone who came in today. Use these receipts to help you answer the questions.",
    rcptReturned: "Returned {title}",
    rcptLate: "{days} days late",
    rcptOnTime: "on time",
    rcptFriend: "Your friend: asked you to skip the late fee",
    rcptSpecial: "Special price",
    rcptHst: "HST (13%) added",
    rcptBalance: "Old balance paid",
    rcptTotal: "Total charged",
    rcptPaidCash: "Paid in cash",
    rcptChange: "Change",
    rcptPaidBy: "Paid by",
    budgetRecap: "Your budget: Save {save} · Spend {spend} · Share {share}",
    yourName: "Your name (for your name tag)",
    modeLabel: "Game mode",
    modeClassroom: "Classroom",
    modeClassroomDesc: "Bea asks reflection questions after each shift.",
    modeFree: "Free play",
    modeFreeDesc: "Just play. No questions.",
    pickDay: "Pick a shift",
    comingSoon: "Coming soon",
    clockIn: "Clock in",
    next: "Next",
    letsGo: "Let's open!",
    mood: "Mood",
    hint: "Ask Bea",
    hintsUsed: "Hints",
    tabMembers: "MEMBERS",
    tabNewMember: "NEW MEMBER",
    tabTitles: "TITLES",
    tabRental: "RENTAL",
    tabReturns: "RETURNS",
    clipboard: "BEA'S CLIPBOARD",
    register: "REGISTER",
    drawer: "CASH DRAWER",
    taxChart: "Tax chart",
    calculator: "Calculator",
    close: "Close",
    check: "Check",
    customerOf: "Customer {n} of {total}",
    step_member: "Find the member",
    step_return: "Check in the return",
    step_question: "Answer the customer's question",
    step_signup: "Sign up the new member",
    step_title: "Find the movie",
    step_ring: "Ring it up",
    step_pay: "Make change",

    // Computer
    searchPrompt: "SEARCH MEMBER (LAST NAME OR PHONE):",
    search: "SEARCH",
    select: "SELECT",
    noResults: "NO MEMBERS FOUND.",
    typeSomething: "TYPE A LAST NAME OR PHONE NUMBER.",
    memberSelected: "MEMBER SELECTED:",
    owes: "OWES {amt}",
    balanceLine: "BALANCE OWING: {amt}",
    balanceOwing: "Balance owing",
    balanceSub: "from the computer",
    lateDaysLabel: "DAYS LATE:",
    lateFeeLabel: "LATE FEE: $",
    lateRule: "LATE FEE IS $1.00 PER DAY.",
    addFee: "ADD FEE + CHECK IN",
    lateWrong: "CHECK THE DAYS AND THE FEE.",
    lateFeeItem: "Late fee: {title} ({days} days)",
    checkedInLate: "{title} CHECKED IN. LATE FEE ADDED TO BILL.",
    titlePrompt: "SEARCH TITLE:",
    add: "ADD",
    allOut: "ALL OUT",
    tellOut: "TELL CUSTOMER",
    inCount: "IN {inn}/{total}",
    newRelease: "NEW",
    newMemberHead: "NEW MEMBERSHIP FORM",
    fFirst: "FIRST NAME",
    fLast: "LAST NAME",
    fPhone: "PHONE",
    fEmail: "EMAIL",
    fGenre: "FAV. GENRE",
    chooseGenre: "-- CHOOSE --",
    save: "SAVE MEMBER",
    savedMember: "MEMBER #{num} SAVED.",
    rentalHead: "CURRENT RENTAL",
    noMember: "MEMBER: (NONE)",
    memberLine: "MEMBER: #{num} {name}",
    noItems: "NO MOVIES ADDED.",
    sendToRegister: "SEND TO REGISTER",
    sent: "SENT TO REGISTER.",
    needMemberAndMovie: "FIND THE MEMBER AND ADD THE MOVIE FIRST.",

    // Register
    registerIdle: "Send the rental from the computer to ring it up.",
    subtotal: "Subtotal",
    hst: "HST (13%)",
    total: "Total",
    cashTotal: "Cash total",
    cashTotalSub: "rounded to nearest 5¢",
    chargeLabel: "Amount to charge",
    chargeSub: "cash: round to 5¢ · card or cheque: exact total",
    payingWith: "Paying with:",
    method_cash: "Cash",
    method_debit: "Debit card",
    method_credit: "Credit card",
    method_cheque: "Cheque",
    payLine_cash: ["I'll pay cash.", "Here's some cash."],
    payLine_debit: ["I'll pay with my debit card.", "Debit, please."],
    payLine_credit: ["Can I put it on my credit card?", "I'll use my credit card."],
    payLine_cheque: ["Is it okay if I write a cheque?", "I'll write you a cheque."],
    tooHighCard: "Wait, I'm not paying cash. Shouldn't it be the exact total?",
    step_payCard: "Take payment",
    termHead: "CARD TERMINAL",
    termAmount: "AMOUNT",
    termInsert: "Insert card",
    termPin: "CUSTOMER ENTERS PIN... ****",
    termSign: "CUSTOMER SIGNS THE SLIP...",
    termApproved: "APPROVED",
    chequeHead: "Cheque",
    chequeDate: "Date",
    chequePayTo: "Pay to the order of",
    chequeAmountAsk: "How much should I make it out for?",
    chequeAmountLabel: "Write the amount:",
    chequeSign: "Ask customer to sign",
    chequeWrong: "The cheque has to be for the amount you rang up: {amt}.",
    chequeAccept: "Accept cheque",
    flow_cash: "Cash moved from {first}'s wallet into the store's cash drawer.",
    flow_debit: "Money moved from {first}'s bank account straight into REWIND's bank account.",
    flow_credit: "The credit card company paid REWIND. {first} will pay the credit card company back later.",
    flow_cheque: "REWIND will take the cheque to the bank. The bank moves the money from {first}'s account to REWIND's account.",
    cardSales: "Debit and credit (goes to the bank)",
    chequeSales: "Cheques (in the cheque slot)",
    notInDrawer: "not in the drawer",
    ringUp: "Ring it up",
    fillAll: "Fill in all four boxes with dollar amounts, like 4.99",
    charged: "Charged: {amt}",

    // Drawer
    drawerIdle: "Ring up the rental first.",
    custPays: "Customer pays:",
    changeDue: "Figure out the change, then click money in the drawer to add it to the tray.",
    trayLabel: "Change tray (click money to put it back)",
    trayTotal: "Change in tray: {amt}",
    giveChange: "Hand over change",
    noChangeNeeded: "No change needed",
    nextCustomer: "Next customer",
    closeRegister: "Close the register",

    // Tax chart
    chartTitle: "HST CHART — taped to the register",
    chartSub: "Subtotal",
    chartTax: "HST",
    chartTotal: "Total",
    chartNote: "This chart is for exact totals. For cash, you still need to round to the nearest 5¢.",

    // Close
    closeTitle: "Closing time",
    closeCount: "Count your drawer",
    closeEnter: "How much money is in the drawer?",
    sheetHelp: "For each row, multiply how many by what it's worth. Then add up the bills, add up the coins, and add those two together.",
    sheetHowMany: "How many",
    sheetRowTotal: "Row total",
    sheetBills: "Bills total",
    sheetCoins: "Coins total",
    sheetDrawer: "Drawer total (bills + coins)",
    closeCompareWait: "Count the drawer first.",
    closeCompare: "Drawer vs. computer",
    countRight: "Counted correctly!",
    countWrong: "Fix the boxes in red, then press Check again.",
    countReveal: "Bea fixed the red boxes for you. There's {amt} in the drawer.",
    countFillAll: "Fill in every white box first. Use dollars and cents, like 60.00",
    startFloat: "Starting cash (the float)",
    salesToday: "Cash sales today (from the computer)",
    shouldHave: "Drawer should have",
    actuallyHas: "Drawer actually has",
    balanced: "The drawer balances. Every cent is where it should be!",
    over: "The drawer is OVER by {amt}.",
    short: "The drawer is SHORT by {amt}.",
    overDetail: "Extra money usually means someone was charged too much or given too little change.",
    shortDetail: "Missing money usually means someone was charged too little or given too much change.",
    continue: "Continue",
    countRow: "{count} × {denom}",

    // Notes
    notesTitle: "Manager's notes",
    notesIntro: "Before you go home, answer these in your notebook. Today's receipts are below if you need a reminder.",
    printSheet: "Print question sheet",
    doneWriting: "I'm done",
    printName: "Name: ________________________",
    printDate: "Date: ______________",

    // Payday
    paydayTitle: "Payday!",
    payStub: "REWIND VIDEO · PAY STUB",
    payHours: "Hours worked this week",
    payRate: "Pay per hour",
    payTotal: "Your pay (hours × pay per hour)",
    payCheck: "Check my pay",
    payRight: "That's right! Now plan your budget.",
    payWrong: "Not quite. Multiply the hours by the pay per hour.",
    payReveal: "Bea checks it with you: your pay is {amt}.",
    budgetHead: "Plan your budget",
    budgetHelp: "Split your pay into three jars. They have to add up to your pay.",
    goalLine: "Your goal: a new bike that costs {goal}.",
    jarSave: "Save (for the bike)",
    jarSpend: "Spend (snacks, fun)",
    jarShare: "Share (give to a charity)",
    budgetLeft: "Left to put in a jar: {amt}",
    budgetOver: "That's {amt} more than your pay.",
    budgetDone: "Save my budget",
    budgetMustMatch: "Your three jars need to add up to exactly {amt}.",
    goalWeeks: "Saving {save} every week, you'll have the bike in {weeks} weeks.",
    goalNever: "If you don't save anything, you'll never reach your bike goal.",
    goalOne: "You can buy the bike this week!",
    reportTitle: "Shift report",
    playAgain: "Play again",
    backToDays: "Back to shifts",
    statCustomers: "Customers served",
    statSales: "Sales today",
    statDrawer: "Drawer",
    statHints: "Hints used",
    statTyping: "Typing accuracy",
    logCustomer: "Customer",
    logMovie: "Movie",
    logCharged: "Charged",
    logCorrect: "Should be",
    logChange: "Change",
    changeOk: "Correct",
    changeOver: "Gave {amt} too much",
    starCaption3: "Perfect shift! Bea is impressed.",
    starCaption2: "Solid shift. A couple of small slip-ups.",
    starCaption1: "You made it through! Try again to earn more stars.",
    balancedShort: "Balanced",
    overShort: "Over {amt}",
    shortShort: "Short {amt}",

    // Customer reactions
    notMe: "Um, that's not me!",
    notThatMovie: "Hmm, that's not the movie I asked for.",
    alreadyAdded: "You already added that one.",
    newCustomer: "New customer",
    clerkDefault: "Clerk",
    checkRed: "CHECK THE RED FIELDS AGAINST THE CARD.",
    noTitles: "NO TITLES FOUND.",
    tooHigh: "Hmm, that seems like a lot. Could you double-check?",
    tooHighDeal: "Wait, isn't there a special today? Could you double-check?",
    paysAnyway: "Well... okay, if you say so.",
    missingChange: "I don't think that's all my change.",
    thanks: "Thanks! Be kind, rewind!",
    thanksExtra: "Oh, wow, thanks!",
    hereYouGo: "Here you go!",
    notCents: "Remember: we have no pennies. A cash total has to end in 0 or 5.",

    // Days
    dayMon: "Monday",
    dayTue: "Tuesday",
    dayWed: "Wednesday",
    dayThu: "Thursday",
    dayFri: "Friday",
    daySat: "Saturday",
    descMon: "First shift. Rentals and a new member.",
    descTue: "Multiple movies and returns.",
    descWed: "Deals: which is the better price?",
    descThu: "Cash, debit, credit, and cheques.",
    descFri: "Late fees, money owed, and payday.",
    descSat: "The Saturday rush.",

    intro_wed: [
      "It's Wacky Wednesday! Look at the SPECIALS sign by the register: any 3 regular movies for $7.50, or any 2 new releases for $9.00.",
      "When a customer's movies match a special, use the special price in the subtotal. Movies that don't fit a special are regular price. Then add HST like always.",
      "Some customers will ask if a special is really a good deal. Divide the price by the number of movies to find what each one costs."
    ],
    intro_thu: [
      "Today customers pay in different ways: cash, debit card, credit card, or cheque. Listen for how each customer wants to pay.",
      "Only CASH gets rounded to the nearest 5¢. Debit, credit, and cheques pay the exact total, right down to the cent.",
      "Cards and cheques don't go in the cash drawer, so there's no change to make. The money moves through the bank instead."
    ],
    intro_sat: [
      "It's Saturday, our busiest day! Everything you learned this week can happen today: new members, returns, late fees, and all kinds of payments.",
      "I won't be at the counter today. I'll be in the back room. If you get stuck, press Ask Bea and I'll come help.",
      "Remember: be kind to every customer, and be fair to the store. Let's go!"
    ],
    intro_fri: [
      "TGIF! Today some tapes come back LATE. Compare the due date with today's date. The late fee is $1.00 for every day late.",
      "Late fees go on the bill with the movies, so HST is added to them too. Some members also owe money from before. Add what they owe after the HST.",
      "And Friday is payday! After closing, you'll get your first paycheque and plan your budget."
    ],
    intro_tue: [
      "Welcome back! Tuesdays get busier. Some customers rent two or three movies at once. Add up all the prices for the subtotal, then add the HST.",
      "Customers also bring back tapes. Check them in on the RETURNS tab. Compare the DUE date with TODAY's date to see if the tape is on time.",
      "When a tape is checked in, it goes back on the shelf so someone else can rent it. Let's open!"
    ],
    // Bea's intro (Monday)
    intro_mon: [
      "Welcome to REWIND! I'm Bea Kind. I've owned this store since the days of Betamax, and today you're my new clerk.",
      "Every rental has four steps: find the member on the computer, find the movie, ring it up, and make change.",
      "Rentals get 13% HST added on top. Our computer is old, so YOU work out the tax and the total at the register.",
      "When someone pays cash, round the total to the nearest 5 cents. There are no pennies in the drawer!",
      "The tax chart and the calculator are taped to the register if you need them. And remember... be kind, rewind!"
    ],

    // Bea's step tips
    tip_member: "Look at what the customer said. Type their last name in the MEMBERS search, then press SELECT.",
    tip_signup: "New members go on the NEW MEMBER tab. Copy the card exactly. A typo in a phone number means we can't call them!",
    tip_title: "Go to TITLES and search for each movie the customer wants. Check it's IN, then press ADD. If it's all out, tell the customer.",
    tip_send: "Check the RENTAL tab, then press SEND TO REGISTER.",
    tip_ring: "Subtotal is the price of all the movies added together. HST is 13% of the subtotal. Total = subtotal + HST. For cash, round the total to the nearest 5¢.",
        tip_pay: "Count up from the cash total to what they paid. Use the fewest coins and bills you can.",
    tip_done: "Nice work! Press the button when you're ready for the next customer.",
    // Second and third presses of "Ask Bea" give more specific help
    tip_member_2: "This customer's last name is {last}. Type it in the MEMBERS search box, press SEARCH, then SELECT the right person.",
    tip_signup_2: "Check each red box letter by letter against the card. Capital letters don't matter, but spelling and numbers do.",
    tip_title_2: "They asked for {title}. On the TITLES tab, type one word from the title, like \"{word}\", and press SEARCH.",
    tip_title_out: "{title} says ALL OUT. Press TELL CUSTOMER so they can pick something else.",
    tip_send_2: "Click the RENTAL tab at the top of the computer, then press SEND TO REGISTER.",
    tip_ring_2: "Subtotal is {sub}. On the calculator, press {subNum} × 0.13 = to find the HST. Round it to the nearest cent.",
    tip_ring_3: "Total = subtotal + HST. For cash, look at the last digit: 1 or 2 rounds down to 0, 3 or 4 rounds up to 5, 6 or 7 rounds down to 5, 8 or 9 rounds up to the next 0.",
    tip_pay_2: "They paid {paid} and the cash total is {cash}. Start at {cash} and count up with coins and bills until you reach {paid}.",
    tip_pay_3: "The change is {due}. Build it from the biggest money first.",
    tip_ring_deal: "Check the SPECIALS sign. Any 3 regular movies cost {regDeal} together, and any 2 new releases cost {newDeal} together. Movies that don't fit a special are regular price. Add them up for the subtotal.",
    tip_question: "Divide the special price by how many movies you get. That's the price for each movie. Then compare it with the regular price.",
    tip_question_2: "Try {price} ÷ {count} on the calculator. Is that less than {single}?",
    tip_question_wrong: "Not quite. Divide {price} by {count} to find the price of each movie, then compare it with {single}.",
    tip_ring_method: "This customer is paying by {method}. Only CASH gets rounded to the nearest 5¢. Debit, credit, and cheques pay the exact total.",
    tip_card: "Card payments don't use the cash drawer. Check the amount on the terminal, then press Insert card.",
    tip_cheque: "Write the exact amount you rang up on the cheque, then ask the customer to sign it.",
    tip_cheque_2: "You rang up {cash}. Type that in the cheque's amount box.",
    tip_return_late: "Compare the DUE date with TODAY. If today is after the due date, the tape is LATE. The late fee is $1.00 for each day late.",
    tip_return_late_2: "It was due {due}. Today is {today}. Count the days after the due date to find how many days late.",
    tip_late_wrong: "Look again: it was due {due} and today is {today}. It came back after the due date, so it's late.",
    tip_late_fee: "Count the days after {due}, up to {today}. That's how many days late. Each day late costs $1.00.",
    tip_ring_fee: "The late fee goes on the bill with the movies, so it's part of the subtotal. HST is added to everything on the bill.",
    tip_ring_balance: "This member owes {bal} from before. Add the balance owing to the total. If they pay cash, round that to the nearest 5¢.",
    tip_return: "Returns go on the RETURNS tab. Search for the tape, find the line with this customer's name, then compare the DUE date to TODAY's date.",
    tip_return_2: "The tape is {ret}. Search for it on the RETURNS tab. If it's due today or later, it's ON TIME.",
    tip_return_wrong: "Look again: it's due {due} and today is {today}. Since it came back on or before the due date, it's on time!",

    // Customer lines
    // Customer lines. {name} and {title} are filled in when the shift starts.
    greetRent: [
      "Hi! I'm {name}. Could I rent {title}, please?",
      "Hey there! {name} here. Do you have {title}?",
      "Hi, I'm {name}. I'd like {title} for tonight.",
      "Yo! {name} here. I need {title}. It's movie night!",
      "Good morning! I'm {name}. Is {title} in?"
    ],
    greetSignup: [
      "Hi! I've never been here before. Can I sign up for a membership? Here's my form.",
      "Hello! I just moved to the neighbourhood. Can I get a membership card? I filled out the form.",
      "Hi there! My friend says this is the best video store in town. Can I become a member?"
    ],
    requestAfterSignup: [
      "Awesome, thanks! I'd like to rent {title}.",
      "Perfect! Now, can I take {title} home?",
      "Great! My first rental is going to be {title}."
    ],
    switchWhenOut: [
      "Aw, all out? That's okay. I'll take {title} instead.",
      "Oh no! Okay then, how about {title}?",
      "Bummer. I guess I'll get {title} instead."
    ],
    wrongOut: "That one's in! Can't I just rent it?",
    greetMulti: [
      "Hi! I'm {name}. Could I rent {title}, please?",
      "Hey there! {name} here. I'd like {title} for tonight.",
      "Yo! {name} here. Movie marathon this weekend! I need {title}.",
      "Hi, I'm {name}. My family can't agree, so we're getting {title}."
    ],
    greetFriend: [
      "Hey, it's me, {first}! We're friends, right? I'm returning {ret}. It's a little late... Can you skip the late fee? Bea won't even know.",
      "Psst! It's {first}, your friend! Here's {ret}. I know it's late, but can you just skip the fee? Nobody will find out."
    ],
    friendSkipThanks: "Yes! Thanks, you're the best! Now I'd like to rent {title}.",
    friendFair: "Aw, okay. I guess that's fair. Can I rent {title}?",
    skipFee: "SKIP FEE",
    skippedIn: "{title} CHECKED IN. FEE SKIPPED.",
    beaSkipped: "Bea says: \"You skipped {first}'s late fee of {fee}. The computer still counts that fee, so the drawer is short. Being a good friend doesn't mean giving away the store's money. Next time, it's okay to say no.\"",
    beaCharged: "Bea says: \"I heard {first} asked you to skip their late fee, and you charged it anyway. That was the honest thing to do, even when it was hard. Thank you!\"",
    skippedTag: "Skipped late fee",
    starCaptionSkipped: "Great counter work! But remember what Bea said about the late fee.",
    greetLate: [
      "Hi, I'm {name}. Here's {ret}. Oops, I think it might be late...",
      "Hey, {name} here. Sorry, I forgot to bring back {ret}!",
      "Hi! {name}. I'm returning {ret}. My dog hid it under the couch!"
    ],
    greetOwes: [
      "Hi, I'm {name}. I'd like {title}. Oh, and do I owe anything? I want to pay it off.",
      "Hey, {name} here. Can I rent {title}? Bea said I owe a little from last time. I'll pay that too."
    ],
    greetReturn: [
      "Hi, I'm {name}. I'm bringing back {ret}.",
      "Hey! {name} here. Here's {ret}. It was so good!",
      "Hi! I'm {name}. Returning {ret}, all rewound!"
    ],
    requestAfterReturn: [
      "Oh, and I'd like to rent {title}, please.",
      "Now I need something new. Can I get {title}?",
      "And this time I'll take {title}."
    ],
    greetAskReturned: [
      "Hi! I'm {name}. Can I rent {title}? I know {ret} is usually all out, but could you check?",
      "Hey, {name} here. I'd love {title}. {ret} is never in, but maybe today's my lucky day?"
    ],
    returnedTape: "Tape handed back:",
    dealSign: "WEDNESDAY SPECIALS",
    dealRegLine: "Any 3 regular movies: {price}",
    dealNewLine: "Any 2 new releases: {price}",
    dealRegName: "3 regular movies for {price}",
    dealNewName: "2 new releases for {price}",
    askDeal: [
      "Hi, I'm {name}. The sign says {deal}. How much is that for each movie? Is it cheaper than renting them one at a time?",
      "Hey! {name} here. Is the special, {deal}, actually a good deal? What does each movie cost?"
    ],
    dealThanks: [
      "Wow, that's {save} cheaper for each movie! I'll take {title}.",
      "Nice, I save {save} on every movie! Okay: {title}, please."
    ],
    qCardHead: "Customer's question",
    qUnitLabel: "Price for each movie with the special:",
    qWhich: "Which is cheaper for each movie?",
    qSpecial: "The special",
    qSingle: "Renting one at a time ({single})",
    qNeedNumber: "Type the price for each movie first, like 2.50",
    qHmm: "Hmm, are you sure? Can you check that again?",
    notMyTape: "Um, that's not my name on that one.",
    retTitlePrompt: "RETURN TITLE:",
    today: "TODAY:",
    colMember: "MEMBER",
    colTitle: "TITLE",
    colDue: "DUE",
    onTime: "ON TIME",
    late: "LATE",
    noOpenRentals: "NO RENTALS OUT FOR THAT TITLE.",
    checkedIn: "{title} CHECKED IN. ON TIME, NO FEE.",
    alreadyBack: "THAT TAPE IS ALREADY CHECKED IN.",
    addedTitle: "ADDED: {title}",
    logReturned: "Returned {title}",
    appCardHead: "Membership application",
    appCardFine: "Pretend customer. Never type real people's information into a game!",

    // Monday reflection questions
    q_tue: [
      "Pick one customer who rented more than one movie. Show how you found their subtotal, HST, and cash total.",
      "Why does the store need to know when a tape comes back?",
      "A movie was all rented out until a customer returned it. How does the computer's IN count help the store?",
      "If you had $20 to spend at REWIND, which movies would you rent? Show your total with HST."
    ],
    q_wed: [
      "The special is 3 regular movies for $7.50. What does each movie cost? How much does a customer save on each movie compared with $2.99?",
      "Which is the better value: 2 new releases for $9.00, or 1 new release for $4.99? Show how you know.",
      "Why do you think stores have specials like \"3 for $7.50\"? How does it help the store?",
      "Is buying more always a good deal? When might it NOT be a good idea to get the special?"
    ],
    q_thu: [
      "One customer paid with debit and one paid with cash. Why did the cash total get rounded but the debit total didn't?",
      "Explain how money got from a customer to REWIND when they paid with a debit card. How is a credit card different?",
      "What is one good thing and one risky thing about paying with a credit card?",
      "At closing, why was there less money in the drawer than the store's total sales for the day?"
    ],
    q_sat: [
      "Your friend asked you to skip their late fee. What did you choose? Why?",
      "If a clerk skips a late fee, who loses money? Explain.",
      "Which job at the counter was the hardest this week? What helped you get better at it?",
      "A customer owed money from before. Why is it important for the store's computer to keep track of what people owe?"
    ],
    q_fri: [
      "A tape came back late. How did you figure out how many days late it was, and what the late fee was?",
      "One member owed money from before. Why might a store let customers owe money? What is the risk for the store?",
      "How did you split your paycheque between saving, spending, and sharing? Why did you choose those amounts?",
      "If you saved $30 every week, how many weeks would it take to save $270 for the bike? Show your work."
    ],
    q_mon: [
      "Pick one customer who paid with a bill bigger than their total. How much did they pay, and how did you figure out their change?",
      "A new release costs $5.64 with tax, but you charged $5.65 in cash. Why? When would a customer pay exactly $5.64?",
      "Why does the store need a new member's phone number? Who should be allowed to see it?",
      "Where do you think the HST money goes after the store collects it?"
    ]
  },
  fr: {
    tagline: "Le simulateur de club vidéo",
    crtHead: "SYSTÈME VIDÉO REWIND v2.1",
    cardFirst: "Prénom",
    cardLast: "Nom",
    cardPhone: "Téléphone",
    cardEmail: "Courriel",
    cardGenre: "Genre préféré",
    genre_Action: "Action",
    genre_Comedy: "Comédie",
    genre_Family: "Famille",
    genre_Spooky: "Épeurant",
    "genre_Sci-Fi": "Science-fiction",
    printHead: "Quart de travail ({day}) : Notes de la gérante",
    printNameFilled: "Nom : {name}",
    and: " et ",
    rcptHead: "Les reçus de la journée",
    rcptHelp: "Voici tous les clients venus aujourd'hui. Utilise ces reçus pour t'aider à répondre aux questions.",
    rcptReturned: "A rapporté {title}",
    rcptLate: "{days} jours de retard",
    rcptOnTime: "à temps",
    rcptFriend: "Ton ami : t'a demandé d'oublier les frais de retard",
    rcptSpecial: "Prix de l'aubaine",
    rcptHst: "TVH (13 %) ajoutée",
    rcptBalance: "Ancien solde payé",
    rcptTotal: "Total payé",
    rcptPaidCash: "A donné en argent comptant",
    rcptChange: "Monnaie rendue",
    rcptPaidBy: "A payé par",
    budgetRecap: "Ton budget : Épargner {save} · Dépenser {spend} · Partager {share}",
    yourName: "Ton nom (pour ton porte-nom)",
    modeLabel: "Mode de jeu",
    modeClassroom: "En classe",
    modeClassroomDesc: "Bea pose des questions de réflexion après chaque quart de travail.",
    modeFree: "Jeu libre",
    modeFreeDesc: "Joue, tout simplement. Pas de questions.",
    pickDay: "Choisis un quart de travail",
    comingSoon: "Bientôt",
    clockIn: "Commencer",
    next: "Suivant",
    letsGo: "On ouvre!",
    mood: "Humeur",
    hint: "Demande à Bea",
    hintsUsed: "Indices",
    tabMembers: "MEMBRES",
    tabNewMember: "NOUVEAU MEMBRE",
    tabTitles: "TITRES",
    tabRental: "LOCATION",
    tabReturns: "RETOURS",
    clipboard: "LA LISTE DE BEA",
    register: "CAISSE",
    drawer: "TIROIR-CAISSE",
    taxChart: "Tableau des taxes",
    calculator: "Calculatrice",
    close: "Fermer",
    check: "Vérifier",
    customerOf: "Client {n} sur {total}",
    step_member: "Trouver le membre",
    step_return: "Enregistrer le retour",
    step_question: "Répondre à la question du client",
    step_signup: "Inscrire le nouveau membre",
    step_title: "Trouver le film",
    step_ring: "Calculer la facture",
    step_pay: "Rendre la monnaie",

    // Ordinateur
    searchPrompt: "CHERCHER UN MEMBRE (NOM OU TÉLÉPHONE) :",
    search: "CHERCHER",
    select: "CHOISIR",
    noResults: "AUCUN MEMBRE TROUVÉ.",
    typeSomething: "TAPE UN NOM OU UN NUMÉRO DE TÉLÉPHONE.",
    memberSelected: "MEMBRE CHOISI :",
    owes: "DOIT {amt}",
    balanceLine: "SOLDE À PAYER : {amt}",
    balanceOwing: "Solde à payer",
    balanceSub: "selon l'ordinateur",
    lateDaysLabel: "JOURS DE RETARD :",
    lateFeeLabel: "FRAIS ($) :",
    lateRule: "FRAIS DE RETARD : 1,00 $ PAR JOUR.",
    addFee: "AJOUTER LES FRAIS + RETOUR",
    lateWrong: "VÉRIFIE LES JOURS ET LES FRAIS.",
    lateFeeItem: "Frais de retard : {title} ({days} jours)",
    checkedInLate: "{title} : RETOUR ENREGISTRÉ. FRAIS AJOUTÉS À LA FACTURE.",
    titlePrompt: "CHERCHER UN TITRE :",
    add: "AJOUTER",
    allOut: "TOUS LOUÉS",
    tellOut: "LE DIRE AU CLIENT",
    inCount: "DISPO {inn}/{total}",
    newRelease: "NOUVEAUTÉ",
    newMemberHead: "FORMULAIRE DE NOUVEAU MEMBRE",
    fFirst: "PRÉNOM",
    fLast: "NOM",
    fPhone: "TÉLÉPHONE",
    fEmail: "COURRIEL",
    fGenre: "GENRE PRÉFÉRÉ",
    chooseGenre: "-- CHOISIS --",
    save: "ENREGISTRER LE MEMBRE",
    savedMember: "MEMBRE NO {num} ENREGISTRÉ.",
    rentalHead: "LOCATION EN COURS",
    noMember: "MEMBRE : (AUCUN)",
    memberLine: "MEMBRE : NO {num} {name}",
    noItems: "AUCUN FILM AJOUTÉ.",
    sendToRegister: "ENVOYER À LA CAISSE",
    sent: "ENVOYÉ À LA CAISSE.",
    needMemberAndMovie: "TROUVE D'ABORD LE MEMBRE ET AJOUTE LE FILM.",

    // Caisse
    registerIdle: "Envoie la location de l'ordinateur à la caisse pour calculer la facture.",
    subtotal: "Sous-total",
    hst: "TVH (13 %)",
    total: "Total",
    cashTotal: "Total en argent comptant",
    cashTotalSub: "arrondi au 5 ¢ près",
    chargeLabel: "Montant à payer",
    chargeSub: "comptant : arrondir au 5 ¢ · carte ou chèque : total exact",
    payingWith: "Paie avec :",
    method_cash: "Argent comptant",
    method_debit: "Carte de débit",
    method_credit: "Carte de crédit",
    method_cheque: "Chèque",
    payLine_cash: ["Je vais payer comptant.", "Voici de l'argent comptant."],
    payLine_debit: ["Je vais payer avec ma carte de débit.", "Par débit, s'il vous plaît."],
    payLine_credit: ["Est-ce que je peux payer avec ma carte de crédit?", "Je vais utiliser ma carte de crédit."],
    payLine_cheque: ["Est-ce que je peux faire un chèque?", "Je vais vous faire un chèque."],
    tooHighCard: "Attendez, je ne paie pas comptant. Ça ne devrait pas être le total exact?",
    step_payCard: "Recevoir le paiement",
    termHead: "TERMINAL DE PAIEMENT",
    termAmount: "MONTANT",
    termInsert: "Insérer la carte",
    termPin: "LE CLIENT ENTRE SON NIP... ****",
    termSign: "LE CLIENT SIGNE LE REÇU...",
    termApproved: "APPROUVÉ",
    chequeHead: "Chèque",
    chequeDate: "Date",
    chequePayTo: "Payez à l'ordre de",
    chequeAmountAsk: "Je fais le chèque pour quel montant?",
    chequeAmountLabel: "Écris le montant :",
    chequeSign: "Demander au client de signer",
    chequeWrong: "Le chèque doit être du montant que tu as calculé : {amt}.",
    chequeAccept: "Accepter le chèque",
    flow_cash: "L'argent est passé du portefeuille de {first} au tiroir-caisse du magasin.",
    flow_debit: "L'argent est passé directement du compte de banque de {first} au compte de banque de REWIND.",
    flow_credit: "La compagnie de carte de crédit a payé REWIND. Plus tard, {first} va rembourser la compagnie de carte de crédit.",
    flow_cheque: "REWIND va apporter le chèque à la banque. La banque va transférer l'argent du compte de {first} au compte de REWIND.",
    cardSales: "Débit et crédit (va à la banque)",
    chequeSales: "Chèques (dans la fente à chèques)",
    notInDrawer: "pas dans le tiroir",
    ringUp: "Calculer la facture",
    fillAll: "Remplis toutes les cases avec des montants en dollars, comme 4,99",
    charged: "Montant payé : {amt}",

    // Tiroir-caisse
    drawerIdle: "Calcule d'abord la facture.",
    custPays: "Le client paie :",
    changeDue: "Calcule la monnaie, puis clique sur l'argent du tiroir pour le mettre dans le plateau.",
    trayLabel: "Plateau de monnaie (clique sur l'argent pour le remettre)",
    trayTotal: "Monnaie dans le plateau : {amt}",
    giveChange: "Donner la monnaie",
    noChangeNeeded: "Pas de monnaie à rendre",
    nextCustomer: "Client suivant",
    closeRegister: "Fermer la caisse",

    // Tableau des taxes
    chartTitle: "TABLEAU DE LA TVH — collé sur la caisse",
    chartSub: "Sous-total",
    chartTax: "TVH",
    chartTotal: "Total",
    chartNote: "Ce tableau donne les totaux exacts. Pour l'argent comptant, il faut quand même arrondir au 5 ¢ près.",

    // Fermeture
    closeTitle: "C'est l'heure de fermer",
    closeCount: "Compte ton tiroir-caisse",
    closeEnter: "Combien d'argent y a-t-il dans le tiroir?",
    sheetHelp: "Pour chaque ligne, multiplie le nombre par la valeur. Ensuite, additionne les billets, additionne les pièces, puis additionne les deux.",
    sheetHowMany: "Combien",
    sheetRowTotal: "Total de la ligne",
    sheetBills: "Total des billets",
    sheetCoins: "Total des pièces",
    sheetDrawer: "Total du tiroir (billets + pièces)",
    closeCompareWait: "Compte d'abord le tiroir.",
    closeCompare: "Tiroir et ordinateur",
    countRight: "Bien compté!",
    countWrong: "Corrige les cases en rouge, puis clique encore sur Vérifier.",
    countReveal: "Bea a corrigé les cases rouges pour toi. Il y a {amt} dans le tiroir.",
    countFillAll: "Remplis d'abord toutes les cases blanches. Écris des dollars et des cents, comme 60,00",
    startFloat: "Argent au départ (le fonds de caisse)",
    salesToday: "Ventes en argent comptant (selon l'ordinateur)",
    shouldHave: "Le tiroir devrait contenir",
    actuallyHas: "Le tiroir contient vraiment",
    balanced: "Le tiroir balance. Chaque cent est à sa place!",
    over: "Il y a {amt} DE TROP dans le tiroir.",
    short: "Il MANQUE {amt} dans le tiroir.",
    overDetail: "De l'argent en trop veut souvent dire qu'un client a payé trop cher ou n'a pas reçu assez de monnaie.",
    shortDetail: "De l'argent qui manque veut souvent dire qu'un client n'a pas payé assez ou a reçu trop de monnaie.",
    continue: "Continuer",
    countRow: "{count} × {denom}",

    // Notes
    notesTitle: "Notes de la gérante",
    notesIntro: "Avant de partir, réponds à ces questions dans ton cahier. Les reçus de la journée sont plus bas si tu as besoin d'un rappel.",
    printSheet: "Imprimer les questions",
    doneWriting: "J'ai fini",
    printName: "Nom : ________________________",
    printDate: "Date : ______________",

    // Jour de paie
    paydayTitle: "Jour de paie!",
    payStub: "REWIND VIDÉO · TALON DE PAIE",
    payHours: "Heures travaillées cette semaine",
    payRate: "Salaire par heure",
    payTotal: "Ta paie (heures × salaire par heure)",
    payCheck: "Vérifier ma paie",
    payRight: "C'est exact! Maintenant, planifie ton budget.",
    payWrong: "Pas tout à fait. Multiplie les heures par le salaire par heure.",
    payReveal: "Bea vérifie avec toi : ta paie est de {amt}.",
    budgetHead: "Planifie ton budget",
    budgetHelp: "Sépare ta paie en trois pots. Les trois pots doivent donner le total de ta paie.",
    goalLine: "Ton objectif : un vélo neuf qui coûte {goal}.",
    jarSave: "Épargner (pour le vélo)",
    jarSpend: "Dépenser (collations, sorties)",
    jarShare: "Partager (donner à un organisme de charité)",
    budgetLeft: "Il reste à mettre dans un pot : {amt}",
    budgetOver: "C'est {amt} de plus que ta paie.",
    budgetDone: "Enregistrer mon budget",
    budgetMustMatch: "Tes trois pots doivent donner exactement {amt}.",
    goalWeeks: "Si tu épargnes {save} chaque semaine, tu auras ton vélo dans {weeks} semaines.",
    goalNever: "Si tu n'épargnes rien, tu n'atteindras jamais ton objectif.",
    goalOne: "Tu peux acheter le vélo cette semaine!",
    reportTitle: "Rapport du quart de travail",
    playAgain: "Rejouer",
    backToDays: "Retour aux quarts",
    statCustomers: "Clients servis",
    statSales: "Ventes du jour",
    statDrawer: "Tiroir",
    statHints: "Indices utilisés",
    statTyping: "Exactitude au clavier",
    logCustomer: "Client",
    logMovie: "Film",
    logCharged: "Payé",
    logCorrect: "Montant exact",
    logChange: "Monnaie",
    changeOk: "Exacte",
    changeOver: "{amt} de trop",
    starCaption3: "Quart parfait! Bea est impressionnée.",
    starCaption2: "Bon quart! Quelques petites erreurs.",
    starCaption1: "Tu as réussi! Rejoue pour gagner plus d'étoiles.",
    balancedShort: "Balance",
    overShort: "{amt} de trop",
    shortShort: "Manque {amt}",

    // Réactions des clients
    notMe: "Euh, ce n'est pas moi!",
    notThatMovie: "Hum, ce n'est pas le film que j'ai demandé.",
    alreadyAdded: "Vous l'avez déjà ajouté.",
    newCustomer: "Nouveau client",
    clerkDefault: "Commis",
    checkRed: "COMPARE LES CASES ROUGES AVEC LA CARTE.",
    noTitles: "AUCUN TITRE TROUVÉ.",
    tooHigh: "Hum, ça me semble beaucoup. Pouvez-vous vérifier?",
    tooHighDeal: "Attendez, il n'y a pas une aubaine aujourd'hui? Pouvez-vous vérifier?",
    paysAnyway: "Bon... d'accord, si vous le dites.",
    missingChange: "Je pense qu'il me manque de la monnaie.",
    thanks: "Merci! Sois aimable, rembobine!",
    thanksExtra: "Oh, wow, merci!",
    hereYouGo: "Voilà!",
    notCents: "N'oublie pas : il n'y a pas de sous noirs. Un total en argent comptant doit finir par 0 ou 5.",

    // Jours
    dayMon: "Lundi",
    dayTue: "Mardi",
    dayWed: "Mercredi",
    dayThu: "Jeudi",
    dayFri: "Vendredi",
    daySat: "Samedi",
    descMon: "Premier quart. Des locations et un nouveau membre.",
    descTue: "Plusieurs films et des retours.",
    descWed: "Les aubaines : quel est le meilleur prix?",
    descThu: "Comptant, débit, crédit et chèques.",
    descFri: "Frais de retard, argent dû et jour de paie.",
    descSat: "La journée la plus occupée!",

    intro_wed: [
      "C'est le Mercredi fou! Regarde l'affiche des AUBAINES près de la caisse : 3 films réguliers au choix pour 7,50 $, ou 2 nouveautés au choix pour 9,00 $.",
      "Quand les films d'un client vont avec une aubaine, utilise le prix de l'aubaine dans le sous-total. Les autres films sont au prix régulier. Ensuite, ajoute la TVH comme d'habitude.",
      "Certains clients vont demander si une aubaine est vraiment un bon prix. Divise le prix par le nombre de films pour trouver le prix de chaque film."
    ],
    intro_thu: [
      "Aujourd'hui, les clients paient de différentes façons : argent comptant, carte de débit, carte de crédit ou chèque. Écoute bien comment chaque client veut payer.",
      "On arrondit au 5 ¢ près SEULEMENT pour l'argent comptant. Le débit, le crédit et les chèques paient le total exact, au cent près.",
      "Les cartes et les chèques ne vont pas dans le tiroir-caisse, alors il n'y a pas de monnaie à rendre. L'argent passe plutôt par la banque."
    ],
    intro_sat: [
      "C'est samedi, notre journée la plus occupée! Tout ce que tu as appris cette semaine peut arriver aujourd'hui : nouveaux membres, retours, frais de retard et toutes sortes de paiements.",
      "Aujourd'hui, je ne serai pas au comptoir. Je serai dans l'arrière-boutique. Si tu as besoin d'aide, clique sur Demande à Bea et je viendrai t'aider.",
      "N'oublie pas : sois aimable avec chaque client, et sois juste avec le magasin. Allons-y!"
    ],
    intro_fri: [
      "Enfin vendredi! Aujourd'hui, certaines cassettes reviennent EN RETARD. Compare la date de retour avec la date d'aujourd'hui. Les frais de retard sont de 1,00 $ par jour.",
      "Les frais de retard vont sur la facture avec les films, alors on ajoute la TVH aussi. Certains membres doivent aussi de l'argent d'avant. Ajoute ce qu'ils doivent après la TVH.",
      "Et le vendredi, c'est jour de paie! Après la fermeture, tu vas recevoir ton premier chèque de paie et planifier ton budget."
    ],
    intro_tue: [
      "Bon retour! Le mardi, c'est plus occupé. Certains clients louent deux ou trois films en même temps. Additionne tous les prix pour le sous-total, puis ajoute la TVH.",
      "Les clients rapportent aussi des cassettes. Enregistre-les dans l'onglet RETOURS. Compare la date de RETOUR avec la date d'AUJOURD'HUI pour voir si la cassette est à temps.",
      "Quand une cassette est rendue, elle retourne sur l'étagère pour que quelqu'un d'autre puisse la louer. On ouvre!"
    ],
    // L'introduction de Bea (lundi)
    intro_mon: [
      "Bienvenue chez REWIND! Je m'appelle Bea Kind. Je suis propriétaire de ce club vidéo depuis l'époque du Betamax, et aujourd'hui, tu es mon nouveau commis.",
      "Chaque location a quatre étapes : trouver le membre à l'ordinateur, trouver le film, calculer la facture et rendre la monnaie.",
      "On ajoute 13 % de TVH à chaque location. Notre ordinateur est vieux, alors c'est TOI qui calcules la taxe et le total à la caisse.",
      "Quand un client paie comptant, arrondis le total au 5 cents près. Il n'y a pas de sous noirs dans le tiroir!",
      "Le tableau des taxes et la calculatrice sont collés sur la caisse si tu en as besoin. Et n'oublie pas... sois aimable, rembobine!"
    ],

    // Les conseils de Bea
    tip_member: "Lis ce que le client a dit. Tape son nom de famille dans la recherche MEMBRES, puis clique sur CHOISIR.",
    tip_signup: "Les nouveaux membres vont dans l'onglet NOUVEAU MEMBRE. Copie la carte exactement. Une erreur dans le numéro de téléphone, et on ne pourra pas l'appeler!",
    tip_title: "Va dans TITRES et cherche chaque film que le client veut. Vérifie qu'il est DISPO, puis clique sur AJOUTER. S'il est tout loué, dis-le au client.",
    tip_send: "Vérifie l'onglet LOCATION, puis clique sur ENVOYER À LA CAISSE.",
    tip_ring: "Le sous-total, c'est le prix de tous les films additionnés. La TVH, c'est 13 % du sous-total. Total = sous-total + TVH. Pour l'argent comptant, arrondis le total au 5 ¢ près.",
    tip_pay: "Compte à partir du total en argent comptant jusqu'au montant que le client a donné. Utilise le moins de pièces et de billets possible.",
    tip_done: "Beau travail! Clique sur le bouton pour passer au client suivant.",
    tip_member_2: "Le nom de famille de ce client est {last}. Tape-le dans la recherche MEMBRES, clique sur CHERCHER, puis CHOISIS la bonne personne.",
    tip_signup_2: "Vérifie chaque case rouge lettre par lettre avec la carte. Les majuscules et les accents ne comptent pas, mais l'orthographe et les chiffres, oui.",
    tip_title_2: "Le client veut {title}. Dans l'onglet TITRES, tape un mot du titre, comme « {word} », et clique sur CHERCHER.",
    tip_title_out: "Pour {title}, l'ordinateur indique TOUS LOUÉS. Clique sur LE DIRE AU CLIENT pour que le client choisisse autre chose.",
    tip_send_2: "Clique sur l'onglet LOCATION en haut de l'ordinateur, puis sur ENVOYER À LA CAISSE.",
    tip_ring_2: "Le sous-total est {sub}. Sur la calculatrice, tape {subNum} × 0,13 = pour trouver la TVH. Arrondis au cent près.",
    tip_ring_3: "Total = sous-total + TVH. Pour l'argent comptant, regarde le dernier chiffre : 1 ou 2, on arrondit à 0. 3 ou 4, on arrondit à 5. 6 ou 7, on arrondit à 5. 8 ou 9, on arrondit au 0 suivant.",
    tip_pay_2: "Le client a donné {paid} et le total est {cash}. Commence à {cash} et compte avec des pièces et des billets jusqu'à {paid}.",
    tip_pay_3: "La monnaie à rendre est {due}. Commence par les plus gros billets ou pièces.",
    tip_ring_deal: "Regarde l'affiche des AUBAINES. 3 films réguliers au choix coûtent {regDeal} ensemble, et 2 nouveautés au choix coûtent {newDeal} ensemble. Les films qui ne vont pas avec une aubaine sont au prix régulier. Additionne tout pour le sous-total.",
    tip_question: "Divise le prix de l'aubaine par le nombre de films. Ça donne le prix de chaque film. Ensuite, compare-le avec le prix régulier.",
    tip_question_2: "Essaie {price} ÷ {count} sur la calculatrice. Est-ce moins que {single}?",
    tip_question_wrong: "Pas tout à fait. Divise {price} par {count} pour trouver le prix de chaque film, puis compare avec {single}.",
    tip_ring_method: "Mode de paiement de ce client : {method}. On arrondit au 5 ¢ près SEULEMENT pour l'argent comptant. Le débit, le crédit et les chèques paient le total exact.",
    tip_card: "Les paiements par carte n'utilisent pas le tiroir-caisse. Vérifie le montant sur le terminal, puis clique sur Insérer la carte.",
    tip_cheque: "Écris sur le chèque le montant exact que tu as calculé, puis demande au client de le signer.",
    tip_cheque_2: "Tu as calculé {cash}. Tape ce montant dans la case du chèque.",
    tip_return_late: "Compare la date de RETOUR avec AUJOURD'HUI. Si aujourd'hui est après la date de retour, la cassette est EN RETARD. Les frais sont de 1,00 $ pour chaque jour de retard.",
    tip_return_late_2: "La cassette devait revenir le {due}. Aujourd'hui, c'est le {today}. Compte les jours après la date de retour pour trouver le nombre de jours de retard.",
    tip_late_wrong: "Regarde encore : la cassette devait revenir le {due} et aujourd'hui, c'est le {today}. Elle est revenue après la date de retour, alors elle est en retard.",
    tip_late_fee: "Compte les jours après le {due}, jusqu'au {today}. C'est le nombre de jours de retard. Chaque jour de retard coûte 1,00 $.",
    tip_ring_fee: "Les frais de retard vont sur la facture avec les films, alors ils font partie du sous-total. On ajoute la TVH à tout ce qui est sur la facture.",
    tip_ring_balance: "Ce membre doit {bal} d'avant. Ajoute le solde à payer au total. S'il paie comptant, arrondis ce montant au 5 ¢ près.",
    tip_return: "Les retours vont dans l'onglet RETOURS. Cherche la cassette, trouve la ligne avec le nom de ce client, puis compare la date de RETOUR avec la date d'AUJOURD'HUI.",
    tip_return_2: "La cassette, c'est {ret}. Cherche-la dans l'onglet RETOURS. Si la date de retour est aujourd'hui ou plus tard, elle est À TEMPS.",
    tip_return_wrong: "Regarde encore : la cassette doit revenir le {due} et aujourd'hui, c'est le {today}. Elle est revenue avant ou à la date de retour, alors elle est à temps!",

    // Ce que disent les clients. {name} et {title} sont remplis au début du quart.
    greetRent: [
      "Bonjour! Je m'appelle {name}. Est-ce que je peux louer {title}, s'il vous plaît?",
      "Salut! C'est {name}. Avez-vous {title}?",
      "Bonjour, je suis {name}. J'aimerais louer {title} pour ce soir.",
      "Allô! C'est {name}. Il me faut {title}. C'est soirée cinéma!",
      "Bon matin! Je m'appelle {name}. Est-ce que {title} est disponible?"
    ],
    greetSignup: [
      "Bonjour! C'est ma première visite. Est-ce que je peux devenir membre? Voici mon formulaire.",
      "Bonjour! Je viens de déménager dans le quartier. Est-ce que je peux avoir une carte de membre? J'ai rempli le formulaire.",
      "Salut! Mon ami dit que c'est le meilleur club vidéo en ville. Est-ce que je peux devenir membre?"
    ],
    requestAfterSignup: [
      "Super, merci! J'aimerais louer {title}.",
      "Parfait! Maintenant, est-ce que je peux apporter {title} chez moi?",
      "Génial! Ma première location, ça va être {title}."
    ],
    switchWhenOut: [
      "Oh, tous loués? Ce n'est pas grave. Je vais prendre {title} à la place.",
      "Oh non! Bon, alors, que pensez-vous de {title}?",
      "Dommage. Je vais prendre {title} à la place."
    ],
    wrongOut: "Il est disponible! Je ne peux pas le louer?",
    greetMulti: [
      "Bonjour! Je m'appelle {name}. Est-ce que je peux louer {title}, s'il vous plaît?",
      "Salut! C'est {name}. J'aimerais {title} pour ce soir.",
      "Allô! C'est {name}. Marathon de films cette fin de semaine! Il me faut {title}.",
      "Bonjour, je suis {name}. Ma famille n'arrive pas à choisir, alors on prend {title}."
    ],
    greetFriend: [
      "Salut, c'est moi, {first}! On est amis, hein? Je rapporte {ret}. Il est un peu en retard... Peux-tu oublier les frais de retard? Bea ne le saura même pas.",
      "Psst! C'est moi, {first}! Voici {ret}. Je sais qu'il est en retard, mais peux-tu juste oublier les frais? Personne ne va le savoir."
    ],
    friendSkipThanks: "Oui! Merci, tu es super! Maintenant, j'aimerais louer {title}.",
    friendFair: "Ah, d'accord. C'est juste, je suppose. Est-ce que je peux louer {title}?",
    skipFee: "OUBLIER LES FRAIS",
    skippedIn: "{title} : RETOUR ENREGISTRÉ. FRAIS OUBLIÉS.",
    beaSkipped: "Bea dit : « Tu n'as pas fait payer les frais de retard de {first}, qui étaient de {fee}. L'ordinateur compte quand même ces frais, alors il manque de l'argent dans le tiroir. Être un bon ami, ça ne veut pas dire donner l'argent du magasin. La prochaine fois, tu as le droit de dire non. »",
    beaCharged: "Bea dit : « J'ai entendu que {first} t'a demandé d'oublier ses frais de retard, et tu les as quand même fait payer. C'était la chose honnête à faire, même si c'était difficile. Merci! »",
    skippedTag: "Frais de retard oubliés",
    starCaptionSkipped: "Beau travail au comptoir! Mais n'oublie pas ce que Bea a dit sur les frais de retard.",
    greetLate: [
      "Bonjour, je m'appelle {name}. Voici {ret}. Oups, je pense qu'il est en retard...",
      "Salut, c'est {name}. Oups, j'ai oublié de rapporter {ret}!",
      "Bonjour! C'est {name}. Je rapporte {ret}. Mon chien l'avait caché sous le divan!"
    ],
    greetOwes: [
      "Bonjour, je m'appelle {name}. J'aimerais {title}. Oh, et est-ce que je dois de l'argent? Je veux tout payer.",
      "Salut, c'est {name}. Est-ce que je peux louer {title}? Bea m'a dit que je dois un peu d'argent de la dernière fois. Je vais le payer aussi."
    ],
    greetReturn: [
      "Bonjour, je m'appelle {name}. Je rapporte {ret}.",
      "Salut! C'est {name}. Voici {ret}. C'était tellement bon!",
      "Bonjour! Je suis {name}. Je rapporte {ret}, bien rembobiné!"
    ],
    requestAfterReturn: [
      "Oh, et j'aimerais louer {title}, s'il vous plaît.",
      "Maintenant, il me faut quelque chose de nouveau. Est-ce que je peux avoir {title}?",
      "Et cette fois, je vais prendre {title}."
    ],
    greetAskReturned: [
      "Bonjour! Je m'appelle {name}. Est-ce que je peux louer {title}? Je sais que {ret} est souvent tout loué, mais pouvez-vous vérifier?",
      "Salut, c'est {name}. J'aimerais {title}. {ret} n'est jamais disponible, mais c'est peut-être mon jour de chance?"
    ],
    returnedTape: "Cassette rapportée :",
    dealSign: "AUBAINES DU MERCREDI",
    dealRegLine: "3 films réguliers au choix : {price}",
    dealNewLine: "2 nouveautés au choix : {price}",
    dealRegName: "3 films réguliers pour {price}",
    dealNewName: "2 nouveautés pour {price}",
    askDeal: [
      "Bonjour, je m'appelle {name}. L'affiche dit {deal}. Ça fait combien pour chaque film? Est-ce moins cher que de les louer un à la fois?",
      "Salut! C'est {name}. Est-ce que l'aubaine, {deal}, est vraiment un bon prix? Combien coûte chaque film?"
    ],
    dealThanks: [
      "Wow, c'est {save} de moins pour chaque film! Je vais prendre {title}.",
      "Super, j'économise {save} sur chaque film! D'accord : {title}, s'il vous plaît."
    ],
    qCardHead: "La question du client",
    qUnitLabel: "Prix de chaque film avec l'aubaine :",
    qWhich: "Qu'est-ce qui coûte le moins cher pour chaque film?",
    qSpecial: "L'aubaine",
    qSingle: "Louer un à la fois ({single})",
    qNeedNumber: "Tape d'abord le prix de chaque film, comme 2,50",
    qHmm: "Hum, pouvez-vous vérifier encore une fois?",
    notMyTape: "Euh, ce n'est pas mon nom sur celle-là.",
    retTitlePrompt: "TITRE À RETOURNER :",
    today: "AUJOURD'HUI :",
    colMember: "MEMBRE",
    colTitle: "TITRE",
    colDue: "RETOUR",
    onTime: "À TEMPS",
    late: "EN RETARD",
    noOpenRentals: "AUCUNE LOCATION POUR CE TITRE.",
    checkedIn: "{title} : RETOUR ENREGISTRÉ. À TEMPS, PAS DE FRAIS.",
    alreadyBack: "CETTE CASSETTE EST DÉJÀ RENDUE.",
    addedTitle: "AJOUTÉ : {title}",
    logReturned: "A rapporté {title}",
    appCardHead: "Demande d'abonnement",
    appCardFine: "Client inventé. N'écris jamais les vraies informations de quelqu'un dans un jeu!",

    // Questions de réflexion
    q_tue: [
      "Choisis un client qui a loué plus d'un film. Montre comment tu as trouvé son sous-total, sa TVH et son total en argent comptant.",
      "Pourquoi le magasin a-t-il besoin de savoir quand une cassette revient?",
      "Un film était tout loué jusqu'à ce qu'un client le rapporte. Comment le nombre DISPO dans l'ordinateur aide-t-il le magasin?",
      "Si tu avais 20 $ à dépenser chez REWIND, quels films louerais-tu? Montre ton total avec la TVH."
    ],
    q_wed: [
      "L'aubaine, c'est 3 films réguliers pour 7,50 $. Combien coûte chaque film? Combien un client économise-t-il sur chaque film comparé à 2,99 $?",
      "Qu'est-ce qui est le meilleur achat : 2 nouveautés pour 9,00 $, ou 1 nouveauté pour 4,99 $? Montre comment tu le sais.",
      "À ton avis, pourquoi les magasins ont-ils des aubaines comme « 3 pour 7,50 $ »? Comment est-ce que ça aide le magasin?",
      "Est-ce toujours une bonne affaire d'acheter plus? Quand est-ce que ce n'est PAS une bonne idée de prendre l'aubaine?"
    ],
    q_thu: [
      "Un client a payé par débit et un autre a payé comptant. Pourquoi a-t-on arrondi le total en argent comptant, mais pas le total par débit?",
      "Explique comment l'argent est passé du client à REWIND quand il a payé avec une carte de débit. En quoi une carte de crédit est-elle différente?",
      "Nomme une bonne chose et une chose risquée quand on paie avec une carte de crédit.",
      "À la fermeture, pourquoi y avait-il moins d'argent dans le tiroir que le total des ventes de la journée?"
    ],
    q_sat: [
      "Ton ami t'a demandé d'oublier ses frais de retard. Qu'est-ce que tu as choisi? Pourquoi?",
      "Si un commis oublie de faire payer des frais de retard, qui perd de l'argent? Explique.",
      "Quelle tâche au comptoir était la plus difficile cette semaine? Qu'est-ce qui t'a aidé à t'améliorer?",
      "Un client devait de l'argent d'avant. Pourquoi est-ce important que l'ordinateur du magasin garde la trace de ce que les gens doivent?"
    ],
    q_fri: [
      "Une cassette est revenue en retard. Comment as-tu trouvé le nombre de jours de retard et le montant des frais?",
      "Un membre devait de l'argent d'avant. Pourquoi un magasin laisserait-il des clients lui devoir de l'argent? Quel est le risque pour le magasin?",
      "Comment as-tu séparé ta paie entre épargner, dépenser et partager? Pourquoi as-tu choisi ces montants?",
      "Si tu épargnais 30 $ chaque semaine, combien de semaines te faudrait-il pour épargner 270 $ pour le vélo? Montre ton travail."
    ],
    q_mon: [
      "Choisis un client qui a payé avec un billet plus gros que son total. Combien a-t-il donné, et comment as-tu trouvé sa monnaie?",
      "Une nouveauté coûte 5,64 $ avec la taxe, mais tu as demandé 5,65 $ en argent comptant. Pourquoi? Quand est-ce qu'un client paierait exactement 5,64 $?",
      "Pourquoi le magasin a-t-il besoin du numéro de téléphone d'un nouveau membre? Qui devrait avoir le droit de le voir?",
      "À ton avis, où va l'argent de la TVH une fois que le magasin l'a reçu?"
    ]
  }
};

// Language: ?lang=fr in the link, or the last choice on this computer, or English.
const LANG_KEY = "rewind.lang";
let LANG = (function () {
  const fromUrl = new URLSearchParams(location.search).get("lang");
  if (fromUrl === "fr" || fromUrl === "en") return fromUrl;
  try { return localStorage.getItem(LANG_KEY) === "fr" ? "fr" : "en"; } catch (e) { return "en"; }
})();

function setLang(lang) {
  LANG = lang;
  try { localStorage.setItem(LANG_KEY, lang); } catch (e) { /* not saved, that's okay */ }
  document.documentElement.lang = lang;
  MOVIES.forEach(m => { m.title = lang === "fr" ? m.fr : m.en; });
  fillStaticText();
}

function t(key, vars) {
  let s = STRINGS[LANG][key];
  if (s === undefined) s = STRINGS.en[key]; // fall back to English if a line is missing
  if (s === undefined) return key;
  if (vars && typeof s === "string") {
    for (const k in vars) s = s.split("{" + k + "}").join(vars[k]);
  }
  return s;
}

/* ---------- 2. MONEY HELPERS ---------- */

const TAX_RATE = 13; // percent

function taxOf(cents) { return Math.round(cents * TAX_RATE / 100); }
function round5(cents) { return Math.round(cents / 5) * 5; }

// $4.99 in English, 4,99 $ in French
function fmt(cents) {
  const neg = cents < 0;
  const n = num(Math.abs(cents));
  const s = LANG === "fr" ? n + " $" : "$" + n;
  return neg ? "-" + s : s;
}

// A plain amount for typing boxes: 4.99 or 4,99
function num(cents) {
  const s = Math.floor(cents / 100) + "." + String(cents % 100).padStart(2, "0");
  return LANG === "fr" ? s.replace(".", ",") : s;
}

// Turns "5.65", "$5.65", "5,65" into 565. Returns null if it isn't money.
function parseMoney(str) {
  if (str === undefined || str === null) return null;
  let s = String(str).replace(/\$/g, "").replace(/\s/g, "").replace(",", ".");
  if (!/^\d+(\.\d{1,2})?$|^\.\d{1,2}$/.test(s)) return null;
  const parts = s.split(".");
  const dollars = parseInt(parts[0] || "0", 10);
  const cents = parts[1] ? parseInt(parts[1].padEnd(2, "0"), 10) : 0;
  return dollars * 100 + cents;
}

const DENOMS = [2000, 1000, 500, 200, 100, 25, 10, 5];

function denomLabel(d) {
  if (LANG === "fr") return d >= 100 ? d / 100 + " $" : d + " ¢";
  return d >= 100 ? "$" + d / 100 : d + "¢";
}

// Starting cash in the drawer: $150
const FLOAT = { 2000: 3, 1000: 3, 500: 4, 200: 10, 100: 10, 25: 20, 10: 25, 5: 50 };

// Dates are stored like "FRI MAR 14" and shown in the player's language.
const DAY_FR = { MON: "LUN", TUE: "MAR", WED: "MER", THU: "JEU", FRI: "VEN", SAT: "SAM", SUN: "DIM" };
const MONTH_FR = { MAR: "MARS" };
function dateLabel(s) {
  if (!s || LANG !== "fr") return s || "";
  const [d, m, n] = s.split(" ");
  return (DAY_FR[d] || d) + " " + n + " " + (MONTH_FR[m] || m);
}

/* ---------- 3. DATA: movies and customers ---------- */

const PRICE_NEW = 499;
const PRICE_REG = 299;

const MOVIES = [
  { id: "m01", title: "Jurassic Parking", fr: "Parking jurassique", genre: "Action", isNew: true, copies: 3, inn: 1 },
  { id: "m02", title: "Mission: Improbable", fr: "Mission improbable", genre: "Action", isNew: true, copies: 3, inn: 2 },
  { id: "m03", title: "The Fast and the Curious", fr: "Rapides et curieux", genre: "Action", isNew: false, copies: 2, inn: 1 },
  { id: "m04", title: "The Mighty Bucks", fr: "Les Petits Sous", genre: "Action", isNew: false, copies: 2, inn: 2 },
  { id: "m05", title: "Raiders of the Lost Snack", fr: "Les Aventuriers de la collation perdue", genre: "Action", isNew: false, copies: 1, inn: 0 },
  { id: "m06", title: "Honey, I Shrunk the Laundry", fr: "Chérie, j'ai rétréci le lavage", genre: "Comedy", isNew: false, copies: 2, inn: 2 },
  { id: "m07", title: "Groundhog Week", fr: "La Semaine de la marmotte", genre: "Comedy", isNew: false, copies: 2, inn: 1 },
  { id: "m08", title: "Home A-Loan", fr: "Maman, j'ai prêté l'avion", genre: "Comedy", isNew: true, copies: 3, inn: 2 },
  { id: "m09", title: "The Mask-arade", fr: "Le Masque de ski", genre: "Comedy", isNew: false, copies: 1, inn: 1 },
  { id: "m21", title: "Spaced Jam", fr: "Confiture de l'espace", genre: "Comedy", isNew: false, copies: 2, inn: 1 },
  { id: "m10", title: "Toy Storey", fr: "Histoire de joujoux", genre: "Family", isNew: true, copies: 4, inn: 0 },
  { id: "m11", title: "The Lion Kinda", fr: "Le Roi Citron", genre: "Family", isNew: false, copies: 3, inn: 2 },
  { id: "m12", title: "101 Dalmatian Sweaters", fr: "101 chandails dalmatiens", genre: "Family", isNew: false, copies: 2, inn: 1 },
  { id: "m13", title: "Beauty and the Beets", fr: "La Belle et la Betterave", genre: "Family", isNew: false, copies: 2, inn: 2 },
  { id: "m14", title: "Hocus Focus", fr: "Hocus Focus", genre: "Spooky", isNew: false, copies: 2, inn: 1 },
  { id: "m15", title: "Toastbusters", fr: "S.O.S. Rôties", genre: "Spooky", isNew: false, copies: 2, inn: 2 },
  { id: "m16", title: "Casper the Friendly Toast", fr: "Casper, la rôtie sympathique", genre: "Spooky", isNew: false, copies: 1, inn: 0 },
  { id: "m22", title: "Moosebumps", fr: "Chair d'orignal", genre: "Spooky", isNew: false, copies: 2, inn: 2 },
  { id: "m17", title: "Men in Beige", fr: "Les Hommes en beige", genre: "Sci-Fi", isNew: true, copies: 3, inn: 2 },
  { id: "m18", title: "Back to the Futon", fr: "Retour vers le futon", genre: "Sci-Fi", isNew: false, copies: 2, inn: 2 },
  { id: "m19", title: "Star Warts", fr: "La Guerre des étoiles de mer", genre: "Sci-Fi", isNew: false, copies: 2, inn: 1 },
  { id: "m20", title: "Independence Daze", fr: "Le Jour de l'Indépendinde", genre: "Sci-Fi", isNew: false, copies: 2, inn: 2 },
  { id: "m23", title: "E.T. Phone Bill", fr: "E.T. et la facture de téléphone", genre: "Sci-Fi", isNew: false, copies: 2, inn: 1 }
];

const GENRES = ["Action", "Comedy", "Family", "Spooky", "Sci-Fi"];

function priceOf(movie) {
  if (movie.fee !== undefined) return movie.fee; // a late fee on the bill
  return movie.isNew ? PRICE_NEW : PRICE_REG;
}

// The 30 avatars from the hockey game. Filenames are unchanged.
const CUSTOMERS = [
  { id: "c01", first: "Vince", last: "Rocket", image: "f01.png", genre: "Action" },
  { id: "c02", first: "Dom", last: "Comet", image: "f02.png", genre: "Sci-Fi" },
  { id: "c03", first: "J.K.", last: "Knucklepuck", image: "f03.png", genre: "Comedy" },
  { id: "c04", first: "Max", last: "Blaze", image: "f04.png", genre: "Action" },
  { id: "c05", first: "Nadia", last: "Frost", image: "f05.png", genre: "Comedy" },
  { id: "c06", first: "Lena", last: "Thunderfoot", image: "f06.png", genre: "Family" },
  { id: "c07", first: "Sam", last: "Whitlock", image: "f07.png", genre: "Spooky" },
  { id: "c08", first: "Crispy", last: "McShot", image: "f08.png", genre: "Comedy" },
  { id: "c09", first: "Ruby", last: "Ice", image: "f09.png", genre: "Family" },
  { id: "c10", first: "Talia", last: "Storm", image: "f10.png", genre: "Sci-Fi" },
  { id: "c11", first: "Mat", last: "Avanti", image: "f11.png", genre: "Action" },
  { id: "c12", first: "Vic", last: "Cements", image: "d01.png", genre: "Spooky" },
  { id: "c13", first: "Brandon", last: "Blazer", image: "d02.png", genre: "Action" },
  { id: "c14", first: "Tony", last: "Tornado", image: "d03.png", genre: "Action" },
  { id: "c15", first: "Maya", last: "Ironside", image: "d04.png", genre: "Sci-Fi" },
  { id: "c16", first: "Chidi", last: "Okafor", image: "d05.png", genre: "Action" },
  { id: "c17", first: "Priya", last: "Anand", image: "d06.png", genre: "Comedy" },
  { id: "c18", first: "Jonah", last: "Steele", image: "d07.png", genre: "Spooky" },
  { id: "c19", first: "Nora", last: "Kessler", image: "d08.png", genre: "Family" },
  { id: "c20", first: "Eli", last: "Granger", image: "d09.png", genre: "Sci-Fi" },
  { id: "c21", first: "Matt", last: "Disco", image: "d10.png", genre: "Comedy" },
  { id: "c22", first: "Goggles", last: "Pisano", image: "g01.png", genre: "Spooky" },
  { id: "c23", first: "Brit", last: "McEagle", image: "g02.png", genre: "Family" },
  { id: "c24", first: "Ella", last: "Frost", image: "g03.png", genre: "Family" },
  { id: "c25", first: "Tommy", last: "Nordin", image: "g04.png", genre: "Action" },
  { id: "c26", first: "Wyatt", last: "Cole", image: "g05.png", genre: "Sci-Fi" },
  { id: "c27", first: "Simone", last: "Rousseau", image: "g06.png", genre: "Comedy" },
  { id: "c28", first: "Leo", last: "Bastille", image: "g07.png", genre: "Action" },
  { id: "c29", first: "Freya", last: "Post", image: "g08.png", genre: "Spooky" },
  { id: "c30", first: "Jonny", last: "Buckets", image: "g09.png", genre: "Spooky" }
];

// Give everyone a pretend 555 phone number and email.
CUSTOMERS.forEach((c, i) => {
  c.phone = "555-01" + String(i + 1).padStart(2, "0");
  c.email = (c.first + "." + c.last).toLowerCase().replace(/[^a-z.]/g, "").replace(/\.+/g, ".") + "@mail.ca";
});

const BEA = { first: "Bea", last: "Kind", image: "bea.png" };

/* ---------- 4. DAYS ---------- */
// Each customer: who they are, what they want, and how they pay (bills/coins in cents).

const DAYS = [
  {
    id: "mon", name: "dayMon", desc: "descMon", ready: true, startHour: 10,
    intro: "intro_mon",
    questions: "q_mon",
    // The shape of the day stays the same; who comes in, what they want,
    // and how they pay are picked at random every time.
    recipe: [
      { type: "rent", tutorial: true },
      { type: "signup" },
      { type: "rent" }
    ]
  },
  {
    id: "tue", name: "dayTue", desc: "descTue", ready: true, startHour: 15,
    intro: "intro_tue",
    questions: "q_tue",
    hasReturns: true,
    today: "TUE MAR 11",
    dueDates: ["TUE MAR 11", "WED MAR 12"],   // on time: due today or tomorrow
    laterDates: ["WED MAR 12", "THU MAR 13"], // other people's rentals
    recipe: [
      { type: "rentMulti", count: 2, mixNew: true, tutorial: true },
      { type: "returnRent", count: 1 },
      { type: "rentReturned", count: 1 },
      { type: "rentMulti", count: 3, pays: [2000] }
    ]
  },
  {
    id: "wed", name: "dayWed", desc: "descWed", ready: true, startHour: 14,
    intro: "intro_wed",
    questions: "q_wed",
    deals: { reg: { count: 3, price: 750 }, new: { count: 2, price: 900 } },
    chartRows: [299, 499, 598, 750, 900, 998, 1249, 1650],
    recipe: [
      { type: "dealBundle", deal: "reg", tutorial: true },
      { type: "dealQuestion" },
      { type: "dealBundle", deal: "other" },
      { type: "dealMix", pays: [2000] }
    ]
  },
  {
    id: "thu", name: "dayThu", desc: "descThu", ready: true, startHour: 11,
    intro: "intro_thu",
    questions: "q_thu",
    methods: true,
    today: "THU MAR 13",
    recipe: [
      { type: "rentPay", count: 2, method: "debit", tutorial: true },
      { type: "rentPay", count: 2, method: "cash" },
      { type: "rentPay", count: 2, method: "credit" },
      { type: "rentPay", count: 3, method: "cheque" }
    ]
  },
  {
    id: "fri", name: "dayFri", desc: "descFri", ready: true, startHour: 16,
    intro: "intro_fri",
    questions: "q_fri",
    hasReturns: true,
    methods: true,
    payday: { hours: 12, rate: 1500, goal: 27000 },
    today: "FRI MAR 14",
    dueDates: ["FRI MAR 14", "SAT MAR 15"],          // on time
    laterDates: ["SAT MAR 15", "SUN MAR 16"],        // other people's rentals
    lateDates: [["WED MAR 12", 2], ["TUE MAR 11", 3]], // [due date, days late]
    recipe: [
      { type: "lateReturn", lateIndex: 0, count: 1, method: "cash", tutorial: true },
      { type: "returnRent", count: 2, method: "debit" },
      { type: "owesBalance", count: 1, method: "cash" },
      { type: "lateReturn", lateIndex: 1, count: 2, method: "random" }
    ]
  },
  {
    id: "sat", name: "daySat", desc: "descSat", ready: true, startHour: 10,
    noTips: true, // Bea is in the back room: no automatic tips, but Ask Bea still works
    intro: "intro_sat",
    questions: "q_sat",
    hasReturns: true,
    methods: true,
    today: "SAT MAR 15",
    dueDates: ["SAT MAR 15", "SUN MAR 16"],
    laterDates: ["SUN MAR 16", "MON MAR 17"],
    lateDates: [["THU MAR 13", 2]],
    recipe: [
      { type: "signup", count: 2, method: "cash" },
      { type: "rentOut", method: "credit" },
      { type: "lateReturn", lateIndex: 0, count: 1, method: "cash", friend: true },
      { type: "owesBalance", count: 2, method: "cheque" },
      { type: "returnRent", count: 3, method: "cash" }
    ]
  }
];

/* ---------- 5. SAVING STARS (browser storage, safe if blocked) ---------- */

const SAVE_KEY = "rewind.grade5.stars";

function loadStars() {
  try { return JSON.parse(localStorage.getItem(SAVE_KEY)) || {}; }
  catch (e) { return {}; }
}
function saveStars(dayId, stars) {
  try {
    const all = loadStars();
    all[dayId] = Math.max(all[dayId] || 0, stars);
    localStorage.setItem(SAVE_KEY, JSON.stringify(all));
  } catch (e) { /* storage blocked: stars just won't be remembered */ }
}

/* ---------- 6. GAME STATE ---------- */

const game = {
  mode: "classroom",
  clerk: "",
  day: null,
  introIndex: 0,
  custIndex: 0,
  members: [],
  movies: [],
  drawer: {},
  log: [],
  hints: 0,
  typing: { fields: 0, firstTryCorrect: 0 },
  closeAttempts: 0,
  closeCounted: false,
  // current customer
  cur: null
};

function freshCustomerState(spec) {
  return {
    spec,
    person: CUSTOMERS.find(c => c.id === spec.who),
    wants: spec.wants.slice(),
    step: spec.signup ? "signup" : spec.returns ? "return" : spec.question ? "question" : "member",
    questionWrongOnce: false,
    returnWrongOnce: false,
    member: null,
    items: [],
    sent: false,
    mood: 4,
    speech: spec.greetText,
    askedHigh: false,
    charged: null,
    ringFields: null,
    paid: [],
    tray: {},
    changeShortOnce: false,
    changeOver: 0,
    signupTries: 0,
    mistakes: 0,
    tab: spec.signup ? "newmember" : spec.returns ? "returns" : "members",
    retQuery: "",
    retResults: null,
    searchResults: null,
    searchQuery: "",
    titleResults: null,
    titleQuery: "",
    formValues: { first: "", last: "", phone: "", email: "", genre: "" },
    formErrors: {},
    crtMsg: ""
  };
}

/* ---------- 7. SCREENS ---------- */

function show(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  window.scrollTo(0, 0);
}

function fillStaticText() {
  document.querySelectorAll("[data-t]").forEach(el => {
    el.textContent = t(el.dataset.t);
  });
  document.getElementById("hint-btn").textContent = t("hint");
}

function portraitHTML(person) {
  const initials = (person.first[0] + person.last[0]).toUpperCase();
  return `<img src="avatars/${person.image}" alt="${person.first} ${person.last}"
    onerror="this.replaceWith(Object.assign(document.createElement('span'),{className:'initials',textContent:'${initials}'}))">`;
}

/* ---------- 8. TITLE SCREEN ---------- */

function renderTitle() {
  const stars = loadStars();
  const list = document.getElementById("day-list");
  list.innerHTML = DAYS.map(d => {
    const s = stars[d.id] || 0;
    const starHTML = d.ready
      ? `<span class="day-stars">${"★".repeat(s)}<span class="off">${"★".repeat(3 - s)}</span></span>`
      : `<span class="day-soon">${t("comingSoon")}</span>`;
    return `<button class="day-card" data-action="pick-day" data-day="${d.id}" ${d.ready ? "" : "disabled"}>
      <span class="day-name">${t(d.name)}</span>
      <span class="day-desc">${t(d.desc)}</span>
      ${starHTML}
    </button>`;
  }).join("");
  document.querySelectorAll(".mode-btn").forEach(b =>
    b.classList.toggle("selected", b.dataset.mode === game.mode));
  document.querySelectorAll(".lang-btn").forEach(b =>
    b.classList.toggle("selected", b.dataset.lang === LANG));
  document.getElementById("clerk-name").value = game.clerk;
  show("screen-title");
}

/* ---------- 9. INTRO ---------- */

function startDay(dayId) {
  game.day = DAYS.find(d => d.id === dayId);
  game.clerk = document.getElementById("clerk-name").value.trim();
  game.introIndex = 0;
  document.getElementById("bea-portrait").innerHTML = portraitHTML(BEA);
  renderIntro();
  show("screen-intro");
}

function renderIntro() {
  const lines = t(game.day.intro);
  document.getElementById("intro-text").textContent = lines[game.introIndex];
  document.getElementById("intro-count").textContent = (game.introIndex + 1) + " / " + lines.length;
  document.getElementById("intro-next").textContent =
    game.introIndex === lines.length - 1 ? t("letsGo") : t("next");
}

function introNext() {
  const lines = t(game.day.intro);
  if (game.introIndex < lines.length - 1) {
    game.introIndex++;
    renderIntro();
  } else {
    beginShift();
  }
}

/* ---------- 10. THE SHIFT ---------- */

/* ----- Random helpers ----- */

function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function fill(line, vars) {
  return line.replace("{name}", vars.name || "").replace("{title}", vars.title || "").replace("{ret}", vars.ret || "");
}

// "A", "A and B", "A, B and C"
function listTitles(movies) {
  const names = movies.map(m => m.title);
  if (names.length === 1) return names[0];
  return names.slice(0, -1).join(", ") + t("and") + names[names.length - 1];
}

// Ways customers pay. The game only uses ones that cover the cash total.
const PAY_OPTIONS = [[500], [1000], [2000], [500, 100], [200, 200], [200, 200, 100], [500, 200], [1000, 100], [1000, 500], [1000, 200]];

function pickPayment(items, extraSub, balance) {
  const fake = extraSub ? items.concat([{ fee: extraSub }]) : items;
  const cash = correctAmounts(fake, balance).cash;
  const options = PAY_OPTIONS.filter(p => p.reduce((s, x) => s + x, 0) >= cash);
  return pick(options).slice();
}

// Builds today's customers from the day's recipe.
function generateCustomers(day) {
  const people = shuffle(CUSTOMERS);
  const inStock = shuffle(MOVIES.filter(m => m.inn > 0));
  const outOfStock = shuffle(MOVIES.filter(m => m.inn === 0));
  const list = [];
  let signupId = null;

  const records = [];
  let returnedMovie = null;
  let usedDeal = null;

  // Takes one in-stock movie, optionally a new release or a regular
  function takeMovie(wantNew) {
    let i = inStock.length - 1;
    if (wantNew !== undefined) i = inStock.findIndex(m => m.isNew === wantNew);
    return inStock.splice(i, 1)[0];
  }

  day.recipe.forEach(r => {
    const person = people.pop();
    const name = person.first + " " + person.last;
    const movie = takeMovie();
    const spec = { who: person.id, tutorial: !!r.tutorial, wants: [movie.id] };

    if (r.type === "rentMulti") {
      const movies = [movie];
      if (r.mixNew) { inStock.push(movie); movies.length = 0; movies.push(takeMovie(true), takeMovie(false)); }
      while (movies.length < r.count) movies.push(takeMovie());
      spec.wants = movies.map(m => m.id);
      spec.greetText = fill(pick(t("greetMulti")), { name, title: listTitles(movies) });
    }
    if (r.type === "returnRent") {
      // Brings back a tape that's all rented out, then rents something new
      returnedMovie = outOfStock.pop();
      if (r.count > 1) {
        const movies = [movie];
        while (movies.length < r.count) movies.push(takeMovie());
        spec.wants = movies.map(m => m.id);
      }
      spec.returns = returnedMovie.id;
      spec.greetText = fill(pick(t("greetReturn")), { name, ret: returnedMovie.title });
      spec.requestText = fill(pick(t("requestAfterReturn")), {
        title: listTitles(spec.wants.map(id => MOVIES.find(m => m.id === id))) });
      records.push({ movieId: returnedMovie.id, who: person.id, name, due: pick(day.dueDates), late: false });
      // Other people who still have copies of the same movie
      const others = people.slice(0, Math.min(2, returnedMovie.copies - 1));
      others.forEach(o => records.push({
        movieId: returnedMovie.id, who: o.id, name: o.first + " " + o.last, due: pick(day.laterDates), late: false
      }));
    }
    if (r.type === "dealBundle" || r.type === "dealQuestion" || r.type === "dealMix") {
      inStock.push(movie); // put back; these customers pick by type
    }
    if (r.type === "dealQuestion") {
      // Asks whether one of the specials is a good deal, then rents that bundle
      const kind = pick(["reg", "new"]);
      usedDeal = kind;
      const d = day.deals[kind];
      const movies = [];
      for (let k = 0; k < d.count; k++) movies.push(takeMovie(kind === "new"));
      spec.wants = movies.map(m => m.id);
      spec.question = { kind, count: d.count, price: d.price, single: kind === "new" ? PRICE_NEW : PRICE_REG };
      const dealName = t(kind === "new" ? "dealNewName" : "dealRegName", { price: fmt(d.price) });
      spec.greetText = fill(pick(t("askDeal")), { name }).replace("{deal}", dealName);
      spec.requestText = fill(pick(t("dealThanks")), { title: listTitles(movies) })
        .replace("{save}", fmt(spec.question.single - d.price / d.count));
    }
    if (r.type === "dealBundle") {
      const kind = r.deal === "other" ? (usedDeal === "new" ? "reg" : "new") : r.deal;
      const movies = [];
      for (let k = 0; k < day.deals[kind].count; k++) movies.push(takeMovie(kind === "new"));
      spec.wants = movies.map(m => m.id);
      spec.greetText = fill(pick(t("greetMulti")), { name, title: listTitles(movies) });
    }
    if (r.type === "dealMix") {
      // 3 regular movies (special) plus 1 new release (regular price)
      const movies = [takeMovie(false), takeMovie(false), takeMovie(false), takeMovie(true)];
      spec.wants = movies.map(m => m.id);
      spec.greetText = fill(pick(t("greetMulti")), { name, title: listTitles(movies) });
    }
    if (r.type === "lateReturn") {
      // Brings back a tape late, pays the late fee, and rents something
      const [due, days] = day.lateDates[r.lateIndex];
      returnedMovie = outOfStock.pop();
      const movies = [movie];
      while (movies.length < r.count) movies.push(takeMovie());
      spec.wants = movies.map(m => m.id);
      spec.returns = returnedMovie.id;
      spec.lateDays = days;
      spec.greetText = fill(pick(t("greetLate")), { name, ret: returnedMovie.title });
      spec.requestText = fill(pick(t("requestAfterReturn")), { title: listTitles(movies) });
      records.push({ movieId: returnedMovie.id, who: person.id, name, due, late: true, daysLate: days });
      const others = people.slice(0, Math.min(2, returnedMovie.copies - 1));
      others.forEach(o => records.push({
        movieId: returnedMovie.id, who: o.id, name: o.first + " " + o.last, due: pick(day.laterDates), late: false
      }));
    }
    if (r.type === "owesBalance") {
      const movies = [movie];
      while (movies.length < r.count) movies.push(takeMovie());
      spec.wants = movies.map(m => m.id);
      spec.balance = pick([113, 226, 339]); // an old late fee, with tax
      spec.greetText = fill(pick(t("greetOwes")), { name, title: listTitles(movies) });
    }
    if (r.type === "rentPay") {
      const movies = [movie];
      while (movies.length < r.count) movies.push(takeMovie());
      spec.wants = movies.map(m => m.id);
      spec.method = r.method;
      spec.greetText = fill(pick(t("greetMulti")), { name, title: listTitles(movies) }) + " " + pick(t("payLine_" + r.method));
    }
    if (r.type === "rentReturned") {
      // Wants the tape the last customer just brought back, plus another
      const movies = [returnedMovie, movie];
      spec.wants = movies.map(m => m.id);
      spec.greetText = fill(pick(t("greetAskReturned")), { name, title: listTitles(movies), ret: returnedMovie.title });
    }

    if (r.type === "rent") {
      spec.greetText = fill(pick(t("greetRent")), { name, title: movie.title });
    }
    if (r.type === "signup") {
      signupId = person.id;
      spec.signup = true;
      spec.greetText = pick(t("greetSignup"));
      if (r.count > 1) {
        const movies = [movie];
        while (movies.length < r.count) movies.push(takeMovie());
        spec.wants = movies.map(m => m.id);
      }
      spec.requestText = fill(pick(t("requestAfterSignup")), {
        title: listTitles(spec.wants.map(id => MOVIES.find(m => m.id === id))) });
    }
    if (r.type === "rentOut") {
      const wanted = outOfStock.pop();
      spec.wants = [wanted.id];
      spec.greetText = fill(pick(t("greetRent")), { name, title: wanted.title });
      spec.outSwitch = { to: movie.id, lineText: fill(pick(t("switchWhenOut")), { title: movie.title }) };
    }
    if (r.friend) {
      // The honesty moment: a friend asks you to skip their late fee
      spec.friend = true;
      const titles = listTitles(spec.wants.map(id => MOVIES.find(m => m.id === id)));
      spec.greetText = pick(t("greetFriend")).replace("{first}", person.first).replace("{ret}", returnedMovie.title);
      spec.requestText = t("friendFair").replace("{title}", titles);
      spec.skipText = t("friendSkipThanks").replace("{title}", titles);
    }
    if (r.method) spec.method = r.method === "random" ? pick(["cash", "debit", "credit"]) : r.method;
    spec.pays = r.pays ? r.pays.slice() : pickPayment(spec.wants.map(id => MOVIES.find(m => m.id === id)),
      spec.lateDays ? spec.lateDays * 100 : 0, spec.balance);
    list.push(spec);
  });
  return { list, signupId, records };
}

function beginShift() {
  const generated = generateCustomers(game.day);
  game.customers = generated.list;
  game.records = generated.records;
  game.members = CUSTOMERS.filter(c => c.id !== generated.signupId).map((c, i) => {
    const owe = game.customers.find(s => s.who === c.id && s.balance);
    return { num: String(i + 1).padStart(4, "0"), id: c.id, first: c.first, last: c.last, phone: c.phone,
      balance: owe ? owe.balance : 0 };
  });
  game.movies = MOVIES.map(m => Object.assign({}, m));
  game.drawer = Object.assign({}, FLOAT);
  game.log = [];
  game.hints = 0;
  game.typing = { fields: 0, firstTryCorrect: 0 };
  game.custIndex = 0;
  game.closeAttempts = 0;
  game.closeCounted = false;
  game.countMissed = false;
  game.drawerDiff = 0;
  game.honesty = null;
  document.getElementById("bea-mini").innerHTML = portraitHTML(BEA);
  document.getElementById("status-clerk").textContent = game.clerk || t("clerkDefault");
  loadCustomer();
  show("screen-shift");
}

function loadCustomer() {
  const spec = game.customers[game.custIndex];
  game.cur = freshCustomerState(spec);
  hideTip();
  if (spec.tutorial) showTip(t("tip_member"), true);
  if (spec.signup && game.custIndex === 1) showTip(t("tip_signup"), true);
  if (!game.day.noTips && spec.returns && !game.customers.slice(0, game.custIndex).some(x => x.returns)) showTip(t("tip_return"), true);
  renderShift();
}

function renderShift() {
  const c = game.cur;
  const d = game.day;
  document.getElementById("status-day").textContent = t(d.name);
  const hour = d.startHour + game.custIndex;
  document.getElementById("status-time").textContent =
    LANG === "fr" ? hour + " h" : (hour > 12 ? hour - 12 : hour) + ":00 " + (hour >= 12 ? "pm" : "am");
  document.getElementById("status-customer").textContent =
    t("customerOf", { n: game.custIndex + 1, total: game.customers.length });

  // Customer panel
  document.getElementById("cust-portrait").innerHTML = portraitHTML(c.person);
  document.getElementById("cust-name").textContent =
    (c.spec.signup && !c.member) ? t("newCustomer") : c.person.first + " " + c.person.last;
  document.getElementById("cust-mood").innerHTML =
    `<span class="dot">${"●".repeat(c.mood)}</span><span class="dot off">${"●".repeat(5 - c.mood)}</span>`;
  document.getElementById("cust-speech").textContent = c.speech;
  document.getElementById("cust-extra").innerHTML = renderCustomerExtra();

  renderClipboard();
  renderTerminal();
  renderRegister();
  renderDrawer();
}

function renderCustomerExtra() {
  const c = game.cur;
  let html = "";
  if (c.spec.signup && c.step === "signup") {
    const p = c.person;
    html += `<div class="app-card">
      <h4>${t("appCardHead")}</h4>
      <table>
        <tr><td>${t("cardFirst")}</td><td>${p.first}</td></tr>
        <tr><td>${t("cardLast")}</td><td>${p.last}</td></tr>
        <tr><td>${t("cardPhone")}</td><td>${p.phone}</td></tr>
        <tr><td>${t("cardEmail")}</td><td>${p.email}</td></tr>
        <tr><td>${t("cardGenre")}</td><td>${t("genre_" + p.genre)}</td></tr>
      </table>
      <p class="fine">${t("appCardFine")}</p>
    </div>`;
  }
  if (c.spec.question && c.step === "question") {
    const q = c.spec.question;
    html += `<div class="app-card q-card">
      <h4>${t("qCardHead")}</h4>
      <label for="q-unit">${t("qUnitLabel")}</label>
      <div class="inline"><span>$</span><input id="q-unit" type="text" inputmode="decimal" autocomplete="off"></div>
      <p class="q-which">${t("qWhich")}</p>
      <div class="inline">
        <button class="btn small" data-action="deal-answer" data-choice="special">${t("qSpecial")}</button>
        <button class="btn small" data-action="deal-answer" data-choice="single">${t("qSingle", { single: fmt(q.single) })}</button>
      </div>
      <p id="q-feedback" class="feedback"></p>
    </div>`;
  }
  if (c.spec.returns && c.step === "return") {
    const m = game.movies.find(x => x.id === c.spec.returns);
    html += `<div class="cash-hand">${t("returnedTape")} <span class="tape">${m.title}</span></div>`;
  }
  if (c.spec.method) {
    html += `<div class="cash-hand">${t("payingWith")} <span class="pay-chip">${t("method_" + c.spec.method)}</span></div>`;
  }
  if ((c.step === "pay" || c.step === "done") && c.paid.length) {
    html += `<div class="cash-hand">${t("custPays")} ${c.paid.map(moneyStatic).join("")}</div>`;
  }
  return html;
}

function moneyStatic(d) {
  const kind = d >= 500 ? "bill" : "coin";
  return `<span class="money ${kind} d${d}" style="display:inline-flex;align-items:center;justify-content:center;cursor:default">${denomLabel(d)}</span>`;
}

/* ----- Clipboard ----- */

function renderClipboard() {
  const c = game.cur;
  const order = c.spec.signup
    ? ["signup", "title", "ring", "pay"]
    : c.spec.question
    ? ["question", "member", "title", "ring", "pay"]
    : c.spec.returns
      ? ["return", "member", "title", "ring", "pay"]
      : ["member", "title", "ring", "pay"];
  const idx = c.step === "done" ? order.length : order.indexOf(c.step);
  document.getElementById("clip-steps").innerHTML = order.map((s, i) => {
    const cls = i < idx ? "done" : (i === idx ? "current" : "");
    const label = s === "pay" && methodOf(c) !== "cash" ? t("step_payCard") : t("step_" + s);
    return `<li class="${cls}">${label}</li>`;
  }).join("");
}

/* ----- Store computer ----- */

function renderTerminal() {
  const c = game.cur;
  document.querySelectorAll(".crt-tabs button").forEach(b => {
    b.classList.toggle("active", b.dataset.tab === c.tab);
    if (b.dataset.tab === "returns") b.classList.toggle("hidden", !game.day.hasReturns);
  });
  const body = document.getElementById("crt-body");
  if (c.tab === "members") body.innerHTML = termMembers();
  if (c.tab === "newmember") body.innerHTML = termNewMember();
  if (c.tab === "titles") body.innerHTML = termTitles();
  if (c.tab === "rental") body.innerHTML = termRental();
  if (c.tab === "returns") body.innerHTML = termReturns();
  const focusable = body.querySelector("input");
  if (focusable && !body.dataset.noFocus) focusable.focus();
}

function termMembers() {
  const c = game.cur;
  let html = `<p>${t("searchPrompt")}</p>
    <div class="crt-row">
      <input id="member-q" type="text" value="${escapeAttr(c.searchQuery)}" autocomplete="off" data-enter="member-search">
      <button class="crt-btn" data-action="member-search">${t("search")}</button>
    </div>`;
  if (c.searchResults) {
    if (c.searchResults.length === 0) html += `<p class="crt-warn">${c.searchQuery ? t("noResults") : t("typeSomething")}</p>`;
    else {
      html += `<table class="crt-table">` + c.searchResults.map(m =>
        `<tr><td>#${m.num}</td><td>${m.last.toUpperCase()}, ${m.first.toUpperCase()}</td>
         <td class="crt-dim">${m.phone}</td>
         <td class="crt-warn">${m.balance ? t("owes", { amt: fmt(m.balance) }) : ""}</td>
         <td><button class="crt-btn" data-action="member-select" data-num="${m.num}">${t("select")}</button></td></tr>`
      ).join("") + `</table>`;
    }
  }
  if (c.member) html += `<p>${t("memberSelected")} #${c.member.num} ${c.member.last.toUpperCase()}, ${c.member.first.toUpperCase()}</p>`;
  if (c.member && c.member.balance) html += `<p class="crt-warn">${t("balanceLine", { amt: fmt(c.member.balance) })}</p>`;
  if (c.crtMsg) html += `<p class="crt-warn">${c.crtMsg}</p>`;
  return html;
}

function termNewMember() {
  const c = game.cur;
  const v = c.formValues;
  const e = c.formErrors;
  const field = (key, label) => `<label for="nm-${key}">${label}</label>
    <input id="nm-${key}" type="text" autocomplete="off" value="${escapeAttr(v[key])}" class="${e[key] ? "error" : ""}" data-field="${key}">`;
  const genreOpts = [`<option value="">${t("chooseGenre")}</option>`]
    .concat(GENRES.map(g => `<option value="${g}" ${v.genre === g ? "selected" : ""}>${t("genre_" + g).toUpperCase()}</option>`)).join("");
  let html = `<p>${t("newMemberHead")}</p>
    <div class="crt-form">
      ${field("first", t("fFirst"))}
      ${field("last", t("fLast"))}
      ${field("phone", t("fPhone"))}
      ${field("email", t("fEmail"))}
      <label for="nm-genre">${t("fGenre")}</label>
      <select id="nm-genre" data-field="genre" class="${e.genre ? "error" : ""}">${genreOpts}</select>
    </div>
    <div class="crt-row" style="margin-top:10px">
      <button class="crt-btn" data-action="save-member">${t("save")}</button>
    </div>`;
  if (c.crtMsg) html += `<p class="crt-warn">${c.crtMsg}</p>`;
  return html;
}

function termTitles() {
  const c = game.cur;
  let html = `<p>${t("titlePrompt")}</p>
    <div class="crt-row">
      <input id="title-q" type="text" value="${escapeAttr(c.titleQuery)}" autocomplete="off" data-enter="title-search">
      <button class="crt-btn" data-action="title-search">${t("search")}</button>
    </div>`;
  if (c.titleResults) {
    if (c.titleResults.length === 0) html += `<p class="crt-warn">${t("noTitles")}</p>`;
    else {
      html += `<table class="crt-table">` + c.titleResults.map(m => {
        const out = m.inn === 0;
        const action = out
          ? `<span class="crt-bad">${t("allOut")}</span> <button class="crt-btn ghost" data-action="tell-out" data-id="${m.id}">${t("tellOut")}</button>`
          : `<button class="crt-btn" data-action="add-title" data-id="${m.id}">${t("add")}</button>`;
        return `<tr><td>${m.title.toUpperCase()}</td>
          <td class="crt-dim">${t("genre_" + m.genre).toUpperCase()}${m.isNew ? " · " + t("newRelease") : ""}</td>
          <td>${fmt(priceOf(m))}</td>
          <td class="crt-dim">${t("inCount", { inn: m.inn, total: m.copies })}</td>
          <td>${action}</td></tr>`;
      }).join("") + `</table>`;
    }
  }
  if (c.crtMsg) html += `<p class="crt-warn">${c.crtMsg}</p>`;
  return html;
}

function termReturns() {
  const c = game.cur;
  let html = `<p>${t("today")} ${dateLabel(game.day.today)}</p>
    <p>${t("retTitlePrompt")}</p>
    <div class="crt-row">
      <input id="ret-q" type="text" value="${escapeAttr(c.retQuery)}" autocomplete="off" data-enter="return-search">
      <button class="crt-btn" data-action="return-search">${t("search")}</button>
    </div>`;
  if (c.retResults) {
    if (c.retResults.length === 0) html += `<p class="crt-warn">${c.retQuery ? t("noOpenRentals") : t("typeSomething")}</p>`;
    else {
      html += `<table class="crt-table crt-returns">
        <tr class="crt-dim"><td>${t("colTitle")}</td><td>${t("colMember")}</td><td>${t("colDue")}</td><td></td></tr>` +
        c.retResults.map(r => {
          const m = game.movies.find(x => x.id === r.movieId);
          const i = game.records.indexOf(r);
          if (c.lateRecord === i) {
            return `<tr><td class="crt-dim">${m.title.toUpperCase()}</td><td>${r.name.toUpperCase()}</td><td>${dateLabel(r.due)}</td><td></td></tr>
              <tr><td colspan="4">
                <div class="late-form">
                  <span class="crt-dim">${t("lateRule")}</span>
                  <label>${t("lateDaysLabel")} <input id="late-days" type="text" inputmode="numeric" autocomplete="off"></label>
                  <label>${t("lateFeeLabel")}<input id="late-fee" type="text" inputmode="decimal" autocomplete="off" data-enter="late-add"></label>
                  <button class="crt-btn" data-action="late-add">${t("addFee")}</button>
                  ${c.spec.friend ? `<button class="crt-btn ghost" data-action="late-skip">${t("skipFee")}</button>` : ""}
                </div>
              </td></tr>`;
          }
          return `<tr><td class="crt-dim">${m.title.toUpperCase()}</td>
            <td>${r.name.toUpperCase()}</td>
            <td>${dateLabel(r.due)}</td>
            <td><button class="crt-btn" data-action="check-in" data-i="${i}" data-late="0">${t("onTime")}</button>
                <button class="crt-btn ghost" data-action="check-in" data-i="${i}" data-late="1">${t("late")}</button></td></tr>`;
        }).join("") + `</table>`;
    }
  }
  if (c.crtMsg) html += `<p class="crt-warn">${c.crtMsg}</p>`;
  return html;
}

function termRental() {
  const c = game.cur;
  let html = `<p>${t("rentalHead")}</p>`;
  html += `<p>${c.member ? t("memberLine", { num: c.member.num, name: (c.member.last + ", " + c.member.first).toUpperCase() }) : t("noMember")}</p>`;
  if (c.member && c.member.balance) html += `<p class="crt-warn">${t("balanceLine", { amt: fmt(c.member.balance) })}</p>`;
  if (c.items.length === 0) html += `<p class="crt-dim">${t("noItems")}</p>`;
  else html += `<table class="crt-table">` + c.items.map(m =>
    `<tr><td>${m.title.toUpperCase()}</td><td>${fmt(priceOf(m))}</td></tr>`).join("") + `</table>`;
  html += `<div class="crt-row" style="margin-top:10px">
    <button class="crt-btn" data-action="send-register" ${c.sent ? "disabled" : ""}>${t("sendToRegister")}</button>
  </div>`;
  if (c.crtMsg) html += `<p class="crt-warn">${c.crtMsg}</p>`;
  return html;
}

// "Rétréci" and "retreci" match each other
function norm(s) {
  return String(s || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function escapeAttr(s) {
  return String(s || "").replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
}

/* ----- Terminal actions ----- */

function memberSearch() {
  const c = game.cur;
  const q = document.getElementById("member-q").value.trim();
  c.searchQuery = q;
  c.crtMsg = "";
  if (!q) { c.searchResults = []; renderTerminal(); return; }
  const ql = q.toLowerCase();
  const qDigits = q.replace(/\D/g, "");
  c.searchResults = game.members.filter(m =>
    norm(m.last).includes(norm(ql)) ||
    norm(m.first).includes(norm(ql)) ||
    (qDigits.length >= 3 && m.phone.replace(/\D/g, "").includes(qDigits)));
  renderTerminal();
}

function memberSelect(num) {
  const c = game.cur;
  const m = game.members.find(x => x.num === num);
  if (m.id !== c.person.id) {
    customerSays(t("notMe"));
    moodDown();
    return;
  }
  c.member = m;
  c.crtMsg = "";
  if (c.step === "member") {
    c.step = "title";
    c.tab = "titles";
    if (c.spec.tutorial) showTip(t("tip_title"), true);
  }
  renderShift();
}

function saveMember() {
  const c = game.cur;
  const p = c.person;
  const v = {};
  ["first", "last", "phone", "email"].forEach(k => {
    v[k] = document.getElementById("nm-" + k).value.trim();
  });
  v.genre = document.getElementById("nm-genre").value;
  c.formValues = v;

  const same = (a, b) => norm(a.trim()) === norm(b.trim());
  const digits = s => s.replace(/\D/g, "");
  const errors = {
    first: !same(v.first, p.first),
    last: !same(v.last, p.last),
    phone: digits(v.phone) !== digits(p.phone),
    email: !same(v.email, p.email),
    genre: v.genre !== p.genre
  };
  c.formErrors = errors;

  // Typing accuracy counts only the first attempt at each field.
  if (c.signupTries === 0) {
    for (const k in errors) {
      game.typing.fields++;
      if (!errors[k]) game.typing.firstTryCorrect++;
    }
  }
  c.signupTries++;

  const anyError = Object.values(errors).some(Boolean);
  if (anyError) {
    if (c.signupTries === 1) c.mistakes++;
    c.crtMsg = t("checkRed");
    renderTerminal();
    return;
  }

  const num = String(game.members.length + 1).padStart(4, "0");
  const m = { num, id: p.id, first: p.first, last: p.last, phone: p.phone };
  game.members.push(m);
  c.member = m;
  c.crtMsg = t("savedMember", { num });
  c.step = "title";
  c.tab = "titles";
  c.speech = c.spec.requestText;
  renderShift();
}

function returnSearch() {
  const c = game.cur;
  const raw = document.getElementById("ret-q").value.trim();
  c.retQuery = raw;
  c.crtMsg = "";
  const q = raw.toLowerCase();
  c.retResults = q ? game.records.filter(r =>
    !r.done && norm(game.movies.find(m => m.id === r.movieId).title).includes(norm(q))) : [];
  renderTerminal();
}

function dealAnswer(choice) {
  const c = game.cur;
  const q = c.spec.question;
  const fb = document.getElementById("q-feedback");
  const val = parseMoney(document.getElementById("q-unit").value);
  if (val === null) { fb.className = "feedback warn"; fb.textContent = t("qNeedNumber"); return; }
  const right = q.price / q.count;
  if (val === right && choice === "special") {
    c.step = "member";
    c.speech = c.spec.requestText;
    hideTip();
    renderShift();
    return;
  }
  if (!c.questionWrongOnce) { c.questionWrongOnce = true; c.mistakes++; }
  customerSays(t("qHmm"));
  showTip(t("tip_question_wrong").replace("{price}", fmt(q.price)).replace("{count}", q.count).replace("{single}", fmt(q.single)));
}

function checkIn(i, saidLate) {
  const c = game.cur;
  const r = game.records[i];
  if (!r || r.done) { c.crtMsg = t("alreadyBack"); renderTerminal(); return; }
  if (c.step !== "return" || r.who !== c.person.id) {
    customerSays(t("notMyTape"));
    moodDown();
    return;
  }
  if (saidLate !== r.late) {
    if (!c.returnWrongOnce) { c.returnWrongOnce = true; c.mistakes++; }
    showTip(t(r.late ? "tip_late_wrong" : "tip_return_wrong").replace("{due}", dateLabel(r.due)).replace("{today}", dateLabel(game.day.today)));
    return;
  }
  if (r.late) {
    // Show the late-fee form under the rental
    c.lateRecord = i;
    c.crtMsg = "";
    renderTerminal();
    const d = document.getElementById("late-days");
    if (d) d.focus();
    return;
  }
  r.done = true;
  const m = game.movies.find(x => x.id === r.movieId);
  m.inn = Math.min(m.copies, m.inn + 1);
  c.returned = m.title;
  c.retResults = null;
  c.crtMsg = t("checkedIn", { title: m.title.toUpperCase() });
  c.speech = c.spec.requestText;
  c.step = c.member ? "title" : "member";
  c.tab = c.member ? "titles" : "members";
  hideTip();
  renderShift();
}

function lateAdd() {
  const c = game.cur;
  const r = game.records[c.lateRecord];
  const days = parseInt(document.getElementById("late-days").value, 10);
  const fee = parseMoney(document.getElementById("late-fee").value);
  if (days !== r.daysLate || fee !== r.daysLate * 100) {
    if (!c.lateWrongOnce) { c.lateWrongOnce = true; c.mistakes++; }
    c.crtMsg = t("lateWrong");
    renderTerminal();
    showTip(t("tip_late_fee").replace("{due}", dateLabel(r.due)).replace("{today}", dateLabel(game.day.today)));
    return;
  }
  r.done = true;
  const m = game.movies.find(x => x.id === r.movieId);
  m.inn = Math.min(m.copies, m.inn + 1);
  c.items.push({ id: "fee", title: t("lateFeeItem", { title: m.title, days: r.daysLate }), fee });
  if (c.spec.friend) game.honesty = { choice: "charged", first: c.person.first, fee };
  c.returned = m.title;
  c.retResults = null;
  c.lateRecord = null;
  c.crtMsg = t("checkedInLate", { title: m.title.toUpperCase() });
  c.speech = c.spec.requestText;
  c.step = c.member ? "title" : "member";
  c.tab = c.member ? "titles" : "members";
  hideTip();
  renderShift();
}

// The friend's fee is skipped: the tape goes back, but no fee goes on the bill.
// The computer still expects the fee, so the drawer will come up short.
function lateSkip() {
  const c = game.cur;
  const r = game.records[c.lateRecord];
  r.done = true;
  const m = game.movies.find(x => x.id === r.movieId);
  m.inn = Math.min(m.copies, m.inn + 1);
  const fee = r.daysLate * 100;
  c.skippedFee = fee;
  game.honesty = { choice: "skipped", first: c.person.first, fee };
  c.returned = m.title;
  c.retResults = null;
  c.lateRecord = null;
  c.crtMsg = t("skippedIn", { title: m.title.toUpperCase() });
  c.speech = c.spec.skipText;
  c.step = c.member ? "title" : "member";
  c.tab = c.member ? "titles" : "members";
  hideTip();
  renderShift();
}

function titleSearch() {
  const c = game.cur;
  const q = document.getElementById("title-q").value.trim().toLowerCase();
  c.titleQuery = document.getElementById("title-q").value.trim();
  c.crtMsg = "";
  c.titleResults = q ? game.movies.filter(m => norm(m.title).includes(norm(q))) : [];
  renderTerminal();
}

function addTitle(id) {
  const c = game.cur;
  if (c.step !== "title") return;
  const m = game.movies.find(x => x.id === id);
  if (!c.wants.includes(id)) {
    customerSays(t("notThatMovie"));
    moodDown();
    return;
  }
  if (c.items.find(x => x.id === id)) { customerSays(t("alreadyAdded")); return; }
  c.items.push(m);
  c.crtMsg = t("addedTitle", { title: m.title.toUpperCase() });
  // Every wanted movie added? Move on.
  if (c.wants.every(w => c.items.find(x => x.id === w))) {
    c.tab = "rental";
    c.crtMsg = "";
    if (c.spec.tutorial) showTip(t("tip_send"), true);
  }
  renderShift();
}

function tellOut(id) {
  const c = game.cur;
  const sw = c.spec.outSwitch;
  if (sw && c.wants.includes(id)) {
    c.wants = c.wants.map(w => (w === id ? sw.to : w));
    customerSays(sw.lineText);
    return;
  }
  // Told them a movie is out when they didn't ask for it
  customerSays(t("notThatMovie"));
}

function sendRegister() {
  const c = game.cur;
  if (!c.member || !c.wants.every(w => c.items.find(x => x.id === w))) {
    c.crtMsg = t("needMemberAndMovie");
    renderTerminal();
    return;
  }
  c.sent = true;
  c.step = "ring";
  c.crtMsg = t("sent");
  c.items.forEach(m => { if (m.fee === undefined) m.inn = Math.max(0, m.inn - 1); });
  if (c.spec.tutorial) {
    showTip(game.day.deals ? dealTipText()
      : c.items.some(m => m.fee !== undefined) ? t("tip_ring_fee")
      : game.day.methods ? t("tip_ring_method").replace("{method}", t("method_" + methodOf(c)).toLowerCase())
      : t("tip_ring"), true);
  }
  renderShift();
  const first = document.getElementById("ring-sub");
  if (first) first.focus();
}

/* ----- Register ----- */

// Subtotal, using today's specials when the movies fit one.
function subtotalOf(allItems) {
  const fees = allItems.filter(m => m.fee !== undefined).reduce((s, m) => s + m.fee, 0);
  return fees + movieSubtotal(allItems.filter(m => m.fee === undefined));
}

function movieSubtotal(items) {
  const deals = game.day && game.day.deals;
  const reg = items.filter(m => !m.isNew).length;
  const nw = items.filter(m => m.isNew).length;
  if (!deals) return reg * PRICE_REG + nw * PRICE_NEW;
  const r = deals.reg, n = deals.new;
  return Math.floor(reg / r.count) * r.price + (reg % r.count) * PRICE_REG +
         Math.floor(nw / n.count) * n.price + (nw % n.count) * PRICE_NEW;
}

// balance = money the member already owed from before (tax was already included)
function correctAmounts(items, balance) {
  const sub = subtotalOf(items);
  const tax = taxOf(sub);
  const total = sub + tax;
  const bal = balance || 0;
  return { sub, tax, total, bal, owed: total + bal, cash: round5(total + bal) };
}

function correctChargeWithFee(c) {
  const a = correctAmounts(c.items.concat([{ fee: c.skippedFee }]), c.spec.balance);
  return methodOf(c) === "cash" ? a.cash : a.owed;
}

function methodOf(c) { return c.spec.method || "cash"; }

// What the customer should be charged: cash is rounded, everything else is exact.
function correctCharge(c) {
  const a = correctAmounts(c.items, c.spec.balance);
  return methodOf(c) === "cash" ? a.cash : a.owed;
}

function renderRegister() {
  const c = game.cur;
  const body = document.getElementById("register-body");
  if (["member", "signup", "title", "return", "question"].includes(c.step)) {
    const d = game.day.deals;
    body.innerHTML = (d ? `<div class="deal-sign">
      <strong>${t("dealSign")}</strong>
      <span>${t("dealRegLine", { price: fmt(d.reg.price) })}</span>
      <span>${t("dealNewLine", { price: fmt(d.new.price) })}</span>
    </div>` : "") + `<p class="register-idle">${t("registerIdle")}</p>`;
    return;
  }
  const deals = game.day.deals;
  const sign = deals ? `<div class="deal-sign">
      <strong>${t("dealSign")}</strong>
      <span>${t("dealRegLine", { price: fmt(deals.reg.price) })}</span>
      <span>${t("dealNewLine", { price: fmt(deals.new.price) })}</span>
    </div>` : "";
  const items = sign + `<ul class="ring-items">${c.items.map(m =>
    `<li><span>${m.title}</span><span>${fmt(priceOf(m))}</span></li>`).join("")}</ul>`;

  if (c.step === "ring") {
    const f = c.ringFields || { sub: "", tax: "", total: "", bal: "", cash: "" };
    const balRow = c.spec.balance
      ? `<label for="ring-bal">${t("balanceOwing")}<span class="sub-label">${t("balanceSub")}</span></label><input id="ring-bal" type="text" inputmode="decimal" value="${escapeAttr(f.bal)}" autocomplete="off">`
      : "";
    body.innerHTML = items + `
      <div class="ring-form">
        <label for="ring-sub">${t("subtotal")}</label><input id="ring-sub" type="text" inputmode="decimal" value="${escapeAttr(f.sub)}" autocomplete="off">
        <label for="ring-tax">${t("hst")}</label><input id="ring-tax" type="text" inputmode="decimal" value="${escapeAttr(f.tax)}" autocomplete="off">
        <label for="ring-total">${t("total")}</label><input id="ring-total" type="text" inputmode="decimal" value="${escapeAttr(f.total)}" autocomplete="off">
        ${balRow}
        <label for="ring-cash">${game.day.methods ? t("chargeLabel") : t("cashTotal")}<span class="sub-label">${game.day.methods ? t("chargeSub") : t("cashTotalSub")}</span></label><input id="ring-cash" type="text" inputmode="decimal" value="${escapeAttr(f.cash)}" autocomplete="off" data-enter="ring-up">
      </div>
      <p id="ring-feedback" class="feedback"></p>
      <div class="ring-actions"><button class="btn primary" data-action="ring-up">${t("ringUp")}</button></div>`;
  } else {
    body.innerHTML = items + `<p class="feedback">${t("charged", { amt: fmt(c.charged) })}</p>`;
  }
}

function ringUp() {
  const c = game.cur;
  const raw = {
    sub: document.getElementById("ring-sub").value,
    tax: document.getElementById("ring-tax").value,
    total: document.getElementById("ring-total").value,
    cash: document.getElementById("ring-cash").value,
    bal: c.spec.balance ? document.getElementById("ring-bal").value : "0"
  };
  c.ringFields = raw;
  const val = {};
  for (const k in raw) val[k] = parseMoney(raw[k]);
  const fb = document.getElementById("ring-feedback");

  if (Object.values(val).some(v => v === null)) {
    fb.className = "feedback warn";
    fb.textContent = t("fillAll");
    return;
  }
  const method = methodOf(c);
  if (method === "cash" && val.cash % 5 !== 0) {
    showTip(t("notCents"), true);
    return;
  }

  const right = correctAmounts(c.items, c.spec.balance);
  const charge = correctCharge(c);

  // Overcharging: the customer notices once and asks you to check.
  if (val.cash > charge && !c.askedHigh) {
    c.askedHigh = true;
    c.mistakes++;
    moodDown();
    customerSays(t(method !== "cash" ? "tooHighCard" : game.day.deals ? "tooHighDeal" : "tooHigh"));
    return;
  }
  const fieldsRight = val.sub === right.sub && val.tax === right.tax &&
    val.total === right.total && val.bal === right.bal && val.cash === charge;
  if (!fieldsRight && !c.askedHigh) c.mistakes++;
  c.speech = val.cash > charge ? t("paysAnyway") : t("hereYouGo");

  c.charged = val.cash;
  c.ringCorrect = fieldsRight;

  if (method === "cash") {
    // Customer hands over their cash (they add a $20 if it isn't enough).
    c.paid = c.spec.pays.slice();
    while (c.paid.reduce((s, x) => s + x, 0) < c.charged) c.paid.push(2000);
    c.paid.forEach(d => { game.drawer[d] = (game.drawer[d] || 0) + 1; });
  } else {
    c.paid = [];
    if (method === "cheque") c.speech = t("chequeAmountAsk");
  }

  c.step = "pay";
  if (c.spec.tutorial) showTip(t(method === "cash" ? "tip_pay" : method === "cheque" ? "tip_cheque" : "tip_card"), true);
  renderShift();
}

/* ----- Cash drawer ----- */

function trayTotal() {
  const tr = game.cur.tray;
  return DENOMS.reduce((s, d) => s + d * (tr[d] || 0), 0);
}

function moneyButton(d, count, action) {
  const kind = d >= 500 ? "bill" : "coin";
  return `<button class="money ${kind} d${d}" data-action="${action}" data-d="${d}" ${count > 0 ? "" : "disabled"}
    aria-label="${denomLabel(d)}, ${count} left">${denomLabel(d)}<span class="count">${count}</span></button>`;
}

function renderDrawer() {
  const c = game.cur;
  const body = document.getElementById("drawer-body");
  if (c.step !== "pay" && c.step !== "done") {
    body.innerHTML = `<p class="drawer-idle">${t("drawerIdle")}</p>
      <div class="money-grid">${DENOMS.map(d => moneyButton(d, game.drawer[d] || 0, "none")).join("")}</div>`;
    body.querySelectorAll(".money").forEach(b => (b.disabled = true));
    return;
  }
  if (c.step === "done") {
    const last = game.custIndex === game.customers.length - 1;
    const flow = game.day.methods
      ? `<p class="flow-note">${t("flow_" + methodOf(c)).replace("{first}", c.person.first)}</p>` : "";
    body.innerHTML = `<p class="feedback good">${c.changeOver > 0 ? t("thanksExtra") : t("thanks")}</p>
      ${flow}
      <div class="drawer-actions">
        <button class="btn primary" data-action="${last ? "close-register" : "next-customer"}">${last ? t("closeRegister") : t("nextCustomer")}</button>
      </div>`;
    return;
  }
  if (methodOf(c) === "debit" || methodOf(c) === "credit") { body.innerHTML = cardTerminalHTML(); return; }
  if (methodOf(c) === "cheque") { body.innerHTML = chequeHTML(); return; }
  const tr = c.tray;
  const trayItems = DENOMS.filter(d => tr[d]).map(d => {
    let s = "";
    for (let i = 0; i < tr[d]; i++) s += moneyButton(d, 1, "tray-remove").replace(/<span class="count">1<\/span>/, "");
    return s;
  }).join("");
  const due = c.paid.reduce((s, x) => s + x, 0) - c.charged;
  body.innerHTML = `
    <p class="drawer-idle">${t("changeDue")}</p>
    <div class="money-grid">${DENOMS.map(d => moneyButton(d, game.drawer[d] || 0, "tray-add")).join("")}</div>
    <div class="tray">
      <p class="tray-label">${t("trayLabel")}</p>
      <div class="money-grid">${trayItems}</div>
      <p class="tray-total">${t("trayTotal", { amt: fmt(trayTotal()) })}</p>
    </div>
    <p id="pay-feedback" class="feedback"></p>
    <div class="drawer-actions">
      <button class="btn primary" data-action="give-change">${due === 0 && trayTotal() === 0 ? t("noChangeNeeded") : t("giveChange")}</button>
    </div>`;
}

function cardTerminalHTML() {
  const c = game.cur;
  const m = methodOf(c);
  return `<div class="terminal">
      <div class="terminal-screen">
        <p>${t("termHead")} · ${m.toUpperCase()}</p>
        <p>${t("termAmount")}: ${fmt(c.charged)}</p>
        ${c.cardStage ? `<p>${t(m === "debit" ? "termPin" : "termSign")}</p><p class="ok-text">${t("termApproved")}</p>` : ""}
      </div>
    </div>
    <div class="drawer-actions">
      <button class="btn primary" data-action="card-pay">${t("termInsert")}</button>
    </div>`;
}

function cardPay() {
  const c = game.cur;
  c.cardStage = 1;
  renderDrawer();
  setTimeout(finishCustomer, 900);
}

function chequeHTML() {
  const c = game.cur;
  const signed = !!c.chequeAmount;
  return `<div class="cheque">
      <div class="cheque-top"><span>${c.person.first.toUpperCase()} ${c.person.last.toUpperCase()}</span>
        <span>${t("chequeDate")}: ${dateLabel(game.day.today)}</span></div>
      <p>${t("chequePayTo")}: <span class="handwriting">REWIND Video</span></p>
      <div class="inline">
        <label for="cheque-amt">${t("chequeAmountLabel")}</label>
        <span>$</span><input id="cheque-amt" type="text" inputmode="decimal" autocomplete="off"
          value="${signed ? num(c.chequeAmount) : ""}" ${signed ? "readonly" : ""}>
      </div>
      <p class="cheque-sign">${signed ? `<span class="handwriting">${c.person.first} ${c.person.last}</span>` : "&nbsp;"}</p>
    </div>
    <p id="pay-feedback" class="feedback"></p>
    <div class="drawer-actions">
      ${signed
        ? `<button class="btn primary" data-action="cheque-accept">${t("chequeAccept")}</button>`
        : `<button class="btn primary" data-action="cheque-sign">${t("chequeSign")}</button>`}
    </div>`;
}

function chequeSign() {
  const c = game.cur;
  const fb = document.getElementById("pay-feedback");
  const val = parseMoney(document.getElementById("cheque-amt").value);
  if (val === null) { fb.className = "feedback warn"; fb.textContent = t("fillAll"); return; }
  if (val !== c.charged) {
    if (!c.chequeWrongOnce) { c.chequeWrongOnce = true; c.mistakes++; }
    fb.className = "feedback bad";
    fb.textContent = t("chequeWrong", { amt: fmt(c.charged) });
    return;
  }
  c.chequeAmount = val;
  customerSays(t("hereYouGo"));
  renderDrawer();
}

function trayAdd(d) {
  if ((game.drawer[d] || 0) <= 0) return;
  game.drawer[d]--;
  game.cur.tray[d] = (game.cur.tray[d] || 0) + 1;
  renderDrawer();
}

function trayRemove(d) {
  const tr = game.cur.tray;
  if (!tr[d]) return;
  tr[d]--;
  game.drawer[d]++;
  renderDrawer();
}

function giveChange() {
  const c = game.cur;
  const due = c.paid.reduce((s, x) => s + x, 0) - c.charged;
  const given = trayTotal();
  if (given < due) {
    if (!c.changeShortOnce) { c.changeShortOnce = true; c.mistakes++; }
    moodDown();
    customerSays(t("missingChange"));
    return;
  }
  // Too much change: the customer happily keeps it. It shows up at closing.
  c.changeOver = given - due;
  if (c.changeOver > 0) c.mistakes++;
  finishCustomer();
}

function finishCustomer() {
  const c = game.cur;
  const right = correctAmounts(c.items);
  game.log.push({
    name: c.person.first + " " + c.person.last,
    movies: (c.returned ? t("logReturned", { title: c.returned }) + " · " : "") + c.items.map(m => m.title).join(", "),
    charged: c.charged,
    correct: c.skippedFee ? correctChargeWithFee(c) : correctCharge(c),
    skipped: !!c.skippedFee,
    method: methodOf(c),
    changeOver: c.changeOver,
    mistakes: c.mistakes,
    // For the receipts on the Manager's Notes screen
    lines: c.items.map(m => ({ title: m.title, price: priceOf(m) })),
    special: c.items.reduce((s2, m) => s2 + priceOf(m), 0) - subtotalOf(c.items),
    balance: c.spec.balance || 0,
    returned: c.returned || "",
    lateDays: c.spec.lateDays || 0,
    friend: !!c.spec.friend,
    paidCash: c.paid.reduce((s2, x) => s2 + x, 0)
  });
  if (c.member && c.spec.balance) c.member.balance = 0;
  c.tray = {};
  c.step = "done";
  c.speech = c.changeOver > 0 ? t("thanksExtra") : t("thanks");
  if (c.mood < 5 && c.mistakes === 0) c.mood++;
  if (c.spec.tutorial) showTip(t("tip_done"), true);
  else hideTip();
  renderShift();
}

function nextCustomer() {
  game.custIndex++;
  loadCustomer();
}

/* ----- Customer + Bea helpers ----- */

function customerSays(line) {
  game.cur.speech = line;
  document.getElementById("cust-speech").textContent = line;
}

function moodDown() {
  const c = game.cur;
  c.mood = Math.max(1, c.mood - 1);
  document.getElementById("cust-mood").innerHTML =
    `<span class="dot">${"●".repeat(c.mood)}</span><span class="dot off">${"●".repeat(5 - c.mood)}</span>`;
}

function showTip(text) {
  const box = document.getElementById("bea-tip");
  document.getElementById("bea-tip-text").textContent = text;
  box.classList.remove("hidden");
  box.classList.remove("flash");
  void box.offsetWidth; // restart the animation
  box.classList.add("flash");
}
function hideTip() { document.getElementById("bea-tip").classList.add("hidden"); }

// Each press of "Ask Bea" gives the next, more specific hint for the current step.
function dealTipText() {
  const d = game.day.deals;
  return t("tip_ring_deal").replace("{regDeal}", fmt(d.reg.price)).replace("{newDeal}", fmt(d.new.price));
}

function askBea() {
  const c = game.cur;
  const allAdded = c.wants.every(w => c.items.find(x => x.id === w));
  const nextWant = c.wants.find(w => !c.items.find(x => x.id === w)) || c.wants[0];
  const wantedMovie = game.movies.find(m => m.id === nextWant);
  let key = c.step;
  if (c.step === "title" && allAdded) key = "send";
  if (c.step === "title" && !allAdded && wantedMovie.inn === 0) key = "out";
  if (c.step === "return" && c.spec.lateDays) key = c.lateRecord !== undefined && c.lateRecord !== null ? "lateFee" : "returnLate";
  if (c.step === "ring" && c.spec.balance) key = "ringBalance";
  if (c.step === "ring" && c.items.some(m => m.fee !== undefined)) key = "ringFee";

  // Hints restart when the student moves to a new step
  if (c.hintKey !== key) { c.hintKey = key; c.hintLevel = 0; }

  const right = c.items.length ? correctAmounts(c.items, c.spec.balance) : null;
  const rec = (game.records || []).find(r => r.who === c.person.id && r.movieId === c.spec.returns);
  const paidTotal = c.paid.reduce((s, x) => s + x, 0);
  const vars = {
    last: c.person.last,
    title: wantedMovie.title,
    word: wantedMovie.title.split(" ").sort((a, b) => b.length - a.length)[0].replace(/[^\p{L}]/gu, ""),
    sub: right ? fmt(right.sub) : "",
    subNum: right ? num(right.sub) : "",
    cash: right ? fmt(c.charged !== null ? c.charged : right.cash) : "",
    paid: fmt(paidTotal),
    due: fmt(paidTotal - (c.charged || 0)),
    ret: c.spec.returns ? game.movies.find(m => m.id === c.spec.returns).title : "",
    method: t("method_" + methodOf(c)).toLowerCase(),
    due: rec ? dateLabel(rec.due) : "",
    today: dateLabel(game.day.today),
    days: "?",
    bal: c.spec.balance ? fmt(c.spec.balance) : "",
    regDeal: game.day.deals ? fmt(game.day.deals.reg.price) : "",
    newDeal: game.day.deals ? fmt(game.day.deals.new.price) : "",
    price: c.spec.question ? fmt(c.spec.question.price) : "",
    count: c.spec.question ? c.spec.question.count : "",
    single: c.spec.question ? fmt(c.spec.question.single) : ""
  };
  const ladders = {
    member: ["tip_member", "tip_member_2"],
    signup: ["tip_signup", "tip_signup_2"],
    return: ["tip_return", "tip_return_2"],
    returnLate: ["tip_return_late", "tip_return_late_2"],
    lateFee: ["tip_late_fee"],
    ringBalance: ["tip_ring_balance", "tip_ring", "tip_ring_2", "tip_ring_3"],
    ringFee: ["tip_ring_fee", "tip_ring", "tip_ring_2", "tip_ring_3"],
    title: ["tip_title", "tip_title_2"],
    out: ["tip_title_out"],
    send: ["tip_send", "tip_send_2"],
    ring: game.day.deals ? ["tip_ring_deal", "tip_ring_2", "tip_ring_3"]
      : game.day.methods ? ["tip_ring_method", "tip_ring", "tip_ring_2", "tip_ring_3"]
      : ["tip_ring", "tip_ring_2", "tip_ring_3"],
    question: ["tip_question", "tip_question_2"],
    pay: methodOf(c) === "cheque" ? ["tip_cheque", "tip_cheque_2"]
      : methodOf(c) !== "cash" ? ["tip_card"]
      : ["tip_pay", "tip_pay_2", "tip_pay_3"],
    done: ["tip_done"]
  };
  const ladder = ladders[key];
  const tipKey = ladder[Math.min(c.hintLevel, ladder.length - 1)];
  if (c.hintLevel < ladder.length) game.hints++;
  c.hintLevel++;

  let text = t(tipKey);
  for (const k in vars) text = text.split("{" + k + "}").join(vars[k]);
  showTip(text);
}

/* ---------- 11. OVERLAYS: tax chart + calculator ---------- */

function openChart() {
  const rows = (game.day.chartRows || [299, 499, 598, 798, 897, 998, 1097, 1297, 1497]).map(s =>
    `<tr><td>${fmt(s)}</td><td>${fmt(taxOf(s))}</td><td>${fmt(s + taxOf(s))}</td></tr>`).join("");
  document.getElementById("overlay-card").innerHTML = `
    <p class="panel-title">${t("chartTitle")}</p>
    <table class="chart-table">
      <tr><th>${t("chartSub")}</th><th>${t("chartTax")}</th><th>${t("chartTotal")}</th></tr>
      ${rows}
    </table>
    <p class="chart-note">${t("chartNote")}</p>
    <div class="overlay-close"><button class="btn" data-action="close-overlay">${t("close")}</button></div>`;
  document.getElementById("overlay").classList.remove("hidden");
}

let calcExpr = "";

function calcHTML(closeButton) {
  const keys = ["7", "8", "9", "÷", "4", "5", "6", "×", "1", "2", "3", "−", "0", LANG === "fr" ? "," : ".", "C", "+"];
  return `<div class="calc">
    <p class="panel-title">${t("calculator")}</p>
    <div class="calc-display">${calcExpr || "0"}</div>
    <div class="calc-keys">
      ${keys.map(k => `<button data-action="calc" data-k="${k}" class="${"÷×−+".includes(k) ? "op" : ""}">${k}</button>`).join("")}
      <button data-action="calc" data-k="=" class="eq" style="grid-column: span 4">=</button>
    </div>
    ${closeButton ? `<div class="overlay-close"><button class="btn" data-action="close-overlay">${t("close")}</button></div>` : ""}
  </div>`;
}

function openCalc() {
  document.getElementById("overlay-card").innerHTML = calcHTML(true);
  document.getElementById("overlay").classList.remove("hidden");
}

function calcPress(k, btn) {
  if (k === "C") calcExpr = "";
  else if (k === "=") {
    const expr = calcExpr.replace(/×/g, "*").replace(/÷/g, "/").replace(/−/g, "-").replace(/,/g, ".");
    if (/^[0-9.+\-*/ ]+$/.test(expr)) {
      try {
        const r = Function("return (" + expr + ")")();
        calcExpr = Number.isFinite(r) ? String(Math.round(r * 10000) / 10000) : "Error";
        if (LANG === "fr") calcExpr = calcExpr.replace(".", ",").replace("Error", "Erreur");
      } catch (e) { calcExpr = "Error"; }
    } else calcExpr = "";
  } else {
    if (calcExpr === "Error" || calcExpr === "Erreur") calcExpr = "";
    if (calcExpr.length < 18) calcExpr += k;
  }
  // Update the display of the calculator whose key was pressed
  const disp = btn.closest(".calc").querySelector(".calc-display");
  disp.textContent = calcExpr || "0";
}

function closeOverlay() {
  document.getElementById("overlay").classList.add("hidden");
}

/* ---------- 12. CLOSING THE REGISTER ---------- */

function drawerTotal() {
  return DENOMS.reduce((s, d) => s + d * (game.drawer[d] || 0), 0);
}

/* The count sheet: one row per kind of money, then bills total,
   coins total, and drawer total. Each box is checked on its own. */

function sheetRow(d) {
  const n = game.drawer[d] || 0;
  // Rows with none of that money are filled in already (0 × anything = 0)
  const box = n === 0
    ? `<input type="text" value="${num(0)}" readonly class="sheet-box zero" tabindex="-1">`
    : `<input type="text" inputmode="decimal" autocomplete="off" class="sheet-box" data-sheet="row" data-d="${d}" aria-label="${n} times ${denomLabel(d)}">`;
  return `<tr>
    <td>${moneyStatic(d)}</td>
    <td class="sheet-math">${n} × ${denomLabel(d)} =</td>
    <td>${box}</td>
  </tr>`;
}

function sheetTotalRow(key, label) {
  return `<tr class="sheet-sum">
    <td colspan="2"><label for="sheet-${key}">${label}</label></td>
    <td><input id="sheet-${key}" type="text" inputmode="decimal" autocomplete="off" class="sheet-box" data-sheet="${key}"></td>
  </tr>`;
}

function sheetAnswers() {
  const bills = DENOMS.filter(d => d >= 500).reduce((s, d) => s + d * (game.drawer[d] || 0), 0);
  const coins = DENOMS.filter(d => d < 500).reduce((s, d) => s + d * (game.drawer[d] || 0), 0);
  return { bills, coins, drawer: bills + coins };
}

function openClose() {
  game.closeAttempts = 0;
  game.closeCounted = false;
  const bills = DENOMS.filter(d => d >= 500);
  const coins = DENOMS.filter(d => d < 500);
  document.getElementById("count-table").innerHTML =
    `<tr class="sheet-head"><td></td><td>${t("sheetHowMany")}</td><td>${t("sheetRowTotal")}</td></tr>` +
    bills.map(sheetRow).join("") +
    sheetTotalRow("bills", t("sheetBills")) +
    coins.map(sheetRow).join("") +
    sheetTotalRow("coins", t("sheetCoins")) +
    sheetTotalRow("drawer", t("sheetDrawer"));
  document.getElementById("count-feedback").textContent = "";
  document.getElementById("compare-body").innerHTML = `<p class="muted">${t("closeCompareWait")}</p>`;
  calcExpr = "";
  document.getElementById("close-calc").innerHTML = "";
  show("screen-close");
  const first = document.querySelector("#count-table input:not([readonly])");
  if (first) first.focus();
}

function checkCount() {
  if (game.closeCounted) return;
  const fb = document.getElementById("count-feedback");
  const answers = sheetAnswers();
  const boxes = Array.from(document.querySelectorAll("#count-table [data-sheet]"));

  // Every box needs a money amount before checking
  if (boxes.some(b => parseMoney(b.value) === null)) {
    fb.className = "feedback warn";
    fb.textContent = t("countFillAll");
    return;
  }

  game.closeAttempts++;
  let wrong = 0;
  boxes.forEach(b => {
    const kind = b.dataset.sheet;
    const right = kind === "row" ? Number(b.dataset.d) * game.drawer[b.dataset.d] : answers[kind];
    const ok = parseMoney(b.value) === right;
    b.classList.toggle("error", !ok);
    b.classList.toggle("ok", ok);
    b.dataset.right = right;
    if (!ok) wrong++;
  });

  if (wrong === 0) {
    fb.className = "feedback good";
    fb.textContent = t("countRight");
  } else if (game.closeAttempts < 2) {
    game.countMissed = true;
    fb.className = "feedback bad";
    fb.textContent = t("countWrong");
    return;
  } else {
    // Second try still has mistakes: Bea fills in the right amounts
    boxes.filter(b => b.classList.contains("error")).forEach(b => {
      b.value = num(Number(b.dataset.right));
      b.classList.remove("error");
      b.classList.add("fixed");
    });
    fb.className = "feedback warn";
    fb.textContent = t("countReveal", { amt: fmt(answers.drawer) });
  }
  game.closeCounted = true;
  boxes.forEach(b => (b.readOnly = true));
  showCompare();
}

function honestyNote() {
  const h = game.honesty;
  if (!h) return "";
  const text = t(h.choice === "skipped" ? "beaSkipped" : "beaCharged")
    .replace("{first}", h.first).replace("{fee}", fmt(h.fee));
  return `<div class="bea-note ${h.choice}">${text}</div>`;
}

function showCompare() {
  const floatTotal = DENOMS.reduce((s, d) => s + d * (FLOAT[d] || 0), 0);
  const cashLog = game.log.filter(l => !l.method || l.method === "cash");
  const sales = cashLog.reduce((s, l) => s + l.correct, 0);
  const should = floatTotal + sales;
  const cardTotal = game.log.filter(l => l.method === "debit" || l.method === "credit").reduce((s, l) => s + l.charged, 0);
  const chequeTotal = game.log.filter(l => l.method === "cheque").reduce((s, l) => s + l.charged, 0);
  const extra = game.day.methods ? `
    <div class="compare-row muted-row"><span>${t("cardSales")}</span><span>${fmt(cardTotal)} · ${t("notInDrawer")}</span></div>
    <div class="compare-row muted-row"><span>${t("chequeSales")}</span><span>${fmt(chequeTotal)} · ${t("notInDrawer")}</span></div>` : "";
  const actual = drawerTotal();
  const diff = actual - should;
  game.drawerDiff = diff;

  let verdict;
  if (diff === 0) verdict = `<div class="verdict good">${t("balanced")}</div>`;
  else if (diff > 0) verdict = `<div class="verdict bad">${t("over", { amt: fmt(diff) })}<p class="verdict-detail">${t("overDetail")}</p></div>`;
  else verdict = `<div class="verdict bad">${t("short", { amt: fmt(-diff) })}<p class="verdict-detail">${t("shortDetail")}</p></div>`;

  document.getElementById("compare-body").innerHTML = `
    <div class="compare-row"><span>${t("startFloat")}</span><span>${fmt(floatTotal)}</span></div>
    <div class="compare-row"><span>${t("salesToday")}</span><span>+ ${fmt(sales)}</span></div>
    <div class="compare-row total"><span>${t("shouldHave")}</span><span>${fmt(should)}</span></div>
    <div class="compare-row total"><span>${t("actuallyHas")}</span><span>${fmt(actual)}</span></div>
    ${verdict}
    ${honestyNote()}
    ${extra}
    <div class="notes-actions"><button class="btn primary" data-action="after-close">${t("continue")}</button></div>`;
}

function afterClose() {
  if (game.day.payday) openPayday();
  else afterPayday();
}

function afterPayday() {
  if (game.mode === "classroom") openNotes();
  else openReport();
}

/* ----- Payday: work out your pay, then split it into jars ----- */

function openPayday() {
  const p = game.day.payday;
  game.pay = { tries: 0, done: false, budgetDone: false };
  document.getElementById("pay-name").textContent = game.clerk || t("clerkDefault");
  document.getElementById("pay-hours").textContent = p.hours;
  document.getElementById("pay-rate").textContent = fmt(p.rate);
  document.getElementById("pay-input").value = "";
  document.getElementById("pay-input").readOnly = false;
  document.getElementById("pay-feedback").textContent = "";
  document.getElementById("budget-panel").classList.add("hidden");
  document.getElementById("goal-line").textContent = t("goalLine", { goal: fmt(p.goal) });
  ["save", "spend", "share"].forEach(k => {
    const el = document.getElementById("jar-" + k);
    el.value = ""; el.readOnly = false;
  });
  document.getElementById("budget-feedback").textContent = "";
  document.getElementById("budget-result").innerHTML = "";
  document.getElementById("payday-next").classList.add("hidden");
  show("screen-payday");
  document.getElementById("pay-input").focus();
}

function checkPay() {
  if (game.pay.done) return;
  const p = game.day.payday;
  const right = p.hours * p.rate;
  const fb = document.getElementById("pay-feedback");
  const val = parseMoney(document.getElementById("pay-input").value);
  if (val === null) { fb.className = "feedback warn"; fb.textContent = t("fillAll"); return; }
  game.pay.tries++;
  if (val !== right && game.pay.tries < 2) {
    fb.className = "feedback bad"; fb.textContent = t("payWrong"); return;
  }
  if (val === right) { fb.className = "feedback good"; fb.textContent = t("payRight"); }
  else {
    game.countMissed = true; // counts as one mistake on the report
    fb.className = "feedback warn"; fb.textContent = t("payReveal", { amt: fmt(right) });
    document.getElementById("pay-input").value = num(right);
  }
  game.pay.done = true;
  document.getElementById("pay-input").readOnly = true;
  document.getElementById("budget-panel").classList.remove("hidden");
  updateBudget();
  document.getElementById("jar-save").focus();
}

function jarValues() {
  const v = {};
  ["save", "spend", "share"].forEach(k => {
    const raw = document.getElementById("jar-" + k).value.trim();
    v[k] = raw === "" ? 0 : parseMoney(raw);
  });
  return v;
}

function updateBudget() {
  if (!game.pay || !game.pay.done || game.pay.budgetDone) return;
  const pay = game.day.payday.hours * game.day.payday.rate;
  const v = jarValues();
  const fb = document.getElementById("budget-feedback");
  if (Object.values(v).some(x => x === null)) { fb.className = "feedback warn"; fb.textContent = t("fillAll"); return; }
  const used = v.save + v.spend + v.share;
  fb.className = "feedback " + (used > pay ? "bad" : "warn");
  fb.textContent = used > pay ? t("budgetOver", { amt: fmt(used - pay) }) : t("budgetLeft", { amt: fmt(pay - used) });
}

function saveBudget() {
  if (game.pay.budgetDone) return;
  const p = game.day.payday;
  const pay = p.hours * p.rate;
  const v = jarValues();
  const fb = document.getElementById("budget-feedback");
  if (Object.values(v).some(x => x === null) || v.save + v.spend + v.share !== pay) {
    fb.className = "feedback bad";
    fb.textContent = t("budgetMustMatch", { amt: fmt(pay) });
    return;
  }
  game.pay.budgetDone = true;
  game.pay.jars = v;
  ["save", "spend", "share"].forEach(k => (document.getElementById("jar-" + k).readOnly = true));
  fb.className = "feedback good";
  fb.textContent = "";
  let msg;
  if (v.save === 0) msg = t("goalNever");
  else if (v.save >= p.goal) msg = t("goalOne");
  else msg = t("goalWeeks", { save: fmt(v.save), weeks: Math.ceil(p.goal / v.save) });
  document.getElementById("budget-result").innerHTML = `<div class="flow-note">${msg}</div>`;
  document.getElementById("payday-next").classList.remove("hidden");
}

/* ---------- 13. MANAGER'S NOTES ---------- */

// A small till slip for each customer, so students can look back at their shift
function receiptHTML(l) {
  const row = (a, b, cls) => `<div class="rc-row ${cls || ""}"><span>${a}</span><span>${b}</span></div>`;
  let h = `<div class="receipt"><div class="rc-name">${l.name}</div>`;
  if (l.returned) {
    h += `<div class="rc-note">${t("rcptReturned", { title: l.returned })}${l.lateDays ? " · " + t("rcptLate", { days: l.lateDays }) : " · " + t("rcptOnTime")}</div>`;
  }
  if (l.friend) h += `<div class="rc-note">${t("rcptFriend")}</div>`;
  if (l.skipped) h += `<div class="rc-note rc-bad">${t("skippedTag")}</div>`;
  l.lines.forEach(x => { h += row(x.title, fmt(x.price)); });
  if (l.special > 0) h += row(t("rcptSpecial"), "−" + fmt(l.special));
  h += row(t("rcptHst"), "✓");
  if (l.balance) h += row(t("rcptBalance"), fmt(l.balance));
  h += row(t("rcptTotal"), fmt(l.charged), "rc-total");
  if (l.method === "cash") {
    h += row(t("rcptPaidCash"), fmt(l.paidCash));
    h += row(t("rcptChange"), fmt(l.paidCash - l.charged));
  } else {
    h += row(t("rcptPaidBy"), t("method_" + l.method));
  }
  return h + `</div>`;
}

function receiptsBlock() {
  let budget = "";
  if (game.day.payday && game.pay && game.pay.jars) {
    const j = game.pay.jars;
    budget = `<p class="rc-budget">${t("budgetRecap", { save: fmt(j.save), spend: fmt(j.spend), share: fmt(j.share) })}</p>`;
  }
  return `<h3 class="rc-head">${t("rcptHead")}</h3>
    <p class="sheet-help">${t("rcptHelp")}</p>
    <div class="receipts">${game.log.map(receiptHTML).join("")}</div>${budget}`;
}

function openNotes() {
  document.getElementById("bea-notes").innerHTML = portraitHTML(BEA);
  document.getElementById("notes-receipts").innerHTML = receiptsBlock();
  const qs = t(game.day.questions);
  document.getElementById("notes-list").innerHTML = qs.map(q => `<li>${q}</li>`).join("");
  document.getElementById("print-sheet").innerHTML = `
    <h1>REWIND — ${t("printHead", { day: t(game.day.name) })}</h1>
    <div class="meta">${game.clerk ? t("printNameFilled", { name: game.clerk }) : t("printName")} &nbsp;&nbsp; ${t("printDate")}</div>
    <ol>${qs.map(q => `<li>${q}<div class="lines"></div><div class="lines"></div><div class="lines"></div></li>`).join("")}</ol>
    <div class="print-receipts">${receiptsBlock()}</div>`;
  show("screen-notes");
}

/* ---------- 14. SHIFT REPORT ---------- */

function openReport() {
  // The drawer being over/short is a result of earlier mistakes, so it isn't counted twice.
  const mistakes = game.log.reduce((s, l) => s + l.mistakes, 0) + (game.countMissed ? 1 : 0);
  const stars = mistakes === 0 ? 3 : mistakes <= 2 ? 2 : 1;
  saveStars(game.day.id, stars);

  document.getElementById("report-stars").innerHTML =
    "★".repeat(stars) + `<span class="off">${"★".repeat(3 - stars)}</span>`;
  document.getElementById("report-caption").textContent =
    game.honesty && game.honesty.choice === "skipped" ? t("starCaptionSkipped") : t("starCaption" + stars);

  const sales = game.log.reduce((s, l) => s + l.charged, 0);
  const diff = game.drawerDiff || 0;
  const drawerText = diff === 0 ? t("balancedShort") : diff > 0 ? t("overShort", { amt: fmt(diff) }) : t("shortShort", { amt: fmt(-diff) });
  const typing = game.typing.fields ? Math.round(100 * game.typing.firstTryCorrect / game.typing.fields) + "%" : "—";
  const stat = (label, value) => `<div class="stat"><div class="label">${label}</div><div class="value">${value}</div></div>`;
  document.getElementById("report-stats").innerHTML =
    stat(t("statCustomers"), game.log.length) +
    stat(t("statSales"), fmt(sales)) +
    stat(t("statDrawer"), drawerText) +
    stat(t("statTyping"), typing) +
    stat(t("statHints"), game.hints);

  document.getElementById("report-log").innerHTML = `<table class="log-table">
    <tr><th>${t("logCustomer")}</th><th>${t("logMovie")}</th><th>${t("logCharged")}</th><th>${t("logCorrect")}</th><th>${t("logChange")}</th></tr>
    ${game.log.map(l => `<tr>
      <td>${l.name}</td><td>${l.movies}</td>
      <td class="${l.charged === l.correct ? "tag-good" : "tag-bad"}">${fmt(l.charged)}</td>
      <td>${fmt(l.correct)}</td>
      <td class="${l.changeOver || l.skipped ? "tag-bad" : "tag-good"}">${l.skipped ? t("skippedTag") : l.method && l.method !== "cash" ? t("method_" + l.method) : l.changeOver ? t("changeOver", { amt: fmt(l.changeOver) }) : t("changeOk")}</td>
    </tr>`).join("")}
  </table>`;
  show("screen-report");
}

/* ---------- 15. EVENTS ---------- */

document.addEventListener("click", e => {
  const el = e.target.closest("[data-action]");
  if (!el || el.disabled) return;
  const a = el.dataset.action;
  switch (a) {
    case "set-mode": game.mode = el.dataset.mode; renderTitle(); break;
    case "set-lang": game.clerk = document.getElementById("clerk-name").value.trim(); setLang(el.dataset.lang); renderTitle(); break;
    case "pick-day": startDay(el.dataset.day); break;
    case "intro-next": introNext(); break;
    case "tab": game.cur.tab = el.dataset.tab; game.cur.crtMsg = ""; renderTerminal(); break;
    case "member-search": memberSearch(); break;
    case "member-select": memberSelect(el.dataset.num); break;
    case "save-member": saveMember(); break;
    case "title-search": titleSearch(); break;
    case "add-title": addTitle(el.dataset.id); break;
    case "return-search": returnSearch(); break;
    case "deal-answer": dealAnswer(el.dataset.choice); break;
    case "late-add": lateAdd(); break;
    case "late-skip": lateSkip(); break;
    case "check-pay": checkPay(); break;
    case "save-budget": saveBudget(); break;
    case "payday-next": afterPayday(); break;
    case "card-pay": if (!game.cur.cardStage) cardPay(); break;
    case "cheque-sign": chequeSign(); break;
    case "cheque-accept": finishCustomer(); break;
    case "check-in": checkIn(Number(el.dataset.i), el.dataset.late === "1"); break;
    case "tell-out": tellOut(el.dataset.id); break;
    case "send-register": sendRegister(); break;
    case "ring-up": ringUp(); break;
    case "tray-add": trayAdd(Number(el.dataset.d)); break;
    case "tray-remove": trayRemove(Number(el.dataset.d)); break;
    case "give-change": giveChange(); break;
    case "next-customer": nextCustomer(); break;
    case "close-register": openClose(); break;
    case "hint": askBea(); break;
    case "open-chart": openChart(); break;
    case "open-calc": calcExpr = ""; openCalc(); break;
    case "open-calc-close":
      calcExpr = "";
      document.getElementById("close-calc").innerHTML = `<div class="overlay-card">${calcHTML(false)}</div>`;
      break;
    case "calc": calcPress(el.dataset.k, el); break;
    case "close-overlay": closeOverlay(); break;
    case "check-count": checkCount(); break;
    case "after-close": afterClose(); break;
    case "print-notes": window.print(); break;
    case "to-report": openReport(); break;
    case "replay": startDay(game.day.id); break;
    case "to-title": renderTitle(); break;
  }
});

// Enter key submits searches and forms
document.addEventListener("keydown", e => {
  if (e.key !== "Enter") return;
  const el = e.target;
  if (el.dataset && el.dataset.enter) {
    e.preventDefault();
    const fn = { "member-search": memberSearch, "title-search": titleSearch, "return-search": returnSearch, "late-add": lateAdd, "ring-up": ringUp }[el.dataset.enter];
    if (fn) fn();
  } else if (el.id === "pay-input") {
    e.preventDefault();
    checkPay();
  } else if (el.dataset && el.dataset.sheet) {
    e.preventDefault();
    checkCount();
  } else if (el.dataset && el.dataset.field) {
    e.preventDefault();
    saveMember();
  }
});

// Keep typed values in the new-member form when the screen re-draws
document.addEventListener("input", e => {
  const f = e.target.dataset && e.target.dataset.field;
  if (f && game.cur) game.cur.formValues[f] = e.target.value;
  if (e.target.id && e.target.id.indexOf("jar-") === 0) updateBudget();
});

/* ---------- 16. START ---------- */

// Keep each movie's English title, then show the chosen language
MOVIES.forEach(m => { m.en = m.title; });
setLang(LANG);
renderTitle();
