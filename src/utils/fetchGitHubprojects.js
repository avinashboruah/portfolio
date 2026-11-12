import { GitHUB_UserName } from "../data/ProjectData";

const GITHUB_USERNAME = GitHUB_UserName || "avinashboruah";

const CACHE_KEY_PREFIX = "gh_project_";
const CACHE_TTL_MS = 1000 * 60 * 60 * 12; // 12 hours cache

export async function fetchGitHubProject(repoName) {
  const cacheKey = `${CACHE_KEY_PREFIX}${GITHUB_USERNAME}_${repoName.toLowerCase()}`;

  // 1. Check local storage cache first
  let cachedData = null;
  try {
    if (typeof window !== "undefined" && window.localStorage) {
      const cachedItem = localStorage.getItem(cacheKey);
      if (cachedItem) {
        const parsed = JSON.parse(cachedItem);
        cachedData = parsed.data;
        // If cache is fresh, return it immediately (saves API calls & avoids rate limits)
        if (Date.now() - parsed.timestamp < CACHE_TTL_MS) {
          return cachedData;
        }
      }
    }
  } catch (e) {
    console.warn("localStorage read error", e);
  }

  // 2. Fetch fresh data from GitHub API
  try {
    const response = await fetch(
      `https://api.github.com/repos/${GITHUB_USERNAME}/${repoName}`
    );

    if (response.ok) {
      const data = await response.json();
      const project = {
        id: data.id,
        projectName: data.name,
        description: data.description || "No description available",
        tech: data.topics || [], // GitHub topics as tech stack
        link: data.homepage || `/not-available`,
        github: data.html_url,
        stars: data.stargazers_count,
        forks: data.forks_count,
      };

      // Save to localStorage
      try {
        if (typeof window !== "undefined" && window.localStorage) {
          localStorage.setItem(
            cacheKey,
            JSON.stringify({
              timestamp: Date.now(),
              data: project,
            })
          );
        }
      } catch (e) {
        // storage quota exceeded or disabled
      }

      return project;
    }

    console.warn(`GitHub API returned status ${response.status} for ${repoName}`);
  } catch (error) {
    console.error(`Error fetching ${repoName}:`, error);
  }

  // 3. If API failed (e.g. 403 rate-limited, offline), fallback to cached data if available
  if (cachedData) {
    return cachedData;
  }

  // 4. Graceful fallback so the project card always renders in the UI
  return {
    id: repoName,
    projectName: repoName,
    description: "View repository on GitHub.",
    tech: [],
    link: `/not-available`,
    github: `https://github.com/${GITHUB_USERNAME}/${repoName}`,
    stars: 0,
    forks: 0,
  };
}

export async function fetchAllProjects(projectNames) {
  const promises = projectNames.map((name) => fetchGitHubProject(name));
  const results = await Promise.all(promises);

  // Filter out any null values
  return results.filter((project) => project !== null);
}
