import {
  LucideProps,
  Moon,
  SunMedium,
  X,
  Github,
  Linkedin,
  SquareArrowOutUpRight,
} from 'lucide-react';

export type Icon = LucideProps;

export type IconsType = typeof Icons;

export const Icons = {
  sun: SunMedium,
  moon: Moon,
  twitter: X,
  gitHub: Github,
  linkedin: Linkedin,
  newPage: SquareArrowOutUpRight,
};
