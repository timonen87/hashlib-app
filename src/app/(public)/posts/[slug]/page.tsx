import { postRepository } from "@/entities/post/_repositories/post";
import { ProfileAuthor } from "@/entities/post/ui/profile-author";
import { UpdateProfileForm } from "@/features/update-profile/update-profile-form";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function PostDetail({
  params,
}: {
  params: { slug: string };
}) {
  const post = await postRepository.getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <main className="flex flex-col vertical-main-content mx-auto dark:bg-slate-800 max-w-[900px] pt-6 pr-6">
      <div className="flex flex-col  h-full">
        <div className=" block sm:flex sm:flex-col md:flex-colflex-wrap">
          <div className="flex flex-col w-full p-2 mb-4">
            <div className="flex w-full mt-6 article-single-title lg:prose-xl">
              <h1 className="text-6xl">
                {post?.title}
                {/* Проверка на палиндром. Решение и описание задачи на Python */}
              </h1>
            </div>
          </div>
          <div className="flex flex-row items-start justify-between w-full p-4 sm:p-0 mb-6">
            <div className="article-short-user-data flex flex-col sm:flex-row">
              <div className="flex flex-row gap-2 items-center justify-center">
                <ProfileAuthor profile={post?.user} />

                <div className="flex flex-col">
                  <div className=" pr-1">
                    <Link
                      className="hover:underline"
                      href={`/users/${post?.user.name}`}
                    >
                      {post.user.name}
                    </Link>
                  </div>
                  <div className="pr-1">
                    <div className="pr-1">
                      в{" "}
                      <Link className="hover:underline" href={`/post/python`}>
                        Python
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col end">
              <div>4 месяца назад</div>
              <div>1 минута чтения</div>
            </div>
          </div>
        </div>
        <div className="flex items-start mt-3 mr-0 mb-6">
          <nav className="flex " aria-label="Breadcrumb">
            <ol
              role="list"
              className="flex rounded-md shadow dark:shadow-inherit"
            >
              <li className="flex items-center justify-center">
                <div className="flex items-center">
                  <a href="/" className="">
                    <svg
                      className="flex-shrink-0 w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                    </svg>
                    <span className="sr-only">Главная</span>
                  </a>
                </div>
              </li>
              <li className=" text-gray-500 opacity-50 gap-4 pl-2 pr-2">
                &gt;
              </li>
              <li className="flex items-center justify-center gap-2">
                <div className="flex items-center justify-items-start">
                  <a href="/category" className="text-sm font-medium ">
                    Категория
                  </a>
                </div>
              </li>
              <li className="px-2 text-gray-500 opacity-50">&gt;</li>
              <li className="flex">
                <div className="flex items-center">
                  <a href="/category/python" className="text-sm font-medium ">
                    Python
                  </a>
                </div>
              </li>
              <li className="px-2 text-gray-500 opacity-50">&gt;</li>
              <li className="flex">
                <div className="flex items-center">
                  <div className="text-sm font-medium opacity-50">
                    {post.title}
                  </div>
                </div>
              </li>
            </ol>
          </nav>
        </div>
        {post?.content}
        {/* Жизненный цикл компонента в React — это последовательность методов,
        которые вызываются на разных этапах существования компонента. Эти методы
        позволяют разработчикам выполнять определенные действия в ответ на
        изменения состояния или свойств компонента. Жизненный цикл можно
        разделить на три основные фазы: монтирование, обновление и
        размонтирование. Фазы жизненного цикла Монтирование (Mounting): Эта фаза
        происходит, когда компонент вставляется в DOM. Обновление (Updating):
        Эта фаза происходит, когда компонент получает новые свойства или
        состояние. Размонтирование (Unmounting):Эта фаза происходит, когда
        компонент удаляется из DOM. Методы жизненного цикла Монтирование
        constructor(props): Вызывается перед монтированием компонента.
        Используется для инициализации состояния и привязки методов.
        Используется для инициализации состояния и привязки методов. static
        getDerivedStateFromProps(props, state): Вызывается перед каждым
        рендером, как при монтировании, так и при обновлении.Используется для
        обновления состояния на основе изменений в свойствах. render():
        Обязательный метод, который возвращает JSX для рендеринга компонента.
        Обязательный метод, который возвращает JSX для рендеринга компонента.
        componentDidMount(): Вызывается сразу после монтирования
        компонента.Используется для выполнения побочных эффектов, таких как
        запросы к API или настрой */}
      </div>
    </main>
  );
}
