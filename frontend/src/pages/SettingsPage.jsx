import { THEMES } from "../constants";
import { useThemeStore } from "../store/useThemeStore";

const TEAM_MEMBERS = [
  { name: "Prem Sagar", email: "premsagar1270@gmail.com", image: "./images/premsagar.jpg", role: 'Student' },
  { name: "Kartik Jaswal", email: "kr8219769@gmail.com", image: "/images/kartikjaswal.jpg", role: 'Student'},
  { name: "Shivam", email: "shivamrana2291@gmail.com", image: "/images/shivamrana.jpg", role: 'Student' },
  { name: "Prof. Amar Paul Singh", email: "singhamarpaul1@gmail.com", image: "/images/amarpaul.enc", role: 'Project Guide & Mentor' },
];

const SettingsPage = () => {
  const { theme, setTheme } = useThemeStore();

  return (
    <div className="h-screen container mx-auto px-4 pt-20 max-w-5xl">
      <div className="space-y-6">
        <div className="flex flex-col gap-1">
          <h2 className="text-lg font-semibold">Themes</h2>
          <p className="text-sm text-base-content/70">Customize Your Look</p>
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
          {THEMES.map((t) => (
            <button
              key={t}
              className={`
                group flex flex-col items-center gap-1.5 p-2 rounded-lg transition-colors
                ${theme === t ? "bg-base-200" : "hover:bg-base-200/50"}
              `}
              onClick={() => setTheme(t)}
            >
              <div className="relative h-8 w-full rounded-md overflow-hidden" data-theme={t}>
                <div className="absolute inset-0 grid grid-cols-4 gap-px p-1">
                  <div className="rounded bg-primary"></div>
                  <div className="rounded bg-secondary"></div>
                  <div className="rounded bg-accent"></div>
                  <div className="rounded bg-neutral"></div>
                </div>
              </div>
              <span className="text-[11px] font-medium truncate w-full text-center">
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </span>
            </button>
          ))}
        </div>

        {/* Contact Us Section */}
        <div className="mt-10 border-t pt-6">
          <h2 className="text-lg font-semibold">Contact Us</h2>
          <p className="text-sm text-base-content/70">Meet the team behind this app.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            {TEAM_MEMBERS.map((member) => (
              <div key={member.email} className="flex flex-col items-center text-center p-4 border rounded-lg">
                <img src={member.image} alt={member.name} className="w-16 h-16 rounded-full object-cover" />
                <h3 className="mt-2 font-medium">{member.name}</h3>
                <p className="text-sm text-base-content/70">{member.role}</p> {/* 👈 Role added here */}
                <p className="text-sm text-base-content/70">{member.email}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
