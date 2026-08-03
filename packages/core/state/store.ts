type State = Record<string, any>;

let state: State = {};

export function setState(key: string, value: any) {
  state[key] = value;
}

export function getState(key: string) {
  return state[key];
}
