import { ArcSlider } from "../ArcSlider";
import { BarChart } from "../BarChart";
import { Confetti } from "../Confetti";
import DonutChartContainer from "../DonutChart";
import { ExpoPulse } from "../ExpoPulse";

import { LineChart } from "../LineChart";
import { MorphingCircle } from "../MorphingCircle";
import { VitalSignMonitor } from "../VitalSignMonitor";
import { WaveMeter } from "../WaveMeter";

import { Screen } from "../../Utils/Screen";
import { ChasingBubbles } from "../ChasingBubbles/ChasingBubbles";
import { BendingCircle } from "../BendingCircle/BendingCircle";

export const AnimationScreenNames = {
  BENDING_CIRCLE: "Bending Circle 🛟",
  CHASING_BUBBLES: "Chasing Bubbles 🫧",
  WAVE_METER: "Wave Meter 🌊",
  LINE_CHART: "Line Chart 📈",
  BAR_CHART: "Bar Chart 📊",
  DONUT_CHART: "Donut Chart 🍩",
  MORPHING_CIRCLE: "Morphing Circle ⭕️",
  CONFETTI: "Confetti 🎊",
  TOUCH_INTERACTIONS: "Touch Interactions 👍",
  EXPO_PULSE: "Expo Pulse 💙",
  VITAL_SIGN_MONITOR: "Vital Sign Monitor ❤️",
};

export const allScreens: Screen[] = [
  {
    name: AnimationScreenNames.BENDING_CIRCLE,
    component: BendingCircle,
  },
  {
    name: AnimationScreenNames.CHASING_BUBBLES,
    component: ChasingBubbles,
  },
  {
    name: AnimationScreenNames.WAVE_METER,
    component: WaveMeter,
  },
  {
    name: AnimationScreenNames.DONUT_CHART,
    component: DonutChartContainer,
  },
  {
    name: AnimationScreenNames.LINE_CHART,
    component: LineChart,
  },
  {
    name: AnimationScreenNames.BAR_CHART,
    component: BarChart,
  },
  {
    name: AnimationScreenNames.MORPHING_CIRCLE,
    component: MorphingCircle,
  },
  {
    name: AnimationScreenNames.CONFETTI,
    component: Confetti,
  },
  {
    name: AnimationScreenNames.TOUCH_INTERACTIONS,
    component: ArcSlider,
  },
  {
    name: AnimationScreenNames.EXPO_PULSE,
    component: ExpoPulse,
  },
  {
    name: AnimationScreenNames.VITAL_SIGN_MONITOR,
    component: VitalSignMonitor,
  },
];
