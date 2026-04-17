import React from 'react';

const Footer = () => {
    return (
        <div>

            <footer className="bg-[#244D3F] text-white py-10">

      <div className=" mx-auto flex flex-col items-center gap-6 text-center">

        {/* Logo + Description */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">KeenKeeper</h1>

          <p className="text-sm text-gray-200 mt-2">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
        </div>

        
        <div>
          <p className="text-sm mb-3">Social Links</p>

          <div className="flex justify-center gap-4">
            
            <img src="/public/Facebook (1).png" alt="" />
            <img src="/public/Instagram (1).png " alt="" />
            <img src="/public/Twitter (1).png " alt="" />
          </div>
        </div>

        {/* Bottom */}
        <div className="text-xs text-gray-300 flex flex-col md:flex-row md:gap-10  items-center">

          <p>© 2026 KeenKeeper. All rights reserved.</p>

          <div className="flex gap-4">
            <a className="link link-hover">Privacy Policy</a>
            <a className="link link-hover">Terms of Service</a>
            <a className="link link-hover">Cookies</a>
          </div>

        </div>

      </div>

    </footer>
            
        </div>
    );
};

export default Footer;