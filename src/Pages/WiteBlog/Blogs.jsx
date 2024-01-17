
import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../Loading/Loading";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("http://localhost:5000/blogs");
                setBlogs(res.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []); // Empty dependency array to run the effect only once on mount

    return (
        <div className=" w-full mx-auto px-16 bg-slate-50  ">
            <div className=" pt-16 px-10"> <h2 className="text-2xl text-cyan-800 font-bold text-center py-2">Some Important Blogs</h2> </div>
            <div className="border-b-4 bg-slate-50">
                {blogs.map((blog) => (<div key={blog._id} dangerouslySetInnerHTML={{ __html: blog.blogs.info }} className=" min-h-screen bg-base-200"></div>
                ))}

            </div>

        </div>
    );
};

export default Blogs;
