import { useState, useEffect } from 'react';

// eslint-disable-next-line react/prop-types
const RecorderModal = () => {

  const [stream, setStream] = useState(null);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [recordedBlobs, setRecordedBlobs] = useState([]);
  const [recording, setRecording] = useState(false);

  const handleDataAvailable = (event) => {
    if (event.data && event.data.size > 0) {
      setRecordedBlobs((prev) => {
        const newBlobs = [...prev, event.data];
        return newBlobs;
      });
    }
  };


  const startRecording = () => {
    setRecordedBlobs([]);
    let newMediaRecorder;
    try {
      newMediaRecorder = new MediaRecorder(stream);
    } catch (e0) {
      console.error('Unable to create MediaRecorder with options Object: ', e0);
      return;
    }
    newMediaRecorder.start();
    newMediaRecorder.ondataavailable = handleDataAvailable;
    setMediaRecorder(newMediaRecorder);
    setRecording(true);
  };

  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      setRecording(false);
    }
  };
  const downloadRecording = () => {
    saveRecording();
    console.log("recordedBlobs", recordedBlobs)
    // console.log("downloading blobs", recordedBlobs2)
  }

  const saveRecording = () => {
    // const blob = new Blob(recordedBlobs, { type: 'audio/webm' });
    const blob = new Blob(recordedBlobs, { type: 'audio/webm; codecs=opus' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style = 'display: none';
    a.href = url;
    a.download = 'recorded_audio.webm';
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      window.URL.revokeObjectURL(url);
    }, 100);
  };

  useEffect(() => {
    const handleSuccess = (stream) => {
      setStream(stream);
    };

    navigator.mediaDevices.getUserMedia({ audio: true }).then(handleSuccess);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // if (!deleteModal) return null;

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
          &#8203;
        </span>
          
        <div className="inline-block my-auto bg-gray-50 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <div className="bg-gray-50 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="flex flex-col w-full mt-3 text-center sm:mt-0 sm:text-left">
                <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                  Create a task using Voice
                </h3>
                <div className="mt-5">
                  <div>Use Record and Stop button to start and Stop the recording</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center mt-4 mb-4 p-6">
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 flex items-center justify-center w-full h-full">
                <svg
                  className="animate-ping absolute w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="12" fill="currentColor" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="61" viewBox="0 0 20 21" fill="none">
                  <g clipPath="url(#clip0_580_29)">
                    <path d="M10 1.33337C9.33696 1.33337 8.70107 1.59677 8.23223 2.06561C7.76339 2.53445 7.5 3.17033 7.5 3.83337V10.5C7.5 11.1631 7.76339 11.799 8.23223 12.2678C8.70107 12.7366 9.33696 13 10 13C10.663 13 11.2989 12.7366 11.7678 12.2678C12.2366 11.799 12.5 11.1631 12.5 10.5V3.83337C12.5 3.17033 12.2366 2.53445 11.7678 2.06561C11.2989 1.59677 10.663 1.33337 10 1.33337Z" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15.8332 8.83337V10.5C15.8332 12.0471 15.2186 13.5309 14.1246 14.6248C13.0307 15.7188 11.5469 16.3334 9.99984 16.3334C8.45274 16.3334 6.96901 15.7188 5.87505 14.6248C4.78109 13.5309 4.1665 12.0471 4.1665 10.5V8.83337" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10 16.3334V19.6667" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6.6665 19.6666H13.3332" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_580_29">
                      <rect width="20" height="20" fill="white" transform="translate(0 0.5)" />
                    </clipPath>
                  </defs>
                </svg>

              </div>
            </div>
            <div className="flex gap-3 sm:gap-6 mt-6">
              <button
                onClick={startRecording}
                disabled={recording}
                className="bg-blue-500 disabled:bg-opacity-50 disabled:hover:scale-100 active:scale-90 transition duration-200 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
              >
                Record
              </button>
              <button
                onClick={stopRecording}
                disabled={!recording}
                className="bg-yellow-500 disabled:bg-opacity-50 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
              >
                Stop
              </button>
              <button
                disabled={recording}
                onClick={downloadRecording}
                className="bg-red-500 disabled:bg-opacity-50 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
              >
                Close
              </button>
              {/* <button
                disabled={recording}
                onClick={downloadRecording}
                className="bg-green-500 disabled:bg-opacity-50 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
              >
                Download
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecorderModal;
