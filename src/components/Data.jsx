import React, { useEffect, useState } from "react";
import { supabase } from 'D:/starx91/ground_control_system/git/edit_profile/src/supabaseClient.jsx';

const Data = () => {
  const [employee, setEmployee] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    date_of_birth: '',
    email_id: '',
    phone_number: '',
    country: '',
    state: '',
    address: ''
  });

  useEffect(() => {
    const fetchEmployeeData = async () => {
      const { data, error } = await supabase
        .from('userprofile')
        .select('*')
        .single();

      if (error) {
        console.error("Error fetching employee data:", error);
      } else {
        setEmployee(data);
        setFormData(data || {
          name: '', date_of_birth: '', email_id: '',
          phone_number: '', country: '', state: '', address: ''
        });
      }
    };

    fetchEmployeeData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };
  
  const validateFormData = () => {
    return Object.values(formData).every(field => field.trim() !== '');
  };

  const handleSave = async () => {
    if (!employee && !validateFormData()) {
      console.error("All fields are required to add a profile.");
      return;
    }
  
    console.log("Form data before saving:", formData);
  
    try {
      const { id, ...dataToUpdate } = formData;
      let response;
  
      if (employee) {
        const { error } = await supabase
          .from('userprofile')
          .update(dataToUpdate)
          .match({ id: employee.id });
  
        if (error) throw error;
  
        response = { ...employee, ...dataToUpdate };
      } else {
        // Insert new employee
        const { error } = await supabase
          .from('userprofile')
          .insert([dataToUpdate]);
  
        if (error) throw error;
  
        response = dataToUpdate; // Newly added employee data
      }
  
      // Update state
      setEmployee(response);
      setIsEditing(false);
    } catch (error) {
      console.error("Error saving employee data:", error.message);
    }
  };
  
  

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div className="bg-zinc-900 text-white w-full p-4 lg:p-8 flex flex-col items-center">
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 bg-zinc-700 rounded-full mb-4"></div>
        <button className="text-zinc-300">Change profile picture</button>
      </div>
      <div className="w-full lg:w-2/3 mt-8">
        <h2 className="text-2xl text-zinc-200 text-center font-semibold mb-4">Personal Information</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {['name', 'date_of_birth', 'email_id', 'phone_number'].map((field, index) => (
            <div key={index} className="bg-zinc-800 p-4 rounded-md border-2 border-zinc-400">
              <p className="text-white text-center font-semibold">{field.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}</p>
              <input
                type={field === 'date_of_birth' ? 'date' : 'text'}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                disabled={!isEditing}
                className={`text-center text-zinc-400 font-semibold ${!isEditing ? 'bg-zinc-800' : 'bg-zinc-700'}`}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="w-full lg:w-2/3 mt-8">
        <h2 className="text-2xl text-zinc-200 text-center font-semibold mb-4">Address</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {['country', 'state'].map((field, index) => (
            <div key={index} className="bg-zinc-800 p-4 rounded-md border-2 border-zinc-400">
              <p className="text-white text-center font-semibold">{field.charAt(0).toUpperCase() + field.slice(1)}</p>
              <input
                type="text"
                name={field}
                value={formData[field]}
                onChange={handleChange}
                disabled={!isEditing}
                className={`text-center text-zinc-400 font-semibold ${!isEditing ? 'bg-zinc-800' : 'bg-zinc-700'}`}
              />
            </div>
          ))}
          <div className="col-span-1 lg:col-span-2 bg-zinc-800 p-4 rounded-md border-2 border-zinc-400">
            <p className="text-white text-center font-semibold">Address</p>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              disabled={!isEditing}
              className={`text-center text-zinc-400 font-semibold ${!isEditing ? 'bg-zinc-800' : 'bg-zinc-700'}`}
            />
          </div>
        </div>
      </div>
      {isEditing ? (
        <button
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
          onClick={handleSave}
        >
          Save
        </button>
      ) : (
        <>
          {employee ? (
            <button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
              onClick={()=>{
                setIsEditing(true);
              }}
            >
              Edit Profile
            </button>
          ) : (
            <button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
              onClick={() => {
                setIsEditing(true);
                setFormData({
                  name: '', date_of_birth: '', email_id: '',
                  phone_number: '', country: '', state: '', address: ''
                });
              }}
            >
              Add Profile
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default Data;
