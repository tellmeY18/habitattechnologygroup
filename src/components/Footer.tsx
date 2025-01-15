import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="footer-bottom overlay-wraper">
        <div className="overlay-main"></div>
        <div className="container p-t30">
          <div className="row">
            <div className="col-md-12 text-center copyright-block p-t15">
              <span className="copyrights-text">CC 2025 Demo Project</span>
            </div>
          </div>
        </div>
      </div>
      <div id="particles-dark" className="particles-canvas">
        <canvas className="particles-js-canvas-el"></canvas>
      </div>
    </footer>
  );
};

export default Footer;
