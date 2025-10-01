import { cn } from "@/lib/utils";
import { Button, IconButton, Tooltip } from "@mui/material";

export default function CustomCard({
  title,
  category = {},
  description,
  image,
  tags = [],
  actions = [],
}) {
  return (
    <div className="flex flex-col w-full bg-secondary border border-gray-700 rounded-xl shadow-md overflow-hidden">
      {/* Image */}
      <img src={image} alt={title} className="w-full h-36 object-cover" />

      {/* Content */}
      <div className="p-4 flex-1">
        <span
          className={cn(
            "inline-block mb-1 p-1 bg-primary text-secondary text-xs font-semibold rounded whitespace-nowrap",
            category.className,
            category.className && "text-white"
          )}
        >
          {category.label}
        </span>

        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="text-sm text-gray-300 line-clamp-3">{description}</p>

        <div className="flex gap-1 mt-2 overflow-x-auto custom-scrollbar">
          {tags.map((tag) => (
            <span
              key={tag}
              className="p-1 bg-primary text-secondary text-xs font-semibold rounded whitespace-nowrap"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Action */}
      <div className="flex justify-end gap-2 px-4 py-2 border-t border-gray-700">
        {actions.map((action) => {
          const isIcon = typeof action.label === "function";
          const Icon = isIcon ? action.label : null;

          return (
            <Tooltip key={action.id} title={action.name} arrow>
              {isIcon ? (
                <IconButton
                  href={action.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={action.name}
                  className={cn("!bg-gray-800 !rounded-lg", action.className)}
                >
                  <Icon size={20} />
                </IconButton>
              ) : (
                <Button
                  size="small"
                  variant="contained"
                  href={action.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={action.name}
                  className={action.className}
                >
                  {action.label}
                </Button>
              )}
            </Tooltip>
          );
        })}
      </div>
    </div>
  );
}
