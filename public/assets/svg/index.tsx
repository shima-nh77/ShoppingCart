import dynamic from 'next/dynamic';

export const InfoSquareSvg: React.ComponentType<React.SVGProps<SVGAElement>> = dynamic(
    () => import('@img/siteImages/icons/Light/InfoSquare.svg')
  );