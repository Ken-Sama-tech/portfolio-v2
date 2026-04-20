const code = `
//Manual fetch
const query = 
\`query ($sort: MediaListSort) {
  MediaList(sort: $sort) {
    id
    advancedScores
    customLists
    hiddenFromStatusLists
    userId
    user {
      id
      name
    }
  }
}\`;

const variables = {
  sort: ["MEDIA_ID"],
};

const response = await fetch("https://graphql.anilist.co", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify({
    query,
    variables,
  }),
});

const data = await response.json();

//With anilist-client
import anilist from "anilist-client";

const app = anilist();

const response = await app
    .MediaList({
      sort: ["MEDIA_ID"],
    })
    .get({
      id: 1,
      advancedScores: 1,
      customLists: 1,
      hiddenFromStatusLists: 1,
      userId: 1,
      user: {
        name: 1,
        id: 1,
      },
    });

console.log(response);
`;

export default code;
