export class Task {
    id: number;
    title: string;
    description: string;
    done: boolean;
    createAt: Date;
    updateAt: Date;
    constructor(object?: any) {
        if (object) {
            this.id = object.id;
            this.title = object.title;
            this.description = object.description;
            this.done = object.done;
            this.createAt = object.createAt;
            this.updateAt = object.updateAt;
        }
    }

    swapState() {
        this.done = !this.done;
    }
}