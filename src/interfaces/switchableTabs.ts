interface Tabs {
  id: number;
  company: string;
}

interface Panels {
  id: number;
  position: string;
  company: string;
  companyLink: string;
  range: string;
  texts: string[];
}

export interface SwitchableTabsProps {
  tabs: Tabs[];
  panels: Panels[];
  isJobIndicator: boolean;
}