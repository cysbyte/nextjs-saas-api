import { Playpen_Sans } from "next/font/google";
import React, { FC, useRef } from "react";
type Props = {audio: string};

const PlayControl: FC<Props> = (props) => {
  const audioRef = useRef<any>(null);
  const playAudio = () => {
    console.log(audioRef.current)
    audioRef.current?.play();
  }

  const formatTime = (time: number) => {
    if (time && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const formatMinutes =
        minutes < 10 ? `0${minutes}` : `${minutes}`;
      const seconds = Math.floor(time % 60);
      const formatSeconds =
        seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${formatMinutes}:${formatSeconds}`;
    }
    return '00:00';
  };

  return (

    <div className="flex justify-between items-center mt-4">


      
      <div className="flex flex-1 items-center justify-start">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-1"
        >
          <path
            d="M11 5L6 9H2V15H6L11 19V5Z"
            stroke="#94A3B8"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15.54 8.45996C16.4774 9.3976 17.004 10.6691 17.004 11.995C17.004 13.3208 16.4774 14.5923 15.54 15.53"
            stroke="#94A3B8"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M19.0699 4.92993C20.9447 6.80521 21.9978 9.34829 21.9978 11.9999C21.9978 14.6516 20.9447 17.1947 19.0699 19.0699"
            stroke="#94A3B8"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <svg
          width="100"
          height="20"
          viewBox="0 0 100 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="6" width="100" height="8" rx="4" fill="#EEF2FF" />
          <rect y="6" width="67" height="8" rx="4" fill="#6366F1" />
          <circle
            cx="67"
            cy="10"
            r="9"
            fill="white"
            stroke="#6366F1"
            stroke-width="2"
          />
        </svg>
      </div>

      <div className="flex flex-1 items-center justify-center gap-x-3">
        <button>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 19L2 12L11 5V19Z"
              fill="#94A3B8"
              stroke="#94A3B8"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M22 19L13 12L22 5V19Z"
              fill="#94A3B8"
              stroke="#94A3B8"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button className="" onClick={playAudio}>
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_68_2084)">
              <rect
                x="2"
                y="1"
                width="40"
                height="40"
                rx="20"
                fill="#6366F1"
                shape-rendering="crispEdges"
              />
              <path
                d="M17.3333 15L26.6666 21L17.3333 27V15Z"
                fill="white"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_68_2084"
                x="0"
                y="0"
                width="44"
                height="44"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="1" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_68_2084"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_68_2084"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </button>

        <div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 19L22 12L13 5V19Z"
              fill="#94A3B8"
              stroke="#94A3B8"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M2 19L11 12L2 5V19Z"
              fill="#94A3B8"
              stroke="#94A3B8"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>

      <div className="flex flex-1 items-center justify-end gap-x-3">
        <button>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 6H21"
              stroke="#94A3B8"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M19 6V20C19 21 18 22 17 22H7C6 22 5 21 5 20V6"
              stroke="#94A3B8"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8 6V4C8 3 9 2 10 2H14C15 2 16 3 16 4V6"
              stroke="#94A3B8"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 9C7.65685 9 9 7.65685 9 6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6C3 7.65685 4.34315 9 6 9Z"
              stroke="#94A3B8"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6 21C7.65685 21 9 19.6569 9 18C9 16.3431 7.65685 15 6 15C4.34315 15 3 16.3431 3 18C3 19.6569 4.34315 21 6 21Z"
              stroke="#94A3B8"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M20.0001 4L8.12012 15.88"
              stroke="#94A3B8"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14.47 14.48L20 20"
              stroke="#94A3B8"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.12012 8.12012L12.0001 12.0001"
              stroke="#94A3B8"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>

        <select
          id="speed"
          className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-fit"
        >
          <option selected value="speed">
            1X
          </option>
          <option value="speed125">1.25X</option>
          <option value="spead15">1.5X</option>
          <option value="speed175">1.75X</option>
          <option value="speed2">2X</option>
        </select>
      </div>
      <audio src={props.audio} ref={audioRef}/>
    </div>
  );
};

export default PlayControl;
