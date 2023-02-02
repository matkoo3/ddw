<template>
    <main>
      <h1>Zoznam ľudí</h1>
      <button class="deleteAll" v-if="bool != true" v-on:click="DeleteButton">Delete</button>
      <section class="list">
          <section v-for="person of persons" v-bind:key="person" class="card-container">
        <personalCard @editWasClicked="editPerson" @submitWasClicked="editPerson"  @removeWasClicked="removePerson" v-bind:person="person"></personalCard>
      </section>
      </section>
      <input v-show="bool2 != false" class="form__input" v-model="name" placeholder="Name">
    </main>
</template>

<script setup>

let initialPersons = [
        {
            fname: "Magdalena",
            lname: "Mikulova",
            birthday: 2000,
        },
        {
            fname: "Mirka",
            lname: "Makovicova",
            birthday: 1900,
        },
        {
            fname: "Hugo",
            lname: "Hugovic",
            birthday: 2017,
        },
        {
            fname: "Miki",
            lname: "Hric",
            birthday: 2003,
        },
        {
            fname: "Andrea",
            lname: "Veresova",
            birthday: 1982,
        },
        {
            fname: "Nora",
            lname: "Mojsejova",
            birthday: 2011,
        },
    ]

let persons = ref(initialPersons);

    let bool = ref(false);

    const DeleteButton = () => {
        bool.value = true;
        persons.value = [];
        name.value = ""
    }

const removePerson = (personShouldBeRemoved) => {

		persons.value = persons.value.filter(item => item!=personShouldBeRemoved) //Navratova hodnota funkcie vo filtri je bool(false, true)
				//Vytvorime nove pole ktore chceme vymazat resp. osobu ktoru chceme dat prec
	}
	let inputBool = ref(false)

	function clickMe() {
   inputBool.value = true;
}

const editPerson = (personShouldBeEdited) =>{
	inputBool.value = false;
	persons.value.forEach(item =>{
		if(item == personShouldBeEdited){
			item.fname = name.value
	}
	 })
	name.value = ""; 	 
}
	let name = ref("")

</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;500;600;700&display=swap');
	*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
  font-size: 62,5%;
}

*{

	font-family: 'Oswald', sans-serif;
}

	body {
		font-size: 10px;	
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
	h1{
		text-align: center;
		font-size: 35px;
		

	}
	.card {
		border-radius: 10px;
		background: rgba(255,255,255, 1);
		border: 1px solid #bbb;
		color: #444;
		box-shadow: 0 3px 5px rgba(0,0,0,.2);
		border-top-width: 5px;
		border-top-color: dodgerblue;
		transition: transform 0.2s ease-in-out;
		box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
	}
	.card.adult {
		border-top-color: orange;
		border-radius: 10px;
	}
	.card:hover {
		transform: scale(1.1);
	}
	.deleteAll{
	
		width: 120px;
		height: 60px;
		border-radius: 10px;
		box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;;
		color: black;
		font-size: 18px;
		background-color: red;
		padding: 6px;
		transition: .4s ease-in-out;
		margin-top: 4px;
	}

	.deleteAll:hover {
		transform: scale(1.1);
	}

.form__input {

  color: rgb(0, 0, 0);
  font-size: 1.2rem;
  padding: 1.1rem 2rem;
  max-width: 100%;
  background-color: rgb(255, 255, 255);
  border: 1px solid black;
  width: 15%;
  display: block;
  transition: all 0.3s;
}
.btn {
        padding: .75rem 2rem;
        color: white;
        width: 50px;
        flex-grow: 1;
        text-align: center;
        transition: .5s;
        font-size: 1rem;
    }   

    .btn.submit {
        width: 100px;
        background: rgb(0, 0, 0);
    }
	.btn:hover {
        opacity: .3;
        cursor: pointer;;
    }
</style>