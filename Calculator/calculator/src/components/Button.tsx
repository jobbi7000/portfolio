import { ButtonProps } from "@/types/calculator";

export default function Button({
  value,
  onClick,
  className = "",
  type = "number",
}: ButtonProps) {
  const baseClasses =
    "w-full aspect-square text-lg font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1";

  const typeClasses = {
    number:
      "bg-gray-100 hover:bg-gray-200 active:bg-gray-300 text-gray-800 focus:ring-gray-500",
    operation:
      "bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white focus:ring-blue-500",
    function:
      "bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white focus:ring-orange-500",
  };

  const combinedClasses = `${baseClasses} ${typeClasses[type]} ${className}`;

  return (
    <button
      onClick={() => onClick(value)}
      className={combinedClasses}
      type="button"
    >
      {value}
    </button>
  );
}
