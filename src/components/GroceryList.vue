<template>
	<div>
		<h1>Vue Boodschappenopdracht</h1>
		{{products}}
		<table id="groceryTable">
			<tr>
				<th>Product</th>
				<th>Prijs</th>
				<th>Aantal</th>
				<th>Subtotaal</th>
			</tr>
			<tr v-for="(product, i) in products" :key="i">
				<td>{{product.name}}</td>
				<td>{{product.value}}</td>
				<td><input v-model="product.amount" type="number" value="0" min="0" oninput="this.value = 
 !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : 0" /></td>
				<td>{{(product.value * product.amount).toFixed(2)}}</td>
			</tr>
			<tr>
				<th colspan="3"></th>
				<th>Totaal</th>
			</tr>
			<tr>
				<td colspan="3"></td>
				<td>{{total(products)}} </td>
			</tr>
		</table>
		<input v-model="itemname">
		<input v-model="itemvalue" type="number" value="0.01" min="0.01" step="0.01" oninput="this.value = 
 !!this.value && Math.abs(this.value) >= 0.01 ? Math.abs(this.value) : 0.01" />
		<button @click="newthing(itemname, itemvalue)">Add</button>
	</div>
		
</template>

<script>

export default {
	name: "GroceryList",
	data() {
		return {
			itemname: '',
			itemvalue: 0.01
		}
	},
	methods: {
		total(things)
		{
			let fullprice = 0;
			for(let i = 0; i < things.length; i++)
			{
				fullprice = fullprice + (things[i].value * things[i].amount);
			}
			return fullprice.toFixed(2);
		},
		newthing(itemName, itemValue) {
			this.$store.dispatch('addItem', {
				name: itemName,
				value: Number(itemValue).toFixed(2),
				amount: 0});
		},

	},
	computed: {
		products() {
			return this.$store.getters.productList
		}
	}	
};


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div{
	padding-top: 20px;
	padding-bottom: 40px;
}
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
input {
	background-color: rgb(65, 65, 65);
	color: #a2bdd8;
	font-size: 0.8em;
	border-radius: 5px;
	text-align: center;
	width: 150px;
}
#groceryTable {
	margin: 0 auto;
	font-size: 2em;
}
</style>
