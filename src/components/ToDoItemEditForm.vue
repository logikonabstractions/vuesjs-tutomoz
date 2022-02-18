<template>

<!--  first we need a form -->
<!--then likely some buttons: cancel, save -->
  <form class="stack-small" @submit.prevent="onSubmit">
    <div>
      <label class="edit-label">Edit todo: {{label}}</label>
      <input type="text" :id="id" autocomplete="off" v-model.lazy.trim="newLabel">
    </div>
    <div class="btn-group">
      <button class="btn" type="button" @click="onCancel">
        cancel
        <span class="visually-hidden">editing {{label}}</span>
      </button>
      <button class="btn btn__primary" type="button" @click="onSubmit" >
        save
        <span class="visually-hidden">edit for {{label}}</span>
      </button>
    </div>
  </form>

</template>

<script>
export default {
  name: "ToDoItemEditForm",
  props: {
    label: {required:true, type:String},
    done: {default: false, type:Boolean},
    id: {required: true, type:String}
  },
  data() {
    return {
      newLabel: this.label,
    }
  },
  methods: {
    onSubmit() {
      if (this.newLabel && this.newLabel !==this.label) {
        this.$emit("item-edited", this.newLabel);
      }
    },
    onCancel(){
      this.$emit("edit-cancelled");
    }
  }

}
</script>

<style scoped>

  .edit-label {
    font-family: Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #0b0c0c;
    display: block;
    margin-bottom: 5px;
  }
  input {
    display: inline-block;
    margin-top: 0.4rem;
    width: 100%;
    min-height: 4.4rem;
    padding: 0.4rem 0.8rem;
    border: 2px solid #565656;
  }
  form {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  form > * {
    flex: 0 0 100%;
  }

</style>