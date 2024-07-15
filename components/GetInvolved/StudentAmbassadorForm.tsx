import React from 'react';

const StudentAmbassadorForm = () => {
  return (
    <div className="mx-14 mt-10 border-2 border-purple rounded-lg">
      <div className="mt-10 text-center font-bold text-purple">Student Ambassador Application</div>
      <div className="p-8">
        <div className="flex gap-4">
          <input 
            type="text" 
            name="firstName" 
            className="mt-1 block w-1/2 rounded-md border border-purple-300 bg-white px-3 py-4 placeholder-purple-400 shadow-sm placeholder:font-semibold placeholder:text-purple focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 sm:text-sm" 
            placeholder="First Name *" 
          />
          <input 
            type="text" 
            name="lastName" 
            className="mt-1 block w-1/2 rounded-md border border-purple-300 bg-white px-3 py-4 placeholder-purple-400 shadow-sm placeholder:font-semibold placeholder:text-purple focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 sm:text-sm" 
            placeholder="Last Name *" 
          />
        </div>
        <div className="my-6 flex gap-4">
          <input 
            type="email" 
            name="email" 
            className="mt-1 block w-1/2 rounded-md border border-purple bg-white px-3 py-4 placeholder-purple-400 shadow-sm placeholder:font-semibold placeholder:text-purple focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 sm:text-sm" 
            placeholder="Email *" 
          />
          <input 
            type="text" 
            name="phone" 
            className="mt-1 block w-1/2 rounded-md border border-purple bg-white px-3 py-4 placeholder-purple-400 shadow-sm placeholder:font-semibold placeholder:text-purple focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 sm:text-sm" 
            placeholder="Phone" 
          />
        </div>
        <div className="my-6 flex gap-4">
          <input 
            type="text" 
            name="address1" 
            className="mt-1 block w-1/2 rounded-md border border-purple bg-white px-3 py-4 placeholder-purple-400 shadow-sm placeholder:font-semibold placeholder:text-purple focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 sm:text-sm" 
            placeholder="Address 1 *" 
          />
          <input 
            type="text" 
            name="address2" 
            className="mt-1 block w-1/2 rounded-md border border-purple bg-white px-3 py-4 placeholder-purple-400 shadow-sm placeholder:font-semibold placeholder:text-purple focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 sm:text-sm" 
            placeholder="Address 2" 
          />
        </div>
        <div className="my-6 flex gap-4">
          <input 
            type="text" 
            name="city" 
            className="mt-1 block w-1/2 rounded-md border border-purple bg-white px-3 py-4 placeholder-purple-400 shadow-sm placeholder:font-semibold placeholder:text-purple focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 sm:text-sm" 
            placeholder="City *" 
          />
          <input 
            type="text" 
            name="state" 
            className="mt-1 block w-1/2 rounded-md border border-purple bg-white px-3 py-4 placeholder-purple-400 shadow-sm placeholder:font-semibold placeholder:text-purple focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 sm:text-sm" 
            placeholder="State" 
          />
        </div>
        <div className="my-6 flex gap-4">
          <input 
            type="text" 
            name="zip" 
            className="mt-1 block w-1/2 rounded-md border border-purple bg-white px-3 py-4 placeholder-purple-400 shadow-sm placeholder:font-semibold placeholder:text-purple focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 sm:text-sm" 
            placeholder="Zip" 
          />
          <input 
            type="text" 
            name="schoolType" 
            className="mt-1 block w-1/2 rounded-md border border-purple bg-white px-3 py-4 placeholder-purple-400 shadow-sm placeholder:font-semibold placeholder:text-purple focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 sm:text-sm" 
            placeholder="School Type" 
          />
        </div>
        <div className="my-6 flex gap-4">
          <input 
            type="text" 
            name="schoolName" 
            className="mt-1 block w-1/2 rounded-md border border-purple bg-white px-3 py-4 placeholder-purple-400 shadow-sm placeholder:font-semibold placeholder:text-purple focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 sm:text-sm" 
            placeholder="Name of School" 
          />
          <input 
            type="text" 
            name="graduationDate" 
            className="mt-1 block w-1/2 rounded-md border border-purple bg-white px-3 py-4 placeholder-purple-400 shadow-sm placeholder:font-semibold placeholder:text-purple focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 sm:text-sm" 
            placeholder="Expected Graduation Date (mm/yr)" 
          />
        </div>
        <div>
          <textarea 
            name="interest" 
            id="interest" 
            cols={30} 
            rows={10} 
            className="mb-10 h-40 w-full resize-none rounded-md border border-purple-300 p-5 placeholder-purple-400 font-semibold text-purple focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 sm:text-sm" 
            placeholder="Why are you interested in becoming a Student Ambassador?"
          ></textarea>
        </div>
        <div className="text-center">
          <button className="cursor-pointer rounded-lg bg-orange-500 px-8 py-5 text-sm font-semibold text-white hover:bg-orange">Submit Application</button>
        </div>
      </div>
    </div>
  );
}

export default StudentAmbassadorForm;
