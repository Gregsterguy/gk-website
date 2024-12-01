const industryOptions = [
    "Aerospace (aircraft manufacturing)",
    "Agriculture",
    "Livestock",
    "Fishing",
    "Timber",
    "Tobacco",
    "Meat & Dairy",
    "Chemical (manufacturing)",
    "Pharmaceuticals (research)",
    "Computers",
    "Software",
    "Peripherals, repair, retail",
    "Construction",
    "Defense",
    "Arms (trade and manufacturing)",
    "Education",
    "Preschools and daycares",
    "Primary, Secondary, & Tertiary (higher)",
    "Vocational",
    "Special",
    "Alternative (home or cyber)",
    "Energy (production, distribution)",
    "Electrical Power",
    "Petroleum (oil)",
    "Coal",
    "Nuclear",
    "Renewable (sustainable, alternative)",
    "Entertainment",
    "Amusement Parks",
    "Animation",
    "Circus",
    "Event Management",
    "Film",
    "Gambling",
    "Game Manufacturing",
    "Media",
    "Music",
    "Sex (adult entertainment)",
    "Strip/Sex Clubs",
    "Pornography",
    "Shops, toys, paraphernalia",
    "Sports Management and Event Promotion",
    "Talent Agency",
    "Theatre Production",
    "Financial",
    "Banks and Credit Unions",
    "Insurance",
    "Accountancy",
    "Stock Brokerages",
    "Investment Funds",
    "Food",
    "Agriculture (crops, livestock, seafood, etc)",
    "Fruit Production (horticulture)",
    "Manufacturing (agrichemicals, farm machinery, seed, supplies,",
    "Food Processing",
    "Grocery (markets and retail)",
    "Foodservice (catering, restaurants, cafeterias)",
    "Food Technology (research and development)",
    "Health Care",
    "Hospitality",
    "Information",
    "Manufacturing",
    "End Products",
    "Raw Materials",
    "Machining",
    "Mass Media",
    "Broadcasting",
    "Film",
    "Internet",
    "Music",
    "News",
    "Publishing",
    "Telecommunications",
    "Transport",
    "Water",
    "Drinking Water (for residential, commercial, and industrial sectors)",
    "Wastewater (sewage treatment)","Walmart", "Exxon Mobil", "Berkshire Hathaway", "Apple", "UnitedHealth Group", "McKesson", "Chevron", "American Express", "Ford Motor", "CVS Health", "General Electric", "Amazon.com", "AT&T", "Nike", "Phillips 66", "United Technologies", "Ecolab", "Johnson & Johnson", "Intel", "Verizon Communications", "Walgreens Boots Alliance", "Home Depot", "Goldman Sachs Group", "PepsiCo", "DuPont", "Citigroup", "Coca-Cola", "Oracle", "Dow Chemical", "Hewlett-Packard", "Caterpillar", "Boehm & Mayer", "Philip Morris International", "ConocoPhillips", "Procter & Gamble", "FedEx", "Cisco Systems", "Facebook", "Google", "Oracle", "Intel", "Amazon.com"
  ]

const writtenMediaOptions = [
  "Direct Response",
  "Website Landing Page",
  "Email Sign Up",
  "Blog",
	"Brand Focused Blog Post",
	"Technique Post",
	"How To Post",
	"Best- Post",
	"Why- Post",
  "Ad",
  "SEO Focused Blog",
  "Sales Page",
  "Video (Script Writing)",
  "UX Layout",
  "Social Media Company Post"
];

const productsOptions = ["Televisions",
"Tables",
"Chairs",
"Books",
"Coffee",
"Water",
"Bottles",
"Vaccuums",
"Paint",
"Video games",
"Board games",
"Plants",
"Patio furniture",
"Doors",
"Door knobs",
"Security systems",
"Signs",
"Off-brand accessories",
"Casual clothing",
"High-end clothing",
"Computers",
"Computer parts",
"Monitors",
"Glasses",
"Sticky notes",
"Pens",
"Pencils",
"Paper",
"Cards",
"Knives",
"Light bulbs",
"Music",
"Glass",
"Windows",
"Wood",
"Napkins",
"Silverware",
"Sun reflectors",
"Towels",
"Bikes",
"Car accessories",
"Headphones",
"Music players",
"Tea",
"Pre-prepared food",
"Skateboards",
"Cell phones",
"Cell phone accessories",
"Jewelry",
"Rugs",
"Wall decals",
"Paintings",
"Reprinted artwork",
"Sports paraphernalia",
"Television paraphernalia",
"Movie paraphernalia",
"3D glasses/headsets",
"Sound systems",
"Shoes",
"Hats",
"Helmets",
"Keychains",
"Bookends",
"Frames",
"Coloring books",
"Pillows",
"Bedsheets",
"Wallets",
"Money clips",
"Toys",
"Clocks",
"Gag gifts",
"Sculptures",
"Candles",
"Cleaning supplies",
"Customized anything",
"Canvas",
"Bean bag chairs",
"Back support attachments for chairs",
"Wheelchairs",
"Parts for discontinued electronics",
"Weight loss products",
"Scales",
"Shower curtains",
"Toothbrushes",
"Toilet seat covers",
"Tattoo guns",
"Hair care products",
"Makeup",
"Guns",
"Posters",
"Fabric",
"Pharmaceuticals",
"Movies",
"GPS locators",
"Cars",
"Tickets",
"Piping",
"Tools",
"Weights",
"Socks",
"Shoes",
"Sandals",
"Salad",
"Seashells",
"Shampoo",
"Sickles",
"Cylces",
"Microphones",
"Cars",
"Planes",
"Boats",
"Trains",
"Computers",
"Phones",
"Clothes"]


// First button
function spinindustryOptions() {
  // Select a random item from the industryOptions array
  const randomIndex = Math.floor(Math.random() * industryOptions.length);
  const randomindustryOptions = industryOptions[randomIndex];

  // Display the randomly selected industry in the output element
  const industryOptionsOutput = document.getElementById("industry-output");
  industryOptionsOutput.textContent = randomindustryOptions;
}

// Add an event listener to the "Spin" button for the industry generator
const industryOptionsButton = document.getElementById("industry-button");
industryOptionsButton.addEventListener("click", spinindustryOptions);

// Second button for Products
function spinProducts() {
  // Select a random item from the productsOptions array
  const randomIndex = Math.floor(Math.random() * productsOptions.length);
  const randomproductsOptions = productsOptions[randomIndex];

  // Display the randomly selected products in the output element
  const productsOptionsOutput = document.getElementById("product-types-output");
  productsOptionsOutput.textContent = randomproductsOptions;
}

// Add an event listener to the "Spin" button for the written media generator
const productsOptionsButton = document.getElementById("product-types-button");
productsOptionsButton.addEventListener("click", spinProducts);


// Third button
function spinWrittenMedia() {
  // Select a random item from the writtenMediaOptions array
  const randomIndex = Math.floor(Math.random() * writtenMediaOptions.length);
  const randomWrittenMedia = writtenMediaOptions[randomIndex];

  // Display the randomly selected written media in the output element
  const writtenMediaOutput = document.getElementById("written-media-output");
  writtenMediaOutput.textContent = randomWrittenMedia;
}

// Add an event listener to the "Spin" button for the written media generator
const writtenMediaButton = document.getElementById("written-media-button");
writtenMediaButton.addEventListener("click", spinWrittenMedia);






const industriesElement = document.getElementById("industries");
const mediaElement = document.getElementById("media");
const productsElement = document.getElementById("products");

const randomizeButton = document.getElementById("randomize");
randomizeButton.addEventListener("click", function() {
  industriesElement.textContent = getRandomItem(industriesList);
  mediaElement.textContent = getRandomItem(mediaList);
});

function getRandomItem(list) {
  return list[Math.floor(Math.random() * list.length)];
}
