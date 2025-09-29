// AfterschoolDetail.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./AfterschoolDetail.css";

const AfterschoolDetail = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      {/* 사이드바 */}
      <aside className="sidebar">
        <div className="sidebar-top">
          <div className="sidebar-title">방과후 관리</div>
          <div className="divider"></div>
          <nav className="menu">
            {/* 메뉴 클릭 시 경로 이동 */}
            <div
              className="menu-item"
              onClick={() => navigate("/")}
              style={{ cursor: "pointer" }}
            >
              방과후 신청
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

      {/* 메인 */}
      <main className="main">
        <h1 className="page-title">상세페이지</h1>

        {/* 상단 버튼 */}
        <div className="top-buttons">
          {/* 목록으로 돌아가기 */}
          <button
            className="back-btn"
            onClick={() => navigate("/apply-list")}
          >
            목록으로 돌아가기
          </button>
          <button className="apply-btn">신청하기</button>
        </div>

        {/* 수업 기본 정보 */}
        <section className="course-info">
          <div className="info-box">
            수업시간
            <br />
            월목금:17:00~21:00
          </div>
          <div className="info-box">
            수강대상
            <br />
            1,2,3학년
          </div>
          <div className="info-box">
            수강료
            <br />
            무료
          </div>
          <div className="info-box">
            기간
            <br />
            12주
          </div>
        </section>

        {/* 상세 정보 */}
        <section className="detail-info">
          <h2>상세정보</h2>
          <div className="detail-item">
            <h3>방과후 설명</h3>
            <p>
              아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아
              아아아아아아아아아아아아아아아아아아아아아아아아아아아
              아아아아아아아아아아아아아아아아아아아아아아
            </p>
          </div>

          <div className="detail-item">
            <h3>준비물</h3>
            <p>열심히 할려는 마음</p>
          </div>

          <div className="detail-item">
            <h3>수강장소</h3>
            <p>내 마음속</p>
          </div>

          <div className="detail-bottom">
            <div className="period">
              <p>운영기간</p>
              <p>시작일 2025-03-29</p>
              <p>종료일 2025-12-29</p>
            </div>
            <div className="teacher">자바선생님</div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AfterschoolDetail;
