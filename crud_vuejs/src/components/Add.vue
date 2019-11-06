<template>
  <div>
    <div class="container">
      <h1 class="page-header">Add Customers</h1>
      <form v-on:submit="addCustomer">
        <div class="form-group">
          <label>First Name</label>
          <input type="text" class="form-control" v-model="customer.first_name">
        </div>
        <div class="form-group">
          <label>Last Name:</label>
          <input type="text" class="form-control"  v-model="customer.last_name">
        </div>
        <div class="form-group">
          <label>Phone :</label>
          <input type="text" class="form-control"  v-model="customer.phone">
        </div>
        <div class="form-group">
          <label>Email :</label>
          <input type="email" class="form-control"  v-model="customer.email">
        </div>
        <div class="form-group">
          <label>City:</label>
          <input type="text" class="form-control"  v-model="customer.city">
        </div>
        <div class="form-group">
          <label>Address:</label>
          <input type="text" class="form-control"  v-model="customer.address">
        </div>
        <div class="form-group">
          <label>State:</label>
          <input type="text" class="form-control"  v-model="customer.state">
        </div>
     
        <button type="submit" class="btn btn-info">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'add',
  data () {
    return {
      customer: {},
     
    }
  },
  methods: {
    addCustomer (e) {
      if(!this.customer.first_name || !this.customer.last_name || !this.customer.phone || !this.customer.email || !this.customer.city || !this.customer.address || !this.customer.state ){
        console.log("Please....")
      }
      else{
        let newCustomer = {
          first_name : this.customer.first_name,
          last_name : this.customer.last_name,
          phone : this.customer.phone,
          email : this.customer.email,
          city : this.customer.city,
          address : this.customer.address,
          state : this.customer.state                                    
        }
        axios.post('http://localhost:3000/users', newCustomer )
          .then( (response) => {
            this.$router.push({path : '/', query: { alert: 'Add Successfully!'}});
         }).catch( e => {
          
        });
      
      }
    
      e.preventDefault();
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
