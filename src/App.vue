<template>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css">
  <div id="print">
  <div id="nav">
    <router-link to="/">Home</router-link> | <a @click="backButton">Back</a>
  </div>
  </div>
  <router-view/>
</template>
<script>
export default {
  methods:{
    backButton(){
      return this.$router.go(-1)
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 10px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}


#contact{
  padding:10px 0 10px;
}

.contact-text{
  margin:45px auto;
}

.mail-message-area{
  width:100%;
  padding:0 15px;
}

.mail-message{
  width: 100%;
  background:rgba(255,255,255, 0.8) !important;
  -webkit-transition: all 0.7s;
  -moz-transition: all 0.7s;
  transition: all 0.7s;
  margin:0 auto;
  border-radius: 0;
}

.not-visible-message{
  height:0px;
  opacity: 0;
}

.visible-message{
  height:auto;
  opacity: 1;
  margin:25px auto 0;
}

/* Input Styles */

.form{
  width: 100%;
  padding: 15px;
  background:#f8f8f8;
  border:1px solid rgba(0, 0, 0, 0.075);
  margin-bottom:25px;
  color:#727272 !important;
  font-size:13px;
  -webkit-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
}

.form:hover{
  border:1px solid #8BC3A3;
}

.form:focus{
  color: white;
  outline: none;
  border:1px solid #8BC3A3;
}

.textarea{
  height: 200px;
  max-height: 200px;
  max-width: 100%;
}

/* Generic Button Styles */
.button{
  padding:8px 12px;
  background:#0A5175;
  display: block;
  width:120px;
  margin:10px 1px 1px 1px;
  border-radius:3px;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s;
  text-align:center;
  font-size:0.8em;
  box-shadow: 0 1px 4px rgba(0,0,0, 0.10);
  -moz-box-shadow: 0 1px 4px rgba(0,0,0, 0.10);
  -webkit-box-shadow: 0 1px 4px rgba(0,0,0, 0.10);
}

.button:hover{
  background:#8BC3A3;
  color:white;
}
button {
  background-color: white; /* Green */
  color: black;
  border: 2px solid #4CAF50;
  padding: 10px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 10px;
  transition-duration: 0.4s;
}

button:hover {
  background-color: #4CAF50; /* Green */
  color: white;
}
/* Send Button Styles */

.form-btn{
  width:180px;
  display: block;
  height: auto;
  padding:15px;
  color:#fff;
  background:#8BC3A3;
  border:none;
  border-radius:3px;
  outline: none;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s;
  margin:auto;
  box-shadow: 0px 1px 4px rgba(0,0,0, 0.10);
  -moz-box-shadow: 0px 1px 4px rgba(0,0,0, 0.10);
  -webkit-box-shadow: 0px 1px 4px rgba(0,0,0, 0.10);
}

.form-btn:hover{
  background:#111;
  color: white;
  border:none;
}

.form-btn:active{
  opacity: 0.9;
}
center{
  margin-top:330px;
}
input {
  position: relative;
  z-index: 9999;
}
@media print {
  #print {
    display: none;
  }
  a[href]:after {
    content: none !important;
  }
}
</style>
