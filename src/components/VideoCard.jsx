export function VideoCard({ video }) {
  if (!video || !video.snippet) return null;

  const snippet = video.snippet;

  const thumbnail =
    snippet.thumbnails?.medium?.url ||
    snippet.thumbnails?.high?.url ||
    "https://via.placeholder.com/320x180?text=No+Image";

  // initials
  const initials =
    snippet.channelTitle
      ?.split(" ")
      .map((w) => w[0])
      .slice(0, 2)
      .join("")
      .toUpperCase() || "YT";

  // safe color index
  const avatarColors = ["#E24B4A", "#378ADD", "#1D9E75", "#7F77DD", "#D85A30"];
  const colorIndex =
    (snippet.channelTitle
      ? snippet.channelTitle.charCodeAt(0)
      : 0) % avatarColors.length;

  return (
    <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-xl overflow-hidden flex flex-col transition-all duration-300 ease-out transform hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.02]">
      
      {/* Thumbnail */}
      <div className="relative w-full aspect-video bg-zinc-900 overflow-hidden">
        <img
          src={thumbnail}
          alt={snippet.title || "video"}
          className="w-full h-full object-cover"
        />

        {video.duration && (
          <span className="absolute bottom-2 right-2 bg-black/80 text-white text-xs font-medium px-1.5 py-0.5 rounded">
            {video.duration}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-3 flex flex-col gap-1.5 flex-1">

        {/* Title */}
        <p className="text-sm font-medium text-gray-900 dark:text-white leading-snug line-clamp-2">
          {snippet.title || "Untitled Video"}
        </p>

        {/* Channel */}
        <div className="flex items-center gap-2 mt-0.5">
          <div
            className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-white"
            style={{
              background: avatarColors[colorIndex],
              fontSize: "9px",
              fontWeight: 500,
            }}
          >
            {initials}
          </div>

          <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
            {snippet.channelTitle || "Unknown Channel"}
          </p>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-auto pt-2">
          <span className="text-xs text-gray-400 dark:text-gray-500">
            {snippet.publishedAt
              ? new Date(snippet.publishedAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })
              : ""}
          </span>

          {/* FIXED BUTTON */}
          <a
            href={`https://www.youtube.com/watch?v=${video.id}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 bg-red-500 hover:bg-red-600 text-white text-xs font-medium px-3 py-1.5 rounded-full transition-colors shrink-0"
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <polygon points="2,1 9,5 2,9" fill="white" />
            </svg>
            Watch
          </a>
        </div>
      </div>
    </div>
  );
}