export function Footer() {
  return (
    <div
      className="flex-shrink-0 items-center p-2 bg-slate-50 dark:bg-slate-800"
    >
      <div className="flex flex-row justify-between w-full">
        <div>
          <p className="text-sm">© 2024</p>
        </div>
        <div className="flex flex-col md:flex-row ">
          <a
            className="p-2 text-sm opacity-75 hover:underline"
            href="/post/privacy-policy"
            target="_blank"
          >
            Политика конфиденциальности
          </a>
          <a
            className="p-2 text-sm opacity-75 hover:underline"
            href="/post/terms-of-service"
            target="_blank"
          >
            Условия обслуживания
          </a>
          {/* <a
            className="p-2 text-sm opacity-75 hover:underline"
            href="/en/post/copyright-policy"
            target="_blank"
          >
            Политика в области авторского права
          </a> */}
          <a
            className="p-2 text-sm opacity-75 hover:underline"
            href="/en/post/community-policies"
            target="_blank"
          >
            Политика сообщества
          </a>
        </div>
        <div>
          <p className="text-sm opacity-75">devion</p>
        </div>
      </div>
    </div>
  );
}
