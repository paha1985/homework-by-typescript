const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';

type comment = {
    id: number,
    email: string,
}

const getData = async <T> (url: string): Promise<T> => {
  const res = await fetch(url);
  return await res.json() as T;
}

getData<comment[]>(COMMENTS_URL)
  .then(data => {
    data.forEach((d) => console.log(`ID: ${d.id}, Email: ${d.email}`))
  });

/**
 * ID: 1, Email: Eliseo...
 * ID: 2, Email: Jayne_Kuhic...
 * ID: 3, Email: Nikita...
 * ID: 4, Email: Lew...
 * ...
 */