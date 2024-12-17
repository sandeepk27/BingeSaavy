// script.js

const ottPlans = [
    {
      name: "Amazon Prime",
      icon: "images/prime.jpeg",
      plans: [
        { name: "Monthly", price: { USD: 8.99, INR: 129, GBP: 7.99, EUR: 7.49, Dinar: 2.75, CAD: 11.99, AUD: 12.99 } },
        { name: "Yearly", price: { USD: 107.88, INR: 999, GBP: 95.88, EUR: 89.99, Dinar: 32.5, CAD: 139.99, AUD: 149.99 } },
      ],
      supportedDevices: ["Smart TV", "Mobile", "Tablet", "Laptop"],
    },
    {
      name: "Netflix",
      icon: "images/netflix.jpeg",
      plans: [
        { name: "Basic", price: { USD: 9.99, INR: 199, GBP: 6.99, EUR: 7.99, Dinar: 3.00, CAD: 14.99, AUD: 13.99 } },
        { name: "Standard", price: { USD: 15.49, INR: 499, GBP: 10.99, EUR: 13.99, Dinar: 4.99, CAD: 18.49, AUD: 16.99 } },
        { name: "Premium", price: { USD: 19.99, INR: 649, GBP: 14.99, EUR: 17.99, Dinar: 6.99, CAD: 24.99, AUD: 21.99 } },
      ],
      supportedDevices: ["Smart TV", "Mobile", "Tablet", "Laptop"],
    },
    {
      name: "Disney Hotstar",
      icon: "images/hotstar.jpeg", 
      plans: [
        { name: "Monthly", price: { USD: 3.99, INR: 49, GBP: 2.99, EUR: 3.50, Dinar: 1.25, CAD: 5.50, AUD: 5.99 } },
        { name: "Yearly", price: { USD: 47.88, INR: 499, GBP: 35.88, EUR: 40.00, Dinar: 15.00, CAD: 60.00, AUD: 65.00 } },
      ],
      supportedDevices: ["Smart TV", "Mobile", "Tablet", "Laptop"],
    },
    {
        name: 'Sun NXT',
        icon: 'images/sunnxt.jpeg',
        plans: [
          { name: 'Monthly', price: { INR: 50, USD: 0.99, GBP: 0.79, EUR: 0.89 } },
          { name: 'Yearly', price: { INR: 490, USD: 5.99, GBP: 4.99, EUR: 5.49 } },
        ],
        supportedDevices: ['Smart TV', 'Mobile', 'Tablet', 'Laptop'],
      },
      {
        name: 'Sony LIV',
        icon: 'images/sonyliv.jpeg',
        plans: [
          { name: 'Mobile (Yearly)', price: { INR: 599, USD: 7.99, GBP: 6.99, EUR: 7.49 } },
          { name: 'Premium (Yearly)', price: { INR: 999, USD: 12.99, GBP: 10.99, EUR: 11.99 } },
        ],
        supportedDevices: ['Smart TV', 'Mobile', 'Tablet', 'Laptop'],
      },
      {
        name: 'Zee5',
        icon: 'images/zee5.jpeg',
        plans: [
          { name: 'Premium HD (Yearly)', price: { INR: 899, USD: 10.99, GBP: 9.99, EUR: 10.49 } },
          { name: 'Premium 4K (Yearly)', price: { INR: 1199, USD: 14.99, GBP: 12.99, EUR: 13.99 } },
        ],
        supportedDevices: ['Smart TV', 'Mobile', 'Tablet', 'Laptop'],
      },
      {
        name: 'Aha',
        icon: 'images/aha.jpeg',
        plans: [
          { name: 'Regular (Yearly)', price: { INR: 399, USD: 4.99, GBP: 3.99, EUR: 4.49 } },
          { name: 'Gold (Yearly)', price: { INR: 699, USD: 8.49, GBP: 6.99, EUR: 7.99 } },
        ],
        supportedDevices: ['Smart TV', 'Mobile', 'Tablet', 'Laptop'],
      },
      {
        name: 'ETV Win',
        icon: 'images/etvwin.jpeg',
        plans: [
          { name: 'Yearly', price: { INR: 365, USD: 4.49, GBP: 3.79, EUR: 4.19 } },
        ],
        supportedDevices: ['Smart TV', 'Mobile', 'Tablet', 'Laptop'],
      },
      {
        name: 'Lionsgate Play',
        icon: 'images/loinsgate.png',
        plans: [
          { name: 'Yearly', price: { INR: 699, USD: 8.99, GBP: 7.49, EUR: 7.99 } },
        ],
        supportedDevices: ['Smart TV', 'Mobile', 'Tablet', 'Laptop'],
      },
      {
        name: 'Shemaroo',
        icon: 'images/shemaroo.jpeg',
        plans: [
          { name: 'Yearly', price: { INR: 499, USD: 5.99, GBP: 4.99, EUR: 5.49 } },
        ],
        supportedDevices: ['Smart TV', 'Mobile', 'Tablet', 'Laptop'],
      },
      {
        name: 'Ullu',
        icon: 'images/ullu.jpeg',
        plans: [
          { name: 'Yearly', price: { INR: 297, USD: 3.49, GBP: 2.99, EUR: 3.19 } },
        ],
        supportedDevices: ['Smart TV', 'Mobile', 'Tablet', 'Laptop'],
      },
      {
        name: 'Apple TV+',
        icon: 'images/apple.jpeg',
        plans: [
          { name: 'Monthly', price: { INR: 99, USD: 4.99, GBP: 3.99, EUR: 4.49 } },
          { name: 'Yearly', price: { INR: 999, USD: 49.99, GBP: 39.99, EUR: 44.99 } },
        ],
        supportedDevices: ['Smart TV', 'Mobile', 'Tablet', 'Laptop'],
      },
      {
        name: "Jio Cinema",
        icon: 'images/jiocinema.jpeg',
        plans: [
            { name: "Premium", price: { INR: 999 }, duration: "Yearly" },
        ],
        countries: ["India"],
        supportedDevices: ['Smart TV', 'Mobile', 'Tablet', 'Laptop'],
    },
    {
        name: "ALT Balaji",
        icon: 'images/altbalaji.jpeg',
        plans: [
            { name: "Quarterly", price: { INR: 100 }, duration: "3 Months" },
            { name: "Yearly", price: { INR: 300 }, duration: "Yearly" },
        ],
        countries: ["India"],
        supportedDevices: ['Smart TV', 'Mobile', 'Tablet', 'Laptop'],
    },
    {
        name: "Voot",
        icon: 'images/voot.jpeg',
        plans: [
            { name: "Mobile", price: { INR: 299 }, duration: "Yearly" },
            { name: "All Access", price: { INR: 599 }, duration: "Yearly" },
        ],
        countries: ["India"],
        supportedDevices: ['Smart TV', 'Mobile', 'Tablet', 'Laptop'],
    },
    {
        name: "HBO Max",
        icon: 'images/hbo.jpeg',
        plans: [
            { name: "Ad-Free", price: { USD: 15.99 }, duration: "Monthly" },
            { name: "With Ads", price: { USD: 9.99 }, duration: "Monthly" },
        ],
        countries: ["USA"],
        supportedDevices: ['Smart TV', 'Mobile', 'Tablet', 'Laptop'],
    },
    {
        name: "Discovery+",
        icon: 'images/discovery.jpeg',
        plans: [
            { name: "Mobile", price: { INR: 299 }, duration: "Yearly" },
            { name: "Premium", price: { INR: 399 }, duration: "Yearly" },
        ],
        countries: ["India"],
        supportedDevices: ['Smart TV', 'Mobile', 'Tablet', 'Laptop'],
    },
  ];
  
  let selectedOtt = null;
  let selectedPlan = null;
  
  const ottPlatformsDiv = document.getElementById("ott-platforms");
  const plansDiv = document.getElementById("plans");
  const currencySelector = document.getElementById("currency");
  const priceDisplay = document.getElementById("price");
  const devicesList = document.getElementById("devices-list");
  const selectedOttHeader = document.getElementById("selected-ott");
  
  // Load OTT Platforms
  ottPlans.forEach((ott) => {
    const platformCard = document.createElement("div");
    platformCard.className = "platform-card";
    platformCard.innerHTML = `
      <img src="${ott.icon}" alt="${ott.name}" />
      <p>${ott.name}</p>
    `;
    platformCard.onclick = () => selectOtt(ott);
    ottPlatformsDiv.appendChild(platformCard);
  });
  
  // Select OTT Platform
  function selectOtt(ott) {
    selectedOtt = ott;
    selectedPlan = ott.plans[0];
    selectedOttHeader.textContent = `Selected: ${ott.name}`;
    loadPlans();
    loadDevices();
  }
  
  // Load Plans
  function loadPlans() {
    plansDiv.innerHTML = "";
    selectedOtt.plans.forEach((plan) => {
      const planButton = document.createElement("button");
      planButton.className = "plan-button";
      planButton.textContent = plan.name;
      planButton.onclick = () => selectPlan(plan);
      plansDiv.appendChild(planButton);
    });
    updatePrice();
  }
  
  // Select Plan
  function selectPlan(plan) {
    selectedPlan = plan;
    updatePrice();
  }
  
  // Update Price
  function updatePrice() {
    const currency = currencySelector.value;
    const price = selectedPlan.price[currency] || "N/A";
    priceDisplay.textContent = `Price: ${currency} ${price}`;
  }
  
  // Load Devices
  function loadDevices() {
    devicesList.innerHTML = "";
    selectedOtt.supportedDevices.forEach((device) => {
      const listItem = document.createElement("li");
      listItem.textContent = device;
      devicesList.appendChild(listItem);
    });
  }
  
  // Currency Change Listener
  currencySelector.addEventListener("change", updatePrice);
  