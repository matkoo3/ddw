const list = reactive({array:[
  {
    id:1,
    title:"Article A",
    text:"toto je a ako anakonda",
  },
  {
    id:2,
    title:"Article B",
    text:"toto je b ako bizon",
  },
  {
    id:3,
    title:"Article C",
    text:"toto je C ako cukrovka",
  },
]})

/*const delete=()=>{

}*/

const save=()=>{

}

export const useArticles = () => {
  return {list, save/*, delete*/}
}
