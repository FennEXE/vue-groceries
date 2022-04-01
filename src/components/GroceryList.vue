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
 !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : 0" v-on:change="amount(i, productList[i].amount)"/></td>
				<td>{{stopNan(productList[i].value, productList[i].amount, i)}}</td>
				<td><button @click="deleteProduct(i)">Delete</button><button @click="editProduct(i)">Edit</button></td>
			</tr>
			<tr>
				<th colspan="3"></th>
				<th>Totaal</th>
			</tr>
			<tr>
				<td colspan="3"></td>
				<td>{{total()}} </td>
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
			productList: [],
			itemId: null,
			formvisible: 0,
			subtotal: [],
			itemname: '',
			itemvalue: 0.01,
			itemprice: '',
			itemamount: 0,
		}
	},
	methods: {
		amount(id, i) {
			this.$store.dispatch('changeAmount', {
				id: id,
				amount: i
			})
		},
		total()
		{
			const math = this.productList.reduce((total, product) => (product.value*product.amount) + total, 0);
			return Number(math).toFixed(2);
		},
		newthing(itemName, itemValue) {
			this.$store.dispatch('addItem', {
				name: itemName, 
				value: itemValue
			});
		},
		deleteProduct(product) {
			this.$store.dispatch('deleteItem', product);
		},
		editProduct(product) {
			this.itemname = this.productList[product].name;
			this.itemprice = this.productList[product].value;
			this.itemamount = this.productList[product].amount;
			this.itemId = product;
			this.formvisible = 1;
		},
		editDone(i) {
			this.$store.dispatch('editItem', {
				id: i, 
				name: this.itemname, 
				value: this.itemprice});
				this.$set(this.productList[i], 'amount', this.itemamount);
				this.$set(this.productList[i], 'name', this.itemname);
				this.$set(this.productList[i], 'value', Number(this.itemprice).toFixed(2));
				// this.productList[i] += {

				// 	value: Number(this.itemprice).toFixed(2),
				// };
				
			
			this.itemname = '';
			this.itemprice = 0.01;
			this.itemId = null
			this.formvisible = 0;
		},
		stopNan(value, amount, i) {
			if(isNaN(amount) == true) {
				amount = 0;
			}
			this.subtotal[i] = Number(value * amount).toFixed(2)
			return Number(this.subtotal[i]).toFixed(2);
		},
		fillProduct(products) {
			this.productList = JSON.parse(JSON.stringify(products));
		}
	},
	computed: {
		products() {
			const productlist = [...this.$store.getters.productList]
			this.fillProduct(productlist);
			return this.productList;
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

td{
	min-width: 120px;
}


</style>
