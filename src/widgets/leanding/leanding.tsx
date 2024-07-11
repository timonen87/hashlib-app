"use client";

import Image from "next/image";
import Link from "next/link";

export function Leanding() {
  return (
    <div className="leading-normal tracking-normal gradient w-full">
      <div className="flex flex-row justify-between w-full flex-col md:flex-row md:items-center">
        <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
          <div className="p-3 z-10">
            <p className="uppercase tracking-loose w-full">
              Это то, что вы ищете?
            </p>
            <h1 className="my-4 text-5xl font-bold " >
              База знаний для IT специалистов!
            </h1>
            <p className="leading-normal text-2xl mb-8">
              Место, где вы встречаетесь с разработчиками, маркетологами, промпт
              инженерам ...!
            </p>
            <Link
              href="/en/log-in"
              type="button"
              className="text-xl font-bold text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Присоединяйся
            </Link>
          </div>
        </div>

        <div className=" md:w-3/5 flex flex-row justify-end z-0">
          <Image
            className="w-full md:w-4/5 z-50"
            src="/image/floyk_blog_writing.png"
            width={350}
            height={250}
            alt=""
          />
        </div>
      </div>
      <section className="bg-white dark:bg-black border-b py-8">
        <div className="container max-w-5xl mx-auto m-8">
          <p
            className="w-full my-2 text-3xl font-bold leading-tight text-center "

          >
            Регистрируйся и создавай добавляй свои заметки и посты для себя и других специалистов
          </p>
        </div>
      </section>
    </div>
  );
}
