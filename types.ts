export enum EligibilityStatus {
  IDLE = 'IDLE',
  ANALYZING = 'ANALYZING',
  ELIGIBLE = 'ELIGIBLE',
  INELIGIBLE = 'INELIGIBLE',
  ERROR = 'ERROR'
}

export interface EligibilityResponse {
  isMatch: boolean;
  reasoning: string;
  feedback: string;
}

export interface Partner {
  id: number;
  name: string;
  type: string;
  region: string;
  accessLevel: string;
  duration: string;
  nodeId: string;
  velocity: string;
  compliance: string;
  valueGenerated: string;
  successMetric: string;
  description: string;
  image: string;
}
