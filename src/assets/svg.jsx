// import { useState } from "react";
import { extractFileExtension } from "../utils/helper";

export const Microphone = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 28 28"
    fill="none"
  >
    <path
      d="M11.667 9.3335C12.3113 9.3335 12.8336 9.85583 12.8336 10.5002V15.1668C12.8336 15.8112 12.3113 16.3335 11.667 16.3335C11.0227 16.3335 10.5003 15.8112 10.5003 15.1668V10.5002C10.5003 9.85583 11.0227 9.3335 11.667 9.3335Z"
      fill="#C13DFF"
      fillOpacity="0.9"
    />
    <path
      d="M17.5003 10.5002C17.5003 9.85583 16.978 9.3335 16.3336 9.3335C15.6893 9.3335 15.167 9.85583 15.167 10.5002V15.1668C15.167 15.8112 15.6893 16.3335 16.3336 16.3335C16.978 16.3335 17.5003 15.8112 17.5003 15.1668V10.5002Z"
      fill="#C13DFF"
      fillOpacity="0.9"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.0003 2.3335C9.48999 2.3335 5.83365 5.98984 5.83365 10.5002V15.1668C5.83365 19.6772 9.48999 23.3335 14.0003 23.3335C18.5106 23.3335 22.167 19.6772 22.167 15.1668V10.5002C22.167 5.98984 18.5106 2.3335 14.0003 2.3335ZM8.16698 10.5002C8.16698 7.2785 10.7787 4.66683 14.0003 4.66683C17.222 4.66683 19.8336 7.2785 19.8336 10.5002V15.1668C19.8336 18.3885 17.222 21.0002 14.0003 21.0002C10.7787 21.0002 8.16698 18.3885 8.16698 15.1668V10.5002Z"
      fill="#C13DFF"
      fillOpacity="0.9"
    />
    <path
      d="M5.77378 18.2979C5.57002 17.6866 4.90932 17.3563 4.29805 17.56C3.68678 17.7638 3.35643 18.4245 3.56019 19.0358C6.90455 29.0689 21.0961 29.0689 24.4404 19.0358C24.6442 18.4245 24.3138 17.7638 23.7026 17.56C23.0913 17.3563 22.4306 17.6866 22.2269 18.2979C19.5916 26.2037 8.40905 26.2037 5.77378 18.2979Z"
      fill="#C13DFF"
      fillOpacity="0.9"
    />
  </svg>
);

export const Cloud = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="29"
      viewBox="0 0 28 29"
      fill="none"
    >
      <path
        d="M7 11.5835C7 8.03967 9.87284 5.16683 13.4167 5.16683C16.5558 5.16683 19.1707 7.42221 19.7249 10.4013C19.8026 10.819 20.1013 11.1615 20.5046 11.2953C22.8271 12.0656 24.5 14.2557 24.5 16.8335C24.5 20.0552 21.8883 22.6668 18.6667 22.6668C18.0223 22.6668 17.5 23.1892 17.5 23.8335C17.5 24.4778 18.0223 25.0002 18.6667 25.0002C23.177 25.0002 26.8333 21.3438 26.8333 16.8335C26.8333 13.459 24.7873 10.565 21.8707 9.31967C20.8727 5.5845 17.467 2.8335 13.4167 2.8335C8.58417 2.8335 4.66666 6.751 4.66666 11.5835C4.66666 11.7005 4.66897 11.817 4.67353 11.933C2.57889 13.1415 1.16666 15.4048 1.16666 18.0002C1.16666 21.8662 4.30067 25.0002 8.16666 25.0002C8.811 25.0002 9.33333 24.4778 9.33333 23.8335C9.33333 23.1892 8.811 22.6668 8.16666 22.6668C5.58934 22.6668 3.5 20.5775 3.5 18.0002C3.5 16.0666 4.6762 14.4051 6.35676 13.6971C6.84307 13.4923 7.13132 12.9865 7.05972 12.4637C7.02039 12.1765 7 11.8827 7 11.5835Z"
        fill="#475367"
      />
      <path
        d="M13.2249 17.1282C13.6669 16.7353 14.3331 16.7353 14.7751 17.1282L16.5251 18.6837C17.0067 19.1118 17.05 19.8492 16.622 20.3308C16.2475 20.7521 15.6362 20.838 15.1667 20.5663V26.1668C15.1667 26.8112 14.6443 27.3335 14 27.3335C13.3557 27.3335 12.8333 26.8112 12.8333 26.1668V20.5663C12.3637 20.838 11.7525 20.7521 11.378 20.3308C10.9499 19.8492 10.9933 19.1118 11.4749 18.6837L13.2249 17.1282Z"
        fill="#475367"
      />
    </svg>
  );
};

export const MultiLine = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M21.5 4H7.5"
        stroke="#C13DFF"
        strokeOpacity="0.9"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.5 12H7.5"
        stroke="#C13DFF"
        strokeOpacity="0.9"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.5 20H7.5"
        stroke="#C13DFF"
        strokeOpacity="0.9"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="1.25"
        cy="1.25"
        r="1.25"
        transform="matrix(-1 0 0 1 4.5 2.75)"
        fill="#C13DFF"
        fillOpacity="0.9"
      />
      <circle
        cx="1.25"
        cy="1.25"
        r="1.25"
        transform="matrix(-1 0 0 1 4.5 10.75)"
        fill="#C13DFF"
        fillOpacity="0.9"
      />
      <circle
        cx="1.25"
        cy="1.25"
        r="1.25"
        transform="matrix(-1 0 0 1 4.5 18.75)"
        fill="#C13DFF"
        fillOpacity="0.9"
      />
    </svg>
  );
};

export const Document = ({ type }) => {
  return (
    <div className="relative">
      <div className="absolute top-5 bg-primary w-[calc(100%_+_4px)] -ml-0.5 text-center text-white text-[8px]">
        {type && extractFileExtension(type)}
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="39"
        height="46"
        viewBox="0 0 39 46"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.8335 0.600098C1.28121 0.600098 0.833496 1.04781 0.833496 1.6001V44.4001C0.833496 44.9524 1.28121 45.4001 1.83349 45.4001H37.1668C37.7191 45.4001 38.1668 44.9524 38.1668 44.4001V8.06676L30.7002 0.600098H1.8335Z"
          fill="#E4E7EC"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M30.7002 0.600098V8.06676H38.1669L30.7002 0.600098Z"
          fill="#98A2B3"
        />
      </svg>
    </div>
  );
};

export const Alert = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M8.00004 14.6668C11.6819 14.6668 14.6667 11.6821 14.6667 8.00016C14.6667 4.31826 11.6819 1.3335 8.00004 1.3335C4.31814 1.3335 1.33337 4.31826 1.33337 8.00016C1.33337 11.6821 4.31814 14.6668 8.00004 14.6668Z"
        fill="#DE5E5E"
      />
      <path
        d="M8 5.3335V8.00016"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 10.6665H8.00667"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Plus = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M10.8332 7.99996C10.8332 7.53972 10.4601 7.16663 9.99984 7.16663C9.5396 7.16663 9.1665 7.53972 9.1665 7.99996V9.66663H7.49984C7.0396 9.66663 6.6665 10.0397 6.6665 10.5C6.6665 10.9602 7.0396 11.3333 7.49984 11.3333H9.1665V13C9.1665 13.4602 9.5396 13.8333 9.99984 13.8333C10.4601 13.8333 10.8332 13.4602 10.8332 13V11.3333H12.4998C12.9601 11.3333 13.3332 10.9602 13.3332 10.5C13.3332 10.0397 12.9601 9.66663 12.4998 9.66663H10.8332V7.99996Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.99984 2.16663C5.39746 2.16663 1.6665 5.89759 1.6665 10.5C1.6665 15.1023 5.39746 18.8333 9.99984 18.8333C14.6022 18.8333 18.3332 15.1023 18.3332 10.5C18.3332 5.89759 14.6022 2.16663 9.99984 2.16663ZM3.33317 10.5C3.33317 6.81806 6.31794 3.83329 9.99984 3.83329C13.6817 3.83329 16.6665 6.81806 16.6665 10.5C16.6665 14.1819 13.6817 17.1666 9.99984 17.1666C6.31794 17.1666 3.33317 14.1819 3.33317 10.5Z"
        fill="white"
      />
    </svg>
  );
};

export const AddVoiceIcon = () => {
  return (
    <svg
      className="mr-5"
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
    >
      <path
        d="M7.5 0.625C7.00272 0.625 6.52581 0.822544 6.17417 1.17417C5.82254 1.52581 5.625 2.00272 5.625 2.5V7.5C5.625 7.99728 5.82254 8.47419 6.17417 8.82583C6.52581 9.17746 7.00272 9.375 7.5 9.375C7.99728 9.375 8.47419 9.17746 8.82583 8.82583C9.17746 8.47419 9.375 7.99728 9.375 7.5V2.5C9.375 2.00272 9.17746 1.52581 8.82583 1.17417C8.47419 0.822544 7.99728 0.625 7.5 0.625Z"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="stroke-secondary group-hover:stroke-[#22C6BC]"
      />
      <path
        d="M11.875 6.25V7.5C11.875 8.66032 11.4141 9.77312 10.5936 10.5936C9.77312 11.4141 8.66032 11.875 7.5 11.875C6.33968 11.875 5.22688 11.4141 4.40641 10.5936C3.58594 9.77312 3.125 8.66032 3.125 7.5V6.25"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="stroke-secondary group-hover:stroke-[#22C6BC]"
      />
      <path
        d="M7.5 11.875V14.375"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="stroke-secondary group-hover:stroke-[#22C6BC]"
      />
      <path
        d="M5 14.375H10"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="stroke-secondary group-hover:stroke-[#22C6BC]"
      />
    </svg>
  );
};

export const AddImageIcon = () => {
  return (
    <svg
      className="mr-5"
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
    >
      <path
        d="M11.875 1.875H3.125C2.43464 1.875 1.875 2.43464 1.875 3.125V11.875C1.875 12.5654 2.43464 13.125 3.125 13.125H11.875C12.5654 13.125 13.125 12.5654 13.125 11.875V3.125C13.125 2.43464 12.5654 1.875 11.875 1.875Z"
        strokeOpacity="0.85"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="stroke-secondary group-hover:stroke-[#22C6BC]"
      />
      <path
        d="M5.3125 6.25C5.83027 6.25 6.25 5.83027 6.25 5.3125C6.25 4.79473 5.83027 4.375 5.3125 4.375C4.79473 4.375 4.375 4.79473 4.375 5.3125C4.375 5.83027 4.79473 6.25 5.3125 6.25Z"
        strokeOpacity="0.85"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="stroke-secondary group-hover:stroke-[#22C6BC]"
      />
      <path
        d="M13.125 9.375L10 6.25L3.125 13.125"
        strokeOpacity="0.85"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="stroke-secondary group-hover:stroke-[#22C6BC]"
      />
    </svg>
  );
};

export const AddCollaboratorIcon = () => {
  return (
    <svg
      className="mr-5"
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
    >
      <path
        d="M10 13.125V11.875C10 11.212 9.73661 10.5761 9.26777 10.1072C8.79893 9.63839 8.16304 9.375 7.5 9.375H3.125C2.46196 9.375 1.82607 9.63839 1.35723 10.1072C0.888392 10.5761 0.625 11.212 0.625 11.875V13.125"
        strokeOpacity="0.85"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="stroke-secondary group-hover:stroke-[#22C6BC]"
      />
      <path
        d="M5.3125 6.875C6.69321 6.875 7.8125 5.75571 7.8125 4.375C7.8125 2.99429 6.69321 1.875 5.3125 1.875C3.93179 1.875 2.8125 2.99429 2.8125 4.375C2.8125 5.75571 3.93179 6.875 5.3125 6.875Z"
        strokeOpacity="0.85"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="stroke-secondary group-hover:stroke-[#22C6BC]"
      />
      <path
        d="M12.5 5V8.75"
        strokeOpacity="0.85"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="stroke-secondary group-hover:stroke-[#22C6BC]"
      />
      <path
        d="M14.375 6.875H10.625"
        strokeOpacity="0.85"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="stroke-secondary group-hover:stroke-[#22C6BC]"
      />
    </svg>
  );
};

export const ChangePriorityIcon = () => {
  return (
    <svg
      className="mr-5"
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
    >
      <path
        d="M11.875 13.125L7.5 10L3.125 13.125V3.125C3.125 2.79348 3.2567 2.47554 3.49112 2.24112C3.72554 2.0067 4.04348 1.875 4.375 1.875H10.625C10.9565 1.875 11.2745 2.0067 11.5089 2.24112C11.7433 2.47554 11.875 2.79348 11.875 3.125V13.125Z"
        strokeOpacity="0.85"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="stroke-secondary group-hover:stroke-[#22C6BC]"
      />
    </svg>
  );
};

export const BellIcon = () => {
  return (
    <svg
      className="mr-5"
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
    >
      <path
        d="M11.25 5C11.25 4.00544 10.8549 3.05161 10.1517 2.34835C9.44839 1.64509 8.49456 1.25 7.5 1.25C6.50544 1.25 5.55161 1.64509 4.84835 2.34835C4.14509 3.05161 3.75 4.00544 3.75 5C3.75 9.375 1.875 10.625 1.875 10.625H13.125C13.125 10.625 11.25 9.375 11.25 5Z"
        strokeOpacity="0.85"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="stroke-secondary group-hover:stroke-[#22C6BC]"
      />
      <path
        d="M8.5812 13.125C8.47132 13.3144 8.3136 13.4717 8.12384 13.581C7.93408 13.6903 7.71894 13.7478 7.49995 13.7478C7.28096 13.7478 7.06582 13.6903 6.87606 13.581C6.6863 13.4717 6.52858 13.3144 6.4187 13.125"
        strokeOpacity="0.85"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="stroke-secondary group-hover:stroke-[#22C6BC]"
      />
    </svg>
  );
};

export const MoreIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
        stroke="#033835"
        strokeOpacity="0.85"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
        stroke="#033835"
        strokeOpacity="0.85"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
        stroke="#033835"
        strokeOpacity="0.85"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const StarIcon = ({ isStarred }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      className={isStarred ? "fill-secondary" : "fill-none"}
    >
      <path
        d="M10 1.66669L12.575 6.88335L18.3333 7.72502L14.1667 11.7834L15.15 17.5167L10 14.8084L4.85 17.5167L5.83333 11.7834L1.66667 7.72502L7.425 6.88335L10 1.66669Z"
        stroke="#033835"
        strokeOpacity="0.85"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const CloseIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
    >
      <path
        d="M8.226 6.5756C7.77039 6.11998 7.0317 6.11998 6.57608 6.5756C6.12047 7.03121 6.12047 7.7699 6.57608 8.22551L12.3508 14.0002L6.57608 19.7749C6.12047 20.2305 6.12047 20.9692 6.57608 21.4248C7.0317 21.8804 7.77039 21.8804 8.226 21.4248L14.0007 15.6501L19.7754 21.4248C20.231 21.8804 20.9697 21.8804 21.4253 21.4248C21.8809 20.9692 21.8809 20.2305 21.4253 19.7749L15.6506 14.0002L21.4253 8.22551C21.8809 7.7699 21.8809 7.03121 21.4253 6.5756C20.9697 6.11998 20.231 6.11998 19.7754 6.5756L14.0007 12.3503L8.226 6.5756Z"
        fill="#98A2B3"
      />
    </svg>
  );
};

export const TrashCan = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 15 15"
      fill="none"
    >
      <path
        d="M1.875 3.75H3.125H13.125"
        stroke="#D42620"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.875 3.75V12.5C11.875 12.8315 11.7433 13.1495 11.5089 13.3839C11.2745 13.6183 10.9565 13.75 10.625 13.75H4.375C4.04348 13.75 3.72554 13.6183 3.49112 13.3839C3.2567 13.1495 3.125 12.8315 3.125 12.5V3.75M5 3.75V2.5C5 2.16848 5.1317 1.85054 5.36612 1.61612C5.60054 1.3817 5.91848 1.25 6.25 1.25H8.75C9.08152 1.25 9.39946 1.3817 9.63388 1.61612C9.8683 1.85054 10 2.16848 10 2.5V3.75"
        stroke="#D42620"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.25 6.875V10.625"
        stroke="#D42620"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.75 6.875V10.625"
        stroke="#D42620"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const PencilIcon = () => {
  return (
    <svg
      className="mr-5"
      fill="#033835"
      xmlns="http://www.w3.org/2000/svg"
      width="15px"
      height="15px"
      viewBox="0 0 705.651 705.65"
      xmlSpace="preserve"
    >
      <g>
        <g>
          <polygon points="604.901,279.15 426.5,100.65 426.5,100.65 36.701,490.551 215.1,668.95 		" />
          <path d="M32.8,691.95l145.601,13.7l-1.301-1.3L1.3,528.551L0,527.25l13.7,145.601C14.5,681.45,24.201,691.15,32.8,691.95z" />
          <path
            d="M641.6,242.45L463.201,63.95l58.1-58.1c7.8-7.801,20.5-7.801,28.3,0L699.8,156.05c7.8,7.801,7.8,20.5,0,28.301
			L641.6,242.45z"
          />
        </g>
      </g>
    </svg>
  );
};
export const PlusIconSmall = () => {
  return (
    <svg
      className="mr-5"
      width="15px"
      height="15px"
      viewBox="0 0 32 32"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="Icon-Set"
          transform="translate(-464.000000, -1087.000000)"
          fill="#033835"
        >
          <path
            d="M480,1117 C472.268,1117 466,1110.73 466,1103 C466,1095.27 472.268,1089 480,1089 C487.732,1089 494,1095.27 494,1103 C494,1110.73 487.732,1117 480,1117 L480,1117 Z M480,1087 C471.163,1087 464,1094.16 464,1103 C464,1111.84 471.163,1119 480,1119 C488.837,1119 496,1111.84 496,1103 C496,1094.16 488.837,1087 480,1087 L480,1087 Z M486,1102 L481,1102 L481,1097 C481,1096.45 480.553,1096 480,1096 C479.447,1096 479,1096.45 479,1097 L479,1102 L474,1102 C473.447,1102 473,1102.45 473,1103 C473,1103.55 473.447,1104 474,1104 L479,1104 L479,1109 C479,1109.55 479.447,1110 480,1110 C480.553,1110 481,1109.55 481,1109 L481,1104 L486,1104 C486.553,1104 487,1103.55 487,1103 C487,1102.45 486.553,1102 486,1102 L486,1102 Z"
            id="plus-circle"
          ></path>
        </g>
      </g>
    </svg>
  );
};
