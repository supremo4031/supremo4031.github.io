export type CompetitiveProfile = {
  platform: string;
  handle: string;
  url: string;
  maxRating?: number;
  rankLabel?: string;
};

export const competitiveProfiles: CompetitiveProfile[] = [
  {
    platform: "Codeforces",
    handle: "supremo_30",
    url: "https://codeforces.com/profile/supremo_30",
    maxRating: 1648,
    rankLabel: "Expert"
  },
  {
    platform: "LeetCode",
    handle: "supremo_30",
    url: "https://leetcode.com/u/supremo_30/",
    maxRating: undefined,
    rankLabel: "640+ Problems"
  },
  {
    platform: "Codechef",
    handle: "supremo_30",
    url: "https://www.codechef.com/users/supremo_30",
    maxRating: undefined,
    rankLabel: "4 Star"
  }
];

