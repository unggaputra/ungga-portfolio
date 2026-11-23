
export interface Certification {
  title: string;
  issuer: string;
  category: string;
  year?: string;
  credentialUrl?: string;
}

export const certifications: Certification[] = [
  {
    title: "Data Scientist",
    issuer: "BNSP Certification",
    category: "Professional Certification",
  },
];
