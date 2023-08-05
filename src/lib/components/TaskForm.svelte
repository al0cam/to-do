<script lang="ts">
  import { Task } from '../../models/Task';
  import TaskService from '../services/task-service';
  import { taskStore } from '../stores/task-store';

  let title;
  let description;

  TaskService.getAll();

  function submitForm(event: Event){
    event.preventDefault();
    TaskService.add(new Task({title, description, completion: false}))
    .then((task) => {
      taskStore.add(task);
    })
    .catch((error) => {
      console.log(error);
    });
  }

</script>


<template>
  <form on:submit|preventDefault={submitForm}>
    <label for="title">Title</label>
    <input type="text" id="title" bind:value={title} />
    <label for="description">Description</label>
    <input type="text" id="description" bind:value={description} />
    <button type="submit">Submit</button>
  </form>
</template>
