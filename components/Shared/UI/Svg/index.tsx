import dynamic from "next/dynamic";

export const AddSvg: React.ComponentType<React.SVGProps<SVGAElement>> = dynamic(
  () => import("../../../../public/assets/svg/add.svg")
);
