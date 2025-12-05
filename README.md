# alx-project-0x14
## Api Overview

The MoviesDatabase API provides access to a large and constantly updated collection of movie, series, and episode data—spanning over 9 million titles. It delivers detailed metadata, ratings, cast information, genres, and more. Developers can query titles, actors, episodes, search by keywords, filter by custom parameters, and access curated lists such as “Top Rated Movies” or “Most Popular Series.”
The API supports optional filtering, sorting, pagination, and flexible info fields so you can request only the data you need.

## API Version

According to the documentation, this API provides ongoing weekly updates for titles and daily updates for ratings and episode lists.
(A specific version number was not provided in the documentation, so you may update this line later if a version number becomes available.)

## Available Endpoints

GET /titles
Returns an array of titles based on filters and optional query parameters.

GET /x/titles-by-ids
Returns multiple titles using an array of IMDb IDs.

GET /titles/{id}
Retrieves detailed information for a single title.

GET /titles/{id}/ratings
Returns rating and vote count for a title.

GET /titles/series/{id}
Returns all episodes of a series (light episode model).

GET /titles/seasons/{id}
Returns the number of seasons for a series.

GET /titles/series/{id}/{season}
Returns all episodes for a specific season.

GET /titles/episode/{id}
Returns details for a specific episode.

GET /titles/search/keyword/{keyword}
Search for titles based on a keyword.

GET /titles/search/title/{title}
Search by exact or partial title.

GET /titles/search/akas/{aka}
Search titles by aka (case sensitive, exact match).

GET /actors
Returns actors list with pagination.

GET /actors/{id}
Returns details for a specific actor.

GET /title/utils/titleType
Returns a list of all title types.

GET /title/utils/genres
Returns available genres.

GET /title/utils/lists
Returns available predefined lists for the list query parameter.

## Request and Response Format

### Request Format
All requests use GET.
Query parameters are optional unless stated otherwise.
Example request:
GET /titles?limit=20&page=2&startYear=2010&genre=Action&info=base_info

### Response Format

All endpoints return an object with the following structure:
{
  "results": [...],
  "page": 1,
  "next": "URL to next page",
  "entries": 20
}

## Authentication

API Key in headers
API Key as a query parameter
Bearer token authorization
Example (generic example—you should replace with actual API requirements):
GET /titles
Headers: 
  x-api-key: YOUR_API_KEY

## Error handling

| Status Code                   | Meaning                      | Reason                            |
| ----------------------------- | ---------------------------- | --------------------------------- |
| **400 Bad Request**           | Invalid query parameters     | Wrong types or unsupported values |
| **401 Unauthorized**          | Missing or invalid API key   | Authentication failure            |
| **404 Not Found**             | ID or resource doesn’t exist | Invalid IMDb ID                   |
| **429 Too Many Requests**     | Rate limit exceeded          | Too many requests in short time   |
| **500 Internal Server Error** | Server issue                 | Try again later                   |

How to handle errors in your code:
- Always validate inputs before sending.
- Use try/catch to handle HTTP errors.
- Implement retry logic for 429 and 500 errors.


## Usage Limits and Best Practices

### Rate Limits

- 1000 requests per hour
- 500,000 / Month
- Bandwidth Platform Fee
    10240MB / Month
    +0.001$ per 1MB

### Best Practices
- Request only the fields you need using info=mini_info or other options.
- Paginate requests using limit and page.
- Use predefined lists (e.g., top_rated_250) to avoid large dataset queries.
- Capitalize genres (required by API).
- Avoid combining year with startYear/endYear (not allowed).
- Use caching for static resources (genres, title types, utils).