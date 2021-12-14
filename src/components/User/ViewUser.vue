<template>
  <div>
	<div class="container-xl">
		<div class="table-responsive">
			<div class="table-wrapper">
				<div class="table-title">
					<div class="row">
						<div class="col-sm-6">
							<h2>Manage <b>Users</b></h2>
						</div>
						<div class="col-sm-6">
							<!-- <span>
								<router-link :to="{name: 'adduser'}" >
									<button class="btnAddbook">+ ADD NEW BOOK</button>
								</router-link>
							</span> -->
						</div>
					</div>
				</div>
				<table class="table table-striped table-hover">
					<thead>
						<tr>
							<th>Tên tài khoản</th>
							<th>Fullname</th>
							<th>Email</th>
							<th>Ngày tạo</th>
							<th>Action</th>

						</tr>
					</thead>
					<tbody>
						<tr v-for="u in users" :key="u.id">
							<td>{{u.value.username}}</td>
							<td>{{u.value.fullname}}</td>
							<td>{{u.value.email}}</td>
							<td>{{u.value.createAt}}</td>
							<td>
								<router-link :to="{name: 'editbook', params: {id: u.id}}">
									<b-icon icon="pencil-square" scale="1.2" variant="success"></b-icon>
								</router-link>
								<b-button class="btndelete" data-toggle="modal" v-on:click="clickDelete" v-bind:value="u.id">
									<b-icon icon="x-square" scale="1.2" variant="danger"></b-icon>
								</b-button>
							</td>  
						</tr> 
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>
</template>

<script>
import {getAllUser, deleteBook} from "@/services/CouchApiService.js"

export default {
  name: 'viewbook',
  data(){
      return{
		users: [],
		id_del: ''
      }
    },
	methods: {
		async clickDelete($event) {
			this.id_del = $event.currentTarget.value
            console.log("result:",this.id_del)
			const id = this.id_del
            // alert("Are you sure to remove it?")
        
            // const result1 = await deleteBook(id)
            // if(result1.status === 200) {
            //     window.location.reload();
            // }
		}
	},
	async mounted() {
		const result = await getAllUser()
		console.log("books:",result.data)
		this.users = result.data
	}
}
</script>

<style>
.btnAddbook {
	padding: 5px 10px;
    text-align: center;
    background: white;
    margin-left: 375px;
	color: black;
	border: 2px solid black;
}
.btnAddbook:hover {
	padding: 5px 10px;
    text-align: center;
    background: white;
    margin-left: 375px;
	color: #435d7d;
	border: 2px solid #435d7d;
}
.btndelete {
	color: #fff;
    background-color: ghostwhite;
    border-color: ghostwhite;
    margin: 5px;
	/* width: 35px;
	height: 35px; */
}
.btndelete:hover {
	color: #fff;
    background-color: rgb(245, 124, 124);
    border: 1px solid rgb(245, 124, 124);
    margin: 5px;
	/* width: 35px;
	height: 35px; */
}
.container-xl {
	color: #566787;
	background: #f5f5f5;
	font-family: 'Varela Round', sans-serif;
	font-size: 13px;
}
.table-responsive {
    margin: 30px 0;
}
.table-wrapper {
	background: #fff;
	padding: 20px 25px;
	border-radius: 3px;
	min-width: 1000px;
	box-shadow: 0 1px 1px rgba(0,0,0,.05);
}
.table-title {        
	padding-bottom: 15px;
	background: #435d7d;
	color: #fff;
	padding: 16px 30px;
	min-width: 100%;
	margin: -20px -25px 10px;
	border-radius: 3px 3px 0 0;
}
.table-title h2 {
	margin: 5px 0 0;
	font-size: 24px;
}
.table-title .btn-group {
	float: right;
}
.table-title .btn {
	color: #fff;
	float: right;
	font-size: 13px;
	border: none;
	min-width: 50px;
	border-radius: 2px;
	border: none;
	outline: none !important;
	margin-left: 10px;
}
.table-title .b-icon {
	float: left;
	font-size: 21px;
	margin-right: 5px;
}
.table-title .btn span {
	float: left;
	margin-top: 2px;
}
table.table tr th, table.table tr td {
	border-color: #e9e9e9;
	padding: 12px 15px;
	vertical-align: middle;
}
table.table tr th:first-child {
	width: 100px;
}
table.table tr th:last-child {
	width: 80px;
}
table.table-striped tbody tr:nth-of-type(odd) {
	background-color: #fcfcfc;
}
table.table-striped.table-hover tbody tr:hover {
	background: #f5f5f5;
}
table.table th i {
	font-size: 23px;
	margin: 0 5px;
	cursor: pointer;
}	
table.table td:last-child i {
	opacity: 0.9;
	font-size: 22px;
	margin: 0 5px;
}
table.table td a {
	font-weight: bold;
	color: #566787;
	display: inline-block;
	text-decoration: none;
	outline: none !important;
}
table.table td a:hover {
	color: #2196F3;
}
table.table td a.edit {
	color: #FFC107;
}
table.table td b-icon {
	font-size: 29px;
	width: 25px;
	height: 25px;
}
table.table .avatar {
	border-radius: 50%;
	vertical-align: middle;
	margin-right: 10px;
}
.pagination {
	float: right;
	margin: 0 0 5px;
}
.pagination li a {
	border: none;
	font-size: 13px;
	min-width: 30px;
	min-height: 30px;
	color: #999;
	margin: 0 2px;
	line-height: 30px;
	border-radius: 2px !important;
	text-align: center;
	padding: 0 6px;
}
.pagination li a:hover {
	color: #666;
}	
.pagination li.active a, .pagination li.active a.page-link {
	background: #03A9F4;
}
.pagination li.active a:hover {        
	background: #0397d6;
}
.pagination li.disabled i {
	color: #ccc;
}
.pagination li i {
	font-size: 16px;
	padding-top: 6px
}
.hint-text {
	float: left;
	margin-top: 10px;
	font-size: 13px;
}    
/* Custom checkbox */
.custom-checkbox {
	position: relative;
}
.custom-checkbox input[type="checkbox"] {    
	opacity: 0;
	position: absolute;
	margin: 5px 0 0 3px;
	z-index: 9;
}
.custom-checkbox label:before{
	width: 18px;
	height: 18px;
}
.custom-checkbox label:before {
	content: '';
	margin-right: 10px;
	display: inline-block;
	vertical-align: text-top;
	background: white;
	border: 1px solid #bbb;
	border-radius: 2px;
	box-sizing: border-box;
	z-index: 2;
}
.custom-checkbox input[type="checkbox"]:checked + label:after {
	content: '';
	position: absolute;
	left: 6px;
	top: 3px;
	width: 6px;
	height: 11px;
	border: solid #000;
	border-width: 0 3px 3px 0;
	transform: inherit;
	z-index: 3;
	transform: rotateZ(45deg);
}
.custom-checkbox input[type="checkbox"]:checked + label:before {
	border-color: #03A9F4;
	background: #03A9F4;
}
.custom-checkbox input[type="checkbox"]:checked + label:after {
	border-color: #fff;
}
.custom-checkbox input[type="checkbox"]:disabled + label:before {
	color: #b8b8b8;
	cursor: auto;
	box-shadow: none;
	background: #ddd;
}
/* Modal styles */
.modal .modal-dialog {
	max-width: 400px;
}
.modal .modal-header, .modal .modal-body, .modal .modal-footer {
	padding: 20px 30px;
}
.modal .modal-content {
	border-radius: 3px;
	font-size: 14px;
}
.modal .modal-footer {
	background: #ecf0f1;
	border-radius: 0 0 3px 3px;
}
.modal .modal-title {
	display: inline-block;
}
.modal .form-control {
	border-radius: 2px;
	box-shadow: none;
	border-color: #dddddd;
}
.modal textarea.form-control {
	resize: vertical;
}
.modal .btn {
	border-radius: 2px;
	min-width: 100px;
}	
.modal form label {
	font-weight: normal;
}	
</style>