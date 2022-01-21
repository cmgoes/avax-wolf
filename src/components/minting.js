import React from "react";
import { Link } from 'react-router-dom';

import "../styles/minting.scss";
import cop from "../imgs/cop.png";
import thief from "../imgs/thief.png";
import policeCar from "../imgs/policeCar.png";
import policeCar2 from "../imgs/policeCar2.png";
import policeCar3 from "../imgs/policeCar3.png";

const Minting = () => { 
  return (
    <div className="minting-container">
      <div className="mint-header">
        <h1>MINTING</h1>
        <div class="header-btns">
          <Link to="/">
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
          </Link>
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
      <div className="mint-panel">
        <div className="mint-card">
          <div className="img-box">
            <div class="img-card">
              <div class="ImgBox-border" style={{width: "6px", background: "rgb(40, 173, 255)", top: "6px", bottom: "6px", left: "0px", position: "absolute"}}></div>
              <div class="ImgBox-border" style={{width: "6px", background: "rgb(40, 173, 255)", top: "6px", bottom: "6px", right: "0px", position: "absolute"}}></div>
              <div class="ImgBox-border" style={{height: "6px", background: "rgb(40, 173, 255)", left: "6px", right: "6px", top: "0px", position: "absolute"}}></div>
              <div class="ImgBox-border" style={{height: "6px", background: "rgb(40, 173, 255)", left: "6px", right: "6px", bottom: "0px", position: "absolute"}}></div>
              <div style={{width: "132px", height: "132px", background: "rgba(40, 173, 255, 0.1)"}}>
                <img src={cop} width="100%" alt="" />
              </div>
            </div>
            <div class="img-card">
              <div class="ImgBox-border" style={{width: "6px", background: "rgb(253, 1, 76)", top: "6px", bottom: "6px", left: "0px", position: "absolute"}}></div>
              <div class="ImgBox-border" style={{width: "6px", background: "rgb(253, 1, 76)", top: "6px", bottom: "6px", right: "0px", position: "absolute"}}></div>
              <div class="ImgBox-border" style={{height: "6px", background: "rgb(253, 1, 76)", left: "6px", right: "6px", top: "0px", position: "absolute"}}></div>
              <div class="ImgBox-border" style={{height: "6px", background: "rgb(253, 1, 76)", left: "6px", right: "6px", bottom: "0px", position: "absolute"}}></div>
              <div style={{width: "132px", height: "132px", background: "rgba(253, 1, 76, 0.1)"}}>
                <img src={thief} width="100%" alt="" />
              </div>
            </div>
          </div>
          <p className="mint-text">Police and Thieves competing for <span>$LOOT</span> on the Avalanche Mountains. With so much at stake, will the scheming Thieves complete their Heists and escape with the stolen <span>$LOOT</span> or will the corrupt Police have the final laugh?</p>
          <div className="road-panel">
            <div className="roadBox-border" style={{width: "8px", background: "white", top: "8px", bottom: "8px", left: "0px", position: "absolute"}}></div>
            <div className="roadBox-border" style={{width: "8px", background: "white", top: "8px", bottom: "8px", right: "0px", position: "absolute"}}></div>
            <div className="roadBox-border" style={{height: "8px", background: "white", left: "8px", right: "8px", top: "0px", position: "absolute"}}></div>
            <div className="roadBox-border" style={{height: "8px", background: "white", left: "8px", right: "8px", bottom: "0px", position: "absolute"}}></div>
            <div className="Minting-progressBarBox">
              <div className="Minting-progressBar" style={{height: "100%", width: "0%"}}>
                <img src={policeCar} srcset={`${policeCar} 1x, ${policeCar2} 2x, ${policeCar3} 3x`} class="Minting-car" alt="" style={{left: "calc(0% - 0px)", bottom: "-3px"}} />
              </div>
              <div className="Minting-progressText">
                <div className="Minting-progressTextItem">GEN0</div>
                <div className="Minting-progressTextItem">20.000 $LOOT</div>
                <div className="Minting-progressTextItem">40.000 $LOOT</div>
                <div className="Minting-progressTextItem">60.000 $LOOT</div>
              </div>
            </div>
          </div>
          <div class="Minting-amount">0/50000 MINTED</div>
          <div class="Minting-balance">You have 0 $LOOT</div>
          <div class="wallet-btn">
            <svg className="wallet-btn-svg-1" width="32" height="39" viewBox="0 0 48 57" xmlns="http://www.w3.org/2000/svg" style={{marginTop: "-7px"}}><g fill="none" fill-rule="evenodd"><path d="m37.81 0-.001 4.726h4.726v4.726h4.727v38.991h-4.727v3.545l-4.726-.001v4.727H9.452v-4.727H4.726v-3.544H0V9.453l4.726-.001V4.726h4.726V0H37.81z" fill="#2E3A75"></path><path d="m37.81 0-.001 4.726h4.726v4.726h4.727V37.81h-4.727v4.726H37.81v4.727H9.452v-4.727H4.726V37.81H0V9.452h4.726V4.726h4.726V0H37.81z" fill="#FDCD01"></path><path fill="#FFEFA9" d="M18.905 0h4.726v4.726h-4.726zM27.175 0h10.634v4.726H27.175zM37.809 4.726h4.726v4.726h-4.726zM0 43.717h4.726v4.726H0zM4.726 47.262h4.726v4.726H4.726zM42.535 9.452h4.726v8.271h-4.726z"></path><g fill-rule="nonzero"><path fill="#2E3A75" d="M18.808 37.5v-2.1h2.077v-2.1h2.077v-2.1h2.076v2.1h2.077v2.1h2.077v2.1H37.5v-21h-8.308V27h-2.077v-2.1h-2.077v-2.1h-2.076v2.1h-2.077V27h-2.077V16.5H10.5v21z"></path><path fill="#FFF" d="M18.808 33v-2.1h2.077v-2.1h2.077v-2.1h2.076v2.1h2.077v2.1h2.077V33H37.5V12h-8.308v10.5h-2.077v-2.1h-2.077v-2.1h-2.076v2.1h-2.077v2.1h-2.077V12H10.5v21z"></path></g></g></svg>
            <svg className="wallet-btn-svg-2" width="32" height="39" viewBox="0 0 48 57" xmlns="http://www.w3.org/2000/svg" style={{marginTop: "-7px"}}><g fill="none" fill-rule="evenodd"><path d="m37.81 6-.001 4.726h4.726v4.726h4.727v32.991h-4.727v3.545l-4.726-.001v4.727H9.452v-4.727H4.726v-3.544H0v-32.99l4.726-.001v-4.726h4.726V6H37.81z" fill="#2E3A75"></path><path d="m37.81 6-.001 4.726h4.726v4.726h4.727V43.81h-4.727v4.726H37.81v4.727H9.452v-4.727H4.726V43.81H0V15.452h4.726v-4.726h4.726V6H37.81z" fill="#CEA700"></path><path fill="#2E3A75" d="M0 43.717h4.726v4.726H0zM4.726 47.262h4.726v4.726H4.726z"></path><g fill-rule="nonzero"><path fill="#2E3A75" d="M18.808 42v-2.1h2.077v-2.1h2.077v-2.1h2.076v2.1h2.077v2.1h2.077V42H37.5V21h-8.308v10.5h-2.077v-2.1h-2.077v-2.1h-2.076v2.1h-2.077v2.1h-2.077V21H10.5v21z"></path><path fill="#FFF" d="M18.808 37.5v-2.1h2.077v-2.1h2.077v-2.1h2.076v2.1h2.077v2.1h2.077v2.1H37.5v-21h-8.308V27h-2.077v-2.1h-2.077v-2.1h-2.076v2.1h-2.077V27h-2.077V16.5H10.5v21z"></path></g></g></svg>
            connect wallet
          </div>
        </div>  
      </div>
    </div>
  );
};
export default Minting;