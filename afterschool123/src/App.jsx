import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import AfterschoolDetail from "./pages/AfterschoolDetail";
import AsD2 from "./pages/AsD2";

// 방과후 리스트 컴포넌트
function AfterschoolList() {
  const navigate = useNavigate();

  return (
    <div className="app-container">
      <aside className="sidebar">
        <div className="sidebar-top">
          <div className="sidebar-title">방과후 관리</div>
          <div className="divider"></div>
          <nav className="menu">
            {/* 클릭 시 / 로 이동 */}
            <div
              className="menu-item active"
              onClick={() => navigate("/")}
              style={{ cursor: "pointer" }}
            >
              방과후 신청
            </div>
            <div className="divider"></div>

            {/* 클릭 시 /apply-list 로 이동 */}
            <div
              className="menu-item"
              onClick={() => navigate("/apply-list")}
              style={{ cursor: "pointer" }}
              
            >
              신청내역
            </div>
            <div className="divider"></div>
          </nav>
        </div>

        <div className="sidebar-footer">
          <div className="profile">
            <div className="circle"></div>
            <span>관리자</span>
          </div>
          <button className="logout">로그아웃</button>
        </div>
      </aside>

      <main className="main">
        <h2 className="main-title">방과후 신청</h2>
        <div className="search-box">
          <input type="text" placeholder="방과후를 선택하세요" />
        </div>

        <div className="table">
          <div className="table-header">
            <span>프로그램</span>
            <span>담당교사</span>
            <span>시간</span>
            <span>신청인원</span>
            <span>관리</span>
          </div>
          <div className="table-row">
            <span>롤파크 여행</span>
            <span>박철수</span>
            <span>화,목 15:30 ~ 20:00</span>
            <span>5/10명</span>
            {/* 버튼 클릭 시 상세페이지로 이동 */}
            <button className="apply-btn" onClick={() => navigate("/detail")}>
              신청하기
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

// 전체 라우터 구조
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AfterschoolList />} />
        <Route path="/detail" element={<AfterschoolDetail />} />
        <Route path="/apply-list" element={<AsD2 />} />
      </Routes>
    </Router>
  );
}

export default App;
