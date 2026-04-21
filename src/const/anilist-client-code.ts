const code = `
//Manual fetch
const query = 
\`query ($search: String) {
  Media(search: $search) {
    id: 1,
    title: {
      english: 1,
      native: 1,
      romaji: 1,
    },
  }
}\`;

const variables = {
  search: "Lord of the Mysteries",
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
  .Media({
    search: "Lord of the Mysteries",
  })
  .get({
    id: 1,
    title: {
      english: 1,
      native: 1,
      romaji: 1,
    },
  });

console.log(response);

`;

export default code;
