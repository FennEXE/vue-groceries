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
      <tr>
        <td>Brood</td>
        <td>1.00</td>
        <td><input type="number" /></td>
        <td>0</td>
      </tr>
      <tr>
        <td>Broccoli</td>
        <td>0.99</td>
        <td><input type="number" /></td>
        <td>0</td>
      </tr>
      <tr>
        <td>Krentebollen</td>
        <td>1.20</td>
        <td><input type="number" /></td>
        <td>0</td>
      </tr>
      <tr>
        <td>Noten</td>
        <td>2.99</td>
        <td><input type="number" /></td>
        <td>0</td>
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
