import avatar from "@/assets/images/transparent-profile-picture.webp";
import background from "@/assets/images/coding.webp";

export default function ProfileCard({
  name = "Theoterra Wongkar",
  title = "Web Developer",
  handle = "theowongkar",
  status = true,
  avatarUrl = avatar,
  backgroundUrl = background,
}) {
  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden bg-cover bg-center group"
      style={{ backgroundImage: `url('${backgroundUrl}')` }}
    >
      {/* Profile Picture */}
      <img
        src={avatarUrl}
        alt="Profile Picture"
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-between p-4 opacity-50 group-hover:opacity-100 transition-all duration-300">
        <div className="text-center mt-4">
          <h2 className="text-white text-xl font-semibold drop-shadow-md">
            {name}
          </h2>
          <p className="text-gray-300 text-sm">{title}</p>
        </div>
        <div className="flex items-center gap-3 p-3 bg-white/10 backdrop-blur-md rounded-xl">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-white/30">
            <img
              src={avatarUrl}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="leading-tight">
            <h3 className="text-gray-100 text-sm font-medium">{handle}</h3>
            <p
              className={`text-xs ${
                status ? "text-green-400" : "text-gray-400"
              }`}
            >
              {status ? "● Online" : "● Offline"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
