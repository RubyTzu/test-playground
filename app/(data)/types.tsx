export interface Intro {
  name: string;
  intro: string;
  img: string;
  resumeUrl: string;
  socialMedia: SocialMedia[];
  pageRoute: Route[];
  email: string;
}
export interface SocialMedia {
  title: string;
  href: string;
  displayIcon: string;
}
export interface Route {
  title: string;
  href: string;
}
export interface About {
  aboutMe: AboutMeType;
  skillsSum: SkillsSumType[];
  skills: SkillsType[];
  experiences: Item[];
  educations: Item[];
}
export interface AboutMeType {
  description: string;
  img: string;
}
export interface SkillsSumType {
  id: string;
  title: string;
  number: number;
}
export interface SkillsType {
  id: string;
  title: string;
  level: string;
}
export interface Item {
  title: string;
  description: string;
  id: number;
  subtitleOne: string;
  subtitleTwo: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  time: string;
  img: string;
  gif: string;
}

export interface ProjectDetails extends Project {
  longImg: string;
  longDescription: string;
  brainStormingDescription: string;
  makingDescription: string;
  outComeDescription: string;
  brainStormingImg: string[];
  makingImg: string;
  outComeImg: string;
  videoImg: string;
  videoUrl: string;
  demoUrl: string;
}

export interface Article {
  id: number;
  title: string;
  description: string;
  img: string;
  date: string;
  isMain: boolean;
}
