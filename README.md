# nuxt-structured-data

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Circle CI][circle-ci-src]][circle-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> 

[📖 **Release Notes**](./CHANGELOG.md)

## Setup

1. Add `nuxt-structured-data` dependency to your project

```bash
yarn add nuxt-structured-data # or npm install nuxt-structured-data
```

2. Add `nuxt-structured-data` to the `modules` section of `nuxt.config.js`

```js
{
  modules: [
    'nuxt-structured-data',
  ]
}
```

## Usage

In every page, this module will inject a json-ld script based on `structuredData` property value.

## Example

*pages/schools/_slug.vue*

```js
export default {
  ...
  async asyncData({ app, error, params }) {
    try {
      const response = await app.$axios.get(`SCHOOL_API_ROUTE/${params.slug}`)

      return {
        school: response.data,
        microdata: {
          "@type": "School",
          address: {
            "@type": "PostalAddress",
            addressLocality: response.data.city,
            addressCountry: "FR",
            streetAddress: response.data.street,
            postalCode: response.data.zip_code
          },
          email: response.data.email,
          telephone: response.data.tel,
          logo: response.data.logo
        }
      };
    } catch (err) {
      error({
        statusCode: 404,
        message: "Cannot find this school"
      })
    }
  }
  ...
}
```

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) Quentin Neyraud <quentin.neyraud@gmail.com>

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-structured-data/latest.svg?style=flat-square
[npm-version-href]: https://npmjs.com/package/nuxt-structured-data

[npm-downloads-src]: https://img.shields.io/npm/dt/nuxt-structured-data.svg?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/nuxt-structured-data

[license-src]: https://img.shields.io/npm/l/nuxt-structured-data.svg?style=flat-square
[license-href]: https://npmjs.com/package/nuxt-structured-data
