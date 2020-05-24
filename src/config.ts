import RouteHelper from "@/routing/routeHelper";

// UI Configuration.
export const icons = {
  search: "far fa-search",
  info: "fal fa-info-circle",
  questionMark: "fal fa-question-circle",
  home: "fal fa-fa-chart-bar",
  admin: "fal fa-cog",
  angleDown: "fal fa-angle-down",
  angleUp: "fal fa-angle-up",
  upload: "fal fa-upload",
  download: "fal fa-download",
  print: "fal fa-print",
  share: "fal fa-share-alt",
  delete: "fal fa-trash",
  remove: "fal fa-times",
  edit: "fal fa-pen",
  undo: "fal fa-undo-alt",
  copy: "fal fa-copy",
  list: "fal fa-list",
  blocks: "fal fa-th-large",
  filter: "fal fa-filter",
  contextMenu: "fal fa-ellipsis-v",
  index: "fal fa-stream",
  indexItem: "fas fa-folders",
  user: "fal fa-user",
  addUser: "fal fa-user-plus",
  close: "fal fa-times",
  lock: "fal fa-lock-alt",
  unlock: "fal fa-lock-open-alt",
  add: "fal fa-plus",
  file: "fal fa-file",
  pause: "fas fa-pause",
  play: "fas fa-play",
  error: "fal fa-exclamation-triangle",
  warning: "fal fa-exclamation-circle",
  plus: "fal fa-plus",
  minus: "fal fa-minus",
  success: "fas fa-check",
  sortUp: "fal fa-sort-up",
  sortDown: "fal fa-sort-down",
  sortLeft: "fal fa-angle-left",
  sortRight: "fal fa-angle-right",
  rotateLeft: "fal fa-undo",
  rotateRight: "fal fa-redo",
  calculate: "fal fa-calculator",
  chevronUp: "far fa-chevron-up",
  chevronDown: "far fa-chevron-down",
  chevronRight: "far fa-chevron-right",
  zoomIn: "fal fa-search-plus",
  zoomOut: "fal fa-search-minus",
};

export const locale = {
  default: "de",
  available: ["en", "de"],
};

export const menuItems = [
  {
    title: "Home",
    icon: icons.home,
    route: () => RouteHelper.toHome(),
    shouldShow: () => true,
  },
];

export function getDefaultColors() {
  return {
    primary: "#008080",
    secondary: "#ffb200",
    background: "#FAFAFA",
    accent: "#ffb200",
    error: "#FF5252",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FFC107",
    publishing: "#008ea2",
  };
}
