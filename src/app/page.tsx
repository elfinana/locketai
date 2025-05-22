import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full flex justify-center bg-white">
      <div className="w-full max-w-md  bg-[#F3F2EF]">
        <section className="w-full">
          <Image
            src="/assets/up.svg"
            alt="상단 이미지"
            width={448}
            height={652}
            className="w-full h-auto"
          />
          <Image
            src="/assets/middle.svg"
            alt="중간간 이미지"
            width={448}
            height={285}
            className="w-full mt-[120px]"
          />
          <Image
            src="/assets/down.svg"
            alt="하단 이미지"
            width={448}
            height={306}
            className="w-full mt-10"
          />
        </section>
      </div>
    </main>
  );
}

// bg-[#F3F2EF]"
