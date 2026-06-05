export interface PdfItem {
  title: string;
  thumbnail: string;
  file: string;
}

export interface ImageItem {
  title: string;
  image: string;
}

export interface ReelItem {
  title: string;
  video: string;
}

// ====================
// BROCHURES
// ====================

export const brochures: PdfItem[] = [
  {
    title: "Alles Infra",
    thumbnail: "/assets/thumbnails/brochure1.png",
    file: "/assets/brochures/brochure1.pdf",
  },
  {
    title: "Waste X",
    thumbnail: "/assets/thumbnails/brochure2.png",
    file: "/assets/brochures/brochure2.pdf",
  },
];

// ====================
// EBOOKS
// ====================

export const ebooks: PdfItem[] = [
  {
    title: "Digital Marketing Ebook",
    thumbnail: "/assets/thumbnails/ebook1.png",
    file: "/assets/ebooks/ebook1.pdf",
  },
];

// ====================
// CAROUSELS
// ====================

export const carousels: PdfItem[] = [
  {
    title: "5 Steps To Effective Decision-Making",
    thumbnail: "/assets/thumbnails/carousel1.png",
    file: "/assets/carousels/carousel1.pdf",
  },
  {
    title: "5 Tips To Quickly Fit In A New Workplace ",
    thumbnail: "/assets/thumbnails/carousel2.png",
    file: "/assets/carousels/carousel2.pdf",
  },
  {
    title: "How To Stay Motivated During Job Hunting",
    thumbnail: "/assets/thumbnails/carousel3.png",
    file: "/assets/carousels/carousel3.pdf",
  },
  {
    title: "How To Handle Conflicts In Team Projects ",
    thumbnail: "/assets/thumbnails/carousel4.png",
    file: "/assets/carousels/carousel4.pdf",
  },
  {
    title: "Identifying Emerging Trends In Your Industry",
    thumbnail: "/assets/thumbnails/carousel5.png",
    file: "/assets/carousels/carousel5.pdf",
  },
  {
    title: "The 5-Minute Rule To Overcome Procastination",
    thumbnail: "/assets/thumbnails/carousel6.png",
    file: "/assets/carousels/carousel6.pdf",
  },
];

// ====================
// INFOGRAPHICS
// ====================

export const infographics: ImageItem[] = [
  {
    title: "10 10 10 Rule",
    image: "/assets/infographics/info1.jpg",
  },
  {
    title: "5 Tips To Start Building Your LeaderShip Skills",
    image: "/assets/infographics/info2.png",
  },
  {
    title: "Business Decision-Making Tree",
    image: "/assets/infographics/info3.png",
  },
  {
    title: "Overcoming Creative Blocks At Work",
    image: "/assets/infographics/info4.png",
  },
  {
    title: "Decisions For Early Career Success",
    image: "/assets/infographics/info5.png",
  },
  {
    title: "Finding A Mentor",
    image: "/assets/infographics/info6.png",
  },
  {
    title: "How To Plan Your Week",
    image: "/assets/infographics/info7.jpg",
  },
];

// ====================
// LOGOS
// ====================

export const logos: ImageItem[] = [
  {
    title: "Career Zenie",
    image: "/assets/logo/logo1.png",
  },
  {
    title: "For The Heart",
    image: "/assets/logo/logo2.jpeg",
  },
  {
    title: "InternVault",
    image: "/assets/logo/logo3.jpg",
  },
  {
    title: "The Flipped Psyche",
    image: "/assets/logo/logo4.jpg",
  },
];

// ====================
// META ADS
// ====================

export const metaAds: ImageItem[] = [
  { title: "Ad 1", image: "/assets/meta-ads/ad1.png" },
  { title: "Ad 2", image: "/assets/meta-ads/ad2.png" },
  { title: "Ad 3", image: "/assets/meta-ads/ad3.png" },
  { title: "Ad 4", image: "/assets/meta-ads/ad4.png" },
  { title: "Ad 5", image: "/assets/meta-ads/ad5.png" },
  { title: "Ad 6", image: "/assets/meta-ads/ad6.png" },
  { title: "Ad 7", image: "/assets/meta-ads/ad7.png" },
  { title: "Ad 8", image: "/assets/meta-ads/ad8.png" },
];

// ====================
// REELS
// ====================

export const reels: ReelItem[] = [
  { title: "Reel 1", video: "/assets/reels/reel1.mp4" },
  { title: "Reel 2", video: "/assets/reels/reel2.mp4" },
  { title: "Reel 3", video: "/assets/reels/reel3.mp4" },
  { title: "Reel 4", video: "/assets/reels/reel4.mp4" },
  { title: "Reel 5", video: "/assets/reels/reel5.mp4" },
  { title: "Reel 6", video: "/assets/reels/reel6.mp4" },
  { title: "Reel 7", video: "/assets/reels/reel7.mp4" },
  { title: "Reel 8", video: "/assets/reels/reel8.mp4" },
];

// ====================
// INFORMATIONAL
// ====================

export const informationalImages: ImageItem[] = [
  { title: "Info 1", image: "/assets/images/informational/i1.png" },
  { title: "Info 2", image: "/assets/images/informational/i2.png" },
  { title: "Info 3", image: "/assets/images/informational/i3.png" },
  { title: "Info 4", image: "/assets/images/informational/i4.png" },
  { title: "Info 5", image: "/assets/images/informational/i5.png" },
  { title: "Info 6", image: "/assets/images/informational/i6.png" },
];

// ====================
// PROMOTIONAL
// ====================

export const promotionalImages: ImageItem[] = [
  { title: "Promo 1", image: "/assets/images/promotional/p1.jpg" },
  { title: "Promo 2", image: "/assets/images/promotional/p2.jpg" },
  { title: "Promo 3", image: "/assets/images/promotional/p3.jpg" },
  { title: "Promo 4", image: "/assets/images/promotional/p4.png" },
  { title: "Promo 5", image: "/assets/images/promotional/p5.png" },
  { title: "Promo 6", image: "/assets/images/promotional/p6.png" },
];

// ====================
// SPECIAL DAY
// ====================

export const specialDayImages: ImageItem[] = [
  { title: "Special Day 1", image: "/assets/images/special-days/s1.jpg" },
  { title: "Special Day 2", image: "/assets/images/special-days/s2.png" },
  { title: "Special Day 3", image: "/assets/images/special-days/s3.png" },
  { title: "Special Day 4", image: "/assets/images/special-days/s4.png" },
  { title: "Special Day 5", image: "/assets/images/special-days/s5.png" },
  { title: "Special Day 6", image: "/assets/images/special-days/s6.png" },
];

// ====================
// THEMATIC
// ====================

export const thematicImages: ImageItem[] = [
  { title: "Thematic 1", image: "/assets/images/thematic/t1.png" },
  { title: "Thematic 2", image: "/assets/images/thematic/t2.png" },
  { title: "Thematic 3", image: "/assets/images/thematic/t3.png" },
  { title: "Thematic 4", image: "/assets/images/thematic/t4.png" },
  { title: "Thematic 5", image: "/assets/images/thematic/t5.png" },
  { title: "Thematic 6", image: "/assets/images/thematic/t6.png" },
];