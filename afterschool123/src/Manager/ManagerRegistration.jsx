import React from "react";
import "./ManagerRegistration.css";

function Manager() {
  return (
    <div className="student-container">
      {/* 사이드바 */}
      <aside className="sidebar">
        <div className="sidebar-top">
          <div className="sidebar-title">방과후 관리</div>
          <div className="divider"></div>
          <nav className="menu">
            <div className="menu-item active">학생등록</div>
            <div className="divider"></div>
            <div className="menu-item">선생님등록</div>
            <div className="divider"></div>
          </nav>
        </div>

        <div className="sidebar-footer">
          <div className="profile">
            <div className="circle"></div>
            <div className="profile-info">
              <p className="admin">관리자</p>
              <p className="email">sdh420208@sdh.hs.kr</p>
            </div>
          </div>
          <button className="logout">로그아웃</button>
        </div>
      </aside>

      {/* 메인 영역 */}
      <main className="main-content">
        <div className="main-header">
          <h2>학생신청목록</h2>
          <div className="header-buttons">
            <button className="btn-sub">학생등록</button>
            <button className="btn-main active">학생목록</button>
          </div>
        </div>

        {/* 검색 영역 */}
        <div className="search-box">
          <label>검색</label>
          <input type="text" placeholder="학생이름을 입력하세요" />
        </div>

        {/* 표 영역 */}
        <div className="table-wrapper">
          <table className="custom-table">
            <thead>
              <tr>
                <th>학생 정보</th>
                <th>학번</th>
                <th>전화번호</th>
                <th>처리</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>김철수</td>
                <td>20301</td>
                <td>010-1111-1111</td>
                <td>
                  <button className="btn-approve">수락</button>
                  <button className="btn-reject">거절</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default Manager;
