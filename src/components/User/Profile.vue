<template>
    <section class="testimonial py-5" id="testimonial">
        <div class="container">
            <div class="row " v-for="u in user" :key="u._id">
                <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                        <div class="card h-100">
                        <div class="card-body">
                            <div class="account-settings">
                            <div class="user-profile">
                                <div class="user-avatar">
                                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Maxwell Admin">
                                </div>
                                <h5 class="user-name">{{info.username}}</h5>
                                <h6 class="user-email">{{info.email}}</h6>
                            </div>
                            </div>
                        </div>
                        </div>
                </div>
                <div class="col-md-8 py-5 border">
                    <h1 class="pb-4">Personal Details</h1>
                    <div id="formContent">
                        <!-- Login Form -->
                        <form>
                        <div  class="row">
                            <div class="form-group col-lg-6">
                                <label for="fullName">Full name: {{info.name}}</label> 
                                <label for="fullName">Street: {{info.street}}</label> 

                            </div>
                            <div class="form-group col-lg-6">
                                <label for="fullName">Phone: {{info.phone}}</label> 
                                <label for="fullName">City: {{info.city}}</label> 

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
export default {
    name: 'Profile',
    data(){
        return{
            user:[{}],
            info:
                {	
                    id :1,
                    username: 'lienlien',
                    name: 'Nguyen Ngoc Luyen',
                    email:'luyen@gmail.com',
                    street:'Nguyen van linh',
                    city:'Can tho',
                    phone: '058585858'
                }
        }
    },
    async mounted() {
        if(localStorage.getItem("user") !== null){
            this.user = localStorage.getItem("user")
            console.log("profile",this.user)
            // const test = {docs}
            // console.log("test", test)
        }
    }
}
</script>

<style scoped>
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
label[type=button]:hover, input[type=submit]:hover, input[type=reset]:hover  {
  background-color: #eb437e;
}
label[type=button]:active, input[type=submit]:active, input[type=reset]:active  {
  -moz-transform: scale(0.95);
  -webkit-transform: scale(0.95);
  -o-transform: scale(0.95);
  -ms-transform: scale(0.95);
  transform: scale(0.95);
}
label {
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
.account-settings .user-profile {
    margin: 0 0 1rem 0;
    padding-bottom: 1rem;
    text-align: center;
}
.account-settings .user-profile .user-avatar {
    margin: 0 0 1rem 0;
}
.account-settings .user-profile .user-avatar img {
    width: 90px;
    height: 90px;
    -webkit-border-radius: 100px;
    -moz-border-radius: 100px;
    border-radius: 100px;
}
.account-settings .user-profile h5.user-name {
    margin: 0 0 0.5rem 0;
}
.account-settings .user-profile h6.user-email {
    margin: 0;
    font-size: 0.8rem;
    font-weight: 400;
    color: #9fa8b9;
}
.account-settings .about {
    margin: 2rem 0 0 0;
    text-align: center;
}
.account-settings .about h5 {
    margin: 0 0 15px 0;
    color: #007ae1;
}
.account-settings .about p {
    font-size: 0.825rem;
}
.form-control {
    border: 1px solid #cfd1d8;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;
    font-size: .825rem;
    background: #ffffff;
    color: #2e323c;
}
.card {
    background: #ffffff;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    border: 0;
    margin-bottom: 1rem;
}
</style>