import { AiOutlineDelete } from "react-icons/ai";

const SelectedClass = ({ item, index }) => {

    const deleteClass = () => {
        console.log("object");
    }

    return (
        <tr >

            <th>
                {index + 1}
            </th>
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
            <td>
                {item.instructorName}

            </td>
            <td>Purple</td>
            <th>
                <button onClick={deleteClass} className="btn hover:bg-red-500 btn-xs"><AiOutlineDelete className="text-xl  text-red-600 hover:text-white" /></button>
            </th>


        </tr>
    );
};

export default SelectedClass;