const Colors = () => {
  return (
    <div className='h-screen w-full flex justify-center gap-2 items-center'>

      {/* Primary colors */}
      <div className="flex flex-col gap-1">
        <div className="bg-primary-100 w-32 h-5"></div>
        <div className="bg-primary-200 w-32 h-5"></div>
        <div className="bg-primary-300 w-32 h-5"></div>
        <div className="bg-primary-400 w-32 h-5"></div>
        <div className="bg-primary w-32 h-5"></div>
        <div className="bg-primary-600 w-32 h-5"></div>
        <div className="bg-primary-700 w-32 h-5"></div>
        <div className="bg-primary-800 w-32 h-5"></div>
        <div className="bg-primary-900 w-32 h-5"></div>
      </div>

      {/* Gray colors */}
      <div className="flex flex-col gap-1">
        <div className="bg-grays-100 w-32 h-5"></div>
        <div className="bg-grays-200 w-32 h-5"></div>
        <div className="bg-grays-300 w-32 h-5"></div>
        <div className="bg-grays-400 w-32 h-5"></div>
        <div className="bg-grays w-32 h-5"></div>
        <div className="bg-grays-600 w-32 h-5"></div>
        <div className="bg-grays-700 w-32 h-5"></div>
        <div className="bg-grays-800 w-32 h-5"></div>
        <div className="bg-grays-900 w-32 h-5"></div>
      </div>

    </div>
  );
}

export default Colors;
