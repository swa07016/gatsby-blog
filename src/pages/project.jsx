import React from 'react';
import { Layout, Row, Col } from 'antd';
import Header from '../components/PageLayout/Header';
import SidebarWrapper from '../components/PageLayout/Sidebar';
import SEO from '../components/Seo';
import ProjCard from '../components/ProjCard';

const Project = () => (
  <Layout className="outerPadding">
    <Layout className="container">
      <SEO
        title="Project"
        description="Hello folks Seonghoon here. These are Seonghoon's projects. Find me on github - swa07016."
        path="/project"
        keywords={['Seonghoon', 'Jeong', 'swa07016', 'Javascript', 'ReactJS', 'NodeJS', 'Project', 'technology']}
      />
      <Header />
      <SidebarWrapper>
        <div className="marginTopTitle">
          <h1 className="titleSeparate">Project</h1>
        </div>
        <Row gutter={[30, 20]}>
          <Col key="MEALKHU" xs={24} sm={24} md={12} lg={8}>
            <ProjCard
              img="mealkhu.png"
              name="MEALKHU"
              description="경희대생들을 위한 음식점 웹서비스"
              color="#940f0f"
            />
          </Col>
          <Col key="StickBoard_KakaoMap" xs={24} sm={24} md={12} lg={8}>
            <ProjCard
              img="kakaomap.png"
              name="StickBoard_KakaoMap"
              description="StickyBoard 카카오맵 컴포넌트"
              color="#ffc107"
            />
          </Col>
		  <Col key="WeatherBoard" xs={24} sm={24} md={12} lg={8}>
            <ProjCard
              img="weatherboard.png"
              name="WeatherBoard"
              description="날씨 모니터링 대시보드"
              color="#03a9f4"
            />
          </Col>
        </Row>
      </SidebarWrapper>
    </Layout>
  </Layout>
);

export default Project;
