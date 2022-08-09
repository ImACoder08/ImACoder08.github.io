//Player Count
let players;
const playerCount = function () {
  players = Number(prompt('How many Players? (2-8)'));
  if (players > 8 || players < 2) {
    playerCount();
  }
};
playerCount();

//comment
//Variables

//Elemens
let playerNEl = document.querySelector('.playerN');
let proffessionEl = document.querySelector('.proffession');
let salaryEl = document.querySelector('.salary');
let interestEl = document.querySelector('.interest');
let dividendsEl = document.querySelector('.dividends');
let realBusinessEl1 = document.querySelector('.realBusiness1');
let realBusinessEl2 = document.querySelector('.realBusiness2');
let realBusinessEl3 = document.querySelector('.realBusiness3');
let realBusinessEl4 = document.querySelector('.realBusiness4');
let realBusinessEl5 = document.querySelector('.realBusiness5');
let realBusinessEl6 = document.querySelector('.realBusiness6');
let totalEl = document.querySelector('.total');
let expensesEl = document.querySelector('.expenses');
let myt4uEl = document.querySelector('.myt4u');
let ok4uEl = document.querySelector('.ok4u');
let gro4uEl = document.querySelector('.gro4u');
let gr8El = document.querySelector('.gr8');
let lymp4uEl = document.querySelector('.lymp4u');
let passiveEl = document.querySelector('.passive');
let sellMyt4uEl = document.querySelector('.sell--myt4u');
let sellOk4uEl = document.querySelector('.sell--ok4u');
let sellGro4uEl = document.querySelector('.sell--gro4u');
let sellGr8El = document.querySelector('.sell--gr8');
let sellLymp4uEl = document.querySelector('.sell--lymp4u');
let buyMyt4uEl = document.querySelector('.buy--myt4u');
let buyGro4uEl = document.querySelector('.buy--gro4u');
let buyGr8El = document.querySelector('.buy--gr8');
let buyOk4uEl = document.querySelector('.buy--ok4u');
let buyLymp4uEl = document.querySelector('.buy--lymp4u');
let myt4uRangeEl = document.querySelector('.myt4uRange');
let gr8RangeEl = document.querySelector('.gr8Range');
let gro4uRangeEl = document.querySelector('.gro4uRange');
let ok4uRangeEl = document.querySelector('.ok4uRange');
let lymp4uRangeEl = document.querySelector('.lymp4uRange');
let okButton = document.querySelector('.ok');
let btn50 = document.querySelector('.fifty');
let btn100 = document.querySelector('.hundred');
let btn500 = document.querySelector('.five--hundred');
let btn1000 = document.querySelector('.one--thousand');
let btn5000 = document.querySelector('.five--thousand');
let bellEl = document.querySelector('.bell');
let turnEl = document.querySelector('.turn');
let cashEl = document.querySelector('.cash');
let nextBtn = document.querySelector('.next');
let myt4uCostEl = document.querySelector('.myt4u--cost');
let gro4uCostEl = document.querySelector('.gro4u--cost');
let gr8CostEl = document.querySelector('.gr8--cost');
let ok4uCostEl = document.querySelector('.ok4u--cost');
let lymp4uCostEl = document.querySelector('.lymp4u--cost');
let myt4uboughtEl = document.querySelector('.myt4uBuyPrice');
let ok4uboughtEl = document.querySelector('.ok4uBuyPrice');
let gr8boughtEl = document.querySelector('.gr8BuyPrice');
let gro4uboughtEl = document.querySelector('.gro4uBuyPrice');
let lymp4uboughtEl = document.querySelector('.lymp4uBuyPrice');

//Booleans
let driverBought = false;
let teacherBought = false;
let nurseBought = false;
let secretaryBought = false;
let policeBought = false;
let mechanicBought = false;
let lawyerBought = false;
let janitorBought = false;
let engineerBought = false;
let doctorBought = false;
let businessManagerBought = false;
let pilotBought = false;
let myt4uPick = false;
let ok4uPick = false;
let gr8Pick = false;
let gro4uPick = false;
let lymp4uPick = false;
let buying = false;
let selling = false;
let buyOpen = false;
let sellOpen = false;
let buyingMyt4u = false;
let buyingGro4u = false;
let buyingGr8 = false;
let buyingOk4u = false;
let buyingLymp4u = false;
let sellingMyt4u = false;
let sellingGro4u = false;
let sellingGr8 = false;
let sellingOk4u = false;
let sellingLymp4u = false;
let positive = false;
let negative = false;

//Dice
let dice = Math.trunc(Math.random() * 12) + 1;

//Adding Classlists
btn50.classList.add('hidden');
btn100.classList.add('hidden');
btn500.classList.add('hidden');
btn1000.classList.add('hidden');
btn5000.classList.add('hidden');

// let myt4uCost =
//   Math.trunc(Math.random() * myt4u.stock.highRange) + myt4u.stock.lowRange;
// myt4uCostEl.textContent = myt4uCost;
// let gro4uCost =
//   Math.trunc(Math.random() * gro4u.stock.highRange) + gro4u.stock.lowRange;
// gro4uCostEl.textContent = gro4uCost;
// let gr8Cost =
//   Math.trunc(Math.random() * gr8.stock.highRange) + gr8.stock.lowRange;
// gr8CostEl.textContent = gr8Cost;
// let ok4uCost =
//   Math.trunc(Math.random() * ok4u.stock.highRange) + ok4u.stock.lowRange;
// ok4uCostEl.textContent = ok4uCost;
// let lymp4uCost =
//   Math.trunc(Math.random() * lymp4u.stock.highRange) + lymp4u.stock.lowRange;
// lymp4uCostEl.textContent = lymp4uCost;
// ok4uCostEl.textContent = ok4uCost;

//Number Declares
let turn = 1;
turnEl.textContent = turn;

const myt4u = {
  stock: 0,
};

const ok4u = {
  stock: 0,
};
const gr8 = {
  stock: 0,
};
const gro4u = {
  stock: 0,
};
const lymp4u = {
  stock: 0,
};
let pick = 0;
let lowRange = Math.trunc(Math.random() * 30 + 5);
highRange = Math.trunc(Math.random() * 50 + 50);
const setRange = function () {
  lowRange = Math.trunc(Math.random() * 30 + 5);
  highRange = Math.trunc(Math.random() * 50 + 50);
};
const stock1 = {
  lowRange: lowRange,
  highRange: highRange,
  second: Math.trunc(highRange / 4.5) + lowRange - 5,
  third: Math.trunc(highRange / 2.5) + lowRange - 5,
  fourth: Math.trunc(highRange / 1.5) + lowRange - 5,
};
lowRange = Math.trunc(Math.random() * 10 + 5);
highRange = Math.trunc(Math.random() * 20 + 30);

const stock2 = {
  lowRange: lowRange,
  highRange: highRange,
  second: Math.trunc(highRange / 4.5) + lowRange - 5,
  third: Math.trunc(highRange / 2.5) + lowRange - 5,
  fourth: Math.trunc(highRange / 1.5) + lowRange - 5,
};
lowRange = Math.trunc(Math.random() * 35 + 10);
highRange = Math.trunc(Math.random() * 210 + 20);
const stock3 = {
  lowRange: lowRange,
  highRange: highRange,
  second: Math.trunc(highRange / 4.5) + lowRange - 5,
  third: Math.trunc(highRange / 2.5) + lowRange - 5,
  fourth: Math.trunc(highRange / 1.5) + lowRange - 5,
};
lowRange = Math.trunc(Math.random() * 35 + 10);
highRange = Math.trunc(Math.random() * 120 + 50);
const stock4 = {
  lowRange: lowRange,
  highRange: highRange,
  second: Math.trunc(highRange / 4.5) + lowRange - 5,
  third: Math.trunc(highRange / 2.5) + lowRange - 5,
  fourth: Math.trunc(highRange / 1.5) + lowRange - 5,
};
lowRange = Math.trunc(Math.random() * 35 + 10);
highRange = Math.trunc(Math.random() * 150 + 50);
const stock5 = {
  lowRange: lowRange,
  highRange: highRange,
  second: Math.trunc(highRange / 4.5) + lowRange - 5,
  third: Math.trunc(highRange / 2.5) + lowRange - 5,
  fourth: Math.trunc(highRange / 1.5) + lowRange - 5,
};
const pickStock1 = function () {
  pick = Math.trunc(Math.random() * 5 + 1);
  if (pick == 1 && !myt4uPick) {
    myt4u.stock = stock1;
    myt4uPick = true;
  } else if (pick == 2 && !gro4uPick) {
    gro4u.stock = stock1;
    gro4uPick = true;
  } else if (pick == 3 && !gr8Pick) {
    gr8.stock = stock1;
    gr8Pick = true;
  } else if (pick == 4 && !ok4uPick) {
    ok4u.stock = stock1;
    ok4uPick = true;
  } else if (pick == 5 && !lymp4uPick) {
    lymp4u.stock = stock1;
    lymp4uPick = true;
  }
};
const pickStock2 = function () {
  pick = Math.trunc(Math.random() * 5 + 1);
  if (pick == 1 && !myt4uPick) {
    myt4u.stock = stock2;
    myt4uPick = true;
  } else if (pick == 2 && !gro4uPick) {
    gro4u.stock = stock2;
    gro4uPick = true;
  } else if (pick == 3 && !gr8Pick) {
    gr8.stock = stock2;
    gr8Pick = true;
  } else if (pick == 4 && !ok4uPick) {
    ok4u.stock = stock2;
    ok4uPick = true;
  } else if (pick == 5 && !lymp4uPick) {
    lymp4u.stock = stock2;
    lymp4uPick = true;
  } else {
    pickStock2();
    console.log('try again');
  }
};
const pickStock3 = function () {
  pick = Math.trunc(Math.random() * 5 + 1);
  if (pick == 1 && !myt4uPick) {
    myt4u.stock = stock3;
    myt4uPick = true;
  } else if (pick == 2 && !gro4uPick) {
    gro4u.stock = stock3;
    gro4uPick = true;
  } else if (pick == 3 && !gr8Pick) {
    gr8.stock = stock3;
    gr8Pick = true;
  } else if (pick == 4 && !ok4uPick) {
    ok4u.stock = stock3;
    ok4uPick = true;
  } else if (pick == 5 && !lymp4uPick) {
    lymp4u.stock = stock3;
    lymp4uPick = true;
  } else {
    pickStock3();
    console.log('try again');
  }
};

const pickStock4 = function () {
  pick = Math.trunc(Math.random() * 5 + 1);
  if (pick == 1 && !myt4uPick) {
    myt4u.stock = stock4;
    myt4uPick = true;
  } else if (pick == 2 && !gro4uPick) {
    gro4u.stock = stock4;
    gro4uPick = true;
  } else if (pick == 3 && !gr8Pick) {
    gr8.stock = stock4;
    gr8Pick = true;
  } else if (pick == 4 && !ok4uPick) {
    ok4u.stock = stock4;
    ok4uPick = true;
  } else if (pick == 5 && !lymp4uPick) {
    lymp4u.stock = stock4;
    lymp4uPick = true;
  } else {
    pickStock4();
    console.log('try again');
  }
};
const pickStock5 = function () {
  if (!myt4uPick) {
    myt4u.stock = stock5;
    myt4uPick = true;
  } else if (!gro4uPick) {
    gro4u.stock = stock5;
    gro4uPick = true;
  } else if (!gr8Pick) {
    gr8.stock = stock5;
    gr8Pick = true;
  } else if (!ok4uPick) {
    ok4u.stock = stock5;
    ok4uPick = true;
  } else if (!lymp4uPick) {
    lymp4u.stock = stock5;
    lymp4uPick = true;
  }
};
pickStock1();
pickStock2();
pickStock3();
pickStock4();
pickStock5();
myt4uCost =
  Math.trunc(Math.random() * myt4u.stock.highRange) + myt4u.stock.lowRange;
myt4uCostEl.textContent = myt4uCost;
gro4uCost =
  Math.trunc(Math.random() * gro4u.stock.highRange) + gro4u.stock.lowRange;
gro4uCostEl.textContent = gro4uCost;
gr8Cost = Math.trunc(Math.random() * gr8.stock.highRange) + gr8.stock.lowRange;
gr8CostEl.textContent = gr8Cost;
ok4uCost =
  Math.trunc(Math.random() * ok4u.stock.highRange) + ok4u.stock.lowRange;
ok4uCostEl.textContent = ok4uCost;
lymp4uCost =
  Math.trunc(Math.random() * lymp4u.stock.highRange) + lymp4u.stock.lowRange;
lymp4uCostEl.textContent = lymp4uCost;
ok4uCostEl.textContent = ok4uCost;
//Modal/ Doodad
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
modal.classList.add('hidden');
overlay.classList.add('hidden');
okButton.classList.add('hidden');
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

overlay.addEventListener('click', closeModal);
btnCloseModal.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

let doodadArr = [];

const doodad1 = {
  doodad1: 'Your car broke down pay 1500',
  doodad1Cost: 1500,
};
const doodad2 = {
  doodad2: 'You Decide the take your family to a nice dinner',
  doodad2Cost: 200,
};
const doodad3 = {
  doodad3: 'Your friend bets 1000 you cant juggle, you lose the bet',
  doodad3Cost: 1000,
};
const doodad4 = {
  doodad4: 'As you drive home you buy some lemonade from some kids',
  doodad4Cost: 30,
};
const doodad5 = {
  doodad5: 'You buy some expensive jewelry',
  doodad5Cost: 700,
};
const doodad6 = {
  doodad6: 'Your water heater leaks',
  doodad6Cost: 800,
};
const doodad7 = {
  doodad7: 'New Boat',
  doodad7Cost: 8000,
};
const doodad8 = {
  doodad8: 'Park in handicap zone',
  doodad8Cost: 100,
};
const doodad9 = {
  doodad9: 'Big Screen TV',
  doodad9Cost: 4000,
};
const doodad10 = {
  doodad10: 'Pay Admission to a sporting event',
  doodad10Cost: 15,
};
const doodad11 = {
  doodad11: 'Pay admission to a sporting event',
  doodad11Cost: 50,
};
const doodad12 = {
  doodad12: 'Pay admission to a sporting event',
  doodad12Cost: 150,
};
const doodad13 = {
  doodad13: 'Pay admission to a sporting event',
  doodad13Cost: 1000,
};
const doodad14 = {
  doodad14: 'Buy New Fishing Rod!',
  doodad14Cost: 100,
};
const doodad15 = {
  doodad15: 'Cars air conditioning dies',
  doodad15Cost: 600,
};
const doodad16 = {
  doodad16: 'Pay Taxes',
  doodad16Cost: 650,
};
const doodad17 = {
  doodad17: 'Enter a 5k',
  doodad17Cost: 35,
};
const doodad18 = {
  doodad18: 'Go to a casino',
  doodad18Cost: 200,
};
const doodad19 = {
  doodad19: 'Family Vacation!',
  doodad19Cost: 2000,
};
const doodad20 = {
  doodad20: 'New Clothing',
  doodad20Cost: 200,
};
const doodad21 = {
  doodad21: 'Signed Mr beast team shirt',
  doodad21Cost: 600,
};
const doodad22 = {
  doodad22: 'Get a New bowling ball',
  doodad22Cost: 60,
};
const doodad23 = {
  doodad23: 'Buy new lawn mower',
  doodad23Cost: 300,
};
const doodad24 = {
  doodad24: 'Buy a new watch',
  doodad24Cost: 200,
};
const doodad25 = {
  doodad25: 'Give Money to charity',
  doodad25Cost: 300,
};
const doodad26 = {
  doodad26: 'Lost Wallet',
  doodad26Cost: 50,
};
const doodad27 = {
  doodad27: 'No Doodad this month',
  doodadCost27: 0,
};
const doodad28 = {
  doodad28: 'Fined for speeding',
  doodadCost28: 120,
};
const doodad29 = {
  doodad29: 'Visit Dentist',
  doodad29Cost: 200,
};
const doodad30 = {
  doodad30: 'Buy Furniture',
  doodad30Cost: 300,
};
const doodad31 = {
  doodad31: 'Go to a concert in vip',
  doodad31Cost: 300,
};
const doodad32 = {
  doodad32: 'Get Scammed Online',
  doodad32Cost: 5000,
};
const doodad33 = {
  doodad33: 'Enter a video game tournament',
  doodad33Cost: 50,
};
const doodad34 = {
  doodad34: 'Buy a signed nintendo switch',
  doodad34Cost: 7000,
};
const doodad35 = {
  doodad35: 'No doodad this month',
  doodad35Cost: 0,
};
const doodad36 = {
  doodad36: 'No doodad this month',
  doodadCost36: 0,
};
doodadArr.push(
  doodad1,
  doodad2,
  doodad3,
  doodad4,
  doodad5,
  doodad6,
  doodad7,
  doodad8,
  doodad9,
  doodad10,
  doodad11,
  doodad12,
  doodad13,
  doodad14,
  doodad15,
  doodad16,
  doodad17,
  doodad18,
  doodad19,
  doodad20,
  doodad21,
  doodad22,
  doodad23,
  doodad24,
  doodad25,
  doodad26,
  doodad27,
  doodad28,
  doodad29,
  doodad30,
  doodad31,
  doodad32,
  doodad33,
  doodad34,
  doodad35,
  doodad36
);

const pilot = {
  proffession: 'Pilot',
  salary: 9500,
  interest: 0,
  dividends: 0,
  realBusiness1: 0,
  realBusiness2: 0,
  realBusiness3: 0,
  realBusiness4: 0,
  realBusiness5: 0,
  realBusiness6: 0,
  totalIncome: 9500,
  totalExpenses: 6900,
  cashFlow: 2600,
  myt4u: 0,
  gro4u: 0,
  ok4u: 0,
  gr8: 0,
  lymp4u: 0,
  passive: 0,
  cash: 0,
};

const businessManager = {
  proffession: 'Business Manager',
  salary: 4600,
  interest: 0,
  dividends: 0,
  realBusiness1: 0,
  realBusiness2: 0,
  realBusiness3: 0,
  realBusiness4: 0,
  realBusiness5: 0,
  realBusiness6: 0,
  totalIncome: 4600,
  totalExpenses: 2930,
  cashFlow: 1670,
  myt4u: 0,
  gro4u: 0,
  ok4u: 0,
  gr8: 0,
  lymp4u: 0,
  passive: 0,
  cash: 0,
};

const doctor = {
  proffession: 'Doctor',
  salary: 13200,
  interest: 0,
  dividends: 0,
  realBusiness1: 0,
  realBusiness2: 0,
  realBusiness3: 0,
  realBusiness4: 0,
  realBusiness5: 0,
  realBusiness6: 0,
  totalIncome: 13200,
  totalExpenses: 9650,
  cashFlow: 3550,
  myt4u: 0,
  gro4u: 0,
  ok4u: 0,
  gr8: 0,
  lymp4u: 0,
  passive: 0,
  cash: 0,
};

const engineer = {
  proffession: 'Engineer',
  salary: 4900,
  interest: 0,
  dividends: 0,
  realBusiness1: 0,
  realBusiness2: 0,
  realBusiness3: 0,
  realBusiness4: 0,
  realBusiness5: 0,
  realBusiness6: 0,
  totalIncome: 4900,
  totalExpenses: 3210,
  cashFlow: 1690,
  myt4u: 0,
  gro4u: 0,
  ok4u: 0,
  gr8: 0,
  lymp4u: 0,
  passive: 0,
  cash: 0,
};

const janitor = {
  proffession: 'Janitor',
  salary: 1600,
  interest: 0,
  dividends: 0,
  realBusiness1: 0,
  realBusiness2: 0,
  realBusiness3: 0,
  realBusiness4: 0,
  realBusiness5: 0,
  realBusiness6: 0,
  totalIncome: 1600,
  totalExpenses: 950,
  cashFlow: 650,
  myt4u: 0,
  gro4u: 0,
  ok4u: 0,
  gr8: 0,
  lymp4u: 0,
  passive: 0,
  cash: 0,
};

const lawyer = {
  proffession: 'Lawyer',
  salary: 7500,
  interest: 0,
  dividends: 0,
  realBusiness1: 0,
  realBusiness2: 0,
  realBusiness3: 0,
  realBusiness4: 0,
  realBusiness5: 0,
  realBusiness6: 0,
  totalIncome: 7500,
  totalExpenses: 5420,
  cashFlow: 2080,
  myt4u: 0,
  gro4u: 0,
  ok4u: 0,
  gr8: 0,
  lymp4u: 0,
  passive: 0,
  cash: 0,
};

const mechanic = {
  proffession: 'Mechanic',
  salary: 2000,
  interest: 0,
  dividends: 0,
  realBusiness1: 0,
  realBusiness2: 0,
  realBusiness3: 0,
  realBusiness4: 0,
  realBusiness5: 0,
  realBusiness6: 0,
  totalIncome: 2000,
  totalExpenses: 1280,
  cashFlow: 720,
  myt4u: 0,
  gro4u: 0,
  ok4u: 0,
  gr8: 0,
  lymp4u: 0,
  passive: 0,
  cash: 0,
};

const nurse = {
  proffession: 'Nurse',
  salary: 3100,
  interest: 0,
  dividends: 0,
  realBusiness1: 0,
  realBusiness2: 0,
  realBusiness3: 0,
  realBusiness4: 0,
  realBusiness5: 0,
  realBusiness6: 0,
  totalIncome: 3100,
  totalExpenses: 1980,
  cashFlow: 1120,
  myt4u: 0,
  gro4u: 0,
  ok4u: 0,
  gr8: 0,
  lymp4u: 0,
  passive: 0,
  cash: 0,
};

const police = {
  proffession: 'Police',
  salary: 3000,
  interest: 0,
  dividends: 0,
  realBusiness1: 0,
  realBusiness2: 0,
  realBusiness3: 0,
  realBusiness4: 0,
  realBusiness5: 0,
  realBusiness6: 0,
  totalIncome: 3000,
  totalExpenses: 1880,
  cashFlow: 1120,
  myt4u: 0,
  gro4u: 0,
  ok4u: 0,
  gr8: 0,
  lymp4u: 0,
  passive: 0,
  cash: 0,
};

const secretary = {
  proffession: 'Secretary',
  salary: 2500,
  interest: 0,
  dividends: 0,
  realBusiness1: 0,
  realBusiness2: 0,
  realBusiness3: 0,
  realBusiness4: 0,
  realBusiness5: 0,
  realBusiness6: 0,
  totalIncome: 2500,
  totalExpenses: 1620,
  cashFlow: 880,
  myt4u: 0,
  gro4u: 0,
  ok4u: 0,
  gr8: 0,
  lymp4u: 0,
  passive: 0,
  cash: 0,
};

const teacher = {
  proffession: 'Teacher',
  salary: 3300,
  interest: 0,
  dividends: 0,
  realBusiness1: 0,
  realBusiness2: 0,
  realBusiness3: 0,
  realBusiness4: 0,
  realBusiness5: 0,
  realBusiness6: 0,
  totalIncome: 3300,
  totalExpenses: 2190,
  cashFlow: 1110,
  myt4u: 0,
  gro4u: 0,
  ok4u: 0,
  gr8: 0,
  lymp4u: 0,
  passive: 0,
  cash: 0,
};

const driver = {
  proffession: 'Truck Driver',
  salary: 2500,
  interest: 0,
  dividends: 0,
  realBusiness1: 0,
  realBusiness2: 0,
  realBusiness3: 0,
  realBusiness4: 0,
  realBusiness5: 0,
  realBusiness6: 0,
  totalIncome: 2500,
  totalExpenses: 1620,
  cashFlow: 880,
  myt4u: 0,
  gro4u: 0,
  ok4u: 0,
  gr8: 0,
  lymp4u: 0,
  passive: 0,
  cash: 0,
};

const player1 = {
  number: 1,
  proffession: 'homeless',
  myt4uCost: [],
  gro4uCost: [],
  gr8Cost: [],
  ok4uCost: [],
  lymp4uCost: [],
  myt4uStock: [],
  gro4uStock: [],
  ok4uStock: [],
  gr8Stock: [],
  lymp4uStock: [],
  myt4uAverage: 0,
  ok4uAverage: 0,
  gro4uAverage: 0,
  gr8Average: 0,
  lymp4uAverage: 0,
};
const player2 = {
  number: 2,
  proffession: 'homeless',
  myt4uCost: [],
  gro4uCost: [],
  gr8Cost: [],
  ok4uCost: [],
  lymp4uCost: [],
  myt4uStock: [],
  gro4uStock: [],
  ok4uStock: [],
  gr8Stock: [],
  lymp4uStock: [],
  myt4uAverage: 0,
  ok4uAverage: 0,
  gro4uAverage: 0,
  gr8Average: 0,
  lymp4uAverage: 0,
};
const player3 = {
  number: 3,
  proffession: 'homeless',
  myt4uCost: [],
  gro4uCost: [],
  gr8Cost: [],
  ok4uCost: [],
  lymp4uCost: [],
  myt4uStock: [],
  gro4uStock: [],
  ok4uStock: [],
  gr8Stock: [],
  lymp4uStock: [],
  myt4uAverage: 0,
  ok4uAverage: 0,
  gro4uAverage: 0,
  gr8Average: 0,
  lymp4uAverage: 0,
};
const player4 = {
  number: 4,
  proffession: 'homeless',
  myt4uCost: [],
  gro4uCost: [],
  gr8Cost: [],
  ok4uCost: [],
  lymp4uCost: [],
  myt4uStock: [],
  gro4uStock: [],
  ok4uStock: [],
  gr8Stock: [],
  lymp4uStock: [],
  myt4uAverage: 0,
  ok4uAverage: 0,
  gro4uAverage: 0,
  gr8Average: 0,
  lymp4uAverage: 0,
};
const player5 = {
  number: 5,
  proffession: 'homeless',
  myt4uCost: [],
  gro4uCost: [],
  gr8Cost: [],
  ok4uCost: [],
  lymp4uCost: [],
  myt4uStock: [],
  gro4uStock: [],
  ok4uStock: [],
  gr8Stock: [],
  lymp4uStock: [],
  myt4uAverage: 0,
  ok4uAverage: 0,
  gro4uAverage: 0,
  gr8Average: 0,
  lymp4uAverage: 0,
};
const player6 = {
  number: 6,
  proffession: 'homeless',
  myt4uCost: [],
  gro4uCost: [],
  gr8Cost: [],
  ok4uCost: [],
  lymp4uCost: [],
  myt4uStock: [],
  gro4uStock: [],
  ok4uStock: [],
  gr8Stock: [],
  lymp4uStock: [],
  myt4uAverage: 0,
  ok4uAverage: 0,
  gro4uAverage: 0,
  gr8Average: 0,
  lymp4uAverage: 0,
};
const player7 = {
  number: 7,
  proffession: 'homeless',
  myt4uCost: [],
  gro4uCost: [],
  gr8Cost: [],
  ok4uCost: [],
  lymp4uCost: [],
  myt4uStock: [],
  gro4uStock: [],
  ok4uStock: [],
  gr8Stock: [],
  lymp4uStock: [],
  myt4uAverage: 0,
  ok4uAverage: 0,
  gro4uAverage: 0,
  gr8Average: 0,
  lymp4uAverage: 0,
};
const player8 = {
  number: 8,
  proffession: 'homeless',
  myt4uCost: [],
  gro4uCost: [],
  gr8Cost: [],
  ok4uCost: [],
  lymp4uCost: [],
  myt4uStock: [],
  gro4uStock: [],
  ok4uStock: [],
  gr8Stock: [],
  lymp4uStock: [],
  myt4uAverage: 0,
  ok4uAverage: 0,
  gro4uAverage: 0,
  gr8Average: 0,
  lymp4uAverage: 0,
};

let currentPlayer = player1;

let jobs = {
  driver,
  teacher,
  nurse,
  secretary,
  police,
  mechanic,
  lawyer,
  janitor,
  engineer,
  doctor,
  businessManager,
  pilot,
};

//removedEl = objArr.splice(0, 1);

const pickJob = function (player) {
  dice = Math.trunc(Math.random() * 12) + 1;

  if (dice == 1 && !pilotBought) {
    player.proffession = pilot;
    pilotBought = true;
  } else if (dice == 2 && !businessManagerBought) {
    player.proffession = businessManager;
    businessManagerBought = true;
  } else if (dice == 3 && !doctorBought) {
    player.proffession = doctor;
    doctorBought = true;
  } else if (dice == 4 && !engineerBought) {
    player.proffession = engineer;
    engineerBought = true;
  } else if (dice == 5 && !janitorBought) {
    player.proffession = janitor;
    janitorBought = true;
  } else if (dice == 6 && !lawyerBought) {
    player.proffession = lawyer;
    lawyerBought = true;
  } else if (dice == 7 && !mechanicBought) {
    player.proffession = mechanic;
    mechanicBought = true;
  } else if (dice == 8 && !nurseBought) {
    player.proffession = nurse;
    nurseBought = true;
  } else if (dice == 9 && !policeBought) {
    player.proffession = police;
    policeBought = true;
  } else if (dice == 10 && !secretaryBought) {
    player.proffession = secretary;
    secretaryBought = true;
  } else if (dice == 11 && !teacherBought) {
    player.proffession = teacher;
    teacherBought = true;
  } else if (dice == 12 && !driverBought) {
    player.proffession = driver;
    driverBought = true;
  } else {
    pickJob(player);
  }

  //}
};

const fillIn = function (player) {
  playerNEl.textContent = player.number;
  proffessionEl.textContent = player.proffession.proffession;
  salaryEl.textContent = player.proffession.salary;
  interestEl.textContent = player.proffession.interest;
  dividendsEl.textContent = player.proffession.dividends;
  realBusinessEl1.textContent = player.proffession.realBusiness1;
  realBusinessEl2.textContent = player.proffession.realBusiness2;
  realBusinessEl3.textContent = player.proffession.realBusiness3;
  realBusinessEl4.textContent = player.proffession.realBusiness4;
  realBusinessEl5.textContent = player.proffession.realBusiness5;
  realBusinessEl6.textContent = player.proffession.realBusiness6;
  totalEl.textContent = player.proffession.cashFlow;
  expensesEl.textContent = player.proffession.totalExpenses;
  myt4uEl.textContent = player.proffession.myt4u;
  ok4uEl.textContent = player.proffession.ok4u;
  gro4uEl.textContent = player.proffession.gro4u;
  gr8El.textContent = player.proffession.gr8;
  lymp4uEl.textContent = player.proffession.lymp4u;
  passiveEl.textContent = player.proffession.passive;
  cashEl.textContent = Math.trunc(player.proffession.cash);
  myt4uCostEl.textContent = myt4uCost;
  gro4uCostEl.textContent = gro4uCost;
  gr8CostEl.textContent = gr8Cost;
  ok4uCostEl.textContent = ok4uCost;
  lymp4uCostEl.textContent = lymp4uCost;
  myt4uRangeEl.textContent =
    '$' +
    myt4u.stock.lowRange.toString() +
    ' - $' +
    myt4u.stock.highRange.toString();
  ok4uRangeEl.textContent =
    '$' +
    ok4u.stock.lowRange.toString() +
    ' - $' +
    ok4u.stock.highRange.toString();
  gr8RangeEl.textContent =
    '$' +
    gr8.stock.lowRange.toString() +
    ' - $' +
    gr8.stock.highRange.toString();
  gro4uRangeEl.textContent =
    '$' +
    gro4u.stock.lowRange.toString() +
    ' - $' +
    gro4u.stock.highRange.toString();
  lymp4uRangeEl.textContent =
    '$' +
    lymp4u.stock.lowRange.toString() +
    ' - $' +
    lymp4u.stock.highRange.toString();
  myt4uboughtEl.textContent = currentPlayer.myt4uAverage;
  ok4uboughtEl.textContent = currentPlayer.ok4uAverage;
  gro4uboughtEl.textContent = currentPlayer.gro4uAverage;
  lymp4uboughtEl.textContent = currentPlayer.lymp4uAverage;
  gr8boughtEl.textContent = currentPlayer.gr8Average;
};

//buy--

const clear = function () {
  playerNEl.textContent = ' ';
  proffessionEl.textContent = ' ';
  salaryEl.textContent = ' ';
  interestEl.textContent = ' ';
  dividendsEl.textContent = ' ';
  realBusinessEl1.textContent = ' ';
  realBusinessEl2.textContent = ' ';
  realBusinessEl3.textContent = ' ';
  realBusinessEl4.textContent = ' ';
  realBusinessEl5.textContent = ' ';
  realBusinessEl6.textContent = ' ';
  totalEl.textContent = ' ';
  expensesEl.textContent = ' ';
  myt4uEl.textContent = ' ';
  ok4uEl.textContent = ' ';
  gro4uEl.textContent = ' ';
  gr8El.textContent = ' ';
  lymp4uEl.textContent = ' ';
  passiveEl.textContent = ' ';
};

const okBtn = function () {
  if (
    buyingMyt4u &&
    Number(bellEl.value) * myt4uCost <= currentPlayer.proffession.cash
  ) {
    currentPlayer.myt4uStock.push(Number(bellEl.value));
    currentPlayer.myt4uCost.push(myt4uCost);
    myt4uAverage();
    myt4uboughtEl.textContent = currentPlayer.myt4uAverage;
    currentPlayer.proffession.myt4u += Number(bellEl.value);
    currentPlayer.proffession.cash -= Number(bellEl.value) * myt4uCost;
    cashEl.textContent = currentPlayer.proffession.cash;
    myt4uEl.textContent = currentPlayer.proffession.myt4u;
  }

  if (sellingMyt4u) {
    if (currentPlayer.proffession.myt4u >= Number(bellEl.value)) {
      currentPlayer.proffession.myt4u -= Number(bellEl.value);
      currentPlayer.proffession.cash += Number(bellEl.value) * myt4uCost;
      cashEl.textContent = currentPlayer.proffession.cash;
      myt4uEl.textContent = currentPlayer.proffession.myt4u;
    }
  }

  if (
    buyingOk4u &&
    Number(bellEl.value) * ok4uCost <= currentPlayer.proffession.cash
  ) {
    currentPlayer.ok4uStock.push(Number(bellEl.value));
    currentPlayer.ok4uCost.push(ok4uCost);
    ok4uAverage();
    ok4uboughtEl.textContent = currentPlayer.ok4uAverage;
    currentPlayer.proffession.ok4u += Number(bellEl.value);
    currentPlayer.proffession.cash -= Number(bellEl.value) * ok4uCost;
    cashEl.textContent = currentPlayer.proffession.cash;
    ok4uEl.textContent = currentPlayer.proffession.ok4u;
  }

  if (sellingOk4u && currentPlayer.proffession.ok4u >= Number(bellEl.value)) {
    currentPlayer.proffession.ok4u -= Number(bellEl.value);
    currentPlayer.proffession.cash += Number(bellEl.value) * ok4uCost;
    cashEl.textContent = currentPlayer.proffession.cash;
    ok4uEl.textContent = currentPlayer.proffession.ok4u;
  }

  if (
    buyingGro4u &&
    Number(bellEl.value) * gro4uCost <= currentPlayer.proffession.cash
  ) {
    currentPlayer.gro4uStock.push(Number(bellEl.value));
    currentPlayer.gro4uCost.push(gro4uCost);
    gro4uAverage();
    gro4uboughtEl.textContent = currentPlayer.gro4uAverage;
    currentPlayer.proffession.gro4u += Number(bellEl.value);
    currentPlayer.proffession.cash -= Number(bellEl.value) * gro4uCost;
    cashEl.textContent = currentPlayer.proffession.cash;
    gro4uEl.textContent = currentPlayer.proffession.gro4u;
  }

  if (sellingGro4u && currentPlayer.proffession.gro4u >= Number(bellEl.value)) {
    currentPlayer.proffession.gro4u -= Number(bellEl.value);
    currentPlayer.proffession.cash += Number(bellEl.value) * gro4uCost;
    cashEl.textContent = currentPlayer.proffession.cash;
    gro4uEl.textContent = currentPlayer.proffession.gro4u;
  }
  if (sellingGr8 && currentPlayer.proffession.gr8 >= Number(bellEl.value)) {
    currentPlayer.proffession.gr8 -= Number(bellEl.value);
    currentPlayer.proffession.cash += Number(bellEl.value) * gr8Cost;
    cashEl.textContent = currentPlayer.proffession.cash;
    gr8El.textContent = currentPlayer.proffession.gr8;
  }
  if (
    buyingGr8 &&
    Number(bellEl.value) * gr8Cost <= currentPlayer.proffession.cash
  ) {
    currentPlayer.gr8Stock.push(Number(bellEl.value));
    currentPlayer.gr8Cost.push(gr8Cost);
    gr8Average();
    gr8boughtEl.textContent = currentPlayer.gr8Average;
    currentPlayer.proffession.gr8 += Number(bellEl.value);
    currentPlayer.proffession.cash -= Number(bellEl.value) * gr8Cost;
    cashEl.textContent = currentPlayer.proffession.cash;
    gr8El.textContent = currentPlayer.proffession.gr8;
  }
  if (
    buyingLymp4u &&
    Number(bellEl.value) * lymp4uCost <= currentPlayer.proffession.cash
  ) {
    currentPlayer.lymp4uStock.push(Number(bellEl.value));
    currentPlayer.lymp4uCost.push(lymp4uCost);
    lymp4uAverage();
    lymp4uboughtEl.textContent = currentPlayer.lymp4uAverage;
    currentPlayer.proffession.lymp4u += Number(bellEl.value);
    currentPlayer.proffession.cash -= Number(bellEl.value) * lymp4uCost;
    cashEl.textContent = currentPlayer.proffession.cash;
    lymp4uEl.textContent = currentPlayer.proffession.lymp4u;
  }
  if (
    sellingLymp4u &&
    currentPlayer.proffession.lymp4u >= Number(bellEl.value)
  ) {
    currentPlayer.proffession.lymp4u -= Number(bellEl.value);
    currentPlayer.proffession.cash += Number(bellEl.value) * lymp4uCost;
    cashEl.textContent = currentPlayer.proffession.cash;
    lymp4uEl.textContent = currentPlayer.proffession.lymp4u;
  }
  bellEl.classList.add('hidden');
  okButton.classList.add('hidden');
  bellEl.value = '';
  sellingMyt4u = false;
  sellingGr8 = false;
  sellingGro4u = false;
  sellingOk4u = false;
  sellingLymp4u = false;
  selling = false;

  buyingMyt4u = false;
  buyingGr8 = false;
  buyingGro4u = false;
  buyingOk4u = false;
  buyingLymp4u = false;
  buying = false;
};

btn50.addEventListener('click', function () {
  bellEl.value = 50;
});
btn100.addEventListener('click', function () {
  bellEl.value = 100;
});
btn500.addEventListener('click', function () {
  bellEl.value = 500;
});
btn1000.addEventListener('click', function () {
  bellEl.value = 1000;
});
btn5000.addEventListener('click', function () {
  bellEl.value = 5000;
});

okButton.addEventListener('click', function () {
  okBtn();
  btn50.classList.add('hidden');
  btn100.classList.add('hidden');
  btn500.classList.add('hidden');
  btn1000.classList.add('hidden');
  btn5000.classList.add('hidden');
});

const sellStock = function () {
  if (selling && !firstTurn) {
    bellEl.classList.remove('hidden');
    okButton.classList.remove('hidden');
    btn50.classList.remove('hidden');
    btn100.classList.remove('hidden');
    btn500.classList.remove('hidden');
    btn1000.classList.remove('hidden');
    btn5000.classList.remove('hidden');
    bellEl.value = '';
  } else if (!selling) {
    bellEl.value = '';
    bellEl.classList.add('hidden');
    okButton.classList.add('hidden');
    btn50.classList.add('hidden');
    btn100.classList.add('hidden');
    btn500.classList.add('hidden');
    btn1000.classList.add('hidden');
    btn5000.classList.add('hidden');
  }
};

const buyStock = function () {
  if (buying) {
    bellEl.classList.remove('hidden');
    okButton.classList.remove('hidden');
    btn50.classList.remove('hidden');
    btn100.classList.remove('hidden');
    btn500.classList.remove('hidden');
    btn1000.classList.remove('hidden');
    btn5000.classList.remove('hidden');
    bellEl.value = '';
  } else if (!buying) {
    bellEl.value = '';
    bellEl.classList.add('hidden');
    okButton.classList.add('hidden');
    btn50.classList.add('hidden');
    btn100.classList.add('hidden');
    btn500.classList.add('hidden');
    btn1000.classList.add('hidden');
    btn5000.classList.add('hidden');
  }
};

sellMyt4uEl.addEventListener('click', function () {
  buyingMyt4u = false;
  buyingGr8 = false;
  buyingGro4u = false;
  buyingOk4u = false;
  buyingLymp4u = false;
  buying = false;
  if (!firstTurn) {
    if (selling) {
      selling = false;
      sellingMyt4u = false;
    } else if (!selling) {
      selling = true;
      sellingMyt4u = true;
    }
  }
  sellStock();
});

buyMyt4uEl.addEventListener('click', function () {
  sellingMyt4u = false;
  sellingGr8 = false;
  sellingGro4u = false;
  sellingOk4u = false;
  sellingLymp4u = false;
  selling = false;
  if (!firstTurn) {
    if (buyingMyt4u) {
      buying = false;
      buyingMyt4u = false;
    } else {
      buyingMyt4u = true;
      buying = true;
    }
  }
  buyStock();
});

sellOk4uEl.addEventListener('click', function () {
  buyingMyt4u = false;
  buyingGr8 = false;
  buyingGro4u = false;
  buyingOk4u = false;
  buyingLymp4u = false;
  buying = false;
  if (!firstTurn) {
    if (selling) {
      selling = false;
      sellingOk4u = false;
    } else if (!selling) {
      selling = true;
      sellingOk4u = true;
    }
  }
  sellStock();
});

buyGro4uEl.addEventListener('click', function () {
  sellingMyt4u = false;
  sellingGr8 = false;
  sellingGro4u = false;
  sellingOk4u = false;
  sellingLymp4u = false;
  selling = false;
  if (!firstTurn) {
    if (buyingGro4u) {
      buying = false;
      buyingGro4u = false;
    } else {
      buyingGro4u = true;
      buying = true;
    }
  }
  buyStock();
});

sellGro4uEl.addEventListener('click', function () {
  buyingMyt4u = false;
  buyingGr8 = false;
  buyingGro4u = false;
  buyingOk4u = false;
  buyingLymp4u = false;
  buying = false;
  if (!firstTurn) {
    if (selling) {
      selling = false;
      sellingGro4u = false;
    } else if (!selling) {
      selling = true;
      sellingGro4u = true;
    }
  }
  sellStock();
});

sellGr8El.addEventListener('click', function () {
  buyingMyt4u = false;
  buyingGr8 = false;
  buyingGro4u = false;
  buyingOk4u = false;
  buyingLymp4u = false;
  buying = false;
  if (!firstTurn) {
    if (selling) {
      selling = false;
      sellingGr8 = false;
    } else if (!selling) {
      selling = true;
      sellingGr8 = true;
    }
  }
  sellStock();
});

buyGr8El.addEventListener('click', function () {
  sellingMyt4u = false;
  sellingGr8 = false;
  sellingGro4u = false;
  sellingOk4u = false;
  sellingLymp4u = false;
  selling = false;
  if (!firstTurn) {
    if (buyingGr8) {
      buying = false;
      buyingGr8 = false;
    } else {
      buyingGr8 = true;
      buying = true;
    }
  }
  buyStock();
});

buyLymp4uEl.addEventListener('click', function () {
  sellingMyt4u = false;
  sellingGr8 = false;
  sellingGro4u = false;
  sellingOk4u = false;
  sellingLymp4u = false;
  selling = false;
  if (!firstTurn) {
    if (buyingLymp4u) {
      buying = false;
      buyingLymp4u = false;
    } else {
      buyingLymp4u = true;
      buying = true;
    }
  }
  buyStock();
});

sellLymp4uEl.addEventListener('click', function () {
  buyingMyt4u = false;
  buyingGr8 = false;
  buyingGro4u = false;
  buyingOk4u = false;
  buyingLymp4u = false;
  buying = false;
  if (!firstTurn) {
    if (selling) {
      selling = false;
      sellingLymp4u = false;
    } else if (!selling) {
      selling = true;
      sellingLymp4u = true;
    }
  }
  sellStock();
});

buyOk4uEl.addEventListener('click', function () {
  sellingMyt4u = false;
  sellingGr8 = false;
  sellingGro4u = false;
  sellingOk4u = false;
  sellingLymp4u = false;
  if (!firstTurn) {
    if (buyingOk4u) {
      buying = false;
      buyingOk4u = false;
    } else {
      buyingOk4u = true;
      buying = true;
    }
  }
  buyStock();
});

let playerN = 0;
const playerTrack = [
  player1,
  player2,
  player3,
  player4,
  player5,
  player6,
  player7,
  player8,
];

const next = function () {
  if (playerN < players - 1) {
    playerN += 1;
    currentPlayer = playerTrack[playerN];

    if (firstTurn) {
      pickJob(playerTrack[playerN]);
      //currentPlayer.proffession.cash += currentPlayer.proffession.cashFlow;
      fillIn(playerTrack[playerN]);
    } else {
      myt4uTick();
      gro4uTick();
      gr8Tick();
      ok4uTick();
      lymp4uTick();
      currentPlayer.proffession.cash += currentPlayer.proffession.cashFlow;
      fillIn(playerTrack[playerN]);
    }
  } else {
    myt4uTick();
    gro4uTick();
    gr8Tick();
    ok4uTick();
    lymp4uTick();
    turn += 1;
    turnEl.textContent = turn;
    playerN = 0;
    currentPlayer = player1;
    currentPlayer.proffession.cash += currentPlayer.proffession.cashFlow;
    fillIn(player1);
    firstTurn = false;
  }
};
let firstTurn = true;
pickJob(player1);
player1.proffession.cash = 0;
fillIn(player1);
nextBtn.addEventListener('click', function () {
  clear();
  clear();
  clear();
  if (firstTurn) {
    dice = Math.trunc(Math.random() * 12) + 1;
  }
  next();
});
let random;
const posNeg = function () {
  random = Math.trunc(Math.random() * 2) + 1;
  if (random == 1) {
    positive = false;
    negative = true;
  } else {
    positive = true;
    negative = false;
  }
};
posNeg();
/*
const tick1 = function (stock) {
  if (stock.cost <= 15) {
    stock.cost += Math.random() * 5 + 1;
    stock.cost = Math.trunc(stock.cost);
  } else if (stock.cost > 15 && stock.cost <= 30) {
    posNeg();
    if (positive) {
      stock.cost += Math.random() * 5 + 1;
      stock.cost = Math.trunc(stock.cost);
    } else {
      stock.cost -= Math.random() * 2 + 1;
      stock.cost = Math.trunc(stock.cost);
    }
  } else if (stock.cost > 30 && stock.cost <= 60) {
    posNeg();
    if (positive) {
      stock.cost += Math.random() * 5 + 1;
      stock.cost = Math.trunc(stock.cost);
    } else {
      stock.cost -= Math.random() * 1 + 3;
      stock.cost = Math.trunc(stock.cost);
    }
  } else if (stock.cost > 60 && stock.cost <= 30000) {
    posNeg();
    if (positive) {
      stock.cost += Math.random() * 5 + 1;
      stock.cost = Math.trunc(stock.cost);
    } else {
      stock.cost -= Math.random() * 50 + 1;
      stock.cost = Math.trunc(stock.cost);
    }
  }
};

const tick2 = function (stockCost) {
  if (stockCost <= 7) {
    stockCost += Math.random() * 5 + 1;
    stockCost = Math.trunc(stockCost);
    stock2.cost = stockCost;
  } else if (stockCost > 7 && stockCost <= 15) {
    posNeg();
    if (positive) {
      stockCost += Math.random() * 8 + 1;
      stockCost = Math.trunc(stockCost);
    } else {
      stockCost -= Math.random() * 5 + 1;
      stockCost = Math.trunc(stockCost);
    }
    stock2.cost = stockCost;
  } else if (stockCost > 15 && stockCost <= 28) {
    posNeg();
    if (positive) {
      stockCost += Math.random() * 6 + 3;
      stockCost = Math.trunc(stockCost);
    } else {
      stockCost -= Math.random() * 5 + 1;
      stockCost = Math.trunc(stockCost);
    }
    stock2.cost = stockCost;
  } else if (stockCost > 28 && stockCost <= 45) {
    posNeg();
    if (positive) {
      stockCost += Math.random() * 9 + 1;
      stockCost = Math.trunc(stockCost);
    } else {
      stockCost -= Math.random() * 8 + 1;
      stockCost = Math.trunc(stockCost);
    }
    stock2.cost = stockCost;
  } else if (stockCost > 45 && stockCost <= 1000) {
    posNeg();
    if (positive) {
      stockCost += Math.random() * 4 + 1;
      stockCost = Math.trunc(stockCost);
    } else {
      posNeg();
      if (positive) {
        stockCost -= Math.random() * 3 + 1;
        stockCost = Math.trunc(stockCost);
      } else {
        stockCost -= Math.random() * 10 + 1;
        stockCost = Math.trunc(stockCost);
      }
    }
    stock2.cost = stockCost;
  }
  gro4uCost = stock2.cost;
};

const tick3 = function (stockCost) {
  if (stockCost <= 85) {
    stockCost += Math.random() * 5 + 1;
    stockCost = Math.trunc(stockCost);
  } else if (stockCost > 85 && stockCost <= 110) {
    posNeg();
    if (positive) {
      stockCost += Math.random() * 20 + 1;
      stockCost = Math.trunc(stockCost);
    } else {
      stockCost -= Math.random() * 7 + 1;
      stockCost = Math.trunc(stockCost);
    }
  } else if (stockCost > 110 && stockCost <= 150) {
    posNeg();
    if (positive) {
      stockCost += Math.random() * 14 + 1;
      stockCost = Math.trunc(stockCost);
    } else {
      stockCost -= Math.random() * 8 + 1;
      stockCost = Math.trunc(stockCost);
    }
  } else if (stockCost > 150 && stockCost <= 199) {
    console.log('hi');
    posNeg();
    if (positive) {
      stockCost += Math.random() * 17 + 1;
      stockCost = Math.trunc(stockCost);
    } else {
      stockCost -= Math.random() * 9 + 1;
      stockCost = Math.trunc(stockCost);
    }
  } else if (stockCost > 199 && stockCost <= 900) {
    posNeg();
    if (positive) {
      stockCost += Math.random() * 5 + 1;
      stockCost = Math.trunc(stockCost);
    } else {
      stockCost -= Math.random() * 100 + 15;
      stockCost = Math.trunc(stockCost);
    }
  }
};
*/

let crazy = Math.random() * 10 + 1;

const myt4uTick = function () {
  if (myt4uCost <= myt4u.stock.lowRange) {
    myt4uCost += Math.random() * 4 + 3;
    myt4uCost = Math.trunc(myt4uCost);
  } else if (
    myt4uCost > myt4u.stock.lowRange &&
    myt4uCost <= myt4u.stock.second
  ) {
    posNeg();
    if (positive) {
      myt4uCost += Math.random() * 6 + 4;
      myt4uCost = Math.trunc(myt4uCost);
    } else {
      myt4uCost -= Math.random() * 3 + 1;
      myt4uCost = Math.trunc(myt4uCost);
    }
  } else if (myt4uCost > myt4u.stock.second && myt4uCost <= myt4u.stock.third) {
    posNeg();
    if (positive) {
      myt4uCost += Math.random() * 7 + 4;
      myt4uCost = Math.trunc(myt4uCost);
    } else {
      myt4uCost -= Math.random() * 2 + 2;
      myt4uCost = Math.trunc(myt4uCost);
    }
  } else if (myt4uCost > myt4u.stock.third && myt4uCost <= myt4u.stock.fourth) {
    posNeg();
    if (positive) {
      myt4uCost += Math.random() * 10 + 4;
      myt4uCost = Math.trunc(myt4uCost);
    } else {
      myt4uCost -= Math.random() * 4 + 2;
      myt4uCost = Math.trunc(myt4uCost);
    }
    crazy = Math.trunc(Math.random() * 10 + 1);
    if (crazy == 5) {
      myt4uCost = myt4u.stock.lowRange;
    }
  } else if (
    myt4uCost > myt4u.stock.fourth &&
    myt4uCost <= myt4u.stock.highRange
  ) {
    posNeg();
    if (positive) {
      myt4uCost += Math.random() * 10 + 4;
      myt4uCost = Math.trunc(myt4uCost);
    } else {
      myt4uCost -= Math.random() * 4 + 2;
      myt4uCost = Math.trunc(myt4uCost);
    }
  } else if (myt4uCost > myt4u.stock.highRange) {
    posNeg();
    if (positive) {
      myt4uCost += Math.random() * 3 + 1;
      myt4uCost = Math.trunc(myt4uCost);
    } else {
      posNeg();
      if (positive) {
        myt4uCost -= Math.random() * 8 + 5;
        myt4uCost = Math.trunc(myt4uCost);
      } else {
        myt4uCost -= Math.random() * myt4u.stock.highRange - 30 + 30;
        myt4uCost = Math.trunc(myt4uCost);
      }
    }
  }
};

const gro4uTick = function () {
  if (gro4uCost <= gro4u.stock.lowRange) {
    gro4uCost += Math.random() * 4 + 3;
    gro4uCost = Math.trunc(gro4uCost);
  } else if (
    gro4uCost > gro4u.stock.lowRange &&
    gro4uCost <= gro4u.stock.second
  ) {
    posNeg();
    if (positive) {
      gro4uCost += Math.random() * 6 + 4;
      gro4uCost = Math.trunc(gro4uCost);
    } else {
      gro4uCost -= Math.random() * 3 + 1;
      gro4uCost = Math.trunc(gro4uCost);
    }
  } else if (gro4uCost > gro4u.stock.second && gro4uCost <= gro4u.stock.third) {
    posNeg();
    if (positive) {
      gro4uCost += Math.random() * 7 + 4;
      gro4uCost = Math.trunc(gro4uCost);
    } else {
      gro4uCost -= Math.random() * 3 + 2;
      gro4uCost = Math.trunc(gro4uCost);
    }
  } else if (gro4uCost > gro4u.stock.third && gro4uCost <= gro4u.stock.fourth) {
    posNeg();
    if (positive) {
      gro4uCost += Math.random() * 10 + 4;
      gro4uCost = Math.trunc(gro4uCost);
    } else {
      gro4uCost -= Math.random() * 3 + 2;
      gro4uCost = Math.trunc(gro4uCost);
    }
    crazy = Math.trunc(Math.random() * 10 + 1);
    if (crazy == 5) {
      gro4uCost = gro4u.stock.lowRange;
    }
  } else if (
    gro4uCost > gro4u.stock.fourth &&
    gro4uCost <= gro4u.stock.highRange
  ) {
    posNeg();
    if (positive) {
      gro4uCost += Math.random() * 10 + 4;
      gro4uCost = Math.trunc(gro4uCost);
    } else {
      gro4uCost -= Math.random() * 4 + 2;
      gro4uCost = Math.trunc(gro4uCost);
    }
  } else if (gro4uCost > gro4u.stock.highRange) {
    posNeg();
    if (positive) {
      gro4uCost += Math.random() * 3 + 1;
      gro4uCost = Math.trunc(gro4uCost);
    } else {
      posNeg();
      if (positive) {
        gro4uCost -= Math.random() * 8 + 5;
        gro4uCost = Math.trunc(gro4uCost);
      } else {
        gro4uCost -= Math.random() * gro4u.stock.highRange - 30 + 30;
        gro4uCost = Math.trunc(gro4uCost);
      }
    }
  }
};
const gr8Tick = function () {
  if (gr8Cost <= gr8.stock.lowRange) {
    gr8Cost += Math.random() * 4 + 3;
    gr8Cost = Math.trunc(gr8Cost);
  } else if (gr8Cost > gr8.stock.lowRange && gr8Cost <= gr8.stock.second) {
    posNeg();
    if (positive) {
      gr8Cost += Math.random() * 7 + 4;
      gr8Cost = Math.trunc(gr8Cost);
    } else {
      gr8Cost -= Math.random() * 2 + 2;
      gr8Cost = Math.trunc(gr8Cost);
    }
  } else if (gr8Cost > gr8.stock.second && gr8Cost <= gr8.stock.third) {
    posNeg();
    if (positive) {
      gr8Cost += Math.random() * 7 + 4;
      gr8Cost = Math.trunc(gr8Cost);
    } else {
      gr8Cost -= Math.random() * 3 + 2;
      gr8Cost = Math.trunc(gr8Cost);
    }
  } else if (gr8Cost > gr8.stock.third && gr8Cost <= gr8.stock.fourth) {
    posNeg();
    if (positive) {
      gr8Cost += Math.random() * 10 + 4;
      gr8Cost = Math.trunc(gr8Cost);
    } else {
      gr8Cost -= Math.random() * 3 + 2;
      gr8Cost = Math.trunc(gr8Cost);
    }
    crazy = Math.trunc(Math.random() * 10 + 1);
    if (crazy == 5) {
      gr8Cost = gr8.stock.lowRange;
    }
  } else if (gr8Cost > gr8.stock.fourth && gr8Cost <= gr8.stock.highRange) {
    posNeg();
    if (positive) {
      gr8Cost += Math.random() * 10 + 4;
      gr8Cost = Math.trunc(gr8Cost);
    } else {
      gr8Cost -= Math.random() * 3 + 3;
      gr8Cost = Math.trunc(gr8Cost);
    }
  } else if (gr8Cost > gr8.stock.highRange) {
    posNeg();
    if (positive) {
      gr8Cost += Math.random() * 3 + 1;
      gr8Cost = Math.trunc(gr8Cost);
    } else {
      posNeg();
      if (positive) {
        gr8Cost -= Math.random() * 10 + 5;
        gr8Cost = Math.trunc(gr8Cost);
      } else {
        gr8Cost -= Math.random() * gr8.stock.highRange - 30 + 30;
        gr8Cost = Math.trunc(gr8Cost);
      }
    }
  }
};

const ok4uTick = function () {
  if (ok4uCost <= ok4u.stock.lowRange) {
    ok4uCost += Math.random() * 4 + 3;
    ok4uCost = Math.trunc(ok4uCost);
  } else if (ok4uCost > ok4u.stock.lowRange && ok4uCost <= ok4u.stock.second) {
    posNeg();
    if (positive) {
      ok4uCost += Math.random() * 6 + 4;
      ok4uCost = Math.trunc(ok4uCost);
    } else {
      ok4uCost -= Math.random() * 3 + 1;
      ok4uCost = Math.trunc(ok4uCost);
    }
  } else if (ok4uCost > ok4u.stock.second && ok4uCost <= ok4u.stock.third) {
    posNeg();
    if (positive) {
      ok4uCost += Math.random() * 7 + 4;
      ok4uCost = Math.trunc(ok4uCost);
    } else {
      ok4uCost -= Math.random() * 3 + 1;
      ok4uCost = Math.trunc(ok4uCost);
    }
  } else if (ok4uCost > ok4u.stock.third && ok4uCost <= ok4u.stock.fourth) {
    posNeg();
    if (positive) {
      ok4uCost += Math.random() * 10 + 4;
      ok4uCost = Math.trunc(ok4uCost);
    } else {
      ok4uCost -= Math.random() * 4 + 2;
      ok4uCost = Math.trunc(ok4uCost);
    }
    crazy = Math.trunc(Math.random() * 10 + 1);
    if (crazy == 5) {
      ok4uCost = ok4u.stock.lowRange;
    }
  } else if (ok4uCost > ok4u.stock.fourth && ok4uCost <= ok4u.stock.highRange) {
    posNeg();
    if (positive) {
      ok4uCost += Math.random() * 10 + 4;
      ok4uCost = Math.trunc(ok4uCost);
    } else {
      ok4uCost -= Math.random() * 3 + 3;
      ok4uCost = Math.trunc(ok4uCost);
    }
  } else if (ok4uCost > ok4u.stock.highRange) {
    posNeg();
    if (positive) {
      ok4uCost += Math.random() * 3 + 1;
      ok4uCost = Math.trunc(ok4uCost);
    } else {
      posNeg();
      if (positive) {
        ok4uCost -= Math.random() * 10 + 5;
        ok4uCost = Math.trunc(ok4uCost);
      } else {
        ok4uCost -= Math.random() * ok4u.stock.highRange - 30 + 30;
        ok4uCost = Math.trunc(ok4uCost);
      }
    }
  }
};

const lymp4uTick = function () {
  if (lymp4uCost <= lymp4u.stock.lowRange) {
    lymp4uCost += Math.random() * 4 + 3;
    lymp4uCost = Math.trunc(lymp4uCost);
  } else if (
    lymp4uCost > lymp4u.stock.lowRange &&
    lymp4uCost <= lymp4u.stock.second
  ) {
    posNeg();
    if (positive) {
      lymp4uCost += Math.random() * 6 + 4;
      lymp4uCost = Math.trunc(lymp4uCost);
    } else {
      lymp4uCost -= Math.random() * 2 + 1;
      lymp4uCost = Math.trunc(lymp4uCost);
    }
  } else if (
    lymp4uCost > lymp4u.stock.second &&
    lymp4uCost <= lymp4u.stock.third
  ) {
    posNeg();
    if (positive) {
      lymp4uCost += Math.random() * 7 + 4;
      lymp4uCost = Math.trunc(lymp4uCost);
    } else {
      lymp4uCost -= Math.random() * 3 + 2;
      lymp4uCost = Math.trunc(lymp4uCost);
    }
  } else if (
    lymp4uCost > lymp4u.stock.third &&
    lymp4uCost <= lymp4u.stock.fourth
  ) {
    posNeg();
    if (positive) {
      lymp4uCost += Math.random() * 10 + 4;
      lymp4uCost = Math.trunc(lymp4uCost);
    } else {
      lymp4uCost -= Math.random() * 4 + 3;
      lymp4uCost = Math.trunc(lymp4uCost);
    }
    crazy = Math.trunc(Math.random() * 10 + 1);
    if (crazy == 5) {
      lymp4uCost = lymp4u.stock.lowRange;
    }
  } else if (
    lymp4uCost > lymp4u.stock.fourth &&
    lymp4uCost <= lymp4u.stock.highRange
  ) {
    posNeg();
    if (positive) {
      lymp4uCost += Math.random() * 10 + 4;
      lymp4uCost = Math.trunc(lymp4uCost);
    } else {
      lymp4uCost -= Math.random() * 4 + 3;
      lymp4uCost = Math.trunc(lymp4uCost);
    }
  } else if (lymp4uCost > lymp4u.stock.highRange) {
    posNeg();
    if (positive) {
      lymp4uCost += Math.random() * 3 + 1;
      lymp4uCost = Math.trunc(lymp4uCost);
    } else {
      posNeg();
      if (positive) {
        lymp4uCost -= Math.random() * 10 + 5;
        lymp4uCost = Math.trunc(lymp4uCost);
      } else {
        lymp4uCost -= Math.random() * lymp4u.stock.highRange - 20 + 20;
        lymp4uCost = Math.trunc(lymp4uCost);
      }
    }
  }
};
/*
let myt4uCostBasis1 = [];
let gro4uCostBasis1 = [];
let ok4uCostBasis1 = [];
let gr84uCostBasis1 = [];
let lymp4uCostBasis1 = [];

let myt4uCostBasis2 = [];
let gro4uCostBasis2 = [];
let ok4uCostBasis2 = [];
let gr84uCostBasis2 = [];
let lymp4uCostBasis2 = [];

let myt4uCostBasis3 = [];
let gro4uCostBasis3 = [];
let ok4uCostBasis3 = [];
let gr84uCostBasis3 = [];
let lymp4uCostBasis3 = [];

let myt4uCostBasis4 = [];
let gro4uCostBasis4 = [];
let ok4uCostBasis4 = [];
let gr84uCostBasis4 = [];
let lymp4uCostBasis4 = [];

let myt4uCostBasis5 = [];
let gro4uCostBasis5 = [];
let ok4uCostBasis5 = [];
let gr84uCostBasis5 = [];
let lymp4uCostBasis5 = [];

let myt4uCostBasis6 = [];
let gro4uCostBasis6 = [];
let ok4uCostBasis6 = [];
let gr84uCostBasis6 = [];
let lymp4uCostBasis6 = [];

let myt4uCostBasis7 = [];
let gro4uCostBasis7 = [];
let ok4uCostBasis7 = [];
let gr84uCostBasis7 = [];
let lymp4uCostBasis7 = [];

let myt4uCostBasis8 = [];
let gro4uCostBasis8 = [];
let ok4uCostBasis8 = [];
let gr84uCostBasis8 = [];
let lymp4uCostBasis8 = [];
*/
let n = 0;
const myt4uAverage = function () {
  n = 0;
  currentPlayer.myt4uAverage = 0;
  for (let i = 0; i < currentPlayer.myt4uStock.length; i++) {
    currentPlayer.myt4uAverage +=
      currentPlayer.myt4uCost[i] * currentPlayer.myt4uStock[i];
    console.log(currentPlayer.myt4uAverage);
  }
  for (let i = 0; i < currentPlayer.myt4uStock.length; i++) {
    n += currentPlayer.myt4uStock[i];
    console.log(n);
  }
  currentPlayer.myt4uAverage = Math.trunc(currentPlayer.myt4uAverage / n);
};
const ok4uAverage = function () {
  n = 0;
  currentPlayer.ok4uAverage = 0;
  for (let i = 0; i < currentPlayer.ok4uStock.length; i++) {
    currentPlayer.ok4uAverage +=
      currentPlayer.ok4uCost[i] * currentPlayer.ok4uStock[i];
    console.log(currentPlayer.ok4uAverage);
  }
  for (let i = 0; i < currentPlayer.ok4uStock.length; i++) {
    n += currentPlayer.ok4uStock[i];
    console.log(n);
  }
  currentPlayer.ok4uAverage = Math.trunc(currentPlayer.ok4uAverage / n);
};
const gro4uAverage = function () {
  n = 0;
  currentPlayer.gro4uAverage = 0;
  for (let i = 0; i < currentPlayer.gro4uStock.length; i++) {
    currentPlayer.gro4uAverage +=
      currentPlayer.gro4uCost[i] * currentPlayer.gro4uStock[i];
    console.log(currentPlayer.gro4uAverage);
  }
  for (let i = 0; i < currentPlayer.gro4uStock.length; i++) {
    n += currentPlayer.gro4uStock[i];
    console.log(n);
  }
  currentPlayer.gro4uAverage = Math.trunc(currentPlayer.gro4uAverage / n);
};
const gr8Average = function () {
  n = 0;
  currentPlayer.gr8Average = 0;
  for (let i = 0; i < currentPlayer.gr8Stock.length; i++) {
    currentPlayer.gr8Average +=
      currentPlayer.gr8Cost[i] * currentPlayer.gr8Stock[i];
    console.log(currentPlayer.gr8Average);
  }
  for (let i = 0; i < currentPlayer.gr8Stock.length; i++) {
    n += currentPlayer.gr8Stock[i];
    console.log(n);
  }
  currentPlayer.gr8Average = Math.trunc(currentPlayer.gr8Average / n);
};
const lymp4uAverage = function () {
  n = 0;
  currentPlayer.lymp4uAverage = 0;
  for (let i = 0; i < currentPlayer.lymp4uStock.length; i++) {
    currentPlayer.lymp4uAverage +=
      currentPlayer.lymp4uCost[i] * currentPlayer.lymp4uStock[i];
    console.log(currentPlayer.lymp4uAverage);
  }
  for (let i = 0; i < currentPlayer.lymp4uStock.length; i++) {
    n += currentPlayer.lymp4uStock[i];
    console.log(n);
  }
  currentPlayer.lymp4uAverage = Math.trunc(currentPlayer.lymp4uAverage / n);
};
