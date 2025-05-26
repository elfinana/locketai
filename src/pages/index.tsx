import SajuHeader from "@/components/SajuHeader";
import SajuTable from "@/components/SajuTable";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full flex justify-center bg-white">
      <div className="w-full max-w-md  bg-[#F3F2EF] relative">
        <section className="w-full">
          <Image
            src="/assets/image.svg"
            alt="상단 이미지"
            width={448}
            height={1403}
            className="w-full h-full"
          />
          <div
            className="absolute"
            style={{
              top: "35%",

              left: "20%",

              width: "29.9%",
              height: "5.1%",
            }}
          >
            <p
              className="text-center text-[clamp(8px,3.5vw,16px)] leading-[150%]"
              style={{ letterSpacing: "-0.4px" }}
            >
              이제 본격적으로
              <br /> OO님의 사주팔자를
              <br />
              분석해볼 차례네요.
            </p>
          </div>
          <div
            className="absolute"
            style={{
              top: "54.2%",
              left: "18.2%",
              width: "40%",
              height: "3.4%",
            }}
          >
            <p
              className="text-center text-[clamp(8px,3.5vw,16px)] leading-[150%]"
              style={{ letterSpacing: "-0.4px" }}
            >
              제가 OO님의 사주를
              <br />
              보기 쉽게 표로 정리했어요
            </p>
          </div>
        </section>
        {/* 아래 사주팔자표 */}
        <div className="px-3">
          <section className="relative  w-full  bg-[#F5F3EC] border-[3px] border-[#1B2F49]">
            <Image
              src="/assets/left.svg"
              alt="상단 이미지"
              width={56}
              height={38}
              className="absolute left-[9px] top-[45px]"
            />
            <Image
              src="/assets/right.svg"
              alt="상단 이미지"
              width={56}
              height={38}
              className="absolute right-2 top-[26px] "
            />
            <div className="absolute top-2 left-0 right-0 h-px bg-[#1B2F49] z-10" />
            <div className="absolute bottom-2 left-0 right-0 h-px bg-[#1B2F49] z-10" />
            <div className="flex px-2">
              <div className="w-px bg-[#1B2F49]" />

              <div className="flex-1">
                <SajuHeader />
                <SajuTable />
              </div>

              {/* 오른쪽 세로줄 */}
              <div className="w-px bg-[#1B2F49] " />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
