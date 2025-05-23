export interface Repo {
  id: number;
  name:string;
  full_name: string;
  description: string;
  language: string;
  html_url: string;
  fork: boolean;
  topics: Array<string>;
  homepage: string;
}

export interface RepoResponse {
  items: Repo[];
}

export interface RepoError {
  message: string;
}

export async function getRepos(
  username: string
): Promise<RepoResponse | RepoError> {
  const allRepos: Repo[] = [];
  let page = 1;
  const perPage = 100;

  while (true) {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=${perPage}&page=${page}`,
      {
        headers: {
          Accept: "application/vnd.github.mercy-preview+json", // enables topics
        },
      }
    );

    if (!response.ok) throw new Error("Failed to fetch GitHub repos");

    const data: Repo[] = await response.json();
    allRepos.push(...data);

    if (data.length < perPage) break; // No more pages
    page++;
  }

  const filtered = allRepos.filter(
    (repo) => !repo.fork && repo.topics.includes("portfolio")
  );

  return { items: filtered };
}

