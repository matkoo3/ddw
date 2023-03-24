<script setup>
const id = useRoute().params.myClass
const students = useData().studentsInitialValue.value
const studentsofclass = students.filter(item => item.class == id)

const {removeclass}=useData()
</script>

<template>
  <div>
    <h1>ZOZNAM LUDI</h1>
    <section class="list">
      <section v-for="student of studentsofclass" v-bind:key="student" class="card-container">
			  <student v-bind:student="student"></student>
      </section>
      <span  class="btn" v-on:click="removeclass(classes)">Remove</span>
    </section>
  </div>
</template>

<style>
  body {
		font-size: 10px;	
		font-family: 'Oswald', sans-serif;
		padding: 1rem;
	}
	main {
		display: flex;
		flex-direction: column;
		gap: .75rem;
	}
  .list {
		display: flex;
		gap: 20px;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: stretch;
		font-size: 1.2rem;
	}
  .card-container {
		flex-grow: 1;
	}
  .btn{
    color: black;
    width: auto;
    flex-grow: 1;
    text-align: center;
    transition: .5s;
    font-size: 1rem;
    cursor: pointer;;
  }
</style>
