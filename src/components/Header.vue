<template>
  <div id="side__menu">
    <input type="text" v-model="childText" />
    <button @click="sendRequest">住所自動入力</button>
  </div>
</template>

<script> 
import axios from "axios";
export default{
  methods:{
  async sendRequest(){
      const item =await axios.get(
        `https://apis.postcode-jp.com/api/v4/postcodes/${data}?&apiKey=qxEhBVhVHB80CB0WbpWU3C2nRESie99uykVp37M`
      );
      console.log(item);
      this.allAddress = item.data[0].allAddress;
    }
  }
};
</script>