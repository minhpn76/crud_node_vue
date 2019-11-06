<template>
  <div>
    <div class="container">
      <alert v-bind:message="alert"></alert>
      <h1 class="page-header">Manager Customers</h1>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Phone</th>
            <th>Email</th>
            
          </tr>
        </thead>
        <tbody  v-if="customers && customers.length">
          <tr v-for="customer in customers" :key="customer.id">
            <td>{{customer.first_name}}</td>
            <td>{{customer.last_name}}</td>
            <td>{{customer.phone}}</td>
            <td>{{customer.email}}</td>
            <td><router-link class="btn btn-default" v-bind:to="'/detail/'+customer._id">View</router-link></td>
           
            
          </tr>
        
        </tbody>
      </table>
      
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Alert from '@/components/Alert'

export default {
  name: 'customer',
  data () {
    return {
      customers: [],
      errors: [],
      alert: ''
    }
  },
  methods: {
    fetchCustomers (){
      axios.get('http://localhost:3000/users') //https://jsonplaceholder.typicode.com/posts http://localhost:3000/users
        .then( (response) => {
          this.customers = response.data.data;
          
        }).catch( e => {
          this.errors.push(e)
        });
    }
  },
  created: function () {
    this.fetchCustomers();
  },
 
  components: {
    'alert' : Alert
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
