import React from "react";
import { SajuCellBox } from "./SajuCellbox";

export default function SajuTable() {
  const columnTitles = ["時", "日", "月", "年"];
  const rowTitles = [
    "十星\n(십성)",
    "天干\n(천간)",
    "地支\n(지지)",
    "十星\n(십성)",
    "十二運星\n(십이운성)",
    "十二神殺\n(십이신살)",
    "貴人\n(귀인)",
  ];

  const dummyData = [
    ["傷官\n(상관)", "比肩\n(비견)", "傷官\n(상관)", "傷官\n(상관)"],
    ["임\n壬\n陽水", "정\n丁\n陰火", "계\n癸\n陰水", "계\n癸\n陰水"],
    ["인\n寅\n陽木", "사\n巳\n陰火", "해\n亥\n陰水", "유\n酉\n陰金"],
    ["比肩\n(비견)", "劫財\n(겹재)", "食神\n(식신)", "偏財\n(편재)"],
    ["死\n(사)", "帝旺\n(제왕)", "胎\n(태)", "長生\n(장생)"],
    ["劫殺\n(겁살)", "地殺\n(지살)", "驛馬殺\n(역마살)", "將星殺\n(장성살)"],
    [
      "(없음)",
      "(없음)",
      "天乙\n(천을귀인)",
      "天乙\n(천을귀인)\n太昌\n(태극귀인)\n文昌\n(문창귀인)",
    ],
  ];
  return (
    <div className="px-[12px] pt-5 pb-[40px]">
      <div
        className="w-full bg-[#F5F3EC] text-[13px] text-center  border-b-[1.05px] border-r-[1.05px]"
        style={{
          borderRight: "1.05px solid black",
        }}
      >
        {/* 상단 타이틀 줄 */}
        <div
          className="grid grid-cols-5"
          style={{ borderBottom: "1.05px solid black" }}
        >
          {/* 맨 왼쪽 상단 칸 */}
          <div
            className=" font-bold bg-[#F5F3EC]"
            style={{ borderRight: "1.05px solid black" }}
          />
          {columnTitles.map((col, i) => {
            const isgrayBorder = [0, 1, 2].includes(i);
            return (
              <div
                key={i}
                className="p-2 font-normal text-[20.92px]"
                style={{
                  borderRight: isgrayBorder
                    ? "0.49px solid #8a8a8a"
                    : "1.05px solid black",
                }}
              >
                {col}
              </div>
            );
          })}
        </div>

        {/* 데이터 줄 */}
        {dummyData.map((row, rowIdx) => (
          <div
            key={rowIdx}
            className="grid grid-cols-5 border-t-[1.05px] border-black border-b-[1.05px] border-r-[1.05px]"
          >
            {/* 왼쪽 행 타이틀 */}
            <div
              className="flex flex-col items-center justify-center bg-[#F5F3EC] text-center"
              style={{ borderRight: "1.05px solid black" }}
            >
              {rowTitles[rowIdx].split("\n").map((text, i) => (
                <div
                  key={i}
                  className={
                    i === 0
                      ? "font-[400] text-[12px]"
                      : "font-[700] text-[7.82px]"
                  }
                >
                  {text}
                </div>
              ))}
            </div>

            {/* 셀 렌더링 */}
            {row.map((cell, colIdx) => {
              const isgrayBorder = [0, 1, 2, 3].includes(colIdx);
              const isHorizontalgray =
                rowIdx === 1 && [0, 1, 2, 3].includes(colIdx);

              const lines = cell.split("\n");
              const isBoxCell = rowIdx === 1 || rowIdx === 2;

              return (
                <div
                  key={colIdx}
                  className="p-2 text-center flex justify-center items-center"
                  style={
                    colIdx !== row.length - 1
                      ? {
                          borderRight:
                            isgrayBorder || isHorizontalgray
                              ? "0.49px solid #8A8A8A"
                              : "1.05px solid black",
                        }
                      : {}
                  }
                >
                  {isBoxCell && lines.length === 3 ? (
                    <SajuCellBox
                      kor={lines[0]}
                      value={lines[1]}
                      sub={lines[2]}
                      color={
                        lines[2].includes("水")
                          ? "black"
                          : lines[2].includes("火")
                          ? "red"
                          : lines[2].includes("木")
                          ? "mint"
                          : lines[2].includes("金")
                          ? "white"
                          : "black"
                      }
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center">
                      {lines.map((line, i) => (
                        <div
                          key={i}
                          className={
                            i === 0
                              ? "font-[400] text-[14.67px]"
                              : "font-[700] text-[9.78px]"
                          }
                        >
                          {line}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
