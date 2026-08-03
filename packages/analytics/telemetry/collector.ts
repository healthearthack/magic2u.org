export interface MetricEvent {
  name: string;
  value: number;
  timestamp: number;
}

export class TelemetryCollector {
  private events: MetricEvent[] = [];

  collect(name: string, value: number) {
    this.events.push({
      name,
      value,
      timestamp: Date.now(),
    });
  }

  getEvents() {
    return this.events;
  }
}

