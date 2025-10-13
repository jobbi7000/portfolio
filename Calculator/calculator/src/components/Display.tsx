interface DisplayProps {
  value: string;
  className?: string;
}

export default function Display({ value, className = "" }: DisplayProps) {
  return (
    <div
      className={`bg-gray-800 text-white p-4 rounded-lg text-right text-3xl font-mono min-h-[60px] flex items-center justify-end ${className}`}
    >
      <span className="break-all">{value || "0"}</span>
    </div>
  );
}
