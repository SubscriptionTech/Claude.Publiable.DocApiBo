# Page spec — Authentication

Sidebar label: Authentication

---

## Purpose

Explain how to authenticate against the ProAbono API Live: which scheme is used, where credentials come from, how to construct requests, and what errors to expect.

---

## Page structure

### 1. Intro paragraph

One sentence: the API uses **HTTP Basic Auth** — an Agent Key and an API Key encoded together in the `Authorization` header.

### 2. Getting your credentials

Tell the developer where to find the keys:

1. Log into the ProAbono backoffice.
2. Go to the **Integration** section.
3. Copy the **Agent Key** and the **API Key**.

Immediately follow with a `warning` admonition:

> Treat these keys like passwords. Store them in environment variables or a secrets manager — never commit them to source code.

### 3. Base URL

One sentence: all API calls share a single base URL.

```
https://via.proabono.com
```

Add a `tip` admonition: most GET endpoints require a `?idBusiness=<IdBusiness>` query parameter. Always include it as a best practice — even when the endpoint does not strictly require it.

### 4. The Authorization header

Explain the encoding:

```
Authorization: Basic <base64(AgentKey:ApiKey)>
```

Then show multi-language code snippets demonstrating how to set the `Authorization` header. curl must be included.

Add a `note` admonition: all requests and responses use `Content-Type: application/json`.

### 5. Auth-related error codes

Short table:

| Status | Meaning |
|--------|---------|
| `401 Unauthorized` | Credentials are missing or invalid |
| `403 Forbidden` | Credentials are valid but the action is not permitted |

Link to [Conventions](../concepts/conventions#http-status-codes) for the full list of HTTP status codes.

---

## Implementation notes

- All code samples must use placeholder values (`<AgentKey>`, `<ApiKey>`, `<IdBusiness>`) or environment variables — never real values.
- Code samples that demonstrate GET requests must include `?idBusiness=<IdBusiness>` in the URL.
- The `warning` admonition about key secrecy is mandatory.
