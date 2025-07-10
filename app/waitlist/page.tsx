'use client';

export default function WaitlistPage() {
  return (
    <div className="min-h-screen bg-[#061525] text-white flex flex-col items-center justify-center px-4 py-10">
      <h1 className="text-3xl font-bold mb-4 text-center">Join the Waitlist</h1>
      <p className="mb-6 text-gray-300 text-center max-w-xl">
        Be Among the First to Experience Synthetic Enablement™
      </p>

      <div className="bg-white text-black rounded-lg p-6 w-full max-w-2xl shadow-lg">
        <div
          id="crmWebToEntityForm"
          dangerouslySetInnerHTML={{
            __html: `
              <form id='webform6780794000000588207' action='https://crm.zoho.com/crm/WebToLeadForm' name='WebToLeads6780794000000588207' method='POST' accept-charset='UTF-8'>
                <input type='hidden' name='xnQsjsdp' value='1085fcae38eed5d990817ff8015eeba11506939cc1ece7a6396a2c682796417f' />
                <input type='hidden' name='zc_gad' id='zc_gad' value='' />
                <input type='hidden' name='xmIwtLD' value='cf93d28581d396b72bad0b8cd6b47b08e247ed240343f1494d3adff4d3cc34ad95c6c7dbd5f68c1d8999a8be6f85a3a6' />
                <input type='hidden' name='actionType' value='TGVhZHM=' />
                <input type='hidden' name='returnURL' value='https://digitalego.ai/thank-you' />

                <label class='block mb-2 font-semibold'>First Name *</label>
                <input name='First Name' required type='text' class='w-full p-2 border border-gray-300 rounded mb-4' />

                <label class='block mb-2 font-semibold'>Last Name *</label>
                <input name='Last Name' required type='text' class='w-full p-2 border border-gray-300 rounded mb-4' />

                <label class='block mb-2 font-semibold'>Email *</label>
                <input name='Email' required type='email' class='w-full p-2 border border-gray-300 rounded mb-4' />

                <label class='block mb-2 font-semibold'>Company</label>
                <input name='Company' type='text' class='w-full p-2 border border-gray-300 rounded mb-4' />

                <label class='block mb-2 font-semibold'>What would you like to build?</label>
                <textarea name='Description' class='w-full p-2 border border-gray-300 rounded mb-6'></textarea>

                <button type='submit' class='bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-500'>
                  Submit
                </button>
              </form>
            `,
          }}
        />
      </div>
    </div>
  );
}
