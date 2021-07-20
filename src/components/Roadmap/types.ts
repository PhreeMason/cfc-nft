export interface Milestone {
  text: Array<any>;
  img: string;
}

export interface RoadmapProps {
  icon?: string;
  title: string;
  milestones: Array<Milestone>;
  t?: any;
  id?: string;
}

export interface MilestoneProps {
  children: React.ReactNode;
}

