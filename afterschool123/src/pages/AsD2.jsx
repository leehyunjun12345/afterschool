// AsD2.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./AsD2.css";

function AsD2() {
  const navigate = useNavigate(); // useNavigate 훅

  return (
    <div className="asd2-container">
      {/* 사이드바 */}
      <aside className="sidebar">
        <div className="sidebar-top">
          <div className="sidebar-title">방과후 관리</div>
          <div className="divider"></div>
          <nav className="menu">
            {/* 클릭 시 / 로 이동 */}
            <div
              className="menu-item"
              onClick={() => navigate("/")}
              style={{ cursor: "pointer" }}
            >
              방과후 신청
            </div>
            <div className="divider"></div>

            {/* 현재 페이지 */}
            <div className="menu-item active">신청내역</div>
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

      {/* 메인 콘텐츠 */}
      <main className="main-content">
        <div className="main-header">
          <h2>신청내역</h2>
          <div className="header-buttons">
            {/* 클릭 시 AfterschoolDetail 페이지로 이동 */}
            <button
              className="btn-sub"
              onClick={() => navigate("/detail")}
            >
              수강중인 방과후
            </button>
            <button className="btn-main active">신청내역</button>
          </div>
        </div>

        {/* 테이블 */}
        <div className="table-wrapper">
          <table className="custom-table">
            <thead>
              <tr>
                <th>방과후</th>
                <th>상태</th>
                <th>승인</th>
                <th>신청취소</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>웹디자인</td>
                <td>
                  <span className="status blue">신청완료</span>
                </td>
                <td>
                  <span className="status red-dot"></span> 대기중
                </td>
                <td>
                  <button className="cancel-btn">취소</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default AsD2;
