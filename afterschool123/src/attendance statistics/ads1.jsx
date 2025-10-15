import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import "./ads1.css";

function AttendanceStats() {
  const navigate = useNavigate();

  return (
    <div className="app-container">
      {/* 사이드바 */}
      <aside className="sidebar">
        <div className="sidebar-top">
          <div className="sidebar-title">방과후 관리</div>
          <div className="divider"></div>
          <nav className="menu">
            <div
              className="menu-item"
              onClick={() => navigate("/")}
              style={{ cursor: "pointer" }}
            >
              방과후 등록
            </div>
            <div className="divider"></div>
            <div
              className="menu-item"
              onClick={() => navigate("/apply-list")}
              style={{ cursor: "pointer" }}
            >
              신청내역
            </div>
            <div className="divider"></div>
            <div
              className="menu-item active"
              onClick={() => navigate("/attendance")}
              style={{ cursor: "pointer" }}
            >
              출석하기
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

      {/* 메인 영역 */}
      <main className="main">
        <div className="main-header">
          <h2 className="main-title">출석통계</h2>
          <div className="header-buttons">
            <button className="btn-check">출석체크</button>
            <button className="btn-stats">출석통계</button>
          </div>
        </div>

        {/* 검색 박스 */}
        <div className="search-box">
          <label className="search-label">방과후 검색</label>
          <input type="text" placeholder="방과후를 선택하세요" />
        </div>

        {/* 테이블 */}
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
            <button className="apply-btn">인원보기</button>
            <span className="dot"></span>
          </div>
        </div>
      </main>
    </div>
  );
}

// 라우터 설정
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/attendance" element={<AttendanceStats />} />
      </Routes>
    </Router>
  );
}

export default App;
