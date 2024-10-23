
import { Link } from "react-router-dom"



interface blogftypes {
    authorname: string,
    title: string,
    content: string,
    date: string,
    id:string
}

const BlogCard = ({ authorname, title, content, date, id }: blogftypes) => {
    
    return (<>
    <Link to={`/blog/${id}`}>
    
        <div className="flex justify-center w-full mt-8 mb-8 border-b border-slate-200 pb-2">
            <div className="flex flex-col w-[40%] mt-3">
                <div className="flex items-center gap-1 mb-3">
                    <div className="bg-yellow-400 w-8 h-8 rounded-full flex justify-center text-xl">{authorname[0]}</div>
                    <div className="text-lg font-normal ">{authorname}</div>
                    <ul className="flex justify-center text-gray-400 items-center ml-4 list-disc text-[8px]"><li></li></ul>
                    <div className="text-gray-600">{date}</div>
                </div>
                <div>
                    <div className="text-2xl font-bold mb-2">
                        {title}
                    </div>

                    <div className="text-gray-600 text-md font-semibold mb-8">{content}</div>
                </div>
                <div className="text-gray-500 text-sm">{`${Math.ceil(content.length / 100)} Min Read`}</div>
                


            </div>
        </div>
        </Link>
    </>
    )
}

export default BlogCard
