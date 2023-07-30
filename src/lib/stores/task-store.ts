import { writable } from "svelte/store";
import type { Task } from "../../models/Task";

function createStore()
{
    const {subscribe, update} = writable<Task[]>([]);
    

    function add(task: Task)
    {
        update(tasks => [...tasks, task]);
    }

    function removeTask(task: Task)
    {
        update(tasks => tasks.filter(t => t !== task));
    }

    function updateTask(task: Task)
    {
        update(tasks => tasks.map(t => t.id === task.id ? task : t));
    }

    return {add, removeTask, updateTask, subscribe};
}

export const taskStore = createStore();
