<template>
  <div>
    <input type="checkbox" :id="id" :checked="isDone" />
<!--    <label for="todo-item"> My TODO item </label>-->
    <label :for="id"> {{label}} {{id}}</label>
  </div>
</template>



<script>
// import uniqueId from 'lodash.uniqueid'
export default {
  name: "ToDoItem",
  props: {
    label: {required:true, type:String},
    done: {default: false, type:Boolean},
    id: {required: true, type:String}
  },
  // adds extra data, kind of like context["extras"] in django
  data() {
    return {
      isDone: this.done,
      // id: uniqueId('todo-')
    }
    // return {}
  }

}
</script>
