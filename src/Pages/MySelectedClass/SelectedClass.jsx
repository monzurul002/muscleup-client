import axios from "axios";
import { AiOutlineDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import useCart from "../../hooks/useCart";

const SelectedClass = ({ item, index }) => {
    const { refetch } = useCart()

    const deleteClass = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${item._id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch()
                            return Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
                    .catch(error => {
                        console.log(error);
                    });


            }
        });



    };

    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={item.imageLink} alt={item.name} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{item.courseName}</div>
                    </div>
                </div>
            </td>
            <td>{item.instructorName}</td>
            <td>Purple</td>
            <th>
                <button onClick={deleteClass} className="btn hover:bg-red-500 btn-xs">
                    <AiOutlineDelete className="text-xl  text-red-600 hover:text-white" />
                </button>
            </th>
        </tr>
    );
};

export default SelectedClass;










// import axios from "axios";
// import { AiOutlineDelete } from "react-icons/ai";

// // const queryClient = useQueryClient();
// const SelectedClass = ({ item, index }) => {

//     const deleteClass = (item) => {
//         fetch(`http://localhost:5000/carts/${item._id}`, {
//             method: "DELETE"
//         })
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data);
//             })
//             .catch(error => {
//                 console.log(error);
//             });
//     };


//     return (
//         <tr >

//             <th>
//                 {index + 1}
//             </th>
//             <td>
//                 <div className="flex items-center gap-3">
//                     <div className="avatar">
//                         <div className="mask mask-squircle w-12 h-12">
//                             <img src={item.imageLink} alt={item.name} />
//                         </div>
//                     </div>
//                     <div>
//                         <div className="font-bold">{item.courseName}</div>

//                     </div>
//                 </div>
//             </td>
//             <td>
//                 {item.instructorName}

//             </td>
//             <td>Purple</td>
//             <th>
//                 <button onClick={() => deleteClass(item)} className="btn hover:bg-red-500 btn-xs"><AiOutlineDelete className="text-xl  text-red-600 hover:text-white" /></button>
//             </th>


//         </tr>
//     );
// };

// export default SelectedClass;