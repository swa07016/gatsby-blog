import React from 'react';
import { Link } from 'gatsby';
import Config from '../../../config';
import Utils from '../../utils/pageUtils';
import style from './projs.module.less';

const ProjCard = (props) => {
  const {
    img, name, description, color,
  } = props;
  const projectPage = Config.pages.project;
  return (
    <Link className={style.projCard} to={Utils.resolvePageUrl(projectPage, name)}>
      <div className={style.projCard}>
        <div
          className={style.projImg}
          style={{
            backgroundImage: `url(${img})`,
          }}
        />
        <div className={style.pd20px}>
          <div className="textCenter">
            <h4 style={{ color: `${color}` }}>
              {name}
            </h4>
          </div>
          <p className="textCenter">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProjCard;
