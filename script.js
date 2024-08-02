// Our large collection of olympicCountries (the database!)
let IOCCodes = [
  "Code",
  "ALG",
  "ANG",
  "BEN",
  "BOT",
  "BUR",
  "BDI",
  "CMR",
  "CPV",
  "CAF",
  "CHA",
  "COM",
  "CGO",
  "COD",
  "CIV",
  "DJI",
  "EGY",
  "ERI",
  "SWZ",
  "ETH",
  "GAB",
  "GAM",
  "GHA",
  "GUI",
  "GBS",
  "GEQ",
  "KEN",
  "LES",
  "LBR",
  "LBA",
  "MAD",
  "MAW",
  "MLI",
  "MAR",
  "MRI",
  "MTN",
  "MOZ",
  "NAM",
  "NIG",
  "NGR",
  "UGA",
  "RWA",
  "STP",
  "SEN",
  "SEY",
  "SLE",
  "SOM",
  "RSA",
  "SSD",
  "SUD",
  "TAN",
  "TOG",
  "TUN",
  "ZAM",
  "ZIM",
  "ANT",
  "ARG",
  "ARU",
  "BAH",
  "BAR",
  "BIZ",
  "BER",
  "BOL",
  "BRA",
  "CAY",
  "CAN",
  "CHI",
  "COL",
  "CRC",
  "CUB",
  "DOM",
  "DMA",
  "ESA",
  "ECU",
  "GRN",
  "GUA",
  "GUY",
  "HAI",
  "HON",
  "JAM",
  "MEX",
  "NCA",
  "PAN",
  "PAR",
  "PER",
  "PUR",
  "SKN",
  "LCA",
  "VIN",
  "SUR",
  "TTO",
  "USA",
  "URU",
  "VEN",
  "IVB",
  "ISV",
  "AFG",
  "BRN",
  "BAN",
  "BHU",
  "BRU",
  "CAM",
  "CHN",
  "KOR",
  "HKG",
  "IND",
  "INA",
  "IRI",
  "IRQ",
  "JPN",
  "JOR",
  "KAZ",
  "KGZ",
  "KUW",
  "LAO",
  "LBN",
  "MAS",
  "MDV",
  "MGL",
  "MYA",
  "NEP",
  "OMA",
  "PAK",
  "PLE",
  "PHI",
  "QAT",
  "PRK",
  "KSA",
  "SGP",
  "SRI",
  "SYR",
  "TJK",
  "TPE",
  "THA",
  "TLS",
  "TKM",
  "UAE",
  "UZB",
  "VIE",
  "YEM",
  "ALB",
  "AND",
  "ARM",
  "AUT",
  "AZE",
  "BEL",
  "BIH",
  "BUL",
  "CYP",
  "CRO",
  "CZE",
  "DEN",
  "ESP",
  "EST",
  "FIN",
  "FRA",
  "GEO",
  "GER",
  "GBR",
  "GRE",
  "HUN",
  "IRL",
  "ISL",
  "ISR",
  "ITA",
  "KOS",
  "LAT",
  "LIE",
  "LTU",
  "LIE",
  "MKD",
  "MLT",
  "MDA",
  "MON",
  "MNE",
  "NED",
  "NOR",
  "POL",
  "POR",
  "ROU",
  "SMR",
  "SRB",
  "SVK",
  "SLO",
  "SWE",
  "SUI",
  "TUR",
  "UKR",
];

let olympicCountries = [
  "Name",
  "Algeria",
  "Angola",
  "Benin",
  "Botswana",
  "Burkina Faso",
  "Burundi",
  "Cameroon",
  "Cabo Verde",
  "Central African Republic",
  "Chad",
  "Comoros",
  "Congo",
  "Democratic Republic of the Congo",
  "Côte dIvoire",
  "Djibouti",
  "Egypt",
  "Eritrea",
  "Eswatini",
  "Ethiopia",
  "Gabon",
  "Gambia",
  "Ghana",
  "Guinea",
  "Guinea-Bissau",
  "Equatorial Guinea",
  "Kenya",
  "Lesotho",
  "Liberia",
  "Libya",
  "Madagascar",
  "Malawi",
  "Mali",
  "Morocco",
  "Mauritius",
  "Mauritania",
  "Mozambique",
  "Namibia",
  "Niger",
  "Nigeria",
  "Uganda",
  "Rwanda",
  "Sao Tome and Principe",
  "Senegal",
  "Seychelles",
  "Sierra Leone",
  "Somalia",
  "South Africa",
  "South Sudan",
  "Sudan",
  "United Republic of Tanzania",
  "Togo",
  "Tunisia",
  "Zambia",
  "Zimbabwe",
  "Antigua and Barbuda",
  "Argentina",
  "Aruba",
  "Bahamas",
  "Barbados",
  "Belize",
  "Bermuda",
  "Bolivia",
  "Brazil",
  "Cayman Islands",
  "Canada",
  "Chile",
  "Colombia",
  "Costa Rica",
  "Cuba",
  "Dominican Republic",
  "Dominica",
  "El Salvador",
  "Ecuador",
  "Grenada",
  "Guatemala",
  "Guyana",
  "Haiti",
  "Honduras",
  "Jamaica",
  "Mexico",
  "Nicaragua",
  "Panama",
  "Paraguay",
  "Peru",
  "Puerto Rico",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "St. Vincent and the Grenadines",
  "Suriname",
  "Trinidad and Tobago",
  "United States of America",
  "Uruguay",
  "Venezuela",
  "Virgin Islands, British",
  "Virgin Islands",
  "Afghanistan",
  "Bahrain",
  "Bangladesh",
  "Bhutan",
  "Brunei Darussalam",
  "Cambodia",
  "Peoples Republic of China",
  "Republic of Korea",
  "Hong Kong, China",
  "India",
  "Indonesia",
  "Islamic Republic of Iran",
  "Iraq",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kyrgyzstan",
  "Kuwait",
  "Lao Peoples Democratic Republic",
  "Lebanon",
  "Malaysia",
  "Maldives",
  "Mongolia",
  "Myanmar",
  "Nepal",
  "Oman",
  "Pakistan",
  "Palestine",
  "Philippines",
  "Qatar",
  "Democratic Peoples Republic of Korea",
  "Saudi Arabia",
  "Singapore",
  "Sri Lanka",
  "Syrian Arab Republic",
  "Tajikistan",
  "Chinese Taipei",
  "Thailand",
  "Democratic Rep. of Timor-Leste",
  "Turkmenistan",
  "United Arab Emirates",
  "Uzbekistan",
  "Vietnam",
  "Yemen",
  "Albania",
  "Andorra",
  "Armenia",
  "Austria",
  "Azerbaijan",
  "Belgium",
  "Bosnia and Herzegovina",
  "Bulgaria",
  "Cyprus",
  "Croatia",
  "Czechia",
  "Denmark",
  "Spain",
  "Estonia",
  "Finland",
  "France",
  "Georgia",
  "Germany",
  "Great Britain",
  "Greece",
  "Hungary",
  "Ireland",
  "Iceland",
  "Israel",
  "Italy",
  "Kosovo",
  "Latvia",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "North Macedonia",
  "Malta",
  "Republic of Moldova",
  "Monaco",
  "Montenegro",
  "Netherlands",
  "Norway",
  "Poland",
  "Portugal",
  "Romania",
  "San Marino",
  "Serbia",
  "Slovakia",
  "Slovenia",
  "Sweden",
  "Switzerland",
  "Türkiye",
  "Ukraine",
];

// DocString

/** @type {HTMLDivElement} */
let searchAlert = document.getElementById("alert-search-warn");
/** @type {HTMLInputElement} */
let searchInput = document.getElementById("nav-search");
/** @type {HTMLInputElement} */
let searchInput2 = document.getElementById("nav-code-search");
/** @type {HTMLUListElement} */
let olympicCountriesList = document.getElementById("ul-fav-olympicCountries");
/** @type {HTMLUListElement} */
let IOCCodesList = document.getElementById("ul-code-IOCCodes");

// Hide the search results alert warning.
searchAlert.style.display = "none";
// Focus the search bar so users can start typing to search immediately.
searchInput.focus();
searchInput2.focus();

// Append all the country to load dynamically.
for (const country of olympicCountries) {
  olympicCountriesList.innerHTML += `
    <li>${country}</li>
  `;
}
for (const code of IOCCodes) {
  IOCCodesList.innerHTML += `
    <li>${code}</li>
  `;
}

// Check for results after each keystroke on the search bar.
searchInput.addEventListener("keyup", function () {
  let matchesFound = 0;
  const query = this.value.toLowerCase().trim();

  for (const child of olympicCountriesList.children) {
    const countryName = child.innerText;
    const matchFound = countryName.toLowerCase().includes(query);

    // Display or hide the item, if the query matches the country name.
    if (matchFound) {
      child.style.display = "list-item";
      matchesFound += 1;
    } else {
      child.style.display = "none";
    }
  }

  // Show or hide the alert, if no results were found.
  if (query !== "" && matchesFound === 0) {
    searchAlert.innerText = `No results found for '${query2}'.`;
    searchAlert.style.display = "block";
  } else {
    searchAlert.style.display = "none";
  }
});
searchInput2.addEventListener("keyup", function () {
  let matchesFound2 = 0;
  const query2 = this.value.toLowerCase().trim();
  for (const child2 of IOCCodesList.children) {
    const codeName = child2.innerText;
    const matchFound2 = codeName.toLowerCase().includes(query2);

    // Display or hide the item, if the query2 matches the code name.

    if (matchFound2) {
      child2.style.display = "list-item";
      matchesFound2 += 1;
    } else {
      child2.style.display = "none";
    }
  }
  if (query2 !== "" && matchesFound2 === 0) {
    searchAlert.innerText = `No results found for '${query2}'.`;
    searchAlert.style.display = "block";
  } else {
    searchAlert.style.display = "none";
  }
});
