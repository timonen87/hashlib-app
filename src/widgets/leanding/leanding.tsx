"use client";

import Image from "next/image";
import Link from "next/link";

export function Leanding() {
  return (
    <div className="flex-auto leading-normal tracking-normal gradient w-full bg-slate-50 dark:bg-slate-800">
      <div className="flex  justify-between w-full flex-col md:flex-row md:items-center">
        <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
          <div className="p-3 z-10">
            <p className="uppercase tracking-loose w-full">
              Это то, что вы ищете?
            </p>
            <h1 className="my-4 text-5xl font-bold " >
             База занинй для разработчиков
            </h1>
            <p className="leading-normal text-2xl mb-8">
              Получи доступ ко всем современным  AI интерфейсам!
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
      <section className="bg-slate-50 dark:bg-slate-800 border-b py-8">
        <div className="container max-w-5xl mx-auto m-8">
          <p
            className="w-full my-2 text-3xl font-bold leading-tight text-center "

          >
            Регистрируйся и получи доступ ко всей базе инструментов и материалов
          </p>
        </div>
        <div className="flex gap-2">
        <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
          Shift
        </kbd>
        <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
          Ctrl
        </kbd>
        <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
          Tab
        </kbd>
        <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
          Caps Lock
        </kbd>
        <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
          Esc
        </kbd>
        <kbd className="px-4 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
          Spacebar
        </kbd>
        <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
          Enter
        </kbd></div>
      </section>

    </div>
  );
}
