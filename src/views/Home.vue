<template>
  <div class="home">
    <Header @getChildText="showChildText"></Header>
    <p>Address：{{childText}}</p>
  </div>
</template>

<script>
import Header from "../components/Header";
export default {
  data() {
    return {
      text: ""
    };
  },
  methods: {
    showChildText(childText) {
      this.text = childText;
    }
  },
  components: {
    Header
  }
};
</script>