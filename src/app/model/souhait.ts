export class Souhait {
  constructor(
    public label?: string,
    public participant?: string
  ) {
    this.label = label || "";
    this.participant = participant || "";
  }
}
