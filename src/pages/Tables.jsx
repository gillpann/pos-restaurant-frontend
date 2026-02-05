import { useState } from 'react';
import BottomNav from '../components/shared/BottomNav'
import BackButton from './../components/shared/BackButton';
import TableCard from './../components/tables/TableCard';
import { tables } from '../constants';

const Tables = () => {
 const [status, setStatus] = useState("all");

  return (
    <section className='bg-bg-page h-[calc(100vh-5rem)] overflow-hidden'>
        <div className='flex items-center justify-between px-8 py-4 mt-2 bg-bg-header rounded-xl mx-6'>
            <div className='flex items-center gap-4'>
                <BackButton />
                <h1 className='text-text-main text-2xl font-bold tracking-wider'>Tables</h1>
            </div>
            <div className='flex items-center justify-around gap-4'>
                <button
                    onClick={() => setStatus("all")}
                    className={`text-sm font-semibold px-5 py-2 rounded-xl transition
                    ${status === "all"
                        ? "bg-bg-card text-text-main"
                        : "text-text-muted hover:text-text-main"}
                    `}
                    >
                    All
                </button>
                <button
                    onClick={() => setStatus("booked")}
                    className={`text-sm font-semibold px-5 py-2 rounded-xl transition
                    ${status === "booked"
                        ? "bg-bg-card text-text-main"
                        : "text-text-muted hover:text-text-main"}
                    `}
                    >
                    Booked
                </button>
            </div>
        </div>

        <div className='flex flex-wrap gap-5 px-10 py-5 overflow-y-scroll h-[700px] scrollbar-hide'>
            {
                tables.map((table) => {
                    return (
                        <TableCard key={table.id} id={table.id} name={table.name} status={table.status} initials={table.initial} seats={table.seats} />
                    )
                })
            }
        </div>
            
        <BottomNav />
    </section>
  )
}

export default Tables