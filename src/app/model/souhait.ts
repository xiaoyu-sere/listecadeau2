export class Souhait {
  constructor(
    public label?: string,
    public participant?: string,
    public reserved?: boolean
  ) {
    this.label = label || "";
    this.participant = participant || "";
    this.reserved = reserved || false;
  }
}
