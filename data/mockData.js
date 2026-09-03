// Mock data only. In production this will be replaced by PostgreSQL-backed
// API calls against the `Category` and `User` tables described in the spec.

export const mockCategories = [
  {
    id: 1,
    name: "Instagram",
    slug: "instagram",
    initials: "/logo/instagram.svg",
    description: "Instagram profile submissions",
    bidders: 128,
    highestBid: 125,
  },
  {
    id: 2,
    name: "Facebook",
    slug: "facebook",
    initials: "/logo/facebook.svg",
    description: "Facebook page and profile submissions",
    bidders: 64,
    highestBid: 78,
  },
  {
    id: 3,
    name: "Reddit",
    slug: "reddit",
    initials: "/logo/reddit.svg",
    description: "Reddit account submissions",
    bidders: 41,
    highestBid: 52,
  },
  {
    id: 4,
    name: "Twitter",
    slug: "twitter",
    initials: "/logo/twitter.svg",
    description: "Twitter / X profile submissions",
    bidders: 96,
    highestBid: 143,
  },
  {
    id: 5,
    name: "YouTube",
    slug: "youtube",
    initials: "/logo/youtube.svg",
    description: "YouTube channel submissions",
    bidders: 57,
    highestBid: 210,
  },
  {
    id: 6,
    name: "Instagram Reels",
    slug: "instagram-reels",
    initials: "/logo/instagram.svg",
    description: "Individual Instagram Reels submissions",
    bidders: 33,
    highestBid: 39,
  },
  {
    id: 7,
    name: "Instagram Posts",
    slug: "instagram-posts",
    initials: "/logo/instagram.svg",
    description: "Individual Instagram post submissions",
    bidders: 22,
    highestBid: 28,
  },
  {
    id: 8,
    name: "Twitter Posts",
    slug: "twitter-posts",
    initials: "/logo/twitter.svg",
    description: "Individual tweet submissions",
    bidders: 18,
    highestBid: 21,
  },
  {
    id: 9,
    name: "Reddit Posts",
    slug: "reddit-posts",
    initials: "/logo/reddit.svg",
    description: "Individual Reddit post submissions",
    bidders: 12,
    highestBid: 15,
  },
];

const firstNames = [
  "alex", "john", "mike", "sara", "priya", "wei", "diego", "amara", "noah",
  "liam", "mia", "yuki", "omar", "leila", "carlos", "nina", "ravi", "elena",
  "tom", "zoe", "arjun", "hana", "felix", "ana", "sam", "ivy", "kofi", "maya",
  "leo", "sofia",
];

function generateBidders(categoryId, count, topBid) {
  const bidders = [];
  let currentBid = topBid;
  for (let i = 0; i < count; i++) {
    const name = firstNames[i % firstNames.length];
    const suffix = i >= firstNames.length ? Math.floor(i / firstNames.length) : "";
    currentBid = Math.max(1, currentBid - Math.floor(Math.random() * 3) - 1);
    bidders.push({
      id: categoryId * 1000 + i + 1,
      categoryId,
      username: `@${name}${suffix}`,
      profileUrl: `https://instagram.com/${name}${suffix}`,
      bidAmount: i === 0 ? topBid : currentBid,
      createdAt: `${(i + 1) * 3} minutes ago`,
    });
  }
  return bidders.sort((a, b) => b.bidAmount - a.bidAmount);
}

export const mockBiddersByCategory = mockCategories.reduce((acc, cat) => {
  const count = cat.slug === "instagram" ? 84 : 60;
  acc[cat.slug] = generateBidders(cat.id, count, cat.highestBid);
  return acc;
}, {});

export const mockMyBids = [
  {
    id: 1,
    category: "Instagram",
    categorySlug: "instagram",
    username: "@myprofile",
    currentBid: 85,
    currentRank: 7,
    highestBid: 125,
    status: "Active",
  },
  {
    id: 2,
    category: "YouTube",
    categorySlug: "youtube",
    username: "@mychannel",
    currentBid: 150,
    currentRank: 3,
    highestBid: 210,
    status: "Active",
  },
  {
    id: 3,
    category: "Reddit Posts",
    categorySlug: "reddit-posts",
    username: "@myredditpost",
    currentBid: 15,
    currentRank: 1,
    highestBid: 15,
    status: "Active",
  },
];

export const mockStats = [
  { label: "Active categories", value: "9" },
  { label: "Profiles submitted", value: "471" },
  { label: "Bids placed today", value: "83" },
  { label: "Highest bid this week", value: "\u20B9210" },
];
