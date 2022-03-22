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
			<tr v-for="(item, i) in $store.state.items" :key="i">
				
				<td>{{item.name}}</td>
				<td>{{item.value.toFixed(2)}}</td>
				<td><input v-model="item.amount" type="number" value="0" min="0" oninput="this.value = 
 !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : 0" /></td>
				<td>{{subTotal(item.value, item.amount)}}</td>
			</tr>
			<tr>
				<th colspan="3"></th>
				<th>Totaal</th>
			</tr>
			<tr>
				<td colspan="3"></td>
				<td>{{total($store.state.items)}} </td>
			</tr>
		</table>

	</div>
		
</template>

<script>
export default {
	name: "GroceryList",
	methods: {
		subTotal(value, amount) 
		{
			return (value * amount).toFixed(2);
		},
		total(things)
		{
			let fullprice = 0;
			for(let i = 0; i < things.length; i++)
			{
				fullprice = fullprice + (things[i].value * things[i].amount);
			}
			return fullprice.toFixed(2);
		},
		// addItem(name, value)
		// {
		// 	this.$store.commit(item)
		// }
	},
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
