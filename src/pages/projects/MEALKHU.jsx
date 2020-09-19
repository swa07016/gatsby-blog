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

const MEALKHU = () => (
  <Layout className="outerPadding">
    <Layout className="container">
      <SEO
        title="mealkhu"
        description="밀쿠는 경희대생의 식사고민을 덜어주기 위해 개발된 웹서비스입니다.
경희대 주변의 식당, 술집, 카페를 카테고리, 가격별로 정리했습니다."
        path="/projects/MEALKHU"
        keywords={['MEALKHU', 'mealkhu', '경희대 음식점', '밀쿠', '경희대 식당', '경희대 술집', '경희대 카페']}
      />
      <Header />
      <SidebarWrapper>
        <div className={`marginTopTitle ${style.tagsList}`}>
          <h1>
            MEALKHU
          </h1>
          <div className={style.bannerImgContainer}>
            <img width="100%" src="../../mealkhu.png" className={style.bannerImg} alt="mealkhu" />
          </div>

          <h3>Project Description</h3>
          <p>
            MEALKHU는 경희대학교 학우분들의 식사고민을 덜어주기 위해 개발된 웹서비스입니다.
            평소 친구들과 밥을 먹을 때, 학교 주변 식당에 대한 정보가 적다보니 메뉴선정에 어려움이 있었습니다.
            <br />
            <br />
            {' '}
            그래서 경희대 주변 식당, 술집, 카페를 카테고리, 가격별로 정리한 서비스를 기획하고 개발하게 되었습니다.
            메뉴별, 가격별 필터링, 랜덤 추천 기능을 제공합니다.
            서비스 첫 날 고유방문자 983명을 기록했고 앞으로 지속적으로 기능들을 개선해나가며 서비스할 계획입니다.
          </p>
          <br />

          <h3>Site URL</h3>
          <a href="https://www.mealkhu.com/random" target="_blank" rel="noopener noreferrer">https://www.mealkhu.com</a>
          <br />
          <br />

          <h3>Github</h3>
          <a href="https://github.com/swa07016/mealkhu-client" target="_blank" rel="noopener noreferrer">https://github.com/swa07016/mealkhu-client</a>
          <br />
          <br />

          <h3>Tech Stack</h3>
          <code className="language-text" style={styles.techStack}>ReactJS</code>
          <code className="language-text" style={styles.techStack}>NodeJS</code>
          <code className="language-text" style={styles.techStack}>MongoDB</code>
          <code className="language-text" style={styles.techStack}>Kakao Map Api</code>
          <code className="language-text" style={styles.techStack}>Reactstrap</code>
        </div>
      </SidebarWrapper>
    </Layout>
  </Layout>
);

export default MEALKHU;
