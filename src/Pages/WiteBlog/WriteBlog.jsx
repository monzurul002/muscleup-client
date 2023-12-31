import { useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import Swal from "sweetalert2";
const WriteBlog = () => {
    const [value, setValue] = useState('');

    var toolbarOptions = [
        ['bold', 'italic', 'underline', 'strike', 'image'],        // toggled buttons
        ['blockquote', 'code-block'],

        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
        [{ 'direction': 'rtl' }],                         // text direction

        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{ 'font': [] }],
        [{ 'align': [] }],

        ['clean']                                         // remove formatting button
    ];

    const modules = {
        toolbar: toolbarOptions
    }

    const saveInDb = () => {

        const blog = { info: value }
        fetch("http://localhost:5000/blogs", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(blog)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setValue(" ")
                    return Swal.fire({
                        title: "Blogs has been puplished.!",
                        icon: "success"
                    });
                }
            }
            )

    }

    return (
        <div className="px-2 py-3">

            <ReactQuill theme='snow' onChange={setValue} modules={modules} />


            <div>
                {
                    value && <div dangerouslySetInnerHTML={{ __html: value }}>

                    </div>
                }
                <div className="text-center">
                    <button onClick={saveInDb} className="btn onCl btn-primary my-2 px-5 text-center"   >Submit</button>
                </div>
            </div>

        </div>
    );
};

export default WriteBlog;

