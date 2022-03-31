<template>
	<div>
		<div v-if="formvisible == 0">
		<h1>Vue Boodschappenopdracht</h1>
		<table id="groceryTable">
			<tr>
				<th>Product</th>
				<th>Prijs</th>
				<th>Aantal</th>
				<th>Subtotaal</th>
				<th>Opties</th>
			</tr>
			<tr v-for="(product, i) in products" :key="i">	
				<td>{{productList[i].name}}</td>
				<td>{{productList[i].value}}</td>
				<td><input v-model="productList[i].amount" value="0" placeholder="0" type="number" min="0" oninput="this.value = 
 !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : 0" /></td>
				<td>{{stopNan(productList[i].value, productList[i].amount)}}</td>
				<td><button @click="deleteProduct(i)">Delete</button><button @click="editProduct(i)">Edit</button></td>
			</tr>
			<tr>
				<th colspan="3"></th>
				<th>Totaal</th>
			</tr>
			<tr>
				<td colspan="3"></td>
				<td>{{total(productList)}} </td>
			</tr>
		</table>
		<input v-model="itemname">
		<input v-model="itemvalue" type="number" value="0.01" min="0.01" step="0.01" oninput="this.value = 
 !!this.value && Math.abs(this.value) >= 0.01 ? Math.abs(this.value) : 0.01" />
		<button @click="newthing(itemname, itemvalue)">Add</button>	
		</div>
		<div v-if="formvisible == 1">
			<input v-model="itemname">
			<input v-model="itemprice" type="number" value="0.01" min="0.01" step="0.01"  />
			<button @click="editDone(itemId)">Done</button>
		</div>	
	</div>
	
</template>

<script>

export default {
	name: "GroceryList",
	data() {
		return {
			rerenderKey: 0,
			firstload: 1,
			productList: [],
			itemId: null,
			formvisible: 0,
			itemname: '',
			itemvalue: 0.01,
			itemprice: '',
		}
	},
	methods: {
		total(things) //TODO: This needs a change
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
				value: itemValue
			});
			this.productList + {
				name: itemName,
				value: Number(itemValue).toFixed(2),
				amount: 0
				};
		},
		deleteProduct(product) {
			this.$store.dispatch('deleteItem', product);
		},
		editProduct(product) {
			this.itemname = this.productList[product].name;
			this.itemprice = this.productList[product].value;
			this.itemId = product;
			this.formvisible = 1;
		},
		editDone(i) {
			this.$store.dispatch('editItem', {
				id: i, 
				name: this.itemname, 
				value: this.itemprice});
			this.productList[i] = {
				name: this.itemname, 
				value: Number(this.itemprice).toFixed(2),
				amount: 0
			};
			console.log(this.productList[i]);
			this.itemname = '';
			this.itemprice = 0.01;
			this.itemId = null
			this.formvisible = 0;
		},
		stopNan(value, amount) {
			if(isNaN(amount) == true) {
				amount = 0;
			}
			return Number(value * amount).toFixed(2)
		},
		fillProduct(products) {
			this.productList = JSON.parse(JSON.stringify(products));
			//console.log(this.productList);
		}
	},
	computed: {
		products() {
			const productlist = [...this.$store.getters.productList]
			this.fillProduct(productlist);
			return this.productList;
		}
	},
	watch: {

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

td{
	min-width: 120px;
}


</style>
