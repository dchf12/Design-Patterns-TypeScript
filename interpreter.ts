class Context {}
export interface AbstractExpression {
  interpret(context: Context): void;
}

export class TerminalExpression implements AbstractExpression {
  public interpret(context: Context): void {
    console.log('`interpret` method of TerminalExpression is being called!');
  }
}

export class NonterminalExpression implements AbstractExpression {
  public interpret(context: Context): void {
    console.log('`interpret` method of NonterminalExpression is being called!');
  }
}
export function show(): void {
  const context: Context = new Context();
  const list = [];

  list.push(new NonterminalExpression());
  list.push(new NonterminalExpression());
  list.push(new NonterminalExpression());
  list.push(new TerminalExpression());
  list.push(new NonterminalExpression());
  list.push(new NonterminalExpression());
  list.push(new TerminalExpression());
  list.push(new TerminalExpression());

  for (let i = 0; i < list.length; i++) {
    list[i].interpret(context);
  }
}
show();
