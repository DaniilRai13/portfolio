export interface ITechSkill {
  name: string;
  bgColor?: string;
}

export interface IEducation {
  institution: string;
  field: string;
}

export interface ILanguage {
  name: string;
  level: string;
}

export interface IAboutData {
  title: string;
  paragraphs: string[];
  focusTitle: string;
  focus: string;
  techSkillsTitle: string;
  techSkills: ITechSkill[];
  educationTitle: string;
  education: IEducation;
  languagesTitle: string;
  languages: ILanguage[];
}