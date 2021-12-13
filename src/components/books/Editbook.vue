<template>
    <div class="edit-book">
        <div class="container">
            <div class="row">
                <h2 style="color: black">EDIT BOOK</h2>
                <hr>
                <div class="col-md-2"></div>
                <!-- Edit Form -->
                <div class="col-md-8">
                  <form action="#" class="frmAddbook" @submit.prevent="frmEditbook">
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
                          <b-button type="submit" name="btnAdd" class="btnEdit" value="ADD">SAVE</b-button>
                      </div>
                  </form>
                </div>

                <div class="col-md-2"></div>
            </div>
        </div>
    </div>
</template>

<script>
import {getBook, editBook} from '@/services/CouchApiService.js'

export default {
    name: 'EditBook',
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
    async mounted() {
      const id = this.$route.params.id
      const result = await getBook(id)
      console.log("book:",result)
      this.book = result.data
    },
    methods: {
      async frmEditbook() {

        const id = this.$route.params.id
        const name = this.book.name
        const type = this.book.type
        const author = this.book.author
        const producer = this.book.producer
        const amount = this.book.amount

        const response = await editBook(id, name, type, author, producer, amount)
        console.log('edit book:', response)
        if (response.status === 200) {
            alert('Change successful!')
            this.$router.replace({ name: 'viewbook' });
        } else {
            alert('Try again!')
        }
      }
    }
}
</script>

<style>
.btnEdit
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
.frmEditbook{
    width: 60%;
    margin: 10px 220px;
}
</style>