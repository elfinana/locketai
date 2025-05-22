type Props = {
  text: string;
  tailDirection?: "top" | "bottom";
  tailPosition?: "left" | "center" | "right";
};

export default function SpeechBubble({
  text,
  tailDirection = "bottom",
  tailPosition = "center",
}: Props) {
  const tailPositionClass =
    tailPosition === "left"
      ? "left-6"
      : tailPosition === "center"
      ? "left-1/2 -translate-x-1/2"
      : "right-6";

  const tail =
    tailDirection === "bottom"
      ? `absolute -bottom-2 ${tailPositionClass} w-0 h-0 border-l-[10px] border-r-[10px] border-t-[10px] border-l-transparent border-r-transparent border-t-white`
      : `absolute -top-2 ${tailPositionClass} w-0 h-0 border-l-[10px] border-r-[10px] border-b-[10px] border-l-transparent border-r-transparent border-b-white`;

  return (
    <div className="relative inline-block max-w-[60%]">
      {tailDirection === "top" && <div className={tail} />}

      <div className="bg-white px-6 h-[138px] rounded-[100px] shadow-md text-center text-sm leading-snug break-words text-[clamp(12px,3.5vw,16px)] flex items-center justify-center">
        {text}
      </div>

      {tailDirection === "bottom" && <div className={tail} />}
    </div>
  );
}
