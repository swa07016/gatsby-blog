import React from 'react';
import { Layout } from 'antd';
import Header from '../../components/PageLayout/Header';
import SidebarWrapper from '../../components/PageLayout/Sidebar';
import SEO from '../../components/Seo';
import style from './tags.module.less';

const styles = {
  techStack: {
    margin: '0.25rem',
  },
};

const KakaoMap = () => (
  <Layout className="outerPadding">
    <Layout className="container">
      <SEO
        title="@stickyboard/kakao-map"
        description=""
        path="/projects/StickBoard_KakaoMap"
        keywords={['stickyboard', 'kakaomap', '@stickyboard/kakao-map', 'stickyboard-kakao-map']}
      />
      <Header />
      <SidebarWrapper>
        <div className={`marginTopTitle ${style.tagsList}`}>
          <h1>
            StickBoard_KakaoMap
          </h1>
          <div className={style.bannerImgContainer}>
            <img width="100%" src="../../kakaomap.png" className={style.bannerImg} alt="stickyboard-kakaomap" />
          </div>

          <h3>Project Description</h3>
          <p>
            <a href="https://docs.stickyboard.co.kr/" target="_blank" rel="noopener noreferrer">StickyBoard</a>
            는 개발자라면 누구나 쉽게 웹 기반 대시보드와 관리자 페이지를 만들 수 있게 해주는 오픈소스 스타터 키트입니다.
            StickyBoard 사용자들이 국내에 특화된 지도를 사용할 수 있도록 Kakao map api를 활용한 지도 컴포넌트를 개발했습니다.
            <br />
            <br />
            {' '}
            현재는 기본 지도 렌더링, 마커 이미지 커스터마이징, 인포 윈도우 커스터마이징, 지도 위 도형(원) 표시 등의 적은 기능만을 제공합니다.
            <br />
            앞으로 꾸준히 기여하면서 마커 클러스터링 등 여러 기능을 추가할 예정입니다.
          </p>
          <br />

          <h3>Npm URL</h3>
          <a href="https://www.npmjs.com/package/@stickyboard/kakao-map" target="_blank" rel="noopener noreferrer">https://www.npmjs.com/package/@stickyboard/kakao-map</a>
          <br />
          <br />

          <h3>Github</h3>
          <a href="https://github.com/soaple/stickyboard-kakao-map" target="_blank" rel="noopener noreferrer">https://github.com/soaple/stickyboard-kakao-map</a>
          <br />
          <br />

          <h3>Tech Stack</h3>
          <code className="language-text" style={styles.techStack}>ReactJS</code>
          <code className="language-text" style={styles.techStack}>Kakao Map Api</code>
        </div>
      </SidebarWrapper>
    </Layout>
  </Layout>
);

export default KakaoMap;
