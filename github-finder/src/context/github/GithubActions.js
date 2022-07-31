const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

/**
 * It takes a string as an argument, sets the loading state to true, creates a new URLSearchParams
 * object with the string as the value of the q property, fetches the GitHub API with the string as
 * the search query, and then dispatches the response to the reducer
 * @param text - The text that the user types in the search bar.
 */
export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });

  const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  });

  const { items } = await response.json();

  return items;
};
