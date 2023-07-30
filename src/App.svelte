<script lang="ts">
    import { onMount } from 'svelte';


  import TaskService from './lib/services/task-service';
  import { Task } from './models/Task';

  let tasks: Task[] = [];

  function getAllTasks(){
    TaskService.getAll().then((tasksFetched) => {
      tasks = tasksFetched as Task[];
    })
    .catch((error) => {
      console.log(error);
    });
  }

  onMount(() => {
    getAllTasks();
  });

</script>

<main>
  
  {#each tasks as task}
    <div>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <p>{task.completion}</p>
    </div>
    
  {/each}
<!--  
  <button on:click={getAllTasks}> mr white je gay </button> -->
</main>

<style>

</style>
