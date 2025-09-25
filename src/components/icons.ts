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
