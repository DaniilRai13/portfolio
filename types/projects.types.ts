interface ITag {
  name: string;
  bgColor?: string;
}

export interface IProjectImage {
  src?: string;
  alt: string;
}

export interface IProject {
  id: string;
  name: string;
  description: string;
  highlights: string[];

  images: {
    main: IProjectImage,
    others: IProjectImage[];
  };

  url: {
    label: string;
    href: string;
  };

  mainTags: ITag[];
  stackTags: ITag[];
}