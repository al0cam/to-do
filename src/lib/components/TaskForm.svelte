<script lang="ts">
  import { Task } from '../../models/Task';
  import { taskStore } from '../stores/task-store';

  // let formData = {
  //   title: '',
  //   description: '',
  //   completion: false
  // }

  function submitForm(event: Event){
    event.preventDefault();
    taskStore.addTask(new Task(
      {
        title: this.title.value,
        description: this.description.value,
        completion: this.completion.checked
      }
    ));
  }
</script>

<div>
  <form on:submit|preventDefault={submitForm}>
    <label for="title">Title</label>
    <input type="text" id="title"/>
    <label for="description">Description</label>
    <input type="text" id="description"/>
    <label for="completion">Completion</label>
    <input type="checkbox" id="completion"/>
    <button type="submit">Submit</button>
  </form>
</div>

<style scoped>
 form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
 }

</style>
