import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useEffect, useState, useRef } from 'react'
const Manager = () => {
  const ref = useRef()
  const passwordRef = useRef()
  const [form, setForm] = useState({ site: '', username: '', password: '' })
  const [passwordArray, setPasswordArray] = useState([])
  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords))
    }
  }, [])
  const copyText=(text) => {
toast.success('Copied to clipboard!', {
position: "bottom-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
});
    navigator.clipboard.writeText(text)
  }
  
  const showPassword = () => {
    passwordRef.current.type = "text"
    if (ref.current.src.includes("icons/cuteye.png")) {
      ref.current.src = "icons/eye.png"
      passwordRef.current.type = "password"

    }
    else {
      passwordRef.current.type = "text"
      ref.current.src = "icons/cuteye.png"



    }

  }
  const savePassword = () => {
    setPasswordArray([...passwordArray, form])
    localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]))
    console.log([...passwordArray, form]);

  }
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })


  }
  return (
    <>
 <ToastContainer
position="bottom-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
transition="Bounce"
/>
<ToastContainer/>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-700 opacity-20 blur-[100px]"></div></div>
      <div className="container mx-auto  mycontainer">
        <h1 className='text-center font-bold text-4xl'><span className='text-green-500'>&lt;</span>
          Pass
          <span className='text-green-500'>OP/&gt;</span></h1>
        <p className='text-center text-green-900 text-lg'>Your personal password manager</p>

        <div className=' flex flex-col items-center p-4 text-black gap-8'>
          <input value={form.site} name='site' placeholder='Enter Website URL' onChange={handleChange} className='bg-white rounded-full border  border-white-green-500 w-full p-4 py-2' type="text" />

          <div className='flex gap-8 w-full justify-between'>
            <input value={form.username} name='username' placeholder='Enter User Name' onChange={handleChange} className='bg-white rounded-full  border border-white-green-500 w-full p-4 py-2 ' type="text" />
            <div className="relative">
              <input ref={passwordRef} type="password" value={form.password} name='password' placeholder='Enter Password' onChange={handleChange} className='bg-white rounded-full  border border-white-green-500 w-full p-4 py-2' />
              <span className='absolute right-0 top-[10px]'><img ref={ref} src="icons/eye.png" width={25} className=' p-1 cursor-pointer' onClick={showPassword} alt="" /></span>
            </div>
          </div>
          <button onClick={savePassword} className='flex justify-center border border-white gap-2 items-center bg-green-500 w-fit rounded-full py-2 px-4 hover:bg-green-400'>
            <lord-icon
              src="https://cdn.lordicon.com/gzqofmcx.json"
              trigger="hover"
            >
            </lord-icon>Add Password</button>
        </div>
        <div className="passwords">
          <h2 className='font-bold text-2xl text-slate-700 py-2'>Your Passwords</h2>
          {passwordArray.length == 0 && <div>No passwords to display</div>}
          {passwordArray.length !== 0 && <table className="table-auto w-full  rounded-md overflow-hidden">
            <thead className='bg-green-800 text-white'>
              <tr>
                <th className='py-2'>Site</th>
                <th className='py-2'>Username</th>
                <th className='py-2'>Password</th>
              </tr>
            </thead>
            <tbody className='bg-green-100'>
              {passwordArray.map((item, index) => {
                return <tr key={index}>
                  <td className='border py-2 border-white '>
                    <div className='flex justify-center'>
                      <a href={item.site} target='_blank'>{item.site}</a>
                      <div className='cursor-pointer' onClick={()=>{copyText(item.site)}}>

                        <lord-icon
                          style={{ "width": "20px", "height": "20px","paddingTop":"1px","paddingLeft":"3px" }}
                          src="https://cdn.lordicon.com/xuoapdes.json"
                          trigger="hover"
                        >
                        </lord-icon>
                      </div>
                    </div>
                  </td>
                  <td className='border py-2 border-white '>
                    <div className='flex justify-center items-center'>
                      <span>{item.username}</span>
                      <div className='cursor-pointer' onClick={()=>{copyText(item.username)}}>
                        <lord-icon
                          style={{ "width": "20px", "height": "20px","paddingTop":"3px","paddingLeft":"3px"}}
                          src="https://cdn.lordicon.com/xuoapdes.json"
                          trigger="hover"
                        >
                        </lord-icon>
                      </div>
                    </div>
                  </td>
                  <td className='border py-2 border-white text-center'>
                    <div className='flex justify-center items-center'>
                      <span>{item.password}</span>
                      <div className='cursor-pointer' onClick={()=>{copyText(item.password)}}>
                        <lord-icon
                          style={{ "width": "20px", "height": "20px","paddingTop":"3px","paddingLeft":"3px" }}
                          src="https://cdn.lordicon.com/xuoapdes.json"
                          trigger="hover"
                        >
                        </lord-icon>
                      </div>
                    </div>
                  </td>
                </tr>
              }
              )}


            </tbody>
          </table>
          }
        </div>
      </div>
    </>
  )
}

export default Manager
