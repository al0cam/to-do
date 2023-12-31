import axios from "axios";
import type { Task } from "../../models/Task";

export default class TaskService{
    private static readonly baseUrl = "http://localhost:3000/task";

    public static async getAll(){
        const response = await axios.get<Task[]>(this.baseUrl);
        return response.data;
    }

    public static async add(task: Task){
        const response = await axios.post<Task>(this.baseUrl, task);
        return response.data;
    }

    public static async remove(task: Task){
        await axios.delete(`${this.baseUrl}/${task.id}`);
    }

    public static async update(task: Task){
        await axios.patch(`${this.baseUrl}/${task.id}`, task);
    }
}