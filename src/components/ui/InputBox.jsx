import React from 'react';
import { Textarea, IconButton } from "@material-tailwind/react";

const InputBox = ({ value, onChange, onSubmit }) => {
  return (
    <div className="flex items-center w-full">
      <div className="flex w-full rounded-[99px] border border-[#3D365C] bg-[#3D365C] p-1">
        <Textarea
          rows={1}
          resize={true}
          placeholder="Your Message"
          className="flex-1 min-h-full !border-0 focus:border-transparent bg-[#3D365C] text-white"
          containerProps={{
            className: "grid h-full",
          }}
          labelProps={{
            className: "before:content-none after:content-none",
          }}
          value={value}
          onChange={onChange}
        />
        <IconButton
          variant="text"
          className="rounded-full  hover:bg-[#ada5d0] hover:text-[#ada5d0]  text-white ml-2"
          onClick={onSubmit}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="gray"
            strokeWidth={2}
            className="h-8 w-8 bg-blue-gray-200  p-1 rounded-2xl"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
            />
          </svg>
        </IconButton>
      </div>
    </div>
  );
};

export default InputBox;
