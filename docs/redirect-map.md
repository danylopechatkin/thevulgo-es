# Redirect map

| Source | Destination | Status | Reason |
|---|---|---:|---|
| `/en` | `/` | 308 | English is the default locale |
| `/en/:path*` | `/:path*` | 308 | Remove duplicate English prefix |

The locale middleware owns these redirects. Add retired commercial URLs here before implementing redirects, and validate that every destination returns 200 and matches the original search intent.
