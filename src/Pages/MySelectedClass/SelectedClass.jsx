
const SelectedClass = ({ item, index }) => {
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
                <button className="btn btn-ghost btn-xs">X</button>
            </th>


        </tr>
    );
};

export default SelectedClass;