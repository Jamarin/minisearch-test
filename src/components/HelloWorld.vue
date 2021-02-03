<template>
  <div>
    <h1>Hello world!</h1>
    <input type="text" v-model="searchText" @input="onSearch" list="suggests">
    <datalist id="suggests">
      <option :value="suggest.suggestion" v-for="(suggest, index) in suggests" :key="index"></option>
    </datalist>
    <hr>
    <div v-for="result in results" :key="result.id">
      <h2>{{ result.title }}</h2>
      <div v-html="result.shortDescription"></div>
      <div>{{ result.authors }}</div>
    </div>
  </div>
</template>

<script>
import data from '@/assets/data.json'
import MiniSearch from 'minisearch'

export default {
  name: 'HelloWorld',
  data () {
    return {
      minisearch: null,
      searchText: '',
      results: [],
      suggests: []
    }
  },
  created () {
    this.minisearch = new MiniSearch({
      fields: ['title', 'authors'],
      storeFields: ['title', 'authors', 'shortDescription'],
      idField: 'isbn'
    })
    this.minisearch.addAll(data)
  },
  methods: {
    onSearch () {
      this.suggests = this.minisearch.autoSuggest(this.searchText)
      this.results = this.minisearch.search(this.searchText)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

input::-webkit-calendar-picker-indicator {
  display: none;
}
</style>
