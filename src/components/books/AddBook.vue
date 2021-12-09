<template>
    <div class="add-book">
        <div class="container">
            <div class="row">
                <h2 style="color: black">ADD NEW BOOK</h2>
                <hr>
                <form action="#" class="frmAddbook" @submit.prevent="frmAddbook">
                    <div class="form-group">
                        <label for="usr">Name:</label>
                        <input required="true" type="text" class="form-control" id="name" v-model="book.name">
                    </div>
                    <div class="form-group">
                        <label for="email">Author:</label>
                        <input required="true" type="text" class="form-control" id="author" v-model="book.author">
                    </div>
                    <div class="form-group">
                        <label for="email">Type:</label>
                        <input required="true" type="text" class="form-control" id="type" v-model="book.type">
                    </div>
                    <div class="form-group">
                        <label for="email">Producer:</label>
                        <input required="true" type="text" class="form-control" id="producer" v-model="book.producer">
                    </div>
                    <div class="form-group">
                        <label for="email">QTY:</label>
                        <input required="true" type="text" class="form-control" id="qty" v-model="book.amount">
                    </div>

                    <div class="form-group">
                        <b-button type="submit" name="btnAdd" class="btnAdd" value="ADD">ADD</b-button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import {createBook} from '@/services/CouchApiService.js'

export default {
  // props:{
  //   edit:{
  //     type:Object,
  //     default:null
  //   }
  data () {
    return {
      book: {
        name: '',
        type: '',
        author: '',
        producer: '',
        amount: ''
      }
    }
  },
  methods: {
    async frmAddbook () {

      const name = this.book.name
      const type = this.book.type
      const author = this.book.author
      const producer = this.book.producer
      const amount = this.book.amount

      const response = await createBook(name, type, author, producer, amount)
      console.log('new book:', response)
      if (response.status === 201) {
        alert('Add new book successful!')
        this.$router.replace({ name: 'viewbook' });
      } else {
        alert('Try again!')
      }
    }
  }
}
</script>

<style>
.btnAdd
{
    width: 10%;
    border-radius: 1rem;
    padding: 1%;
    color: #fff;
    background-color: #0062cc;
    border: none;
    cursor: pointer;
    margin-left: 15px;
    margin-top: 15px;
}
.frmAddbook{
    width: 60%;
    margin: 10px 220px;
}
</style>
