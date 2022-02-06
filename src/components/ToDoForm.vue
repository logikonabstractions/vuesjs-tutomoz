<template>
  <!--.prevent basically acts as kind of a decorator for e.preventDefault(); within the target method -->
  <form @submit.prevent="onSubmit">
    <h2>
      <label for="new-todo-input" class="label__lg">What needs to be done?</label>
    </h2>
    <input type="text" class="input__lg" id="new-todo-input" name="new-todo" autocomplete="off" v-model.lazy.trim="label">
    <button type="submit" class="btn__primary btn__lg">Add</button>
  </form>

</template>
<script>
  export default {
    // name:"ToDoForm",
    methods: {
      onSubmit(e){              // one way to prevent default submit/behavior. Note: this is redundant with @submit.prevent above
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