import React from "react";

import "../styles/staking.scss";
// import wolfPolice from "../imgs/wolfPolice.png";
// import wolfThief from "../imgs/wolfThief.png";

const Staking = () => { 
  return (
    <div className="heist-container">
      <div className="heist-header">
        <h1>heist</h1>
        <div class="header-btns">
          <a href="/">
            <div class="BorderBox" style={{padding: "2px", position: "relative", width: "fit-content"}}>
              <div class="BorderBox-border" style={{width: "2px", background: "white", top: "2px", bottom: "2px", left: "0px", position: "absolute"}}>
              </div>
              <div class="BorderBox-border" style={{width: "2px", background: "white", top: "2px", bottom: "2px", right: "0px", position: "absolute"}}></div>
              <div class="BorderBox-border" style={{height: "2px", background: "white", left: "2px", right: "2px", top: "0px", position: "absolute"}}>
              </div>
              <div class="BorderBox-border" style={{height: "2px", background: "white", left: "2px", right: "2px", bottom: "0px", position: "absolute"}}>
              </div>
              <div class="to-menu">
                <svg width="19" height="14" viewBox="0 0 19 14" xmlns="http://www.w3.org/2000/svg"><path d="M4.75 0v1.556H3.167V3.11H1.583v1.556H0v1.555h1.583v1.556h1.584v1.555H4.75v1.556h1.583V7.778h7.917v1.555h-1.583v1.556h-1.584v1.555H9.5V14h4.75v-1.556h1.583V10.89h1.584V9.333H19V6.222h-1.583V4.667h-1.584V3.11h-9.5V0z" fill="#FFF" fill-rule="nonzero"></path></svg>
                BACK TO MENU
              </div>
            </div>
          </a>
          <div class="header-metamask">
            <div class="" style={{padding: "2px", position: "relative", width: "fit-content"}}>
              <div class="BorderBox_border__3cuuu" style={{width: "2px", background: "rgb(253, 205, 1)", top: "2px", bottom: "2px", left: "0px", position: "absolute"}}>
              </div>
              <div class="BorderBox_border__3cuuu" style={{width: "2px", background: "rgb(253, 205, 1)", top: "2px", bottom: "2px", right: "0px", position: "absolute"}}>
              </div>
              <div class="BorderBox_border__3cuuu" style={{height: "2px", background: "rgb(253, 205, 1)", left: "2px", right: "2px", top: "0px", position: "absolute"}}>
              </div>
              <div class="BorderBox_border__3cuuu" style={{height: "2px", background: "rgb(253, 205, 1)", left: "2px", right: "2px", bottom: "0px", position: "absolute"}}>
              </div>
              <div class="wallet-box"><svg width="21" height="20" viewBox="0 0 21 20" xmlns="http://www.w3.org/2000/svg"><g fill-rule="nonzero" stroke-width=".556" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="#E2761B" fill="#E2761B" d="M18.839 1.537 11.538 6.96l1.35-3.2z"></path><g fill="#E4761B" stroke="#E4761B"><path d="M1.983 1.537 9.226 7.01 7.942 3.76zM16.212 14.107l-1.945 2.98 4.161 1.144 1.196-4.058zM1.213 14.173l1.189 4.058 4.16-1.145-1.944-2.98z"></path><path d="m6.327 9.073-1.159 1.754 4.131.183-.146-4.44zM14.495 9.073l-2.862-2.554-.095 4.491 4.124-.183zM6.562 17.086l2.48-1.21L6.9 14.201zM11.78 15.875l2.487 1.211-.345-2.884z"></path></g><g fill="#D7C1B3" stroke="#D7C1B3"><path d="m14.267 17.086-2.487-1.21.198 1.621-.022.683zM6.562 17.086l2.312 1.094-.015-.683.184-1.622z"></path></g><path stroke="#233447" fill="#233447" d="m8.91 13.13-2.069-.608 1.46-.668zM11.912 13.13l.609-1.276 1.467.668z"></path><g fill="#CD6116" stroke="#CD6116"><path d="m6.562 17.086.353-2.98-2.297.067zM13.915 14.107l.352 2.98 1.945-2.914zM15.662 10.827l-4.124.183.381 2.12.61-1.276 1.467.668zM6.841 12.522l1.468-.668.601 1.277.39-2.12-4.132-.184z"></path></g><g fill="#E4751F" stroke="#E4751F"><path d="M5.168 10.827 6.9 14.202l-.059-1.68zM13.996 12.522l-.074 1.68 1.74-3.375zM9.3 11.01l-.39 2.12.485 2.503.11-3.295zM11.538 11.01l-.199 1.321.088 3.302.492-2.502z"></path></g><path stroke="#F6851B" fill="#F6851B" d="m11.92 13.13-.493 2.503.353.242 2.142-1.673.074-1.68zM6.841 12.522l.059 1.68 2.143 1.673.352-.242-.485-2.502z"></path><path stroke="#C0AD9E" fill="#C0AD9E" d="m11.956 18.18.022-.683-.184-.161H9.028l-.169.161.015.683-2.312-1.094.807.66 1.637 1.138h2.81l1.644-1.137.807-.66z"></path><path stroke="#161616" fill="#161616" d="m11.78 15.875-.353-.242H9.395l-.352.242-.184 1.622.169-.161h2.766l.184.161z"></path><g fill="#763D16" stroke="#763D16"><path d="m19.147 7.312.624-2.994-.932-2.781-7.06 5.24 2.716 2.296 3.838 1.123.85-.991-.366-.264.587-.536-.455-.352.587-.448zM1.059 4.318l.623 2.994-.396.293.587.448-.447.352.587.536-.367.264.844.99 3.837-1.122 2.716-2.297-7.06-5.24z"></path></g><path stroke="#F6851B" fill="#F6851B" d="m18.333 10.196-3.838-1.123 1.167 1.754-1.74 3.375 2.29-.03h3.412zM6.327 9.073 2.49 10.196l-1.277 3.977h3.405l2.282.03-1.732-3.376zM11.538 11.01l.242-4.234 1.115-3.016H7.942l1.1 3.016.257 4.234.088 1.336.008 3.287h2.032l.015-3.287z"></path></g></svg>
                <span>Connect Wallet</span>
              </div>
            </div>
          </div>
        </div>
      </div>      
      <div class="heist-panel" style={{overflowY: "auto"}}>
        <div class="Heist-heistBox">
          <div class="Heist-container">
            <div class="Heist-heistTabHeader">
              <h1 class="Heist-active">
                STAKED - 0
              </h1>
              <h1 class="">UNSTAKED - 0</h1>
            </div>
            <div class="Heist-heistTabBody">
              <p>you can only unstake a thief if it has at least 2 days of $loot</p>
              <div class="Heist-select">
                <h3>THIEFS - 0</h3>
                <div class="Heist-btn">                  
                  <svg className="heist-btn-svg-1" width="32" height="39" viewBox="0 0 32 39" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="m25.6 0-.001 3.199L28.8 3.2v3.199L32 6.4v26.4h-3.2v2.4h-3.201l.001 3.2H6.4l-.001-3.2H3.2l-.001-2.4H0V6.4l3.199-.001L3.2 3.2l3.199-.001L6.4 0h19.2z" fill="#2E3A75"></path><path d="m25.6 0-.001 3.199L28.8 3.2v3.199L32 6.4v19.2l-3.2-.001V28.8h-3.201L25.6 32H6.4l-.001-3.2H3.2l-.001-3.201L0 25.6V6.4l3.199-.001L3.2 3.2l3.199-.001L6.4 0h19.2z" fill="#20DF8E"></path><path fill="#94FFD2" d="M12.8 0H16v3.2h-3.2zM18.4 0h7.2v3.2h-7.2zM25.6 3.2h3.2v3.2h-3.2zM0 29.6h3.2v3.2H0zM3.2 32h3.2v3.2H3.2zM28.8 6.4H32V12h-3.2z"></path><g fill-rule="nonzero"><path fill="#2E3A75" d="M23.364 26v-1.6H25V18h-1.636v-1.6h-9.819v-3.2H25V10H8.636v1.6H7V18h1.636v1.6h9.819v3.2H7V26z"></path><path fill="#FFF" d="M23.364 23v-1.6H25V15h-1.636v-1.6h-9.819v-3.2H25V7H8.636v1.6H7V15h1.636v1.6h9.819v3.2H7V23z"></path></g></g></svg>
                  <svg className="heist-btn-svg-2" width="32" height="39" viewBox="0 0 32 39" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M25.206 5v3.15h3.15v3.151h3.152v21.994h-3.152v2.363h-3.15v3.151H6.302L6.3 35.658h-3.15l-.001-2.363H0V11.302l3.15-.001v-3.15l3.151-.001V5h18.905z" fill="#2E3A75"></path><path d="M25.206 5v3.15h3.15v3.151h3.152v18.905h-3.152v3.15h-3.15v3.152H6.302L6.3 33.356h-3.15l-.001-3.15H0V11.302l3.15-.001v-3.15l3.151-.001V5h18.905z" fill="#14A467"></path><path fill="#2E3A75" d="M0 30.145h3.151v3.151H0zM3.151 32.508h3.151v3.151H3.151z"></path><g fill-rule="nonzero"><path fill="#2E3A75" d="M23.364 30.5v-1.6H25v-6.4h-1.636v-1.6h-9.819v-3.2H25v-3.2H8.636v1.6H7v6.4h1.636v1.6h9.819v3.2H7v3.2z"></path><path fill="#FFF" d="M23.364 27.5v-1.6H25v-6.4h-1.636v-1.6h-9.819v-3.2H25v-3.2H8.636v1.6H7v6.4h1.636v1.6h9.819v3.2H7v3.2z"></path></g></g></svg>
                  Select 0
                </div>
              </div>
              <div class="Heist-nfts">
                <div class="NFTCard-card">
                  <svg width="112" height="112" viewBox="0 0 112 112" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs><path id="noa" d="M0 0h103.385v103.385H0z"></path></defs><g fill="none" fill-rule="evenodd" opacity=".5"><use fill-opacity=".1" fill="#FFF" xlinkHref="#noa" transform="translate(4.308 4.308)"></use><path fill="#FFF" d="M0 4.308h4.308v103.385H0zM107.692 4.308H112v103.385h-4.308zM4.308 0h103.385v4.308H4.308z"></path><path fill="#FFF" d="M4.308 107.692h103.385V112H4.308z"></path><text font-family="UpheavalTT-BRK-, Upheaval TT (BRK)" font-size="16" fill="#FFF"><tspan x="46.9" y="54">NO </tspan><tspan x="27.7" y="68">TOKENS</tspan></text></g></svg>
                </div>
              </div>
              <h3>POLICE - 0</h3>
              <div class="Heist-nfts">
                <div class="NFTCard-card">
                  <svg width="112" height="112" viewBox="0 0 112 112" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs><path id="noa" d="M0 0h103.385v103.385H0z"></path></defs><g fill="none" fill-rule="evenodd" opacity=".5"><use fill-opacity=".1" fill="#FFF" xlinkHhref="#noa" transform="translate(4.308 4.308)"></use><path fill="#FFF" d="M0 4.308h4.308v103.385H0zM107.692 4.308H112v103.385h-4.308zM4.308 0h103.385v4.308H4.308z"></path><path fill="#FFF" d="M4.308 107.692h103.385V112H4.308z"></path><text font-family="UpheavalTT-BRK-, Upheaval TT (BRK)" font-size="16" fill="#FFF"><tspan x="46.9" y="54">NO </tspan><tspan x="27.7" y="68">TOKENS</tspan></text></g></svg>
                </div>
              </div>
            </div>
          </div>
          <div class="Stats-stats">
            <div class="" style={{padding: "2px", position: "relative", width: "fit-content"}}>
              <div class="BorderBox-border" style={{width: "2px", background: "black", top: "2px", bottom: "2px", left: "0px", position: "absolute"}}></div>
              <div class="BorderBox-border" style={{width: "2px", background: "black", top: "2px", bottom: "2px", right: "0px", position: "absolute"}}></div>
              <div class="BorderBox-border" style={{height: "2px", background: "black", left: "2px", right: "2px", top: "0px", position: "absolute"}}></div>
              <div class="BorderBox-border" style={{height: "2px", background: "black", left: "2px", right: "2px", bottom: "0px", position: "absolute"}}></div>
              <div class="Stats-statBox">
                <h1>GAME STATS</h1>
                <p>thiefs minted <span>0</span></p>
                <p>thiefs staked <span>0</span></p>
                <p>police minted <span>0</span></p>
                <p>police staked <span>0</span></p>
                <p>thiefs stolen <span>0</span></p>
                <p>police stolen <span>0</span></p>
                <p>$loot claimed <span>0.00</span></p>
              </div>
            </div>
            <div class="" style={{padding: "2px", position: "relative", width: "fit-content"}}>
              <div class="BorderBox-border" style={{width: "2px", background: "black", top: "2px", bottom: "2px", left: "0px", position: "absolute"}}></div>
              <div class="BorderBox-border" style={{width: "2px", background: "black", top: "2px", bottom: "2px", right: "0px", position: "absolute"}}></div>
              <div class="BorderBox-border" style={{height: "2px", background: "black", left: "2px", right: "2px", top: "0px", position: "absolute"}}></div>
              <div class="BorderBox-border" style={{height: "2px", background: "black", left: "2px", right: "2px", bottom: "0px", position: "absolute"}}></div>
              <div class="Stats-statBox">
                <h1>LEADERBOARD</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Staking;