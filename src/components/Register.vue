<template>
<section class="testimonial py-5" id="testimonial">
    <div class="container">
        <div class="row ">
            <div class="col-md-4 py-5  ">
                <div class=" ">
                    <div class="card-body">
                        <img src="@/assets/dk.png" style="width:100%">
                    </div>
                </div>
            </div>
            <div class="col-md-8 py-5 border">
                <h1 class="pb-4">Please fill with your details</h1>
                <div id="formContent">
                    <!-- Login Form -->
                    <form @submit.prevent="submitRegister">
                      <div  class="row">
                        <div class="form-group col-lg-12">
                                      <input type="text" id="fullname" v-model="user.fullname" class="fadeIn second" name="Fullname" placeholder="Fullname">
                        </div>
                        <div class="form-group col-lg-12">
                                      <input type="text" id="Email" v-model="user.email" class="fadeIn second" name="Email" placeholder="Email">
                        </div>
                        <div class="form-group col-lg-12">
                                      <input type="text" id="sdt" v-model="user.phone" class="fadeIn second" name="sdt" placeholder="Phone number">
                        </div>
                        <div class="form-group col-lg-12">
                                      <input type="text" id="ussername" v-model="user.username" class="fadeIn second" name="username" placeholder="Username">
                        </div>
                        <div class="form-group col-lg-12">
                                      <input type="text" id="pw" v-model="user.password" class="fadeIn second" name="pw" placeholder="Password">
                        </div>

                        <div class="form-group" text-center>
                          <input type="submit" class="fadeIn fourth" value="Register">
                        </div>
                        
                      </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>

</template>

<script>
import {register} from "@/services/CouchApiService.js"

export default {
  name: 'Register',
  data(){
    return{
      user: {
        fullname: '',
        email: '',
        phone: '',
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async submitRegister(){
      const fullname = this.user.fullname;
      const email = this.user.email;
      const phone = this.user.phone;
      const username = this.user.username;
      const password = this.user.password;

      const response = await register(fullname, email, phone, username, password);
      console.warn(response);
      if(response.status === 201){
          alert("Register is completely!")
          this.$router.replace({ name: 'Login' });
      }else{
          alert("Try again!")
      }
    }
  }
}
</script>
<style>
h1 {
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  display:inline-block;
  margin: 10px 8px 10px 8px; 
  color: #eb437e;
}

/* STRUCTURE */
/* TABS */

h1.inactive {
  color: #cccccc;
}

h1.active {
  color: #0d0d0d;
  border-bottom: 2px solid #5fbae9;
}
/* FORM TYPOGRAPHY*/

input[type=button], input[type=submit], input[type=reset]  {
  background-color: #56baed;
  border: none;
  color: white;
  padding: 15px 80px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  font-size: 13px;
  -webkit-box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);
  box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
  margin: 5px 20px 40px 20px;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

input[type=button]:hover, input[type=submit]:hover, input[type=reset]:hover  {
  background-color: #eb437e;
}

input[type=button]:active, input[type=submit]:active, input[type=reset]:active  {
  -moz-transform: scale(0.95);
  -webkit-transform: scale(0.95);
  -o-transform: scale(0.95);
  -ms-transform: scale(0.95);
  transform: scale(0.95);
}

input[type=text] {
  background-color: #f6f6f6;
  border: none;
  color: #0d0d0d;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 5px;
  width: 85%;
  border: 2px solid #f6f6f6;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
}

input[type=text]:focus {
  background-color: #fff;
  border-bottom: 2px solid #eb437e;
}

input[type=text]:placeholder {
  color: #cccccc;
}
input[type=button]:active, input[type=submit]:active, input[type=reset]:active  {
  -moz-transform: scale(0.95);
  -webkit-transform: scale(0.95);
  -o-transform: scale(0.95);
  -ms-transform: scale(0.95);
  transform: scale(0.95);
}

 CSS3 Fade-in Animation */
/* Simple CSS3 Fade-in Animation */
.underlineHover:after {
  display: block;
  left: 0;
  bottom: -10px;
  width: 0;
  height: 2px;
  background-color: #56baed;
  content: "";
  transition: width 0.2s;
}

.underlineHover:hover {
  color: #0d0d0d;
}

.underlineHover:hover:after{
  width: 100%;
}
/* OTHERS */

*:focus {
    outline: none;
} 

#icon {
  width:60%;
}
.col-md-4{
  background-color: #97b6c0;
}
#testimonial{
   margin-bottom: 10px;
}

</style>