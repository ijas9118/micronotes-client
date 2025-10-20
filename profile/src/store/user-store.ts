import { create } from "zustand";

export type UserPreferences = {
  theme: "light" | "dark" | "system";
  notifications: {
    email: boolean;
    push: boolean;
  };
};

export type User = {
  firstName?: string;
  lastName?: string;
  email: string;
  userId: string;
  bio?: string;
  avatarUrl?: string;
  preferences?: UserPreferences;
  createdAt?: Date;
};

interface UserState {
  user: User | null;
  updateUser: (data: Partial<User>) => void;
  updatePreferences: (prefs: UserPreferences) => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: {
    userId: "1",
    firstName: "Ijas",
    lastName: "Ahammed",
    email: "ijas@example.com",
    bio: "Full-stack developer exploring microservices.",
    avatarUrl: "https://i.pravatar.cc/150?u=ijas",
    preferences: {
      theme: "system",
      notifications: {
        email: true,
        push: false,
      },
    },
    createdAt: new Date(),
  },
  updateUser: (data) =>
    set((state) => ({
      user: { ...state.user!, ...data },
    })),
  updatePreferences: (prefs) =>
    set((state) => ({
      user: { ...state.user!, preferences: prefs },
    })),
}));
