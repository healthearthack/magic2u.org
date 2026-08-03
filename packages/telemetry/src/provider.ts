import { TelemetryEvent, TelemetryPayload } from "./events";

type TelemetryHandler = (
  event: TelemetryEvent,
  payload?: TelemetryPayload
) => void;

let handler: TelemetryHandler = (event, payload) => {
  console.log("[Magic2U Telemetry]", event, payload);
};

export function setTelemetryHandler(customHandler: TelemetryHandler) {
  handler = customHandler;
}

export function track(event: TelemetryEvent, payload?: TelemetryPayload) {
  handler(event, payload);
}
