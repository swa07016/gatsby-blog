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

const WeatherBoard = () => (
  <Layout className="outerPadding">
    <Layout className="container">
      <SEO
        title="WeatherBoard"
        description=""
        path="/projects/WeatherBoard"
        keywords={['stickyboard', 'WeatherBoard', '@stickyboard/kakao-map', 'stickyboard-kakao-map']}
      />
      <Header />
      <SidebarWrapper>
        <div className={`marginTopTitle ${style.tagsList}`}>
          <h1>
            WeatherBoard
          </h1>
          <div className={style.bannerImgContainer}>
            <img width="100%" src="../../weatherboard.png" className={style.bannerImg} alt="weatherboard" />
          </div>

          <h3>Project Description</h3>
          <p>
            <a href="https://docs.stickyboard.co.kr/" target="_blank" rel="noopener noreferrer">StickyBoard</a>
            는 개발자라면 누구나 쉽게 웹 기반 대시보드와 관리자 페이지를 만들 수 있게 해주는 오픈소스 스타터 키트입니다.
            WeatherBoard는 StickyBoard로 만들어진 날씨 모니터링 대시보드입니다.
            <br />
            <br />
			저는 WeatherBoard에서
			  <a href="https://www.npmjs.com/package/@stickyboard/kakao-map" target="_blank" rel="noopener noreferrer">@stickyboard/kakao-map</a>를 이용하여 전국날씨지도 부분을 개발했습니다.
          </p>
          <br />

          <h3>Site URL</h3>
          <a href="https://master-weather-board-soaple.endpoint.ainize.ai/mapview/kakaomap" target="_blank" rel="noopener noreferrer">https://master-weather-board-soaple.endpoint.ainize.ai/mapview/kakaomap</a>
          <br />
          <br />

          <h3>Github</h3>
          <a href="https://github.com/soaple/weather-board" target="_blank" rel="noopener noreferrer">https://github.com/soaple/weather-board</a>
          <br />
          <br />

          <h3>Tech Stack</h3>
          <code className="language-text" style={styles.techStack}>ReactJS</code>
          <code className="language-text" style={styles.techStack}>@stickyboard/kakao-map</code>
		  <code className="language-text" style={styles.techStack}>Openweathermap Api</code>
        </div>
      </SidebarWrapper>
    </Layout>
  </Layout>
);

export default WeatherBoard;
