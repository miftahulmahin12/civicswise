export const adminOverview = {
  totalQuestions: 128,
  activeUsers: 4821,
  premiumSubscribers: 612,
  pendingReviews: 7,
};

export const adminUsers = [
  { name: "Amara Osei", email: "amara@example.com", plan: "Premium", status: "Active" },
  { name: "Diego Ramirez", email: "diego@example.com", plan: "Free", status: "Active" },
  { name: "Wei Zhang", email: "wei@example.com", plan: "Premium", status: "Active" },
  { name: "Fatima Noor", email: "fatima@example.com", plan: "Free", status: "Invited" },
  { name: "Samuel Okafor", email: "samuel@example.com", plan: "Premium", status: "Suspended" },
];

export const adminReviewQueue = [
  { question: "Who is the Speaker of the House now?", reason: "Answer may be outdated", severity: "High" },
  { question: "Name one U.S. territory.", reason: "Reported confusing wording", severity: "Low" },
  { question: "How many justices are on the Supreme Court?", reason: "Needs source citation", severity: "Medium" },
];

export const adminAuditLog = [
  { actor: "admin@civicswise.com", action: "Updated answer for Q25 (President)", time: "2h ago" },
  { actor: "admin@civicswise.com", action: "Published new category: Holidays", time: "1d ago" },
  { actor: "system", action: "Imported 12 questions from PDF batch #4", time: "2d ago" },
  { actor: "admin@civicswise.com", action: "Suspended user samuel@example.com", time: "3d ago" },
];

export const adminPracticePools = [
  { name: "Free — Standard 20", questions: 20, source: "Random from 2025 bank" },
  { name: "65/20 focused", questions: 20, source: "Marked 65/20 subset" },
  { name: "2008 legacy set", questions: 10, source: "Random from 2008 bank" },
];
