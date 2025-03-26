'use server';

import { faker } from "@faker-js/faker";
import { ResponseObject, Song } from "./schema";



function createRandomSongs(): Song {
  return {
    id: faker.string.uuid(),
    title: faker.music.songName(),
    artist: faker.music.artist(),
    album: faker.music.album(),
    genre: faker.music.genre(),
  }
}

export async function getSongs(pageNum: number): Promise<ResponseObject> {

  faker.seed(100)

  const songs = faker.helpers.multiple(createRandomSongs, {
    count: 105
  });

  const offset = (pageNum - 1) * 10;

  const paginatedSongs = songs.slice(offset, offset + 10)

  return {
    status: 'success',
    data: {
      songs: paginatedSongs,
      totalItem: songs.length
    }
  }

}