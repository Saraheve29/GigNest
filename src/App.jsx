import { useState } from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    font-family: 'DM Sans', sans-serif;
    background: linear-gradient(160deg, #FFF5EF 0%, #FFF9F5 30%, #FFFCF9 55%, #FFF0E8 80%, #FFE9DA 100%);
    background-attachment: fixed;
    color: #1A1A1A;
    min-height: 100vh;
  }

  .app {
    max-width: 430px;
    margin: 0 auto;
    min-height: 100vh;
    background: linear-gradient(160deg, #FFF5EF 0%, #FFF9F5 25%, #FFFCFA 50%, #FFF3EC 75%, #FFEADE 100%);
    background-attachment: fixed;
    position: relative;
    overflow-x: hidden;
  }

  .splash {
    min-height: 100vh;
    background: linear-gradient(175deg, #FFE8D6 0%, #FFD9C2 25%, #FFCFB5 50%, #FFE4D0 75%, #FFF0E6 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 48px 28px 40px;
    overflow: hidden;
  }

  .splash-fox-wrap {
    width: 200px; height: 200px;
    background: transparent;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
    border: none;
    overflow: visible;
  }

  .splash-fox-wrap img {
    width: 220px;
    height: 220px;
    object-fit: contain;
    mix-blend-mode: multiply;
    filter: drop-shadow(0 12px 24px rgba(200,100,50,0.2));
  }

  .splash-title {
    font-family: 'Syne', sans-serif;
    font-size: 52px;
    font-weight: 800;
    color: #3A2010;
    letter-spacing: -1px;
    margin-bottom: 8px;
  }

  .splash-title span { color: #FFA040; }

  .splash-sub {
    font-size: 15px;
    color: #7A5040;
    text-align: center;
    line-height: 1.6;
    margin-bottom: 28px;
    max-width: 300px;
  }

  .splash-cats {
    width: 100%;
    max-width: 340px;
    display: flex;
    flex-direction: column;
    gap: 9px;
    margin-bottom: 28px;
  }

  .splash-cat-btn {
    width: 100%;
    padding: 13px 20px;
    border: none;
    border-radius: 100px;
    font-family: 'Syne', sans-serif;
    font-size: 15px;
    font-weight: 700;
    color: white;
    cursor: default;
    display: flex;
    align-items: center;
    gap: 14px;
    box-shadow: 0 4px 16px rgba(0,0,0,0.10);
  }

  .splash-cat-btn .cat-btn-icon {
    width: 28px; height: 28px;
    background: rgba(255,255,255,0.25);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
  }

  .splash-btn {
    width: 100%;
    max-width: 340px;
    padding: 18px;
    background: #E8844A;
    color: white;
    border: none;
    border-radius: 100px;
    font-family: 'Syne', sans-serif;
    font-size: 17px;
    font-weight: 700;
    cursor: pointer;
    margin-bottom: 14px;
    box-shadow: 0 8px 24px rgba(232,132,74,0.3);
    transition: transform 0.15s;
  }

  .splash-btn:hover { transform: translateY(-2px); }

  .splash-link {
    color: #9A6040;
    font-size: 14px;
    cursor: pointer;
    text-decoration: underline;
  }

  .auth-screen {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .auth-header {
    background: linear-gradient(160deg, #FFE0C8, #FFD0B0);
    padding: 60px 24px 50px;
    position: relative;
    overflow: hidden;
  }

  .auth-header::after {
    content: '';
    position: absolute;
    bottom: -30px; left: 0; right: 0;
    height: 60px;
    background: #FFF5EF;
    border-radius: 30px 30px 0 0;
  }

  .auth-back {
    background: rgba(255,255,255,0.4);
    border: none;
    color: #7A4020;
    width: 40px; height: 40px;
    border-radius: 12px;
    cursor: pointer;
    font-size: 18px;
    display: flex; align-items: center; justify-content: center;
    margin-bottom: 20px;
  }

  .auth-title {
    font-family: 'Syne', sans-serif;
    font-size: 32px;
    font-weight: 800;
    color: #3A2010;
    margin-bottom: 6px;
  }

  .auth-sub { color: #9A6040; font-size: 14px; }

  .auth-body {
    flex: 1;
    padding: 40px 24px 32px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .input-group { display: flex; flex-direction: column; gap: 8px; }

  .input-label {
    font-size: 13px;
    font-weight: 600;
    color: #555;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .input-field {
    width: 100%;
    padding: 16px 18px;
    border: 2px solid #F0E8E0;
    border-radius: 14px;
    font-family: 'DM Sans', sans-serif;
    font-size: 15px;
    color: #1A1A1A;
    background: white;
    outline: none;
    transition: border-color 0.2s;
  }

  .input-field:focus { border-color: #FFA040; }

  .auth-btn {
    width: 100%;
    padding: 18px;
    background: linear-gradient(135deg, #E8844A, #FFAC6A);
    color: white;
    border: none;
    border-radius: 14px;
    font-family: 'Syne', sans-serif;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    margin-top: 8px;
    box-shadow: 0 6px 20px rgba(232,132,74,0.35);
    transition: transform 0.15s;
  }

  .auth-btn:hover { transform: translateY(-1px); }

  .auth-switch {
    text-align: center;
    font-size: 14px;
    color: #999;
    margin-top: 8px;
  }

  .auth-switch span { color: #FFA040; font-weight: 600; cursor: pointer; }

  .main-app { min-height: 100vh; display: flex; flex-direction: column; }

  .topbar {
    background: rgba(255,245,238,0.92);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    padding: 20px 20px 0;
    border-bottom: 1px solid rgba(255,160,64,0.12);
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: 0 2px 20px rgba(255,160,64,0.08);
  }

  .topbar-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
  }

  .topbar-logo {
    font-family: 'Syne', sans-serif;
    font-size: 24px;
    font-weight: 800;
    color: #1A1A1A;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .topbar-logo span { color: #FFA040; }

  .topbar-logo-fox {
    width: 32px; height: 32px;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .topbar-logo-fox img {
    width: 36px;
    height: 36px;
    object-fit: contain;
    filter: drop-shadow(0 2px 4px rgba(200,100,50,0.2));
  }

  .topbar-right { display: flex; align-items: center; gap: 10px; }

  .topbar-notif {
    width: 38px; height: 38px;
    background: rgba(255,160,64,0.1);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    cursor: pointer;
    position: relative;
  }

  .notif-dot {
    position: absolute;
    top: 6px; right: 6px;
    width: 8px; height: 8px;
    background: #FF4040;
    border-radius: 50%;
    border: 2px solid white;
  }

  .topbar-avatar {
    width: 38px; height: 38px;
    background: linear-gradient(135deg, #E8844A, #FFAC6A);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 700;
    font-size: 15px;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(232,132,74,0.3);
  }

  .nav-tabs {
    display: flex;
    overflow-x: auto;
    scrollbar-width: none;
  }

  .nav-tabs::-webkit-scrollbar { display: none; }

  .nav-tab {
    flex-shrink: 0;
    padding: 10px 14px 14px;
    border: none;
    background: none;
    cursor: pointer;
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    font-weight: 500;
    color: #AAA;
    display: flex;
    align-items: center;
    gap: 5px;
    border-bottom: 3px solid transparent;
    transition: all 0.2s;
    white-space: nowrap;
  }

  .nav-tab.active {
    color: #E8844A;
    border-bottom-color: #E8844A;
    font-weight: 700;
  }

  .topbar-pill {
    background: linear-gradient(135deg, #E8844A, #FFAC6A);
    color: white;
    font-family: 'Syne', sans-serif;
    font-size: 13px;
    font-weight: 700;
    padding: 8px 14px;
    border-radius: 100px;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(232,132,74,0.3);
    white-space: nowrap;
  }

  .page-tabs {
    display: flex;
    gap: 4px;
    padding: 10px 0 0;
    overflow-x: auto;
    scrollbar-width: none;
  }

  .page-tabs::-webkit-scrollbar { display: none; }

  .page-tab {
    flex-shrink: 0;
    padding: 8px 16px;
    border: none;
    background: rgba(232,132,74,0.08);
    cursor: pointer;
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    font-weight: 600;
    color: #AAA;
    border-radius: 100px;
    transition: all 0.2s;
    white-space: nowrap;
  }

  .page-tab.active {
    background: linear-gradient(135deg, #E8844A, #FFAC6A);
    color: white;
    box-shadow: 0 4px 12px rgba(232,132,74,0.3);
  }

  .content { flex: 1; padding: 24px 16px 40px; }

  .greeting-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .greeting-text { }
  .greeting-small { font-size: 13px; color: #AAA; margin-bottom: 3px; }
  .greeting-name { font-family: 'Syne', sans-serif; font-size: 26px; font-weight: 800; color: #1A1A1A; }

  .streak-badge {
    background: linear-gradient(135deg, #FFE4C4, #FFCBA4);
    border-radius: 16px;
    padding: 10px 14px;
    text-align: center;
    border: 2px solid rgba(255,160,64,0.2);
  }

  .streak-num { font-family: 'Syne', sans-serif; font-size: 20px; font-weight: 800; color: #E8844A; }
  .streak-label { font-size: 10px; color: #9A6040; font-weight: 600; text-transform: uppercase; letter-spacing: 0.3px; }

  .wallet-card {
    background: linear-gradient(135deg, #E8844A 0%, #FFAC6A 50%, #FFB87A 100%);
    border-radius: 28px;
    padding: 26px;
    margin-bottom: 24px;
    position: relative;
    overflow: hidden;
    box-shadow: 0 12px 40px rgba(232,132,74,0.3);
  }

  .wallet-card::before {
    content: '';
    position: absolute;
    top: -60px; right: -60px;
    width: 200px; height: 200px;
    background: rgba(255,255,255,0.08);
    border-radius: 50%;
  }

  .wallet-card::after {
    content: '';
    position: absolute;
    bottom: -40px; left: -40px;
    width: 150px; height: 150px;
    background: rgba(255,255,255,0.05);
    border-radius: 50%;
  }

  .wallet-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 4px;
  }

  .wallet-label {
    color: rgba(255,255,255,0.8);
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.8px;
  }

  .wallet-badge {
    background: rgba(255,255,255,0.2);
    color: white;
    font-size: 11px;
    font-weight: 700;
    padding: 4px 10px;
    border-radius: 100px;
    border: 1px solid rgba(255,255,255,0.3);
  }

  .wallet-amount {
    font-family: 'Syne', sans-serif;
    font-size: 46px;
    font-weight: 800;
    color: white;
    margin-bottom: 20px;
    letter-spacing: -2px;
    position: relative;
    z-index: 1;
  }

  .wallet-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    z-index: 1;
  }

  .wallet-stats { display: flex; gap: 24px; }

  .wallet-stat-val {
    font-family: 'Syne', sans-serif;
    font-size: 17px;
    font-weight: 700;
    color: white;
  }

  .wallet-stat-label {
    font-size: 11px;
    color: rgba(255,255,255,0.7);
    margin-top: 1px;
  }

  .wallet-btn {
    background: rgba(255,255,255,0.22);
    border: 1.5px solid rgba(255,255,255,0.4);
    color: white;
    padding: 11px 20px;
    border-radius: 100px;
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;
    backdrop-filter: blur(5px);
    transition: background 0.2s;
    font-family: 'Syne', sans-serif;
  }

  .wallet-btn:hover { background: rgba(255,255,255,0.32); }

  .section-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 14px;
  }

  .section-title {
    font-family: 'Syne', sans-serif;
    font-size: 18px;
    font-weight: 800;
    color: #1A1A1A;
  }

  .section-see-all {
    font-size: 13px;
    font-weight: 600;
    color: #E8844A;
    cursor: pointer;
    background: rgba(232,132,74,0.1);
    padding: 5px 12px;
    border-radius: 100px;
  }

  .cat-scroll {
    display: flex;
    gap: 10px;
    overflow-x: auto;
    scrollbar-width: none;
    padding-bottom: 4px;
    margin-bottom: 28px;
  }

  .cat-scroll::-webkit-scrollbar { display: none; }

  .cat-card {
    flex-shrink: 0;
    width: 100px;
    background: rgba(255,255,255,0.75);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    padding: 16px 12px;
    cursor: pointer;
    border: 2px solid rgba(255,255,255,0.9);
    transition: all 0.2s;
    box-shadow: 0 2px 12px rgba(255,160,64,0.06);
    text-align: center;
  }

  .cat-card:hover, .cat-card.active {
    border-color: #E8844A;
    box-shadow: 0 6px 20px rgba(232,132,74,0.18);
    transform: translateY(-3px);
    background: white;
  }

  .cat-icon {
    width: 46px; height: 46px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    margin: 0 auto 10px;
  }

  .cat-name {
    font-family: 'Syne', sans-serif;
    font-size: 11px;
    font-weight: 700;
    color: #1A1A1A;
    margin-bottom: 2px;
    line-height: 1.2;
  }

  .cat-count { font-size: 10px; color: #BBB; }

  .featured-scroll {
    display: flex;
    gap: 12px;
    overflow-x: auto;
    scrollbar-width: none;
    padding-bottom: 4px;
    margin-bottom: 28px;
  }

  .featured-scroll::-webkit-scrollbar { display: none; }

  .featured-card {
    flex-shrink: 0;
    width: 220px;
    border-radius: 22px;
    padding: 20px;
    cursor: pointer;
    transition: all 0.2s;
    box-shadow: 0 6px 24px rgba(0,0,0,0.1);
    position: relative;
    overflow: hidden;
  }

  .featured-card:hover { transform: translateY(-3px); box-shadow: 0 10px 32px rgba(0,0,0,0.15); }

  .featured-tag {
    display: inline-block;
    background: rgba(255,255,255,0.25);
    color: white;
    font-size: 10px;
    font-weight: 700;
    padding: 4px 10px;
    border-radius: 100px;
    margin-bottom: 12px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    border: 1px solid rgba(255,255,255,0.3);
  }

  .featured-name {
    font-family: 'Syne', sans-serif;
    font-size: 15px;
    font-weight: 800;
    color: white;
    margin-bottom: 6px;
    line-height: 1.3;
  }

  .featured-company {
    font-size: 12px;
    color: rgba(255,255,255,0.8);
    margin-bottom: 16px;
  }

  .featured-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .featured-pay {
    font-family: 'Syne', sans-serif;
    font-size: 20px;
    font-weight: 800;
    color: white;
  }

  .featured-time {
    background: rgba(255,255,255,0.2);
    color: white;
    font-size: 11px;
    font-weight: 600;
    padding: 5px 10px;
    border-radius: 100px;
  }

  .task-list { display: flex; flex-direction: column; gap: 10px; }

  .task-card {
    background: rgba(255,255,255,0.8);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    padding: 16px;
    display: flex;
    align-items: center;
    gap: 14px;
    border: 1.5px solid rgba(255,255,255,0.95);
    cursor: pointer;
    transition: all 0.2s;
    box-shadow: 0 2px 12px rgba(255,160,64,0.05);
  }

  .task-card:hover {
    border-color: #E8844A;
    box-shadow: 0 6px 24px rgba(232,132,74,0.14);
    transform: translateY(-2px);
    background: white;
  }

  .task-icon {
    width: 52px; height: 52px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    flex-shrink: 0;
  }

  .task-info { flex: 1; min-width: 0; }

  .task-company {
    font-size: 11px;
    color: #AAA;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.3px;
    margin-bottom: 3px;
  }

  .task-name {
    font-family: 'Syne', sans-serif;
    font-size: 14px;
    font-weight: 700;
    color: #1A1A1A;
    margin-bottom: 6px;
    line-height: 1.3;
  }

  .task-meta { display: flex; align-items: center; gap: 6px; flex-wrap: wrap; }

  .task-time {
    font-size: 11px;
    color: #AAA;
    display: flex;
    align-items: center;
    gap: 3px;
    background: #F5F5F5;
    padding: 3px 8px;
    border-radius: 100px;
  }

  .task-location {
    font-size: 11px;
    color: #AAA;
    display: flex;
    align-items: center;
    gap: 3px;
    background: #F5F5F5;
    padding: 3px 8px;
    border-radius: 100px;
  }

  .task-tag {
    font-size: 10px;
    padding: 3px 8px;
    border-radius: 100px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.3px;
  }

  .task-right { text-align: right; flex-shrink: 0; }

  .task-pay {
    font-family: 'Syne', sans-serif;
    font-size: 16px;
    font-weight: 800;
    color: #E8844A;
    margin-bottom: 4px;
  }

  .task-new {
    font-size: 10px;
    font-weight: 700;
    color: #22C55E;
    background: #DCFCE7;
    padding: 2px 7px;
    border-radius: 100px;
    text-transform: uppercase;
  }

  .task-hot {
    font-size: 10px;
    font-weight: 700;
    color: #EF4444;
    background: #FEE2E2;
    padding: 2px 7px;
    border-radius: 100px;
    text-transform: uppercase;
  }

  .bottom-nav {
    position: fixed;
    bottom: 0; left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 430px;
    background: rgba(255,245,238,0.94);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    border-top: 1px solid rgba(255,160,64,0.12);
    display: flex;
    padding: 12px 0 22px;
    box-shadow: 0 -4px 30px rgba(255,160,64,0.08);
    z-index: 200;
  }

  .bottom-nav-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    cursor: pointer;
    border: none;
    background: none;
    padding: 0;
    transition: all 0.2s;
  }

  .bottom-nav-icon { font-size: 22px; transition: transform 0.2s; }
  .bottom-nav-item.active .bottom-nav-icon { transform: scale(1.15); }

  .bottom-nav-label {
    font-size: 10px;
    font-weight: 600;
    color: #CCC;
    text-transform: uppercase;
    letter-spacing: 0.3px;
  }

  .bottom-nav-item.active .bottom-nav-label { color: #E8844A; }

  .profile-header {
    background: linear-gradient(135deg, #E8844A, #FFAC6A);
    border-radius: 28px;
    padding: 28px 24px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 18px;
    box-shadow: 0 10px 32px rgba(232,132,74,0.25);
  }

  .profile-avatar {
    width: 72px; height: 72px;
    background: rgba(255,255,255,0.25);
    border-radius: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    font-weight: 800;
    color: white;
    font-family: 'Syne', sans-serif;
    border: 2px solid rgba(255,255,255,0.4);
  }

  .profile-name {
    font-family: 'Syne', sans-serif;
    font-size: 22px;
    font-weight: 800;
    color: white;
    margin-bottom: 4px;
  }

  .profile-level {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    background: rgba(255,255,255,0.2);
    color: white;
    font-size: 12px;
    font-weight: 700;
    padding: 4px 12px;
    border-radius: 100px;
    border: 1px solid rgba(255,255,255,0.3);
  }

  .profile-section {
    background: white;
    border-radius: 20px;
    overflow: hidden;
    margin-bottom: 14px;
    border: 1.5px solid #F0E8E0;
    box-shadow: 0 2px 12px rgba(255,160,64,0.06);
  }

  .profile-section-title {
    font-family: 'Syne', sans-serif;
    font-size: 12px;
    font-weight: 700;
    color: #BBB;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    padding: 14px 18px 8px;
  }

  .profile-row {
    display: flex;
    align-items: center;
    padding: 14px 18px;
    gap: 14px;
    border-bottom: 1px solid #FAF5F0;
    cursor: pointer;
    transition: background 0.15s;
  }

  .profile-row:last-child { border-bottom: none; }
  .profile-row:hover { background: #FFF8F3; }

  .profile-row-icon {
    width: 38px; height: 38px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    background: #FFF3EC;
  }

  .profile-row-text { flex: 1; font-size: 15px; font-weight: 500; color: #1A1A1A; }
  .profile-row-arrow { color: #DDD; font-size: 18px; }
  .profile-row-value { font-size: 13px; color: #BBB; margin-right: 6px; }

  .stats-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin-bottom: 20px;
  }

  .stat-box {
    background: white;
    border-radius: 20px;
    padding: 18px;
    border: 1.5px solid #F0E8E0;
    box-shadow: 0 2px 12px rgba(255,160,64,0.05);
  }

  .stat-box-val {
    font-family: 'Syne', sans-serif;
    font-size: 28px;
    font-weight: 800;
    color: #E8844A;
    margin-bottom: 4px;
  }

  .stat-box-label { font-size: 12px; color: #AAA; font-weight: 500; }

  .toast {
    position: fixed;
    bottom: 90px;
    left: 50%;
    transform: translateX(-50%);
    background: #1A1A1A;
    color: white;
    padding: 13px 26px;
    border-radius: 100px;
    font-size: 14px;
    font-weight: 500;
    z-index: 999;
    white-space: nowrap;
    box-shadow: 0 8px 24px rgba(0,0,0,0.25);
    animation: slideUp 0.3s ease;
  }

  @keyframes slideUp {
    from { transform: translateX(-50%) translateY(20px); opacity: 0; }
    to { transform: translateX(-50%) translateY(0); opacity: 1; }
  }

  .modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.45);
    z-index: 500;
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }

  .modal {
    background: white;
    border-radius: 32px 32px 0 0;
    padding: 32px 24px 48px;
    width: 100%;
    max-width: 430px;
  }

  .modal-handle {
    width: 40px; height: 4px;
    background: #E8E0D8;
    border-radius: 2px;
    margin: 0 auto 24px;
  }

  .modal-title {
    font-family: 'Syne', sans-serif;
    font-size: 26px;
    font-weight: 800;
    margin-bottom: 6px;
    color: #1A1A1A;
  }

  .modal-sub { font-size: 14px; color: #AAA; margin-bottom: 24px; }

  .payout-option {
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 16px 18px;
    border: 2px solid #F0E8E0;
    border-radius: 18px;
    margin-bottom: 10px;
    cursor: pointer;
    transition: all 0.2s;
  }

  .payout-option:hover, .payout-option.selected {
    border-color: #E8844A;
    background: #FFF8F3;
  }

  .payout-option-icon { font-size: 30px; }
  .payout-option-name { font-weight: 700; font-size: 15px; color: #1A1A1A; }
  .payout-option-sub { font-size: 12px; color: #AAA; margin-top: 2px; }

  .modal-btn {
    width: 100%;
    padding: 18px;
    background: linear-gradient(135deg, #E8844A, #FFAC6A);
    color: white;
    border: none;
    border-radius: 16px;
    font-family: 'Syne', sans-serif;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    margin-top: 20px;
    box-shadow: 0 6px 20px rgba(232,132,74,0.35);
  }

  .detail-screen {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .detail-hero {
    padding: 56px 24px 32px;
    position: relative;
  }

  .detail-back {
    position: absolute;
    top: 16px; left: 16px;
    width: 42px; height: 42px;
    background: rgba(255,255,255,0.85);
    backdrop-filter: blur(10px);
    border: none;
    border-radius: 14px;
    font-size: 20px;
    cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  }

  .detail-tag {
    display: inline-block;
    padding: 6px 14px;
    border-radius: 100px;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 12px;
  }

  .detail-title {
    font-family: 'Syne', sans-serif;
    font-size: 26px;
    font-weight: 800;
    color: #1A1A1A;
    margin-bottom: 6px;
    line-height: 1.2;
  }

  .detail-company {
    font-size: 14px;
    color: #888;
    margin-bottom: 20px;
  }

  .detail-chips {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    margin-bottom: 24px;
  }

  .detail-chip {
    background: white;
    border: 1.5px solid #F0E8E0;
    border-radius: 100px;
    padding: 7px 14px;
    font-size: 12px;
    font-weight: 600;
    color: #555;
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .detail-pay-box {
    background: linear-gradient(135deg, #E8844A, #FFAC6A);
    border-radius: 24px;
    padding: 24px;
    margin-bottom: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 8px 28px rgba(232,132,74,0.28);
  }

  .detail-pay-label { color: rgba(255,255,255,0.8); font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; }
  .detail-pay-amount { font-family: 'Syne', sans-serif; font-size: 36px; font-weight: 800; color: white; }

  .detail-apply-btn {
    background: white;
    border: none;
    border-radius: 16px;
    padding: 14px 22px;
    font-family: 'Syne', sans-serif;
    font-size: 14px;
    font-weight: 700;
    color: #E8844A;
    cursor: pointer;
    box-shadow: 0 4px 16px rgba(0,0,0,0.1);
  }

  .detail-section {
    background: white;
    border-radius: 20px;
    padding: 20px;
    margin-bottom: 14px;
    border: 1.5px solid #F0E8E0;
  }

  .detail-section-title {
    font-family: 'Syne', sans-serif;
    font-size: 16px;
    font-weight: 800;
    color: #1A1A1A;
    margin-bottom: 14px;
  }

  .detail-desc { font-size: 14px; color: #555; line-height: 1.7; }

  .detail-req-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px 0;
    border-bottom: 1px solid #FAF5F0;
    font-size: 14px;
    color: #333;
  }

  .detail-req-item:last-child { border-bottom: none; }

  .detail-req-dot {
    width: 8px; height: 8px;
    background: #E8844A;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .detail-cta {
    padding: 0 16px 40px;
  }

  .detail-cta-btn {
    width: 100%;
    padding: 20px;
    background: linear-gradient(135deg, #E8844A, #FFAC6A);
    color: white;
    border: none;
    border-radius: 18px;
    font-family: 'Syne', sans-serif;
    font-size: 17px;
    font-weight: 700;
    cursor: pointer;
    box-shadow: 0 8px 28px rgba(232,132,74,0.35);
    transition: transform 0.15s;
  }

  .detail-cta-btn:hover { transform: translateY(-2px); }

  .empty-state {
    text-align: center;
    padding: 60px 24px;
  }

  .empty-emoji { font-size: 56px; margin-bottom: 16px; }

  .empty-title {
    font-family: 'Syne', sans-serif;
    font-size: 20px;
    font-weight: 700;
    color: #1A1A1A;
    margin-bottom: 8px;
  }

  .empty-sub { font-size: 14px; color: #999; line-height: 1.6; }

  .temp-app-btn {
    position: fixed;
    top: 12px;
    right: 12px;
    z-index: 9999;
    background: #1A1A1A;
    color: white;
    border: none;
    border-radius: 100px;
    padding: 8px 16px;
    font-family: 'Syne', sans-serif;
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
    box-shadow: 0 4px 16px rgba(0,0,0,0.25);
    display: flex;
    align-items: center;
    gap: 6px;
    letter-spacing: 0.3px;
  }

  .page-back-btn {
    display: flex;
    align-items: center;
    gap: 8px;
    background: none;
    border: none;
    cursor: pointer;
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    font-weight: 600;
    color: #E8844A;
    padding: 4px 0;
    margin-bottom: 20px;
  }
    background: rgba(255,255,255,0.25);
    border-radius: 100px;
    height: 6px;
    margin-top: 16px;
    overflow: hidden;
  }

  .progress-bar-fill {
    height: 100%;
    background: white;
    border-radius: 100px;
    transition: width 0.5s ease;
  }

  .progress-label {
    display: flex;
    justify-content: space-between;
    margin-top: 6px;
  }

  .progress-label span {
    font-size: 11px;
    color: rgba(255,255,255,0.75);
  }
`;

const CATEGORIES = [
  { id: "all", name: "All", emoji: "⚡", bg: "#FFF3EC" },
  { id: "surveys", name: "Surveys", emoji: "📋", bg: "#EFF6FF" },
  { id: "tasks", name: "Tasks", emoji: "✅", bg: "#F0FDF4" },
  { id: "gigs", name: "Gigs", emoji: "📍", bg: "#FAF5FF" },
  { id: "mystery", name: "Mystery", emoji: "🛍️", bg: "#FDF2F8" },
  { id: "promo", name: "Promo", emoji: "🎪", bg: "#FFFBEB" },
  { id: "shifts", name: "Shifts", emoji: "🏗️", bg: "#F0FDF4" },
  { id: "petsitting", name: "Pet Sitting", emoji: "🐶", bg: "#FFF7ED" },
  { id: "housesitting", name: "House Sitting", emoji: "🏡", bg: "#F0F9FF" },
  { id: "delivery", name: "Delivery", emoji: "🚗", bg: "#FEF9C3" },
  { id: "tutoring", name: "Tutoring", emoji: "🎓", bg: "#FDF4FF" },
];

const TASKS = [
  // SURVEYS
  { id: 1, name: "Consumer opinions on fast food brands", company: "YouGov UK", category: "surveys", pay: "£1.20", time: "5 min", location: "Remote", emoji: "📋", bg: "#EFF6FF", tag: "Survey", tagColor: "#DBEAFE", tagText: "#1D4ED8", desc: "Share your opinions on major fast food brands in the UK. Simple multiple choice questions. No experience needed.", requirements: ["UK resident", "18+ years old", "10 mins free time"], isNew: true },
  { id: 2, name: "Mobile phone usage diary study", company: "Kantar Research", category: "surveys", pay: "£4.50", time: "20 min", location: "Remote", emoji: "📋", bg: "#EFF6FF", tag: "Survey", tagColor: "#DBEAFE", tagText: "#1D4ED8", desc: "Complete a detailed diary about your mobile phone usage over 7 days. £4.50 paid on completion.", requirements: ["Smartphone owner", "UK resident", "7 days availability"], isNew: false },
  { id: 3, name: "Weekly grocery shopping habits", company: "Ipsos MORI", category: "surveys", pay: "£2.00", time: "8 min", location: "Remote", emoji: "📋", bg: "#EFF6FF", tag: "Survey", tagColor: "#DBEAFE", tagText: "#1D4ED8", desc: "Tell us about your weekly shopping habits, which supermarkets you use and why. Quick and easy.", requirements: ["UK resident", "Does own grocery shopping"], isNew: true },
  { id: 4, name: "Health & wellbeing survey 2025", company: "Savanta Research", category: "surveys", pay: "£3.00", time: "15 min", location: "Remote", emoji: "📋", bg: "#EFF6FF", tag: "Survey", tagColor: "#DBEAFE", tagText: "#1D4ED8", desc: "Annual UK health and wellbeing study covering diet, exercise and mental health. Fully confidential.", requirements: ["18+ years", "UK resident"], isNew: false },
  { id: 5, name: "Car insurance customer survey", company: "Toluna UK", category: "surveys", pay: "£1.80", time: "7 min", location: "Remote", emoji: "📋", bg: "#EFF6FF", tag: "Survey", tagColor: "#DBEAFE", tagText: "#1D4ED8", desc: "Quick survey about your car insurance provider and experience. All responses anonymous.", requirements: ["Car insurance holder", "UK resident"], isNew: false },
  { id: 6, name: "TV streaming preferences study", company: "GfK Research", category: "surveys", pay: "£2.50", time: "10 min", location: "Remote", emoji: "📋", bg: "#EFF6FF", tag: "Survey", tagColor: "#DBEAFE", tagText: "#1D4ED8", desc: "Which streaming services do you use? How much do you spend? Quick 10-minute survey.", requirements: ["Netflix/Disney+/Amazon Prime user", "18+"], isNew: true },
  { id: 7, name: "Political opinions panel — ongoing", company: "Survation", category: "surveys", pay: "£5.00", time: "25 min", location: "Remote", emoji: "📋", bg: "#EFF6FF", tag: "Survey", tagColor: "#DBEAFE", tagText: "#1D4ED8", desc: "Join our ongoing political opinions panel. Complete monthly surveys about UK politics, policy and current affairs.", requirements: ["UK voter", "18+", "Monthly commitment"], isNew: false },
  { id: 8, name: "New product taste test — snacks", company: "Unilever Research", category: "surveys", pay: "£8.00", time: "30 min", location: "Remote", emoji: "📋", bg: "#EFF6FF", tag: "Survey", tagColor: "#DBEAFE", tagText: "#1D4ED8", desc: "Receive snack samples by post, try them at home and complete an online feedback form. Samples worth £15+.", requirements: ["UK address", "No food allergies declared", "18+"], isNew: true, isHot: true },
  { id: 9, name: "Parenting & childcare survey", company: "Mumsnet Research", category: "surveys", pay: "£3.50", time: "12 min", location: "Remote", emoji: "📋", bg: "#EFF6FF", tag: "Survey", tagColor: "#DBEAFE", tagText: "#1D4ED8", desc: "Share your experiences of childcare, schools and parenting in the UK. Insights used to improve family policies.", requirements: ["Parent or carer", "Child under 18 in household"], isNew: false },
  { id: 10, name: "Banking & fintech usage survey", company: "Which? Research", category: "surveys", pay: "£2.20", time: "9 min", location: "Remote", emoji: "📋", bg: "#EFF6FF", tag: "Survey", tagColor: "#DBEAFE", tagText: "#1D4ED8", desc: "Tell us which banks and fintech apps you use, and rate your satisfaction. Help shape the future of banking.", requirements: ["UK bank account holder", "18+"], isNew: false },

  // TASKS
  { id: 11, name: "AI image labelling — 50 images", company: "Toloka AI", category: "tasks", pay: "£2.50", time: "10 min", location: "Remote", emoji: "✅", bg: "#F0FDF4", tag: "Task", tagColor: "#DCFCE7", tagText: "#166534", desc: "Label and categorise 50 AI training images. Simple drag and drop interface. Training provided.", requirements: ["Good attention to detail", "Reliable internet", "PC or tablet recommended"], isNew: false },
  { id: 12, name: "Transcribe a 3-minute podcast clip", company: "Clickworker", category: "tasks", pay: "£1.80", time: "8 min", location: "Remote", emoji: "✅", bg: "#F0FDF4", tag: "Task", tagColor: "#DCFCE7", tagText: "#166534", desc: "Listen to a short podcast segment and type out exactly what is said. Clear audio provided.", requirements: ["Good English spelling", "Headphones recommended", "Quiet environment"], isNew: true },
  { id: 13, name: "Website usability test — 15 min", company: "UserTesting UK", category: "tasks", pay: "£9.00", time: "15 min", location: "Remote", emoji: "✅", bg: "#F0FDF4", tag: "Task", tagColor: "#DCFCE7", tagText: "#166534", desc: "Test a real website and share your thoughts out loud as you browse. Screen recorded via your device.", requirements: ["Microphone access", "Modern browser", "Quiet space"], isNew: true, isHot: true },
  { id: 14, name: "Categorise 100 product descriptions", company: "Remotasks", category: "tasks", pay: "£3.20", time: "20 min", location: "Remote", emoji: "✅", bg: "#F0FDF4", tag: "Task", tagColor: "#DCFCE7", tagText: "#166534", desc: "Read short product descriptions and assign them to the correct category. Simple, repetitive work — great for evenings.", requirements: ["Basic reading ability", "Attention to detail", "Reliable internet"], isNew: false },
  { id: 15, name: "App testing — report bugs found", company: "Testbirds UK", category: "tasks", pay: "£12.00", time: "45 min", location: "Remote", emoji: "✅", bg: "#F0FDF4", tag: "Task", tagColor: "#DCFCE7", tagText: "#166534", desc: "Test a new mobile app before launch and report any bugs or issues you find. Paid per valid bug reported.", requirements: ["Smartphone iOS or Android", "Good eye for detail", "Can write clear descriptions"], isNew: true },
  { id: 16, name: "Data entry — business contacts", company: "Microworkers", category: "tasks", pay: "£2.80", time: "15 min", location: "Remote", emoji: "✅", bg: "#F0FDF4", tag: "Task", tagColor: "#DCFCE7", tagText: "#166534", desc: "Copy business contact information from websites into a spreadsheet. Straightforward copy and paste work.", requirements: ["Computer access", "Good accuracy", "Excel or Google Sheets"], isNew: false },

  // GIGS
  { id: 17, name: "Stock level audit at Boots Pharmacy", company: "Gigwalk UK", category: "gigs", pay: "£8.00", time: "30 min", location: "March, Cambs", emoji: "📍", bg: "#FAF5FF", tag: "Gig", tagColor: "#F3E8FF", tagText: "#7E22CE", desc: "Visit your local Boots and check stock levels of 10 specified products. Take photos and submit via app.", requirements: ["Smartphone with camera", "Near a Boots store", "Reliable"], isNew: false },
  { id: 18, name: "Check price labels at Tesco Express", company: "Premise UK", category: "gigs", pay: "£6.50", time: "20 min", location: "Nationwide", emoji: "📍", bg: "#FAF5FF", tag: "Gig", tagColor: "#F3E8FF", tagText: "#7E22CE", desc: "Visit a Tesco Express near you and check that shelf price labels match the correct products. Photo evidence required.", requirements: ["Near a Tesco Express", "Smartphone camera", "Eye for detail"], isNew: true },
  { id: 19, name: "Verify business is open & trading", company: "Streetbees", category: "gigs", pay: "£5.00", time: "15 min", location: "Nationwide", emoji: "📍", bg: "#FAF5FF", tag: "Gig", tagColor: "#F3E8FF", tagText: "#7E22CE", desc: "Visit a local business and verify it is still open, trading and correctly listed online. Take 3 photos.", requirements: ["Smartphone with GPS", "Near the listed business"], isNew: false },
  { id: 20, name: "McDonald's menu board photo audit", company: "Roamler UK", category: "gigs", pay: "£7.00", time: "25 min", location: "Nationwide", emoji: "📍", bg: "#FAF5FF", tag: "Gig", tagColor: "#F3E8FF", tagText: "#7E22CE", desc: "Visit your nearest McDonald's and photograph the menu boards to check pricing accuracy. Includes a £3 meal voucher.", requirements: ["Smartphone", "Near a McDonald's", "GPS must be enabled"], isNew: true },
  { id: 21, name: "EV charging point condition check", company: "Field Agent", category: "gigs", pay: "£9.00", time: "20 min", location: "Peterborough", emoji: "📍", bg: "#FAF5FF", tag: "Gig", tagColor: "#F3E8FF", tagText: "#7E22CE", desc: "Visit an EV charging station and check that it is working, clean and correctly signposted. Photo report required.", requirements: ["Can visit Peterborough", "Smartphone", "Attention to detail"], isNew: true, isHot: true },

  // MYSTERY SHOPPING
  { id: 22, name: "Dine & review — Costa Coffee", company: "Ipsos Mystery", category: "mystery", pay: "£15.00", time: "45 min", location: "Nationwide", emoji: "🛍️", bg: "#FDF2F8", tag: "Mystery", tagColor: "#FCE7F3", tagText: "#9D174D", desc: "Visit Costa Coffee as a mystery shopper. Order a drink, assess cleanliness, service speed and staff friendliness. £5 reimbursement included.", requirements: ["18+ years", "Good written English", "Smartphone for photos"], isHot: true },
  { id: 23, name: "Fine dining mystery shop — restaurant", company: "Market Force", category: "mystery", pay: "£35.00", time: "2 hrs", location: "Cambridge", emoji: "🛍️", bg: "#FDF2F8", tag: "Mystery", tagColor: "#FCE7F3", tagText: "#9D174D", desc: "Dine at a premium restaurant as a mystery guest. Full meal reimbursed up to £60. Detailed written report required.", requirements: ["Smart dress code", "Excellent writing skills", "18+"], isHot: true },
  { id: 24, name: "Bank branch service assessment", company: "Retail Eyes", category: "mystery", pay: "£20.00", time: "1 hr", location: "Peterborough", emoji: "🛍️", bg: "#FDF2F8", tag: "Mystery", tagColor: "#FCE7F3", tagText: "#9D174D", desc: "Visit a high street bank branch, make a simple enquiry and rate the quality of service received.", requirements: ["18+", "Not a current employee of this bank", "Good memory for detail"], isNew: true },
  { id: 25, name: "Supermarket self-checkout audit", company: "Shopmetrics", category: "mystery", pay: "£12.00", time: "30 min", location: "Nationwide", emoji: "🛍️", bg: "#FDF2F8", tag: "Mystery", tagColor: "#FCE7F3", tagText: "#9D174D", desc: "Use the self-checkout at a major supermarket and rate the experience. £5 shopping reimbursement included.", requirements: ["18+", "Smartphone", "Near a participating supermarket"], isNew: false },
  { id: 26, name: "Hotel lobby & reception mystery visit", company: "GfK Mystery", category: "mystery", pay: "£45.00", time: "2 hrs", location: "Cambridge", emoji: "🛍️", bg: "#FDF2F8", tag: "Mystery", tagColor: "#FCE7F3", tagText: "#9D174D", desc: "Check into a hotel as a mystery guest. Assess check-in process, room quality and staff behaviour. Overnight stay reimbursed.", requirements: ["Professional presentation", "Detailed report writing", "18+"], isNew: true, isHot: true },
  { id: 27, name: "Gym & leisure centre audit", company: "IntelliShop UK", category: "mystery", pay: "£18.00", time: "1.5 hrs", location: "Nationwide", emoji: "🛍️", bg: "#FDF2F8", tag: "Mystery", tagColor: "#FCE7F3", tagText: "#9D174D", desc: "Visit a gym or leisure centre, enquire about membership and assess the sales process and facilities.", requirements: ["18+", "Active wear", "Good written English"], isNew: false },
  { id: 28, name: "Car dealership experience visit", company: "Mobee UK", category: "mystery", pay: "£30.00", time: "1.5 hrs", location: "Peterborough", emoji: "🛍️", bg: "#FDF2F8", tag: "Mystery", tagColor: "#FCE7F3", tagText: "#9D174D", desc: "Visit a car dealership and enquire about purchasing a vehicle. Assess the sales experience and follow-up process.", requirements: ["Driving licence", "18+", "Convincing buyer persona"], isNew: true },

  // PROMO
  { id: 29, name: "Brand ambassador — Asda sampling", company: "Fluid Retail", category: "promo", pay: "£11.00", time: "4 hrs", location: "Peterborough", emoji: "🎪", bg: "#FFFBEB", tag: "Promo", tagColor: "#FEF3C7", tagText: "#92400E", desc: "Hand out product samples to shoppers in Asda. Friendly and approachable personality required. Uniform provided.", requirements: ["Confident communicator", "Able to stand for 4 hours", "Smart casual dress"], isNew: true },
  { id: 30, name: "Drinks promotion — Tesco event day", company: "REL Field Marketing", category: "promo", pay: "£12.00", time: "6 hrs", location: "Cambridge", emoji: "🎪", bg: "#FFFBEB", tag: "Promo", tagColor: "#FEF3C7", tagText: "#92400E", desc: "Promote a new soft drink range in Tesco. Engage shoppers, hand out samples and explain the product range.", requirements: ["Energetic personality", "Sales experience helpful", "Uniform provided"], isNew: false },
  { id: 31, name: "Street marketing — city centre leaflets", company: "Pimento Group", category: "promo", pay: "£10.50", time: "3 hrs", location: "Peterborough", emoji: "🎪", bg: "#FFFBEB", tag: "Promo", tagColor: "#FEF3C7", tagText: "#92400E", desc: "Distribute promotional leaflets for a new restaurant opening in Peterborough city centre. Friendly and presentable required.", requirements: ["Comfortable outdoors", "Presentable appearance", "Punctual"], isNew: true },
  { id: 32, name: "Festival staff — Ely Folk Festival", company: "Evolent Staffing", category: "promo", pay: "£13.00", time: "8 hrs", location: "Ely, Cambs", emoji: "🎪", bg: "#FFFBEB", tag: "Promo", tagColor: "#FEF3C7", tagText: "#92400E", desc: "Event staff needed for Ely Folk Festival. Roles include ticketing, bar support and guest services. Full day shifts available.", requirements: ["18+", "Customer service experience", "Able to work weekends"], isNew: true, isHot: true },
  { id: 33, name: "New gym opening — promo team", company: "Tempr UK", category: "promo", pay: "£11.50", time: "5 hrs", location: "March, Cambs", emoji: "🎪", bg: "#FFFBEB", tag: "Promo", tagColor: "#FEF3C7", tagText: "#92400E", desc: "Promote a new gym opening in March town centre. Sign people up for free trials and explain membership options.", requirements: ["Enthusiastic personality", "Interest in fitness helpful", "Smart casual dress"], isNew: false },

  // SHIFTS
  { id: 34, name: "Warehouse operative — Amazon", company: "Indeed Flex", category: "shifts", pay: "£11.44", time: "8 hrs", location: "Peterborough", emoji: "🏗️", bg: "#F0FDF4", tag: "Shift", tagColor: "#DCFCE7", tagText: "#166534", desc: "Pick and pack shifts at Amazon fulfilment centre. Full training provided. Weekly pay. Multiple shift patterns available.", requirements: ["18+ years", "Steel toe cap boots", "Able to lift 15kg"], isHot: true },
  { id: 35, name: "Hospitality staff — Cambridgeshire hotel", company: "Syft", category: "shifts", pay: "£12.50", time: "8 hrs", location: "Ely, Cambs", emoji: "🏗️", bg: "#F0FDF4", tag: "Shift", tagColor: "#DCFCE7", tagText: "#166534", desc: "Front of house and housekeeping staff needed at a 4-star hotel. Day and evening shifts. Weekly pay.", requirements: ["Customer service experience", "Smart appearance", "Reliable"], isNew: true },
  { id: 36, name: "Bar staff — Cambridge city centre", company: "Coople UK", category: "shifts", pay: "£13.00", time: "6 hrs", location: "Cambridge", emoji: "🏗️", bg: "#F0FDF4", tag: "Shift", tagColor: "#DCFCE7", tagText: "#166534", desc: "Experienced bar staff needed for busy Cambridge city centre venues. Evening and weekend shifts. Tips included.", requirements: ["Bar experience essential", "18+", "Personal licence helpful"], isNew: false },
  { id: 37, name: "Care home activity assistant", company: "Manpower UK", category: "shifts", pay: "£11.00", time: "4 hrs", location: "March, Cambs", emoji: "🏗️", bg: "#F0FDF4", tag: "Shift", tagColor: "#DCFCE7", tagText: "#166534", desc: "Support residents with daily activities at a local care home. Compassionate and patient individuals wanted.", requirements: ["DBS check required", "Caring nature", "18+"], isNew: true },
  { id: 38, name: "Delivery driver — next day parcels", company: "Amazon Flex", category: "shifts", pay: "£15.00", time: "4 hrs", location: "Peterborough", emoji: "🏗️", bg: "#F0FDF4", tag: "Shift", tagColor: "#DCFCE7", tagText: "#166534", desc: "Deliver parcels to homes in your area using your own vehicle. Flexible blocks available morning, afternoon and evening.", requirements: ["Full UK driving licence", "Own vehicle", "Smartphone"], isNew: false, isHot: true },
  { id: 39, name: "Retail assistant — Christmas temp", company: "Randstad UK", category: "shifts", pay: "£11.44", time: "8 hrs", location: "Peterborough", emoji: "🏗️", bg: "#F0FDF4", tag: "Shift", tagColor: "#DCFCE7", tagText: "#166534", desc: "Seasonal retail assistant roles across major high street stores in Peterborough. Start immediately.", requirements: ["Customer service skills", "Flexible availability", "18+"], isNew: true },

  // PET SITTING
  { id: 40, name: "Dog walking — 2 golden retrievers", company: "Rover UK", category: "petsitting", pay: "£12.00", time: "1 hr", location: "March, Cambs", emoji: "🐶", bg: "#FFF7ED", tag: "Pet", tagColor: "#FFEDD5", tagText: "#9A3412", desc: "Walk two friendly golden retrievers around March town centre. Owner provides leads and poo bags. Flexible schedule.", requirements: ["Dog experience", "Physically active", "DBS check required"], isNew: true },
  { id: 41, name: "Cat sitting — 5 days home visits", company: "Pawshake UK", category: "petsitting", pay: "£35.00", time: "5 days", location: "Ely, Cambs", emoji: "🐶", bg: "#FFF7ED", tag: "Pet", tagColor: "#FFEDD5", tagText: "#9A3412", desc: "Visit a home twice daily to feed and care for two cats while owner is on holiday. 20 min visits morning and evening.", requirements: ["Cat experience", "Reliable", "Own transport helpful"], isNew: false },
  { id: 42, name: "Puppy sitting — 3 days", company: "Rover UK", category: "petsitting", pay: "£45.00", time: "3 days", location: "March, Cambs", emoji: "🐶", bg: "#FFF7ED", tag: "Pet", tagColor: "#FFEDD5", tagText: "#9A3412", desc: "Look after an 8-month Labrador puppy for 3 days while owner travels. Puppy stays at your home or theirs.", requirements: ["Dog owner experience", "Garden preferred", "18+"], isNew: true, isHot: true },
  { id: 43, name: "Dog boarding — weekend", company: "Pawshake UK", category: "petsitting", pay: "£55.00", time: "Weekend", location: "Peterborough", emoji: "🐶", bg: "#FFF7ED", tag: "Pet", tagColor: "#FFEDD5", tagText: "#9A3412", desc: "Board a friendly cocker spaniel at your home for a long weekend. Food provided. Dog is house trained.", requirements: ["Home with garden", "No other dogs", "Pet-friendly home"], isNew: false },

  // HOUSE SITTING
  { id: 44, name: "Weekend house sit — Ely", company: "TrustedHousesitters", category: "housesitting", pay: "£40.00", time: "Weekend", location: "Ely, Cambs", emoji: "🏡", bg: "#F0F9FF", tag: "House", tagColor: "#E0F2FE", tagText: "#075985", desc: "Look after a 3-bed house and one cat in Ely while owners are away. Accommodation provided free. £40 for your time.", requirements: ["References required", "Non-smoker", "Cat friendly"], isNew: false },
  { id: 45, name: "One week house sit — Cambridge", company: "HouseCarers UK", category: "housesitting", pay: "£120.00", time: "7 days", location: "Cambridge", emoji: "🏡", bg: "#F0F9FF", tag: "House", tagColor: "#E0F2FE", tagText: "#075985", desc: "Look after a large family home in Cambridge for one week. Water plants, take in post, care for two guinea pigs.", requirements: ["References", "Non-smoker", "Flexible dates"], isNew: true, isHot: true },
  { id: 46, name: "House sit with dog — 4 nights", company: "MindMyHouse", category: "housesitting", pay: "£60.00", time: "4 nights", location: "Peterborough", emoji: "🏡", bg: "#F0F9FF", tag: "House", tagColor: "#E0F2FE", tagText: "#075985", desc: "Stay at a modern 2-bed house in Peterborough and look after a friendly border collie. Free accommodation included.", requirements: ["Dog experience", "References", "Non-smoker"], isNew: false },

  // DELIVERY
  { id: 47, name: "Deliveroo — evening delivery rider", company: "Deliveroo", category: "delivery", pay: "£13.00", time: "3 hrs", location: "Cambridge", emoji: "🚗", bg: "#FEF9C3", tag: "Delivery", tagColor: "#FEF9C3", tagText: "#713F12", desc: "Flexible evening delivery shifts in Cambridge city centre. Bike or moped required. Work when you want.", requirements: ["Bicycle or moped", "Smartphone", "18+ years"], isNew: false },
  { id: 48, name: "Uber Eats — weekend mornings", company: "Uber Eats", category: "delivery", pay: "£14.00", time: "4 hrs", location: "Peterborough", emoji: "🚗", bg: "#FEF9C3", tag: "Delivery", tagColor: "#FEF9C3", tagText: "#713F12", desc: "Weekend breakfast and brunch delivery shifts with Uber Eats. Earn extra on top of base pay with tips.", requirements: ["Vehicle or bicycle", "18+", "Smartphone"], isNew: true },
  { id: 49, name: "Gophr courier — same day packages", company: "Gophr", category: "delivery", pay: "£15.50", time: "6 hrs", location: "Cambridge", emoji: "🚗", bg: "#FEF9C3", tag: "Delivery", tagColor: "#FEF9C3", tagText: "#713F12", desc: "Same-day courier shifts delivering business packages across Cambridge. Car required. Good earnings potential.", requirements: ["Full driving licence", "Own car", "Smartphone with data"], isNew: true, isHot: true },

  // TUTORING
  { id: 50, name: "GCSE Maths tutor — online", company: "Tutorful", category: "tutoring", pay: "£20.00", time: "1 hr", location: "Remote", emoji: "🎓", bg: "#FDF4FF", tag: "Tutor", tagColor: "#FAE8FF", tagText: "#6B21A8", desc: "Online GCSE maths tutoring via video call. Flexible hours, work from home. DBS check required.", requirements: ["Maths qualification", "DBS check", "Reliable internet"], isNew: true },
  { id: 51, name: "Primary school reading support", company: "MyTutor", category: "tutoring", pay: "£18.00", time: "1 hr", location: "Remote", emoji: "🎓", bg: "#FDF4FF", tag: "Tutor", tagColor: "#FAE8FF", tagText: "#6B21A8", desc: "Support primary aged children with reading and comprehension skills via video call. Patient and encouraging tutors needed.", requirements: ["Teaching or childcare experience", "DBS check", "Webcam"], isNew: false },
  { id: 52, name: "English as a second language — adults", company: "Superprof UK", category: "tutoring", pay: "£22.00", time: "1 hr", location: "Remote or March", emoji: "🎓", bg: "#FDF4FF", tag: "Tutor", tagColor: "#FAE8FF", tagText: "#6B21A8", desc: "Teach conversational English to adult learners online or in person. Flexible scheduling and good hourly rate.", requirements: ["English fluency", "Teaching qualification helpful", "Patient personality"], isNew: true },
  { id: 53, name: "A-Level Biology tutoring", company: "Tutorful", category: "tutoring", pay: "£28.00", time: "1 hr", location: "Remote", emoji: "🎓", bg: "#FDF4FF", tag: "Tutor", tagColor: "#FAE8FF", tagText: "#6B21A8", desc: "A-Level Biology exam preparation tutoring via video call. Help students achieve their target grades.", requirements: ["Biology degree or equivalent", "DBS check", "Exam board knowledge"], isNew: false, isHot: true },
];

const FEATURED = [
  { id: 1, name: "Hotel Overnight Mystery Stay", company: "GfK Mystery", pay: "£45", bg: ["#9B6FE8", "#7C3AED"], tag: "Mystery Shopping", taskId: 26 },
  { id: 2, name: "Amazon Warehouse Shift", company: "Indeed Flex", pay: "£91.52", bg: ["#3B82F6", "#1D4ED8"], tag: "Day Shift", taskId: 34 },
  { id: 3, name: "Cambridge House Sit — 7 Days", company: "HouseCarers UK", pay: "£120", bg: ["#E8519A", "#BE185D"], tag: "House Sitting", taskId: 45 },
  { id: 4, name: "Ely Folk Festival Staff", company: "Evolent Staffing", pay: "£104", bg: ["#F4843A", "#C2410C"], tag: "Promo Shift", taskId: 32 },
  { id: 5, name: "Website Usability Test", company: "UserTesting UK", pay: "£9", bg: ["#22C55E", "#15803D"], tag: "Remote Task", taskId: 13 },
];

export default function GigNest() {
  const [screen, setScreen] = useState("splash");
  const [appTab, setAppTab] = useState("home");
  const [catFilter, setCatFilter] = useState("all");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("Sarah");
  const [balance, setBalance] = useState(12.40);
  const [completed, setCompleted] = useState(8);
  const [toast, setToast] = useState("");
  const [showPayout, setShowPayout] = useState(false);
  const [payoutMethod, setPayoutMethod] = useState("");
  const [selectedTask, setSelectedTask] = useState(null);
  const [appliedTasks, setAppliedTasks] = useState([]);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2500);
  };

  const handleApply = (task) => {
    if (appliedTasks.includes(task.id)) {
      showToast("Already applied!");
      return;
    }
    setAppliedTasks(prev => [...prev, task.id]);
    const pay = parseFloat(task.pay.replace("£","").replace("/hr",""));
    setBalance(b => Math.round((b + pay) * 100) / 100);
    setCompleted(c => c + 1);
    setSelectedTask(null);
    showToast(`🎉 Applied! £${pay.toFixed(2)} pending`);
  };

  const CAT_GROUPS = {
    surveys: ["surveys", "tasks"],
    gigs: ["gigs", "shifts"],
    mystery: ["mystery"],
    promo: ["promo"],
    petsitting: ["petsitting", "housesitting"],
    delivery: ["delivery"],
    tutoring: ["tutoring"],
    all: null,
  };

  const filteredTasks = catFilter === "all"
    ? TASKS
    : TASKS.filter(t => {
        const group = CAT_GROUPS[catFilter];
        return group ? group.includes(t.category) : t.category === catFilter;
      });

  if (screen === "splash") return (
    <>
      <style>{styles}</style>
      <div className="app">
        <button className="temp-app-btn" onClick={() => { setScreen("main"); setAppTab("home"); }}>🦊 Enter App</button>
        <div className="splash">
          <div className="splash-fox-wrap">
            <img src="/fox-mascot.jpg" alt="GigNest Fox" />
          </div>
          <div className="splash-title">Gig<span>N</span>est</div>
          <div className="splash-sub">Earn real money with surveys, tasks, gigs, mystery shopping and more</div>
          <div className="splash-cats">
            {[
              { label:"Surveys & Tasks", icon:"📋", color:"#4CAF82", cat:"surveys" },
              { label:"Gigs & Field Work", icon:"📍", color:"#5B8DEF", cat:"gigs" },
              { label:"Mystery Shopping", icon:"🛍️", color:"#9B6FE8", cat:"mystery" },
              { label:"Promo & Temp Shifts", icon:"🎪", color:"#F4843A", cat:"promo" },
              { label:"Pet & House Sitting", icon:"🐶", color:"#E8519A", cat:"petsitting" },
            ].map(cat => (
              <div key={cat.label} className="splash-cat-btn" style={{background: cat.color, cursor:"pointer"}}
                onClick={() => { setCatFilter(cat.cat); setAppTab("earn"); setScreen("main"); }}>
                <div className="cat-btn-icon">{cat.icon}</div>
                {cat.label}
              </div>
            ))}
          </div>
          <button className="splash-btn" onClick={() => setScreen("signup")}>Get Started — It's Free</button>
          <div className="splash-link" onClick={() => setScreen("login")}>Already have an account? Sign in</div>
        </div>
      </div>
    </>
  );

  if (screen === "login") return (
    <>
      <style>{styles}</style>
      <div className="app">
        <div className="auth-screen">
          <div className="auth-header">
            <button className="auth-back" onClick={() => setScreen("splash")}>←</button>
            <div className="auth-title">Welcome back 👋</div>
            <div className="auth-sub">Sign in to your GigNest account</div>
          </div>
          <div className="auth-body">
            <div className="input-group">
              <div className="input-label">Email</div>
              <input className="input-field" type="email" placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="input-group">
              <div className="input-label">Password</div>
              <input className="input-field" type="password" placeholder="••••••••" value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <button className="auth-btn" onClick={() => { setScreen("main"); setAppTab("home"); }}>Sign In</button>
            <div className="auth-switch">Don't have an account? <span onClick={() => setScreen("signup")}>Sign up free</span></div>
          </div>
        </div>
      </div>
    </>
  );

  if (screen === "signup") return (
    <>
      <style>{styles}</style>
      <div className="app">
        <div className="auth-screen">
          <div className="auth-header">
            <button className="auth-back" onClick={() => setScreen("splash")}>←</button>
            <div className="auth-title">Create account 🦊</div>
            <div className="auth-sub">Start earning money today</div>
          </div>
          <div className="auth-body">
            <div className="input-group">
              <div className="input-label">Full Name</div>
              <input className="input-field" placeholder="Your name" value={name} onChange={e => setName(e.target.value)} />
            </div>
            <div className="input-group">
              <div className="input-label">Email</div>
              <input className="input-field" type="email" placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="input-group">
              <div className="input-label">Password</div>
              <input className="input-field" type="password" placeholder="Choose a password" value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <button className="auth-btn" onClick={() => { if(name) setUserName(name.split(" ")[0]); setScreen("main"); setAppTab("home"); }}>Create My Account</button>
            <div className="auth-switch">Already have an account? <span onClick={() => setScreen("login")}>Sign in</span></div>
          </div>
        </div>
      </div>
    </>
  );

  if (selectedTask) {
    const task = selectedTask;
    return (
      <>
        <style>{styles}</style>
        <div className="app">
          <div className="detail-screen">
            <div className="detail-hero" style={{background: `linear-gradient(160deg, ${task.bg}22, ${task.bg}44)`}}>
              <button className="detail-back" onClick={() => setSelectedTask(null)}>←</button>
              <div style={{paddingTop: 20}}>
                <div className="detail-tag" style={{background: task.tagColor, color: task.tagText}}>{task.tag}</div>
                <div className="detail-title">{task.name}</div>
                <div className="detail-company">by {task.company}</div>
                <div className="detail-chips">
                  <div className="detail-chip">⏱ {task.time}</div>
                  <div className="detail-chip">📍 {task.location}</div>
                  {task.isNew && <div className="detail-chip" style={{background:"#DCFCE7", border:"1.5px solid #DCFCE7", color:"#166534"}}>🆕 New</div>}
                  {task.isHot && <div className="detail-chip" style={{background:"#FEE2E2", border:"1.5px solid #FEE2E2", color:"#991B1B"}}>🔥 Hot</div>}
                </div>
              </div>
            </div>
            <div style={{padding:"0 16px", flex:1, overflowY:"auto", paddingBottom: 120}}>
              <div className="detail-pay-box">
                <div>
                  <div className="detail-pay-label">You Earn</div>
                  <div className="detail-pay-amount">{task.pay}</div>
                </div>
                <button className="detail-apply-btn" onClick={() => handleApply(task)}>
                  {appliedTasks.includes(task.id) ? "✓ Applied" : "Apply Now"}
                </button>
              </div>
              <div className="detail-section">
                <div className="detail-section-title">About this task</div>
                <div className="detail-desc">{task.desc}</div>
              </div>
              <div className="detail-section">
                <div className="detail-section-title">Requirements</div>
                {task.requirements.map((req, i) => (
                  <div key={i} className="detail-req-item">
                    <div className="detail-req-dot" />
                    {req}
                  </div>
                ))}
              </div>
            </div>
            <div className="detail-cta">
              <button
                className="detail-cta-btn"
                onClick={() => handleApply(task)}
                style={appliedTasks.includes(task.id) ? {background:"#22C55E", boxShadow:"0 8px 28px rgba(34,197,94,0.3)"} : {}}
              >
                {appliedTasks.includes(task.id) ? "✓ Applied Successfully" : `Apply & Earn ${task.pay}`}
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  const renderHome = () => (
    <div className="content">
      <div className="greeting-row">
        <div className="greeting-text">
          <div className="greeting-small">Good morning 👋</div>
          <div className="greeting-name">Hi, {userName}!</div>
        </div>
        <div className="streak-badge">
          <div className="streak-num">🔥 {completed}</div>
          <div className="streak-label">Day Streak</div>
        </div>
      </div>

      <div className="wallet-card">
        <div className="wallet-top">
          <div className="wallet-label">Available Balance</div>
          <div className="wallet-badge">🥉 Bronze</div>
        </div>
        <div className="wallet-amount">£{balance.toFixed(2)}</div>
        <div className="progress-bar-wrap">
          <div className="progress-bar-fill" style={{width: `${Math.min((balance/50)*100,100)}%`}} />
        </div>
        <div className="progress-label">
          <span>£0</span>
          <span>£{balance.toFixed(2)} / £50 to Silver 🥈</span>
        </div>
        <div className="wallet-row" style={{marginTop:16}}>
          <div className="wallet-stats">
            <div>
              <div className="wallet-stat-val">{completed}</div>
              <div className="wallet-stat-label">Completed</div>
            </div>
            <div>
              <div className="wallet-stat-val">{TASKS.length}</div>
              <div className="wallet-stat-label">Available</div>
            </div>
          </div>
          <button className="wallet-btn" onClick={() => setShowPayout(true)}>Withdraw →</button>
        </div>
      </div>

      <div className="section-header">
        <div className="section-title">⭐ Featured</div>
      </div>
      <div className="featured-scroll">
        {FEATURED.map(f => (
          <div key={f.id} className="featured-card" style={{background:`linear-gradient(135deg, ${f.bg[0]}, ${f.bg[1]})`}} onClick={() => setSelectedTask(TASKS.find(t=>t.id===f.taskId))}>
            <div className="featured-tag">{f.tag}</div>
            <div className="featured-name">{f.name}</div>
            <div className="featured-company">by {f.company}</div>
            <div className="featured-bottom">
              <div className="featured-pay">{f.pay}</div>
              <div className="featured-time">Tap to apply</div>
            </div>
          </div>
        ))}
      </div>

      <div className="section-header">
        <div className="section-title">Categories</div>
        <div className="section-see-all" onClick={() => setCatFilter("all")}>See all</div>
      </div>
      <div className="cat-scroll">
        {CATEGORIES.map(cat => (
          <div key={cat.id} className={`cat-card${catFilter===cat.id?" active":""}`} onClick={() => setCatFilter(cat.id)}>
            <div className="cat-icon" style={{background:cat.bg}}>{cat.emoji}</div>
            <div className="cat-name">{cat.name}</div>
            <div className="cat-count">{cat.id==="all" ? `${TASKS.length}` : `${TASKS.filter(t=>t.category===cat.id).length}`} jobs</div>
          </div>
        ))}
      </div>

      <div className="section-header">
        <div className="section-title">Available Now</div>
        <div className="section-see-all" onClick={() => setAppTab("earn")}>See all</div>
      </div>
      <div className="task-list">
        {filteredTasks.slice(0,6).map(task => (
          <div key={task.id} className="task-card" onClick={() => setSelectedTask(task)}>
            <div className="task-icon" style={{background:task.bg}}>{task.emoji}</div>
            <div className="task-info">
              <div className="task-company">{task.company}</div>
              <div className="task-name">{task.name}</div>
              <div className="task-meta">
                <div className="task-time">⏱ {task.time}</div>
                <div className="task-location">📍 {task.location}</div>
              </div>
            </div>
            <div className="task-right">
              <div className="task-pay">{task.pay}</div>
              {task.isNew && <div className="task-new">New</div>}
              {task.isHot && <div className="task-hot">Hot</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const CAT_TITLES = {
    surveys: "Surveys & Tasks",
    gigs: "Gigs & Field Work",
    mystery: "Mystery Shopping",
    promo: "Promo & Temp Shifts",
    petsitting: "Pet & House Sitting",
    delivery: "Delivery",
    tutoring: "Tutoring",
    all: "All Opportunities",
  };

  const renderEarn = () => (
    <div className="content">
      <button className="page-back-btn" onClick={() => setAppTab("home")}>← Back</button>
      <div style={{fontFamily:"'Syne',sans-serif", fontSize:24, fontWeight:800, marginBottom:6}}>{CAT_TITLES[catFilter] || "All Opportunities"}</div>
      <div style={{fontSize:14, color:"#AAA", marginBottom:20}}>{filteredTasks.length} jobs available</div>
      <div className="cat-scroll" style={{marginBottom:20}}>
        {CATEGORIES.map(cat => (
          <div key={cat.id} className={`cat-card${catFilter===cat.id?" active":""}`} onClick={() => setCatFilter(cat.id)}>
            <div className="cat-icon" style={{background:cat.bg}}>{cat.emoji}</div>
            <div className="cat-name">{cat.name}</div>
            <div className="cat-count">{cat.id==="all" ? TASKS.length : TASKS.filter(t=>t.category===cat.id).length} jobs</div>
          </div>
        ))}
      </div>
      <div className="task-list">
        {filteredTasks.map(task => (
          <div key={task.id} className="task-card" onClick={() => setSelectedTask(task)}>
            <div className="task-icon" style={{background:task.bg}}>{task.emoji}</div>
            <div className="task-info">
              <div className="task-company">{task.company}</div>
              <div className="task-name">{task.name}</div>
              <div className="task-meta">
                <div className="task-time">⏱ {task.time}</div>
                <div className="task-location">📍 {task.location}</div>
                <div className="task-tag" style={{background:task.tagColor, color:task.tagText}}>{task.tag}</div>
              </div>
            </div>
            <div className="task-right">
              <div className="task-pay">{task.pay}</div>
              {task.isNew && <div className="task-new">New</div>}
              {task.isHot && <div className="task-hot">Hot</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderWallet = () => (
    <div className="content">
      <button className="page-back-btn" onClick={() => setAppTab("home")}>← Back</button>
      <div style={{fontFamily:"'Syne',sans-serif", fontSize:24, fontWeight:800, marginBottom:20}}>My Wallet</div>
      <div className="wallet-card" style={{marginBottom:20}}>
        <div className="wallet-top">
          <div className="wallet-label">Available Balance</div>
          <div className="wallet-badge">🥉 Bronze</div>
        </div>
        <div className="wallet-amount">£{balance.toFixed(2)}</div>
        <div className="progress-bar-wrap">
          <div className="progress-bar-fill" style={{width: `${Math.min((balance/50)*100,100)}%`}} />
        </div>
        <div className="progress-label">
          <span>Bronze</span>
          <span>£{(50-balance).toFixed(2)} to Silver 🥈</span>
        </div>
        <div className="wallet-row" style={{marginTop:16}}>
          <div className="wallet-stats">
            <div>
              <div className="wallet-stat-val">£{(balance*1.8).toFixed(2)}</div>
              <div className="wallet-stat-label">Total Earned</div>
            </div>
            <div>
              <div className="wallet-stat-val">£{(balance*0.8).toFixed(2)}</div>
              <div className="wallet-stat-label">Withdrawn</div>
            </div>
          </div>
          <button className="wallet-btn" onClick={() => setShowPayout(true)}>Withdraw →</button>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-box">
          <div className="stat-box-val">{completed}</div>
          <div className="stat-box-label">Tasks Done</div>
        </div>
        <div className="stat-box">
          <div className="stat-box-val">£{(balance/Math.max(completed,1)).toFixed(2)}</div>
          <div className="stat-box-label">Avg Per Task</div>
        </div>
        <div className="stat-box">
          <div className="stat-box-val">🥉</div>
          <div className="stat-box-label">Current Level</div>
        </div>
        <div className="stat-box">
          <div className="stat-box-val">£10</div>
          <div className="stat-box-label">Min Payout</div>
        </div>
      </div>

      <div className="section-header" style={{marginBottom:14}}>
        <div className="section-title">Recent Activity</div>
      </div>
      <div className="task-list">
        {TASKS.slice(0,5).map(task => (
          <div key={task.id} className="task-card" style={{cursor:"default"}}>
            <div className="task-icon" style={{background:task.bg}}>{task.emoji}</div>
            <div className="task-info">
              <div className="task-company">{task.company}</div>
              <div className="task-name">{task.name}</div>
              <div className="task-meta">
                <div className="task-tag" style={{background:"#DCFCE7", color:"#166534"}}>✓ Completed</div>
              </div>
            </div>
            <div className="task-right">
              <div className="task-pay" style={{color:"#22C55E"}}>+{task.pay}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderProfile = () => (
    <div className="content">
      <button className="page-back-btn" onClick={() => setAppTab("home")}>← Back</button>
      <div className="profile-header">
        <div className="profile-avatar">{userName[0]}</div>
        <div>
          <div className="profile-name">{userName}</div>
          <div className="profile-level">🥉 Bronze Member</div>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-box">
          <div className="stat-box-val">£{balance.toFixed(2)}</div>
          <div className="stat-box-label">Total Balance</div>
        </div>
        <div className="stat-box">
          <div className="stat-box-val">{completed}</div>
          <div className="stat-box-label">Tasks Done</div>
        </div>
      </div>

      <div className="profile-section">
        <div className="profile-section-title">Account</div>
        {[
          {icon:"💳", label:"Payment Methods", value:"Add card"},
          {icon:"🔔", label:"Notifications", value:"On"},
          {icon:"📍", label:"My Location", value:"March, UK"},
          {icon:"🆔", label:"Verify Identity", value:"Pending"},
        ].map(row => (
          <div key={row.label} className="profile-row" onClick={() => showToast("Coming soon!")}>
            <div className="profile-row-icon">{row.icon}</div>
            <div className="profile-row-text">{row.label}</div>
            <div className="profile-row-value">{row.value}</div>
            <div className="profile-row-arrow">›</div>
          </div>
        ))}
      </div>

      <div className="profile-section">
        <div className="profile-section-title">Support</div>
        {[
          {icon:"📄", label:"Terms & Conditions"},
          {icon:"🔒", label:"Privacy Policy"},
          {icon:"💬", label:"Contact Support"},
          {icon:"⭐", label:"Rate GigNest"},
        ].map(row => (
          <div key={row.label} className="profile-row" onClick={() => showToast("Coming soon!")}>
            <div className="profile-row-icon">{row.icon}</div>
            <div className="profile-row-text">{row.label}</div>
            <div className="profile-row-arrow">›</div>
          </div>
        ))}
      </div>

      <div className="profile-section">
        <div className="profile-row" onClick={() => setScreen("splash")}>
          <div className="profile-row-icon">🚪</div>
          <div className="profile-row-text" style={{color:"#EF4444"}}>Sign Out</div>
          <div className="profile-row-arrow">›</div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <style>{styles}</style>
      <div className="app">
        <button className="temp-app-btn" onClick={() => setScreen("splash")}>🦊 GigNest</button>
        <div className="main-app">

          {/* TOP NAV BAR */}
          <div className="topbar">
            <div className="topbar-row">
              <div className="topbar-logo">
                <div className="topbar-logo-fox">
                  <img src="/fox-mascot.jpg" alt="fox" />
                </div>
                Gig<span>N</span>est
              </div>
              <div className="topbar-right">
                <div className="topbar-pill" onClick={() => setAppTab("wallet")}>
                  💰 £{balance.toFixed(2)}
                </div>
                <div className="topbar-notif" onClick={() => showToast("No new notifications")}>
                  🔔
                  <div className="notif-dot" />
                </div>
                <div className="topbar-avatar" onClick={() => setAppTab("profile")}>{userName[0]}</div>
              </div>
            </div>

            {/* PAGE TABS */}
            <div className="page-tabs">
              {[
                {id:"home", label:"🏠 Home"},
                {id:"earn", label:"⚡ Earn"},
                {id:"wallet", label:"💰 Wallet"},
                {id:"profile", label:"👤 Profile"},
              ].map(tab => (
                <button key={tab.id} className={`page-tab${appTab===tab.id?" active":""}`} onClick={() => setAppTab(tab.id)}>
                  {tab.label}
                </button>
              ))}
            </div>

            {/* CATEGORY FILTER — only on home and earn */}
            {(appTab === "home" || appTab === "earn") && (
              <div className="nav-tabs">
                {CATEGORIES.map(cat => (
                  <button key={cat.id} className={`nav-tab${catFilter===cat.id?" active":""}`} onClick={() => setCatFilter(cat.id)}>
                    {cat.emoji} {cat.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {appTab === "home" && renderHome()}
          {appTab === "earn" && renderEarn()}
          {appTab === "wallet" && renderWallet()}
          {appTab === "profile" && renderProfile()}

        </div>

        {showPayout && (
          <div className="modal-overlay" onClick={() => setShowPayout(false)}>
            <div className="modal" onClick={e => e.stopPropagation()}>
              <div className="modal-handle" />
              <div className="modal-title">Withdraw Funds</div>
              <div className="modal-sub">Choose how to receive £{balance.toFixed(2)}</div>
              {[
                {id:"paypal", emoji:"💙", name:"PayPal", sub:"Usually instant"},
                {id:"bank", emoji:"🏦", name:"Bank Transfer", sub:"1–3 business days"},
                {id:"gift", emoji:"🎁", name:"Gift Cards", sub:"Amazon, Tesco & more"},
              ].map(opt => (
                <div key={opt.id} className={`payout-option${payoutMethod===opt.id?" selected":""}`} onClick={() => setPayoutMethod(opt.id)}>
                  <div className="payout-option-icon">{opt.emoji}</div>
                  <div>
                    <div className="payout-option-name">{opt.name}</div>
                    <div className="payout-option-sub">{opt.sub}</div>
                  </div>
                </div>
              ))}
              <button className="modal-btn" onClick={() => { setShowPayout(false); showToast("💸 Withdrawal requested!"); }}>
                Request Withdrawal
              </button>
            </div>
          </div>
        )}

        {toast && <div className="toast">{toast}</div>}
      </div>
    </>
  );
}
