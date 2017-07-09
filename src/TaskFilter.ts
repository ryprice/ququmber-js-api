import FuzzyTimeRange from "./FuzzyTimeRange";

export default class TaskFilter {
    public readonly listId: number;
    public readonly range: FuzzyTimeRange;
    public readonly parentId: number;
    public readonly completed: boolean;
    public readonly query: string;
    public readonly inProgress: boolean;

    constructor(init?: {[P in keyof TaskFilter]?: TaskFilter[P]}) {
        if (init) {
            this.listId = init.listId;
            this.range = init.range;
            this.parentId = init.parentId;
            this.completed = init.completed;
            this.query = init.query;
            this.inProgress = init.inProgress;
        }
    }

    public setRange(range: FuzzyTimeRange): TaskFilter {
        return new TaskFilter({
            ...(this as TaskFilter),
            range
        });
    }
}
