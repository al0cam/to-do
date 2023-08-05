import { writable } from "svelte/store";
import type { Task } from "../../models/Task";
import TaskService from '../services/task-service';

function createStore()
{
    const {subscribe, update} = writable<Task[]>([]);
    

    function add(task: Task)
    {
        // update(tasks => [...tasks, task]);
        TaskService.add(task).then(task => update(tasks => [...tasks, task]));
    }

    function removeTask(task: Task)
    {
        // update(tasks => tasks.filter(t => t !== task));
        TaskService.remove(task).then(() => update(tasks => tasks.filter(t => t !== task)));
    }

    function updateTask(task: Task)
    {
        // update(tasks => tasks.map(t => t.id === task.id ? task : t));
        TaskService.update(task).then(() => update(tasks => tasks.map(t => t.id === task.id ? task : t)));
    }

    function getAllTasks()
    {
        TaskService.getAll().then(tasks => update(() => tasks));
    }

    // maybe write function which sincs store with the backend and
    // sends everything that is different instead of sending the requests one by one
    // for efficiency reasons

    return {add, removeTask, updateTask, subscribe};
}

export const taskStore = createStore();
