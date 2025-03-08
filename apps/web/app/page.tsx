import { client } from "db/client";

export default async function Home(){
  const users=await client.user.findMany();
  return(
    <div>
      {JSON.stringify(users)};
      <h1>Hi</h1>
    </div>
  )
}

export const dynamic='force-dynamic';