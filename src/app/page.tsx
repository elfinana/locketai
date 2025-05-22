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
              top: "47%",

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
              top: "73.2%",
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
      </div>
    </main>
  );
}

// bg-[#F3F2EF]"
