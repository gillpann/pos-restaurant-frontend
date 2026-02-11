import { useNavigate } from 'react-router-dom';
import { getBgColor, getAvatarName } from './../../utils/index';
import { useDispatch } from 'react-redux';
import { updateTable } from '../../redux/slices/customerSlice';

const TableCard = ({key, name, status, initials, seats }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleClick = (name) => {
        if(status === "Booked") return;
        dispatch(updateTable({tableNo: name}))
        navigate(`/menu`)
    }

  return (
    <div onClick={() => handleClick(name)} key={key} className='w-[300px] bg-bg-card p-4 rounded-xl shadow-lg shadow-black/30 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer'>
        <div className='flex items-center justify-between px-1'>
            <h1 className='text-text-main text-lg font-semibold'>Table {name}</h1>
            <p className={`${status === "Booked" ? "text-success bg-[#2e4a40]" : "text-warning  bg-[#4A3B14]"} backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium`}>
                {status}
            </p>
        </div>
        <div className='flex items-center justify-center mt-5 mb-10'>
            <h1
                style={{ backgroundColor: getBgColor(initials)}}
                className="text-white rounded-full p-5 text-xl"
                >
            {getAvatarName(initials) || "N/A"}
            </h1>
        </div>
        <p className='text-text-muted text-xs'>Seats: <span className='text-text-main'>{seats}</span></p>
    </div>
  )
}

export default TableCard