/* eslint-disable @typescript-eslint/no-explicit-any */
import { useUserStore } from "../store/user-store";
import "../index.css";

const SettingsPage = () => {
  const { user, updatePreferences } = useUserStore();

  if (!user) return <p className="p-6">Loading settings...</p>;

  const prefs = user.preferences!;

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    updatePreferences({ ...prefs, theme: e.target.value as any });
  };

  const handleToggle = (key: "email" | "push") => {
    updatePreferences({
      ...prefs,
      notifications: {
        ...prefs.notifications,
        [key]: !prefs.notifications[key],
      },
    });
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold text-amber-600 mb-4">Settings</h2>

      <div className="w-xl space-y-10 my-8">
        {/* Theme Section */}
        <section>
          <h2 className="text-xl font-semibold mb-3">Theme</h2>
          <select
            value={prefs.theme}
            onChange={handleThemeChange}
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:ring-2 focus:ring-amber-500 outline-none"
          >
            <option value="light">🌞 Light</option>
            <option value="dark">🌙 Dark</option>
            <option value="system">🖥️ System</option>
          </select>
        </section>

        {/* Notifications */}
        <section>
          <h2 className="text-xl font-semibold mb-3">Notifications</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b pb-3">
              <span>Email Notifications</span>
              <input
                type="checkbox"
                checked={prefs.notifications.email}
                onChange={() => handleToggle("email")}
                className="w-5 h-5 accent-amber-500"
              />
            </div>

            <div className="flex items-center justify-between border-b pb-3">
              <span>Push Notifications</span>
              <input
                type="checkbox"
                checked={prefs.notifications.push}
                onChange={() => handleToggle("push")}
                className="w-5 h-5 accent-amber-500"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SettingsPage;
