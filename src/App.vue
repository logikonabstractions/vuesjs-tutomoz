<template>
  <div id="app">
<!--  <div id="">-->
    <h1>TODO list</h1>
<!--    <to-do-form v-on="todo_added" ></to-do-form>-->
    <to-do-form @todo-added="addToDo"></to-do-form>
    <ul>
      <li v-for="item in ToDoItems" :key="item.id">
        <to-do-item :label="item.label" :done="item.done" id="item.id"></to-do-item>
      </li>
    </ul>
  </div>
</template>
<style>
</style>
<script>
  import '@/css/mainstyle.css';
  import uniqueId from 'lodash.uniqueid'
  import ToDoItem from './components/ToDoItem';
  import ToDoForm from './components/ToDoForm';
  export default {
    name: 'app',
    components: {
      ToDoItem,
      ToDoForm
    },
    data() {
      return {
        ToDoItems: [
          { id:uniqueId('todo-'), label: 'Learn Vue', done: false },
          { id:uniqueId('todo-'), label: 'Create a Vue project with the CLI', done: true },
          { id:uniqueId('todo-'), label: 'Have fun', done: true },
          { id:uniqueId('todo-'), label: 'Create a to-do list', done: false }
        ]
      };
    },
    methods: {
      addToDo(toDoLabel) {
        console.log('To-do added', toDoLabel);
        console.log(toDoLabel);
        this.ToDoItems.push({id:uniqueId('todo-'), label: toDoLabel, done: false})
      }
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
