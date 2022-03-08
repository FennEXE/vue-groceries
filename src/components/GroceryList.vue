<template>
	<div>
		<h2>Vue Boodschappenopdracht</h2>
		<table id="groceryTable">
			<tr>
				<th>Product</th>
				<th>Prijs</th>
				<th>Aantal</th>
				<th>Subtotaal</th>
			</tr>
			<tr v-for"name in names" :key="names">
				<td>{{name}}</td>
			</tr>
			<tr>
				<td>Brood</td>
				<td>{{value[0]}}</td>
				<td><input v-model="amount" type="number" value="0" /></td>
				<td>0</td>
			</tr>
			<tr>
				<td>Broccoli</td>
				<td>{{value[1]}}</td>
				<td><input v-model="amount" type="number" value="0" /></td>
				<td>0</td>
			</tr>
			<tr>
				<td>Krentebollen</td>
				<td>{{value[2]}}</td>
				<td><input v-model="amount" type="number" value="0" /></td>
				<td>0</td>
			</tr>
			<tr>
				<td>Noten</td>
				<td>{{value[3]}}</td>
				<td><input v-model="amount" type="number" /></td>
				<td>{{price}}</td>
			</tr>
			<tr>
				<td colspan="3">Totaal</td>
				<td>0</td>
			</tr>
		</table>
	</div>
</template>

<script>
export default {
	name: "GroceryList",
	
};

new Vue({
  el: "#Groceries",
	data: 
			names: ['Brood', 'Broccoli', 'Krentebollen', 'Noten'],
			values: [1.00, 0.99, 1.99, 0.49]
	},
	computed: {
		
	},
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
#groceryTable {
	margin: 0 auto;
}
</style>
