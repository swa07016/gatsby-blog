import React from 'react';
import { Row, Col } from 'antd';
import ProgressBar from '../../Progress';

const SkillsProgress = () => (
  <div>
    <h2>My Skills</h2>
    <Row gutter={[20, 20]}>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar
          percent={75}
          text="Html / Css"
        />
        <ProgressBar
          percent={80}
          text="Javascript"
        />
        <ProgressBar
          percent={85}
          text="ReactJS"
        />
        <ProgressBar
          percent={80}
          text="NodeJS"
        />
      </Col>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar
          percent={70}
          text="Python"
        />
        <ProgressBar
          percent={70}
          text="C++"
        />
        <ProgressBar
          percent={60}
          text="Java"
        />
        <ProgressBar
          percent={50}
          text="Spring"
        />
      </Col>
    </Row>
  </div>
);

export default SkillsProgress;
