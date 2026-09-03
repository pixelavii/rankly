import Image from "next/image";

export default function CategoryIcon({ initials, size = "md" }) {
  const sizes = {
    sm: "w-8 h-8 text-xs",
    md: "w-10 h-10 text-sm",
    lg: "w-12 h-12 text-base",
  };

  return (
    <div
      className={`flex items-center justify-center rounded-lg text-white font-semibold shrink-0 ${sizes[size]}`}
      aria-hidden="true"
    >
      <Image src={initials} width={50} height={50} />
    </div>
  );
}
