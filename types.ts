export enum Role {
  EMPLOYEE = 'employee',
  ADMIN = 'admin',
}

export enum WorkLocation {
    MAIN_OFFICE = 'Main Office',
    WFH = 'Work From Home',
    OTHER = 'Other'
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  employeeId?: string;
  mobileNumber?: string;
  workLocation?: WorkLocation;
}

export interface Nutrition {
  calories: string;
  protein: string;
  fat: string;
}

export interface MenuItem {
  id: string;
  name: string;
  icon: string;
  image: string;
  nutrition: Nutrition;
  isSpecial?: boolean;
  story?: string;
}

export enum MealType {
  BREAKFAST = 'Breakfast',
  LUNCH = 'Lunch',
  SNACKS = 'Snacks',
  DINNER = 'Dinner',
}

export type DailyMenu = {
  [key in MealType]: MenuItem[];
};

export interface WeeklyMenu {
    date: string; // YYYY-MM-DD
    menu: DailyMenu;
}

export interface Rating {
  taste: number;
  portion: number;
  value: number;
}

export interface MealSelectionItem {
  optedIn: boolean;
  items: MenuItem[];
  rating?: Rating;
  feedback?: string;
}

export type DailySelection = {
  [key in MealType]?: MealSelectionItem;
};

export interface MealSelection {
  date: string; // YYYY-MM-DD
  selections: DailySelection;
}

export interface Poll {
    id: string;
    question: string;
    options: string[];
    createdAt: string;
    createdBy: string; // Admin User ID
}

export interface Vote {
    pollId: string;
    userId: string;
    option: string;
}

export interface Badge {
    id: string;
    name: string;
    description: string;
    icon: string;
}

export interface Event {
    id: string;
    title: string;
    message: string;
    question: string; // e.g., "Are you attending?"
    options: ['Yes', 'No'];
    createdAt: string;
    createdBy: string;
}

export interface EventResponse {
    eventId: string;
    userId: string;
    response: 'Yes' | 'No';
}