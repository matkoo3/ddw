<script setup>
const id = useRoute().params.id
const articles = useArticles().list.array
const article = articles.filter(item => item.id == id)[0]


const {deleteById, editById} = useArticles();

const editMode = ref(false);

const handleEditWasClicked = () =>{
  editMode.value = true;
}

const handleSaveWasClicked = () =>{
  editMode.value = false
  editById(editedTitle.value, editedText.value,  id)
}

const handleCancelWasClicked = () =>{
  editMode.value = false
}

const editedTitle = ref(article.title);

const editedText = ref(article.text);
</script>

<template>
  <div class="body">
    <MyHeader></MyHeader>
    <div class="clanok">
      <h1 class="nadpis" v-if="!editMode">{{article.title}}</h1>
      <textarea class="nadpis" v-else v-model="editedTitle" />
      <div v-if="!editMode">{{article.text}}</div>
      <div class="text" v-else><textarea class="text-input" v-model="editedText" /></div>
      <button v-on:click="deleteById(id)" v-if="!editMode" @click="$router.go(-1)">Delete</button>
      <button v-if="!editMode" @click="handleEditWasClicked">Edit</button>
      <div v-else>
        <button  @click="handleSaveWasClicked">save</button>
        <button  @click="handleCancelWasClicked">cancel</button>
      </div>
      
    </div>
    <MyFooter></MyFooter>
  </div>
  
</template>

<style scoped>
.body {
	font-family: "DotGothic16", serif;
	letter-spacing: 0.025em;
	line-height: 1.5;
	min-height: 100vh;
	color: #393232;
	background-color: #ffffff;
}
.nadpis{
  font-size: 2.5em;
	font-weight: 700;
}
.text{
  width: 100%;
}
.text-input{
  height: 200px;
  width: 100%;
  resize: none;
}
.clanok{
  width: 90%;
	max-width: 800px;
	margin-left: auto;
	margin-right: auto;
	margin-top: 10vh;
	margin-bottom: 10vh;
	padding: 2em;
	background-color: #c0c0c0;
	border-left: 2px solid #eee;
	border-top: 2px solid #eee;
	border-right: 2px solid #444;
	border-bottom: 2px solid #444;
	font-size: 1rem;
	position: relative;
}
</style>
