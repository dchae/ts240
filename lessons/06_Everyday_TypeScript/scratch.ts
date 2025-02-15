type UserSettings = {
  readonly colorScheme: string;
  readonly notifications: ReadonlyArray<string>;
};

const userSettings: UserSettings = {
  colorScheme: "dark",
  notifications: ["email", "push"],
};

(userSettings as any).colorScheme = "light";
(userSettings as any).notifications.push("sms");

console.log(userSettings.colorScheme);
console.log(userSettings.notifications);
