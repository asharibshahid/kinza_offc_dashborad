export type Bot = {
  id: string;
  name: string;
  model: string;
  createdAt: string;
  updatedAt: string;
  public: boolean;
};

export const initialBots: Bot[] = [
  {
    id: "23c4ba0e-e283-452d-8189-16d32699f499",
    name: "hr",
    model: "GPT-3.5 Turbo",
    createdAt: "December 20, 2025 5:45 PM",
    updatedAt: "December 20, 2025 5:45 PM",
    public: true,
  },
];
