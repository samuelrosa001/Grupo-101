export interface FeatureFlags {
  blog: boolean;
  resources: boolean;
  faq: boolean;
  contact: boolean;
  dashboard: boolean;
  privateArea: boolean;
  academy: boolean;
  referrals: boolean;
  aiChat: boolean;
  crm: boolean;
  pushNotifications: boolean;
}

export const featureFlags: FeatureFlags = {
  blog: true,
  resources: true,
  faq: true,
  contact: true,
  dashboard: true, // Placeholder route active
  privateArea: true, // Placeholder route active
  academy: true,
  referrals: false, // Future release
  aiChat: false, // Future OpenAI/Gemini integration
  crm: false, // Future CRM integration
  pushNotifications: false, // Future Push notification
};

export const isFeatureEnabled = (feature: keyof FeatureFlags): boolean => {
  return featureFlags[feature] ?? false;
};
