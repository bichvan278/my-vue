<template>
    <section class="lg-dark">
        <div class="container p-lg">
            <div class="row text-center">
                <div class="col-lg-12">
                    <h1>Welcome to Library Management System</h1>
                </div>
            </div>
            <div class="row text-center">
                <div class="col-md-6">
                    <div class="text-center my-5">
                        <router-link :to="{name: 'Login'}">
                            <b-button variant="outline-info" class="mb-1">
                                <b-icon icon="power" aria-hidden="true"></b-icon>Login
                            </b-button>
                        </router-link>
                </div>
                    <p>Admin , Librarian and Reader Login Form.</p>
                </div>
                <div class="col-md-6">
                    <div class="text-center my-5">
                        <router-link :to="{name: 'Register'}">
                            <b-button variant="outline-info" class="mb-2">
                                <b-icon icon="person" aria-hidden="true"></b-icon>Register
                            </b-button>
                        </router-link>
                </div>
                    <p>Readers can register through this Form.</p>
                </div>
          </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'HelloWorld'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap');

.lg-dark{
  background-color: #d8f1fb;
  background-image: linear-gradient(#c9ecfa,#f0fafd);
  padding-bottom: 5%;
  width: 80%;
  margin: auto;
}
.col-md-6{
    color: #6b747b;
}
a{
    color: #6E7B8B;
    text-decoration: none;
}
.mb-1 {
    background: #7a73e2;
    color: #ebf8fd;
    border-radius: 15px;
    border-radius: 15px 15px;
    border-radius: 15px 15px 15px;
    border-radius: 15px 15px 15px;
}
.mb-2{
    background: #eb437e;
    color: #ebf8fd;
    border-radius: 15px;
    border-radius: 15px 15px;
    border-radius: 15px 15px 15px;
    border-radius: 15px 15px 15px;
}
.col-lg-12{
    color: #6b747b ;
}
.col-lg-12 h1{
    font: Montserrat;
    color: #252c38;
}
.mb-1:hover {
  border: 0 solid;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
  outline: 1px solid;
  outline-color: rgba(255, 255, 255, 0.5);
  outline-offset: 0px;
  text-shadow: none;
  transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
}
 
.mb-1:hover  {
  border: 1px solid;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.2);
  outline-color: rgba(255, 255, 255, 0);
  outline-offset: 15px;
  text-shadow: 1px 1px 2px #427388;
}
.mb-2:hover {
  border: 0 solid;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
  outline: 1px solid;
  outline-color: rgba(255, 255, 255, 0.5);
  outline-offset: 0px;
  text-shadow: none;
  transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
}
 
.mb-2:hover  {
  border: 1px solid;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.2);
  outline-color: rgba(255, 255, 255, 0);
  outline-offset: 15px;
  text-shadow: 1px 1px 2px #427388;
}
</style>
