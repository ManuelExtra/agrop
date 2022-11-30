import { Button } from 'flowbite-react';
import React from 'react';
import crops from '../assets/svgs/crops.svg';
import verified from '../assets/svgs/verified.svg';

import crop1 from '../assets/svgs/crop1.svg';
import crop2 from '../assets/svgs/crop2.svg';
import crop3 from '../assets/svgs/crop3.svg';
import crop4 from '../assets/svgs/crop4.svg';

export default function LaunchAppSuccess() {
  return (
    <div>
      <div class="flex max-sm:flex-wrap box mt-5 py-4 px-5">
        <div class="flex-initial w-full">
          <p className="text-3xl font-black main-color-nohover poppins">
            Connection Successful!
          </p>
          <p className="text-md">You can start adding your crops for sale</p>
        </div>
        <div class="flex-initial w-64 flex items-center justify-center max-sm:justify-start max-sm:items-start">
          <button className="rounded-xl p-3 text-white raleway main-bgcolor main-bgcolor:hover font-bold">
            Continue to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}
