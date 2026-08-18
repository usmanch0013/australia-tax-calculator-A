export interface GuideSection {
  heading: string;
  level?: 2 | 3;
  paragraphs: string[];
  list?: string[];
}

export interface GuideFaq {
  question: string;
  answer: string;
}

export interface ToolGuide {
  slug: string;
  title: string;
  intro: string;
  sections: GuideSection[];
  faqs: GuideFaq[];
}
