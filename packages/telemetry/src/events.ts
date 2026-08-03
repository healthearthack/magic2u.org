export type TelemetryEvent =
  | "component_rendered"
  | "button_clicked"
  | "theme_changed"
  | "accessibility_violation"
  | "token_updated";

export interface TelemetryPayload {
  component?: string;
  variant?: string;
  metadata?: Record<string, any>;
}
