import React from 'react'
// import BasicTable from '../../components/BasicTable'
import BasicTable from '../../components/BasicTable'
// import { notFound } from 'next/navigation'


async function getData(){
    const res = await fetch("http://localhost:3000/api/fetch", {cache: "no-store"});
    if(!res.ok) return notFound();
    return res.json();
}



const page = async () => {
    const data = await getData();
  return (
    
        <>
        <BasicTable value={data}/>
<div className="flex flex-wrap justify-center">
  {data &&
    data.map((post) => (
      <div key={post._id} className="max-w-sm mx-4 my-4 bg-white rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{post.fullname}</div>
        </div>
      </div>
    ))}
</div>


            {/* <div class="md:w-1/4">
            <div class="my-3">
                <div class="bg-white p-4 rounded shadow-md">
                <div class="flex items-center">
                {data &&
                    data.map((post) => (
                    <div key={post._id} className="text-2xl text-black">
                        <h5 class="text-lg font-semibold mx-16 bg-orange-500">{post.fullname}</h5>
                    </div>
                    ))}
                </div>
                <p class="mt-2 text-gray-700">hello</p>
                </div>
            </div>
            </div> */}
        </>
  )
}

export default page