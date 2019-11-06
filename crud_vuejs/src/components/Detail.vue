<template>
  <div>
    <div class="container">
      <h1 class="page-header">{{customer.first_name}} {{customer.last_name}}</h1>
      <router-link  class="btn btn-info pull-left" v-bind:to="'/edit/'+customer._id">Edit</router-link>
      <span  class="btn btn-danger pull-right" v-on:click="deleteCustomer(customer._id)">Delete</span>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Phone</th>
            <th>Email</th>
            <th>City</th>
            <th>Address</th>
            <th>State</th>
            
            
          </tr>
        </thead>
        <tbody >
          <tr>
            <td>{{customer.phone}}</td>
            <td>{{customer.email}}</td>
            <td>{{customer.city}}</td>
            <td>{{customer.address}}</td>
            <td>{{customer.state}}</td>
          </tr>
        
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'detail',
  data () {
    return {
      customer: ''
    }
  },
  methods: {
      fetchCustomer(id) {
          axios.get('http://localhost:3000/user/'+id )
          .then( (response) => {
            this.customer = response.data.data;
              // console.log(response)
          }).catch( e => {

          });
      },
      deleteCustomer(id){
        axios.delete('http://localhost:3000/user/'+id)
          .then((res) => {
            this.$router.push({path : '/'});
          })
      }
  },
  created: function () {
      this.fetchCustomer(this.$route.params.id)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
