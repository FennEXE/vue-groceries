<template>
	<div>
		<h1>Vue Boodschappenopdracht</h1>
		<table id="groceryTable">
			<tr>
				
				<th>Product</th>
				<th>Prijs</th>
				<th>Aantal</th>
				<th>Subtotaal</th>
			</tr>
			<tr v-for="product in products" :key="product">
				
				<td>{{product.name}}</td>
				<td>{{product.value.toFixed(2)}}</td>
				<td><input v-model="product.amount" type="number" value="0" min="0" oninput="this.value = 
 !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : 0" /></td>
				<td>{{subTotal(product.value, product.amount)}}</td>
			</tr>
			<tr>
				<th colspan="3"></th>
				<th>Totaal</th>
			</tr>
			<tr>
				<td colspan="3"></td>
				<td>{{total()}}</td>
			</tr>
		</table>
	</div>
</template>

<script>
export default {
	name: "GroceryList",
	data() 
	{
		return {
			products: [
				{
					name: "Brood",
					value: 1.00,
					amount: 0,
				},
				{
					name: "Broccoli",
					value: 0.79,
					amount: 0
				},
				{
					name: "Krentenbollen",
					value: 1.49,
					amount: 0
				},
				{
					name: "Noten",
					value: 0.99,
					amount: 0
				},
				{
					name: "Aardappelen",
					value: 0.89,
					amount: 0
				},
			]
		}
	},
	methods: {
		subTotal(value, amount) 
		{
			return (value * amount).toFixed(2);
		},
		total()
		{
			let fullprice = 0;
			for(let i = 0; i < this.products.length; i++)
			{
				fullprice = fullprice + (this.products[i].value * this.products[i].amount);
			}
			return fullprice.toFixed(2);
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
