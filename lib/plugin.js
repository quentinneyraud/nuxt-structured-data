import Vue from 'vue'

// No merging strategy exists by default for head method, we use that of data
Vue.config.optionMergeStrategies.head = Vue.config.optionMergeStrategies.data

// globally register the mixin
Vue.mixin({
  head () {
    const isPage = this.$options.name && this.$options.name.toLowerCase().startsWith('page')

    // Return empty object in components and when no structured data is returned from the page
    if (!isPage || !this.structuredData) {
      return {}
    }

    // construct unique id
    const hid = `nuxt-structured-data${this._uid}`

    const structuredData = {
      ...this.structuredData,
      '@context': 'https://schema.org'
    }

    return {
      __dangerouslyDisableSanitizersByTagID: {
        [hid]: ['innerHTML']
      },
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify(structuredData),
          hid
        }
      ]
    }
  }
})
