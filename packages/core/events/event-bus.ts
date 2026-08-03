type Listener = (payload: any) => void;

const listeners: Record<string, Listener[]> = {};

export function emit(event: string, payload: any) {
  listeners[event]?.forEach(fn => fn(payload));
}

export function on(event: string, listener: Listener) {
  listeners[event] = listeners[event] || [];
  listeners[event].push(listener);
}
