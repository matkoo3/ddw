<template>
  <h1>Kalkulačka</h1>
  <div class="container">
  <div> {{ number1 }} {{ number2 }} {{ result }}</div>
  <button v-for="button of buttons" v-bind:key="button" class="buttons">
    <cisla  v-bind:button="button" @buttonWasClicked="calcOperation"> 
    </cisla>
  </button>
  </div>
</template>


<script setup>
const buttons = ref([

  {value: '1'},
  {value: '2'},
  {value: '3'},

  {value: '4'},
  {value: '5'},
  {value: '6'},

  {value: '7'},
  {value: '8'},
  {value: '9'},
  {value: '0'},

  {value: '+', type: 'operator'},

  {value: '=', type: 'equals'},

])

const number1 = ref(" ");
const number2 = ref(" ");
const result = ref(0);
let clickBool = ref(false)
let clickBool2 = ref(false)

function calcOperation(button){ 
     
  if(clickBool.value == true){
    number2.value +=  button.value
  }else{
    number1.value += button.value
  }

  buttons.value.forEach( item =>{
    if(item.type == 'operator'){   //PLUS
      if(item.type == button.type){
        if(number1.value == ' '){
          clickBool.value = false;
          alert("Najprv zadaj hodnotu!")
        }else{
          clickBool.value = true;
        }
        if(clickBool.value == true && number1.value != ' ' && number2.value != ' '){
          alert("Neklikaj tolko")
        }     
      }
    }else if(item.type == 'equals'){
      if(item.type == button.type){
        if(clickBool.value == false){
          alert("Najprv zadaj druhe cislo az potom ziadaj vysledok!")
          clickBool2.value = false;
        }else{
          if(number2.value == ' '){
            alert("Najprv zadaj hodnotu!")
            clickBool2.value = false;
          }else{
            clickBool2.value = true;
            result.value = parseInt(number1.value) + parseInt(number2.value);
          }
        }
      }
    }
  })
}
</script>



<style>
* {
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

body {
  background: #EAEBEC;
}

.container {
  width: 400px;
  margin: auto;
}
.buttons {
  width: 25%;
  background: #425062;
  color: #fff;
  padding: 20px;
  display: inline-block;
  font-size: 25px;
  text-align: center;
  vertical-align: middle;
  margin-right: -4px;
  border-right: solid 2px #3C4857;
  border-bottom: solid 2px #3C4857;
}
.buttons:hover{
  transform: scale(1.1);
}
</style>