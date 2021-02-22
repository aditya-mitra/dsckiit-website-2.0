# Backend as CMS

CMS - Strapi
Database - PostgreSQL

## Skip Env Variables

Set **`SKIP_DECR`** to `TRUE`.

# Production

Set **`PROD_DECR`** to the correct env secret.

### Authenticated Endpoints

-   **score**

CREATE

-   **quiz**

FIND

### UnAuthenticated Endpoints

All with FIND and FINDONE enabled

## Settings

#### Media

Set _Enable responsive friendly upload_ in **Media Library** to _Off_.
(This is to disable uploading the same in `large`, `medium` and `small` formats)

## Problems

### During `docker` run

-   The `environment` variables from _service: cms_ is not passing into the container during `npm run build` stage of `docker-compose build`.
    Currently using subsitute variables.
    However, these variables are passed when the container **has started running**.
