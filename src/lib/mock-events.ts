export type EventCategory = "delivery" | "movement" | "system";

export type DemoEvent = {
  id: string;
  time: string;
  minute: number;
  category: EventCategory;
  title: string;
  camera: string;
  description: string;
  isSignal?: boolean;
};

/** Entirely fictional event data. No live video, inference, or camera access. */
export const demoEvents: DemoEvent[] = [
  { id: "evt-01", time: "09:00:12", minute: 0.2, category: "movement", title: "Motion detected", camera: "CAM 02 · Loading bay", description: "Movement registered near the loading bay." },
  { id: "evt-02", time: "09:01:25", minute: 1.42, category: "system", title: "Stream synchronized", camera: "CAM 01 · Entrance", description: "Video stream synchronized with the local event log." },
  { id: "evt-03", time: "09:02:10", minute: 2.17, category: "movement", title: "Entrance activity", camera: "CAM 01 · Entrance", description: "Activity detected in the entrance area." },
  { id: "evt-04", time: "09:03:04", minute: 3.07, category: "delivery", title: "Courier approaches", camera: "CAM 01 · Entrance", description: "A courier appears near the entrance. No drop-off yet." },
  { id: "evt-05", time: "09:04:08", minute: 4.13, category: "system", title: "Quality warning", camera: "CAM 03 · Corridor", description: "Temporary video-quality warning. The stream recovers." },
  { id: "evt-06", time: "09:05:20", minute: 5.33, category: "movement", title: "Corridor movement", camera: "CAM 03 · Corridor", description: "Movement registered in the corridor." },
  { id: "evt-07", time: "09:06:40", minute: 6.67, category: "delivery", title: "Package dropped off", camera: "CAM 01 · Entrance", description: "The simulated package is left in the designated delivery area.", isSignal: true },
  { id: "evt-08", time: "09:07:15", minute: 7.25, category: "system", title: "Index updated", camera: "CAM 01 · Entrance", description: "The local demo event index has been refreshed." },
  { id: "evt-09", time: "09:08:35", minute: 8.58, category: "movement", title: "Person exits", camera: "CAM 01 · Entrance", description: "Someone leaves the entrance area." },
  { id: "evt-10", time: "09:09:48", minute: 9.8, category: "system", title: "Archive checkpoint", camera: "CAM 02 · Loading bay", description: "Simulated archival checkpoint logged." },
  { id: "evt-11", time: "09:10:12", minute: 10.2, category: "movement", title: "Loading bay movement", camera: "CAM 02 · Loading bay", description: "Additional motion registered in the loading bay." },
  { id: "evt-12", time: "09:11:11", minute: 11.18, category: "system", title: "Latency nominal", camera: "CAM 03 · Corridor", description: "All simulated sources report nominal latency." },
];

export const targetEvent = demoEvents.find((event) => event.isSignal)!;

export const categoryLabels: Record<EventCategory, string> = {
  delivery: "Delivery",
  movement: "Movement",
  system: "System",
};
