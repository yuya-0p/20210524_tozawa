<template>
  <div id="side__menu">
    <input type="text" v-model="childText" />
    <button @click="sendRequest">住所自動入力</button>
    <p>Address：{{allAddress}}</p>
  </div>
</template>

<script> 
import axios from "axios";
export default{
  data() {
        return {
          allAddress: ""
        };
      },
  methods:{
  async sendRequest(){
      const item =await axios.get(
        `https://apis.postcode-jp.com/api/v4/postcodes/${this.childText}?&apiKey=qxEhBVhVHB80CB0WbpWU3C2nRESie99uykVp37M`
       );
      console.log(item);
      this.allAddress = item.data[0].allAddress;
      this.$emit("getChildText",this.allAddress);
      const address="allAddress"
  },
 },
};
</script>