import { useState } from "react";

const styles = `
  /* font loaded via link tag */

  * { box-sizing: border-box; margin: 0; padding: 0; }

  html, body, #root {
    width: 100%;
    min-height: 100vh;
    font-family: 'Poppins', sans-serif;
    background: #FFE8D6;
  }

  .app {
    width: 100%;
    min-height: 100vh;
    background: linear-gradient(175deg, #FFE8D6 0%, #FFD9C2 40%, #FFE4D0 70%, #FFF0E6 100%);
    position: relative;
    overflow-x: hidden;
    overflow-y: auto;
  }

  .main {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: linear-gradient(175deg, #FFF5EF 0%, #FFFAF6 50%, #FFF0E8 100%);
  }

  .topbar {
    background: #FFF5EE;
    padding: 16px 24px 0;
    border-bottom: 1px solid #FFE0C8;
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: 0 2px 12px rgba(232,132,74,0.08);
  }

  .content {
    flex: 1;
    padding: 20px 24px 88px;
    max-width: 900px;
    margin: 0 auto;
    width: 100%;
  }

  .bottom-nav {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #FFF5EE;
    border-top: 1px solid #FFE0C8;
    display: flex;
    padding: 10px 0 18px;
    z-index: 200;
    box-shadow: 0 -2px 16px rgba(232,132,74,0.1);
  }

  .temp-btn {
    position: fixed;
    top: 12px;
    right: 12px;
    z-index: 9999;
    background: #1A1A1A;
    color: white;
    border: none;
    border-radius: 100px;
    padding: 8px 14px;
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    box-shadow: 0 4px 16px rgba(0,0,0,0.25);
  }

  /* SPLASH */
  .splash {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px 24px;
    text-align: center;
  }

  .splash img {
    width: 180px;
    height: 180px;
    object-fit: contain;
    margin-bottom: 12px;
  }

  .splash-title {
    font-size: 40px;
    font-weight: 900;
    color: #2A1200;
    margin-bottom: 8px;
  }

  .splash-title span { color: #FF8C00; }

  .splash-sub {
    font-size: 14px;
    color: #7A4020;
    margin-bottom: 28px;
    line-height: 1.5;
    max-width: 280px;
  }

  .splash-cats {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 28px;
  }

  .splash-cat {
    width: 100%;
    padding: 14px 20px;
    border: none;
    border-radius: 100px;
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    font-weight: 700;
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 12px;
    box-shadow: 0 4px 14px rgba(0,0,0,0.12);
    text-align: left;
  }

  .splash-cat-icon {
    width: 28px;
    height: 28px;
    background: rgba(255,255,255,0.25);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    flex-shrink: 0;
  }

  .splash-main-btn {
    width: 100%;
    padding: 16px;
    background: #E8844A;
    color: white;
    border: none;
    border-radius: 100px;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    margin-bottom: 12px;
    box-shadow: 0 6px 20px rgba(232,132,74,0.4);
  }

  .splash-link {
    font-size: 13px;
    color: #7A4020;
    cursor: pointer;
    text-decoration: underline;
  }

  /* AUTH */
  .auth {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .auth-head {
    background: linear-gradient(160deg, #FFD4A8, #FFC090);
    padding: 56px 24px 40px;
  }

  .auth-back {
    background: rgba(255,255,255,0.4);
    border: none;
    color: #5A2800;
    width: 38px;
    height: 38px;
    border-radius: 12px;
    cursor: pointer;
    font-size: 18px;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .auth-title {
    font-size: 28px;
    font-weight: 800;
    color: #2A1200;
    margin-bottom: 4px;
  }

  .auth-sub { font-size: 13px; color: #7A4020; }

  .auth-body {
    flex: 1;
    padding: 32px 24px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    background: white;
  }

  .input-label {
    font-size: 11px;
    font-weight: 700;
    color: #888;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    margin-bottom: 6px;
  }

  .input-field {
    width: 100%;
    padding: 14px 16px;
    border: 2px solid #F0E8E0;
    border-radius: 12px;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    color: #1A1A1A;
    background: #FAFAFA;
    outline: none;
  }

  .input-field:focus { border-color: #E8844A; background: white; }

  .auth-btn {
    width: 100%;
    padding: 16px;
    background: #E8844A;
    color: white;
    border: none;
    border-radius: 12px;
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    font-weight: 700;
    cursor: pointer;
    margin-top: 6px;
    box-shadow: 0 4px 16px rgba(232,132,74,0.35);
  }

  .auth-switch {
    text-align: center;
    font-size: 13px;
    color: #999;
  }

  .auth-switch span { color: #E8844A; font-weight: 700; cursor: pointer; }

  /* TOPBAR */
  .topbar {
    background: #FFF5EE;
    padding: 16px 16px 0;
    border-bottom: 1px solid #FFE0C8;
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: 0 2px 12px rgba(232,132,74,0.08);
  }

  .topbar-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
  }

  .topbar-logo {
    font-size: 20px;
    font-weight: 900;
    color: #1A1A1A;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .topbar-logo span { color: #FF8C00; }

  .topbar-fox {
    width: 28px;
    height: 28px;
    border-radius: 8px;
    overflow: hidden;
  }

  .topbar-fox img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .topbar-right {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .topbar-balance {
    background: #E8844A;
    color: white;
    font-size: 12px;
    font-weight: 700;
    padding: 6px 12px;
    border-radius: 100px;
    cursor: pointer;
  }

  .topbar-bell {
    width: 34px;
    height: 34px;
    background: #FFE8D6;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    cursor: pointer;
    position: relative;
  }

  .bell-dot {
    position: absolute;
    top: 4px;
    right: 4px;
    width: 7px;
    height: 7px;
    background: #FF4040;
    border-radius: 50%;
    border: 1.5px solid white;
  }

  .topbar-avatar {
    width: 34px;
    height: 34px;
    background: #E8844A;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 700;
    font-size: 14px;
    cursor: pointer;
  }

  .nav-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3px;
    cursor: pointer;
    border: none;
    background: none;
    padding: 0;
  }

  .nav-icon { font-size: 20px; }
  .nav-label { font-size: 9px; font-weight: 700; color: #CCC; text-transform: uppercase; letter-spacing: 0.3px; }
  .nav-item.active .nav-label { color: #E8844A; }

  /* WALLET CARD */
  .wallet-card {
    background: linear-gradient(135deg, #E8844A 0%, #F5A06A 60%, #FFBA80 100%);
    border-radius: 24px;
    padding: 22px;
    margin-bottom: 22px;
    box-shadow: 0 8px 32px rgba(232,132,74,0.3);
    position: relative;
    overflow: hidden;
  }

  .wallet-card::after {
    content: '';
    position: absolute;
    top: -40px;
    right: -40px;
    width: 140px;
    height: 140px;
    background: rgba(255,255,255,0.08);
    border-radius: 50%;
  }

  .wallet-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4px;
  }

  .wallet-label {
    font-size: 11px;
    font-weight: 600;
    color: rgba(255,255,255,0.8);
    text-transform: uppercase;
    letter-spacing: 0.8px;
  }

  .wallet-badge {
    background: rgba(255,255,255,0.2);
    color: white;
    font-size: 11px;
    font-weight: 700;
    padding: 3px 10px;
    border-radius: 100px;
  }

  .wallet-amount {
    font-size: 42px;
    font-weight: 900;
    color: white;
    margin-bottom: 4px;
    letter-spacing: -1px;
  }

  .wallet-progress {
    background: rgba(255,255,255,0.2);
    border-radius: 100px;
    height: 5px;
    margin-bottom: 4px;
    overflow: hidden;
  }

  .wallet-progress-fill {
    height: 100%;
    background: white;
    border-radius: 100px;
  }

  .wallet-progress-label {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
  }

  .wallet-progress-label span {
    font-size: 10px;
    color: rgba(255,255,255,0.7);
  }

  .wallet-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .wallet-stats { display: flex; gap: 20px; }

  .wallet-stat-val {
    font-size: 16px;
    font-weight: 800;
    color: white;
  }

  .wallet-stat-lbl {
    font-size: 10px;
    color: rgba(255,255,255,0.7);
  }

  .wallet-withdraw {
    background: rgba(255,255,255,0.2);
    border: 1.5px solid rgba(255,255,255,0.4);
    color: white;
    padding: 9px 16px;
    border-radius: 100px;
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
  }

  /* SECTION */
  .section-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
  }

  .section-title {
    font-size: 16px;
    font-weight: 800;
    color: #1A1A1A;
  }

  .section-link {
    font-size: 12px;
    font-weight: 600;
    color: #E8844A;
    cursor: pointer;
    background: #FFF0E6;
    padding: 4px 10px;
    border-radius: 100px;
  }

  /* FEATURED */
  .featured-scroll {
    display: flex;
    gap: 12px;
    overflow-x: auto;
    scrollbar-width: none;
    padding-bottom: 4px;
    margin-bottom: 24px;
  }

  .featured-scroll::-webkit-scrollbar { display: none; }

  .featured-card {
    flex-shrink: 0;
    width: 200px;
    border-radius: 20px;
    padding: 18px;
    cursor: pointer;
    box-shadow: 0 4px 20px rgba(0,0,0,0.12);
  }

  .featured-tag {
    display: inline-block;
    background: rgba(255,255,255,0.2);
    color: white;
    font-size: 9px;
    font-weight: 700;
    padding: 3px 8px;
    border-radius: 100px;
    margin-bottom: 10px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    border: 1px solid rgba(255,255,255,0.3);
  }

  .featured-name {
    font-size: 14px;
    font-weight: 800;
    color: white;
    margin-bottom: 4px;
    line-height: 1.3;
  }

  .featured-company {
    font-size: 11px;
    color: rgba(255,255,255,0.75);
    margin-bottom: 14px;
  }

  .featured-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .featured-pay {
    font-size: 22px;
    font-weight: 900;
    color: white;
  }

  .featured-tap {
    background: rgba(255,255,255,0.2);
    color: white;
    font-size: 10px;
    font-weight: 700;
    padding: 5px 10px;
    border-radius: 100px;
    border: 1px solid rgba(255,255,255,0.3);
  }

  /* CATEGORIES */
  .cat-scroll {
    display: flex;
    gap: 10px;
    overflow-x: auto;
    scrollbar-width: none;
    padding-bottom: 4px;
    margin-bottom: 22px;
  }

  .cat-scroll::-webkit-scrollbar { display: none; }

  .cat-card {
    flex-shrink: 0;
    width: 90px;
    background: white;
    border-radius: 16px;
    padding: 14px 10px;
    cursor: pointer;
    border: 2px solid #F0E8E0;
    text-align: center;
    transition: all 0.2s;
  }

  .cat-card.active {
    border-color: #E8844A;
    box-shadow: 0 4px 14px rgba(232,132,74,0.2);
  }

  .cat-emoji {
    font-size: 24px;
    margin-bottom: 6px;
  }

  .cat-name {
    font-size: 10px;
    font-weight: 700;
    color: #1A1A1A;
    line-height: 1.2;
    margin-bottom: 2px;
  }

  .cat-count {
    font-size: 9px;
    color: #C4A090;
  }

  /* TASK CARDS */
  .task-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .task-card {
    background: white;
    border-radius: 16px;
    padding: 14px;
    display: flex;
    align-items: center;
    gap: 12px;
    border: 1.5px solid #F0E8E0;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(232,132,74,0.06);
  }

  .task-emoji {
    width: 46px;
    height: 46px;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    flex-shrink: 0;
  }

  .task-info { flex: 1; min-width: 0; }

  .task-company {
    font-size: 10px;
    font-weight: 700;
    color: #E8A882;
    text-transform: uppercase;
    letter-spacing: 0.3px;
    margin-bottom: 2px;
  }

  .task-name {
    font-size: 13px;
    font-weight: 700;
    color: #1A1A1A;
    margin-bottom: 6px;
    line-height: 1.3;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .task-meta {
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
  }

  .task-chip {
    font-size: 10px;
    color: #C4A090;
    background: #FFF5EE;
    padding: 2px 7px;
    border-radius: 100px;
    font-weight: 500;
  }

  .task-tag {
    font-size: 9px;
    padding: 2px 7px;
    border-radius: 100px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.3px;
  }

  .task-right { text-align: right; flex-shrink: 0; }

  .task-pay {
    font-size: 15px;
    font-weight: 800;
    color: #E8844A;
    margin-bottom: 4px;
  }

  .badge-new {
    font-size: 9px;
    font-weight: 700;
    color: #166534;
    background: #DCFCE7;
    padding: 2px 6px;
    border-radius: 100px;
    text-transform: uppercase;
  }

  .badge-hot {
    font-size: 9px;
    font-weight: 700;
    color: #991B1B;
    background: #FEE2E2;
    padding: 2px 6px;
    border-radius: 100px;
    text-transform: uppercase;
  }

  /* DETAIL */
  .detail { min-height: 100vh; background: white; }

  .detail-hero {
    padding: 20px 16px 24px;
    position: relative;
  }

  .detail-back {
    background: #F5F0EC;
    border: none;
    width: 38px;
    height: 38px;
    border-radius: 12px;
    font-size: 18px;
    cursor: pointer;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .detail-tag {
    display: inline-block;
    padding: 5px 12px;
    border-radius: 100px;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.3px;
    margin-bottom: 10px;
  }

  .detail-title {
    font-size: 22px;
    font-weight: 800;
    color: #1A1A1A;
    margin-bottom: 4px;
    line-height: 1.2;
  }

  .detail-company { font-size: 13px; color: #999; margin-bottom: 16px; }

  .detail-chips { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 20px; }

  .detail-chip {
    background: #FFF5EE;
    border: 1.5px solid #FFE0C8;
    border-radius: 100px;
    padding: 6px 12px;
    font-size: 12px;
    font-weight: 600;
    color: #7A4020;
  }

  .detail-pay-box {
    background: linear-gradient(135deg, #E8844A, #F5A06A);
    border-radius: 20px;
    padding: 20px;
    margin: 0 16px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 6px 24px rgba(232,132,74,0.3);
  }

  .detail-pay-lbl { font-size: 11px; color: rgba(255,255,255,0.8); text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; }
  .detail-pay-amount { font-size: 32px; font-weight: 900; color: white; }

  .detail-apply {
    background: white;
    border: none;
    border-radius: 14px;
    padding: 12px 18px;
    font-family: 'Poppins', sans-serif;
    font-size: 13px;
    font-weight: 700;
    color: #E8844A;
    cursor: pointer;
  }

  .detail-section {
    background: #FAFAFA;
    border-radius: 16px;
    padding: 18px;
    margin: 0 16px 12px;
    border: 1.5px solid #F0E8E0;
  }

  .detail-section-title { font-size: 14px; font-weight: 800; color: #1A1A1A; margin-bottom: 12px; }
  .detail-desc { font-size: 13px; color: #555; line-height: 1.7; }

  .detail-req {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px 0;
    border-bottom: 1px solid #F0E8E0;
    font-size: 13px;
    color: #333;
  }

  .detail-req:last-child { border-bottom: none; }
  .detail-dot { width: 7px; height: 7px; background: #E8844A; border-radius: 50%; flex-shrink: 0; }

  .detail-cta {
    padding: 16px;
    padding-bottom: 32px;
  }

  .detail-cta-btn {
    width: 100%;
    padding: 18px;
    background: #E8844A;
    color: white;
    border: none;
    border-radius: 16px;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    box-shadow: 0 6px 24px rgba(232,132,74,0.35);
  }

  .detail-cta-btn.applied {
    background: #22C55E;
    box-shadow: 0 6px 24px rgba(34,197,94,0.3);
  }

  /* PROFILE */
  .profile-head {
    background: linear-gradient(135deg, #E8844A, #F5A06A);
    border-radius: 22px;
    padding: 24px;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    gap: 16px;
    box-shadow: 0 6px 24px rgba(232,132,74,0.25);
  }

  .profile-av {
    width: 64px;
    height: 64px;
    background: rgba(255,255,255,0.25);
    border-radius: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    font-weight: 800;
    color: white;
    border: 2px solid rgba(255,255,255,0.4);
  }

  .profile-name { font-size: 20px; font-weight: 800; color: white; margin-bottom: 4px; }
  .profile-level {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    background: rgba(255,255,255,0.2);
    color: white;
    font-size: 11px;
    font-weight: 700;
    padding: 3px 10px;
    border-radius: 100px;
  }

  .profile-section {
    background: white;
    border-radius: 16px;
    overflow: hidden;
    margin-bottom: 12px;
    border: 1.5px solid #F0E8E0;
  }

  .profile-section-title {
    font-size: 10px;
    font-weight: 700;
    color: #C4A090;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    padding: 12px 16px 6px;
  }

  .profile-row {
    display: flex;
    align-items: center;
    padding: 13px 16px;
    gap: 12px;
    border-bottom: 1px solid #FAF5F0;
    cursor: pointer;
  }

  .profile-row:last-child { border-bottom: none; }

  .profile-row-icon {
    width: 34px;
    height: 34px;
    border-radius: 10px;
    background: #FFF5EE;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
  }

  .profile-row-text { flex: 1; font-size: 14px; font-weight: 500; color: #1A1A1A; }
  .profile-row-val { font-size: 12px; color: #C4A090; margin-right: 6px; }
  .profile-row-arrow { color: #DDD; font-size: 16px; }

  /* STATS */
  .stats-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 16px; }

  @media (min-width: 600px) {
    .stats-grid { grid-template-columns: repeat(4, 1fr); }
    .task-list { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
    .featured-card { width: 260px; }
    .wallet-card { max-width: 600px; }
    .wallet-page-card { max-width: 600px; }
  }

  .stat-box {
    background: white;
    border-radius: 16px;
    padding: 16px;
    border: 1.5px solid #F0E8E0;
  }

  .stat-val { font-size: 26px; font-weight: 800; color: #E8844A; margin-bottom: 2px; }
  .stat-lbl { font-size: 11px; color: #C4A090; font-weight: 500; }

  /* WALLET PAGE */
  .wallet-page-card {
    background: linear-gradient(135deg, #E8844A 0%, #F5A06A 60%, #FFBA80 100%);
    border-radius: 24px;
    padding: 22px;
    margin-bottom: 16px;
    box-shadow: 0 8px 32px rgba(232,132,74,0.3);
  }

  /* MODAL */
  .overlay {
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
    border-radius: 28px 28px 0 0;
    padding: 28px 20px 44px;
    width: 100%;
    max-width: 430px;
  }

  .modal-handle {
    width: 36px;
    height: 4px;
    background: #E0D8D0;
    border-radius: 2px;
    margin: 0 auto 20px;
  }

  .modal-title { font-size: 22px; font-weight: 800; margin-bottom: 4px; }
  .modal-sub { font-size: 13px; color: #C4A090; margin-bottom: 20px; }

  .payout-opt {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 14px 16px;
    border: 2px solid #F0E8E0;
    border-radius: 14px;
    margin-bottom: 8px;
    cursor: pointer;
  }

  .payout-opt.selected { border-color: #E8844A; background: #FFF8F3; }
  .payout-opt-icon { font-size: 26px; }
  .payout-opt-name { font-weight: 700; font-size: 14px; }
  .payout-opt-sub { font-size: 11px; color: #C4A090; margin-top: 1px; }

  .modal-btn {
    width: 100%;
    padding: 16px;
    background: #E8844A;
    color: white;
    border: none;
    border-radius: 14px;
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    font-weight: 700;
    cursor: pointer;
    margin-top: 16px;
    box-shadow: 0 4px 16px rgba(232,132,74,0.35);
  }

  /* TOAST */
  .toast {
    position: fixed;
    bottom: 80px;
    left: 50%;
    transform: translateX(-50%);
    background: #1A1A1A;
    color: white;
    padding: 11px 22px;
    border-radius: 100px;
    font-size: 13px;
    font-weight: 500;
    z-index: 999;
    white-space: nowrap;
    box-shadow: 0 6px 20px rgba(0,0,0,0.2);
  }

  .page-back {
    display: flex;
    align-items: center;
    gap: 6px;
    background: none;
    border: none;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
    font-size: 13px;
    font-weight: 600;
    color: #E8844A;
    padding: 0;
    margin-bottom: 16px;
  }
`;

const CATEGORIES = [
  { id:"all", name:"All", emoji:"⚡", bg:"#FFF3EC" },
  { id:"surveys", name:"Surveys", emoji:"📋", bg:"#EFF6FF" },
  { id:"tasks", name:"Tasks", emoji:"✅", bg:"#F0FDF4" },
  { id:"gigs", name:"Gigs", emoji:"📍", bg:"#FAF5FF" },
  { id:"mystery", name:"Mystery", emoji:"🛍️", bg:"#FDF2F8" },
  { id:"promo", name:"Promo", emoji:"🎪", bg:"#FFFBEB" },
  { id:"shifts", name:"Shifts", emoji:"🏗️", bg:"#F0FDF4" },
  { id:"petsitting", name:"Pet Sit", emoji:"🐶", bg:"#FFF7ED" },
  { id:"housesitting", name:"House Sit", emoji:"🏡", bg:"#F0F9FF" },
  { id:"delivery", name:"Delivery", emoji:"🚗", bg:"#FEF9C3" },
  { id:"tutoring", name:"Tutor", emoji:"🎓", bg:"#FDF4FF" },
];

const TASKS = [
  { id:1, name:"Consumer opinions on fast food brands", company:"YouGov UK", category:"surveys", pay:"£1.20", time:"5 min", location:"Remote", emoji:"📋", bg:"#EFF6FF", tag:"Survey", tagColor:"#DBEAFE", tagText:"#1D4ED8", desc:"Share your opinions on major fast food brands in the UK. Simple multiple choice questions.", requirements:["UK resident","18+ years old","10 mins free time"], isNew:true },
  { id:2, name:"Mobile phone usage diary study", company:"Kantar Research", category:"surveys", pay:"£4.50", time:"20 min", location:"Remote", emoji:"📋", bg:"#EFF6FF", tag:"Survey", tagColor:"#DBEAFE", tagText:"#1D4ED8", desc:"Complete a detailed diary about your mobile phone usage over 7 days.", requirements:["Smartphone owner","UK resident","7 days availability"] },
  { id:3, name:"Weekly grocery shopping habits", company:"Ipsos MORI", category:"surveys", pay:"£2.00", time:"8 min", location:"Remote", emoji:"📋", bg:"#EFF6FF", tag:"Survey", tagColor:"#DBEAFE", tagText:"#1D4ED8", desc:"Tell us about your weekly shopping habits, which supermarkets you use and why.", requirements:["UK resident","Does own grocery shopping"], isNew:true },
  { id:4, name:"Health & wellbeing survey 2025", company:"Savanta Research", category:"surveys", pay:"£3.00", time:"15 min", location:"Remote", emoji:"📋", bg:"#EFF6FF", tag:"Survey", tagColor:"#DBEAFE", tagText:"#1D4ED8", desc:"Annual UK health and wellbeing study covering diet, exercise and mental health.", requirements:["18+ years","UK resident"] },
  { id:5, name:"TV streaming preferences study", company:"GfK Research", category:"surveys", pay:"£2.50", time:"10 min", location:"Remote", emoji:"📋", bg:"#EFF6FF", tag:"Survey", tagColor:"#DBEAFE", tagText:"#1D4ED8", desc:"Which streaming services do you use? How much do you spend?", requirements:["Streaming service user","18+"], isNew:true },
  { id:6, name:"New product taste test — snacks", company:"Unilever Research", category:"surveys", pay:"£8.00", time:"30 min", location:"Remote", emoji:"📋", bg:"#EFF6FF", tag:"Survey", tagColor:"#DBEAFE", tagText:"#1D4ED8", desc:"Receive snack samples by post, try them and complete an online feedback form.", requirements:["UK address","No food allergies","18+"], isNew:true, isHot:true },
  { id:7, name:"AI image labelling — 50 images", company:"Toloka AI", category:"tasks", pay:"£2.50", time:"10 min", location:"Remote", emoji:"✅", bg:"#F0FDF4", tag:"Task", tagColor:"#DCFCE7", tagText:"#166534", desc:"Label and categorise 50 AI training images. Simple drag and drop interface.", requirements:["Good attention to detail","Reliable internet","PC or tablet recommended"] },
  { id:8, name:"Website usability test", company:"UserTesting UK", category:"tasks", pay:"£9.00", time:"15 min", location:"Remote", emoji:"✅", bg:"#F0FDF4", tag:"Task", tagColor:"#DCFCE7", tagText:"#166534", desc:"Test a real website and share your thoughts out loud as you browse.", requirements:["Microphone access","Modern browser","Quiet space"], isNew:true, isHot:true },
  { id:9, name:"Transcribe a 3-minute podcast clip", company:"Clickworker", category:"tasks", pay:"£1.80", time:"8 min", location:"Remote", emoji:"✅", bg:"#F0FDF4", tag:"Task", tagColor:"#DCFCE7", tagText:"#166534", desc:"Listen to a short podcast segment and type out exactly what is said.", requirements:["Good English spelling","Headphones recommended"] },
  { id:10, name:"App testing — report bugs", company:"Testbirds UK", category:"tasks", pay:"£12.00", time:"45 min", location:"Remote", emoji:"✅", bg:"#F0FDF4", tag:"Task", tagColor:"#DCFCE7", tagText:"#166534", desc:"Test a new mobile app before launch and report any bugs or issues you find.", requirements:["Smartphone iOS or Android","Good eye for detail"], isNew:true },
  { id:11, name:"Stock level audit at Boots", company:"Gigwalk UK", category:"gigs", pay:"£8.00", time:"30 min", location:"March, Cambs", emoji:"📍", bg:"#FAF5FF", tag:"Gig", tagColor:"#F3E8FF", tagText:"#7E22CE", desc:"Visit your local Boots and check stock levels of 10 specified products. Take photos and submit via app.", requirements:["Smartphone with camera","Near a Boots store","Reliable"] },
  { id:12, name:"Check price labels at Tesco Express", company:"Premise UK", category:"gigs", pay:"£6.50", time:"20 min", location:"Nationwide", emoji:"📍", bg:"#FAF5FF", tag:"Gig", tagColor:"#F3E8FF", tagText:"#7E22CE", desc:"Visit a Tesco Express near you and check that shelf price labels match products.", requirements:["Near a Tesco Express","Smartphone camera"], isNew:true },
  { id:13, name:"McDonald's menu board photo audit", company:"Roamler UK", category:"gigs", pay:"£7.00", time:"25 min", location:"Nationwide", emoji:"📍", bg:"#FAF5FF", tag:"Gig", tagColor:"#F3E8FF", tagText:"#7E22CE", desc:"Visit your nearest McDonald's and photograph the menu boards to check pricing accuracy.", requirements:["Smartphone","Near a McDonald's","GPS must be enabled"], isNew:true },
  { id:14, name:"EV charging point condition check", company:"Field Agent", category:"gigs", pay:"£9.00", time:"20 min", location:"Peterborough", emoji:"📍", bg:"#FAF5FF", tag:"Gig", tagColor:"#F3E8FF", tagText:"#7E22CE", desc:"Visit an EV charging station and check that it is working, clean and correctly signposted.", requirements:["Can visit Peterborough","Smartphone","Attention to detail"], isNew:true, isHot:true },
  { id:15, name:"Dine & review — Costa Coffee", company:"Ipsos Mystery", category:"mystery", pay:"£15.00", time:"45 min", location:"Nationwide", emoji:"🛍️", bg:"#FDF2F8", tag:"Mystery", tagColor:"#FCE7F3", tagText:"#9D174D", desc:"Visit Costa Coffee as a mystery shopper. Order a drink, assess cleanliness and service.", requirements:["18+ years","Good written English","Smartphone for photos"], isHot:true },
  { id:16, name:"Fine dining mystery shop", company:"Market Force", category:"mystery", pay:"£35.00", time:"2 hrs", location:"Cambridge", emoji:"🛍️", bg:"#FDF2F8", tag:"Mystery", tagColor:"#FCE7F3", tagText:"#9D174D", desc:"Dine at a premium restaurant as a mystery guest. Full meal reimbursed up to £60.", requirements:["Smart dress code","Excellent writing skills","18+"], isHot:true },
  { id:17, name:"Bank branch service assessment", company:"Retail Eyes", category:"mystery", pay:"£20.00", time:"1 hr", location:"Peterborough", emoji:"🛍️", bg:"#FDF2F8", tag:"Mystery", tagColor:"#FCE7F3", tagText:"#9D174D", desc:"Visit a high street bank branch, make a simple enquiry and rate the quality of service.", requirements:["18+","Not a current employee of this bank"], isNew:true },
  { id:18, name:"Hotel lobby mystery visit", company:"GfK Mystery", category:"mystery", pay:"£45.00", time:"2 hrs", location:"Cambridge", emoji:"🛍️", bg:"#FDF2F8", tag:"Mystery", tagColor:"#FCE7F3", tagText:"#9D174D", desc:"Check into a hotel as a mystery guest. Assess check-in, room quality and staff behaviour.", requirements:["Professional presentation","Detailed report writing","18+"], isNew:true, isHot:true },
  { id:19, name:"Car dealership experience visit", company:"Mobee UK", category:"mystery", pay:"£30.00", time:"1.5 hrs", location:"Peterborough", emoji:"🛍️", bg:"#FDF2F8", tag:"Mystery", tagColor:"#FCE7F3", tagText:"#9D174D", desc:"Visit a car dealership and enquire about purchasing a vehicle.", requirements:["Driving licence","18+","Convincing buyer persona"], isNew:true },
  { id:20, name:"Brand ambassador — Asda sampling", company:"Fluid Retail", category:"promo", pay:"£11.00", time:"4 hrs", location:"Peterborough", emoji:"🎪", bg:"#FFFBEB", tag:"Promo", tagColor:"#FEF3C7", tagText:"#92400E", desc:"Hand out product samples to shoppers in Asda. Friendly and approachable personality required.", requirements:["Confident communicator","Able to stand 4 hours","Smart casual dress"], isNew:true },
  { id:21, name:"Drinks promotion — Tesco event", company:"REL Field Marketing", category:"promo", pay:"£12.00", time:"6 hrs", location:"Cambridge", emoji:"🎪", bg:"#FFFBEB", tag:"Promo", tagColor:"#FEF3C7", tagText:"#92400E", desc:"Promote a new soft drink range in Tesco. Engage shoppers and hand out samples.", requirements:["Energetic personality","Sales experience helpful"] },
  { id:22, name:"Festival staff — Ely Folk Festival", company:"Evolent Staffing", category:"promo", pay:"£13.00", time:"8 hrs", location:"Ely, Cambs", emoji:"🎪", bg:"#FFFBEB", tag:"Promo", tagColor:"#FEF3C7", tagText:"#92400E", desc:"Event staff needed for Ely Folk Festival. Roles include ticketing and guest services.", requirements:["18+","Customer service experience","Able to work weekends"], isNew:true, isHot:true },
  { id:23, name:"Warehouse operative — Amazon", company:"Indeed Flex", category:"shifts", pay:"£11.44", time:"8 hrs", location:"Peterborough", emoji:"🏗️", bg:"#F0FDF4", tag:"Shift", tagColor:"#DCFCE7", tagText:"#166534", desc:"Pick and pack shifts at Amazon fulfilment centre. Full training provided. Weekly pay.", requirements:["18+ years","Steel toe cap boots","Able to lift 15kg"], isHot:true },
  { id:24, name:"Hospitality staff — hotel", company:"Syft", category:"shifts", pay:"£12.50", time:"8 hrs", location:"Ely, Cambs", emoji:"🏗️", bg:"#F0FDF4", tag:"Shift", tagColor:"#DCFCE7", tagText:"#166534", desc:"Front of house and housekeeping staff at a 4-star hotel. Day and evening shifts.", requirements:["Customer service experience","Smart appearance","Reliable"], isNew:true },
  { id:25, name:"Delivery driver — next day parcels", company:"Amazon Flex", category:"shifts", pay:"£15.00", time:"4 hrs", location:"Peterborough", emoji:"🏗️", bg:"#F0FDF4", tag:"Shift", tagColor:"#DCFCE7", tagText:"#166534", desc:"Deliver parcels to homes in your area using your own vehicle. Flexible blocks available.", requirements:["Full UK driving licence","Own vehicle","Smartphone"], isHot:true },
  { id:26, name:"Dog walking — 2 golden retrievers", company:"Rover UK", category:"petsitting", pay:"£12.00", time:"1 hr", location:"March, Cambs", emoji:"🐶", bg:"#FFF7ED", tag:"Pet", tagColor:"#FFEDD5", tagText:"#9A3412", desc:"Walk two friendly golden retrievers around March town centre. Leads and bags provided.", requirements:["Dog experience","Physically active","DBS check required"], isNew:true },
  { id:27, name:"Cat sitting — 5 days home visits", company:"Pawshake UK", category:"petsitting", pay:"£35.00", time:"5 days", location:"Ely, Cambs", emoji:"🐶", bg:"#FFF7ED", tag:"Pet", tagColor:"#FFEDD5", tagText:"#9A3412", desc:"Visit a home twice daily to feed and care for two cats while owner is on holiday.", requirements:["Cat experience","Reliable","Own transport helpful"] },
  { id:28, name:"Puppy sitting — 3 days", company:"Rover UK", category:"petsitting", pay:"£45.00", time:"3 days", location:"March, Cambs", emoji:"🐶", bg:"#FFF7ED", tag:"Pet", tagColor:"#FFEDD5", tagText:"#9A3412", desc:"Look after an 8-month Labrador puppy for 3 days while owner travels.", requirements:["Dog owner experience","Garden preferred","18+"], isNew:true, isHot:true },
  { id:29, name:"Weekend house sit — Ely", company:"TrustedHousesitters", category:"housesitting", pay:"£40.00", time:"Weekend", location:"Ely, Cambs", emoji:"🏡", bg:"#F0F9FF", tag:"House", tagColor:"#E0F2FE", tagText:"#075985", desc:"Look after a 3-bed house and one cat in Ely while owners are away.", requirements:["References required","Non-smoker","Cat friendly"] },
  { id:30, name:"One week house sit — Cambridge", company:"HouseCarers UK", category:"housesitting", pay:"£120.00", time:"7 days", location:"Cambridge", emoji:"🏡", bg:"#F0F9FF", tag:"House", tagColor:"#E0F2FE", tagText:"#075985", desc:"Look after a large family home in Cambridge for one week. Water plants, care for guinea pigs.", requirements:["References","Non-smoker","Flexible dates"], isNew:true, isHot:true },
  { id:31, name:"Deliveroo — evening delivery rider", company:"Deliveroo", category:"delivery", pay:"£13.00", time:"3 hrs", location:"Cambridge", emoji:"🚗", bg:"#FEF9C3", tag:"Delivery", tagColor:"#FEF9C3", tagText:"#713F12", desc:"Flexible evening delivery shifts in Cambridge city centre. Bike or moped required.", requirements:["Bicycle or moped","Smartphone","18+ years"] },
  { id:32, name:"Uber Eats — weekend mornings", company:"Uber Eats", category:"delivery", pay:"£14.00", time:"4 hrs", location:"Peterborough", emoji:"🚗", bg:"#FEF9C3", tag:"Delivery", tagColor:"#FEF9C3", tagText:"#713F12", desc:"Weekend breakfast and brunch delivery shifts. Earn extra on top of base pay with tips.", requirements:["Vehicle or bicycle","18+","Smartphone"], isNew:true },
  { id:33, name:"GCSE Maths tutor — online", company:"Tutorful", category:"tutoring", pay:"£20.00", time:"1 hr", location:"Remote", emoji:"🎓", bg:"#FDF4FF", tag:"Tutor", tagColor:"#FAE8FF", tagText:"#6B21A8", desc:"Online GCSE maths tutoring via video call. Flexible hours, work from home.", requirements:["Maths qualification","DBS check","Reliable internet"], isNew:true },
  { id:34, name:"Primary school reading support", company:"MyTutor", category:"tutoring", pay:"£18.00", time:"1 hr", location:"Remote", emoji:"🎓", bg:"#FDF4FF", tag:"Tutor", tagColor:"#FAE8FF", tagText:"#6B21A8", desc:"Support primary aged children with reading and comprehension skills via video call.", requirements:["Teaching or childcare experience","DBS check","Webcam"] },
  { id:35, name:"A-Level Biology tutoring", company:"Tutorful", category:"tutoring", pay:"£28.00", time:"1 hr", location:"Remote", emoji:"🎓", bg:"#FDF4FF", tag:"Tutor", tagColor:"#FAE8FF", tagText:"#6B21A8", desc:"A-Level Biology exam preparation tutoring via video call.", requirements:["Biology degree or equivalent","DBS check","Exam board knowledge"], isHot:true },
];

const FEATURED = [
  { id:1, name:"Hotel Mystery Stay", company:"GfK Mystery", pay:"£45", bg:["#9B6FE8","#7C3AED"], tag:"Mystery Shopping", taskId:18 },
  { id:2, name:"Amazon Warehouse Shift", company:"Indeed Flex", pay:"£91.52", bg:["#3B82F6","#1D4ED8"], tag:"Day Shift", taskId:23 },
  { id:3, name:"Cambridge House Sit", company:"HouseCarers UK", pay:"£120", bg:["#E8519A","#BE185D"], tag:"House Sitting", taskId:30 },
  { id:4, name:"Ely Folk Festival Staff", company:"Evolent Staffing", pay:"£104", bg:["#F4843A","#C2410C"], tag:"Promo Shift", taskId:22 },
  { id:5, name:"Website Usability Test", company:"UserTesting UK", pay:"£9", bg:["#22C55E","#15803D"], tag:"Remote Task", taskId:8 },
];

const CAT_GROUPS = {
  surveys:["surveys","tasks"],
  gigs:["gigs","shifts"],
  mystery:["mystery"],
  promo:["promo"],
  petsitting:["petsitting","housesitting"],
  delivery:["delivery"],
  tutoring:["tutoring"],
  all:null,
};

const CAT_TITLES = {
  surveys:"Surveys & Tasks",
  gigs:"Gigs & Field Work",
  mystery:"Mystery Shopping",
  promo:"Promo & Temp Shifts",
  petsitting:"Pet & House Sitting",
  delivery:"Delivery",
  tutoring:"Tutoring",
  all:"All Opportunities",
};

export default function GigNest() {
  const [screen, setScreen] = useState("splash");
  const [tab, setTab] = useState("home");
  const [cat, setCat] = useState("all");
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

  const goToApp = (tabName, catName) => {
    if (tabName) setTab(tabName);
    if (catName) setCat(catName);
    setScreen("app");
  };

  const handleApply = (task) => {
    if (appliedTasks.includes(task.id)) { showToast("Already applied!"); return; }
    setAppliedTasks(prev => [...prev, task.id]);
    const pay = parseFloat(task.pay.replace("£","").replace("/hr",""));
    setBalance(b => Math.round((b + pay) * 100) / 100);
    setCompleted(c => c + 1);
    setSelectedTask(null);
    showToast("Applied! £" + pay.toFixed(2) + " pending");
  };

  const filteredTasks = cat === "all"
    ? TASKS
    : TASKS.filter(t => {
        const group = CAT_GROUPS[cat];
        return group ? group.includes(t.category) : t.category === cat;
      });

  if (screen === "splash") return (
    <>
      <style>{styles}</style>
      <div className="app">
        <button className="temp-btn" onClick={() => goToApp("home", "all")}>Enter App</button>
        <div className="splash">
          <img src="/fox-icon-192.png" alt="GigNest Fox" />
          <div className="splash-title">Gig<span>N</span>est</div>
          <div className="splash-sub">Earn real money with surveys, tasks, gigs, mystery shopping and more</div>
          <div className="splash-cats">
            {[
              { label:"Surveys & Tasks", icon:"📋", color:"#4CAF82", cat:"surveys" },
              { label:"Gigs & Field Work", icon:"📍", color:"#5B8DEF", cat:"gigs" },
              { label:"Mystery Shopping", icon:"🛍️", color:"#9B6FE8", cat:"mystery" },
              { label:"Promo & Temp Shifts", icon:"🎪", color:"#F4843A", cat:"promo" },
              { label:"Pet & House Sitting", icon:"🐶", color:"#E8519A", cat:"petsitting" },
            ].map(c => (
              <button key={c.label} className="splash-cat" style={{background:c.color}} onClick={() => goToApp("earn", c.cat)}>
                <div className="splash-cat-icon">{c.icon}</div>
                {c.label}
              </button>
            ))}
          </div>
          <button className="splash-main-btn" onClick={() => setScreen("signup")}>Get Started — It's Free</button>
          <div className="splash-link" onClick={() => setScreen("login")}>Already have an account? Sign in</div>
        </div>
      </div>
    </>
  );

  if (screen === "login") return (
    <>
      <style>{styles}</style>
      <div className="app">
        <div className="auth">
          <div className="auth-head">
            <button className="auth-back" onClick={() => setScreen("splash")}>←</button>
            <div className="auth-title">Welcome back</div>
            <div className="auth-sub">Sign in to your GigNest account</div>
          </div>
          <div className="auth-body">
            <div>
              <div className="input-label">Email</div>
              <input className="input-field" type="email" placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div>
              <div className="input-label">Password</div>
              <input className="input-field" type="password" placeholder="••••••••" value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <button className="auth-btn" onClick={() => goToApp("home","all")}>Sign In</button>
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
        <div className="auth">
          <div className="auth-head">
            <button className="auth-back" onClick={() => setScreen("splash")}>←</button>
            <div className="auth-title">Create account</div>
            <div className="auth-sub">Start earning money today</div>
          </div>
          <div className="auth-body">
            <div>
              <div className="input-label">Full Name</div>
              <input className="input-field" placeholder="Your name" value={name} onChange={e => setName(e.target.value)} />
            </div>
            <div>
              <div className="input-label">Email</div>
              <input className="input-field" type="email" placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div>
              <div className="input-label">Password</div>
              <input className="input-field" type="password" placeholder="Choose a password" value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <button className="auth-btn" onClick={() => { if(name) setUserName(name.split(" ")[0]); goToApp("home","all"); }}>Create My Account</button>
            <div className="auth-switch">Already have an account? <span onClick={() => setScreen("login")}>Sign in</span></div>
          </div>
        </div>
      </div>
    </>
  );

  if (selectedTask) {
    const t = selectedTask;
    return (
      <>
        <style>{styles}</style>
        <div className="app">
          <div className="detail">
            <div className="detail-hero">
              <button className="detail-back" onClick={() => setSelectedTask(null)}>←</button>
              <div className="detail-tag" style={{background:t.tagColor, color:t.tagText}}>{t.tag}</div>
              <div className="detail-title">{t.name}</div>
              <div className="detail-company">by {t.company}</div>
              <div className="detail-chips">
                <div className="detail-chip">⏱ {t.time}</div>
                <div className="detail-chip">📍 {t.location}</div>
                {t.isNew && <div className="detail-chip" style={{background:"#DCFCE7",borderColor:"#DCFCE7",color:"#166534"}}>New</div>}
                {t.isHot && <div className="detail-chip" style={{background:"#FEE2E2",borderColor:"#FEE2E2",color:"#991B1B"}}>Hot</div>}
              </div>
            </div>
            <div className="detail-pay-box">
              <div>
                <div className="detail-pay-lbl">You Earn</div>
                <div className="detail-pay-amount">{t.pay}</div>
              </div>
              <button className="detail-apply" onClick={() => handleApply(t)}>
                {appliedTasks.includes(t.id) ? "✓ Applied" : "Apply Now"}
              </button>
            </div>
            <div className="detail-section">
              <div className="detail-section-title">About this task</div>
              <div className="detail-desc">{t.desc}</div>
            </div>
            <div className="detail-section">
              <div className="detail-section-title">Requirements</div>
              {t.requirements.map((r,i) => (
                <div key={i} className="detail-req"><div className="detail-dot" />{r}</div>
              ))}
            </div>
            <div className="detail-cta">
              <button className={"detail-cta-btn" + (appliedTasks.includes(t.id) ? " applied" : "")} onClick={() => handleApply(t)}>
                {appliedTasks.includes(t.id) ? "✓ Applied Successfully" : "Apply & Earn " + t.pay}
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  const TaskCard = ({task}) => (
    <div className="task-card" onClick={() => setSelectedTask(task)}>
      <div className="task-emoji" style={{background:task.bg}}>{task.emoji}</div>
      <div className="task-info">
        <div className="task-company">{task.company}</div>
        <div className="task-name">{task.name}</div>
        <div className="task-meta">
          <div className="task-chip">⏱ {task.time}</div>
          <div className="task-chip">📍 {task.location}</div>
          <div className="task-tag" style={{background:task.tagColor,color:task.tagText}}>{task.tag}</div>
        </div>
      </div>
      <div className="task-right">
        <div className="task-pay">{task.pay}</div>
        {task.isNew && <div className="badge-new">New</div>}
        {task.isHot && !task.isNew && <div className="badge-hot">Hot</div>}
      </div>
    </div>
  );

  const Home = () => (
    <div className="content">
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:20}}>
        <div>
          <div style={{fontSize:12,color:"#C4A090",marginBottom:2}}>Good morning 👋</div>
          <div style={{fontSize:20,fontWeight:800,color:"#1A1A1A"}}>Hi, {userName}!</div>
        </div>
        <div style={{background:"#FFF0E6",borderRadius:14,padding:"8px 12px",textAlign:"center",border:"2px solid #FFE0C8"}}>
          <div style={{fontSize:16,fontWeight:800,color:"#E8844A"}}>🔥 {completed}</div>
          <div style={{fontSize:9,color:"#C4A090",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.3px"}}>Streak</div>
        </div>
      </div>

      <div className="wallet-card">
        <div className="wallet-top">
          <div className="wallet-label">Available Balance</div>
          <div className="wallet-badge">🥉 Bronze</div>
        </div>
        <div className="wallet-amount">£{balance.toFixed(2)}</div>
        <div className="wallet-progress">
          <div className="wallet-progress-fill" style={{width: Math.min((balance/50)*100,100)+"%"}} />
        </div>
        <div className="wallet-progress-label">
          <span>Bronze</span>
          <span>£{(50-balance).toFixed(2)} to Silver 🥈</span>
        </div>
        <div className="wallet-bottom">
          <div className="wallet-stats">
            <div><div className="wallet-stat-val">{completed}</div><div className="wallet-stat-lbl">Done</div></div>
            <div><div className="wallet-stat-val">{TASKS.length}</div><div className="wallet-stat-lbl">Available</div></div>
          </div>
          <button className="wallet-withdraw" onClick={() => setShowPayout(true)}>Withdraw →</button>
        </div>
      </div>

      <div className="section-row">
        <div className="section-title">⭐ Featured</div>
      </div>
      <div className="featured-scroll">
        {FEATURED.map(f => (
          <div key={f.id} className="featured-card" style={{background:"linear-gradient(135deg,"+f.bg[0]+","+f.bg[1]+")"}} onClick={() => setSelectedTask(TASKS.find(t=>t.id===f.taskId))}>
            <div className="featured-tag">{f.tag}</div>
            <div className="featured-name">{f.name}</div>
            <div className="featured-company">by {f.company}</div>
            <div className="featured-bottom">
              <div className="featured-pay">{f.pay}</div>
              <div className="featured-tap">Tap to apply</div>
            </div>
          </div>
        ))}
      </div>

      <div className="section-row">
        <div className="section-title">Categories</div>
        <div className="section-link" onClick={() => setCat("all")}>See all</div>
      </div>
      <div className="cat-scroll">
        {CATEGORIES.map(c => (
          <div key={c.id} className={"cat-card"+(cat===c.id?" active":"")} onClick={() => setCat(c.id)}>
            <div className="cat-emoji">{c.emoji}</div>
            <div className="cat-name">{c.name}</div>
            <div className="cat-count">{c.id==="all" ? TASKS.length : TASKS.filter(t=>t.category===c.id).length} jobs</div>
          </div>
        ))}
      </div>

      <div className="section-row">
        <div className="section-title">Available Now</div>
        <div className="section-link" onClick={() => setTab("earn")}>See all</div>
      </div>
      <div className="task-list">
        {filteredTasks.slice(0,6).map(t => <TaskCard key={t.id} task={t} />)}
      </div>
    </div>
  );

  const Earn = () => (
    <div className="content">
      <button className="page-back" onClick={() => setTab("home")}>← Home</button>
      <div style={{fontSize:20,fontWeight:800,marginBottom:4}}>{CAT_TITLES[cat] || "All Opportunities"}</div>
      <div style={{fontSize:13,color:"#C4A090",marginBottom:16}}>{filteredTasks.length} jobs available</div>
      <div className="cat-scroll" style={{marginBottom:16}}>
        {CATEGORIES.map(c => (
          <div key={c.id} className={"cat-card"+(cat===c.id?" active":"")} onClick={() => setCat(c.id)}>
            <div className="cat-emoji">{c.emoji}</div>
            <div className="cat-name">{c.name}</div>
            <div className="cat-count">{c.id==="all" ? TASKS.length : TASKS.filter(t=>t.category===c.id).length}</div>
          </div>
        ))}
      </div>
      <div className="task-list">
        {filteredTasks.map(t => <TaskCard key={t.id} task={t} />)}
      </div>
    </div>
  );

  const Wallet = () => (
    <div className="content">
      <button className="page-back" onClick={() => setTab("home")}>← Home</button>
      <div style={{fontSize:20,fontWeight:800,marginBottom:16}}>My Wallet</div>
      <div className="wallet-page-card">
        <div className="wallet-top">
          <div className="wallet-label">Available Balance</div>
          <div className="wallet-badge">🥉 Bronze</div>
        </div>
        <div className="wallet-amount">£{balance.toFixed(2)}</div>
        <div className="wallet-progress">
          <div className="wallet-progress-fill" style={{width:Math.min((balance/50)*100,100)+"%"}} />
        </div>
        <div className="wallet-progress-label">
          <span>Bronze</span>
          <span>£{(50-balance).toFixed(2)} to Silver 🥈</span>
        </div>
        <div className="wallet-bottom">
          <div className="wallet-stats">
            <div><div className="wallet-stat-val">£{(balance*1.8).toFixed(2)}</div><div className="wallet-stat-lbl">Total Earned</div></div>
            <div><div className="wallet-stat-val">£{(balance*0.8).toFixed(2)}</div><div className="wallet-stat-lbl">Withdrawn</div></div>
          </div>
          <button className="wallet-withdraw" onClick={() => setShowPayout(true)}>Withdraw →</button>
        </div>
      </div>
      <div className="stats-grid">
        <div className="stat-box"><div className="stat-val">{completed}</div><div className="stat-lbl">Tasks Done</div></div>
        <div className="stat-box"><div className="stat-val">£{(balance/Math.max(completed,1)).toFixed(2)}</div><div className="stat-lbl">Avg Per Task</div></div>
        <div className="stat-box"><div className="stat-val">🥉</div><div className="stat-lbl">Current Level</div></div>
        <div className="stat-box"><div className="stat-val">£10</div><div className="stat-lbl">Min Payout</div></div>
      </div>
    </div>
  );

  const Profile = () => (
    <div className="content">
      <button className="page-back" onClick={() => setTab("home")}>← Home</button>
      <div className="profile-head">
        <div className="profile-av">{userName[0]}</div>
        <div>
          <div className="profile-name">{userName}</div>
          <div className="profile-level">🥉 Bronze Member</div>
        </div>
      </div>
      <div className="stats-grid">
        <div className="stat-box"><div className="stat-val">£{balance.toFixed(2)}</div><div className="stat-lbl">Balance</div></div>
        <div className="stat-box"><div className="stat-val">{completed}</div><div className="stat-lbl">Tasks Done</div></div>
      </div>
      <div className="profile-section">
        <div className="profile-section-title">Account</div>
        {[{icon:"💳",label:"Payment Methods",val:"Add card"},{icon:"🔔",label:"Notifications",val:"On"},{icon:"📍",label:"My Location",val:"March, UK"},{icon:"🆔",label:"Verify Identity",val:"Pending"}].map(r => (
          <div key={r.label} className="profile-row" onClick={() => showToast("Coming soon!")}>
            <div className="profile-row-icon">{r.icon}</div>
            <div className="profile-row-text">{r.label}</div>
            <div className="profile-row-val">{r.val}</div>
            <div className="profile-row-arrow">›</div>
          </div>
        ))}
      </div>
      <div className="profile-section">
        <div className="profile-section-title">Support</div>
        {[{icon:"📄",label:"Terms & Conditions"},{icon:"🔒",label:"Privacy Policy"},{icon:"💬",label:"Contact Support"},{icon:"⭐",label:"Rate GigNest"}].map(r => (
          <div key={r.label} className="profile-row" onClick={() => showToast("Coming soon!")}>
            <div className="profile-row-icon">{r.icon}</div>
            <div className="profile-row-text">{r.label}</div>
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
        <button className="temp-btn" onClick={() => setScreen("splash")}>🦊 GigNest</button>
        <div className="main">
          <div className="topbar">
            <div className="topbar-row">
              <div className="topbar-logo">
                <div className="topbar-fox">
                  <img src="/fox-icon-192.png" alt="fox" />
                </div>
                Gig<span>N</span>est
              </div>
              <div className="topbar-right">
                <div className="topbar-balance" onClick={() => setTab("wallet")}>💰 £{balance.toFixed(2)}</div>
                <div className="topbar-bell" onClick={() => showToast("No new notifications")}>🔔<div className="bell-dot"/></div>
                <div className="topbar-avatar" onClick={() => setTab("profile")}>{userName[0]}</div>
              </div>
            </div>
          </div>

          {tab === "home" && <Home />}
          {tab === "earn" && <Earn />}
          {tab === "wallet" && <Wallet />}
          {tab === "profile" && <Profile />}

          <div className="bottom-nav">
            {[{id:"home",emoji:"🏠",label:"Home"},{id:"earn",emoji:"⚡",label:"Earn"},{id:"wallet",emoji:"💰",label:"Wallet"},{id:"profile",emoji:"👤",label:"Profile"}].map(item => (
              <button key={item.id} className={"nav-item"+(tab===item.id?" active":"")} onClick={() => setTab(item.id)}>
                <div className="nav-icon">{item.emoji}</div>
                <div className="nav-label">{item.label}</div>
              </button>
            ))}
          </div>
        </div>

        {showPayout && (
          <div className="overlay" onClick={() => setShowPayout(false)}>
            <div className="modal" onClick={e => e.stopPropagation()}>
              <div className="modal-handle" />
              <div className="modal-title">Withdraw Funds</div>
              <div className="modal-sub">Choose how to receive £{balance.toFixed(2)}</div>
              {[{id:"paypal",emoji:"💙",name:"PayPal",sub:"Usually instant"},{id:"bank",emoji:"🏦",name:"Bank Transfer",sub:"1–3 business days"},{id:"gift",emoji:"🎁",name:"Gift Cards",sub:"Amazon, Tesco & more"}].map(opt => (
                <div key={opt.id} className={"payout-opt"+(payoutMethod===opt.id?" selected":"")} onClick={() => setPayoutMethod(opt.id)}>
                  <div className="payout-opt-icon">{opt.emoji}</div>
                  <div>
                    <div className="payout-opt-name">{opt.name}</div>
                    <div className="payout-opt-sub">{opt.sub}</div>
                  </div>
                </div>
              ))}
              <button className="modal-btn" onClick={() => { setShowPayout(false); showToast("Withdrawal requested!"); }}>Request Withdrawal</button>
            </div>
          </div>
        )}

        {toast && <div className="toast">{toast}</div>}
      </div>
    </>
  );
}
