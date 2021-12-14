<template>
<div class="container">
    <h2 style="text-algin: center;">BOOKS</h2>
    <div class="row" v-for="b in books" :key="b.id">
        <div class="col-md-6">
            <div class="card" style="width: 16rem; height: 20rem">
                <img src="@/assets/book rev.png"  alt="...">
                <div class="card-body">
                <router-link :to="{name: 'detail', params: {id: b.id}}" class="form-control btn roberto-btn w-100">
                    <b-icon icon="bookmark-plus" scale="1.2" variant="success"></b-icon>{{b.value.name}}</router-link>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {getAllBook} from "@/services/CouchApiService.js"

export default {
    name: 'UserPage',
    data(){
        return{
            books:[]
        }
    },
    async mounted() {
        const result = await getAllBook()
		console.log("books:",result.data)
		this.books = result.data
    }
}
</script>

<style>
.row{
   float: left;
   margin-left: 10px;
   margin-bottom: 60px;
}
.row :hover{
   color: #ccc;
}
.card-body {
    margin-top: -12px;
}
</style>