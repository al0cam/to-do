export class Task {
    id: number;
    title: string;
    description: string;
    completion: boolean;
    createAt: Date;
    updateAt: Date;
    deletedAt: Date;
    constructor(object?: any) {
        if (object) {
            this.id = object.id;
            this.title = object.title;
            this.description = object.description;
            this.completion = object.completion;
            this.createAt = object.createAt;
            this.updateAt = object.updateAt;
            this.deletedAt = object.deletedAt;
        }
    }

    swapState() {
        this.completion = !this.completion;
    }
}