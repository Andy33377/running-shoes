import type { Product, CategoryCard } from "../types";

// Папки с фото: public/images/shoes/ (шоссейные), public/images/trail-shoes/ (трейловые)
// Если папка называется "trail shoes" с пробелом — переименуй в trail-shoes или укажи путь с %20
const IMG_SHOES = "/images/shoes";
const IMG_TRAIL = "/images/trail-shoes";

export const navItems = [
  "Women",
  "Men",
  "Kids",
  "Gear",
  "Brands",
  "Fit Process",
  "Training",
  "Blog",
  "Collections",
  "Sale",
];

export const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "All Products", href: "/products" },
  { label: "Shoes", href: "/products/shoes" },
];

export const categoryCards: CategoryCard[] = [
  {
    id: "men",
    title: "Men",
    image: `${IMG_SHOES}/M88015B_2.webp`,
    href: "/products/shoes/mens",
  },
  {
    id: "women",
    title: "Women",
    image: `${IMG_SHOES}/W880A15_2.webp`,
    href: "/products/shoes/womens",
  },
];

export const products: Product[] = [
  // Шоссейные — фото из папки images/shoes/
  {
    id: "1",
    name: "Women's HOKA Bondi 9",
    stylesCount: 17,
    price: "$131.25 - $175",
    image: `${IMG_SHOES}/3WF30224733-1.webp`,
  },
  {
    id: "2",
    name: "Women's HOKA Clifton 10",
    stylesCount: 1,
    price: "$116.25 - $155",
    image: `${IMG_SHOES}/1011C052_004_SR_RT_GLB.webp`,
  },
  {
    id: "3",
    name: "Women's Brooks Ghost 17",
    stylesCount: 12,
    price: "$150",
    image: `${IMG_SHOES}/1011C127_300_SR_RT_GLB.webp`,
  },
  {
    id: "4",
    name: "Men's HOKA Clifton 10",
    stylesCount: 1,
    price: "$116.25 - $155",
    image: `${IMG_SHOES}/1012B838_003_SR_RT_GLB_PNG_Original-JPG.webp`,
  },
  {
    id: "5",
    name: "Men's HOKA Bondi 9",
    stylesCount: 17,
    price: "$131.25 - $175",
    image: `${IMG_SHOES}/1012B899_501_SR_RT_GLB.webp`,
  },
  {
    id: "6",
    name: "Women's Brooks Adrenaline GTS 25",
    stylesCount: 12,
    price: "$155",
    image: `${IMG_SHOES}/110442_432_L_Ghost_17.webp`,
  },
  {
    id: "7",
    name: "Women's Brooks Ghost Max 3",
    stylesCount: 12,
    price: "$160",
    image: `${IMG_SHOES}/110454_071_L_Adrenaline_GTS_25.webp`,
  },
  {
    id: "8",
    name: "Men's Brooks Ghost 17",
    stylesCount: 15,
    price: "$150",
    image: `${IMG_SHOES}/110464_002_L_Ghost_Max_3.webp`,
  },
  {
    id: "9",
    name: "Women's ASICS Gel-Nimbus 28",
    stylesCount: 13,
    price: "$170",
    image: `${IMG_SHOES}/120431_648_L_Ghost_17.webp`,
  },
  {
    id: "10",
    name: "Men's Brooks Adrenaline GTS 25",
    stylesCount: 12,
    price: "$155",
    image: `${IMG_SHOES}/120434_246_L_Glycerin_22.webp`,
  },
  {
    id: "11",
    name: "Men's Saucony Triumph 23",
    stylesCount: 15,
    price: "$170",
    image: `${IMG_SHOES}/120443_053_L_Adrenaline_GTS_25.webp`,
  },
  {
    id: "12",
    name: "Men's ASICS Gel-Kayano 32",
    stylesCount: 15,
    price: "$165",
    image: `${IMG_SHOES}/120457_876_L_Ghost_Max_3.webp`,
  },
  // Дополнительные шоссейные модели
  {
    id: "13",
    name: "Road Shoe 1162011-SCCG",
    stylesCount: 5,
    price: "$150",
    image: `${IMG_SHOES}/1162011-SCCG_1.webp`,
  },
  {
    id: "14",
    name: "Road Shoe 1162012-RLTT",
    stylesCount: 5,
    price: "$150",
    image: `${IMG_SHOES}/1162012-RLTT_1-copy.webp`,
  },
  {
    id: "15",
    name: "Road Shoe 1162050-GRTM",
    stylesCount: 5,
    price: "$150",
    image: `${IMG_SHOES}/1162050-GRTM_1.webp`,
  },
  {
    id: "16",
    name: "Road Shoe 1162051-PTYG",
    stylesCount: 5,
    price: "$150",
    image: `${IMG_SHOES}/1162051-PTYG_1.webp`,
  },
  {
    id: "17",
    name: "Road Shoe 1168690-BKSK",
    stylesCount: 5,
    price: "$150",
    image: `${IMG_SHOES}/1168690-BKSK_1.webp`,
  },
  {
    id: "18",
    name: "Road Shoe 1168691-SYZ",
    stylesCount: 5,
    price: "$150",
    image: `${IMG_SHOES}/1168691-SYZ_1.webp`,
  },
  {
    id: "19",
    name: "Road Shoe 1171937-BWHT",
    stylesCount: 5,
    price: "$150",
    image: `${IMG_SHOES}/1171937-BWHT_1_251214_111341.webp`,
  },
  {
    id: "20",
    name: "Road Shoe Aurora",
    stylesCount: 5,
    price: "$150",
    image: `${IMG_SHOES}/AURORA_FD8315-800_PHSRH000-2000.webp`,
  },
  {
    id: "21",
    name: "Road Shoe IH3257",
    stylesCount: 5,
    price: "$150",
    image: `${IMG_SHOES}/IH3257-700_1.webp`,
  },
  {
    id: "22",
    name: "Road Shoe JP6623",
    stylesCount: 5,
    price: "$150",
    image: `${IMG_SHOES}/JP6623_1.webp`,
  },
  {
    id: "23",
    name: "Road Shoe M880",
    stylesCount: 5,
    price: "$150",
    image: `${IMG_SHOES}/M88015B_2.webp`,
  },
  {
    id: "24",
    name: "Road Shoe S10998",
    stylesCount: 5,
    price: "$150",
    image: `${IMG_SHOES}/S10998-241_1.webp`,
  },
  {
    id: "25",
    name: "Road Shoe S11007",
    stylesCount: 5,
    price: "$150",
    image: `${IMG_SHOES}/S11007-98_1.webp`,
  },
  {
    id: "26",
    name: "Road Shoe S11023",
    stylesCount: 5,
    price: "$150",
    image: `${IMG_SHOES}/S11023-244_1.webp`,
  },
  {
    id: "27",
    name: "Road Shoe S11055",
    stylesCount: 5,
    price: "$150",
    image: `${IMG_SHOES}/S11055-110_1.webp`,
  },
  {
    id: "28",
    name: "Road Shoe S21023",
    stylesCount: 5,
    price: "$150",
    image: `${IMG_SHOES}/S21023-285_1.webp`,
  },
  {
    id: "29",
    name: "Road Shoe W880",
    stylesCount: 5,
    price: "$150",
    image: `${IMG_SHOES}/W880A15_2.webp`,
  },
  {
    id: "30",
    name: "Road Shoe W1080",
    stylesCount: 5,
    price: "$150",
    image: `${IMG_SHOES}/W10805VC_2.webp`,
  },
  // Трейловые — фото из папки images/trail-shoes/
  {
    id: "t1",
    name: "Men's HOKA Speedgoat 6",
    stylesCount: 8,
    price: "$155",
    image: `${IMG_TRAIL}/110475_004_L_Ghost_Trail.webp`,
  },
  {
    id: "t2",
    name: "Women's Salomon Sense Ride 5",
    stylesCount: 6,
    price: "$130",
    image: `${IMG_TRAIL}/120446_117_L_Cascadia_19.webp`,
  },
  {
    id: "t3",
    name: "Men's Brooks Cascadia 17",
    stylesCount: 10,
    price: "$140",
    image: `${IMG_TRAIL}/120464_037_L_Ghost_Trail.webp`,
  },
  {
    id: "t4",
    name: "Women's Altra Lone Peak 8",
    stylesCount: 7,
    price: "$145",
    image: `${IMG_TRAIL}/1147791-CDN_1.webp`,
  },
  {
    id: "t5",
    name: "Trail Shoe 1147811-WNG",
    stylesCount: 5,
    price: "$150",
    image: `${IMG_TRAIL}/1147811-WNG_1-copy.webp`,
  },
  {
    id: "t6",
    name: "Trail Shoe 1168716-JDT",
    stylesCount: 5,
    price: "$150",
    image: `${IMG_TRAIL}/1168716-JDT_1-copy.webp`,
  },
  {
    id: "t7",
    name: "Trail Shoe 1168723-NNR",
    stylesCount: 5,
    price: "$150",
    image: `${IMG_TRAIL}/1168723-NNR_1-copy.webp`,
  },
  {
    id: "t8",
    name: "Trail Shoe AL0A85PG",
    stylesCount: 5,
    price: "$150",
    image: `${IMG_TRAIL}/AL0A85PG_431-HERO_RIGHT-copy.webp`,
  },
  {
    id: "t9",
    name: "Trail Shoe AL0A85PR",
    stylesCount: 5,
    price: "$150",
    image: `${IMG_TRAIL}/AL0A85PR_922-HERO_RIGHT.webp`,
  },
  {
    id: "t10",
    name: "Trail Shoe AL0A85RY",
    stylesCount: 5,
    price: "$150",
    image: `${IMG_TRAIL}/AL0A85RY_110-HERO_RIGHT-copy.webp`,
  },
  {
    id: "t11",
    name: "Trail Shoe AL0A85SU",
    stylesCount: 5,
    price: "$150",
    image: `${IMG_TRAIL}/AL0A85SU_000-HERO_RIGHT-copy.webp`,
  },
  {
    id: "t12",
    name: "Trail Shoe F104010",
    stylesCount: 5,
    price: "$150",
    image: `${IMG_TRAIL}/F104010_1-copy.webp`,
  },
  {
    id: "t13",
    name: "Trail Shoe W081 Black Lime",
    stylesCount: 5,
    price: "$150",
    image: `${IMG_TRAIL}/W081.Black-Lime_00-copy.webp`,
  },
];

export const genderOptions = [
  { id: "mens", label: "Men's" },
  { id: "womens", label: "Women's" },
  { id: "youth", label: "Youth" },
];

export const sizes = [
  1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10,
  10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 14.5, 15, 16, 17, 18, 19,
];

export const widthOptions = [
  { id: "2a", label: "2A" },
  { id: "b", label: "B" },
  { id: "d", label: "D" },
  { id: "2e", label: "2E" },
  { id: "4e", label: "4E" },
  { id: "6e", label: "6E" },
];

export const shoeStyleOptions = [
  { id: "cross-country", label: "Cross Country" },
  { id: "neutral", label: "Neutral Running" },
  { id: "trail", label: "Trail Running" },
  { id: "race", label: "Race" },
  { id: "training", label: "Training" },
  { id: "walking", label: "Walking" },
];

export const runningTypes = ["Track", "Trail Running", "Walking", "Lifestyle"];

export const brands = [
  "Adidas",
  "Altra",
  "Archies",
  "ASICS",
  "Birkenstock",
  "Brooks",
  "CEP",
  "Craft",
  "HOKA",
  "New Balance",
  "On",
  "Saucony",
];

export const colors = [
  { id: "aqua", label: "Aqua", hex: "#00FFFF" },
  { id: "black", label: "Black", hex: "#000000" },
  { id: "brown", label: "Brown", hex: "#8B4513" },
  { id: "grey", label: "Grey", hex: "#808080" },
  { id: "light-green", label: "Light green", hex: "#90EE90" },
  { id: "orange", label: "Orange", hex: "#FFA500" },
  { id: "purple", label: "Purple", hex: "#800080" },
  { id: "beige", label: "Beige", hex: "#F5F5DC" },
  { id: "blue", label: "Blue", hex: "#0000FF" },
  { id: "green", label: "Green", hex: "#008000" },
  { id: "light-blue", label: "Light blue", hex: "#ADD8E6" },
  { id: "navy", label: "Navy", hex: "#000080" },
  { id: "pink", label: "Pink", hex: "#FFC0CB" },
  { id: "red", label: "Red", hex: "#FF0000" },
  { id: "silver", label: "Silver", hex: "#C0C0C0" },
  { id: "yellow", label: "Yellow", hex: "#FFFF00" },
  { id: "white", label: "White", hex: "#FFFFFF" },
];

export const collections = [
  "APMA-Accepted Shoes",
  "Everyday Energy",
  "Gifts for Cold Miles",
  "Gifts for Fast Miles",
  "Gifts for First Miles",
  "Gifts for Men",
  "Gifts for Runners",
  "Gifts for Trail Miles",
  "Gifts for Walkers",
  "Gifts for Women",
  "Gifts Under $100",
  "Hybrid Fitness Races",
  "New Footwear",
  "Peak Prep",
  "Shoes for Work",
];

export const priceRanges = [
  { id: "under-50", label: "Under $50" },
  { id: "50-75", label: "$50-75" },
  { id: "75-100", label: "$75-100" },
  { id: "100-150", label: "$100-150" },
  { id: "150-200", label: "$150-200" },
  { id: "over-200", label: "Over $200" },
];

export const sortOptions = [
  { id: "popular", label: "Popular Now" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "newest", label: "Newest" },
];

export const footerLinks = {
  fleetFeet: [
    "Who We Are",
    "Careers",
    "Diversity, Equity & Inclusion",
    "Do The Run Thing",
    "In the Press",
    "Locations",
    "Races",
  ],
  franchise: [
    "Overview",
    "Why Franchise",
    "Support & Resources",
    "Franchising FAQs",
    "Make Your Store a Fleet Feet",
  ],
  help: [
    "Returns",
    "Shipping Information",
    "Price Match Policy",
    "FAQs",
    "Rewards",
    "Gift Cards",
    "Coupons & Promos",
    "Contact Us",
  ],
};

export const infoLinks = [
  { label: "Free Shipping & Returns", href: "#shipping" },
  { label: "Do I Need Stability Shoes?", href: "#stability" },
  { label: "Types of Running Shoes", href: "#types" },
];
