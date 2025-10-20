import React from "react";

// To fix the crash, all icons have been replaced with a new, valid set,
// primarily from the Lucide icon library, as requested by the user.

export const Truck: React.FC<React.SVGProps<SVGSVGElement>> = (props) =>
  React.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
    },
    React.createElement("path", {
      d: "M5 18H3c0-1.1.9-2 2-2v4c-1.1 0-2-.9-2-2Z",
    }),
    React.createElement("path", { d: "M5 18h10" }),
    React.createElement("path", {
      d: "M19 18h2c.6 0 1-.4 1-1v-3.6c0-.8-.7-1.4-1.4-1.4H18",
    }),
    React.createElement("path", {
      d: "M18 18h-3s-1-1.5-1-3V7.5c0-.8.7-1.5 1.5-1.5S17 6.7 17 7.5V13",
    }),
    React.createElement("circle", { cx: "6", cy: "18", r: "2" }),
    React.createElement("circle", { cx: "17", cy: "18", r: "2" })
  );

export const Home: React.FC<React.SVGProps<SVGSVGElement>> = (props) =>
  React.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
    },
    React.createElement("path", {
      d: "m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
    }),
    React.createElement("polyline", { points: "9 22 9 12 15 12 15 22" })
  );

export const ArrowUpCircle: React.FC<React.SVGProps<SVGSVGElement>> = (props) =>
  React.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
    },
    React.createElement("circle", { cx: "12", cy: "12", r: "10" }),
    React.createElement("path", { d: "m16 12-4-4-4 4" }),
    React.createElement("path", { d: "M12 16V8" })
  );

export const ArrowDownCircle: React.FC<React.SVGProps<SVGSVGElement>> = (
  props
) =>
  React.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
    },
    React.createElement("circle", { cx: "12", cy: "12", r: "10" }),
    React.createElement("path", { d: "M12 8v8" }),
    React.createElement("path", { d: "m8 12 4 4 4-4" })
  );

export const ChevronDown: React.FC<React.SVGProps<SVGSVGElement>> = (props) =>
  React.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
    },
    React.createElement("path", { d: "m6 9 6 6 6-6" })
  );

export const Tractor: React.FC<React.SVGProps<SVGSVGElement>> = (props) =>
  React.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      ...props,
    },
    React.createElement("path", {
      d: "M19,12H17V10H15V12H5A2,2 0 0,0 3,14V17H5A3,3 0 0,0 8,20A3,3 0 0,0 11,17H15A3,3 0 0,0 18,20A3,3 0 0,0 21,17H23V14L19,12M8,18.5A1.5,1.5 0 0,1 6.5,17A1.5,1.5 0 0,1 8,15.5A1.5,1.5 0 0,1 9.5,17A1.5,1.5 0 0,1 8,18.5M18,18.5A1.5,1.5 0 0,1 16.5,17A1.5,1.5 0 0,1 18,15.5A1.5,1.5 0 0,1 19.5,17A1.5,1.5 0 0,1 18,18.5M17.5,8C17.5,6.9 16.6,6 15.5,6H13V4H10V6H8L5,9H17.5V8Z",
    })
  );

export const Wheat: React.FC<React.SVGProps<SVGSVGElement>> = (props) =>
  React.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
    },
    React.createElement("path", { d: "M2 22 11 9l-3-4 6-3 4 4-5.5 5.5" }),
    React.createElement("path", { d: "M22 22 13 9l-3-4 6-3 4 4-5.5 5.5" }),
    React.createElement("path", { d: "M16 22 7 9l-3-4 6-3 4 4-5.5 5.5" }),
    React.createElement("path", { d: "M11 9h.01" })
  );

export const Combine: React.FC<React.SVGProps<SVGSVGElement>> = (props) =>
  React.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      ...props,
    },
    React.createElement("path", {
      d: "M20.5,10L22,8.5L20.5,7L19,8.5L17.5,7L16,8.5L14.5,7L13,8.5L11.5,7L10,8.5L8.5,7L7,8.5L5.5,7L4,8.5L2.5,7L1,8.5L2.5,10H13V12H2.5L1,13.5L2.5,15L4,13.5L5.5,15L7,13.5L8.5,15L10,13.5L11.5,15L13,13.5L14.5,15L16,13.5L17.5,15L19,13.5L20.5,15L22,13.5L20.5,12H18.9L21,10H20.5M18,18H15V16H18V18M6,20A2,2 0 0,1 4,18A2,2 0 0,1 6,16A2,2 0 0,1 8,18A2,2 0 0,1 6,20M13,20V16H1V20H13M13,5H15V2L13,2V5M18,5H20V2L18,2V5Z",
    })
  );

export const Package: React.FC<React.SVGProps<SVGSVGElement>> = (props) =>
  React.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
    },
    React.createElement("path", {
      d: "M16.5 9.4a.5.5 0 0 0-.5.5v3.6a.5.5 0 0 0 .5.5h.5a.5.5 0 0 0 .5-.5V9.9a.5.5 0 0 0-.5-.5h-.5Z",
    }),
    React.createElement("path", {
      d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",
    }),
    React.createElement("path", {
      d: "m3.3 8.7 7-4.03a.5.5 0 0 1 .5 0l7 4.03",
    }),
    React.createElement("path", { d: "M12 22V12" })
  );

export const Activity: React.FC<React.SVGProps<SVGSVGElement>> = (props) =>
  React.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
    },
    React.createElement("path", { d: "M22 12h-4l-3 9L9 3l-3 9H2" })
  );

export const Clock: React.FC<React.SVGProps<SVGSVGElement>> = (props) =>
  React.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
    },
    React.createElement("circle", { cx: "12", cy: "12", r: "10" }),
    React.createElement("polyline", { points: "12 6 12 12 16 14" })
  );

export const CheckCircle: React.FC<React.SVGProps<SVGSVGElement>> = (props) =>
  React.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
    },
    React.createElement("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }),
    React.createElement("polyline", { points: "22 4 12 14.01 9 11.01" })
  );

export const PlusCircle: React.FC<React.SVGProps<SVGSVGElement>> = (props) =>
  React.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
    },
    React.createElement("circle", { cx: "12", cy: "12", r: "10" }),
    React.createElement("path", { d: "M8 12h8" }),
    React.createElement("path", { d: "M12 8v8" })
  );

export const Search: React.FC<React.SVGProps<SVGSVGElement>> = (props) =>
  React.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
    },
    React.createElement("circle", { cx: "11", cy: "11", r: "8" }),
    React.createElement("path", { d: "m21 21-4.3-4.3" })
  );

export const X: React.FC<React.SVGProps<SVGSVGElement>> = (props) =>
  React.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
    },
    React.createElement("path", { d: "M18 6 6 18" }),
    React.createElement("path", { d: "m6 6 12 12" })
  );

export const SoyBean: React.FC<React.SVGProps<SVGSVGElement>> = (props) =>
  React.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
    },
    React.createElement("path", {
      d: "M20,9.19722436 C20,10.3234988 19.437117,11.3752554 18.5,12 C17.562883,12.6247446 17,13.6765012 17,14.8027756 L17,15 C17,16.1754137 16.2000338,17.1999916 15.059715,17.4850713 L14.7489493,17.5627627 C13.6235704,17.8441074 12.64346,18.5348101 12,19.5 C11.3752554,20.437117 10.3234988,21 9.19722436,21 L5,21 C5.64028925,20.3597108 6,19.4912922 6,18.5857864 L6,17.8027756 C6,16.6765012 6.56288303,15.6247446 7.5,15 C8.46518994,14.35654 9.15589261,13.3764296 9.43723732,12.2510507 L9.63619656,11.4552138 C9.85000633,10.5999747 10.6184397,10 11.5,10 C12.4192991,10 13.2596973,9.48060532 13.6708204,8.65835921 L14.1055728,7.78885438 C14.6537369,6.69252624 15.7742679,6 17,6 L17.5857864,6 C18.4912922,6 19.3597108,5.64028925 20,5 L20,9.19722436 Z M8.43933983,18.5606602 C8.16789322,18.2892136 8,17.9142136 8,17.5 C8,16.6715729 8.67157288,16 9.5,16 C9.91421356,16 10.2892136,16.1678932 10.5606602,16.4393398 M12.0857864,14.9142136 C11.7238576,14.5522847 11.5,14.0522847 11.5,13.5 C11.5,12.3954305 12.3954305,11.5 13.5,11.5 C14.0522847,11.5 14.5522847,11.7238576 14.9142136,12.0857864 M15.9393398,10.5606602 C15.6678932,10.2892136 15.5,9.91421356 15.5,9.5 C15.5,8.67157288 16.1715729,8 17,8 C17.4142136,8 17.7892136,8.16789322 18.0606602,8.43933983 M5.5,11 C6.32842712,11 7,10.3284271 7,9.5 C7,8.67157288 6.32842712,8 5.5,8 C4.67157288,8 4,8.67157288 4,9.5 C4,10.3284271 4.67157288,11 5.5,11 Z M5.5,6 C6.32842712,6 7,5.32842712 7,4.5 C7,3.67157288 6.32842712,3 5.5,3 C4.67157288,3 4,3.67157288 4,4.5 C4,5.32842712 4.67157288,6 5.5,6 Z M10.5,7 C11.3284271,7 12,6.32842712 12,5.5 C12,4.67157288 11.3284271,4 10.5,4 C9.67157288,4 9,4.67157288 9,5.5 C9,6.32842712 9.67157288,7 10.5,7 Z",
    })
  );

export const CottonIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) =>
  React.createElement(
    "svg",
    {
      width: "24",
      height: "24",
      viewBox: "0 0 114 122.88",
      xmlns: "http://www.w3.org/2000/svg",
      ariaHidden: "true",
      ...props,
    },
    React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M20.46 59.44c4.28.03 6.55-.36 9.43.15 9.23 1.63 15.6 6.68 21.85 19.34 4.24 8.59-1.23 26.81-4.49 35.67l-2.39 5.1c0 4.02 7.17 4.46 8.37 0 1.02-3.18 1.92-5.61 2.71-7.78 3.21-8.82 3.59-14.08 4.78-22.92.48-3.55 1.29-7.15 2.96-8.73 4.17-3.93 7.41-11.15 12.85-14.93 3.75-2.6 11.17-3.09 18.21-3.23.06-2.12-1.19-3.58-3.04-4.24-8.15-3.5-16.14-.76-24.07 4.89-1.85 1.31-1.5 1.61-2.42-.73-1.68-4.26-2.53-9.67-2.19-16.71-.27-1.66-.15-2.89-1.43-4.08-.45-.42-.86-.58-1.22-.44-.89.35-1.58 3.75-1.92 4.86-.41 1.39-3.3 12.6-4.8 15.62-.64 1.29-.67.66-1.21-.11-3.67-5.43-23.05-16.04-30.78 0.88Zm15.24-34.64a3.1 3.1 0 0 1-.34.66c.03 1.83.36 3.72.85 5.54.79 2.96 2.01 5.73 3.08 7.84.67 1.32.15 2.94-1.18 3.61-1.32.67-2.94.15-3.61-1.18-1.2-2.36-2.57-5.49-3.48-8.89-.47-1.77-.82-3.61-.96-5.47C18.8 26.62 11.55 31.2 8.01 37.5c-1.59 2.84-2.46 6.02-2.62 9.27-.16 3.28.39 6.62 1.64 9.73 3.09 7.72 10.48 14.01 21.82 14.4a2.64 2.64 0 0 1 2.59 2.76 2.64 2.64 0 0 1-2.76 2.59C14.89 75.77 5.86 68.01 2.05 58.49c-1.53-3.83-2.21-7.94-2.01-11.98.2-4.07 1.29-8.07 3.29-11.64 4.56-8.11 13.75-13.97 27.85-13.3C37.02 6.54 48.13.41 59.46.02c7.42-.25 14.91 2.02 21 5.9 6.18 3.93 10.97 9.55 12.91 15.92.57 1.88.9 3.82.94 5.79 4.49 1.2 9.76 4.44 13.68 8.98 3.5 4.06 5.98 9.19 6.02 14.92.03 4.5-1.56 9.23-4.23 13.26-1.98 2.99-4.57 5.61-7.55 7.5-3.06 1.94-6.54 3.11-10.25 3.14-3.49.02-7.11-.98-10.67-3.35-1.24-.82-1.57-2.48-.76-3.72.82-1.24 2.48-1.57 3.72-.76 2.62 1.74 5.23 2.48 7.69 2.46 2.61-.02 5.13-.88 7.39-2.32 2.34-1.48 4.38-3.56 5.95-5.93 2.12-3.19 3.37-6.86 3.35-10.28-.03-4.3-1.98-8.25-4.72-11.43-2.99-3.47-6.86-5.99-10.22-7.08-1.25 5.07-4.5 10.2-10.34 15.01-1.14.94-2.83.77-3.77-.37-.94-1.14-.77-2.83.37-3.77 8.28-6.83 10.2-14.17 8.27-20.52-1.55-5.1-5.51-9.68-10.66-12.96-5.23-3.33-11.63-5.28-17.96-5.06C50 5.71 40.5 11.21 35.7 24.8Z",
    })
  );

export const SSPIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) =>
  React.createElement(
    "svg",
    {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg",
      ariaHidden: "true",
      ...props,
    },
    React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 22c-.55 0-1-.45-1-1v-6.28A6.5 6.5 0 0 1 4 8a1 1 0 0 1 1-1c2.94 0 5.5 1.66 6.91 4.09A7 7 0 0 1 20 4a1 1 0 0 1 1 1 6.5 6.5 0 0 1-6.72 6.48L13 12.28V21c0 .55-.45 1-1 1z",
    })
  );

export const KCLIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) =>
  React.createElement(
    "svg",
    {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg",
      ariaHidden: "true",
      ...props,
    },
    React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M10 2a1 1 0 0 0 0 2v4.59L5.3 17.3A3 3 0 0 0 8 22h8a3 3 0 0 0 2.7-4.7L14 8.59V4a1 1 0 0 0 0-2h-4zm1 6h2l4.5 8H6.5L11 8z",
    })
  );

export const UreiaIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) =>
  React.createElement(
    "svg",
    {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg",
      ariaHidden: "true",
      ...props,
    },
    React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 2s6 7 6 11a6 6 0 0 1-12 0c0-4 6-11 6-11zm0 18a4 4 0 0 0 4-4c0-2.05-2.45-5.72-4-7.76C10.45 10.28 8 13.95 8 16a4 4 0 0 0 4 4z",
    })
  );

export const CalcarioIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) =>
  React.createElement(
    "svg",
    {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg",
      ariaHidden: "true",
      ...props,
    },
    React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M2 20h20L14 6l-4 5-2-3L2 20zm10-7.5 2.5 4.5h-5l2.5-4.5z",
    })
  );

export const SementesIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) =>
  React.createElement(
    "svg",
    {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg",
      ariaHidden: "true",
      ...props,
    },
    React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 2c-1.1 1.1-2 3-2 5s.9 3.9 2 5c1.1-1.1 2-3 2-5s-.9-3.9-2-5zm0 7c-.6-.6-1-1.5-1-2.5S11.4 4.6 12 4c.6.6 1 1.5 1 2.5S12.6 8.4 12 9zm0 3c-1.1 1.1-2 3-2 5s.9 3.9 2 5c1.1-1.1 2-3 2-5s-.9-3.9-2-5zm0 7c-.6-.6-1-1.5-1-2.5s.4-1.9 1-2.5c.6.6 1 1.5 1 2.5s-.4 1.9-1 2.5z",
    })
  );

export const SeedIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) =>
  React.createElement(
    "svg",
    {
      width: "24",
      height: "24",
      viewBox: "0 0 122 122",
      xmlns: "http://www.w3.org/2000/svg",
      ariaHidden: "true",
      ...props,
    },
    React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M69.5 9.2c2.7 0.3 5.5 0.8 8.1 1.7 4.7 1.7 8.8 4.6 11.8 8.5 4.8 6.3 7 14.6 6.1 23.4-0.6 6.1-2.4 12.5-5.2 18.7-3.3 7.1-7.9 14-13.2 20.1-3.2 3.7-7 7.2-11.2 10.4-4.1 3-8.7 5.5-13.3 7-6.6 2.1-12.6 1.7-17.6-1.1-5.2-2.9-9.1-8.1-10.7-14.5-1.8-7.4-0.6-16.5 3.6-26.1 2.2-5.2 5.1-10.3 8.3-15.1 5.4-8.2 11.7-15.5 18.4-21.5 5.7-5 11.9-8.9 18-11.4 2.2-0.9 4.4-1.5 6.6-1.9Zm-7.9 21.7c-5.6 2.3-10.9 6.4-15.9 11.1-6.1 5.9-11.7 12.9-16.2 20.1-2.9 4.7-5.3 9.5-6.9 14-3.4 9-3.9 16.9-2 23.2 1.5 5 4.4 8.5 8 10.5 3.6 2 8 2.2 12.8 0.6 3.9-1.3 7.9-3.4 11.4-6.1 3.8-2.8 7.3-6 10.3-9.3 5-5.7 9.1-11.8 12.1-17.8 2.7-5.4 4.4-10.7 4.9-15.4 0.6-6.2-0.9-11.9-3.9-16-2.3-3-5.3-5-8.9-6-2.1-0.6-4.3-0.5-6.6 0.1ZM91.9 91.8c1.6-2 3.2-4.2 4.7-6.3 0.8-1.1 2.3-1.4 3.4-0.6 1.1 0.8 1.4 2.3 0.6 3.4-1.5 2.2-3.2 4.5-4.9 6.6-3.3 4-7 7.6-10.8 10.8-1 0.9-2.6 0.8-3.5-0.3-0.9-1-0.8-2.6 0.3-3.5 3.6-3.1 7.1-6.5 10.2-10.1ZM107.7 69.4c1.1-2.4 2-4.9 2.7-7.3 0.4-1.3 1.8-2 3.1-1.6 1.3 0.4 2 1.8 1.6 3.1-0.8 2.7-1.8 5.3-3 7.9-2.2 4.5-4.9 8.8-8 12.8-0.8 1.1-2.4 1.3-3.4 0.5-1.1-0.8-1.3-2.4-0.5-3.4 2.9-3.7 5.4-7.8 7.5-12ZM61.3 109.3c0.6-1.3 2.1-1.8 3.4-1.2 1.3 0.6 1.8 2.1 1.2 3.4-1.1 2.3-2.3 4.6-3.6 6.8-0.7 1.2-2.3 1.6-3.5 0.9-1.2-0.7-1.6-2.3-0.9-3.5 1.2-2.1 2.4-4.3 3.4-6.4Z",
    })
  );
