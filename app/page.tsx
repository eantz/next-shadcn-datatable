import { PaginationState } from "@tanstack/react-table";
import { getSongs } from "./action";
import { SongTable } from "./_table";
import Link from "next/link";

export default async function Home(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string
  }>
}) {

  const searchParams = await props.searchParams;
  const currentPage = Number(searchParams?.page || 1)

  const pagination: PaginationState = {
    pageSize: 10,
    pageIndex: currentPage
  }

  const songs = getSongs(currentPage)
  
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full">
        <h1 className="text-xl font-bold">Shadcn DataTables with Server Side Pagination on NextJS App Router</h1>

        <p>
          Read the article about this on <Link className="text-orange-500" target="_blank" href="https://medium.com/@destiya.dian/shadcn-datatable-server-side-pagination-on-nextjs-app-router-83a35075c767">Medium</Link>. 
          Or read the complete code on <Link href="https://github.com/eantz/next-shadcn-datatable" target="_blank" className="text-slate-700">Github</Link>.
        </p>

        <SongTable 
          songs={songs}
          pagination={pagination}
        />
      </main>
    </div>
  );
}
