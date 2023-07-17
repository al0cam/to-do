<script lang="ts">
import axios from 'axios';
import { Task } from './models/Task';

let tasks: Task[] = [];

function getAllTasks(){
  axios.get('http://localhost:3000/task')
  .then((response) => {
    response.data.forEach(element => {
      tasks = [...tasks, new Task(element)]
    });
  })
  .catch((error) => {
    console.log(error);
  });
}

</script>

<main>
  
  {#each tasks as task}
    <div>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
    </div>
    
  {/each}
 
  <button on:click={getAllTasks}> mr white je gay </button>
</main>

<style>

</style>
