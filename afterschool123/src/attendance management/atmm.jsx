// attendance management/atmm.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./atmm.css";

function Atmm() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="atmm-container">
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
            <div className="menu-item active">신청현황</div>
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
          <h2>수강중인 방과후</h2>
          <div className="header-buttons">
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
                <th>강사</th>
                <th>시간</th>
                <th>관리</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>웹디자인</td>
                <td>박철수</td>
                <td>월,목: 16:00~21:00</td>
                <td className="actions">
                  <button
                    className="view-btn"
                    onClick={() => setIsModalOpen(true)}
                  >
                    보기
                  </button>
                  <button className="cancel-btn">취소</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>

      {/* 모달 */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h3>나의 출석률</h3>
              <button
                className="close-btn"
                onClick={() => setIsModalOpen(false)}
              >
                ✕
              </button>
            </div>
            <div className="modal-body">
              <div className="stat-box">
                <span>출석</span>
                <div className="stat-value">20</div>
              </div>
              <div className="stat-box">
                <span>결석</span>
                <div className="stat-value">13</div>
              </div>
              <div className="stat-box">
                <span>사유</span>
                <div className="stat-value">2</div>
              </div>
              <div className="stat-box">
                <span>출석률</span>
                <div className="stat-value">45%</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Atmm;
