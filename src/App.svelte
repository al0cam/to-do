<script lang="ts">
  import { onMount } from 'svelte';
  import { taskStore } from './lib/stores/task-store';
  import TaskForm from './lib/components/TaskForm.svelte';

  onMount(() => {
    taskStore.getAllTasks();
  });

</script>

<main>
  <div>
    <TaskForm></TaskForm>
  </div>
  
  {#each $taskStore as task}
  <div class="item-list">
    <h1>{task.title}</h1>
    <div hidden>
      {task.description}
    </div>
    <input type="checkbox" checked={task.completion} on:click={() => taskStore.swapCompletion(task)}/>
  </div>
  {/each}
  
</main>

<style>
.item-list{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 100%;
}
</style>
