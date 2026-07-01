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
    position: relative;
    overflow: hidden;
  }

  .splash-fox-wrap {
    width: 180px; height: 180px;
    background: rgba(255,255,255,0.5);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 24px;
    border: 3px solid rgba(255,255,255,0.8);
    overflow: hidden;
    box-shadow: 0 12px 40px rgba(232,132,74,0.15);
  }

  .splash-fox-wrap img {
    width: 160px;
    height: 160px;
    object-fit: contain;
  }

  .splash-title {
    font-family: 'Syne', sans-serif;
    font-size: 52px;
    font-weight: 800;
    color: #3A2010;
    letter-spacing: -1px;
    margin-bottom: 10px;
  }

  .splash-title span { color: #FFA040; }

  .splash-sub {
    font-size: 15px;
    color: #7A5040;
    text-align: center;
    line-height: 1.6;
    margin-bottom: 32px;
    max-width: 300px;
  }

  .splash-cats {
    width: 100%;
    max-width: 340px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 32px;
  }

  .splash-cat-btn {
    width: 100%;
    padding: 14px 20px;
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
    width: 30px; height: 30px;
    background: rgba(255,255,255,0.25);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
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
    border: 2px solid #F0F0F0;
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
    background: linear-gradient(135deg, #FFCBA4, #FFB085);
    color: white;
    border: none;
    border-radius: 14px;
    font-family: 'Syne', sans-serif;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    margin-top: 8px;
    box-shadow: 0 6px 20px rgba(255,176,133,0.35);
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
    background: rgba(255,245,238,0.88);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    padding: 20px 20px 0;
    border-bottom: 1px solid rgba(255,160,64,0.12);
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: 0 2px 16px rgba(255,160,64,0.06);
  }

  .topbar-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
  }

  .topbar-logo {
    font-family: 'Syne', sans-serif;
    font-size: 22px;
    font-weight: 800;
    color: #1A1A1A;
  }

  .topbar-logo span { color: #FFA040; }

  .topbar-avatar {
    width: 38px; height: 38px;
    background: linear-gradient(135deg, #FFCBA4, #FFB085);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 700;
    font-size: 15px;
    cursor: pointer;
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
    color: #999;
    display: flex;
    align-items: center;
    gap: 6px;
    border-bottom: 3px solid transparent;
    transition: all 0.2s;
    white-space: nowrap;
  }

  .nav-tab.active {
    color: #FFA040;
    border-bottom-color: #FFA040;
    font-weight: 600;
  }

  .nav-tab-emoji { font-size: 16px; }

  .content { flex: 1; padding: 20px 16px 100px; }

  .wallet-card {
    background: linear-gradient(135deg, #FFCBA4 0%, #FFB88A 50%, #FFC99E 100%);
    border-radius: 24px;
    padding: 24px;
    margin-bottom: 24px;
    position: relative;
    overflow: hidden;
    box-shadow: 0 10px 40px rgba(255,176,133,0.2);
  }

  .wallet-card::before {
    content: '';
    position: absolute;
    top: -40px; right: -40px;
    width: 160px; height: 160px;
    background: rgba(255,255,255,0.1);
    border-radius: 50%;
  }

  .wallet-label {
    color: rgba(255,255,255,0.85);
    font-size: 13px;
    font-weight: 500;
    margin-bottom: 6px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .wallet-amount {
    font-family: 'Syne', sans-serif;
    font-size: 42px;
    font-weight: 800;
    color: white;
    margin-bottom: 20px;
    letter-spacing: -1px;
  }

  .wallet-stats { display: flex; gap: 20px; }

  .wallet-stat-val {
    font-family: 'Syne', sans-serif;
    font-size: 18px;
    font-weight: 700;
    color: white;
  }

  .wallet-stat-label {
    font-size: 11px;
    color: rgba(255,255,255,0.7);
    margin-top: 2px;
  }

  .wallet-btn {
    position: absolute;
    bottom: 24px; right: 24px;
    background: rgba(255,255,255,0.25);
    border: 1px solid rgba(255,255,255,0.4);
    color: white;
    padding: 10px 18px;
    border-radius: 100px;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;
  }

  .wallet-btn:hover { background: rgba(255,255,255,0.35); }

  .section-title {
    font-family: 'Syne', sans-serif;
    font-size: 18px;
    font-weight: 700;
    color: #1A1A1A;
    margin-bottom: 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .section-see-all {
    font-size: 13px;
    font-weight: 500;
    color: #FFA040;
    cursor: pointer;
  }

  .cat-scroll {
    display: flex;
    gap: 12px;
    overflow-x: auto;
    scrollbar-width: none;
    padding-bottom: 4px;
    margin-bottom: 28px;
  }

  .cat-scroll::-webkit-scrollbar { display: none; }

  .cat-card {
    flex-shrink: 0;
    width: 120px;
    background: rgba(255,255,255,0.7);
    backdrop-filter: blur(10px);
    border-radius: 18px;
    padding: 16px 12px;
    cursor: pointer;
    border: 2px solid rgba(255,255,255,0.85);
    transition: all 0.2s;
    box-shadow: 0 2px 10px rgba(255,160,64,0.06);
  }

  .cat-card:hover, .cat-card.active {
    border-color: #FFA040;
    box-shadow: 0 4px 16px rgba(255,160,64,0.2);
    transform: translateY(-2px);
    background: rgba(255,255,255,0.92);
  }

  .cat-icon {
    width: 42px; height: 42px;
    border-radius: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    margin-bottom: 10px;
  }

  .cat-name {
    font-family: 'Syne', sans-serif;
    font-size: 12px;
    font-weight: 700;
    color: #1A1A1A;
    margin-bottom: 3px;
  }

  .cat-count { font-size: 11px; color: #999; }

  .task-list { display: flex; flex-direction: column; gap: 12px; }

  .task-card {
    background: rgba(255,255,255,0.75);
    backdrop-filter: blur(10px);
    border-radius: 18px;
    padding: 16px;
    display: flex;
    align-items: center;
    gap: 14px;
    border: 2px solid rgba(255,255,255,0.9);
    cursor: pointer;
    transition: all 0.2s;
    box-shadow: 0 2px 12px rgba(255,160,64,0.06);
  }

  .task-card:hover {
    border-color: #FFA040;
    box-shadow: 0 4px 20px rgba(255,160,64,0.15);
    transform: translateY(-1px);
    background: rgba(255,255,255,0.92);
  }

  .task-icon {
    width: 48px; height: 48px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    flex-shrink: 0;
  }

  .task-info { flex: 1; min-width: 0; }

  .task-name {
    font-family: 'Syne', sans-serif;
    font-size: 14px;
    font-weight: 700;
    color: #1A1A1A;
    margin-bottom: 4px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .task-meta { display: flex; align-items: center; gap: 8px; }

  .task-time { font-size: 12px; color: #999; }

  .task-tag {
    font-size: 10px;
    padding: 3px 8px;
    border-radius: 100px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.3px;
  }

  .task-pay {
    font-family: 'Syne', sans-serif;
    font-size: 15px;
    font-weight: 800;
    color: #E8844A;
    flex-shrink: 0;
  }

  .bottom-nav {
    position: fixed;
    bottom: 0; left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 430px;
    background: rgba(255,242,230,0.9);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-top: 1px solid rgba(255,160,64,0.15);
    display: flex;
    padding: 12px 0 20px;
    box-shadow: 0 -4px 24px rgba(255,160,64,0.08);
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

  .bottom-nav-item.active .bottom-nav-label { color: #FFA040; }

  .profile-header {
    background: linear-gradient(135deg, #FFD4B0, #FFBF95);
    border-radius: 24px;
    padding: 28px 24px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 18px;
    box-shadow: 0 8px 30px rgba(255,180,130,0.2);
  }

  .profile-avatar {
    width: 70px; height: 70px;
    background: rgba(255,255,255,0.3);
    border-radius: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    font-weight: 800;
    color: white;
    font-family: 'Syne', sans-serif;
    border: 2px solid rgba(255,255,255,0.5);
  }

  .profile-name {
    font-family: 'Syne', sans-serif;
    font-size: 22px;
    font-weight: 800;
    color: white;
    margin-bottom: 4px;
  }

  .profile-email { font-size: 13px; color: rgba(255,255,255,0.8); }

  .profile-section {
    background: white;
    border-radius: 18px;
    overflow: hidden;
    margin-bottom: 16px;
    border: 2px solid #F0F0F0;
  }

  .profile-row {
    display: flex;
    align-items: center;
    padding: 16px 18px;
    gap: 14px;
    border-bottom: 1px solid #F8F8F8;
    cursor: pointer;
    transition: background 0.15s;
  }

  .profile-row:last-child { border-bottom: none; }
  .profile-row:hover { background: #FFF8F5; }

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
  .profile-row-arrow { color: #CCC; font-size: 18px; }

  .stats-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    margin-bottom: 24px;
  }

  .stat-box {
    background: white;
    border-radius: 18px;
    padding: 18px;
    border: 2px solid #F0F0F0;
  }

  .stat-box-val {
    font-family: 'Syne', sans-serif;
    font-size: 26px;
    font-weight: 800;
    color: #E8844A;
    margin-bottom: 4px;
  }

  .stat-box-label { font-size: 12px; color: #999; font-weight: 500; }

  .toast {
    position: fixed;
    bottom: 90px;
    left: 50%;
    transform: translateX(-50%);
    background: #1A1A1A;
    color: white;
    padding: 12px 24px;
    border-radius: 100px;
    font-size: 14px;
    font-weight: 500;
    z-index: 999;
    white-space: nowrap;
    box-shadow: 0 8px 24px rgba(0,0,0,0.2);
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
    border-radius: 28px 28px 0 0;
    padding: 32px 24px 48px;
    width: 100%;
    max-width: 430px;
  }

  .modal-handle {
    width: 40px; height: 4px;
    background: #E0E0E0;
    border-radius: 2px;
    margin: 0 auto 24px;
  }

  .modal-title {
    font-family: 'Syne', sans-serif;
    font-size: 24px;
    font-weight: 800;
    margin-bottom: 8px;
  }

  .modal-sub { font-size: 14px; color: #999; margin-bottom: 28px; }

  .payout-option {
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 16px 18px;
    border: 2px solid #F0F0F0;
    border-radius: 16px;
    margin-bottom: 10px;
    cursor: pointer;
    transition: all 0.2s;
  }

  .payout-option:hover, .payout-option.selected {
    border-color: #FFA040;
    background: #FFF8F0;
  }

  .payout-option-icon { font-size: 28px; }
  .payout-option-name { font-weight: 600; font-size: 15px; }
  .payout-option-sub { font-size: 12px; color: #999; }

  .modal-btn {
    width: 100%;
    padding: 18px;
    background: linear-gradient(135deg, #FFCBA4, #FFB085);
    color: white;
    border: none;
    border-radius: 14px;
    font-family: 'Syne', sans-serif;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    margin-top: 20px;
    box-shadow: 0 6px 20px rgba(255,176,133,0.35);
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
  { id: "cleaning", name: "Cleaning", emoji: "🧹", bg: "#F0FDF4" },
  { id: "tutoring", name: "Tutoring", emoji: "🎓", bg: "#FDF4FF" },
];

const TASKS = [
  { id: 1, name: "Share your opinion on fast food", category: "surveys", pay: "£1.20", time: "5 min", emoji: "📋", bg: "#EFF6FF", tag: "Survey", tagColor: "#DBEAFE", tagText: "#1D4ED8" },
  { id: 2, name: "Label 10 images for AI training", category: "tasks", pay: "£2.50", time: "10 min", emoji: "✅", bg: "#F0FDF4", tag: "Task", tagColor: "#DCFCE7", tagText: "#166534" },
  { id: 3, name: "Check stock levels at Boots", category: "gigs", pay: "£8.00", time: "30 min", emoji: "📍", bg: "#FAF5FF", tag: "Gig", tagColor: "#F3E8FF", tagText: "#7E22CE" },
  { id: 4, name: "Visit Costa & rate your experience", category: "mystery", pay: "£15.00", time: "45 min", emoji: "🛍️", bg: "#FDF2F8", tag: "Mystery", tagColor: "#FCE7F3", tagText: "#9D174D" },
  { id: 5, name: "Hand out samples at Asda", category: "promo", pay: "£11/hr", time: "4 hrs", emoji: "🎪", bg: "#FFFBEB", tag: "Promo", tagColor: "#FEF3C7", tagText: "#92400E" },
  { id: 6, name: "Rate TV show preferences", category: "surveys", pay: "£0.80", time: "3 min", emoji: "📋", bg: "#EFF6FF", tag: "Survey", tagColor: "#DBEAFE", tagText: "#1D4ED8" },
  { id: 7, name: "Warehouse shift — Amazon Rugeley", category: "shifts", pay: "£11/hr", time: "8 hrs", emoji: "🏗️", bg: "#F0FDF4", tag: "Shift", tagColor: "#DCFCE7", tagText: "#166534" },
  { id: 8, name: "Walk 2 dogs in your area", category: "petsitting", pay: "£12.00", time: "1 hr", emoji: "🐶", bg: "#FFF7ED", tag: "Pet", tagColor: "#FFEDD5", tagText: "#9A3412" },
  { id: 9, name: "House sit for weekend in March", category: "housesitting", pay: "£40.00", time: "Weekend", emoji: "🏡", bg: "#F0F9FF", tag: "House", tagColor: "#E0F2FE", tagText: "#075985" },
  { id: 10, name: "Deliveroo — evening shift", category: "delivery", pay: "£13/hr", time: "3 hrs", emoji: "🚗", bg: "#FEF9C3", tag: "Delivery", tagColor: "#FEF9C3", tagText: "#713F12" },
  { id: 11, name: "Dine & review a local restaurant", category: "mystery", pay: "£25.00", time: "1.5 hrs", emoji: "🛍️", bg: "#FDF2F8", tag: "Mystery", tagColor: "#FCE7F3", tagText: "#9D174D" },
  { id: 12, name: "Maths tutor — GCSE student", category: "tutoring", pay: "£20/hr", time: "1 hr", emoji: "🎓", bg: "#FDF4FF", tag: "Tutor", tagColor: "#FAE8FF", tagText: "#6B21A8" },
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

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2500);
  };

  const handleComplete = (task) => {
    const pay = parseFloat(task.pay.replace("£","").replace("/hr",""));
    setBalance(b => Math.round((b + pay) * 100) / 100);
    setCompleted(c => c + 1);
    showToast(`🎉 £${pay.toFixed(2)} added to your wallet!`);
  };

  const filteredTasks = catFilter === "all" ? TASKS : TASKS.filter(t => t.category === catFilter);

  if (screen === "splash") return (
    <>
      <style>{styles}</style>
      <div className="app">
        <div className="splash">
          <div className="splash-fox-wrap">
            <img src="/fox-mascot.jpg" alt="GigNest Fox" />
          </div>
          <div className="splash-title">Gig<span>N</span>est</div>
          <div className="splash-sub">Earn real money with surveys, tasks, gigs, mystery shopping and more</div>
          <div className="splash-cats">
            {[
              { label:"Surveys", icon:"📋", color:"#4CAF82" },
              { label:"Tasks & Gigs", icon:"✅", color:"#5B8DEF" },
              { label:"Mystery Shopping", icon:"🛍️", color:"#9B6FE8" },
              { label:"Promo & Shifts", icon:"🎪", color:"#F4843A" },
              { label:"Pet & House Sitting", icon:"🐶", color:"#E8519A" },
            ].map(cat => (
              <div key={cat.label} className="splash-cat-btn" style={{background: cat.color}}>
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
            <div className="auth-title">Welcome back</div>
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
            <button className="auth-btn" onClick={() => { setScreen("app"); setAppTab("home"); }}>Sign In</button>
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
            <div className="auth-title">Create account</div>
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
            <button className="auth-btn" onClick={() => { if(name) setUserName(name.split(" ")[0]); setScreen("app"); setAppTab("home"); }}>Create My Account</button>
            <div className="auth-switch">Already have an account? <span onClick={() => setScreen("login")}>Sign in</span></div>
          </div>
        </div>
      </div>
    </>
  );

  const renderHome = () => (
    <div className="content">
      <div style={{marginBottom:20}}>
        <div style={{fontSize:13, color:"#999", marginBottom:4}}>Good morning 👋</div>
        <div style={{fontFamily:"'Syne',sans-serif", fontSize:24, fontWeight:800}}>Hi, {userName}!</div>
      </div>
      <div className="wallet-card">
        <div className="wallet-label">Total Earnings</div>
        <div className="wallet-amount">£{balance.toFixed(2)}</div>
        <div className="wallet-stats">
          <div className="wallet-stat">
            <div className="wallet-stat-val">{completed}</div>
            <div className="wallet-stat-label">Completed</div>
          </div>
          <div className="wallet-stat">
            <div className="wallet-stat-val">{TASKS.length}</div>
            <div className="wallet-stat-label">Available</div>
          </div>
        </div>
        <button className="wallet-btn" onClick={() => setShowPayout(true)}>Withdraw →</button>
      </div>
      <div className="section-title">Categories</div>
      <div className="cat-scroll">
        {CATEGORIES.map(cat => (
          <div key={cat.id} className={`cat-card${catFilter===cat.id?" active":""}`} onClick={() => setCatFilter(cat.id)}>
            <div className="cat-icon" style={{background:cat.bg}}>{cat.emoji}</div>
            <div className="cat-name">{cat.name}</div>
            <div className="cat-count">{cat.id==="all" ? `${TASKS.length} available` : `${TASKS.filter(t=>t.category===cat.id).length} available`}</div>
          </div>
        ))}
      </div>
      <div className="section-title">
        Available Now
        <span className="section-see-all">See all</span>
      </div>
      <div className="task-list">
        {filteredTasks.map(task => (
          <div key={task.id} className="task-card" onClick={() => handleComplete(task)}>
            <div className="task-icon" style={{background:task.bg}}>{task.emoji}</div>
            <div className="task-info">
              <div className="task-name">{task.name}</div>
              <div className="task-meta">
                <div className="task-time">⏱ {task.time}</div>
                <div className="task-tag" style={{background:task.tagColor, color:task.tagText}}>{task.tag}</div>
              </div>
            </div>
            <div className="task-pay">{task.pay}</div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderEarn = () => (
    <div className="content">
      <div style={{fontFamily:"'Syne',sans-serif", fontSize:24, fontWeight:800, marginBottom:20}}>All Gigs</div>
      <div className="task-list">
        {TASKS.map(task => (
          <div key={task.id} className="task-card" onClick={() => handleComplete(task)}>
            <div className="task-icon" style={{background:task.bg}}>{task.emoji}</div>
            <div className="task-info">
              <div className="task-name">{task.name}</div>
              <div className="task-meta">
                <div className="task-time">⏱ {task.time}</div>
                <div className="task-tag" style={{background:task.tagColor, color:task.tagText}}>{task.tag}</div>
              </div>
            </div>
            <div className="task-pay">{task.pay}</div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderWallet = () => (
    <div className="content">
      <div style={{fontFamily:"'Syne',sans-serif", fontSize:24, fontWeight:800, marginBottom:20}}>My Wallet</div>
      <div className="wallet-card" style={{marginBottom:20}}>
        <div className="wallet-label">Available Balance</div>
        <div className="wallet-amount">£{balance.toFixed(2)}</div>
        <div className="wallet-stats">
          <div className="wallet-stat">
            <div className="wallet-stat-val">£{(balance * 1.8).toFixed(2)}</div>
            <div className="wallet-stat-label">Total Earned</div>
          </div>
          <div className="wallet-stat">
            <div className="wallet-stat-val">£{(balance * 0.8).toFixed(2)}</div>
            <div className="wallet-stat-label">Withdrawn</div>
          </div>
        </div>
        <button className="wallet-btn" onClick={() => setShowPayout(true)}>Withdraw →</button>
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
          <div className="stat-box-label">Bronze Level</div>
        </div>
        <div className="stat-box">
          <div className="stat-box-val">£10</div>
          <div className="stat-box-label">Min Payout</div>
        </div>
      </div>
      <div className="section-title">Recent Activity</div>
      <div className="task-list">
        {TASKS.slice(0,4).map(task => (
          <div key={task.id} className="task-card" style={{cursor:"default"}}>
            <div className="task-icon" style={{background:task.bg}}>{task.emoji}</div>
            <div className="task-info">
              <div className="task-name">{task.name}</div>
              <div className="task-meta">
                <div className="task-tag" style={{background:"#DCFCE7", color:"#166534"}}>✓ Completed</div>
              </div>
            </div>
            <div className="task-pay" style={{color:"#22C55E"}}>+{task.pay}</div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderProfile = () => (
    <div className="content">
      <div className="profile-header">
        <div className="profile-avatar">{userName[0]}</div>
        <div>
          <div className="profile-name">{userName}</div>
          <div className="profile-email">{email || "hello@gignest.com"}</div>
        </div>
      </div>
      <div className="profile-section">
        {[
          {icon:"💳", label:"Payment Methods"},
          {icon:"🔔", label:"Notifications"},
          {icon:"📍", label:"My Location"},
          {icon:"🆔", label:"Verify Identity"},
        ].map(row => (
          <div key={row.label} className="profile-row" onClick={() => showToast("Coming soon!")}>
            <div className="profile-row-icon">{row.icon}</div>
            <div className="profile-row-text">{row.label}</div>
            <div className="profile-row-arrow">›</div>
          </div>
        ))}
      </div>
      <div className="profile-section">
        {[
          {icon:"📄", label:"Terms & Conditions"},
          {icon:"🔒", label:"Privacy Policy"},
          {icon:"💬", label:"Support"},
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
          <div className="profile-row-text" style={{color:"#FF3B30"}}>Sign Out</div>
          <div className="profile-row-arrow">›</div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <style>{styles}</style>
      <div className="app">
        <div className="main-app">
          <div className="topbar">
            <div className="topbar-row">
              <div className="topbar-logo">Gig<span>N</span>est</div>
              <div className="topbar-avatar" onClick={() => setAppTab("profile")}>{userName[0]}</div>
            </div>
            {appTab === "home" && (
              <div className="nav-tabs">
                {CATEGORIES.map(cat => (
                  <button key={cat.id} className={`nav-tab${catFilter===cat.id?" active":""}`} onClick={() => setCatFilter(cat.id)}>
                    <span className="nav-tab-emoji">{cat.emoji}</span>
                    {cat.name}
                  </button>
                ))}
              </div>
            )}
          </div>
          {appTab === "home" && renderHome()}
          {appTab === "earn" && renderEarn()}
          {appTab === "wallet" && renderWallet()}
          {appTab === "profile" && renderProfile()}
          <div className="bottom-nav">
            {[
              {id:"home", emoji:"🏠", label:"Home"},
              {id:"earn", emoji:"⚡", label:"Earn"},
              {id:"wallet", emoji:"💰", label:"Wallet"},
              {id:"profile", emoji:"👤", label:"Profile"},
            ].map(item => (
              <button key={item.id} className={`bottom-nav-item${appTab===item.id?" active":""}`} onClick={() => setAppTab(item.id)}>
                <div className="bottom-nav-icon">{item.emoji}</div>
                <div className="bottom-nav-label">{item.label}</div>
              </button>
            ))}
          </div>
        </div>
        {showPayout && (
          <div className="modal-overlay" onClick={() => setShowPayout(false)}>
            <div className="modal" onClick={e => e.stopPropagation()}>
              <div className="modal-handle" />
              <div className="modal-title">Withdraw Funds</div>
              <div className="modal-sub">Choose how you'd like to receive £{balance.toFixed(2)}</div>
              {[
                {id:"paypal", emoji:"💙", name:"PayPal", sub:"Instant transfer"},
                {id:"bank", emoji:"🏦", name:"Bank Transfer", sub:"1-3 business days"},
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
