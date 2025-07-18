import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';
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
  const copyText = (text) => {
    toast.success('Copied to clipboard!', {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: true,
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
    if (form.site.length>3 && form.username.length>3 && form.password.length>3) {
      const newPasswordArray = [...passwordArray, { ...form, id: uuidv4() }];
      setPasswordArray(newPasswordArray);
      localStorage.setItem("passwords", JSON.stringify(newPasswordArray));
      setForm({ site: '', username: '', password: '' });
          toast.success('Saved !', {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
       toast.warn('invalid input', {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    }


  }
  const editPassword = (id) => {
    console.log("editing pass with id", id);
    setForm(passwordArray.filter(item => item.id == id)[0])
    setPasswordArray(passwordArray.filter(item => item.id !== id))


  }
  const deletePassword = (id) => {
    console.log("deleting pass with id", id);
    let c = confirm("are you sure ?")
    if (c) {
      const newPasswordArray = passwordArray.filter(item => item.id !== id);
      setPasswordArray(newPasswordArray);
      localStorage.setItem("passwords", JSON.stringify(newPasswordArray));
      toast.error('deleted!', {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }

  }
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })


  }
  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-700 opacity-20 blur-[100px]"></div></div>
      <div className="container mx-auto p-3 md:mycontainer ">
        <h1 className='text-center font-bold text-4xl'><span className='text-green-500'>&lt;</span>
          Pass
          <span className='text-green-500'>OP/&gt;</span></h1>
        <p className='text-center text-green-900 text-lg'>Your personal password manager</p>

        <div className=' flex flex-col items-center p-4 text-black gap-8'>
          <input value={form.site} name='site' placeholder='Enter Website URL' onChange={handleChange} className='bg-white rounded-full border  border-green-700  w-full p-4 py-2' type="text" id='site' />

          <div className='flex flex-col md:flex-row gap-8 w-full justify-between'>
            <input value={form.username} name='username' placeholder='Enter User Name' onChange={handleChange} className='bg-white rounded-full  border-green-700 border border-white-green-500 w-full p-4 py-2 ' type="text" id='username' />
            <div className="relative">
              <input ref={passwordRef} type="password" value={form.password} name='password' placeholder='Enter Password' onChange={handleChange} id='password' className='bg-white rounded-full  border-green-700 border border-white-green-500 w-full p-4 py-2' />
              <span className='absolute right-0 top-[10px]'><img ref={ref} src="icons/eye.png" width={25} className=' p-1 cursor-pointer' onClick={showPassword} alt="" /></span>
            </div>
          </div>
          <button onClick={savePassword} className='flex justify-center border  gap-2 items-center bg-green-400 w-fit rounded-full py-2 px-5 hover:bg-green-300'>
            <lord-icon
              src="https://cdn.lordicon.com/gzqofmcx.json"
              trigger="hover"
            >
            </lord-icon>Save</button>
        </div>
        <div className="passwords">
          <h2 className='font-bold text-2xl text-slate-700 py-2'>Your Passwords</h2>
          {passwordArray.length == 0 && <div>No passwords to display</div>}
          {passwordArray.length !== 0 && <table className="table-auto w-full  rounded-md overflow-hidden">
            <thead className='bg-green-800 text-white text-xs md:text-lg'>
              <tr>
                <th className='py-2'>Site</th>
                <th className='py-2'>Username</th>
                <th className='py-2'>Password</th>
                <th className='py-2'>Action</th>
              </tr>
            </thead>
            <tbody className='bg-green-100 text-xs md:text-lg'>
              {passwordArray.map((item, index) => {
                return <tr key={index}>
                  <td className='border py-2 border-white '>
                    <div className='flex justify-center'>
                      <a href={item.site.startsWith('http') ? item.site : `https://${item.site}`}target='_blank'>{item.site}</a>
                      {console.log(item.site)}
                      <div className='cursor-pointer' onClick={() => { copyText(item.site) }}>

                        <lord-icon
                          style={{ "width": "20px", "height": "20px", "paddingTop": "1px", "paddingLeft": "3px" }}
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
                      <div className='cursor-pointer' onClick={() => { copyText(item.username) }}>
                        <lord-icon
                          style={{ "width": "20px", "height": "20px", "paddingTop": "3px", "paddingLeft": "3px" }}
                          src="https://cdn.lordicon.com/xuoapdes.json"
                          trigger="hover"
                        >
                        </lord-icon>
                      </div>
                    </div>
                  </td>
                  <td className='border py-2 border-white text-center'>
                    <div className='flex justify-center items-center'>
                      <span>{"*".repeat(item.password.length)}</span>
                      <div className='cursor-pointer' onClick={() => { copyText(item.password) }}>
                        <lord-icon
                          style={{ "width": "20px", "height": "20px", "paddingTop": "3px", "paddingLeft": "3px" }}
                          src="https://cdn.lordicon.com/xuoapdes.json"
                          trigger="hover"
                        >
                        </lord-icon>
                      </div>
                    </div>
                  </td>
                  <td className='flex justify-center gap-3 border py-2 border-white text-center'>
                    <span onClick={() => { deletePassword(item.id) }}>
                      <lord-icon
                        src="https://cdn.lordicon.com/xyfswyxf.json"
                        trigger="hover"
                        style={{ "width": "25px", "height": "25px" }}>
                      </lord-icon>
                    </span>
                    <span onClick={() => { editPassword(item.id) }}>
                      <lord-icon
                        src="https://cdn.lordicon.com/exymduqj.json"
                        trigger="hover"
                        stroke="bold"
                        state="hover-line"
                        colors="primary:#121331,secondary:#000000"
                        style={{ "width": "25px", "height": "25px" }}>
                      </lord-icon>
                    </span>
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
