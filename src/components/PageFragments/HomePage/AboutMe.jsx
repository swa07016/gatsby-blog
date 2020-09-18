import React from 'react';
import { Row, Col } from 'antd';
import AboutTile from '../../AbouTile';
import { stripTags, domHtml } from '../../../utils/stripTags';

import SEO from '../../Seo';

const pageText = {
  paraOne: '안녕하세요! 저는 경희대학교 컴퓨터공학과에 재학중인 정성훈입니다.',
  paraTwo: `웹 기술과 <b>Javascript</b>에 관심이 많아 <b>ReactJS</b>와 <b>NodeJS</b>를 꾸준히 공부하며 개발하고 있습니다.
  <br>경희대학교 학우분들의 식사고민을 덜어 주기 위한 웹서비스 <b><a href="https://www.mealkhu.com" target="_blank">MEALKHU</a></b>를 운영하고 있습니다.
  <br>2020-10-12부터 대한민국 공군 웹디자인병으로 복무하고 있습니다.`,
};

const AboutMe = () => {
  const description = `${pageText.paraOne} ${stripTags(pageText.paraTwo)}`;
  return (
    <>
      <div>
        <SEO
          title="About"
          description={description}
          path=""
          keywords={['Rolwin', 'Reevan', 'Monteiro', 'FullStack developer', 'Javascript', 'ReactJS', 'NodeJS', 'Gatsby']}
        />
        <h1 className="titleSeparate">About Me</h1>
        <p>
          {pageText.paraOne}
        </p>
        <p dangerouslySetInnerHTML={domHtml(pageText.paraTwo)} />
      </div>
      <Row gutter={[20, 20]}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="likelion.png"
            alt="likelion image"
            textH4="멋쟁이사자처럼 8기"
            textH3="운영진"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="oss.png"
            alt="oss image"
            textH4="2020 오픈소스 컨트리뷰톤"
            textH3="멘티"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="rokaf.png"
            alt="rokaf image"
            textH4="대한민국 공군"
            textH3="웹디자인병"
          />
        </Col>
        {/* <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="motorcycle.png"
            alt="motorcycle image"
            textH4="Love Riding"
            textH3="Biker for life"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="web.png"
            alt="web image"
            textH4="Self Taught Programmer"
            textH3="Thanks to the Web Resources"
            height={60}
            width={60}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="graduation.png"
            alt="graduation image"
            textH4="Pursued B.Tech in"
            textH3="Computer Science"
            height={60}
            width={60}
          />
        </Col> */}
      </Row>
    </>
  );
};
export default AboutMe;
