import { useState } from "react";
import "../styles/styleprograms.css";

import bgimg from "../imgs/bgimg.jpg";
import bgimg1 from "../imgs/bgimg1.jpg";
import desert from "../imgs/desert.jpg";
import Layout from "../layout/mainlayout";
import { Link } from "react-router-dom";

const Prog = (props) => {
  return (
    <div>
      <Layout>
        <div className="all">
          <div className="first">
            <div className="img1">
              <img src={bgimg} alt="" id="img1" />
            </div>
            <div className="desc1">
              <div className="title1">Green forest</div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              illum, maiores unde harum fuga consequuntur asperiores quaerat
              eligendi, itaque cum tempore deserunt porro voluptatibus sequi
              odit eum in illo ut. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Hic, rem, nostrum debitis ipsum unde quod rerum
              eum cum, architecto vitae quisquam et culpa perspiciatis odio!
              Corporis aliquam odit nulla deserunt.
              <div className="f">
                <div className="book1">
                  <Link to="/booking">Book now</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="second">
            <div className="desc2">
              <div className="title2">mountain and river</div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              illum, maiores unde harum fuga consequuntur asperiores quaerat
              eligendi, itaque cum tempore deserunt porro voluptatibus sequi
              odit eum in illo ut. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Hic, rem, nostrum debitis ipsum unde quod rerum
              eum cum, architecto vitae quisquam et culpa perspiciatis odio!
              Corporis aliquam odit nulla deserunt.
              <div className="s">
                <div className="book2">
                  <Link to="/booking">Book now</Link>
                </div>
              </div>
            </div>

            <div className="img2">
              <img src={bgimg1} alt="" id="img2" />
            </div>
          </div>

          <div className="third">
            <div className="img3">
              <img src={desert} alt="" id="img3" />
            </div>
            <div className="desc3">
              <div className="title3">Desert</div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              illum, maiores unde harum fuga consequuntur asperiores quaerat
              eligendi, itaque cum tempore deserunt porro voluptatibus sequi
              odit eum in illo ut. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Hic, rem, nostrum debitis ipsum unde quod rerum
              eum cum, architecto vitae quisquam et culpa perspiciatis odio!
              Corporis aliquam odit nulla deserunt.
              <div className="th">
                <div className="book3">
                  <Link to="/booking">Book now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Prog;
