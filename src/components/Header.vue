<template>
  <div id="side__menu">
    <input type="text" v-model="childText" />
    <button @click="sendParent">住所自動入力</button>
  </div>
</template>

<script> 
import axios from "axios";
export default{
  data(){
    return{
      childText:""
    };
  },
  async created(){
    const item =await axios.get(
      `https://apis.postcode-jp.com/api/v4/postcodes/1000001`
    )
  }
  methods:{
    sendParent(){
      this.$emit("getChildText",this.childText);
    }
  }
};
</script>