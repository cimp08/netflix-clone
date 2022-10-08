import React from 'react'
import SavedShow from '../components/SavedShow';

const Account = () => {
  return (
    <>
      <div className="w-full text-white">
        <img
          className="w-full h-[400px] object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/b321426e-35ae-4661-b899-d63bca17648a/73c8b768-35f8-4202-ad72-7eb4bfc69edd/SE-sv-20220926-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="netflix background"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]"></div>
        <div className="absolute top-[20%] p-4 md:p-8">
          <h2 className="text-3xl md:text-5xl font-bold">My Shows</h2>
        </div>
      </div>
      <SavedShow />
    </>
  );
}

export default Account