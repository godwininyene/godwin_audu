import { useState, useEffect } from "react";

const useCustomSearchParams = () => {
  const [searchParams, setSearchParams] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    const paramsObj = {};
    params.forEach((value, key) => {
      paramsObj[key] = value;
    });
    return paramsObj;
  });

  const updateSearchParams = (newParams) => {
    const currentParams = new URLSearchParams(window.location.search);

    // Update the parameters
    for (const [key, value] of Object.entries(newParams)) {
      currentParams.set(key, value);
    }

    // Update the URL without refreshing the page
    window.history.pushState({}, '', `?${currentParams.toString()}`);

    // Update the state to reflect the new search params
    setSearchParams((prevParams) => ({ ...prevParams, ...newParams }));
  };

  // Function to clear all query parameters
  const clearSearchParams = () => {
    // Clear the URL search params
    window.history.pushState({}, '', window.location.pathname);

    // Reset the state to an empty object
    setSearchParams({});
  };

  return [searchParams, updateSearchParams, clearSearchParams];
};

export default useCustomSearchParams;
