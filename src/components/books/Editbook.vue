<template>
<div>
    <b-button v-b-modal.modal-prevent-closing>Open Modal</b-button>

    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="Submit Your Name"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group label="Name">
          <b-form-input v-model="book.name"></b-form-input>
        </b-form-group>

        <b-form-group label="Auth">
          <b-form-input v-model="book.auth"></b-form-input>
        </b-form-group>

        <b-form-group label="Type">
          <b-form-input v-model="book.type"></b-form-input>
        </b-form-group>

        <b-form-group label="Date">
          <b-form-input v-model="book.date"></b-form-input>
        </b-form-group>

      </form>
    </b-modal>
  </div>
</template>

<script>
  export default {
    props:{
      edit:{
        type:Object,
        default:null
      }
    },
    watch:{
      edit(){
        if(this.edit){
          this.book=Object.assign({}, this.edit)
        }else{
          this.book={}
        }
      }
    },
    data() {
      return {
        book:{
          name:"",
          auth:"",
          type:"",
          date:"",
        },
        name: '',
        nameState: null,
        submittedNames: []
      }
    },
    methods: {
      checkFormValidity() {
        const valid = this.$refs.form.checkValidity()
        this.nameState = valid
        return valid
      },
      resetModal() {
        this.name = ''
        this.nameState = null
      },
      handleOk(bvModalEvt) {
        console.log(this.book)

        this.$emit("save", this.book)
         this.book={
          id: Math.floor(Math.random()*1000),
          name:"",
          auth:"",
          type:"",
          date:"",

        }
        // Prevent modal from closing
        bvModalEvt.preventDefault()
        // Trigger submit handler
        this.handleSubmit()
      },
      handleSubmit() {
        // Exit when the form isn't valid
        if (!this.checkFormValidity()) {
          return
        }
        // Push the name to submitted names
        this.submittedNames.push(this.name)
        // Hide the modal manually
        this.$nextTick(() => {
          this.$bvModal.hide('modal-prevent-closing')
        })
      }
    }
  }
</script>

<style>
</style>