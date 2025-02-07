export interface Intro {
  name: string;
  intro: string;
  img: string;
  resumeUrl: string;
}
export interface About {
  aboutMe: AboutMeType;
  skills: SkillsType[];
  experiences: Item[];
  educations: Item[];
}
export interface AboutMeType {
  description: string;
  img: string;
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
