export interface Title {
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
}
