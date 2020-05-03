export default class Actor {
  public readonly actorId: number;
  public readonly userId: number;

  constructor(actorId: number, userId?: number) {
    this.actorId = actorId;
    this.userId = userId;
  }
}
