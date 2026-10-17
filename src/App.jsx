import React, { useState } from 'react'

const App = () => {

  const [title, setitle] = useState("")
  const [title2, settitle2] = useState("")
  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault();

    const copytask = [...task]
    copytask.push({ title, title2 })
    setTask(copytask);

    setitle("");
    settitle2("");
  }

  const deleteNote = (idx) => {
    const copytask = [...task]
    copytask.splice(idx, 1);
    setTask(copytask);
  }

  return (

    <div className='bg-slate-950 min-h-screen text-white p-4 lg:flex gap-8'>

      <div className='bg-slate-800 w-full lg:w-1/3 h-[480px] border-2 border-slate-600 rounded-2xl shrink-0'>

        <form onSubmit={(e) => {
          submitHandler(e);
        }} action="" className='flex p-5 flex-col justify-between items-start h-full gap-4'>

          <input
            type="text"
            placeholder='Enter Heading'
            className='border border-slate-400 px-3 py-3 rounded-lg outline-none w-full bg-slate-100 text-slate-900 focus:border-violet-500'
            value={title}
            onChange={(e) => {
              setitle(e.target.value)
            }} />

          <textarea
            placeholder='Enter Details'
            className='border border-slate-400 px-3 py-3 rounded-lg flex-1 min-h-0 outline-none w-full bg-slate-100 text-slate-900 resize-none focus:border-violet-500'
            value={title2}
            onChange={(e) => {
              settitle2(e.target.value)
            }} />

          <button className='bg-violet-600 hover:bg-violet-700 active:scale-95 text-white rounded-lg h-14 w-full transition-colors'>
            Add Notes
          </button>

        </form>
      </div>

      <div className='w-full lg:flex-1 min-w-0 mt-8 lg:mt-0'>

        <div className='text-2xl font-bold border border-slate-600 bg-slate-900 w-fit px-8 py-2 rounded-xl mx-auto mb-8'>
          Your Notes
        </div>

        <div className='flex gap-5 flex-wrap justify-center lg:justify-start'>

          {task.map(function (elem, idx) {
            return <div key={idx} className='bg-teal-950 border border-teal-800 h-72 w-52 rounded-xl flex flex-col justify-between overflow-hidden'>

              <h1 className='text-center text-2xl font-bold text-white font-serif break-words px-3 pt-4'>
                {elem.title}
              </h1>

              <p className='px-3 mb-16 text-slate-200 text-sm break-words overflow-y-auto whitespace-pre-wrap'>
                {elem.title2}
              </p>

              <button onClick={() => {
                deleteNote(idx)
              }} className='active:scale-95 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 transition-colors'>
                Delete Note
              </button>

            </div>
          })}

        </div>
      </div>
    </div>
  )
}

export default App