import React from "react";
import './TrustedBy.css';

const TrustedBy = () => {
  return (
    <div className="trusted-container">
      <h2 className="trusted-heading">Trusted by</h2>
      <div className="trusted-logos">
        <div className="trusted-company">
          <img src="https://cdn.prod.website-files.com/676698cb172848529c42152b/6766bd0a0324347a5708c02e_Tiger.png" alt="Tiger Global" />
          
        </div>
        <div className="trusted-company">
          <img src="https://cdn.prod.website-files.com/676698cb172848529c42152b/6766bd0aedb869e5116d6587_Argor.png" alt="Argor" />
         
        </div>
        <div className="trusted-company">
          <img src="https://cdn.prod.website-files.com/676698cb172848529c42152b/6766bd0a1058b01e4bcd7560_rocketship-p-2000.png" alt="Rocketship" />
          
        </div>
        <div className="trusted-company">
          <img src="https://cdn.prod.website-files.com/676698cb172848529c42152b/6766bd0abd286d304ed8317b_Goodwater-p-2000.png" alt="Goodwater" />
        
        </div>
        <div className="trusted-company">
          <img src="https://cdn.prod.website-files.com/676698cb172848529c42152b/6766bd0ad6e90a313567780e_ac%20ventures-p-2000.png" alt="AC Ventures" />
         
        </div>
      
        <div className="trusted-company">
          <img src="https://cdn.prod.website-files.com/676698cb172848529c42152b/6766bd0a91a48db16a1f654a_Indogen-Capital-Logo-2.png" alt="Indogen Capital" />
         
        </div>
        {/* <div className="trusted-company">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUvsF_mACr6Z2gER-PwwheEJVydIjPcls9Cg&s" alt="TATA" />
        </div>
        <div className="trusted-company">
          <img src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo.png" alt="Sr" />
        </div> */}
      </div>
    </div>
  );
};

export default TrustedBy;
