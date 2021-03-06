import TaskSortOrder from 'listlab-api/TaskSortOrder';

export enum TaskMoveOrderType {
  DUE_ORDER = 'due_order',
  PARENT_ORDER = 'parent_order',
};

export enum TaskMoveRelativePosition {
  BEFORE,
  AFTER
};

type TaskMoveParams = {
  parent?: number,
  before?: number,
  after?: number,
  type: TaskMoveOrderType
};

export const taskMoveOrderTypeFromString = (orderTypeStr?: string) => {
  if (orderTypeStr == null) {
    return null;
  }
  switch (orderTypeStr) {
    case 'parent_order':
      return TaskMoveOrderType.PARENT_ORDER;
    case 'due_order':
      return TaskMoveOrderType.DUE_ORDER;
    default:
      throw Error(`orderType could not be parsed from ${orderTypeStr}`);
  }
};

export const taskSortOrderToMoveType = (sortOrder: TaskSortOrder) => {
  if (sortOrder === TaskSortOrder.DUE) {
    return TaskMoveOrderType.DUE_ORDER;
  }
  if (sortOrder === TaskSortOrder.PARENT_ORDER) {
    return TaskMoveOrderType.PARENT_ORDER;
  }
  return null;
};

export default TaskMoveParams;