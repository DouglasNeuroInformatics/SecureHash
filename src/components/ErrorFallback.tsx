export const ErrorFallback = () => (
  <div className="flex flex-grow flex-col items-center justify-center gap-1 p-3 text-center">
    <h1 className="text-sm font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">
      Unexpected Error
    </h1>
    <h3 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">Something Went Wrong</h3>
    <p className="mt-2 max-w-prose text-sm text-slate-600 sm:text-base dark:text-slate-300">
      We apologize for the inconvenience. Please contact us for further assistance.
    </p>
    <div className="mt-6">
      <button
        className="text-sky-800 underline-offset-4 hover:text-sky-700 hover:underline"
        type="button"
        onClick={() => {
          window.location.assign(window.location.origin);
        }}
      >
        Reload Page<span aria-hidden="true"> &rarr;</span>
      </button>
    </div>
  </div>
);
