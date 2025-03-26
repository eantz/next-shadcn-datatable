'use client';

import { use } from "react";
import { ColumnDef } from '@tanstack/react-table'
import { ResponseObject, Song } from "./schema";
import { DataTable } from "@/components/ui/datatable";

export const columns: ColumnDef<Song>[] = [
  {
    accessorKey: 'id',
    header: 'ID'
  },
  {
    accessorKey: 'title',
    header: 'Title'
  },
  {
    accessorKey: 'artist',
    header: 'Artist'
  },
  {
    accessorKey: 'album',
    header: 'Album'
  },
  {
    accessorKey: 'genre',
    header: 'Genre'
  },
]

export function SongTable({
  songs,
  pagination
}: {
  songs: Promise<ResponseObject>,
  pagination: any
}) {
  const songData = use(songs)

  return (
    <>
      <DataTable 
        columns={columns} 
        data={songData.data?.songs} 
        pagination={pagination}
        rowCount={songData.data?.totalItem}
        totalItems={songData.data?.totalItem}
      />
    </>
  )
  
}