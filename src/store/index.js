import { createStore  } from 'vuex'

export default  createStore({
  state: {
    todoList :  JSON.parse(localStorage.getItem("VUE-Tasks")) || [],  
  },
  mutations: {
    saveTodos(state){
      localStorage.setItem("VUE-Tasks" , JSON.stringify(state.todoList)); 
    },
    addTodo(state , text){
      if(text != ""){
        state.todoList.push({
          title : text,
          done : false , 
          deleted : false
        })  
        localStorage.setItem("VUE-Tasks" , JSON.stringify(state.todoList)) 
      }
   
    },

    deleteTodo(state , index){
      state.todoList.splice(index , 1)
      localStorage.setItem("VUE-Tasks" , JSON.stringify(state.todoList)) 
    },
    doneTodo(state , index){
      state.todoList.splice(index , 1)
      localStorage.setItem("VUE-Tasks" , JSON.stringify(state.todoList))
     
    },

  },

  actions: {
   
  },
  getters: {
   
  },
 
 
  modules: {

  }
  
})
