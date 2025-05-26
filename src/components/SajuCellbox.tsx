interface SajuCellBoxProps {
  kor: string;
  value: string;
  sub: string;
  color: "black" | "red" | "mint" | "white";
}

export const SajuCellBox = ({ kor, value, sub, color }: SajuCellBoxProps) => {
  const bg = {
    black: "bg-[#2B2B2B] text-white",
    red: "bg-[#C74848] text-white",
    mint: "bg-[#18868C] text-white",
    white: "bg-white text-black border border-black",
  };

  return (
    <div
      className={`w-[55px] h-[55px] rounded-md flex flex-col items-center justify-center gap-1  ${bg[color]}`}
    >
      <span className="text-[7px] leading-[1]">{kor}</span>
      <span className="text-[25px] leading-[1]">{value}</span>
      <span className="text-[8px] leading-[1]">{sub}</span>
    </div>
  );
};
