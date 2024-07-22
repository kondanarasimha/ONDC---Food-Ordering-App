import { gitHubApiUrl } from "./urls";

export async function useGitHubApi() {
  const data = await fetch(gitHubApiUrl);
  const jsonProfileData = await data.json();
  return jsonProfileData;
}