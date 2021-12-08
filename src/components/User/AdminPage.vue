<template>
   <section class="testimonial py-5" id="testimonial">
    <div class="container-1">
        <div class="row ">
            <div class="col-md-7">
                  <img src="@/assets/lib.png" style="width:300px">
            </div>
            <div class="col-md-5 py-5  ">
                <div class="manager">
                  <p class="speech-bubble">
                    <router-link :to="{name: 'Login'}">Manager Users </router-link>
                  </p>
                </div>
                <div class="manager">
                  <p class="speech-bubble2">
                    <router-link :to="{name: 'viewbook'}">Manager Books </router-link>
                  </p>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
  name: 'AdminPage'
}
</script>

<style>
.h4{
  color: #ffff;
}
.container-1{
    margin: auto;
    width: 70%;
    padding: 40px;
    background-image: linear-gradient(#c9ecfa,#f0fafd);
}
/* MANAHGER USER */
.speech-bubble {
   width: 120px; 
   height: 50px; 
   background:#eb437e;
   position: absolute;
   -moz-border-radius: 10px; 
   -webkit-border-radius: 10px; 
   border-radius: 10px;
   margin-top: 30px;

  padding: 30px;
  position: relative;
  padding: 0px;
  -webkit-box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
  box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
}
.speech-bubble:before {
   content:"";
   position: absolute;
   width: 0;
   height: 0;
   border-top: 13px solid transparent;
   border-right: 26px solid#eb437e;
   border-bottom: 13px solid transparent;
   margin: 13px 0 0 -25px;
}
/* MANAGER BOOKS */
.speech-bubble2 {
   width: 120px; 
   height: 50px; 
   background:#7a73e2;
   position: absolute;
   -moz-border-radius: 10px; 
   -webkit-border-radius: 10px; 
   border-radius: 10px;
   margin-top: 30px;

  padding: 30px;
  position: relative;
  padding: 0px;
  -webkit-box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
  box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
}
.speech-bubble2:before {
   content:"";
   position: absolute;
   width: 0;
   height: 0;
   border-top: 13px solid transparent;
   border-right: 26px solid#7a73e2;
   border-bottom: 13px solid transparent;
   margin: 13px 0 0 -25px;
}

.manager{
  margin-bottom: 100px;
}
a{
  color: #ffff;
  text-decoration: none;
  margin-top: 10px;
}


</style>