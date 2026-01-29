const ingredients = [
  "Juniper Braised",
  "Acorn-smoked",
  "Acorn flour",
  "Chaparral",
  "Wild Nettle",
  "Miners lettuce",
  "Toyon Berry",
  "Tyrolean",
  "Gabrelino",
  "Wild leek",
  "Wild onion",
  "Wild fennel",
  "Fennel dust",
  "Chaparral herb",
  "Porcini",
  "Chanterelle",
  "Venison",
  "Lingonberry",
  "Acorn flour Donut",
  "Chestnut",
  "Juniper berry",
  "Green Chartreuse",
  "Dolin Genepy Le Chamois Liqueur",
  "Spruce",
  "Speck",
  "Ossobuco",
  "Ziger cheese",
  "Kaiserschmarrn",
  "Elderberry",
  "Wine",
  "Ricotta",
  "Whey",
];

const dishes = [
  "shrub",
  "soda",
  "liqueur",
  "schnapps",
  "granita",
  "tears",
  "broth",
  "water",
  "kombucha",
  "tea",
  "in clarified broth with wild mustard greens, onion, and dumplings",
  "and nasturtium dumplings in mushroom broth",
  "soup",
  "and warm potato salad",
  "with elderberry vinaigrette and hazelnuts",
  "braised meat with wild onions",
  "with wild greens, lamb quarters, and Tyrolean cheese",
  "ravioli in broth",
  "dumplings in broth",
  "with fruit compote",
  "flour donut with compote",
  "ice cream",
  "shaved ice",
  "gröstl",
  "taco",
  "mole",
  "pozole",
  "guisado",
  "tlayuda",
  "burrito",
  "bingsu",
  "kakigōri",
  "Käsespätzle",
];

function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function generatePairings(count) {
  const pairings = [];
  for (let i = 0; i < count; i++) {
    const ingredient = getRandomItem(ingredients);
    const dish = getRandomItem(dishes);
    pairings.push(`${ingredient} ${dish}.`);
  }
  return pairings.join("  ");
}

function setupMarquee(elementId, count) {
  const element = document.getElementById(elementId);
  const text = generatePairings(count) + "  ";
  // Duplicate content for seamless loop
  element.textContent = text + text;
  // Calculate duration based on content width (roughly 60px per second)
  const duration = text.length * 0.15;
  element.style.animationDuration = duration + "s";
}

function positionRegisterLink() {
  const link = document.getElementById("register");

  // Element is 33vw on desktop, 66vw on mobile
  const isMobile = window.innerWidth <= 768;
  const sizeVw = isMobile ? 66 : 33;

  // Calculate max percentages to keep element on screen
  const maxLeft = 100 - sizeVw;
  // Convert vw to vh for vertical constraint
  const sizeVh = sizeVw * (window.innerWidth / window.innerHeight);
  const maxTop = 100 - sizeVh;

  // Random position within safe bounds
  const left = Math.random() * maxLeft;
  const top = Math.random() * Math.max(0, maxTop);

  // Random rotation between -15 and 15 degrees
  const rotation = Math.random() * 30 - 15;

  link.style.left = left + "%";
  link.style.top = top + "%";
  link.style.transform = `rotate(${rotation}deg)`;
}

document.addEventListener("DOMContentLoaded", () => {
  setupMarquee("marquee-top", 20);
  setupMarquee("marquee-bottom", 20);
  positionRegisterLink();

  // Randomize marquee content every 5 seconds
  setInterval(() => {
    setupMarquee("marquee-top", 20);
    setupMarquee("marquee-bottom", 20);
  }, 1000 * 10);
});
