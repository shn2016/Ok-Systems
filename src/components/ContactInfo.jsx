import React from "react";
import { OverPack } from "rc-scroll-anim";
import QueueAnim from "rc-queue-anim";

function Info() {
  return (
    <div className="contact-page page2">
      <div className="contact-page-wrapper">
        <h2>
          Let’s <span>Ok</span>
        </h2>
        <OverPack>
          <QueueAnim
            key="queue"
            type="bottom"
            leaveReverse
            className="page2-content"
          >
            <div key="code1" className="home-code">
              <div>
                $ <span>select</span> what will your website be ?
                <span> {" "} 选择你的网站特征</span>
              </div>
              <div>
                <span className="home-code-selection">❯</span> Fast
              </div>
              <div>
                <span className="home-code-selection"></span>Cheap
              </div>
              <div>
                <span className="home-code-selection"></span>User & SEO Friendly
              </div>
              <div>
                $ We can do it all!
                <span> {" "} 我们都能做到</span>
              </div>
              <br></br>
              <div>
                $ <span>select</span> the best economic web development company
                in Melbourne
              </div>
              <div>
                <span>
                  {" "} 选择你的网站开发公司
                </span>
              </div>
              <div>
                <span class="home-code-selection">❯</span> Ok Systems
              </div>
              <div>
                <span className="home-code-selection"></span>Others
              </div>
              <br></br>
              <div>$ Let's Code</div>
            </div>
            <h2>
              Contact Info <span class="home-code-comment">联系方式</span>
            </h2>
            <div style={{ marginTop: 12 }} className="home-code">
              <div>
                <span class="home-code-comment">Email: </span>
                contact@oksystems.com.au
              </div>
              <div>
                <span class="home-code-comment">Mobile: </span> 0405966610
              </div>
              <div>
                <span class="home-code-comment">Wechat: </span> shn2016
              </div>
            </div>
          </QueueAnim>
        </OverPack>
      </div>
    </div>
  );
}

export default Info;
