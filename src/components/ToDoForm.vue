<template>
  <!--.prevent basically acts as kind of a decorator for e.preventDefault(); within the target method -->
  <form @submit.prevent="onSubmit">
    <label for="new-todo-input">What needs to be done?</label>
    <input type="text" id="new-todo-input" name="new-todo" autocomplete="off" v-model.lazy.trim="label">
    <button type="submit">Add</button>
  </form>

</template>
<script>
  export default {
    // name:"ToDoForm",
    methods: {
      onSubmit(e){              // one way to prevent default submit/behavior
        e.preventDefault();
        // console.log("form submitted with label: ", this.label)
        if (this.label === "") {return;}
        this.$emit("todo-added", this.label)
        this.label = "";
      }
    },

    data(){
      return {
        label: ""
      }
    }

  };
</script>