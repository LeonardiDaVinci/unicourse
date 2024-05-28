export default function CourseCard({data}) {
    
    //nanti ganti ?
    return (
        <div className="flex flex-col justify-between h-96">
            <img className="w-full h-64 object-cover items-center" alt="test" src= {data?.imgSrc}/>
            <div className="flex flex-col gap-0">
                <h1 className="text-base m-0">{data?.name}</h1>
                <p className="text-base m-0">{data?.owner}</p>
                <div className="w-full m-0">{data?.rating} rating test</div>
            </div>
            <h1 className="text-xl">Rp.{data?.price}</h1>
        </div>
    )
}