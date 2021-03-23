import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowAltCircleRight,
  faArrowLeft,
  faArrowRight,
  faBookOpen,
  faBookReader,
  faCheckSquare,
  faPlayCircle,
  faTasks,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";

export const activities: {
  title: string;
  type: string;
  icon: IconDefinition;
}[] = [
  {
    type: "materials",
    title: "Learning Materials",
    icon: faBookOpen,
  },
  {
    type: "video",
    title: "Video",
    icon: faPlayCircle,
  },
  { type: "live", title: "Live Lesson", icon: faVideo },
  { type: "assignment", title: "Assignment", icon: faTasks },
];

export const selectIcon = (type: string) => {
  const typeSelected = activities.find((activity) => activity.type === type);
  if (typeSelected) return typeSelected.icon;
  else return faPlayCircle;
};
