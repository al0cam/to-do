import { writable } from "svelte/store";
import type { Task } from "../../models/Task";
import TaskService from '../services/task-service';

function createStore()
{
    const {subscribe, update} = writable<Task[]>([]);
    

    function addTask(task: Task)
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
        console.log(task);
        TaskService.update(task).then(() => update(tasks => tasks.map(t => t.id === task.id ? task : t)));
    }

    function getAllTasks()
    {
        TaskService.getAll().then(tasks => update(() => tasks));
    }

    function swapCompletion(task: Task)
    {
        task.completion = !task.completion;
        updateTask(task);
    }

    // maybe write function which sincs store with the backend and
    // sends everything that is different instead of sending the requests one by one
    // for efficiency reasons

    function syncStoreWithBackend()
    {
        let backendTasks = getAllTasks();
        // if task in backendList and not in storeList its removed
        // if task in storeList and not in backendList its added
        // if task in both lists but different its updated
        // thats mad inneficient but it works
        // instead there should be a list with changes only

    }

    return {addTask, getAllTasks, removeTask, updateTask, swapCompletion, subscribe};
}

export const taskStore = createStore();
