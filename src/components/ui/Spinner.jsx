function Spinner({ size = "144px", width = "7px" }) {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
      role="status"
      aria-label="loading"
    >
      <div
        className={`animate-spin inline-block size-[${size}] border-[${width}] border-current border-t-transparent text-primary rounded-full`}
      ></div>
      <span className="sr-only">Loading News...</span>
    </div>
  );
}

export default Spinner;
